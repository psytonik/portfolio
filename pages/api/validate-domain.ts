import {promises as dns} from 'dns';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getClientIp, rateLimit} from '../../utils/rateLimit';

const MAX_EMAIL_LENGTH = 254; // RFC 5321
const EMAIL_PATTERN = /^[^\s@]+@([a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}$/;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({error: 'Method not allowed'});
	}

	if (!rateLimit(`validate-domain:${getClientIp(req.headers)}`, 10, 60_000)) {
		return res.status(429).json({error: 'Too many requests. Please wait a minute and try again.'});
	}

	const {email} = req.body ?? {};

	if (typeof email !== 'string' || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
		return res.status(400).json({error: 'Invalid email format', validDomain: false});
	}

	const domain = email.split('@')[1].toLowerCase();

	try {
		const addresses = await dns.resolveMx(domain);
		const validDomain = addresses.length > 0;

		if (!validDomain) {
			return res.status(400).json({error: 'This domain cannot receive mail', validDomain});
		}
		return res.status(200).json({validDomain});
	} catch {
		// NXDOMAIN, SERVFAIL and friends all mean "we cannot deliver mail here"
		return res.status(400).json({error: 'This domain cannot receive mail', validDomain: false});
	}
}

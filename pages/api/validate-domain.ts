
import dns from 'dns';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    const domain = email.split('@')[1];

    try {
        const isValid = await new Promise<boolean>((resolve) => {
            dns.resolveMx(domain, (err, addresses) => {
                if (err || addresses.length === 0) {
                    resolve(false); // Domain exists but no MX records
                } else {
                    resolve(true);
                }
            });
        });
        if(!isValid) {
            return res.status(400).json({ error: 'Invalid domain address',validDomain: isValid });
        }
        // ✅ Always return 200 with result
        return res.status(200).json({ validDomain: isValid });
    } catch (error) {
        return res.status(500).json({
            error: 'Server error',
            details: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}

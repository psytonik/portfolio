interface Bucket {
	count: number;
	resetAt: number;
}

const buckets = new Map<string, Bucket>();

/**
 * Fixed-window rate limit, keyed by client IP.
 *
 * State lives in the function instance's memory, so this throttles a single
 * caller hitting one warm instance. It is not a shared limit across instances
 * or regions. Good enough to stop a contact form being hammered from a laptop;
 * put a real store (or the platform firewall) in front of it if the traffic
 * ever justifies it.
 */
export const rateLimit = (key: string, limit = 10, windowMs = 60_000): boolean => {
	const now = Date.now();
	const bucket = buckets.get(key);

	if (!bucket || bucket.resetAt <= now) {
		buckets.set(key, {count: 1, resetAt: now + windowMs});
		// Opportunistic cleanup so the map cannot grow without bound
		if (buckets.size > 1000) {
			for (const [k, v] of buckets) {
				if (v.resetAt <= now) buckets.delete(k);
			}
		}
		return true;
	}

	if (bucket.count >= limit) {
		return false;
	}

	bucket.count += 1;
	return true;
};

export const getClientIp = (headers: Record<string, string | string[] | undefined>): string => {
	const forwarded = headers['x-forwarded-for'];
	const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
	return value?.split(',')[0]?.trim() || 'unknown';
};

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {getClientIp, rateLimit} from '../utils/rateLimit';

describe('rateLimit', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('allows requests up to the limit and blocks the next one', () => {
		const key = `test-${Math.random()}`;
		expect(rateLimit(key, 3, 1000)).toBe(true);
		expect(rateLimit(key, 3, 1000)).toBe(true);
		expect(rateLimit(key, 3, 1000)).toBe(true);
		expect(rateLimit(key, 3, 1000)).toBe(false);
	});

	it('starts a fresh window once the old one expires', () => {
		const key = `test-${Math.random()}`;
		expect(rateLimit(key, 1, 1000)).toBe(true);
		expect(rateLimit(key, 1, 1000)).toBe(false);

		vi.advanceTimersByTime(1001);
		expect(rateLimit(key, 1, 1000)).toBe(true);
	});

	it('counts each key separately', () => {
		const a = `a-${Math.random()}`;
		const b = `b-${Math.random()}`;
		expect(rateLimit(a, 1, 1000)).toBe(true);
		expect(rateLimit(a, 1, 1000)).toBe(false);
		expect(rateLimit(b, 1, 1000)).toBe(true);
	});
});

describe('getClientIp', () => {
	it('takes the first address from x-forwarded-for', () => {
		expect(getClientIp({'x-forwarded-for': '203.0.113.1, 70.41.3.18'})).toBe('203.0.113.1');
	});

	it('handles the header arriving as an array', () => {
		expect(getClientIp({'x-forwarded-for': ['203.0.113.9']})).toBe('203.0.113.9');
	});

	it('falls back to "unknown" when the header is missing', () => {
		expect(getClientIp({})).toBe('unknown');
	});
});

const {i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = {
	i18n,
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{key: 'X-Content-Type-Options', value: 'nosniff'},
					{key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
					{key: 'X-Frame-Options', value: 'SAMEORIGIN'},
					{key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
				],
			},
		]
	},
};

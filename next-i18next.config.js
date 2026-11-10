module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'he', 'ru'],
		// The UI is not translated yet: do not redirect visitors to /he or /ru
		// based on their browser language until it is.
		localeDetection: false,
	},
	localePath:
		typeof window === 'undefined'
			? require('path').resolve('./public/locales')
			: '/locales',
}

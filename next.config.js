const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  turbopack: {}
});

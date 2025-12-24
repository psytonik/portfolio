const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  turbopack: {}
});

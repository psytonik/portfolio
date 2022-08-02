const withPWA = require('next-pwa')
/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
});

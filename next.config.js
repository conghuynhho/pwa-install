/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    dynamicStartUrl: false,
    cacheStartUrl: false,
    cacheOnFrontEndNav: false,
  },
})

module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa');

// default config: https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  reactStrictMode: true,
  env: {
    test: 'test'
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  },
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'build'
});

module.exports = nextConfig;

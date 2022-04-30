/**
 * @type {import('next').NextConfig}
 */

// default config: https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68
const nextConfig = {
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
}

module.exports = nextConfig

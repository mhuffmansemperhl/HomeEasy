/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: false,
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
        },
        {
          protocol: 'https',
          hostname: 'realtor-admin-panel.vercel.app',
          pathname: '/**',
        }
      ],
    },
}

module.exports = nextConfig

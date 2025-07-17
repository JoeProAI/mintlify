/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mintlify specific configuration
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mintlify.com'],
  },
  // This allows Mintlify to handle its own routing
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/_mintlify/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

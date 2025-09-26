import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.baronspubs.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.meadehall.co.uk',
      },
    ],
  },
};

export default nextConfig;

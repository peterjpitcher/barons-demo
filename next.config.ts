import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.baronspubs.com',
      },
    ],
  },
};

export default nextConfig;

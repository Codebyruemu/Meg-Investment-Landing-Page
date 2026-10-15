import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/services',
        destination: '/investment-opportunities',
      },
      {
        source: '/opportunities',
        destination: '/investment-opportunities',
      },
    ];
  },
};

export default nextConfig;

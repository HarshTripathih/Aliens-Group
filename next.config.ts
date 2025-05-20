import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1b9peg0jj5bry.cloudfront.net',
        pathname: '**', // allow all paths under the domain
      },
    ],
  },
};

export default nextConfig;

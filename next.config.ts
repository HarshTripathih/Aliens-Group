import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1b9peg0jj5bry.cloudfront.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/', // Redirect to homepage or relevant page
        permanent: true,
      },
      {
        source: '/home.php',
        destination: '/', // Example redirect
        permanent: true,
      },
      {
        source: '/career.php',
        destination: '/maintenance', // Redirect to your new contact page
        permanent: true,
      },
      // Add more old routes as needed
    ];
  },
};

export default nextConfig;

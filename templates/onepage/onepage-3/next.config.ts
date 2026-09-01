import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/templates/onepage/onepage-3',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

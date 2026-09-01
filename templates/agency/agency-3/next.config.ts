import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/templates/agency/agency-3',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

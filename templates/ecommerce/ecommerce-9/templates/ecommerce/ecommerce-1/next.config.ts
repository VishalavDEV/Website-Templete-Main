import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/templates/ecommerce/ecommerce-1",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export mode and basePath for production builds
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/arda-homepage",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

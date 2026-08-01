import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
};

export default nextConfig;

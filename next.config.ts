import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cynthiamuge.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/record", permanent: true },
      { source: "/empowerment", destination: "/record", permanent: true },
      { source: "/volleyball/rules", destination: "/boso/volleyball", permanent: true },
      { source: "/football/rules", destination: "/boso/football", permanent: true },
    ];
  },
};

export default nextConfig;

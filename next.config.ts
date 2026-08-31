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
      { source: "/about/festival", destination: "/boso", permanent: true },
      { source: "/volleyball/rules", destination: "/boso/volleyball", permanent: true },
      { source: "/football/rules", destination: "/boso/football", permanent: true },
      { source: "/register/volleyball", destination: "/boso/volleyball", permanent: true },
      { source: "/register/football", destination: "/boso/football", permanent: true },
    ];
  },
};

export default nextConfig;

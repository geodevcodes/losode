import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "pravatar.cc",
      },
      {
        protocol: "http",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "i.imgflip.com",
      },
      {
        protocol: "https",
        hostname: "test.com",
      },
      {
        protocol: "https",
        hostname: "sanbercode.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const isDev = process.env.NODE_ENV === "development";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: !isDev,
  aggressiveFrontEndNavCaching: !isDev,
  reloadOnOnline: !isDev,
  disable: isDev,
  workboxOptions: {
    disableDevLogs: true,
  },
});

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
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "http",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
      },
    ],
  },
};

export default withPWA(nextConfig);

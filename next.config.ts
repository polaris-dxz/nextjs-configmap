import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    HOST: process.env.HOST || "localhost",
    CONFIG_VALUE: process.env.CONFIG_VALUE || "Default Value",
  },
};

export default nextConfig;

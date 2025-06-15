import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST || "localhost",
    NEXT_PUBLIC_CONFIG_VALUE: process.env.NEXT_PUBLIC_CONFIG_VALUE || "Default Value",
    NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION || version,
  },
};

export default nextConfig;

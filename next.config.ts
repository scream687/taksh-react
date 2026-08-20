import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack infers the project root by walking up for a lockfile. The home
  // directory has its own package.json/lockfiles and a src/proxy.ts, so without
  // this it resolves the root to ~ and tries to compile that unrelated file.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

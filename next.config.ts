import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Small Tailwind bundle + landing page = mostly first-time visitors.
    // Inlining the CSS removes the render-blocking stylesheet request.
    inlineCss: true,
  },
};

export default nextConfig;

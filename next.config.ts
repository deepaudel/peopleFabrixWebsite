import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Platform's content was merged into the homepage - keep old links/
      // bookmarks working with a permanent redirect instead of a 404.
      {
        source: "/platform",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

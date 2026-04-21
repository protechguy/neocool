import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Only apply no-store to HTML documents and API responses — not to
        // hashed static assets, images, fonts, robots.txt, or sitemap.xml.
        source: "/((?!_next/static|_next/image|images|.*\\.(?:ico|svg|png|jpg|jpeg|webp|avif|woff2?|ttf|xml|txt|map)$).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

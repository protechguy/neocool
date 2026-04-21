import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js ships an inline bootstrap script; 'unsafe-inline' is required unless nonces are wired up.
      "script-src 'self' 'unsafe-inline'",
      // Tailwind / framer-motion inject inline styles.
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Prevent stale HTML from caching (workaround while hydration mismatches
        // are investigated — d0789b5). Excludes hashed static chunks, the image
        // pipeline, favicon, and public asset extensions so they can cache normally.
        source: "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff2?|ttf|eot)).*)",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;

# Neocool

Marketing and order-request site for Neocool — precision thermal mods (Stage 1 thermal pad, Stage 2 copper heatsink) for the MacBook Neo.

Built with Next.js 16 (App Router, Turbopack), React 19.2, Tailwind CSS v4, `react-hook-form` + Zod v4, `framer-motion`, and Nodemailer.

## Requirements

- Node.js 20.9+ (per Next.js 16)
- npm / pnpm / yarn / bun
- An SMTP account for outbound order emails

## Setup

```bash
npm install
cp .env.example .env.local   # fill in SMTP credentials
npm run dev                  # http://localhost:3000
```

See `.env.example` for the required environment variables.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Dev server (Turbopack) on port 3000       |
| `npm run build` | Production build                          |
| `npm run start` | Serve the production build                |
| `npm run lint`  | ESLint (flat config, via `eslint-config-next`) |

There is no `next lint` in Next 16 — use `npm run lint` (ESLint CLI) directly.

## Project layout

```
src/
  app/                  # App Router pages, layouts, route handlers
    api/order/route.ts  # POST endpoint that rate-limits + emails order requests
    layout.tsx          # Root layout, metadata, fonts
    page.tsx            # Home
    stage-1/, stage-2/  # Product pages
    order/              # Order form page
    robots.ts, sitemap.ts
  components/           # UI, layout, motion, product, home, order
  lib/
    constants.ts        # Site and product copy
    email.ts            # Nodemailer transport + order email (HTML-escaped)
    rate-limit.ts       # In-memory per-IP rate limiter
    validators.ts       # Zod schema for the order form
  types/
public/images/          # Static assets (hero background, etc.)
```

## Order flow

1. `src/components/order/OrderForm.tsx` (client) validates with Zod and posts JSON to `/api/order`.
2. `src/app/api/order/route.ts` rate-limits (5 requests / 10 min / IP), re-validates the payload, and calls `sendOrderEmail`.
3. `src/lib/email.ts` delivers an HTML + plain-text email to `ORDER_EMAIL_TO` via SMTP. All user-supplied fields are HTML-escaped.

The in-memory rate limiter is per-process; for multi-instance deploys (e.g. PM2 cluster mode) swap it for Redis/Upstash.

## Deployment

A PM2 config is included (`ecosystem.config.js`) for self-hosted deployments:

```bash
npm run build
pm2 start ecosystem.config.js
```

Required env vars (`SMTP_*`, `ORDER_EMAIL_TO`) must be present in the process environment.

## Caching

`next.config.ts` sets `Cache-Control: no-store, must-revalidate` on HTML documents and API responses only — `_next/static`, `_next/image`, `public/images/*`, and sitemap/robots are left cacheable.

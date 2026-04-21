import { ImageResponse } from "next/og";
import { PRODUCTS, SITE } from "@/lib/constants";

const product = PRODUCTS["stage-2"];

export const alt = `${SITE.name} Stage 2 — ${product.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1a0f03 0%, #2d1808 40%, #042d4a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#fbbf24",
            marginBottom: 32,
          }}
        >
          {SITE.name} · Stage 2
        </div>
        <div
          style={{
            fontSize: 108,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {product.title}
        </div>
        <div style={{ marginTop: 36, fontSize: 34, color: "#d4a374" }}>{product.tagline}</div>
        <div
          style={{
            marginTop: 60,
            fontSize: 28,
            color: "#fbbf24",
            fontWeight: 600,
            display: "flex",
            gap: 24,
          }}
        >
          <span>{product.price}</span>
          <span style={{ color: "#7a5a3a" }}>·</span>
          <span>Up to 23°C reduction</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

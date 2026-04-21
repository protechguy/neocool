import { ImageResponse } from "next/og";
import { PRODUCTS, SITE } from "@/lib/constants";

const product = PRODUCTS["stage-1"];

export const alt = `${SITE.name} Stage 1 — ${product.title}`;
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
            "linear-gradient(135deg, #010a13 0%, #042d4a 50%, #064a6e 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#38bdf8",
            marginBottom: 32,
          }}
        >
          {SITE.name} · Stage 1
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
        <div style={{ marginTop: 36, fontSize: 34, color: "#8ab4c7" }}>{product.tagline}</div>
        <div
          style={{
            marginTop: 60,
            fontSize: 28,
            color: "#7dd3fc",
            fontWeight: 600,
            display: "flex",
            gap: 24,
          }}
        >
          <span>{product.price}</span>
          <span style={{ color: "#4a7a90" }}>·</span>
          <span>Up to 10°C reduction</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

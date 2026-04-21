import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — Precision thermal mods for MacBook Neo`;
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
            "linear-gradient(135deg, #010a13 0%, #042d4a 45%, #064a6e 75%, #0e8aaa 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#38bdf8",
            marginBottom: 40,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Keep Your MacBook Neo</span>
          <span style={{ color: "#7dd3fc" }}>Ice Cold.</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 30,
            color: "#8ab4c7",
            maxWidth: 900,
          }}
        >
          Two-stage thermal modification system — precision-cut thermal pads and custom copper heatsinks.
        </div>
      </div>
    ),
    { ...size },
  );
}

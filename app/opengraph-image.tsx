// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants";

export const alt = "Luxorum Creative";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B0F19",
          color: "#F8FAFC",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg,#6366F1,#A855F7)",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700 }}>{SITE_CONFIG.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 800, letterSpacing: 0 }}>
            Premium websites, branding, and AI automation for Gulf businesses.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#94A3B8" }}>
            Dubai, United Arab Emirates
          </div>
        </div>
      </div>
    ),
    size
  );
}

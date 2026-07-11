import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 24,
          backgroundColor: "#0A0908",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#FF6B1A",
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          Stanley B.
        </div>
        <div style={{ fontSize: 36, color: "#F2ECE3", maxWidth: 900 }}>
          Desenvolvedor Pleno-Sênior full-stack — React, Next.js, Node,
          Flutter — com um fluxo de desenvolvimento AI-first.
        </div>
      </div>
    ),
    { ...size }
  );
}

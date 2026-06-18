import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f172a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#5eead4", fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>SOFTWARE ENGINEER</div>
        <div style={{ marginTop: 28, fontSize: 82, fontWeight: 800, lineHeight: 1 }}>Bledar Bunjaku</div>
        <div style={{ marginTop: 30, maxWidth: 920, color: "#cbd5e1", fontSize: 34, lineHeight: 1.35 }}>
          Scalable SaaS platforms, AI systems and real-time applications.
        </div>
      </div>
    ),
    size,
  );
}

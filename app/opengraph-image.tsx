import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alexandre Del Raso Filho — Desenvolvedor Full Stack";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#050505",
          color: "#f5f5f4",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8a8a8a",
          }}
        >
          Portfólio pessoal
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 128,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          Alexandre
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#a3a3a3",
          }}
        >
          Desenvolvedor Full Stack · Salvador, BA
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 22,
            color: "#525252",
            letterSpacing: 4,
          }}
        >
          0x41
        </div>
      </div>
    ),
    { ...size }
  );
}

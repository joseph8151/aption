import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bold = await readFile(join(process.cwd(), "app/fonts/pretendard-ttf/PretendardBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#122240",
          padding: "80px",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "88px",
              height: "88px",
              borderRadius: "16px",
              backgroundColor: "#7A2331",
              color: "#F7F4EC",
              fontSize: "48px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: "72px", fontWeight: 700, color: "#F7F4EC" }}>
            Apti<span style={{ color: "#C98D97" }}>ON</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: "#F7F4EC", textAlign: "center" }}>
          기관별 실전 회차 · NCS · 공기업 · 대기업 인적성
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#C9BFB3",
            letterSpacing: "0.08em",
          }}
        >
          합격을 위한 실전 감각을 ON.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Pretendard", data: bold, weight: 700, style: "normal" }],
    }
  );
}

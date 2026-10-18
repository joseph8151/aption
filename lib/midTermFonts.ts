// "중기(mid-term)" 서브 브랜드 전용 폰트 — TOPIK·EPS 카테고리 페이지에서 쓰는 것과 동일한 세트.
// 홈 "이번 달 필기"(Pretendard/IBM Plex Mono)와는 의도적으로 분리된 톤.
import localFont from "next/font/local";
import { Fragment_Mono, Noto_Serif_KR } from "next/font/google";

export const wantedSans = localFont({
  variable: "--font-wanted-sans",
  display: "swap",
  src: [
    { path: "../app/fonts/wanted-sans/WantedSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/wanted-sans/WantedSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/wanted-sans/WantedSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/wanted-sans/WantedSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["700", "900"],
  preload: false,
});

export const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

export const midTermFontVars = `${wantedSans.variable} ${notoSerifKr.variable} ${fragmentMono.variable}`;

export const midTermColors = {
  bg: "#F7F4EC",
  ink: "#1A1713",
  card: "#FFFFFF",
  line: "#E2DDD2",
  button: "#122240",
  accent: "#7A2331",
};

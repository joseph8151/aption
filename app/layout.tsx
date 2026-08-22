import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { siteConfig } from "@/lib/config";

const pretendard = localFont({
  variable: "--font-pretendard",
  display: "swap",
  src: [
    { path: "./fonts/pretendard/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/pretendard/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/pretendard/Pretendard-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/pretendard/Pretendard-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/pretendard/Pretendard-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/pretendard/Pretendard-Black.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "AptiON 앱티온 | NCS·공기업·인적성 문제집 전문",
    template: "%s | AptiON",
  },
  description:
    "NCS 수리, 자료해석, 문제해결, 의사소통부터 공기업·대기업 인적성까지. 유형별 집중 문제집과 실전 모의고사를 만나보세요.",
  openGraph: {
    title: "AptiON 앱티온 | NCS·공기업·인적성 문제집 전문",
    description:
      "NCS 수리, 자료해석, 문제해결, 의사소통부터 공기업·대기업 인적성까지. 유형별 집중 문제집과 실전 모의고사를 만나보세요.",
    siteName: "AptiON",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

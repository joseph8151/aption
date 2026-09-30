import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
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

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "AptiON 앱티온 | 이번 달 필기, 기관별 실전 회차",
    template: "%s | AptiON",
  },
  description:
    "농축협·신협·인천 공무직 등 이번 달 필기시험 일정에 맞춘 기관별 실전 회차. NCS·공기업·인적성 문제집도 함께 만나보세요.",
  openGraph: {
    title: "AptiON 앱티온 | 이번 달 필기, 기관별 실전 회차",
    description:
      "농축협·신협·인천 공무직 등 이번 달 필기시험 일정에 맞춘 기관별 실전 회차. NCS·공기업·인적성 문제집도 함께 만나보세요.",
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
      className={`${pretendard.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <AnnouncementBar />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

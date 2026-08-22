import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { siteConfig } from "@/lib/config";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
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
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-offwhite text-ink">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

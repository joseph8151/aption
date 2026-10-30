import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import FloatingConsultButton from "@/components/FloatingConsultButton";
import SelectionTray from "@/components/SelectionTray";
import { ProductSelectionProvider } from "@/lib/ProductSelectionContext";
import { siteConfig } from "@/lib/config";
import { siteKeywords } from "@/lib/seoKeywords";

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

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["700", "900"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "AptiON 앱티온 | 이번 달 필기, 기관별 실전 회차",
    template: "%s | AptiON",
  },
  description:
    "농축협·신협·부산·수원 등 이번 달 필기시험 일정에 맞춘 기관별 실전 회차. NCS·공기업·인적성 문제집도 함께 만나보세요.",
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    title: "AptiON 앱티온 | 이번 달 필기, 기관별 실전 회차",
    description:
      "농축협·신협·부산·수원 등 이번 달 필기시험 일정에 맞춘 기관별 실전 회차. NCS·공기업·인적성 문제집도 함께 만나보세요.",
    siteName: "AptiON",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "203f7b7616543fd228f9d459d560a2c329ad755b",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brandFullName,
  alternateName: [siteConfig.brandName, siteConfig.brandNameKo],
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/icon`,
  email: siteConfig.contactEmail,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.brandName,
  url: siteConfig.siteUrl,
  inLanguage: "ko-KR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${pretendard.variable} ${plexMono.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <ProductSelectionProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileStickyCTA />
          <FloatingConsultButton />
          <SelectionTray />
        </ProductSelectionProvider>
      </body>
    </html>
  );
}

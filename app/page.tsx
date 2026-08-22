import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BestProducts from "@/components/BestProducts";
import CategoryFinder from "@/components/CategoryFinder";
import WhyAptiON from "@/components/WhyAptiON";
import LearningSystem from "@/components/LearningSystem";
import ConcernSection from "@/components/ConcernSection";
import SalesBanner from "@/components/SalesBanner";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AptiON 앱티온 | NCS·공기업·인적성 문제집 전문",
  description:
    "NCS 수리, 자료해석, 문제해결, 의사소통부터 공기업·대기업 인적성까지. 유형별 집중 문제집과 실전 모의고사를 만나보세요.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <BestProducts />
      <CategoryFinder />
      <WhyAptiON />
      <LearningSystem />
      <ConcernSection />
      <SalesBanner />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

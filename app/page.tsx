import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ThisMonthSection from "@/components/ThisMonthSection";
import StatsSection from "@/components/StatsSection";
import BestProducts from "@/components/BestProducts";
import CategoryFinder from "@/components/CategoryFinder";
import QuickFinder from "@/components/QuickFinder";
import WhyAptiON from "@/components/WhyAptiON";
import LearningSystem from "@/components/LearningSystem";
import DontStudyEverything from "@/components/DontStudyEverything";
import ConcernSection from "@/components/ConcernSection";
import VisualBreak from "@/components/VisualBreak";
import PackageSection from "@/components/PackageSection";
import PersonaSection from "@/components/PersonaSection";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "AptiON 앱티온 | 이번 달 필기, 기관별 실전 회차",
  description:
    "농축협·신협·인천 공무직 등 이번 달 필기시험 일정에 맞춘 기관별 실전 회차. NCS·공기업·인적성 문제집도 함께 만나보세요.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ThisMonthSection />
      <StatsSection />
      <BestProducts />
      <CategoryFinder />
      <QuickFinder />
      <WhyAptiON />
      <LearningSystem />
      <DontStudyEverything />
      <ConcernSection />
      <VisualBreak />
      <PackageSection />
      <PersonaSection />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

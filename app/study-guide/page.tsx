import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { studyGuides } from "@/data/studyGuides";
import { productsPageKeywords } from "@/lib/seoKeywords";

export const metadata: Metadata = {
  title: "학습 가이드",
  description: "NCS 수리능력·자료해석·문제해결·의사소통·공간지각 영역별 공부법과 실전 전략을 정리했습니다.",
  keywords: productsPageKeywords,
  alternates: { canonical: "/study-guide" },
};

export default function StudyGuideIndexPage() {
  return (
    <div className="section-y-tight bg-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">
            학습 가이드
          </span>
          <h1 className="text-display font-display font-bold text-navy">
            영역별로 어떻게 공부해야 할지 모르겠다면
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-gray sm:text-lg">
            NCS와 대기업 인적성 핵심 영역의 공부법과 실전 전략을 정리했습니다. 문제를 풀기 전에
            먼저 읽어보시면 도움이 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studyGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/study-guide/${guide.slug}`}
              className="group flex flex-col gap-3 rounded-[8px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_40px_-24px_rgba(20,18,15,0.28)]"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-lime-strong">
                {guide.area}
              </span>
              <h2 className="text-lg font-bold leading-snug text-navy">{guide.title}</h2>
              <p className="text-sm leading-relaxed text-text-gray">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

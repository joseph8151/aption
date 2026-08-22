import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "AptiON 문제집 선택, 구매, 상담과 관련해 자주 묻는 질문을 확인하세요.",
};

export default function FaqPage() {
  return (
    <div className="section-y-tight bg-white">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">FAQ</span>
          <h1 className="text-display font-black text-navy">자주 묻는 질문</h1>
          <p className="max-w-xl text-base leading-relaxed text-text-gray sm:text-lg">
            궁금한 점이 더 있으시면 상담 신청 또는 전화 문의를 이용해 주세요.
          </p>
        </div>

        <div className="w-full max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>

        <Link
          href="/consult"
          className="inline-flex items-center justify-center rounded-[14px] bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:bg-lime-strong"
        >
          상담 신청하기
        </Link>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "이용안내",
  description: "AptiON 문제집 상담부터 구매까지의 이용 절차를 안내합니다.",
};

const steps = [
  {
    title: "문제집 둘러보기",
    description: "시험별·영역별·난이도별 필터와 검색으로 필요한 문제집을 찾아보세요.",
  },
  {
    title: "상담 신청 또는 전화 문의",
    description: "상세페이지의 '구매 문의' 버튼 또는 상담 페이지에서 신청할 수 있습니다.",
  },
  {
    title: "맞춤 안내",
    description: "준비 시험과 현재 수준을 바탕으로 적합한 문제집과 구매 방법을 안내해드립니다.",
  },
  {
    title: "구매 진행",
    description: "안내받은 방법에 따라 결제 및 배송을 진행합니다.",
  },
];

export default function GuidePage() {
  return (
    <div className="section-y-tight bg-white">
      <Container className="flex max-w-3xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">
            이용안내
          </span>
          <h1 className="text-display font-black text-navy">AptiON은 이렇게 이용할 수 있어요</h1>
          <p className="text-base leading-relaxed text-text-gray sm:text-lg">
            현재 AptiON은 온라인 자동결제 대신 상담 신청과 전화 문의를 통해 상품 안내와
            구매를 진행하고 있습니다.
          </p>
        </div>

        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 rounded-[8px] border border-line bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-lime">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold text-navy">{step.title}</h2>
                <p className="text-sm leading-relaxed text-ink/60">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-2 rounded-[8px] bg-gray-light p-6">
          <h2 className="text-sm font-bold text-navy">운영시간 안내</h2>
          <p className="text-sm text-ink/65">
            {siteConfig.businessHours} · {siteConfig.businessHoursNote}
          </p>
          <p className="text-sm text-ink/65">
            전화 문의:{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-navy">
              {siteConfig.phoneNumber}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/consult"
            className="inline-flex items-center justify-center rounded-[6px] bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:bg-lime-strong"
          >
            상담 신청하기
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-[6px] border border-line px-7 py-3.5 text-base font-bold text-navy transition hover:border-navy/30"
          >
            FAQ 보기
          </Link>
        </div>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";
import ConsultForm from "@/components/ConsultForm";

export const metadata: Metadata = {
  title: "상담 신청",
  description:
    "준비 중인 시험과 어려운 영역을 알려주시면 적합한 AptiON 문제집을 안내해드립니다.",
};

export default async function ConsultPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; intent?: string }>;
}) {
  const { product, intent } = await searchParams;
  const initialIntent = intent === "구매" || intent === "상담" ? intent : undefined;

  return (
    <div className="section-y-tight bg-white">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">
              상담 신청
            </span>
            <h1 className="text-display font-display font-black text-navy">어떤 문제집이 필요한지 모르겠다면</h1>
            <p className="max-w-xl text-base leading-relaxed text-text-gray sm:text-lg">
              준비 중인 시험과 어려운 영역을 알려주시면 적합한 문제집을 안내해드립니다.
            </p>
          </div>
          <ConsultForm initialProduct={product} initialIntent={initialIntent} />
        </div>

        <aside className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 rounded-[8px] border border-line bg-white p-6">
            <h2 className="text-sm font-extrabold text-navy">상담 후 진행 순서</h2>
            <ol className="flex flex-col gap-2 text-sm text-text-gray">
              <li>1. 상담 신청</li>
              <li>2. 준비 시험·수준 확인 후 문제집 안내</li>
              <li>3. 구매 방법 안내 및 진행</li>
            </ol>
          </div>
        </aside>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";
import ConsultForm from "@/components/ConsultForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "상담 신청",
  description:
    "준비 중인 시험과 어려운 영역을 알려주시면 적합한 AptiON 문제집을 안내해드립니다.",
};

export default async function ConsultPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <div className="py-12 lg:py-16">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">상담 신청</span>
            <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
              어떤 문제집이 필요한지 모르겠다면
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              준비 중인 시험과 어려운 영역을 알려주시면 적합한 문제집을 안내해드립니다.
            </p>
          </div>
          <ConsultForm initialProduct={product} />
        </div>

        <aside className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 rounded-xl bg-navy p-6 text-white">
            <h2 className="text-lg font-bold">전화 상담이 더 편하신가요?</h2>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-3 text-base font-bold text-navy"
            >
              {siteConfig.phoneNumber}
            </a>
            <dl className="flex flex-col gap-1 text-sm text-white/70">
              <div className="flex justify-between gap-3">
                <dt>운영시간</dt>
                <dd>{siteConfig.businessHours}</dd>
              </div>
              <div className="text-xs text-white/45">{siteConfig.businessHoursNote}</div>
            </dl>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-line bg-white p-6">
            <h2 className="text-sm font-bold text-navy">상담 후 진행 순서</h2>
            <ol className="flex flex-col gap-2 text-sm text-ink/60">
              <li>1. 상담 신청 또는 전화 문의</li>
              <li>2. 준비 시험·수준 확인 후 문제집 안내</li>
              <li>3. 구매 방법 안내 및 진행</li>
            </ol>
          </div>
        </aside>
      </Container>
    </div>
  );
}

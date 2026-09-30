"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { products } from "@/data/products";
import { AreaKey, ExamKey, Product } from "@/lib/types";

const examOptions: { label: string; value: ExamKey }[] = [
  { label: "NCS", value: "ncs" },
  { label: "공기업", value: "public" },
  { label: "대기업 인적성", value: "corporate" },
];

const areaOptions: { label: string; value: AreaKey | "시간관리" }[] = [
  { label: "수리", value: "수리" },
  { label: "자료해석", value: "자료해석" },
  { label: "문제해결", value: "문제해결" },
  { label: "의사소통", value: "의사소통" },
  { label: "논리추리", value: "논리추리" },
  { label: "시간관리", value: "시간관리" },
];

const timeOptions = [
  { label: "1개월 이상", value: "long" },
  { label: "2~4주", value: "mid" },
  { label: "2주 미만", value: "short" },
] as const;

type TimeValue = (typeof timeOptions)[number]["value"];

function scoreProduct(
  product: Product,
  exam: ExamKey,
  area: AreaKey | "시간관리",
  time: TimeValue
): number {
  let score = 0;
  if (product.exam === exam) score += 4;

  if (area === "시간관리") {
    if (product.name.includes("시간단축") || product.shortDescription.includes("시간단축")) score += 4;
  } else if (product.area === area) {
    score += 4;
  }

  if (time === "short") {
    if (product.productType === "모의고사") score += 3;
    if (product.difficultyTags.includes("실전") || product.difficultyTags.includes("고난도")) score += 1;
  } else if (time === "mid") {
    if (product.difficultyTags.includes("실전")) score += 3;
  } else {
    if (product.difficultyTags.includes("입문") || product.difficultyTags.includes("기본")) score += 3;
  }

  if (product.badges.includes("BEST")) score += 1;
  return score;
}

export default function QuickFinder() {
  const [exam, setExam] = useState<ExamKey | null>(null);
  const [area, setArea] = useState<AreaKey | "시간관리" | null>(null);
  const [time, setTime] = useState<TimeValue | null>(null);

  const recommended = useMemo(() => {
    if (!exam || !area || !time) return [];
    return [...products]
      .map((p) => ({ product: p, score: scoreProduct(p, exam, area, time) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((r) => r.product);
  }, [exam, area, time]);

  const allSelected = Boolean(exam && area && time);

  return (
    <section className="section-y-tight bg-gray-light">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="QUICK FINDER" title="30초 만에 문제집 찾기" align="center" />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
          <QuickFinderStep
            step={1}
            question="어떤 시험을 준비하나요?"
            active
          >
            <div className="flex flex-wrap gap-2.5">
              {examOptions.map((opt) => (
                <OptionChip
                  key={opt.value}
                  label={opt.label}
                  active={exam === opt.value}
                  onClick={() => setExam(opt.value)}
                />
              ))}
            </div>
          </QuickFinderStep>

          <QuickFinderStep step={2} question="가장 어려운 영역은?" active={Boolean(exam)}>
            <div className="flex flex-wrap gap-2.5">
              {areaOptions.map((opt) => (
                <OptionChip
                  key={opt.value}
                  label={opt.label}
                  active={area === opt.value}
                  disabled={!exam}
                  onClick={() => setArea(opt.value)}
                />
              ))}
            </div>
          </QuickFinderStep>

          <QuickFinderStep step={3} question="시험까지 얼마나 남았나요?" active={Boolean(exam && area)}>
            <div className="flex flex-wrap gap-2.5">
              {timeOptions.map((opt) => (
                <OptionChip
                  key={opt.value}
                  label={opt.label}
                  active={time === opt.value}
                  disabled={!exam || !area}
                  onClick={() => setTime(opt.value)}
                />
              ))}
            </div>
          </QuickFinderStep>
        </div>

        {allSelected ? (
          <Reveal className="flex flex-col gap-6">
            <p className="text-center text-sm font-extrabold uppercase tracking-[0.16em] text-navy">
              Recommended for you
            </p>
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              {recommended.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

function QuickFinderStep({
  step,
  question,
  active,
  children,
}: {
  step: number;
  question: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-[8px] border border-line bg-white p-6 transition-opacity duration-300 sm:p-7 ${
        active ? "opacity-100" : "pointer-events-none opacity-40"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-extrabold text-lime">
          {step}
        </span>
        <span className="text-base font-extrabold text-navy sm:text-lg">{question}</span>
      </div>
      {children}
    </div>
  );
}

function OptionChip({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
        active
          ? "border-navy bg-navy text-white"
          : "border-line bg-white text-ink/70 hover:border-navy/30"
      }`}
    >
      {active ? <Check size={14} strokeWidth={2.75} /> : null}
      {label}
    </button>
  );
}

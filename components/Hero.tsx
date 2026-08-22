import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Clock3 } from "lucide-react";
import Container from "./Container";
import BookCover from "./BookCover";

const heroBooks = [
  {
    theme: "final" as const,
    eyebrow: "NCS",
    titleLines: ["Final", "Mock Test"],
    footer: "실전 → 고난도",
    bigNumber: 10,
    wrapClassName: "left-[32%] top-[4%] z-10 w-[42%] rotate-[9deg]",
  },
  {
    theme: "orange" as const,
    eyebrow: "NCS",
    titleLines: ["문제해결능력", "300제"],
    footer: "기본 → 실전",
    bigNumber: 300,
    wrapClassName: "left-[2%] top-[8%] z-20 w-[42%] rotate-[-8deg]",
  },
  {
    theme: "advanced" as const,
    eyebrow: "NCS",
    titleLines: ["자료해석", "고난도 200제"],
    footer: "ADVANCED",
    bigNumber: 200,
    wrapClassName: "left-[28%] top-[24%] z-30 w-[44%] rotate-[5deg]",
  },
  {
    theme: "lime" as const,
    eyebrow: "NCS",
    titleLines: ["수리능력", "300제"],
    footer: "기본 → 실전",
    bigNumber: 300,
    wrapClassName: "left-[0%] top-[34%] z-40 w-[46%] rotate-[-4deg]",
  },
];

const floatingCards = [
  { label: "300 QUESTIONS", icon: BarChart3, className: "left-[2%] top-[2%]" },
  { label: "10 MOCK TESTS", icon: CheckCircle2, className: "right-[0%] top-[42%]" },
  { label: "TIME TRAINING", icon: Clock3, className: "left-[4%] bottom-[2%]" },
];

const trustIndicators = ["유형별 집중", "200~500문제", "4단계 난이도", "실전 시간훈련"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#101828 1px, transparent 1px), linear-gradient(90deg, #101828 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-[55%_45%] lg:gap-10 lg:py-28">
        <div className="flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-gray-light px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-text-gray">
            NCS · PUBLIC ENTERPRISE · APTITUDE TEST
          </span>
          <h1 className="text-hero max-w-2xl font-black text-navy text-balance">
            합격을 위한
            <br />
            실전 감각을 <span className="text-lime-strong">ON</span>.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-text-gray sm:text-xl">
            NCS부터 공기업·대기업 인적성까지. 필요한 영역만 선택해 반복하고,
            실제 시험에서 풀어내는 속도를 만드세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-navy px-7 py-4 text-base font-bold text-white transition hover:bg-navy-2"
            >
              문제집 찾아보기
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/consult"
              className="inline-flex items-center justify-center rounded-[14px] border border-line bg-white px-7 py-4 text-base font-bold text-navy transition hover:border-navy/30"
            >
              내게 맞는 문제집 추천
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-strong" aria-hidden="true" />
                <span className="text-sm font-semibold text-text-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px] lg:h-[500px]">
          {heroBooks.map((book, i) => (
            <div key={i} className={`absolute ${book.wrapClassName}`}>
              <BookCover
                theme={book.theme}
                eyebrow={book.eyebrow}
                titleLines={book.titleLines}
                footer={book.footer}
                bigNumber={book.bigNumber}
                className="shadow-2xl ring-1 ring-black/5"
              />
            </div>
          ))}

          {floatingCards.map(({ label, icon: Icon, className }) => (
            <div
              key={label}
              className={`absolute z-50 hidden items-center gap-2 rounded-[12px] border border-line bg-white/95 px-3.5 py-2.5 shadow-[0_16px_32px_-16px_rgba(16,24,40,0.35)] backdrop-blur sm:flex ${className}`}
            >
              <Icon size={15} strokeWidth={2.25} className="text-lime-strong" />
              <span className="text-[11px] font-extrabold tracking-wide text-navy">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import Container from "./Container";
import BookCover from "./BookCover";

const heroBooks = [
  {
    accent: "navy" as const,
    eyebrow: "NCS",
    titleLines: ["Final", "Mock Test"],
    footer: "실전 → 고난도",
    wrapClassName: "left-[32%] top-[6%] z-10 w-[44%] rotate-[9deg]",
  },
  {
    accent: "orange" as const,
    eyebrow: "NCS",
    titleLines: ["문제해결능력", "300제"],
    footer: "기본 → 실전",
    wrapClassName: "left-[4%] top-[10%] z-20 w-[44%] rotate-[-8deg]",
  },
  {
    accent: "purple" as const,
    eyebrow: "NCS",
    titleLines: ["자료해석", "고난도 200제"],
    footer: "ADVANCED",
    wrapClassName: "left-[30%] top-[26%] z-30 w-[46%] rotate-[5deg]",
  },
  {
    accent: "blue" as const,
    eyebrow: "NCS",
    titleLines: ["수리능력", "300제"],
    footer: "기본 → 실전",
    wrapClassName: "left-[2%] top-[36%] z-40 w-[48%] rotate-[-4deg]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#17223b 1px, transparent 1px), linear-gradient(90deg, #17223b 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-24">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-tint px-3 py-1.5 text-xs font-bold text-blue">
            NCS · 공기업 · 대기업 인적성 문제집 전문
          </span>
          <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-navy text-balance sm:text-5xl lg:text-6xl">
            합격을 위한 실전 감각을
            <br />
            <span className="text-blue">ON</span> 하세요.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/65">
            NCS부터 공기업, 대기업 인적성까지.
            <br className="hidden sm:block" />
            취업 필기시험에 필요한 문제를 유형별·난이도별로 집중 훈련하세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition hover:bg-navy-dark"
            >
              문제집 전체 보기
            </Link>
            <Link
              href="/consult"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-bold text-navy transition hover:border-navy/40"
            >
              상담하고 추천받기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px] lg:h-[480px]">
          {heroBooks.map((book, i) => (
            <div key={i} className={`absolute ${book.wrapClassName}`}>
              <BookCover
                accent={book.accent}
                eyebrow={book.eyebrow}
                titleLines={book.titleLines}
                footer={book.footer}
                className="shadow-2xl ring-1 ring-black/5"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

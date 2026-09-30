import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import BookCover from "./BookCover";

const heroBooks = [
  {
    eyebrow: "농축협",
    titleLines: ["농축협", "직무능력", "실전"],
    footer: "5회 · 2026 하반기",
    bigNumber: 5,
    wrapClassName: "left-[6%] top-[10%] z-10 w-[40%] rotate-[-7deg]",
  },
  {
    eyebrow: "신협",
    titleLines: ["신협", "필기", "실전"],
    footer: "3회 · 11.7–8",
    bigNumber: 3,
    wrapClassName: "left-[30%] top-[2%] z-20 w-[40%] rotate-[3deg]",
  },
  {
    eyebrow: "인천",
    titleLines: ["인천 공무직", "일반상식", "실전"],
    footer: "8회 · 10.17",
    bigNumber: 8,
    wrapClassName: "left-[16%] top-[26%] z-30 w-[40%] rotate-[-2deg]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <Container className="relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-[55%_45%] lg:gap-10 lg:py-28">
        <div className="flex flex-col gap-8">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-text-gray">
            10월 마감 일정 · 농축협 11/22 · 신협 11/7 · 인천 공무직 10/17
          </span>
          <h1 className="text-hero max-w-2xl font-black text-ink text-balance">
            이번 달 필기만
            <br />
            남긴 사람을 위해.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-text-gray sm:text-xl">
            기관별 실전 회차. 기본서는 없습니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/this-month"
              className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-navy px-7 py-4 text-base font-bold text-ivory transition hover:bg-navy-2"
            >
              이번 달 필기 보기
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/consult"
              className="inline-flex items-center justify-center rounded-[6px] border border-line bg-transparent px-7 py-4 text-base font-bold text-ink transition hover:border-ink/30"
            >
              상담하기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px] lg:h-[480px]">
          <div
            className="absolute inset-x-[4%] bottom-[4%] top-[14%] rounded-[4px]"
            style={{ background: "rgba(20,18,15,0.05)" }}
            aria-hidden="true"
          />
          {heroBooks.map((book, i) => (
            <div key={i} className={`absolute ${book.wrapClassName}`}>
              <BookCover
                theme="lime"
                eyebrow={book.eyebrow}
                titleLines={book.titleLines}
                footer={book.footer}
                bigNumber={book.bigNumber}
                className="shadow-[0_28px_50px_-20px_rgba(20,18,15,0.45)]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

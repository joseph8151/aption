import Link from "next/link";
import { ArrowRight, Rocket, TrendingUp, Zap } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const personas = [
  {
    tag: "BEGINNER",
    icon: Rocket,
    quote: "NCS를 처음 시작해요.",
    flow: ["기초연산", "수리능력", "문제해결"],
    href: "/products?exam=ncs&difficulty=%EC%9E%85%EB%AC%B8",
  },
  {
    tag: "SCORE UP",
    icon: TrendingUp,
    quote: "점수가 정체됐어요.",
    flow: ["자료해석", "문제해결", "ADVANCED"],
    href: "/products?exam=ncs&difficulty=%EC%8B%A4%EC%A0%84",
  },
  {
    tag: "FINAL",
    icon: Zap,
    quote: "시험이 얼마 남지 않았어요.",
    flow: ["고난도", "FINAL MOCK TEST"],
    href: "/products?type=%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC",
  },
];

export default function PersonaSection() {
  return (
    <section className="section-y-tight bg-gray-light">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="어디서부터 시작할까요"
          title="지금 내 상황에 맞는 학습 흐름"
          align="center"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal key={p.tag} delay={i * 90}>
              <Link
                href={p.href}
                className="group flex h-full flex-col gap-5 rounded-[8px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_40px_-24px_rgba(20,18,15,0.28)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-navy text-lime">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-lime-strong">
                    {p.tag}
                  </span>
                  <p className="text-lg font-extrabold text-navy">&ldquo;{p.quote}&rdquo;</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-2 text-xs font-bold text-text-gray">
                  {p.flow.map((step, idx) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full bg-gray-light px-2.5 py-1 text-navy">{step}</span>
                      {idx < p.flow.length - 1 ? (
                        <ArrowRight size={12} strokeWidth={2.5} className="text-line" />
                      ) : null}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

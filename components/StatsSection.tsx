import Container from "./Container";
import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";

const stats = [
  { number: <AnimatedNumber value={300} suffix="+" />, label: "유형별 집중 문제" },
  { number: <AnimatedNumber value={10} suffix="회" />, label: "실전 모의고사" },
  { number: "4 LEVELS", label: "기초 → 고난도" },
  { number: "1 GOAL", label: "시험장에서 풀어내는 실력" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-navy">
      <Container className="grid grid-cols-2 gap-y-10 py-14 sm:py-16 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-huge-figure font-black text-lime" style={{ fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.75rem)" }}>
                {stat.number}
              </span>
              <span className="text-sm font-semibold text-white/60">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

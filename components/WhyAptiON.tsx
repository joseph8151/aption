import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    tag: "TYPE",
    title: "유형별 집중",
    description: "약한 영역만 골라 집중적으로 훈련합니다.",
  },
  {
    number: "02",
    tag: "VOLUME",
    title: "충분한 문제량",
    description: "이해에서 끝나지 않고 반복을 통해 풀이 패턴을 익힙니다.",
  },
  {
    number: "03",
    tag: "LEVEL",
    title: "단계별 난이도",
    description: "기초 → 기본 → 실전 → 고난도",
  },
  {
    number: "04",
    tag: "SPEED",
    title: "시간 훈련",
    description: "실전에서 가장 중요한 정확도와 풀이 속도를 함께 훈련합니다.",
  },
];

export default function WhyAptiON() {
  return (
    <section className="section-y bg-navy text-white">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="WHY APTION"
          title={
            <>
              많이 푸는 것에도
              <br />
              방법이 있습니다.
            </>
          }
          align="center"
          tone="dark"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.number} delay={i * 90}>
              <div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-3 text-[6.5rem] font-black leading-none text-white/[0.05] select-none"
                >
                  {reason.number}
                </span>
                <span className="relative text-[11px] font-extrabold tracking-[0.22em] text-lime">
                  {reason.tag}
                </span>
                <h3 className="relative text-xl font-extrabold text-white">{reason.title}</h3>
                <p className="relative text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  { code: "01", tag: "DIAGNOSE", title: "약점 발견", description: "어떤 영역이 약한지 확인합니다." },
  { code: "02", tag: "DRILL", title: "집중 반복", description: "약한 유형을 200~300문제 반복합니다." },
  { code: "03", tag: "ADVANCE", title: "고난도 훈련", description: "응용·고난도 문제를 풀이합니다." },
  { code: "04", tag: "PERFORM", title: "실전 모의고사", description: "시간 관리까지 실전처럼 훈련합니다." },
];

export default function LearningSystem() {
  return (
    <section className="section-y-tight bg-ivory">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="THE APTION METHOD"
          title="약점 발견부터 실전까지."
          align="center"
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-6">
          <div
            className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-line lg:top-6 lg:left-0 lg:right-0 lg:block lg:h-px lg:w-auto"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <Reveal key={step.code} delay={i * 90} className="relative flex flex-1 gap-5 lg:flex-col lg:gap-6">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-ivory text-sm font-black text-navy lg:h-12 lg:w-12">
                {step.code}
              </div>
              <div className="flex flex-1 flex-col gap-2 rounded-[8px] border border-line bg-white p-5 lg:p-6">
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-lime-strong">
                  {step.tag}
                </span>
                <h3 className="text-lg font-extrabold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-gray">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto max-w-2xl text-center text-base font-bold leading-relaxed text-navy sm:text-lg">
          한 권을 끝내는 것이 목표가 아니라
          <br className="hidden sm:block" />
          실제 시험에서 풀 수 있는 실력을 만드는 것이 목표입니다.
        </p>
      </Container>
    </section>
  );
}

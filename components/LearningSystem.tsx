import Container from "./Container";
import SectionHeading from "./SectionHeading";

const steps = [
  { step: "STEP 01", title: "진단", description: "어떤 영역이 약한지 확인" },
  { step: "STEP 02", title: "집중훈련", description: "약한 유형을 200~300문제 반복" },
  { step: "STEP 03", title: "고난도", description: "응용·고난도 문제 풀이" },
  { step: "STEP 04", title: "실전", description: "모의고사를 통해 시간 관리 훈련" },
];

export default function LearningSystem() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="AptiON 학습 시스템"
          title="약점 진단부터 실전까지, 4단계 학습"
          align="center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col gap-2">
              <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-6">
                <span className="text-xs font-black tracking-widest text-blue">{s.step}</span>
                <h3 className="text-xl font-extrabold text-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{s.description}</p>
              </div>
              {i < steps.length - 1 ? (
                <span
                  className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-xl font-bold text-blue/40 lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-2xl text-center text-base font-medium leading-relaxed text-navy sm:text-lg">
          한 권을 끝내는 것이 목표가 아니라
          <br className="hidden sm:block" />
          실제 시험에서 풀 수 있는 실력을 만드는 것이 목표입니다.
        </p>
      </Container>
    </section>
  );
}

import Container from "./Container";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    number: "01",
    title: "유형별 집중",
    description: "한 권에 모든 문제를 섞지 않고 약한 유형만 집중적으로 훈련할 수 있습니다.",
  },
  {
    number: "02",
    title: "충분한 문제량",
    description:
      "문제 유형을 이해하는 데서 끝나는 것이 아니라 반복을 통해 풀이 패턴을 익힐 수 있도록 구성합니다.",
  },
  {
    number: "03",
    title: "단계별 난이도",
    description: "기초 → 기본 → 실전 → 고난도 순서로 점진적으로 난이도를 높입니다.",
  },
  {
    number: "04",
    title: "실전 시간 훈련",
    description:
      "시험장에서 가장 중요한 것은 정확도 + 속도입니다. 시간 제한을 두고 풀 수 있도록 문제를 구성합니다.",
  },
];

export default function WhyAptiON() {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why AptiON"
          title="문제를 많이 푸는 것에도 방법이 있습니다."
          align="center"
          tone="dark"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-lime/40 hover:bg-white/10"
            >
              <span className="text-sm font-black text-lime">{reason.number}</span>
              <h3 className="text-lg font-bold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

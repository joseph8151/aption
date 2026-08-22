import Container from "./Container";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "이해보다 반복",
    description: "이론을 읽는 것에서 끝내지 않고, 같은 유형을 충분히 반복해 몸에 익힙니다.",
  },
  {
    title: "약점 중심 훈련",
    description: "모든 영역을 고르게 공부하기보다 부족한 영역을 먼저 채울 수 있도록 설계합니다.",
  },
  {
    title: "정확도와 속도",
    description: "제한 시간 안에서 정확히 풀어내는 실전 감각을 함께 훈련합니다.",
  },
];

// 실제 고객 후기 확보 후 활성화
// const testimonials = [
//   { name: "", exam: "", quote: "" },
// ];

export default function Testimonials() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Learning Philosophy"
          title="AptiON은 이런 학습을 지향합니다."
          description="아직 축적된 후기 데이터가 없어, 검증되지 않은 후기 대신 AptiON이 지향하는 학습 방식을 안내합니다."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-6">
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{p.description}</p>
            </div>
          ))}
        </div>

        {/*
          실제 고객 후기가 확보되면 아래와 같은 형태로 카드 그리드를 추가하세요.
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        */}
      </Container>
    </section>
  );
}

import { Check } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const principles = [
  "충분한 문제량",
  "약점별 선택",
  "단계별 난이도",
  "실전 시간 관리",
  "반복 가능한 구성",
];

// 실제 고객 후기 확보 후 활성화
// const testimonials = [
//   { name: "", exam: "", quote: "" },
// ];

export default function Testimonials() {
  return (
    <section className="section-y-tight bg-ivory">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading
          eyebrow="APTION PRINCIPLES"
          title="Designed for Real Practice."
          description="아직 축적된 후기 데이터가 없어, 검증되지 않은 후기 대신 AptiON이 지향하는 학습 원칙을 안내합니다."
          align="center"
        />
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          {principles.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold text-navy"
            >
              <Check size={15} strokeWidth={2.5} className="text-lime-strong" />
              {item}
            </span>
          ))}
        </Reveal>

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

import Container from "./Container";

const stats = [
  { value: "300+", label: "문제 집중 훈련" },
  { value: "10회", label: "실전 모의고사" },
  { value: "4단계", label: "난이도별 구성" },
  { value: "유형별", label: "약점 집중 학습" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-navy">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:py-14 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
            <span className="text-3xl font-black text-lime sm:text-4xl">{stat.value}</span>
            <span className="text-sm font-medium text-white/70">{stat.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}

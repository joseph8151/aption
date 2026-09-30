import Link from "next/link";
import { BarChart3, Building2, Calculator, ClipboardList, Puzzle, Target } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const finderItems = [
  {
    title: "NCS",
    description: "직업기초능력 집중 대비",
    href: "/products?exam=ncs",
    icon: ClipboardList,
  },
  {
    title: "공기업",
    description: "공기업 필기시험 집중 대비",
    href: "/products?exam=public",
    icon: Building2,
  },
  {
    title: "대기업 인적성",
    description: "대기업 직무적성 유형 대비",
    href: "/products?exam=corporate",
    icon: Target,
  },
  {
    title: "수리·자료해석",
    description: "계산과 데이터 분석 집중",
    href: `/products?area=${encodeURIComponent("수리,자료해석")}`,
    icon: Calculator,
  },
  {
    title: "논리·추리",
    description: "조건추론과 논리 문제 집중",
    href: `/products?area=${encodeURIComponent("논리추리")}`,
    icon: Puzzle,
  },
  {
    title: "실전 모의고사",
    description: "실제 시험처럼 시간 제한 훈련",
    href: `/products?type=${encodeURIComponent("모의고사")}`,
    icon: BarChart3,
  },
];

export default function CategoryFinder() {
  return (
    <section className="section-y-tight bg-white">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="FIND YOUR TEST"
          title="어떤 시험을 준비하고 있나요?"
          description="준비 중인 시험을 선택하면 관련 문제집만 모아볼 수 있습니다."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {finderItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 70}>
              <Link
                href={item.href}
                className="group flex h-full flex-col items-start gap-4 rounded-[8px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy hover:shadow-[0_20px_40px_-20px_rgba(20,18,15,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-gray-light text-navy transition-colors duration-300 group-hover:bg-white/10 group-hover:text-lime">
                  <item.icon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-extrabold text-navy transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </span>
                  <span className="text-sm leading-relaxed text-text-gray transition-colors duration-300 group-hover:text-white/65">
                    {item.description}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

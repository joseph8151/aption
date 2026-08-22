import Link from "next/link";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const finderItems = [
  {
    title: "NCS",
    description: "직업기초능력 집중 대비",
    href: "/products?exam=ncs",
    icon: DocIcon,
  },
  {
    title: "공기업",
    description: "공기업 필기시험 집중 대비",
    href: "/products?exam=public",
    icon: BuildingIcon,
  },
  {
    title: "인적성",
    description: "대기업 직무적성 유형 대비",
    href: "/products?exam=corporate",
    icon: TargetIcon,
  },
  {
    title: "수리·자료해석",
    description: "계산과 데이터 분석 집중",
    href: `/products?area=${encodeURIComponent("수리,자료해석")}`,
    icon: ChartIcon,
  },
  {
    title: "논리·추리",
    description: "조건추론과 논리 문제 집중",
    href: `/products?area=${encodeURIComponent("논리추리")}`,
    icon: PuzzleIcon,
  },
  {
    title: "모의고사",
    description: "실제 시험처럼 시간 제한 훈련",
    href: `/products?type=${encodeURIComponent("모의고사")}`,
    icon: ClockIcon,
  },
];

export default function CategoryFinder() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="시험별로 찾기"
          title="문제집을 시험별로 찾기"
          description="준비 중인 시험을 선택하면 관련 문제집만 모아볼 수 있습니다."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {finderItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-start gap-3 rounded-xl border border-line bg-offwhite p-5 transition hover:-translate-y-1 hover:border-blue/30 hover:bg-white hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-lime transition group-hover:bg-blue">
                <item.icon />
              </span>
              <span className="text-sm font-bold text-navy">{item.title}</span>
              <span className="text-xs leading-relaxed text-ink/55">{item.description}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7z" strokeLinejoin="round" />
      <path d="M14 3v4h4M9 12h6M9 16h6" strokeLinecap="round" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 21V6l7-3 7 3v15" strokeLinejoin="round" />
      <path d="M9 21v-5h4v5M9 10h.01M14 10h.01M9 14h.01M14 14h.01" strokeLinecap="round" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 20V10M11 20V4M18 20v-7" strokeLinecap="round" />
    </svg>
  );
}
function PuzzleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d="M9 4h4a1 1 0 0 1 1 1v2.2a1.8 1.8 0 1 0 0 3.6V13a1 1 0 0 1-1 1h-2.2a1.8 1.8 0 1 1-3.6 0H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.2A1.8 1.8 0 1 0 7.2 4.6 1 1 0 0 1 9 4Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

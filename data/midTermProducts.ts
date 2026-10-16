export interface MidTermProduct {
  slug: string;
  title: string;
  promise: string;
  meta: string; // 구성 한 줄, 예: "4회 · 과목별 시간 맞춤 · PDF"
  price: number;
  badge?: string; // 예: "연중 상시" — 없으면 배지 미표시
}

export const militaryWrittenProducts: MidTermProduct[] = [
  {
    slug: "military-civilian-written-4",
    title: "군무원 필기 실전 4회",
    promise: "7·9급 공채 대비 실전 4회. 국어·한국사·행정학·행정법 빈출 유형 중심.",
    meta: "4회 · 과목별 시간 맞춤 · PDF",
    price: 58000,
    badge: "연중 상시",
  },
  {
    slug: "military-officer-written-3",
    title: "장교 필기 실전 3회",
    promise: "학사사관·군 가산복무 지원금 대비 실전 3회. 국어·영어·한국사 빈출.",
    meta: "3회 · 빈출 유형 정리 포함 · PDF",
    price: 58000,
    badge: "연중 상시",
  },
];

export const certWeaknessProducts: MidTermProduct[] = [
  {
    slug: "sqld-weakness-drill-200",
    title: "SQLD 약점 드릴 200제",
    promise: "데이터모델링·SQL 기본·SQL 활용 중 자주 틀리는 유형만 모은 드릴.",
    meta: "200제 · 오답 유형 정리 · PDF",
    price: 58000,
  },
  {
    slug: "information-processing-practical-drill",
    title: "정보처리기사 실기 약점 드릴",
    promise: "프로그래밍·데이터베이스·네트워크 실기 빈출 오류 유형 집중.",
    meta: "실기 회차 3회 + 약점 정리 · PDF",
    price: 58000,
  },
  {
    slug: "industrial-safety-law-drill",
    title: "산업안전기사 법규 약점 드릴",
    promise: "산업안전보건법·중대재해처벌법 조문 빈출 포인트만 정리.",
    meta: "법규 200제 · 조문 해설 · PDF",
    price: 58000,
  },
];

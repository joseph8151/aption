export interface ConcernItem {
  concern: string;
  recommendationLabel: string;
  productSlug?: string;
}

export const concernItems: ConcernItem[] = [
  {
    concern: "계산이 너무 느려요.",
    recommendationLabel: "NCS 기초연산 300제",
    productSlug: "ncs-arithmetic-300",
  },
  {
    concern: "자료해석에서 항상 시간이 부족해요.",
    recommendationLabel: "자료해석 집중 300제",
    productSlug: "ncs-data-interpretation-300",
  },
  {
    concern: "문제해결능력에서 점수가 안 나와요.",
    recommendationLabel: "문제해결능력 300제",
    productSlug: "ncs-problem-solving-300",
  },
  {
    concern: "시험이 얼마 안 남았어요.",
    recommendationLabel: "FINAL 실전 모의고사",
    productSlug: "ncs-final-mock-test-10",
  },
  {
    concern: "처음 NCS를 준비해요.",
    recommendationLabel: "NCS 고득점 패키지",
    productSlug: "ncs-high-score-package",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "어떤 문제집부터 풀어야 하나요?",
    answer: "현재 부족한 영역부터 집중적으로 시작하는 것을 권장합니다.",
  },
  {
    question: "NCS를 처음 준비합니다.",
    answer:
      "기초 연산과 기본 문제해결 문제집부터 시작한 뒤 실전 문제집으로 넘어가는 것을 추천합니다.",
  },
  {
    question: "상품 추천을 받을 수 있나요?",
    answer: "네. 준비 중인 시험과 현재 수준을 알려주시면 상담을 통해 안내합니다.",
  },
  {
    question: "문제집은 어떻게 구매하나요?",
    answer: "현재 상담 신청 또는 전화 문의 후 구매 안내를 드립니다.",
  },
  {
    question: "문제집마다 난이도가 다른가요?",
    answer: "초급·기본·실전·고난도 단계로 구분합니다.",
  },
  {
    question: "여러 문제집을 함께 구매할 수 있나요?",
    answer: "가능합니다. 시험별 또는 영역별 패키지를 제공합니다.",
  },
  {
    question: "기업별 시험 대비도 가능한가요?",
    answer: "시험 유형과 요구 역량에 따라 적합한 문제집을 안내합니다.",
  },
  {
    question: "문제집 샘플을 볼 수 있나요?",
    answer: "상품 상세페이지에서 일부 샘플 문제를 확인할 수 있습니다.",
  },
];

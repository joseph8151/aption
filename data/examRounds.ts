export interface ExamRound {
  slug: string;
  institution: string; // 표지/뱃지에 쓰이는 짧은 기관명
  title: string;
  dDayLabel: string; // "D-16"
  examDateLabel: string; // 카드용, 예: "10.17"
  examDateShort: string; // 공지바/eyebrow용, 예: "10/17"
  participantLabel?: string; // 예: "867명" — 해당하는 경우만
  roundCount: number; // 표지 큰 숫자와 동일
  roundLabel: string; // 표지 서브라인, 예: "5회 · 2026 하반기"
  questionMeta: string; // 예: "50제 50분"
  cardMeta: string; // 목록 카드 meta row, 예: "8회 · 50문항 · PDF"
  promise: string; // 한 줄 약속 카피
  price: number;
  composition: string[];
}

// "이번 달 필기" — 이번 달 필기시험이 확정된 기관의 실전 회차.
// 상시 판매하는 NCS 유형별 문제집과 달리, 특정 채용 일정에 맞춘 한시 상품이다.
export const examRounds: ExamRound[] = [
  {
    slug: "incheon-public-service-2026-10",
    institution: "인천 공무직",
    title: "인천 공무직 일반상식 실전 8회",
    dDayLabel: "D-16",
    examDateLabel: "10.17",
    examDateShort: "10/17",
    roundCount: 8,
    roundLabel: "8회 · 10.17",
    questionMeta: "50제 50분",
    cardMeta: "8회 · 50문항 · PDF",
    promise: "실전 8회로 시간 안에 끝내는 감각부터 잡습니다.",
    price: 19900,
    composition: [
      "일반상식 실전 1~8회 (회차별 50문항)",
      "회차별 정답 및 해설",
      "50분 타이머 기준 OMR 체크시트",
    ],
  },
  {
    slug: "shinhyup-written-2026-11",
    institution: "신협",
    title: "신협 필기 실전 3회 + 빈출",
    dDayLabel: "D-37",
    examDateLabel: "11.7–8",
    examDateShort: "11/7",
    roundCount: 3,
    roundLabel: "3회 · 11.7–8",
    questionMeta: "직무능력 + 직무상식",
    cardMeta: "3회 · 빈출유형 포함 · PDF",
    promise: "직무능력과 직무상식 빈출 유형을 한 번에 정리합니다.",
    price: 29000,
    composition: [
      "신협 필기 실전 1~3회",
      "빈출 유형 정리 노트",
      "회차별 정답 및 해설",
    ],
  },
  {
    slug: "nonghyup-livestock-2026-11",
    institution: "농축협",
    title: "농축협 직무능력 실전 5회",
    dDayLabel: "D-52",
    examDateLabel: "11.22",
    examDateShort: "11/22",
    participantLabel: "867명",
    roundCount: 5,
    roundLabel: "5회 · 2026 하반기",
    questionMeta: "인적성 + 직무능력",
    cardMeta: "5회 · 인적성+직무능력 · PDF",
    promise: "11/22, 867명이 함께 보는 시험을 실전 5회로 준비합니다.",
    price: 39000,
    composition: [
      "농축협 직무능력 실전 1~5회",
      "인적성 영역 별도 수록",
      "회차별 정답 및 해설",
    ],
  },
];

export const getExamRoundBySlug = (slug: string) =>
  examRounds.find((e) => e.slug === slug);

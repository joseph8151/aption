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
// 배열 순서 = D-day 짧은 것부터. 필기일이 아직 공개되지 않은 건(배지: 일정 확인)은 맨 뒤.
export const examRounds: ExamRound[] = [
  {
    slug: "busan-public-agency-2026-10",
    institution: "부산 공공기관",
    title: "부산 공공기관 NCS 실전 3회",
    dDayLabel: "D-14",
    examDateLabel: "10.24",
    examDateShort: "10/24",
    roundCount: 3,
    roundLabel: "3회 · 10.24",
    questionMeta: "NCS 50문항",
    cardMeta: "3회 · NCS 50문항 · PDF",
    promise: "10월 24일, 직업기초능력 50문항. 원서는 이미 닫혔습니다.",
    price: 79600,
    composition: [
      "부산 공공기관 NCS 실전 1~3회 (50문항)",
      "회차별 정답 및 해설",
      "접수 마감 이후 필기 대비에 맞춘 구성",
    ],
  },
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
    price: 39800,
    composition: [
      "일반상식 실전 1~8회 (회차별 50문항)",
      "회차별 정답 및 해설",
      "50분 타이머 기준 OMR 체크시트",
    ],
  },
  {
    slug: "suwon-public-agency-2026-11",
    institution: "수원시 공공기관",
    title: "수원시 공공기관 NCS 실전 3회",
    dDayLabel: "D-28",
    examDateLabel: "11.7",
    examDateShort: "11/7",
    roundCount: 3,
    roundLabel: "3회 · 11.7",
    questionMeta: "직업기초능력",
    cardMeta: "3회 · 직업기초능력 · PDF",
    promise: "11월 7일 공통 NCS. 문화재단·도시공사 전공은 이 파일에 없습니다.",
    price: 79600,
    composition: [
      "수원시 공공기관 NCS 실전 1~3회 (직업기초능력)",
      "회차별 정답 및 해설",
      "기관 전공 과목은 포함되지 않습니다",
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
    price: 58000,
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
    price: 78000,
    composition: [
      "농축협 직무능력 실전 1~5회",
      "인적성 영역 별도 수록",
      "회차별 정답 및 해설",
    ],
  },
  {
    slug: "at-job-competency-2026",
    institution: "aT",
    title: "aT 직무능력 실전 3회",
    dDayLabel: "일정 확인",
    examDateLabel: "접수 ~10.13",
    examDateShort: "접수~10.13",
    roundCount: 3,
    roundLabel: "3회 · 접수중",
    questionMeta: "직무능력",
    cardMeta: "3회 · 직무능력 · PDF",
    promise: "한국농수산식품유통공사. 접수 13일까지. 필기일은 확정되면 적습니다.",
    price: 116000,
    composition: [
      "aT(한국농수산식품유통공사) 직무능력 실전 1~3회",
      "회차별 정답 및 해설",
      "필기일 확정 시 별도 안내",
    ],
  },
  {
    slug: "sh-job-competency-2026",
    institution: "SH",
    title: "SH 직무능력 실전 3회",
    dDayLabel: "일정 확인",
    examDateLabel: "접수 ~10.19",
    examDateShort: "접수~10.19",
    roundCount: 3,
    roundLabel: "3회 · 접수중",
    questionMeta: "직무능력",
    cardMeta: "3회 · 직무능력 · PDF",
    promise: "서울주택도시공사. 접수 19일까지. 필기일은 아직 없습니다.",
    price: 116000,
    composition: [
      "SH(서울주택도시공사) 직무능력 실전 1~3회",
      "회차별 정답 및 해설",
      "필기일 확정 시 별도 안내",
    ],
  },
];

export const getExamRoundBySlug = (slug: string) =>
  examRounds.find((e) => e.slug === slug);

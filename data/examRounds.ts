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
    title: "부산 공공기관 NCS 실전 6회",
    dDayLabel: "D-14",
    examDateLabel: "10.24",
    examDateShort: "10/24",
    roundCount: 6,
    roundLabel: "6회 · 10.24",
    questionMeta: "NCS 50문항",
    cardMeta: "6회 · 회차당 50문항 · 총 300문항",
    promise: "직업기초능력 50문항. 접수는 이미 마감됐습니다.",
    price: 58000,
    composition: [
      "부산 공공기관 NCS 실전 1~6회 (50문항)",
      "회차별 정답 및 해설",
      "접수 마감 이후 필기 대비에 맞춘 구성",
    ],
  },
  {
    slug: "suwon-public-agency-2026-11",
    institution: "수원시 공공기관",
    title: "수원시 공공기관 NCS 실전 6회",
    dDayLabel: "D-28",
    examDateLabel: "11.7",
    examDateShort: "11/7",
    roundCount: 6,
    roundLabel: "6회 · 11.7",
    questionMeta: "직업기초능력",
    cardMeta: "6회 · 회차당 50문항 · 총 300문항",
    promise: "공통 NCS. 전공 과목은 포함하지 않습니다.",
    price: 58000,
    composition: [
      "수원시 공공기관 NCS 실전 1~6회 (직업기초능력)",
      "회차별 정답 및 해설",
      "기관 전공 과목은 포함되지 않습니다",
    ],
  },
  {
    slug: "shinhyup-written-2026-11",
    institution: "신협",
    title: "신협 필기 실전 6회 + 빈출",
    dDayLabel: "D-37",
    examDateLabel: "11.7–8",
    examDateShort: "11/7",
    roundCount: 6,
    roundLabel: "6회 · 11.7–8",
    questionMeta: "직무능력 + 직무상식",
    cardMeta: "6회 · 회차당 50문항 · 총 300문항",
    promise: "직무능력과 직무상식 빈출 유형을 한 번에 정리합니다.",
    price: 58000,
    composition: [
      "신협 필기 실전 1~6회",
      "빈출 유형 정리 노트",
      "회차별 정답 및 해설",
    ],
  },
  {
    slug: "shinhyup-frequent-type-300",
    institution: "신협",
    title: "신협 빈출 유형 300제",
    dDayLabel: "D-37",
    examDateLabel: "11.7–8",
    examDateShort: "11/7",
    roundCount: 300,
    roundLabel: "빈출 유형 300문항 · 11.7–8",
    questionMeta: "빈출 유형 300문항",
    cardMeta: "빈출 유형 300문항 · 짧은 해설 · 60~70p · PDF",
    promise: "자주 나오는 유형만 300문항으로 집중해서 풉니다.",
    price: 49800,
    composition: [
      "신협 빈출 유형 300문항",
      "짧은 해설",
      "60~70p",
    ],
  },
  {
    slug: "nonghyup-livestock-2026-11",
    institution: "농축협",
    title: "농축협 직무능력 실전 8회",
    dDayLabel: "D-52",
    examDateLabel: "11.22",
    examDateShort: "11/22",
    participantLabel: "867명",
    roundCount: 8,
    roundLabel: "8회 · 2026 하반기",
    questionMeta: "인적성 + 직무능력",
    cardMeta: "8회 · 회차당 50문항 · 총 400문항",
    promise: "11/22, 867명이 함께 보는 시험을 실전 8회로 준비합니다.",
    price: 58000,
    composition: [
      "농축협 직무능력 실전 1~8회",
      "인적성 영역 별도 수록",
      "회차별 정답 및 해설",
    ],
  },
  {
    slug: "at-job-competency-2026",
    institution: "aT",
    title: "aT 직무능력 실전 6회",
    dDayLabel: "일정 확인",
    examDateLabel: "접수 ~10.13",
    examDateShort: "접수~10.13",
    roundCount: 6,
    roundLabel: "6회 · 접수중",
    questionMeta: "직무능력",
    cardMeta: "6회 · 회차당 50문항 · 총 300문항",
    promise: "한국농수산식품유통공사. 접수 13일까지. 필기일은 확정되면 적습니다.",
    price: 58000,
    composition: [
      "aT(한국농수산식품유통공사) 직무능력 실전 1~6회",
      "회차별 정답 및 해설",
      "필기일 확정 시 별도 안내",
    ],
  },
  {
    slug: "sh-job-competency-2026",
    institution: "SH",
    title: "SH 직무능력 실전 6회",
    dDayLabel: "일정 확인",
    examDateLabel: "접수 ~10.19",
    examDateShort: "접수~10.19",
    roundCount: 6,
    roundLabel: "6회 · 접수중",
    questionMeta: "직무능력",
    cardMeta: "6회 · 회차당 50문항 · 총 300문항",
    promise: "서울주택도시공사. 접수 19일까지. 필기일은 아직 없습니다.",
    price: 58000,
    composition: [
      "SH(서울주택도시공사) 직무능력 실전 1~6회",
      "회차별 정답 및 해설",
      "필기일 확정 시 별도 안내",
    ],
  },
];

export const getExamRoundBySlug = (slug: string) =>
  examRounds.find((e) => e.slug === slug);

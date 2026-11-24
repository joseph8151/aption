export interface ExamRound {
  slug: string;
  institution: string; // 표지/뱃지에 쓰이는 짧은 기관명
  coverTitleLines?: string[]; // 홈 히어로 표지 중앙 제목 줄바꿈. 생략 시 institution만 사용
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
//
// 필기일이 지난 회차는 바로 이 배열에서 제거한다(과거 시험 일정을 노출하면
// 혼란을 주고 신뢰도를 깎는다). 새 회차를 추가할 때는 아래 예시 형태로
// 작성해서 맨 앞(D-day가 가장 짧은 위치)에 넣는다:
//
// {
//   slug: "기관명-영문-slug-연도-월",
//   institution: "기관명 (카드 배지용 짧은 이름)",
//   coverTitleLines: ["기관명", "NCS", "실전"], // 선택 — 홈 히어로 표지용 줄바꿈
//   title: "기관명 NCS/직무능력 실전 N회",
//   dDayLabel: "D-14",          // 필기일까지 남은 일수. 아직 미정이면 "일정 확인"
//   examDateLabel: "11.24",     // 카드 표시용
//   examDateShort: "11/24",     // 공지바/eyebrow용
//   participantLabel: "867명",  // 선택 — 응시 인원이 알려진 경우만
//   roundCount: 6,
//   roundLabel: "6회 · 11.24",
//   questionMeta: "직업기초능력",
//   cardMeta: "6회 · 회차당 50문항 · 총 300문항",
//   promise: "한 줄 약속 카피",
//   price: 58000,
//   composition: ["구성 1", "구성 2", "구성 3"],
// }
export const examRounds: ExamRound[] = [];

export const getExamRoundBySlug = (slug: string) =>
  examRounds.find((e) => e.slug === slug);

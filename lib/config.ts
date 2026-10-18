// 사이트 전역 설정값 — 이 파일만 수정하면 이메일, 상담폼 연동이 전체 사이트에 반영됩니다.

export const siteConfig = {
  brandName: "AptiON",
  brandNameKo: "앱티온",
  brandFullName: "AptiON Books",
  tagline: "Turn Your Aptitude ON.",
  taglineKo: "합격을 위한 실전 감각을 켜다.",

  // 상담 접수 이메일
  contactEmail: "help@aption.co.kr",

  // Formspree 상담폼 연동 엔드포인트
  formspreeEndpoint: "https://formspree.io/f/mppanjzr",

  // 구매 입금 계좌 — 구매 문의 완료 화면에서만 노출 (정적 페이지에는 노출하지 않음)
  bankAccount: {
    bank: "토스뱅크",
    holder: "김형기",
    number: "1001-4105-4081",
  },

  // 영업시간 — 입금 확인 및 발송 기준
  businessHours: {
    label: "연중무휴 08:00~22:00",
  },

  siteUrl: "https://www.aption.co.kr",
} as const;

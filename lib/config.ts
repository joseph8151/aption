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

  siteUrl: "https://www.aption.co.kr",
} as const;

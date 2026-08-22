// 사이트 전역 설정값 — 이 파일만 수정하면 전화번호, 이메일, 상담폼 연동, 운영시간이 전체 사이트에 반영됩니다.

export const siteConfig = {
  brandName: "AptiON",
  brandNameKo: "앱티온",
  brandFullName: "AptiON Books",
  tagline: "Turn Your Aptitude ON.",
  taglineKo: "합격을 위한 실전 감각을 켜다.",

  // 전화번호는 아직 확정 전 placeholder. 실제 번호가 정해지면 이 값만 수정하세요.
  phoneNumber: "010-0000-0000",
  get phoneHref() {
    return `tel:${this.phoneNumber.replace(/-/g, "")}`;
  },

  // 상담 접수 이메일
  contactEmail: "help@aption.co.kr",

  // 운영시간 — 문구만 바꾸면 Header/Footer/상담 안내에 전체 반영됩니다.
  businessHours: "평일 10:00–18:00",
  businessHoursNote: "주말·공휴일 휴무 (상담 신청은 24시간 가능)",

  // Formspree 또는 자체 API 엔드포인트. 발급받은 값으로 교체하세요.
  // https://formspree.io 에서 폼을 생성한 뒤 해당 endpoint URL을 붙여넣습니다.
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT",

  siteUrl: "https://www.aption.co.kr",
} as const;

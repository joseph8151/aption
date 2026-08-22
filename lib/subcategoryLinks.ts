import { ExamKey } from "./types";

// 세부 카테고리(하위 시험 영역) 클릭 시 이동할 검색 키워드.
// 아직 해당 세부 카테고리를 다루는 문제집이 없는 경우 undefined로 두면
// 상담 페이지로 연결되어 "준비 중 + 상담 안내" 흐름을 제공합니다.
const subCategoryKeywords: Record<ExamKey, Record<string, string | undefined>> = {
  ncs: {
    "의사소통능력": "의사소통능력",
    "수리능력": "수리능력",
    "문제해결능력": "문제해결능력",
    "자원관리능력": "자원관리능력",
    "정보능력": "정보능력",
    "조직이해능력": "조직이해능력",
    "대인관계능력": "대인관계능력",
    "직업윤리": "직업윤리",
    "PSAT형 NCS": undefined,
    "모듈형 NCS": undefined,
    "피듈형 NCS": undefined,
    "NCS 실전모의고사": "모의고사",
  },
  public: {
    "공기업 NCS": "공기업 NCS",
    "공기업 전공시험": "전공",
    "금융공기업": "금융공기업",
    "발전공기업": "발전공기업",
    "교통공기업": "교통공기업",
    "에너지공기업": "에너지공기업",
    "공단·공사": "공단",
    "공기업 통합 모의고사": "통합 모의고사",
  },
  corporate: {
    "GSAT 유형": "GSAT 유형",
    "언어논리": "언어논리",
    "수리논리": "수리논리",
    "자료해석": "자료해석",
    "추리": "추리",
    "공간지각": "공간지각",
    "상황판단": "상황판단",
    "실전 인적성 모의고사": "모의고사",
  },
  jobskill: {
    "직무적성": "직무적성",
    "논리추론": "논리추론",
    "수리추론": "수리추론",
    "자료해석": "자료해석",
    "문제해결": "문제해결",
    "시간단축 훈련": "시간단축",
    "취업 필기 종합": "취업 필기 종합",
    "실전 모의고사": "실전 모의고사",
  },
};

export function getSubCategoryHref(exam: ExamKey, subCategory: string): string {
  const keyword = subCategoryKeywords[exam]?.[subCategory];
  if (keyword) {
    return `/products?exam=${exam}&q=${encodeURIComponent(keyword)}`;
  }
  return `/consult?product=${encodeURIComponent(subCategory)}`;
}

export function hasSubCategoryProducts(exam: ExamKey, subCategory: string): boolean {
  return Boolean(subCategoryKeywords[exam]?.[subCategory]);
}

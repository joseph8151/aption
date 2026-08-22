import { CategoryGroup } from "@/lib/types";

export const categories: CategoryGroup[] = [
  {
    key: "ncs",
    label: "NCS",
    description: "직업기초능력 집중 대비",
    subCategories: [
      "의사소통능력",
      "수리능력",
      "문제해결능력",
      "자원관리능력",
      "정보능력",
      "조직이해능력",
      "대인관계능력",
      "직업윤리",
      "PSAT형 NCS",
      "모듈형 NCS",
      "피듈형 NCS",
      "NCS 실전모의고사",
    ],
  },
  {
    key: "public",
    label: "공기업",
    description: "공기업 필기시험 집중 대비",
    subCategories: [
      "공기업 NCS",
      "공기업 전공시험",
      "금융공기업",
      "발전공기업",
      "교통공기업",
      "에너지공기업",
      "공단·공사",
      "공기업 통합 모의고사",
    ],
  },
  {
    key: "corporate",
    label: "인적성",
    description: "대기업 직무적성 유형 대비",
    subCategories: [
      "GSAT 유형",
      "언어논리",
      "수리논리",
      "자료해석",
      "추리",
      "공간지각",
      "상황판단",
      "실전 인적성 모의고사",
    ],
  },
  {
    key: "jobskill",
    label: "취업 직무능력",
    description: "직무적성·논리추론 집중 훈련",
    subCategories: [
      "직무적성",
      "논리추론",
      "수리추론",
      "자료해석",
      "문제해결",
      "시간단축 훈련",
      "취업 필기 종합",
      "실전 모의고사",
    ],
  },
];

export const finderCards = [
  { examKey: "ncs" as const, title: "NCS", description: "직업기초능력 집중 대비" },
  { examKey: "public" as const, title: "공기업", description: "공기업 필기시험 집중 대비" },
  { examKey: "corporate" as const, title: "인적성", description: "대기업 직무적성 유형 대비" },
  { areaKey: "수리·자료해석", title: "수리·자료해석", description: "계산과 데이터 분석 집중" },
  { areaKey: "논리·추리", title: "논리·추리", description: "조건추론과 논리 문제 집중" },
  { productType: "모의고사" as const, title: "모의고사", description: "실제 시험처럼 시간 제한 훈련" },
];

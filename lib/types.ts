export type ExamKey = "ncs" | "public" | "corporate" | "jobskill";

export type AreaKey =
  | "수리"
  | "자료해석"
  | "의사소통"
  | "문제해결"
  | "논리추리"
  | "전공"
  | "공간지각"
  | "상황판단"
  | "모의고사";

export type DifficultyKey = "입문" | "기본" | "실전" | "고난도";

export type ProductType = "문제집" | "모의고사" | "패키지";

export type CoverAccent = "blue" | "purple" | "orange" | "green" | "navy";

// v2 브랜드 표지 시스템(단계 30 리디자인)에서 사용하는 커버 테마.
// 영역/난이도/상품유형으로부터 계산되며, 기존 Product.coverAccent 필드는 더 이상 사용하지 않는다.
export type CoverTheme = "lime" | "sky" | "orange" | "purple" | "advanced" | "final";

export interface TocChapter {
  title: string;
}

export interface PackageItem {
  name: string;
  originalPrice: number;
  slug?: string; // 개별 상품 상세페이지가 있는 경우 연결
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  exam: ExamKey;
  area: AreaKey;
  coverAccent: CoverAccent;
  coverEyebrow: string; // 표지 상단 소분류 (예: NCS, GSAT)
  coverTitleLines: string[]; // 표지 중앙 큰 제목 (줄 단위)
  coverFooter: string; // 표지 하단 (난이도 등)
  difficultyLabel: string; // 표시용 예: "초급 → 중급"
  difficultyTags: DifficultyKey[]; // 필터용
  productType: ProductType;
  price: number;
  questionCount: number;
  pageCount: number;
  badges: Array<"BEST" | "NEW">;
  targetAudience: string[];
  learningGoals: string[];
  composition: string[];
  toc: TocChapter[];
  samplePreview: string;
  packageItems?: PackageItem[]; // productType이 "패키지"인 경우 구성 문제집 목록
  bestValue?: boolean; // 패키지 섹션에서 "BEST VALUE" 뱃지 표시 여부
}

export interface CategoryGroup {
  key: ExamKey;
  label: string;
  description: string;
  subCategories: string[];
}

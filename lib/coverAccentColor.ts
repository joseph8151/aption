import { AreaKey, CoverTheme, DifficultyKey, Product, ProductType } from "./types";

export interface CoverThemeStyle {
  bgFrom: string;
  bgTo: string;
  accent: string;
  text: string;
  textSoft: string;
  isLight: boolean;
}

// 브랜드 표지 디자인 시스템: "Shared system" — 모든 표지는 같은 가문(ink + brass)으로 통일한다.
// 영역별로 색을 바꾸지 않는다(라임/파스텔 색상 제거). 테마 키는 기존 호출부와의
// 호환을 위해 유지하되, 전부 동일한 잉크(#14120F) + 브라스(#B0893E) 스타일로 수렴한다.
const shared: CoverThemeStyle = {
  bgFrom: "#14120F",
  bgTo: "#14120F",
  accent: "#B0893E",
  text: "#F3EEE6",
  textSoft: "rgba(243,238,230,0.6)",
  isLight: false,
};

export const coverThemeStyles: Record<CoverTheme, CoverThemeStyle> = {
  lime: shared,
  sky: shared,
  orange: shared,
  purple: shared,
  advanced: shared,
  final: shared,
};

const areaTheme: Record<AreaKey, CoverTheme> = {
  수리: "lime",
  자료해석: "sky",
  공간지각: "sky",
  문제해결: "orange",
  전공: "orange",
  의사소통: "purple",
  논리추리: "purple",
  상황판단: "purple",
  모의고사: "final",
};

export function getCoverTheme(
  area: AreaKey,
  productType: ProductType,
  difficultyTags: DifficultyKey[]
): CoverTheme {
  if (productType === "모의고사" || area === "모의고사") return "final";
  if (difficultyTags.includes("고난도")) return "advanced";
  return areaTheme[area] ?? "lime";
}

export function getProductCoverTheme(product: Product): CoverTheme {
  return getCoverTheme(product.area, product.productType, product.difficultyTags);
}

export function accentHex(theme: CoverTheme): string {
  return coverThemeStyles[theme].accent;
}

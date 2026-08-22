import { AreaKey, CoverTheme, DifficultyKey, Product, ProductType } from "./types";

export interface CoverThemeStyle {
  bgFrom: string;
  bgTo: string;
  accent: string;
  text: string;
  textSoft: string;
  isLight: boolean;
}

// 브랜드 표지 디자인 시스템: 문제집마다 다른 브랜드처럼 보이지 않도록
// 영역·난이도·상품유형에서 자동으로 파생되는 6가지 고정 테마만 사용한다.
export const coverThemeStyles: Record<CoverTheme, CoverThemeStyle> = {
  lime: {
    bgFrom: "#182235",
    bgTo: "#101828",
    accent: "#C7F36B",
    text: "#FFFFFF",
    textSoft: "rgba(255,255,255,0.62)",
    isLight: false,
  },
  sky: {
    bgFrom: "#182235",
    bgTo: "#101828",
    accent: "#7DD3FC",
    text: "#FFFFFF",
    textSoft: "rgba(255,255,255,0.62)",
    isLight: false,
  },
  orange: {
    bgFrom: "#182235",
    bgTo: "#101828",
    accent: "#FDBA74",
    text: "#FFFFFF",
    textSoft: "rgba(255,255,255,0.62)",
    isLight: false,
  },
  purple: {
    bgFrom: "#182235",
    bgTo: "#101828",
    accent: "#D6BCFA",
    text: "#FFFFFF",
    textSoft: "rgba(255,255,255,0.62)",
    isLight: false,
  },
  advanced: {
    bgFrom: "#15181f",
    bgTo: "#05070a",
    accent: "#C7F36B",
    text: "#FFFFFF",
    textSoft: "rgba(255,255,255,0.6)",
    isLight: false,
  },
  final: {
    bgFrom: "#fdfcf9",
    bgTo: "#f0ecdf",
    accent: "#101828",
    text: "#101828",
    textSoft: "rgba(16,24,40,0.55)",
    isLight: true,
  },
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

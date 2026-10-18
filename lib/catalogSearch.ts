import { products } from "@/data/products";
import { examRounds } from "@/data/examRounds";
import {
  militaryWrittenProducts,
  certWeaknessProducts,
  interviewDocsGroups,
} from "@/data/midTermProducts";

export interface CatalogEntry {
  name: string;
  price: number;
  slug: string;
}

// 상담/구매 폼의 "희망 문제집 추가" 자동완성을 위한 통합 카탈로그.
// 사이트 곳곳에 흩어진 상품 데이터 소스를 하나로 모아 이름으로 검색할 수 있게 한다.
const catalog: CatalogEntry[] = [
  ...products.map((p) => ({ name: p.name, price: p.price, slug: p.slug })),
  ...examRounds.map((e) => ({ name: e.title, price: e.price, slug: e.slug })),
  ...militaryWrittenProducts.map((p) => ({ name: p.title, price: p.price, slug: p.slug })),
  ...certWeaknessProducts.map((p) => ({ name: p.title, price: p.price, slug: p.slug })),
  ...interviewDocsGroups.flatMap((group) =>
    group.products.map((p) => ({ name: p.title, price: p.price, slug: p.slug }))
  ),
];

export function searchCatalog(query: string, limit = 6): CatalogEntry[] {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return [];
  return catalog.filter((item) => item.name.toLowerCase().includes(keyword)).slice(0, limit);
}

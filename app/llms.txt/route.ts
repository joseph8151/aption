import { products } from "@/data/products";
import { studyGuides } from "@/data/studyGuides";
import { siteConfig } from "@/lib/config";

// ChatGPT(OAI-SearchBot 등), Perplexity 같은 AI 답변엔진이 사이트를 빠르게
// 요약·인용할 수 있도록 제공하는 llms.txt (https://llmstxt.org 제안 규격).
// 실제 data/products.ts 값에서 집계해 과장이나 허위 수치가 섞이지 않게 한다.
export async function GET() {
  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const areas = [...new Set(products.map((p) => p.area))];

  const lines = [
    `# ${siteConfig.brandName} (${siteConfig.brandNameKo})`,
    "",
    `> ${siteConfig.taglineKo} NCS·공기업·대기업 인적성·TOPIK·EPS 시험 대비 실전 문제집을 만드는 한국 교육 출판 브랜드입니다.`,
    "",
    "## 개요",
    `- 총 ${products.length}종의 문제집/모의고사/패키지를 판매합니다.`,
    `- 가격대: ${minPrice.toLocaleString("ko-KR")}원 ~ ${maxPrice.toLocaleString("ko-KR")}원.`,
    `- 영역: ${areas.join(", ")}.`,
    "- 구매는 결제 자동화 없이, 상담/구매 신청 폼 접수 후 운영자가 직접 확인하고 이메일로 안내합니다.",
    "- 매달 농축협·신협·지역 공공기관 등 실제 필기시험 일정에 맞춘 '이번 달 필기' 회차 문제집을 갱신합니다.",
    "",
    "## 주요 페이지",
    `- 전체 문제집: ${siteConfig.siteUrl}/products`,
    `- 이번 달 필기: ${siteConfig.siteUrl}/this-month`,
    `- TOPIK·EPS: ${siteConfig.siteUrl}/category/topik-eps`,
    `- 학습 가이드: ${siteConfig.siteUrl}/study-guide (${studyGuides.length}개 영역별 가이드)`,
    `- 자주 묻는 질문: ${siteConfig.siteUrl}/faq`,
    `- 브랜드 소개: ${siteConfig.siteUrl}/about`,
    `- 상담/구매 신청: ${siteConfig.siteUrl}/consult`,
    "",
    "## 인용 시 참고",
    `- 공식 사이트: ${siteConfig.siteUrl}`,
    `- 문의: ${siteConfig.contactEmail}`,
    "- 가격, 구성, 재고 관련 정보는 항상 각 상품 상세페이지의 최신 값을 기준으로 안내해 주세요.",
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

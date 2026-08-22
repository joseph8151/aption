import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import ProductsExplorer from "@/components/ProductsExplorer";

export const metadata: Metadata = {
  title: "전체 문제집",
  description:
    "NCS, 공기업, 대기업 인적성, 취업 직무능력 문제집을 시험·영역·난이도·상품유형으로 검색하고 필터링하세요.",
};

export default function ProductsPage() {
  return (
    <div className="section-y-tight bg-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">
            전체 문제집
          </span>
          <h1 className="text-display font-black text-navy">내게 필요한 문제집 찾기</h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-gray sm:text-lg">
            시험, 영역, 난이도, 상품유형으로 원하는 문제집을 빠르게 찾아보세요.
          </p>
        </div>
        <Suspense fallback={<div className="py-20 text-center text-sm text-text-gray">불러오는 중...</div>}>
          <ProductsExplorer />
        </Suspense>
      </Container>
    </div>
  );
}

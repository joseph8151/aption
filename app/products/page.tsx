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
    <div className="py-12 lg:py-16">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
            전체 문제집
          </span>
          <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
            내게 필요한 문제집 찾기
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink/60">
            시험, 영역, 난이도, 상품유형으로 원하는 문제집을 빠르게 찾아보세요.
          </p>
        </div>
        <Suspense fallback={<div className="py-20 text-center text-sm text-ink/50">불러오는 중...</div>}>
          <ProductsExplorer />
        </Suspense>
      </Container>
    </div>
  );
}

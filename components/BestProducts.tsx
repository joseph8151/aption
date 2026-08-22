import Link from "next/link";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { bestProducts } from "@/data/products";

export default function BestProducts() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="BEST 문제집"
            title="지금 가장 필요한 문제부터"
            description="모든 영역을 한꺼번에 공부하기보다 부족한 영역을 집중적으로 반복하는 것이 더 효과적입니다."
          />
          <Link
            href="/products"
            className="shrink-0 text-sm font-bold text-blue transition hover:text-navy"
          >
            전체 문제집 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

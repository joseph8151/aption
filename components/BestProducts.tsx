import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { bestProducts } from "@/data/products";

export default function BestProducts() {
  return (
    <section className="section-y bg-white">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="BEST SELLERS"
            title="지금 가장 필요한 문제부터."
            description="모든 영역을 한꺼번에 공부하지 마세요. AptiON은 부족한 영역을 골라 집중적으로 반복할 수 있도록 설계합니다."
          />
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-1 text-sm font-bold text-navy"
          >
            전체 문제집 보기
            <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestProducts.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

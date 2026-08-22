import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { products } from "@/data/products";

const packages = products.filter((p) => p.productType === "패키지");

export default function PackageSection() {
  if (packages.length === 0) return null;

  return (
    <section className="section-y-tight bg-white">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="PACKAGES"
          title="따로 사는 것보다, 묶어서 반복하세요."
          description="단품 문제집보다 패키지로 준비하면 더 많은 영역을 더 합리적인 가격에 반복할 수 있습니다."
        />

        <div className="flex flex-col gap-5">
          {packages.map((pkg, i) => {
            const items = pkg.packageItems ?? [];
            const originalTotal = items.reduce((sum, item) => sum + item.originalPrice, 0);
            const savings = Math.max(originalTotal - pkg.price, 0);
            const discountRate = originalTotal > 0 ? Math.round((savings / originalTotal) * 100) : 0;

            return (
              <Reveal key={pkg.slug} delay={i * 90}>
                <div className="relative flex flex-col gap-6 overflow-hidden rounded-[20px] border border-line bg-ivory p-6 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(16,24,40,0.3)] sm:p-8 lg:flex-row lg:items-center lg:gap-10">
                  {pkg.bestValue ? (
                    <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1 text-[11px] font-extrabold tracking-wide text-navy">
                      BEST VALUE
                    </span>
                  ) : null}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-navy text-lime">
                    <Package size={24} strokeWidth={1.75} />
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-xl font-extrabold text-navy sm:text-2xl">{pkg.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item.name}
                          className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-text-gray"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                    <div className="flex items-baseline gap-2">
                      {originalTotal > pkg.price ? (
                        <span className="text-sm text-text-gray line-through">
                          {originalTotal.toLocaleString("ko-KR")}원
                        </span>
                      ) : null}
                      <span className="text-2xl font-black text-navy">
                        {pkg.price.toLocaleString("ko-KR")}원
                      </span>
                    </div>
                    {discountRate > 0 ? (
                      <span className="rounded-full bg-lime-tint px-2.5 py-1 text-xs font-bold text-navy">
                        {discountRate}% 할인 · {savings.toLocaleString("ko-KR")}원 절약
                      </span>
                    ) : null}
                    <Link
                      href={`/products/${pkg.slug}`}
                      className="group mt-1 inline-flex items-center gap-1.5 rounded-[12px] bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-2"
                    >
                      패키지 자세히 보기
                      <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

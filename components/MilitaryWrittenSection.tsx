import { militaryWrittenProducts } from "@/data/midTermProducts";
import MidTermProductCard from "./MidTermProductCard";
import Container from "./Container";
import { midTermFontVars, midTermColors } from "@/lib/midTermFonts";

export default function MilitaryWrittenSection() {
  return (
    <section className={midTermFontVars} style={{ background: midTermColors.bg, color: midTermColors.ink }}>
      <Container className="flex flex-col gap-8 py-16 sm:py-20">
        <div className="flex flex-col gap-3">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-fragment-mono), monospace", color: midTermColors.accent }}
          >
            CATALOG · 군 필기
          </span>
          <h2
            className="text-3xl leading-tight font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
          >
            군무원과 장교, 시험 과목이 다릅니다.
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ opacity: 0.75 }}>
            공채와 사관 지원, 준비하는 과목이 다른 만큼 실전도 따로 나눴습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {militaryWrittenProducts.map((product) => (
            <MidTermProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

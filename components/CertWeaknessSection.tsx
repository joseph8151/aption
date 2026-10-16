import { certWeaknessProducts } from "@/data/midTermProducts";
import MidTermProductCard from "./MidTermProductCard";
import Container from "./Container";
import { midTermFontVars, midTermColors } from "@/lib/midTermFonts";

export default function CertWeaknessSection() {
  return (
    <section className={midTermFontVars} style={{ background: midTermColors.card, color: midTermColors.ink }}>
      <Container className="flex flex-col gap-8 py-16 sm:py-20">
        <div className="flex flex-col gap-3">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-fragment-mono), monospace", color: midTermColors.accent }}
          >
            CATALOG · 자격 약점
          </span>
          <h2
            className="text-3xl leading-tight font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
          >
            틀리는 유형만 다시 봅니다.
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ opacity: 0.75 }}>
            전체를 다시 풀 시간은 없습니다. 자주 틀리는 유형만 모았습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certWeaknessProducts.map((product) => (
            <MidTermProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

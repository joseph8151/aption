import { interviewDocsGroups } from "@/data/midTermProducts";
import MidTermProductCard from "./MidTermProductCard";
import Container from "./Container";
import { midTermFontVars, midTermColors } from "@/lib/midTermFonts";

export default function InterviewDocsSection() {
  return (
    <section className={midTermFontVars} style={{ background: midTermColors.bg, color: midTermColors.ink }}>
      <Container className="flex flex-col gap-10 py-16 sm:py-20">
        <div className="flex flex-col gap-3">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-fragment-mono), monospace", color: midTermColors.accent }}
          >
            CATALOG · 면접·서류·기타
          </span>
          <h2
            className="text-3xl leading-tight font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
          >
            필기 다음은, 서류와 면접입니다.
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ opacity: 0.75 }}>
            합격 다음 단계도 미리 준비합니다.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {interviewDocsGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <h3
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-fragment-mono), monospace", color: midTermColors.accent }}
              >
                {group.label}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {group.products.map((product) => (
                  <MidTermProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

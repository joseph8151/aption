import Link from "next/link";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { concernItems } from "@/data/concerns";

export default function ConcernSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="고민별 문제집 추천" title="이런 고민이 있다면?" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {concernItems.map((item) => (
            <Link
              key={item.concern}
              href={item.productSlug ? `/products/${item.productSlug}` : "/consult"}
              className="flex flex-col gap-4 rounded-xl border border-line bg-offwhite p-5 transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-md"
            >
              <p className="text-sm font-semibold leading-relaxed text-ink/75">
                &ldquo;{item.concern}&rdquo;
              </p>
              <div className="mt-auto flex flex-col gap-1">
                <span className="text-xs font-bold text-blue">추천</span>
                <span className="text-sm font-bold text-navy">{item.recommendationLabel}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/consult"
            className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:brightness-95"
          >
            나에게 맞는 문제집 상담받기
          </Link>
        </div>
      </Container>
    </section>
  );
}

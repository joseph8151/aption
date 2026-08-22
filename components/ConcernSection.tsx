import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { concernItems } from "@/data/concerns";

export default function ConcernSection() {
  return (
    <section className="section-y-tight bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="고민별 문제집 추천" title="이런 고민이 있다면?" align="center" />

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {concernItems.map((item, i) => (
            <Reveal key={item.concern} delay={i * 80} className="flex flex-col items-center gap-4">
              <div className="relative w-full rounded-[18px] bg-gray-light p-5">
                <p className="text-sm font-bold leading-relaxed text-navy">
                  &ldquo;{item.concern}&rdquo;
                </p>
                <span
                  className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 bg-gray-light"
                  aria-hidden="true"
                />
              </div>
              <Link
                href={item.productSlug ? `/products/${item.productSlug}` : "/consult"}
                className="group flex w-full flex-col items-start gap-1 rounded-[14px] border border-line px-4 py-3 transition hover:border-navy/30 hover:bg-gray-light"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-lime-strong">
                  추천
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-navy">
                  {item.recommendationLabel}
                  <ArrowRight
                    size={13}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/consult"
            className="inline-flex items-center justify-center rounded-[14px] bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:bg-lime-strong"
          >
            나에게 맞는 문제집 상담받기
          </Link>
        </div>
      </Container>
    </section>
  );
}

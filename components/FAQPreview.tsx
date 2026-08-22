import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FAQAccordion from "./FAQAccordion";
import Reveal from "./Reveal";
import { faqItems } from "@/data/faq";

export default function FAQPreview() {
  return (
    <section className="section-y-tight bg-white">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="FAQ" title="시작하기 전에 궁금한 것들." align="center" />
        <Reveal className="mx-auto w-full max-w-3xl">
          <FAQAccordion items={faqItems.slice(0, 5)} />
        </Reveal>
        <div className="flex justify-center">
          <Link href="/faq" className="group inline-flex items-center gap-1 text-sm font-bold text-navy">
            FAQ 전체 보기
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

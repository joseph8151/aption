import Link from "next/link";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { faqItems } from "@/data/faq";

export default function FAQPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" align="center" />
        <div className="mx-auto w-full max-w-3xl">
          <FAQAccordion items={faqItems.slice(0, 5)} />
        </div>
        <div className="flex justify-center">
          <Link href="/faq" className="text-sm font-bold text-blue transition hover:text-navy">
            FAQ 전체 보기 →
          </Link>
        </div>
      </Container>
    </section>
  );
}

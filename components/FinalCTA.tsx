import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-snug text-balance sm:text-4xl">
          어떤 문제집부터 시작할지 고민되시나요?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          준비 중인 시험과 현재 가장 어려운 영역을 알려주세요.
          <br className="hidden sm:block" />
          필요한 문제집을 안내해드립니다.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/consult"
            className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:brightness-95"
          >
            상담 신청하기
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white transition hover:border-white/50"
          >
            전화 문의하기
          </a>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="section-y-tight bg-navy text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-display max-w-2xl font-black text-balance">
            어떤 문제부터
            <br />
            풀어야 할지 모르겠다면.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            준비 중인 시험과 현재 어려운 영역을 알려주세요.
            <br className="hidden sm:block" />
            AptiON이 필요한 문제집부터 안내합니다.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/consult"
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-lime px-7 py-4 text-base font-bold text-navy transition hover:bg-lime-strong"
            >
              문제집 추천받기
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-[14px] border border-white/25 px-7 py-4 text-base font-bold text-white transition hover:border-white/50"
            >
              전체 문제집 보기
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

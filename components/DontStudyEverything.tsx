import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function DontStudyEverything() {
  return (
    <section className="section-y-tight bg-ivory">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 rounded-[24px] border border-line bg-white p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <h2 className="text-display font-black leading-[1.08] text-navy text-balance">
            모든 영역을
            <br />
            똑같이 공부할
            <br />
            필요는 없습니다.
          </h2>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-base leading-relaxed text-text-gray sm:text-lg">
              NCS 준비 시간이 부족하다면 잘하는 영역보다 틀리는 영역에 시간을 더
              써야 합니다. AptiON은 한 권에 모든 영역을 얕게 넣는 대신 수리,
              자료해석, 문제해결 등 필요한 유형만 선택하여 충분한 문제를 반복할
              수 있도록 구성합니다.
            </p>
            <Link
              href="/products"
              className="group inline-flex w-fit items-center gap-2 rounded-[14px] bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-navy-2"
            >
              약점별 문제집 찾기
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

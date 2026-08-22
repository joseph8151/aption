import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "브랜드 소개",
  description:
    "AptiON은 Aptitude(직무역량)와 ON(켜다)이 결합된 이름으로, 반복 훈련을 통해 실전 시험 감각을 켜는 문제집 전문 브랜드입니다.",
};

const positioningPoints = [
  "유형별 집중 문제집",
  "실전 문제집",
  "고난도 문제집",
  "시간단축 문제집",
  "실전 모의고사",
  "약점 보완 문제집",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <Container className="flex flex-col gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
            Brand Story
          </span>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-navy text-balance sm:text-5xl">
            Aptitude ON.
            <br />
            가능성을 실력으로.
          </h1>
          <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            <p>
              AptiON은 단순히 이론을 읽는 것보다 실제 문제를 반복해서 풀며 시험 감각을 만드는
              것을 중요하게 생각합니다.
            </p>
            <p>
              시험장에서 필요한 것은 <strong className="font-bold text-navy">아는 것</strong>
              뿐 아니라{" "}
              <strong className="font-bold text-navy">정확하게, 제한된 시간 안에 풀어내는 능력</strong>
              입니다.
            </p>
            <p>
              AptiON은 유형별·난이도별 문제 훈련을 통해 수험생이 자신의 약점을 발견하고
              집중적으로 보완할 수 있도록 문제집을 개발합니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">브랜드 이름의 의미</h2>
            <p className="text-base leading-relaxed text-ink/65">
              AptiON은 <strong className="font-bold text-navy">Aptitude(직무역량) + ON(켜다)</strong>
              의 합성어로, &ldquo;직무역량을 켜다&rdquo;, &ldquo;합격 준비를 시작하다&rdquo;라는
              의미를 담고 있습니다.
            </p>
            <blockquote className="border-l-4 border-lime pl-4 text-base font-semibold leading-relaxed text-navy">
              Turn Your Aptitude ON.
              <br />
              합격을 위한 실전 감각을 켜다.
            </blockquote>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">브랜드 포지셔닝</h2>
            <p className="text-base leading-relaxed text-ink/65">
              NCS·공기업·대기업 인적성 시험을 준비하는 취업준비생을 위한 실전 문제집 전문
              브랜드입니다. 단순 이론서보다는 아래 유형의 문제집을 중심으로 구성합니다.
            </p>
            <ul className="grid grid-cols-2 gap-2.5">
              {positioningPoints.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm font-semibold text-navy"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-extrabold text-navy sm:text-3xl">
            지금 어떤 문제집이 필요한지 확인해보세요.
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition hover:bg-navy-dark"
          >
            문제집 전체 보기
          </Link>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

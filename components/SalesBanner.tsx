import Link from "next/link";
import Container from "./Container";

export default function SalesBanner() {
  return (
    <section className="bg-blue-tint py-16 lg:py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-2xl text-2xl font-extrabold leading-snug text-navy text-balance sm:text-3xl">
          문제를 이해했다면, 이제 반복할 차례입니다.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink/65">
          한두 문제를 이해하는 것과 시험장에서 같은 유형을 빠르게 풀어내는 것은 다릅니다.
          AptiON은 특정 유형을 충분히 반복할 수 있도록 문제량 중심의 학습 콘텐츠를 제공합니다.
        </p>
        <Link
          href="/products"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white transition hover:bg-navy-dark"
        >
          문제집 찾아보기
        </Link>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import BookCover from "@/components/BookCover";
import Badge from "@/components/Badge";
import ProductCard from "@/components/ProductCard";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.shortDescription} · ${product.questionCount}문제 · ${product.difficultyLabel}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.area === product.area)
    .slice(0, 4);

  return (
    <div className="py-10 lg:py-14">
      <Container className="flex flex-col gap-16">
        <nav aria-label="이동 경로" className="text-sm text-ink/50">
          <Link href="/" className="hover:text-navy">
            홈
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-navy">
            문제집
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/70">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <BookCover
              accent={product.coverAccent}
              eyebrow={product.coverEyebrow}
              titleLines={product.coverTitleLines}
              footer={product.coverFooter}
              className="shadow-xl"
            />
            {product.badges.length > 0 ? (
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {product.badges.map((b) => (
                  <Badge key={b} label={b} />
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
                {product.coverEyebrow} · {product.area}
              </span>
              <h1 className="text-3xl font-extrabold leading-snug text-navy sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-base leading-relaxed text-ink/65">{product.shortDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-xl border border-line bg-white p-5 sm:grid-cols-4">
              <Meta label="문제 수" value={`${product.questionCount}문제`} />
              <Meta label="페이지 수" value={`${product.pageCount}쪽`} />
              <Meta label="난이도" value={product.difficultyLabel} />
              <Meta label="상품유형" value={product.productType} />
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
              <span className="text-3xl font-black text-navy">
                {product.price.toLocaleString("ko-KR")}원
              </span>
              <p className="text-sm leading-relaxed text-ink/55">
                현재는 상담 신청 또는 전화 문의를 통해 구매 안내를 드리고 있습니다.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/consult?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-navy px-6 py-3.5 text-base font-bold text-white transition hover:bg-navy-dark"
                >
                  구매 문의
                </Link>
                <Link
                  href={`/consult?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-navy/15 px-6 py-3.5 text-base font-bold text-navy transition hover:border-navy/40"
                >
                  문제집 상담
                </Link>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">추천 대상</h2>
              <ul className="flex flex-col gap-2">
                {product.targetAudience.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Section title="학습 목표">
            <ul className="flex flex-col gap-2">
              {product.learningGoals.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {g}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="문제 구성">
            <ul className="flex flex-col gap-2">
              {product.composition.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {c}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="목차">
          <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {product.toc.map((chapter, i) => (
              <li
                key={chapter.title}
                className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink/75"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/5 text-xs font-bold text-navy">
                  {i + 1}
                </span>
                {chapter.title}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="샘플 페이지">
          <div className="flex flex-col gap-4 rounded-xl border border-dashed border-line bg-white p-8 text-center">
            <p className="text-sm leading-relaxed text-ink/60">{product.samplePreview}</p>
            <a
              href={`/consult?product=${encodeURIComponent(product.name)}`}
              className="mx-auto text-sm font-bold text-blue hover:text-navy"
            >
              샘플 문제 상담 요청하기 →
            </a>
          </div>
        </Section>

        <Section title="구매 방법">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { step: "1", title: "상담 신청 또는 전화 문의", desc: "필요한 문제집과 준비 상황을 알려주세요." },
              { step: "2", title: "안내 및 확인", desc: "적합한 문제집과 구매 방법을 안내해드립니다." },
              { step: "3", title: "구매 진행", desc: "안내에 따라 결제 및 배송을 진행합니다." },
            ].map((s) => (
              <li key={s.step} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
                <span className="text-sm font-black text-lime-dark">STEP {s.step}</span>
                <span className="text-sm font-bold text-navy">{s.title}</span>
                <span className="text-xs leading-relaxed text-ink/55">{s.desc}</span>
              </li>
            ))}
          </ol>
        </Section>

        {related.length > 0 ? (
          <Section title="함께 보면 좋은 문제집">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Section>
        ) : null}
      </Container>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-ink/45">{label}</span>
      <span className="text-sm font-bold text-navy">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{title}</h2>
      {children}
    </div>
  );
}

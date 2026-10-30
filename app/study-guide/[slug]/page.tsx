import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { studyGuides, getStudyGuideBySlug } from "@/data/studyGuides";
import { getProductBySlug } from "@/data/products";
import { areaKeywords, siteKeywords } from "@/lib/seoKeywords";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return studyGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getStudyGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    keywords: [...(areaKeywords[guide.area] ?? []), ...siteKeywords.slice(0, 6)],
    alternates: { canonical: `/study-guide/${guide.slug}` },
  };
}

export default async function StudyGuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getStudyGuideBySlug(slug);
  if (!guide) notFound();

  const relatedProducts = guide.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter((p) => p !== undefined);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    articleSection: guide.area,
    author: { "@type": "Organization", name: siteConfig.brandName },
    publisher: { "@type": "Organization", name: siteConfig.brandName },
    mainEntityOfPage: `${siteConfig.siteUrl}/study-guide/${guide.slug}`,
  };

  return (
    <div className="section-y-tight bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Container className="flex flex-col gap-14">
        <nav aria-label="이동 경로" className="text-sm text-text-gray">
          <Link href="/" className="hover:text-navy">
            홈
          </Link>
          <span className="mx-2">/</span>
          <Link href="/study-guide" className="hover:text-navy">
            학습 가이드
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/70">{guide.title}</span>
        </nav>

        <div className="flex max-w-3xl flex-col gap-4">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-lime-strong">
            {guide.area}
          </span>
          <h1 className="text-display font-display font-bold text-navy text-balance">
            {guide.title}
          </h1>
          <p className="text-base leading-relaxed text-text-gray sm:text-lg">{guide.intro}</p>
        </div>

        <div className="flex max-w-3xl flex-col gap-10">
          {guide.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              <ul className="flex flex-col gap-2">
                {section.body.map((paragraph, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink/75 sm:text-base">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-strong" />
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {relatedProducts.length > 0 ? (
          <div className="flex flex-col gap-5 border-t border-line pt-10">
            <h2 className="text-lg font-bold text-navy">관련 문제집</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ) : null}

        <Link
          href="/consult"
          className="inline-flex w-fit items-center justify-center rounded-[6px] bg-lime px-7 py-3.5 text-base font-bold text-white transition hover:bg-lime-strong"
        >
          내게 맞는 문제집 상담받기
        </Link>
      </Container>
    </div>
  );
}

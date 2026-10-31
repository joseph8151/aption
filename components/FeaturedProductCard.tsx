import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";
import BookCover from "./BookCover";
import Badge from "./Badge";
import { getProductCoverTheme } from "@/lib/coverAccentColor";
import SamplePreviewModal from "./samplepreview/SamplePreviewModal";
import { getSampleByProductSlug } from "@/data/productSamples";
import SelectionToggle from "./SelectionToggle";

export default function FeaturedProductCard({ product }: { product: Product }) {
  const theme = getProductCoverTheme(product);
  const sample = getSampleByProductSlug(product.slug);

  return (
    <div className="grid grid-cols-1 gap-8 rounded-[8px] border border-line bg-white p-6 sm:p-8 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-14 lg:p-10">
      <Link href={`/products/${product.slug}`} className="relative mx-auto block w-full max-w-[260px] lg:mx-0">
        <BookCover
          theme={theme}
          eyebrow={product.coverEyebrow}
          titleLines={product.coverTitleLines}
          footer={product.coverFooter}
          bigNumber={product.questionCount}
          className="shadow-[0_32px_56px_-28px_rgba(20,18,15,0.35)]"
        />
        {product.badges.length > 0 ? (
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        ) : null}
        <SelectionToggle
          slug={product.slug}
          name={product.name}
          price={product.price}
          className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[11px] font-bold text-navy backdrop-blur-sm transition hover:bg-white"
        />
      </Link>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-lime-strong">
          No.1 베스트셀러 · {product.coverEyebrow} · {product.area}
        </span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-2xl font-display font-bold leading-snug text-navy sm:text-3xl">
            {product.name}
          </h3>
        </Link>
        <p className="max-w-xl text-base leading-relaxed text-text-gray">{product.shortDescription}</p>

        {product.targetAudience[0] ? (
          <p className="max-w-xl border-l-2 border-line pl-3 text-sm leading-relaxed text-ink/70">
            {product.targetAudience[0]}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-text-gray">
          <span>{product.questionCount} Questions</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{product.difficultyLabel}</span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <span className="text-2xl font-black text-navy">
            {product.price.toLocaleString("ko-KR")}원
          </span>
          <div className="flex flex-1 flex-wrap gap-2 sm:flex-none">
            {sample ? (
              <SamplePreviewModal
                sample={sample}
                productName={product.name}
                productPrice={product.price}
                triggerClassName="flex items-center justify-center gap-1.5 rounded-[6px] border border-line px-4 py-3 text-sm font-bold text-navy transition hover:border-navy/30 hover:bg-gray-light"
              />
            ) : null}
            <Link
              href={`/consult?product=${encodeURIComponent(product.name)}&intent=${encodeURIComponent("구매")}&price=${product.price}`}
              className="flex items-center justify-center rounded-[6px] bg-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-navy-2"
            >
              구매 신청
            </Link>
            <Link
              href={`/products/${product.slug}`}
              className="group/link inline-flex items-center gap-1 px-2 text-sm font-bold text-navy"
            >
              자세히 보기
              <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";
import BookCover from "./BookCover";
import Badge from "./Badge";
import { getProductCoverTheme } from "@/lib/coverAccentColor";

export default function ProductCard({ product }: { product: Product }) {
  const theme = getProductCoverTheme(product);

  return (
    <div className="group flex flex-col overflow-hidden rounded-[8px] border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/15 hover:shadow-[0_24px_48px_-24px_rgba(20,18,15,0.28)]">
      <Link href={`/products/${product.slug}`} className="block p-5 pb-0">
        <div className="relative overflow-hidden rounded-[6px]">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <BookCover
              theme={theme}
              eyebrow={product.coverEyebrow}
              titleLines={product.coverTitleLines}
              footer={product.coverFooter}
              bigNumber={product.questionCount}
            />
          </div>
          {product.badges.length > 0 ? (
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              {product.badges.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5 pt-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-gray">
          {product.coverEyebrow} · {product.area}
        </span>

        <div className="flex flex-col gap-1">
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-[17px] font-extrabold leading-snug text-navy transition group-hover:text-navy/80">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm leading-relaxed text-text-gray">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-text-gray">
          <span>{product.questionCount} Questions</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{product.difficultyLabel}</span>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-lg font-black text-navy">
            {product.price.toLocaleString("ko-KR")}원
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="group/link inline-flex items-center gap-1 text-sm font-bold text-navy"
          >
            View Book
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </Link>
        </div>

        <Link
          href={`/consult?product=${encodeURIComponent(product.name)}`}
          className="mt-1 flex items-center justify-center rounded-[6px] bg-navy px-3 py-2.5 text-sm font-bold text-white transition hover:bg-navy-2"
        >
          구매 문의
        </Link>
      </div>
    </div>
  );
}

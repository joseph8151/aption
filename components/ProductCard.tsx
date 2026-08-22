import Link from "next/link";
import { Product } from "@/lib/types";
import BookCover from "./BookCover";
import Badge from "./Badge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="block p-5 pb-0">
        <div className="relative">
          <BookCover
            accent={product.coverAccent}
            eyebrow={product.coverEyebrow}
            titleLines={product.coverTitleLines}
            footer={product.coverFooter}
            className="shadow-md transition group-hover:shadow-xl"
          />
          {product.badges.length > 0 ? (
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              {product.badges.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1.5">
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-base font-bold leading-snug text-navy transition group-hover:text-blue">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink/60">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink/50">
          <span>{product.questionCount}문제</span>
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span>{product.difficultyLabel}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-extrabold text-navy">
            {product.price.toLocaleString("ko-KR")}원
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex flex-1 items-center justify-center rounded-lg border border-navy/15 px-3 py-2.5 text-sm font-bold text-navy transition hover:border-navy/40"
          >
            상세보기
          </Link>
          <Link
            href={`/consult?product=${encodeURIComponent(product.name)}`}
            className="flex flex-1 items-center justify-center rounded-lg bg-navy px-3 py-2.5 text-sm font-bold text-white transition hover:bg-navy-dark"
          >
            구매 문의
          </Link>
        </div>
      </div>
    </div>
  );
}

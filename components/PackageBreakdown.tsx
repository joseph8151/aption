import Link from "next/link";
import { PackageItem } from "@/lib/types";

export default function PackageBreakdown({
  items,
  packagePrice,
}: {
  items: PackageItem[];
  packagePrice: number;
}) {
  const originalTotal = items.reduce((sum, item) => sum + item.originalPrice, 0);
  const savings = Math.max(originalTotal - packagePrice, 0);
  const discountRate = originalTotal > 0 ? Math.round((savings / originalTotal) * 100) : 0;

  return (
    <div className="flex flex-col gap-5 rounded-[8px] border border-line bg-white p-6">
      <ul className="flex flex-col divide-y divide-line">
        {items.map((item) => {
          const content = (
            <>
              <span className="flex-1 text-sm font-medium text-ink/80">{item.name}</span>
              <span className="shrink-0 text-sm text-ink/40 line-through">
                {item.originalPrice.toLocaleString("ko-KR")}원
              </span>
            </>
          );
          return (
            <li key={item.name} className="flex items-center gap-3 py-3">
              {item.slug ? (
                <Link
                  href={`/products/${item.slug}`}
                  className="flex flex-1 items-center gap-3 transition hover:opacity-70"
                >
                  {content}
                </Link>
              ) : (
                <div className="flex flex-1 items-center gap-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-2 rounded-lg bg-offwhite p-4">
        <div className="flex items-center justify-between text-sm text-ink/55">
          <span>개별 구매가</span>
          <span className="line-through">{originalTotal.toLocaleString("ko-KR")}원</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-navy">패키지가</span>
          <span className="text-xl font-black text-navy">
            {packagePrice.toLocaleString("ko-KR")}원
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-line pt-2">
          <span className="text-sm font-semibold text-ink/60">패키지 혜택</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-sm font-bold text-navy">
            {discountRate}% 할인 · {savings.toLocaleString("ko-KR")}원 절약
          </span>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { MidTermProduct } from "@/data/midTermProducts";
import { midTermColors } from "@/lib/midTermFonts";
import SamplePreviewModal from "./samplepreview/SamplePreviewModal";
import { getSampleByProductSlug } from "@/data/productSamples";
import SelectionToggle from "./SelectionToggle";

export default function MidTermProductCard({ product }: { product: MidTermProduct }) {
  const sample = getSampleByProductSlug(product.slug);
  return (
    <div
      className="flex flex-col gap-5 rounded-[2px] border p-6"
      style={{ background: midTermColors.card, borderColor: midTermColors.line }}
    >
      <div className="flex items-center justify-between gap-2">
        {product.badge ? (
          <span
            className="inline-flex w-fit items-center rounded-[2px] px-2 py-1 text-[11px] font-medium tracking-wide"
            style={{
              fontFamily: "var(--font-fragment-mono), monospace",
              background: midTermColors.accent,
              color: midTermColors.card,
            }}
          >
            {product.badge}
          </span>
        ) : (
          <span />
        )}
        <SelectionToggle
          slug={product.slug}
          name={product.title}
          price={product.price}
          className="flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 text-[11px] font-semibold"
          style={{ borderColor: midTermColors.line, color: midTermColors.ink }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="text-xl leading-snug font-bold"
          style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
        >
          {product.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: midTermColors.ink, opacity: 0.7 }}>
          {product.promise}
        </p>
      </div>

      <span
        className="border-t pt-4 text-[12px]"
        style={{
          fontFamily: "var(--font-fragment-mono), monospace",
          borderColor: midTermColors.line,
          color: midTermColors.ink,
          opacity: 0.6,
        }}
      >
        {product.meta}
      </span>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-xl font-bold" style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}>
          {product.price.toLocaleString("ko-KR")}원
        </span>
        <div className="flex gap-2">
          {sample ? (
            <SamplePreviewModal
              sample={sample}
              productName={product.title}
              productPrice={product.price}
              triggerClassName="inline-flex items-center justify-center gap-1.5 rounded-[2px] border px-4 py-3 text-sm font-semibold"
              triggerStyle={{ borderColor: midTermColors.line, color: midTermColors.ink }}
            />
          ) : null}
          <Link
            href={`/consult?product=${encodeURIComponent(product.title)}&intent=${encodeURIComponent("구매")}&price=${product.price}`}
            className="inline-flex items-center justify-center rounded-[2px] px-5 py-3 text-sm font-semibold"
            style={{ background: midTermColors.button, color: midTermColors.card }}
          >
            구매 신청
          </Link>
        </div>
      </div>
    </div>
  );
}

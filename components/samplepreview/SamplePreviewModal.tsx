"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { FileText, Minus, Plus, X } from "lucide-react";
import { ProductSample } from "./sampleTypes";
import SampleA4Page from "./SampleA4Page";

export default function SamplePreviewModal({
  sample,
  productName,
  triggerClassName,
  triggerStyle,
}: {
  sample: ProductSample;
  productName: string;
  triggerClassName?: string;
  triggerStyle?: CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<0 | 1>(0);
  const [zoomed, setZoomed] = useState(false);
  const pageCount = sample.questions.length > sample.page1Count ? 2 : 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPage(0);
          setZoomed(false);
          setOpen(true);
        }}
        className={
          triggerClassName ??
          "inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-line px-3 py-3 text-sm font-bold text-navy transition hover:border-navy/30 hover:bg-gray-light"
        }
        style={triggerStyle}
      >
        <FileText size={15} strokeWidth={2.25} />
        샘플 보기
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${sample.sampleTitle} 샘플 미리보기`}
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-full w-full flex-col overflow-hidden bg-[#EFE8DC] sm:h-auto sm:max-h-[92vh] sm:w-auto sm:rounded-[10px] sm:shadow-[0_32px_64px_-20px_rgba(20,18,15,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#D6CDBE] bg-[#F7F3EC] px-4 py-3">
              <span className="truncate text-sm font-bold text-[#1A1713]">{productName}</span>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  aria-label="축소"
                  onClick={() => setZoomed(false)}
                  className="hidden h-8 w-8 items-center justify-center rounded-[6px] text-[#1A1713]/60 transition hover:bg-[#EFE8DC] sm:flex"
                >
                  <Minus size={15} strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  aria-label="확대"
                  onClick={() => setZoomed(true)}
                  className="hidden h-8 w-8 items-center justify-center rounded-[6px] text-[#1A1713]/60 transition hover:bg-[#EFE8DC] sm:flex"
                >
                  <Plus size={15} strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  aria-label="닫기"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-[6px] text-[#1A1713]/70 transition hover:bg-[#EFE8DC]"
                >
                  <X size={18} strokeWidth={2.25} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-center overflow-auto px-3 py-5 sm:px-8 sm:py-7">
              <div
                className={`origin-top transition-[width] duration-200 ${zoomed ? "w-[720px] max-w-none" : "w-full sm:w-[480px]"}`}
                style={{ aspectRatio: zoomed ? undefined : "210 / 297" }}
              >
                <div className="h-full min-h-[600px] rounded-[4px] border border-[#D6CDBE] shadow-[0_4px_16px_-4px_rgba(20,18,15,0.12)]">
                  <SampleA4Page sample={sample} pageIndex={page} />
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-[#D6CDBE] bg-[#F7F3EC] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              {pageCount > 1 ? (
                <div className="flex items-center justify-center gap-3 text-sm font-semibold text-[#1A1713]">
                  <button
                    type="button"
                    disabled={page === 0}
                    onClick={() => setPage(0)}
                    className="rounded-[6px] px-2.5 py-1.5 text-[#1A1713]/60 transition hover:bg-[#EFE8DC] disabled:opacity-30"
                  >
                    ← 이전
                  </button>
                  <span className="font-mono text-xs text-[#1A1713]/60">{page + 1} / {pageCount}</span>
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage(1)}
                    className="rounded-[6px] px-2.5 py-1.5 text-[#1A1713]/60 transition hover:bg-[#EFE8DC] disabled:opacity-30"
                  >
                    다음 →
                  </button>
                </div>
              ) : (
                <span />
              )}
              <Link
                href={`/consult?product=${encodeURIComponent(productName)}`}
                className="inline-flex items-center justify-center rounded-[6px] bg-[#1C4336] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                구매 문의
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

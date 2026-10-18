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
  const [zoom, setZoom] = useState(1);
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
          setZoom(1);
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
        // 바깥 오버레이 자체가 스크롤 컨테이너입니다. 내용이 화면보다 길어도
        // 이 레이어를 스크롤해서 항상 헤더(닫기 버튼)·푸터(구매 문의)에 닿을 수 있습니다.
        <div
          className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink/70"
          role="dialog"
          aria-modal="true"
          aria-label={`${sample.sampleTitle} 샘플 미리보기`}
          onClick={() => setOpen(false)}
        >
          <div className="flex min-h-full items-start justify-center sm:items-center sm:p-6">
            <div
              className="relative flex w-full flex-col bg-[#EFE8DC] sm:w-[560px] sm:rounded-[10px] sm:shadow-[0_32px_64px_-20px_rgba(20,18,15,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#D6CDBE] bg-[#F7F3EC] px-4 py-3">
                <span className="truncate text-sm font-bold text-[#1A1713]">{productName}</span>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    aria-label="축소"
                    onClick={() => setZoom((z) => Math.max(0.85, Math.round((z - 0.1) * 100) / 100))}
                    className="hidden h-9 w-9 items-center justify-center rounded-[6px] text-[#1A1713]/60 transition hover:bg-[#EFE8DC] sm:flex"
                  >
                    <Minus size={16} strokeWidth={2.25} />
                  </button>
                  <button
                    type="button"
                    aria-label="확대"
                    onClick={() => setZoom((z) => Math.min(1.4, Math.round((z + 0.1) * 100) / 100))}
                    className="hidden h-9 w-9 items-center justify-center rounded-[6px] text-[#1A1713]/60 transition hover:bg-[#EFE8DC] sm:flex"
                  >
                    <Plus size={16} strokeWidth={2.25} />
                  </button>
                  <button
                    type="button"
                    aria-label="닫기"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-[6px] text-[#1A1713]/70 transition hover:bg-[#EFE8DC]"
                  >
                    <X size={20} strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center px-3 py-5 sm:px-8 sm:py-7">
                <div
                  className="w-full max-w-[480px] origin-top transition-transform duration-150"
                  style={{ transform: `scale(${zoom})` }}
                >
                  <div className="rounded-[4px] border border-[#D6CDBE] bg-white shadow-[0_4px_16px_-4px_rgba(20,18,15,0.12)]">
                    <SampleA4Page sample={sample} pageIndex={page} />
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 z-10 flex flex-col gap-3 border-t border-[#D6CDBE] bg-[#F7F3EC] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
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
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-[6px] border border-[#D6CDBE] px-4 py-3 text-sm font-bold text-[#1A1713] transition hover:bg-[#EFE8DC]"
                  >
                    닫기
                  </button>
                  <Link
                    href={`/consult?product=${encodeURIComponent(productName)}`}
                    className="inline-flex flex-1 items-center justify-center rounded-[6px] bg-[#1C4336] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 sm:flex-none"
                  >
                    구매 문의
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

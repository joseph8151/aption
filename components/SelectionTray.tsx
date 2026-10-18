"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useProductSelection } from "@/lib/ProductSelectionContext";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

export default function SelectionTray() {
  const { items, remove, clear } = useProductSelection();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  if (items.length === 0 || pathname === "/consult") return null;

  const total = items.reduce((sum, i) => sum + i.price, 0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.set(
      "선택한 문제집",
      items.map((i) => `${i.name} (${i.price.toLocaleString("ko-KR")}원)`).join("\n")
    );
    formData.set("상품 수", String(items.length));
    formData.set("합계 금액", `${total.toLocaleString("ko-KR")}원`);
    formData.set("문의 유형", "여러 문제집 한번에 안내 요청");

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const closeAndReset = () => {
    setOpen(false);
    if (status === "success") {
      clear();
      setStatus("idle");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-20 left-5 z-40 flex items-center gap-2 rounded-full bg-navy px-5 py-3.5 text-sm font-bold text-ivory shadow-[0_12px_28px_-8px_rgba(20,18,15,0.45)] transition hover:bg-navy-2 lg:bottom-6"
      >
        <ShoppingBag size={18} strokeWidth={2.25} />
        선택 {items.length}개 안내받기
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink/70"
          role="dialog"
          aria-modal="true"
          aria-label="선택한 문제집 이메일로 안내받기"
          onClick={closeAndReset}
        >
          <div className="flex min-h-full items-start justify-center sm:items-center sm:p-6">
            <div
              className="relative flex w-full flex-col bg-white sm:w-[480px] sm:rounded-[10px] sm:shadow-[0_32px_64px_-20px_rgba(20,18,15,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-white px-5 py-4">
                <span className="text-base font-bold text-navy">선택한 문제집 {items.length}개</span>
                <button
                  type="button"
                  aria-label="닫기"
                  onClick={closeAndReset}
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] text-ink/60 transition hover:bg-gray-light"
                >
                  <X size={20} strokeWidth={2.25} />
                </button>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
                  <p className="text-base font-bold text-navy">
                    신청이 접수되었습니다. 확인 후 이메일로 안내드리겠습니다.
                  </p>
                  <button
                    type="button"
                    onClick={closeAndReset}
                    className="mt-2 inline-flex items-center justify-center rounded-[6px] bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-2"
                  >
                    확인
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-5 py-5">
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li
                        key={item.slug}
                        className="flex items-center justify-between gap-3 rounded-[6px] border border-line bg-gray-light px-3.5 py-2.5"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-navy">{item.name}</span>
                          <span className="text-xs text-text-gray">{item.price.toLocaleString("ko-KR")}원</span>
                        </div>
                        <button
                          type="button"
                          aria-label={`${item.name} 선택 해제`}
                          onClick={() => remove(item.slug)}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-text-gray transition hover:bg-white hover:text-navy"
                        >
                          <Trash2 size={14} strokeWidth={2} />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between border-t border-line pt-3 text-sm font-bold text-navy">
                    <span>합계</span>
                    <span>{total.toLocaleString("ko-KR")}원</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="selection-email" className="text-sm font-bold text-navy">
                      이메일 <span className="text-lime-strong">*</span>
                    </label>
                    <input
                      id="selection-email"
                      name="이메일"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="example@email.com"
                      className="input"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink/65">
                    <input type="checkbox" name="개인정보 수집 동의" required className="mt-0.5 h-4 w-4 accent-navy" />
                    <span>개인정보 수집 및 이용에 동의합니다. 안내 목적으로만 사용됩니다. (필수)</span>
                  </label>

                  {status === "error" ? (
                    <p role="alert" className="text-sm font-semibold text-red-600">
                      접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
                    </p>
                  ) : null}

                  <div className="sticky bottom-0 -mx-5 -mb-5 flex gap-2 border-t border-line bg-white px-5 py-4">
                    <button
                      type="button"
                      onClick={clear}
                      className="inline-flex items-center justify-center rounded-[6px] border border-line px-4 py-3 text-sm font-bold text-ink transition hover:bg-gray-light"
                    >
                      전체 삭제
                    </button>
                    <button
                      type="submit"
                      disabled={status === "submitting" || items.length === 0}
                      className="inline-flex flex-1 items-center justify-center rounded-[6px] bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-2 disabled:opacity-60"
                    >
                      {status === "submitting" ? "접수 중..." : "이메일로 안내받기"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

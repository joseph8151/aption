"use client";

import { FormEvent, useMemo, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useProductSelection } from "@/lib/ProductSelectionContext";
import { searchCatalog } from "@/lib/catalogSearch";

const examOptions = [
  "NCS",
  "공기업",
  "대기업 인적성",
  "GSAT 유형",
  "수리·자료해석",
  "논리·추리",
  "기타",
];

const weakAreaOptions = [
  "의사소통",
  "수리",
  "자료해석",
  "문제해결",
  "추리",
  "시간관리",
  "실전모의고사",
  "잘 모르겠음",
];

const inquiryTypeOptions = [
  { value: "상담", label: "상담만 받고 싶어요", desc: "어떤 문제집이 맞는지 먼저 물어보고 싶어요" },
  { value: "구매", label: "바로 구매하고 싶어요", desc: "문제집을 정했고 구매 방법을 안내받고 싶어요" },
] as const;

type InquiryType = (typeof inquiryTypeOptions)[number]["value"];
type Status = "idle" | "submitting" | "success" | "error";
type DesiredItem = { name: string; price?: number; slug?: string };

export default function ConsultForm({
  initialProduct = "",
  initialIntent,
  initialPrice,
}: {
  initialProduct?: string;
  initialIntent?: InquiryType;
  initialPrice?: number;
}) {
  const { items: selectedItems, remove: removeSelected, clear: clearSelected } = useProductSelection();
  const [status, setStatus] = useState<Status>("idle");
  const [weakAreas, setWeakAreas] = useState<string[]>([]);
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialIntent ?? "상담");
  const [copied, setCopied] = useState(false);
  const [manualItems, setManualItems] = useState<DesiredItem[]>(
    initialProduct ? [{ name: initialProduct, price: initialPrice }] : []
  );
  const [manualInput, setManualInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<{
    items: DesiredItem[];
    total: number;
    hasUnknown: boolean;
  } | null>(null);

  const suggestions = useMemo(() => searchCatalog(manualInput), [manualInput]);

  const addItem = (item: DesiredItem) => {
    const exists =
      selectedItems.some((i) => i.name === item.name) || manualItems.some((i) => i.name === item.name);
    if (!exists) setManualItems((prev) => [...prev, item]);
    setManualInput("");
    setShowSuggestions(false);
  };

  const addManualItem = () => {
    const name = manualInput.trim();
    if (!name) return;
    addItem({ name });
  };

  const removeManualItem = (name: string) => {
    setManualItems((prev) => prev.filter((i) => i.name !== name));
  };

  const desiredItems: (DesiredItem & { source: "context" | "manual" })[] = [
    ...selectedItems.map((i) => ({ name: i.name, price: i.price, slug: i.slug, source: "context" as const })),
    ...manualItems.map((i) => ({ ...i, source: "manual" as const })),
  ];
  const knownTotal = desiredItems.reduce((sum, i) => sum + (i.price ?? 0), 0);
  const hasUnknownPrice = desiredItems.some((i) => typeof i.price !== "number");

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.bankAccount.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // 클립보드 접근 실패 시 조용히 무시 — 번호는 화면에 그대로 표시되어 있음
    }
  };

  const toggleWeakArea = (value: string) => {
    setWeakAreas((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const formData = new FormData(form);
    formData.set("현재 가장 어려운 영역", weakAreas.join(", "));
    formData.set(
      "희망 문제집",
      desiredItems.length > 0
        ? desiredItems
            .map((i) => (typeof i.price === "number" ? `${i.name} (${i.price.toLocaleString("ko-KR")}원)` : i.name))
            .join("\n")
        : ""
    );
    if (knownTotal > 0) {
      formData.set(
        "희망 상품 합계 금액",
        `${knownTotal.toLocaleString("ko-KR")}원${hasUnknownPrice ? " (일부 상품 금액 미확인)" : ""}`
      );
    }

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmittedSummary({ items: desiredItems, total: knownTotal, hasUnknown: hasUnknownPrice });
        setStatus("success");
        form.reset();
        setWeakAreas([]);
        setManualItems([]);
        clearSelected();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-[8px] border border-line bg-white p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-navy">
          <CheckIcon />
        </span>
        <p className="text-lg font-bold text-navy">
          {inquiryType === "구매" ? "구매 신청" : "상담 신청"}이 정상적으로 접수되었습니다.
        </p>

        {inquiryType === "구매" ? (
          <div className="flex w-full flex-col gap-3 rounded-[8px] border border-line bg-gray-light p-5 text-left">
            {submittedSummary && submittedSummary.items.length > 0 ? (
              <ul className="flex flex-col gap-1 border-b border-line pb-3 text-sm text-ink">
                {submittedSummary.items.map((item) => (
                  <li key={item.slug ?? item.name}>
                    {item.name}
                    {typeof item.price === "number" ? ` — ${item.price.toLocaleString("ko-KR")}원` : ""}
                  </li>
                ))}
              </ul>
            ) : null}
            <span className="text-sm font-bold text-navy">입금 계좌 안내</span>
            <div className="flex flex-col gap-1 text-sm text-ink">
              <span>
                {siteConfig.bankAccount.bank} {siteConfig.bankAccount.number} (예금주:{" "}
                {siteConfig.bankAccount.holder})
              </span>
              {submittedSummary && submittedSummary.total > 0 ? (
                <span className="font-bold text-navy">
                  입금 금액: {submittedSummary.total.toLocaleString("ko-KR")}원
                  {submittedSummary.hasUnknown ? " + 일부 상품 (금액 확인 후 안내)" : ""}
                </span>
              ) : (
                <span>정확한 입금 금액은 확인 후 이메일로 안내드립니다.</span>
              )}
            </div>
            <button
              type="button"
              onClick={copyAccountNumber}
              className="inline-flex w-fit items-center justify-center rounded-[6px] border border-line bg-white px-3.5 py-2 text-xs font-bold text-navy transition hover:border-navy/30"
            >
              {copied ? "복사됨" : "계좌번호 복사"}
            </button>
            <p className="text-xs leading-relaxed text-text-gray">
              입금해 주시면 영업시간({siteConfig.businessHours.label}) 기준 입금 확인 후 3~10시간
              이내 이메일로 발송해 드립니다. 영업시간 이후 입금은 다음 영업시간 중 확인됩니다.
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-gray">확인 후 이메일로 안내드리겠습니다.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7 rounded-[8px] border border-line bg-white p-6 sm:p-8">
      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-bold text-navy">문의 유형</legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {inquiryTypeOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer flex-col gap-0.5 rounded-lg border border-line px-4 py-3 text-sm has-[:checked]:border-navy has-[:checked]:bg-navy/5"
            >
              <span className="flex items-center gap-2 font-semibold text-navy">
                <input
                  type="radio"
                  name="문의 유형"
                  value={opt.value}
                  checked={inquiryType === opt.value}
                  onChange={() => setInquiryType(opt.value)}
                  className="h-4 w-4 accent-navy"
                />
                {opt.label}
              </span>
              <span className="pl-6 text-xs text-text-gray">{opt.desc}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="이름" htmlFor="name" required>
          <input
            id="name"
            name="이름"
            type="text"
            required
            autoComplete="name"
            className="input"
            placeholder="홍길동"
          />
        </Field>
        <Field label="연락처" htmlFor="phone" required>
          <input
            id="phone"
            name="연락처"
            type="tel"
            required
            autoComplete="tel"
            className="input"
            placeholder="010-0000-0000"
          />
        </Field>
      </div>

      <Field label="이메일" htmlFor="email" required>
        <input
          id="email"
          name="이메일"
          type="email"
          required
          autoComplete="email"
          className="input"
          placeholder="example@email.com"
        />
      </Field>

      <Field label="준비 시험" htmlFor="examType" required>
        <select id="examType" name="준비 시험" required defaultValue="" className="input">
          <option value="" disabled>
            선택해주세요
          </option>
          {examOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-bold text-navy">현재 가장 어려운 영역</legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {weakAreaOptions.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-line px-3 py-2.5 text-sm text-ink/75 has-[:checked]:border-navy has-[:checked]:bg-navy/5 has-[:checked]:font-semibold has-[:checked]:text-navy"
            >
              <input
                type="checkbox"
                checked={weakAreas.includes(opt)}
                onChange={() => toggleWeakArea(opt)}
                className="h-4 w-4 accent-navy"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="희망 문제집 (여러 개 선택 가능)" htmlFor="desiredProductInput">
        <div className="flex flex-col gap-3">
          {desiredItems.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {desiredItems.map((item) => (
                <li
                  key={item.slug ?? item.name}
                  className="flex items-center gap-1.5 rounded-full border border-line bg-gray-light py-1.5 pl-3 pr-1.5 text-sm text-navy"
                >
                  <span>
                    {item.name}
                    {typeof item.price === "number" ? ` (${item.price.toLocaleString("ko-KR")}원)` : ""}
                  </span>
                  <button
                    type="button"
                    aria-label={`${item.name} 제거`}
                    onClick={() =>
                      item.source === "context" && item.slug
                        ? removeSelected(item.slug)
                        : removeManualItem(item.name)
                    }
                    className="flex h-5 w-5 items-center justify-center rounded-full text-text-gray transition hover:bg-white hover:text-navy"
                  >
                    <X size={12} strokeWidth={2.5} />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="relative flex gap-2">
            <input
              id="desiredProductInput"
              type="text"
              value={manualInput}
              onChange={(e) => {
                setManualInput(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => window.setTimeout(() => setShowSuggestions(false), 120)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (suggestions[0] && showSuggestions) {
                    addItem(suggestions[0]);
                  } else {
                    addManualItem();
                  }
                }
              }}
              className="input"
              placeholder="문제집 이름 검색 또는 직접 입력 후 Enter"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={addManualItem}
              className="inline-flex shrink-0 items-center justify-center rounded-[6px] border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-navy/30"
            >
              추가
            </button>

            {showSuggestions && manualInput.trim() && suggestions.length > 0 ? (
              <ul className="absolute left-0 right-[76px] top-full z-10 mt-1 overflow-hidden rounded-[8px] border border-line bg-white shadow-xl">
                {suggestions.map((s) => (
                  <li key={s.slug}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => addItem(s)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-gray-light"
                    >
                      <span className="truncate text-ink/80">{s.name}</span>
                      <span className="shrink-0 text-xs font-bold text-navy">
                        {s.price.toLocaleString("ko-KR")}원
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <p className="text-xs text-text-gray">
            검색 결과를 선택하면 정확한 가격이 자동으로 반영됩니다. 목록에 없는 상품은 직접
            입력할 수 있습니다. 상품 상세페이지의 &apos;비교함 담기&apos;로 선택한 문제집도
            자동으로 여기에 표시됩니다.
          </p>
        </div>
      </Field>

      <Field label="문의 내용" htmlFor="message">
        <textarea
          id="message"
          name="문의 내용"
          rows={5}
          className="input resize-none"
          placeholder="현재 준비 상황이나 궁금하신 점을 자유롭게 남겨주세요."
        />
      </Field>

      <label className="flex items-start gap-2.5 text-sm text-ink/65">
        <input type="checkbox" name="개인정보 수집 동의" required className="mt-0.5 h-4 w-4 accent-navy" />
        <span>
          개인정보 수집 및 이용에 동의합니다. 상담 목적으로만 사용되며, 상담 완료 후 관련 법령에
          따라 안전하게 처리됩니다. (필수)
        </span>
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm font-semibold text-red-600">
          접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:brightness-95 disabled:opacity-60"
      >
        {status === "submitting" ? "접수 중..." : inquiryType === "구매" ? "구매 신청하기" : "상담 신청하기"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-bold text-navy">
        {label} {required ? <span className="text-lime-strong">*</span> : null}
      </label>
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

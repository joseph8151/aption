"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";

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

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [weakAreas, setWeakAreas] = useState<string[]>([]);

  const toggleWeakArea = (value: string) => {
    setWeakAreas((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.set("현재 가장 어려운 영역", weakAreas.join(", "));

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setWeakAreas([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[8px] border border-line bg-white p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-navy">
          <CheckIcon />
        </span>
        <p className="text-lg font-bold text-navy">
          상담 신청이 정상적으로 접수되었습니다. 확인 후 안내드리겠습니다.
        </p>
        <p className="text-sm text-ink/55">
          급하신 경우 전화 문의({" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-navy">
            {siteConfig.phoneNumber}
          </a>{" "}
          )도 이용해 주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7 rounded-[8px] border border-line bg-white p-6 sm:p-8">
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

      <Field label="희망 문제집" htmlFor="desiredProduct">
        <input
          id="desiredProduct"
          name="희망 문제집"
          type="text"
          defaultValue={initialProduct}
          className="input"
          placeholder="예: NCS 자료해석 300제 (선택 사항)"
        />
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
          접수 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 전화로 문의해주세요.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-base font-bold text-navy transition hover:brightness-95 disabled:opacity-60"
      >
        {status === "submitting" ? "접수 중..." : "상담 신청하기"}
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

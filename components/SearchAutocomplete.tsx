"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { accentHex, getProductCoverTheme } from "@/lib/coverAccentColor";

export default function SearchAutocomplete({
  placeholder = "문제집 검색",
  autoFocus = false,
  inputClassName = "w-full bg-transparent text-sm outline-none placeholder:text-ink/40",
  onNavigate,
}: {
  placeholder?: string;
  autoFocus?: boolean;
  inputClassName?: string;
  onNavigate?: () => void;
}) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const suggestions = useMemo(() => {
    const keyword = value.trim().toLowerCase();
    if (!keyword) return [];
    return products
      .filter((p) =>
        [p.name, p.shortDescription, p.area, p.exam]
          .join(" ")
          .toLowerCase()
          .includes(keyword)
      )
      .slice(0, 6);
  }, [value]);

  const showDropdown = isFocused && value.trim().length > 0;

  const goToResults = () => {
    if (!value.trim()) return;
    router.push(`/products?q=${encodeURIComponent(value.trim())}`);
    setIsFocused(false);
    onNavigate?.();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    goToResults();
  };

  return (
    <div className="relative w-full">
      <form onSubmit={submit} role="search" className="flex w-full items-center gap-2">
        <SearchIcon />
        <input
          type="search"
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => window.setTimeout(() => setIsFocused(false), 120)}
          placeholder={placeholder}
          aria-label={placeholder}
          className={inputClassName}
        />
      </form>

      {showDropdown ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-[16px] border border-line bg-white shadow-xl">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-navy/5"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: accentHex(getProductCoverTheme(p)) }}
                      aria-hidden="true"
                    />
                    <span className="flex-1 truncate font-medium text-ink/80">{p.name}</span>
                    <span className="shrink-0 text-xs font-bold text-navy">
                      {p.price.toLocaleString("ko-KR")}원
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-ink/50">일치하는 문제집이 없습니다.</p>
          )}
          <button
            type="button"
            onClick={goToResults}
            className="flex w-full items-center justify-center gap-1 border-t border-line px-4 py-3 text-sm font-bold text-navy hover:bg-gray-light"
          >
            &ldquo;{value.trim()}&rdquo; 전체 검색결과 보기 →
          </button>
        </div>
      ) : null}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 text-ink/40">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3-3" strokeLinecap="round" />
    </svg>
  );
}

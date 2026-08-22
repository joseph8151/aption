"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { AreaKey, DifficultyKey, ExamKey, ProductType } from "@/lib/types";
import { categories } from "@/data/categories";
import { getSubCategoryHref, hasSubCategoryProducts } from "@/lib/subcategoryLinks";

const examOptions: { key: ExamKey; label: string }[] = [
  { key: "ncs", label: "NCS" },
  { key: "public", label: "공기업" },
  { key: "corporate", label: "인적성" },
  { key: "jobskill", label: "취업 직무능력" },
];

const areaOptions: AreaKey[] = [
  "수리",
  "자료해석",
  "의사소통",
  "문제해결",
  "논리추리",
  "전공",
  "공간지각",
  "상황판단",
  "모의고사",
];

const difficultyOptions: DifficultyKey[] = ["입문", "기본", "실전", "고난도"];

const typeOptions: ProductType[] = ["문제집", "모의고사", "패키지"];

function toList(value: string | null) {
  return value ? value.split(",").filter(Boolean) : [];
}

export default function ProductsExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const examFilter = toList(searchParams.get("exam")) as ExamKey[];
  const areaFilter = toList(searchParams.get("area")) as AreaKey[];
  const difficultyFilter = toList(searchParams.get("difficulty")) as DifficultyKey[];
  const typeFilter = toList(searchParams.get("type")) as ProductType[];

  const [queryInput, setQueryInput] = useState(q);

  const updateParams = (mutator: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    mutator(params);
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  const toggleValue = (key: string, value: string, current: string[]) => {
    updateParams((params) => {
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      if (next.length) params.set(key, next.join(","));
      else params.delete(key);
    });
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams((params) => {
      if (queryInput.trim()) params.set("q", queryInput.trim());
      else params.delete("q");
    });
  };

  const clearAll = () => router.push("/products", { scroll: false });

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    return products.filter((p) => {
      if (examFilter.length && !examFilter.includes(p.exam)) return false;
      if (areaFilter.length && !areaFilter.includes(p.area)) return false;
      if (typeFilter.length && !typeFilter.includes(p.productType)) return false;
      if (
        difficultyFilter.length &&
        !p.difficultyTags.some((d) => difficultyFilter.includes(d))
      )
        return false;
      if (keyword) {
        const haystack = [
          p.name,
          p.shortDescription,
          p.area,
          p.difficultyLabel,
          p.exam,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(keyword)) return false;
      }
      return true;
    });
  }, [q, examFilter, areaFilter, typeFilter, difficultyFilter]);

  const hasActiveFilters =
    Boolean(q) || examFilter.length > 0 || areaFilter.length > 0 || difficultyFilter.length > 0 || typeFilter.length > 0;

  const selectedCategory =
    examFilter.length === 1 ? categories.find((c) => c.key === examFilter[0]) : undefined;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
        <form onSubmit={submitSearch} role="search" className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5">
          <Search size={16} strokeWidth={2} className="shrink-0 text-ink/40" />
          <input
            type="search"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            placeholder="시험명, 문제집명, 영역, 난이도"
            aria-label="문제집 검색"
            className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
          />
        </form>

        <FilterGroup label="시험">
          {examOptions.map((opt) => (
            <FilterChip
              key={opt.key}
              label={opt.label}
              active={examFilter.includes(opt.key)}
              onClick={() => toggleValue("exam", opt.key, examFilter)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="영역">
          {areaOptions.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              active={areaFilter.includes(opt)}
              onClick={() => toggleValue("area", opt, areaFilter)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="난이도">
          {difficultyOptions.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              active={difficultyFilter.includes(opt)}
              onClick={() => toggleValue("difficulty", opt, difficultyFilter)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="상품유형">
          {typeOptions.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              active={typeFilter.includes(opt)}
              onClick={() => toggleValue("type", opt, typeFilter)}
            />
          ))}
        </FilterGroup>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={clearAll}
            className="text-left text-sm font-bold text-navy hover:text-navy/70"
          >
            필터 초기화
          </button>
        ) : null}
      </aside>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-ink/60">
            총 <span className="font-bold text-navy">{filtered.length}</span>개의 문제집
          </p>
        </div>

        {selectedCategory ? (
          <div className="flex flex-col gap-2.5 rounded-[16px] border border-line bg-white p-4">
            <span className="text-xs font-bold uppercase tracking-wide text-ink/45">
              {selectedCategory.label} 세부 영역으로 찾기
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory.subCategories.map((sub) => {
                const matched = hasSubCategoryProducts(selectedCategory.key, sub);
                return (
                  <Link
                    key={sub}
                    href={getSubCategoryHref(selectedCategory.key, sub)}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                      matched
                        ? "border-line text-ink/70 hover:border-navy/40 hover:text-navy"
                        : "border-dashed border-line text-ink/45 hover:border-navy/40 hover:text-navy"
                    }`}
                    title={matched ? undefined : "관련 문제집 준비 중 · 상담으로 안내받기"}
                  >
                    {sub}
                    {!matched ? <span className="ml-1 text-[11px] text-navy">상담</span> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-[16px] border border-dashed border-line py-20 text-center">
            <p className="text-base font-semibold text-navy">
              조건에 맞는 문제집을 찾지 못했습니다.
            </p>
            <p className="text-sm text-ink/55">
              필터를 조정하시거나 상담을 통해 적합한 문제집을 추천받아 보세요.
            </p>
            <Link href="/consult" className="text-sm font-bold text-navy hover:text-navy/70">
              상담 신청하기 →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 border-t border-line pt-5 first:border-t-0 first:pt-0">
      <span className="text-xs font-bold uppercase tracking-wide text-ink/45">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
        active
          ? "border-navy bg-navy text-white"
          : "border-line bg-white text-ink/70 hover:border-navy/30"
      }`}
    >
      {label}
    </button>
  );
}

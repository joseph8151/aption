"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Plus, Search, X } from "lucide-react";
import Container from "./Container";
import SearchAutocomplete from "./SearchAutocomplete";
import { categories } from "@/data/categories";
import { getSubCategoryHref, hasSubCategoryProducts } from "@/lib/subcategoryLinks";
import { ExamKey } from "@/lib/types";

const navItems: Array<{ label: string; href: string; examKey?: ExamKey }> = [
  { label: "이번 달 필기", href: "/this-month" },
  { label: "NCS", href: "/products?exam=ncs", examKey: "ncs" },
  { label: "자격 약점", href: "/products" },
  { label: "TOPIK·EPS", href: "/category/topik-eps" },
  { label: "공기업", href: "/products?exam=public", examKey: "public" },
  { label: "인적성", href: "/products?exam=corporate", examKey: "corporate" },
  { label: "패키지", href: "/products?type=%ED%8C%A8%ED%82%A4%EC%A7%80" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<ExamKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-white/85 backdrop-blur-md" : "border-transparent bg-ivory"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="AptiON 홈으로 이동">
          <span className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-navy text-sm font-black text-lime">
            A
          </span>
          <span className="text-xl font-black tracking-tight text-navy">
            Apti<span className="text-lime-strong">ON</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) =>
            item.examKey ? (
              <NavDropdown key={item.label} label={item.label} href={item.href} examKey={item.examKey} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-[10px] px-3.5 py-2.5 text-sm font-bold text-ink/75 transition hover:bg-gray-light hover:text-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="문제집 검색"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/60 transition hover:bg-gray-light hover:text-navy sm:flex"
          >
            <Search size={18} strokeWidth={2} />
          </button>
          <Link
            href="/products"
            className="hidden items-center rounded-[6px] border border-line px-4 py-2.5 text-sm font-bold text-navy transition hover:border-navy/30 hover:bg-gray-light lg:flex"
          >
            문제집 찾기
          </Link>
          <Link
            href="/consult"
            className="hidden items-center rounded-[6px] bg-lime px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-lime-strong lg:flex"
          >
            상담하기
          </Link>
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-[6px] text-navy lg:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </Container>

      {searchOpen ? (
        <div className="border-t border-line bg-white">
          <Container className="py-3">
            <SearchAutocomplete
              autoFocus
              placeholder="시험명, 문제집명, 영역, 난이도로 검색 (예: 자료해석)"
              inputClassName="w-full bg-transparent py-1 text-sm outline-none placeholder:text-ink/40"
              onNavigate={() => setSearchOpen(false)}
            />
          </Container>
        </div>
      ) : null}

      {menuOpen ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <div className="mb-3 rounded-full border border-line px-4 py-2.5">
              <SearchAutocomplete
                placeholder="문제집 검색"
                onNavigate={() => {
                  setMenuOpen(false);
                  setMobileExpanded(null);
                }}
              />
            </div>
            {navItems.map((item) =>
              item.examKey ? (
                <div key={item.label} className="border-b border-line/70 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={mobileExpanded === item.examKey}
                    onClick={() =>
                      setMobileExpanded((v) => (v === item.examKey ? null : (item.examKey as ExamKey)))
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-bold text-ink/85 hover:bg-gray-light"
                  >
                    {item.label}
                    <Plus
                      size={16}
                      strokeWidth={2.5}
                      className={`text-ink/40 transition-transform ${
                        mobileExpanded === item.examKey ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.examKey ? (
                    <div className="flex flex-col gap-0.5 pb-3 pl-3">
                      {categories
                        .find((c) => c.key === item.examKey)
                        ?.subCategories.map((sub) => (
                          <Link
                            key={sub}
                            href={getSubCategoryHref(item.examKey as ExamKey, sub)}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="rounded-md px-3 py-2 text-sm text-ink/65 hover:bg-gray-light hover:text-navy"
                          >
                            {sub}
                          </Link>
                        ))}
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileExpanded(null);
                        }}
                        className="rounded-md px-3 py-2 text-sm font-bold text-navy"
                      >
                        {item.label} 전체 문제집 보기 →
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-bold text-ink/85 hover:bg-gray-light"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 flex gap-2">
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center rounded-[6px] border border-line px-4 py-3 text-sm font-bold text-navy"
              >
                문제집 찾기
              </Link>
              <Link
                href="/consult"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center rounded-[6px] bg-lime px-4 py-3 text-sm font-bold text-navy"
              >
                상담하기
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function NavDropdown({ label, href, examKey }: { label: string; href: string; examKey: ExamKey }) {
  const category = categories.find((c) => c.key === examKey);
  if (!category) return null;

  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 rounded-[10px] px-3.5 py-2.5 text-sm font-bold text-ink/75 transition hover:bg-gray-light hover:text-navy"
      >
        {label}
        <ChevronDown size={14} strokeWidth={2.5} className="text-ink/35" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-[8px] border border-line bg-white p-5 shadow-[0_32px_64px_-24px_rgba(20,18,15,0.28)]">
          <p className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.14em] text-text-gray">
            {category.description}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {category.subCategories.map((sub) => {
              const matched = hasSubCategoryProducts(examKey, sub);
              return (
                <Link
                  key={sub}
                  href={getSubCategoryHref(examKey, sub)}
                  className="flex items-center gap-2.5 rounded-[6px] px-3 py-2.5 text-sm font-semibold text-ink/75 transition hover:bg-gray-light hover:text-navy"
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      matched ? "bg-lime-strong" : "bg-line"
                    }`}
                  />
                  {sub}
                </Link>
              );
            })}
          </div>
          <Link
            href={href}
            className="mt-3 flex items-center justify-center rounded-[6px] bg-navy px-3 py-3 text-sm font-bold text-white transition hover:bg-navy-2"
          >
            {label} 전체 문제집 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}

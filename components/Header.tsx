"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { siteConfig } from "@/lib/config";

const navItems = [
  { label: "NCS", href: "/products?exam=ncs" },
  { label: "공기업", href: "/products?exam=public" },
  { label: "인적성", href: "/products?exam=corporate" },
  { label: "문제집", href: "/products" },
  { label: "패키지", href: "/products?type=%ED%8C%A8%ED%82%A4%EC%A7%80" },
  { label: "브랜드 소개", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-offwhite/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="AptiON 홈으로 이동">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-sm font-black text-lime">
            A
          </span>
          <span className="text-xl font-black tracking-tight text-navy">AptiON</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-navy/5 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="문제집 검색"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-navy/5 hover:text-navy sm:flex"
          >
            <SearchIcon />
          </button>
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-bold text-navy transition hover:border-navy/40 lg:flex"
          >
            <PhoneIcon />
            전화문의
          </a>
          <Link
            href="/consult"
            className="hidden items-center rounded-full bg-lime px-4 py-2 text-sm font-bold text-navy transition hover:brightness-95 lg:flex"
          >
            문제집 상담
          </Link>
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>

      {searchOpen ? (
        <div className="border-t border-line bg-white">
          <Container className="py-3">
            <form onSubmit={submitSearch} role="search" className="flex items-center gap-2">
              <SearchIcon />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="시험명, 문제집명, 영역, 난이도로 검색 (예: 자료해석)"
                aria-label="문제집 검색"
                className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-ink/40"
              />
              <button type="submit" className="shrink-0 text-sm font-bold text-blue">
                검색
              </button>
            </form>
          </Container>
        </div>
      ) : null}

      {menuOpen ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <form onSubmit={submitSearch} role="search" className="mb-3 flex items-center gap-2 rounded-full border border-line px-4 py-2.5">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="문제집 검색"
                aria-label="문제집 검색"
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
              />
            </form>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-ink/85 hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <a
                href={siteConfig.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 px-4 py-3 text-sm font-bold text-navy"
              >
                <PhoneIcon />
                전화문의
              </a>
              <Link
                href="/consult"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center rounded-full bg-lime px-4 py-3 text-sm font-bold text-navy"
              >
                문제집 상담
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3-3" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.2 21 3 13.8 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1L6.6 10.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

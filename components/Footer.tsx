import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/config";

const footerNav = [
  {
    heading: "PRODUCTS",
    links: [
      { label: "NCS", href: "/products?exam=ncs" },
      { label: "공기업", href: "/products?exam=public" },
      { label: "인적성", href: "/products?exam=corporate" },
      { label: "모의고사", href: "/products?type=%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC" },
      { label: "패키지", href: "/products?type=%ED%8C%A8%ED%82%A4%EC%A7%80" },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "상담문의", href: "/consult" },
      { label: "이용안내", href: "/guide" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About AptiON", href: "/about" },
      { label: "이용약관", href: "/terms" },
      { label: "개인정보처리방침", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white/70">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr] lg:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-lime text-sm font-black text-navy">
              A
            </span>
            <span className="text-xl font-black tracking-tight text-white">
              Apti<span className="text-lime">ON</span>
            </span>
          </div>
          <p className="text-sm font-bold text-white/90">Turn Your Ability ON.</p>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            NCS · Public Enterprise · Aptitude Test
            <br />
            취업 필기시험을 전문적으로 연구하는 실전 문제집 브랜드입니다.
          </p>
          <dl className="mt-2 space-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="text-white/45">전화</dt>
              <dd>
                <a href={siteConfig.phoneHref} className="font-semibold text-white hover:text-lime">
                  {siteConfig.phoneNumber}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/45">운영시간</dt>
              <dd>{siteConfig.businessHours}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/45">이메일</dt>
              <dd>{siteConfig.contactEmail}</dd>
            </div>
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-white">{group.heading}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-lime">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            AptiON Books · 사업자 정보는 준비 중입니다. 문의는 상담 신청 또는 전화로 접수해 주세요.
          </p>
          <p>&copy; {new Date().getFullYear()} AptiON. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

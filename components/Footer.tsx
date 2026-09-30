import Link from "next/link";
import Container from "./Container";

const secondaryLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "이용안내", href: "/guide" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-ivory/70">
      <Container className="flex flex-col gap-8 py-12 lg:py-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-lime text-sm font-black text-navy">
              A
            </span>
            <span className="text-lg font-black tracking-tight text-ivory">
              Apti<span className="text-lime">ON</span>
            </span>
          </div>
          <p className="text-sm text-ivory/60">합격을 위한 실전 감각을 ON.</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href="/consult" className="font-semibold text-ivory transition hover:text-lime">
              상담
            </Link>
            <Link href="/terms" className="text-ivory/60 transition hover:text-lime">
              이용약관
            </Link>
            {secondaryLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-ivory/40 transition hover:text-lime">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-ivory/35">&copy; {new Date().getFullYear()} AptiON</p>
        </div>
      </Container>
    </footer>
  );
}

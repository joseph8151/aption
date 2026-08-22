import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 text-sm font-bold text-navy"
      >
        <PhoneIcon />
        전화상담
      </a>
      <div className="w-px bg-line" />
      <Link
        href="/consult"
        className="flex flex-1 items-center justify-center gap-2 bg-lime text-sm font-bold text-navy"
      >
        문제집 문의
      </Link>
    </div>
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

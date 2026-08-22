import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 text-sm font-bold text-navy"
      >
        <Phone size={16} strokeWidth={2.25} />
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

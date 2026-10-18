"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname === "/consult") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <Link
        href="/consult"
        className="flex flex-1 items-center justify-center gap-2 bg-lime text-sm font-bold text-navy"
      >
        문제집 문의
      </Link>
    </div>
  );
}

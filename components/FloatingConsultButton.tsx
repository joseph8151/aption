"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function FloatingConsultButton() {
  const pathname = usePathname();
  if (pathname === "/consult") return null;

  return (
    <Link
      href="/consult"
      className="fixed right-5 bottom-20 z-40 flex items-center gap-2 rounded-full bg-navy px-5 py-3.5 text-sm font-bold text-ivory shadow-[0_12px_28px_-8px_rgba(20,18,15,0.45)] transition hover:bg-navy-2 lg:bottom-6"
      aria-label="빠른 상담 신청"
    >
      <MessageCircle size={18} strokeWidth={2.25} />
      빠른 상담
    </Link>
  );
}

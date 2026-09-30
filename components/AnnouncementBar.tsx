"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "aption-announcement-dismissed";

const emptySubscribe = () => () => {};

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export default function AnnouncementBar() {
  const storedDismissed = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  const [closedNow, setClosedNow] = useState(false);
  const dismissed = storedDismissed || closedNow;

  if (dismissed) return null;

  const handleDismiss = () => {
    setClosedNow(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore — dismissal just won't persist
    }
  };

  return (
    <div className="flex h-10 items-center justify-center bg-ink px-4 text-[13px]">
      <div className="flex w-full max-w-(--container-content) items-center justify-center gap-3 sm:justify-between">
        <Link href="/this-month" className="flex min-w-0 items-center gap-1.5 overflow-hidden text-ivory">
          <span className="hidden truncate font-mono text-lime sm:inline">
            인천 공무직 10/17 · 신협 11/7 · 농축협 11/22
          </span>
          <span className="truncate font-mono text-lime sm:hidden">10/17 · 11/7 · 11/22</span>
          <span className="shrink-0 font-semibold underline-offset-4 hover:underline">
            이번 달 필기 보기 →
          </span>
        </Link>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="공지 닫기"
          className="shrink-0 text-ivory opacity-70 transition hover:opacity-100"
        >
          <X size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

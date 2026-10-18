"use client";

import { Check } from "lucide-react";
import { useProductSelection } from "@/lib/ProductSelectionContext";

export default function SelectionToggle({
  slug,
  name,
  price,
  className,
  activeClassName,
  style,
}: {
  slug: string;
  name: string;
  price: number;
  className?: string;
  activeClassName?: string;
  style?: React.CSSProperties;
}) {
  const { isSelected, toggle } = useProductSelection();
  const selected = isSelected(slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle({ slug, name, price });
      }}
      aria-pressed={selected}
      className={`${className ?? ""} ${selected ? (activeClassName ?? "") : ""}`}
      style={style}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition ${
          selected ? "border-transparent bg-current" : "border-current/40 bg-transparent"
        }`}
      >
        {selected ? <Check size={11} strokeWidth={3} className="text-white" /> : null}
      </span>
      {selected ? "담음" : "비교함 담기"}
    </button>
  );
}

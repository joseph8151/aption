import { CoverAccent } from "@/lib/types";
import { coverAccentColors } from "@/lib/coverAccentColor";

export default function BookCover({
  accent,
  eyebrow,
  titleLines,
  footer,
  className = "",
}: {
  accent: CoverAccent;
  eyebrow: string;
  titleLines: string[];
  footer: string;
  className?: string;
}) {
  const c = coverAccentColors[accent];
  return (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-lg p-5 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
      style={{ background: `linear-gradient(155deg, ${c.from}, ${c.to} 65%, ${c.from})` }}
      aria-hidden="true"
    >
      {/* spine highlight */}
      <div className="absolute inset-y-0 left-0 w-2 bg-white/10" />
      {/* decorative geometric accent */}
      <div
        className="absolute -right-8 -top-10 h-32 w-32 rounded-full opacity-20"
        style={{ background: c.chip }}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-black tracking-[0.25em] text-white/85">
          AptiON
        </span>
        <span
          className="rounded-sm px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-navy"
          style={{ background: c.chip }}
        >
          {eyebrow}
        </span>
      </div>

      <div className="relative flex flex-col gap-0.5">
        {titleLines.map((line, i) => (
          <span
            key={i}
            className="text-xl leading-[1.15] font-extrabold text-balance sm:text-2xl"
          >
            {line}
          </span>
        ))}
      </div>

      <div className="relative flex items-center gap-2 border-t border-white/20 pt-3">
        <span className="h-1 w-1 rounded-full" style={{ background: c.chip }} />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/75">
          {footer}
        </span>
      </div>
    </div>
  );
}

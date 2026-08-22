import { CoverTheme } from "@/lib/types";
import { coverThemeStyles } from "@/lib/coverAccentColor";

export default function BookCover({
  theme,
  eyebrow,
  titleLines,
  footer,
  bigNumber,
  className = "",
}: {
  theme: CoverTheme;
  eyebrow: string;
  titleLines: string[];
  footer: string;
  bigNumber?: number | string;
  className?: string;
}) {
  const t = coverThemeStyles[theme];

  return (
    <div
      className={`@container relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-[18px] p-[6%] ${className}`}
      style={{
        background: `linear-gradient(150deg, ${t.bgFrom}, ${t.bgTo} 70%)`,
        color: t.text,
        boxShadow: t.isLight
          ? "inset 0 0 0 1px rgba(16,24,40,0.08)"
          : "inset 0 0 0 1px rgba(255,255,255,0.07)",
      }}
      aria-hidden="true"
    >
      {/* spine highlight */}
      <div
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ background: t.isLight ? "rgba(16,24,40,0.06)" : "rgba(255,255,255,0.08)" }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="text-[10px] font-extrabold tracking-[0.28em]"
          style={{ color: t.isLight ? t.text : t.textSoft }}
        >
          APTI<span style={{ color: t.accent }}>ON</span>
        </span>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide"
          style={{
            background: t.isLight ? "rgba(16,24,40,0.08)" : "rgba(255,255,255,0.1)",
            color: t.text,
          }}
        >
          {eyebrow}
        </span>
      </div>

      <div className="relative flex flex-col gap-1">
        {bigNumber !== undefined ? (
          <span
            className="font-black"
            style={{
              color: t.accent,
              fontSize: "clamp(1.5rem, 26cqw, 4.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {bigNumber}
          </span>
        ) : null}
        <div className="flex flex-col gap-0.5">
          {titleLines.map((line, i) => (
            <span
              key={i}
              className="font-extrabold uppercase leading-[1.15] tracking-tight text-balance"
              style={{ fontSize: "clamp(0.8rem, 7.5cqw, 1.25rem)" }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative flex items-center gap-2 border-t pt-3"
        style={{ borderColor: t.isLight ? "rgba(16,24,40,0.12)" : "rgba(255,255,255,0.14)" }}
      >
        <span className="h-1 w-1 rounded-full" style={{ background: t.accent }} />
        <span
          className="text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: t.isLight ? t.textSoft : t.textSoft }}
        >
          {footer}
        </span>
      </div>
    </div>
  );
}

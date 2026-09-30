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
      className={`bg-paper-grain @container relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-[2px] ${className}`}
      style={{
        background: t.bgFrom,
        color: t.text,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
      aria-hidden="true"
    >
      <div className="relative flex h-full flex-col p-[7%]">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] font-medium tracking-[0.3em]"
            style={{ color: t.accent }}
          >
            APTION
          </span>
          <span
            className="rounded-[3px] px-2 py-0.5 font-mono text-[9px] tracking-wide"
            style={{ background: "rgba(255,255,255,0.08)", color: t.text }}
          >
            {eyebrow}
          </span>
        </div>

        <div className="flex flex-1 items-center">
          <span
            className="font-black"
            style={{
              color: t.accent,
              fontSize: "clamp(2.25rem, 34cqw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            {bigNumber}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="font-extrabold leading-[1.2] text-balance"
                style={{ fontSize: "clamp(0.8rem, 7.5cqw, 1.2rem)" }}
              >
                {line}
              </span>
            ))}
          </div>
          <span
            className="h-px w-8"
            style={{ background: t.accent, opacity: 0.6 }}
          />
          <span
            className="font-mono text-[10px] tracking-wide"
            style={{ color: t.textSoft }}
          >
            {footer}
          </span>
        </div>
      </div>
    </div>
  );
}

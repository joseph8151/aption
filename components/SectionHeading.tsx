import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const descColor = tone === "dark" ? "text-white/60" : "text-text-gray";
  const eyebrowColor = tone === "dark" ? "text-lime" : "text-navy";
  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className={`text-xs font-extrabold uppercase tracking-[0.22em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-display font-black text-balance ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

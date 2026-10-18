export default function CodeBlockFigure({ code, language = "SQL" }: { code: string; language?: string }) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-[#D6CDBE]">
      <div className="bg-[#1A1713] px-3.5 py-1.5 text-[10px] font-bold tracking-wide text-white/50">
        {language}
      </div>
      <pre className="overflow-x-auto bg-[#1A1713] px-3.5 py-3 text-[12.5px] leading-relaxed text-[#F7F3EC]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

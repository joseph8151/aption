import Link from "next/link";
import { ExamRound } from "@/data/examRounds";

export default function ExamRoundCard({ exam }: { exam: ExamRound }) {
  return (
    <div className="flex flex-col gap-5 rounded-[4px] border border-line bg-card p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-[3px] bg-terracotta px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-ivory">
          {exam.dDayLabel}
        </span>
        <span className="font-mono text-[12px] text-text-gray">{exam.examDateLabel}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] font-extrabold leading-snug text-ink text-balance">
          {exam.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-gray">{exam.promise}</p>
      </div>

      <div className="flex items-center gap-2 border-t border-line pt-4 font-mono text-[12px] text-text-gray">
        {exam.cardMeta.split(" · ").map((part, i, arr) => (
          <span key={part} className="flex items-center gap-2">
            {part}
            {i < arr.length - 1 ? <span className="text-line">·</span> : null}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-xl font-extrabold text-ink">
          {exam.price.toLocaleString("ko-KR")}원
        </span>
        <Link
          href={`/consult?product=${encodeURIComponent(exam.title)}`}
          className="inline-flex items-center justify-center rounded-[6px] bg-navy px-5 py-2.5 text-sm font-bold text-ivory transition hover:bg-navy-2"
        >
          구매 문의
        </Link>
      </div>
    </div>
  );
}

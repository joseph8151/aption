import Link from "next/link";
import { ExamRound } from "@/data/examRounds";
import SamplePreviewModal from "./samplepreview/SamplePreviewModal";
import { getSampleByProductSlug } from "@/data/productSamples";
import SelectionToggle from "./SelectionToggle";

export default function ExamRoundCard({ exam }: { exam: ExamRound }) {
  const sample = getSampleByProductSlug(exam.slug);
  return (
    <div className="flex flex-col gap-5 rounded-[4px] border border-line bg-card p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-[3px] bg-terracotta px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-ivory">
          {exam.dDayLabel}
        </span>
        <div className="flex items-center gap-2">
          <SelectionToggle
            slug={exam.slug}
            name={exam.title}
            price={exam.price}
            className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-bold text-ink transition hover:border-ink/30"
          />
          <span className="font-mono text-[12px] text-text-gray">{exam.examDateLabel}</span>
        </div>
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

      <div className="mt-auto flex flex-col gap-2 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold text-ink">
            {exam.price.toLocaleString("ko-KR")}원
          </span>
          <div className="flex gap-2">
            {sample ? (
              <SamplePreviewModal
                sample={sample}
                productName={exam.title}
                triggerClassName="inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-line px-4 py-3 text-sm font-bold text-ink transition hover:border-ink/30"
              />
            ) : null}
            <Link
              href={`/consult?product=${encodeURIComponent(exam.title)}`}
              className="inline-flex items-center justify-center rounded-[6px] bg-navy px-5 py-3 text-sm font-bold text-ivory transition hover:bg-navy-2"
            >
              구매 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

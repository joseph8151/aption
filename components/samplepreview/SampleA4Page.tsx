import { ProductSample, SampleQuestion } from "./sampleTypes";
import FigureRenderer from "./FigureRenderer";

const circled = ["①", "②", "③", "④", "⑤"];

export default function SampleA4Page({
  sample,
  pageIndex,
}: {
  sample: ProductSample;
  pageIndex: 0 | 1;
}) {
  const page1 = sample.questions.slice(0, sample.page1Count);
  const page2 = sample.questions.slice(sample.page1Count);
  const questions = pageIndex === 0 ? page1 : page2;
  const showPurchaseBlock = pageIndex === 1 || sample.questions.length <= sample.page1Count;

  return (
    <div className="flex min-h-full flex-col gap-6 bg-white px-6 py-7 sm:px-10 sm:py-9">
      {pageIndex === 0 ? (
        <div className="flex flex-col gap-3 border-b border-[#D6CDBE] pb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#1C4336] text-xs font-black text-white">
                A
              </span>
              <span className="text-sm font-black tracking-tight text-[#1A1713]">
                Apti<span className="text-[#9C7A3C]">ON</span>
              </span>
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#9C7A3C]">SAMPLE PREVIEW</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold leading-snug text-[#1A1713]">{sample.sampleTitle}</h2>
            <p className="text-xs text-[#1A1713]/55">
              {sample.category} · {sample.difficulty}
            </p>
          </div>
          <p className="text-[11px] leading-relaxed text-[#1A1713]/45">{sample.exampleNote}</p>
        </div>
      ) : (
        <div className="flex items-center justify-between border-b border-[#D6CDBE] pb-3">
          <span className="text-xs font-bold text-[#1A1713]/50">{sample.sampleTitle}</span>
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#9C7A3C]">SAMPLE PREVIEW · 2</span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-7">
        {questions.map((q) => (
          <QuestionBlock
            key={q.number}
            question={q}
            revealAnswer={pageIndex === 1 && q.number === sample.questions[sample.representativeIndex]?.number}
          />
        ))}
      </div>

      {showPurchaseBlock ? (
        <div className="mt-auto flex flex-col gap-1 rounded-[6px] border border-[#D6CDBE] bg-[#F7F3EC] px-4 py-3.5 text-center">
          <p className="text-[12.5px] font-bold text-[#1A1713]">전체 문항은 교재 구매 후 확인할 수 있습니다</p>
          <p className="text-[11px] text-[#1A1713]/55">
            {sample.category} 전 영역 · 상세 해설 수록
          </p>
        </div>
      ) : null}
    </div>
  );
}

function QuestionBlock({ question, revealAnswer }: { question: SampleQuestion; revealAnswer: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <span className="shrink-0 text-sm font-bold text-[#1C4336]">{question.number}.</span>
        <div className="flex flex-1 flex-col gap-3">
          {question.passage ? (
            <p className="whitespace-pre-line rounded-[6px] bg-[#F7F3EC] p-3.5 text-[13px] leading-relaxed text-[#1A1713]/75">
              {question.passage}
            </p>
          ) : null}
          {question.figure ? (
            <div className="rounded-[6px] border border-[#D6CDBE] p-3">
              <FigureRenderer figure={question.figure} />
            </div>
          ) : null}
          <p className="whitespace-pre-line text-[14.5px] font-semibold leading-relaxed text-[#1A1713]">
            {question.prompt}
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5 pl-6">
        {question.choices.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#1A1713]/80">
            <span className="font-bold text-[#1A1713]/45">{circled[i]}</span>
            {c}
          </li>
        ))}
      </ul>

      {revealAnswer ? (
        <div className="ml-6 flex flex-col gap-2 rounded-[6px] border border-[#1C4336]/25 bg-[#1C4336]/[0.04] p-3.5">
          <p className="text-[13px] font-bold text-[#1C4336]">정답 {circled[question.answerIndex]}</p>
          <p className="text-[12.5px] leading-relaxed text-[#1A1713]/75">{question.explanation}</p>
          {question.solutionFigure ? (
            <div className="mt-1 rounded-[6px] border border-[#D6CDBE] bg-white p-3">
              <FigureRenderer figure={question.solutionFigure} />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

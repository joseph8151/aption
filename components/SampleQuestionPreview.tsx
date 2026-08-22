import { AreaKey } from "@/lib/types";
import { getSampleContent, SampleTable, SpatialShape } from "@/data/sampleQuestions";

const circledNumbers = ["①", "②", "③", "④", "⑤"];

export default function SampleQuestionPreview({ area }: { area: AreaKey }) {
  const content = getSampleContent(area);

  if (!content) {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-white p-8 text-center">
        <p className="text-sm leading-relaxed text-ink/60">
          이 영역의 샘플 문제는 준비 중입니다. 상담을 통해 문제 유형을 안내받으실 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-line bg-navy px-5 py-3 text-white">
        <span className="text-xs font-black tracking-[0.2em]">AptiON</span>
        <span className="text-xs font-semibold text-white/70">SAMPLE PAGE · {area}</span>
      </div>

      <div className="p-6 sm:p-8">
        {content.kind === "structure" ? (
          <StructureContent title={content.title} table={content.table} note={content.note} />
        ) : content.kind === "spatial" ? (
          <SpatialContent
            prompt={content.prompt}
            base={content.base}
            choices={content.choices}
            answerIndex={content.answerIndex}
            explanation={content.explanation}
          />
        ) : (
          <McqContent
            passage={content.passage}
            table={content.table}
            prompt={content.prompt}
            choices={content.choices}
            answerIndex={content.answerIndex}
            explanation={content.explanation}
          />
        )}
      </div>

      <p className="border-t border-line bg-offwhite px-6 py-3 text-xs text-ink/45">
        * 위 문항은 문제 유형을 소개하기 위해 자체 제작한 예시이며, 실제 문제집 수록 문항이
        아닙니다.
      </p>
    </div>
  );
}

function DataTable({ table }: { table: SampleTable }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-max text-left text-sm">
        <thead>
          <tr className="bg-offwhite">
            {table.headers.map((h) => (
              <th key={h} className="whitespace-nowrap px-4 py-2.5 font-bold text-navy">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t border-line">
              {row.map((cell, j) => (
                <td key={j} className="whitespace-nowrap px-4 py-2.5 text-ink/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function McqContent({
  passage,
  table,
  prompt,
  choices,
  answerIndex,
  explanation,
}: {
  passage?: string;
  table?: SampleTable;
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy/5 text-sm font-bold text-navy">
          Q
        </span>
        <div className="flex flex-1 flex-col gap-4">
          {passage ? (
            <p className="whitespace-pre-line rounded-lg bg-offwhite p-4 text-sm leading-relaxed text-ink/70">
              {passage}
            </p>
          ) : null}
          {table ? <DataTable table={table} /> : null}
          <p className="whitespace-pre-line text-base font-semibold leading-relaxed text-navy">
            {prompt}
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-2 pl-10">
        {choices.map((choice, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
            <span className="font-bold text-ink/50">{circledNumbers[i]}</span>
            {choice}
          </li>
        ))}
      </ul>

      <AnswerReveal answerLabel={circledNumbers[answerIndex]} explanation={explanation} />
    </div>
  );
}

function StructureContent({
  title,
  table,
  note,
}: {
  title: string;
  table: SampleTable;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-semibold text-navy">{title}</p>
      <DataTable table={table} />
      <p className="text-sm leading-relaxed text-ink/60">{note}</p>
    </div>
  );
}

function SpatialContent({
  prompt,
  base,
  choices,
  answerIndex,
  explanation,
}: {
  prompt: string;
  base: SpatialShape;
  choices: SpatialShape[];
  answerIndex: number;
  explanation: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy/5 text-sm font-bold text-navy">
          Q
        </span>
        <p className="whitespace-pre-line text-base font-semibold leading-relaxed text-navy">
          {prompt}
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 pl-10">
        <span className="text-xs font-bold text-ink/40">회전 전</span>
        <ShapeGrid shape={base} />
      </div>

      <div className="grid grid-cols-2 gap-4 pl-10 sm:grid-cols-4">
        {choices.map((shape, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-ink/50">{circledNumbers[i]}</span>
            <ShapeGrid shape={shape} />
          </div>
        ))}
      </div>

      <AnswerReveal answerLabel={circledNumbers[answerIndex]} explanation={explanation} />
    </div>
  );
}

function ShapeGrid({ shape }: { shape: SpatialShape }) {
  const size = 3;
  const cell = 18;
  const gap = 2;
  const filled = new Set(shape.cells.map(([r, c]) => `${r}-${c}`));

  return (
    <svg
      width={size * cell + (size - 1) * gap}
      height={size * cell + (size - 1) * gap}
      aria-hidden="true"
    >
      {Array.from({ length: size }).map((_, r) =>
        Array.from({ length: size }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * (cell + gap)}
            y={r * (cell + gap)}
            width={cell}
            height={cell}
            rx={2}
            fill={filled.has(`${r}-${c}`) ? "#17223b" : "#e4e7ec"}
          />
        ))
      )}
    </svg>
  );
}

function AnswerReveal({
  answerLabel,
  explanation,
}: {
  answerLabel: string;
  explanation: string;
}) {
  return (
    <details className="group rounded-lg border border-line pl-10 pr-4">
      <summary className="cursor-pointer list-none py-3 text-sm font-bold text-blue">
        정답 및 해설 보기
      </summary>
      <div className="flex flex-col gap-1.5 pb-4 text-sm leading-relaxed text-ink/70">
        <p>
          <span className="font-bold text-navy">정답: {answerLabel}</span>
        </p>
        <p>{explanation}</p>
      </div>
    </details>
  );
}

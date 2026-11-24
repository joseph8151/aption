import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";
import ExamRoundCard from "./ExamRoundCard";
import { examRounds } from "@/data/examRounds";

export default function ThisMonthSection() {
  return (
    <section className="section-y-tight bg-ivory">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-gray">
              이번 달 필기
            </span>
            <h2 className="text-display font-display font-bold text-ink text-balance">
              이번 달, 필기가 확정된 곳부터.
            </h2>
          </div>
          <Link
            href="/this-month"
            className="text-sm font-bold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            전체 일정 보기 →
          </Link>
        </div>

        {examRounds.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {examRounds.map((exam, i) => (
              <Reveal key={exam.slug} delay={i * 80}>
                <ExamRoundCard exam={exam} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-[4px] border border-line bg-card p-8 text-center">
            <p className="text-sm leading-relaxed text-text-gray">
              현재 필기 일정이 확정된 기관이 없습니다. 새 일정이 확정되는 대로 이곳에 추가됩니다.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

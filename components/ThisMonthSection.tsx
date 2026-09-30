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
            <h2 className="text-display font-black text-ink text-balance">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {examRounds.map((exam, i) => (
            <Reveal key={exam.slug} delay={i * 80}>
              <ExamRoundCard exam={exam} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";
import ExamRoundCard from "@/components/ExamRoundCard";
import { examRounds } from "@/data/examRounds";

export const metadata: Metadata = {
  title: "이번 달 필기",
  description:
    "농축협·신협·인천 공무직 등 이번 달 필기시험 일정이 확정된 기관의 실전 회차. 기출예상 문제로 구성된 한시 상품입니다.",
};

export default function ThisMonthPage() {
  return (
    <div className="section-y-tight bg-ivory">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-gray">
            이번 달 필기
          </span>
          <h1 className="text-display font-black text-ink text-balance">
            이번 달, 필기가 확정된 곳부터.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-gray sm:text-lg">
            기관별 실전 회차입니다. 상시 판매하는 유형별 문제집과 달리, 해당 채용 일정에 맞춘
            한시 상품입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {examRounds.map((exam) => (
            <ExamRoundCard key={exam.slug} exam={exam} />
          ))}
        </div>

        <p className="text-xs leading-relaxed text-text-gray">
          기출 복원이 아닌 기출예상 실전 회차입니다. 기본서는 포함되지 않습니다.
        </p>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "이용약관",
  description: "AptiON 웹사이트 및 상담 서비스 이용에 관한 약관을 안내합니다.",
};

export default function TermsPage() {
  return (
    <div className="section-y-tight bg-white">
      <Container className="flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">Legal</span>
          <h1 className="text-display font-black text-navy">이용약관</h1>
          <p className="text-sm text-ink/50">최종 개정일: 서비스 오픈 준비 중 (추후 확정)</p>
        </div>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink/70">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">제1조 (목적)</h2>
            <p>
              이 약관은 AptiON(이하 &ldquo;회사&rdquo;)이 운영하는 웹사이트에서 제공하는
              상담 및 안내 서비스 이용과 관련한 회사와 이용자의 권리, 의무 및 책임사항을
              규정함을 목적으로 합니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">제2조 (서비스의 제공)</h2>
            <p>
              회사는 현재 온라인 자동결제를 제공하지 않으며, 상담 신청 및 전화 문의를 통해
              문제집 안내와 구매 절차를 진행합니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">제3조 (이용자의 의무)</h2>
            <p>
              이용자는 상담 신청 시 정확한 정보를 제공해야 하며, 허위 정보 제공으로 발생하는
              불이익에 대해 회사는 책임을 지지 않습니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">제4조 (지식재산권)</h2>
            <p>
              웹사이트 및 문제집에 포함된 모든 콘텐츠에 대한 저작권은 회사에 귀속되며, 무단
              복제 및 배포를 금지합니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">제5조 (약관의 개정)</h2>
            <p>
              본 약관은 관련 법령의 변경 또는 서비스 개선을 위해 개정될 수 있으며, 개정 시
              웹사이트를 통해 공지합니다.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "AptiON의 개인정보 수집, 이용, 보관에 관한 처리방침을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <div className="py-14 lg:py-20">
      <Container className="flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Legal</span>
          <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">개인정보처리방침</h1>
          <p className="text-sm text-ink/50">최종 개정일: 서비스 오픈 준비 중 (추후 확정)</p>
        </div>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink/70">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">1. 수집하는 개인정보 항목</h2>
            <p>
              AptiON(이하 &ldquo;회사&rdquo;)은 상담 신청 시 이름, 연락처, 이메일, 준비 시험,
              문의 내용을 수집합니다. 전화 문의 시 통화 과정에서 제공되는 정보가 추가로 수집될
              수 있습니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">2. 개인정보의 수집 및 이용 목적</h2>
            <p>
              수집된 개인정보는 상담 신청에 대한 응대, 문제집 안내 및 구매 절차 진행,
              고객문의 대응 목적으로만 이용됩니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">3. 개인정보의 보유 및 이용 기간</h2>
            <p>
              상담 및 구매 목적이 달성된 이후에는 관련 법령에서 정한 기간 동안 보관 후
              지체 없이 파기합니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않으며, 법령에 근거가
              있거나 이용자가 사전에 동의한 경우에 한해 제공할 수 있습니다.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-navy">5. 문의처</h2>
            <p>
              개인정보 관련 문의는 이메일({siteConfig.contactEmail}) 또는 전화(
              {siteConfig.phoneNumber})로 접수해 주세요.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

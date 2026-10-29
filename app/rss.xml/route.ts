import { examRounds } from "@/data/examRounds";
import { siteConfig } from "@/lib/config";

// "이번 달 필기" — 필기 일정이 확정된 기관의 실전 회차 목록을 RSS로 노출.
// 상품은 상시 판매하는 NCS 유형별 문제집과 달리 채용 일정에 맞춘 한시
// 상품이라 매달 구성이 바뀐다. 개별 회차 전용 상세페이지는 없으므로
// 모든 항목은 /this-month로 연결한다.

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();
  const feedUrl = `${siteConfig.siteUrl}/rss.xml`;
  const pageUrl = `${siteConfig.siteUrl}/this-month`;

  const items = examRounds
    .map((exam) => {
      const title = exam.title;
      const description = `${exam.promise} (${exam.cardMeta} · ${exam.examDateLabel} 필기 · ${exam.price.toLocaleString("ko-KR")}원)`;
      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${pageUrl}</link>
      <guid isPermaLink="false">${escapeXml(`${siteConfig.siteUrl}/this-month#${exam.slug}`)}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${now}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AptiON 이번 달 필기</title>
    <link>${pageUrl}</link>
    <description>농축협·신협·부산·수원 등 이번 달 필기시험 일정이 확정된 기관의 실전 회차 안내</description>
    <language>ko-kr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${feedUrl}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// 검색엔진뿐 아니라 ChatGPT(GPTBot/OAI-SearchBot/ChatGPT-User), Perplexity,
// Google 생성형 검색(Google-Extended), Claude 등 AI 답변엔진 크롤러도
// 명시적으로 허용해 GEO(생성형 엔진 최적화)에 대응한다.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}

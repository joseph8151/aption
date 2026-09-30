import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment_Mono, Noto_Serif_KR } from "next/font/google";
import Link from "next/link";

const wantedSans = localFont({
  variable: "--font-wanted-sans",
  display: "swap",
  src: [
    { path: "../../fonts/wanted-sans/WantedSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/wanted-sans/WantedSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/wanted-sans/WantedSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/wanted-sans/WantedSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["700", "900"],
  preload: false,
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TOPIK·EPS",
  description:
    "TOPIK II·EPS-TOPIK 유형예상 실전 자료. 공식 기출 복원이 아니며, 두 시험은 한 상품으로 섞지 않습니다.",
};

const colors = {
  bg: "#EFE8DC",
  ink: "#1A1713",
  card: "#F7F3EC",
  line: "#D6CDBE",
  button: "#1C4336",
  accent: "#9C7A3C",
};

interface TopikEpsProduct {
  slug: string;
  name: string;
  detail: string;
  meta: string;
  price: number;
}

const products: TopikEpsProduct[] = [
  {
    slug: "topik2-writing-50",
    name: "TOPIK II 쓰기 50제",
    detail: "51번 편지·52번 주장",
    meta: "50제 · 모범답안 · PDF",
    price: 29000,
  },
  {
    slug: "topik2-reading-300",
    name: "TOPIK II 읽기 빈출 300제",
    detail: "빈칸·중심 생각·순서",
    meta: "300제 · 짧은 해설 · PDF",
    price: 24900,
  },
  {
    slug: "eps-topik-practice-5",
    name: "EPS-TOPIK 실전 5회",
    detail: "고용허가제 듣기+읽기",
    meta: "5회 · 답지 · PDF",
    price: 29000,
  },
];

export default function TopikEpsPage() {
  return (
    <div
      className={`${wantedSans.variable} ${notoSerifKr.variable} ${fragmentMono.variable}`}
      style={{ background: colors.bg, color: colors.ink, fontFamily: "var(--font-wanted-sans), sans-serif" }}
    >
      <div className="mx-auto flex max-w-(--container-content) flex-col gap-10 px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-4">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-fragment-mono), monospace", color: colors.accent }}
          >
            CATALOG · MID-TERM
          </span>
          <h1
            className="text-4xl leading-tight font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
          >
            틀리는 문제만 다시 풉니다.
          </h1>
          <p className="max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: colors.ink, opacity: 0.75 }}>
            TOPIK II · EPS-TOPIK. 문법 전권이 아닙니다.
          </p>
          <p
            className="max-w-xl border-l-2 py-1 pl-3 text-sm leading-relaxed"
            style={{ borderColor: colors.accent, color: colors.ink, opacity: 0.85 }}
          >
            EPS-TOPIK과 TOPIK II는 다른 시험입니다. 한 상품에 섞지 마세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col gap-5 rounded-[2px] border p-6"
              style={{ background: colors.card, borderColor: colors.line }}
            >
              <span
                className="inline-flex w-fit items-center rounded-[2px] px-2 py-1 text-[11px] font-medium tracking-wide"
                style={{ fontFamily: "var(--font-fragment-mono), monospace", background: colors.accent, color: colors.card }}
              >
                중기
              </span>

              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl leading-snug font-bold"
                  style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}
                >
                  {product.name}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: colors.ink, opacity: 0.7 }}>
                  {product.detail}
                </p>
              </div>

              <span
                className="border-t pt-4 text-[12px]"
                style={{ fontFamily: "var(--font-fragment-mono), monospace", borderColor: colors.line, color: colors.ink, opacity: 0.6 }}
              >
                {product.meta}
              </span>

              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xl font-bold" style={{ fontFamily: "var(--font-noto-serif-kr), serif" }}>
                  {product.price.toLocaleString("ko-KR")}원
                </span>
                <Link
                  href={`/consult?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center rounded-[2px] px-5 py-2.5 text-sm font-semibold"
                  style={{ background: colors.button, color: colors.card }}
                >
                  구매 문의
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-xs leading-relaxed" style={{ color: colors.ink, opacity: 0.55 }}>
          공식 기출 복원이 아닙니다. 유형 예상 문제입니다. TOPIK II와 EPS-TOPIK은 서로 다른 시험이며, 두 시험 자료를
          한 파일로 합치지 않습니다.
        </p>
      </div>
    </div>
  );
}

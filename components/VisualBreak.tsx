import Container from "./Container";
import Reveal from "./Reveal";

export default function VisualBreak() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 lg:py-40">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="examPattern" width="220" height="220" patternUnits="userSpaceOnUse">
            {/* bar chart */}
            <g stroke="#F3EEE6" strokeWidth="2" fill="none">
              <path d="M10 60 L10 30 M22 60 L22 20 M34 60 L34 40 M46 60 L46 10" strokeLinecap="round" />
            </g>
            {/* checkbox */}
            <g stroke="#F3EEE6" strokeWidth="2" fill="none">
              <rect x="110" y="16" width="24" height="24" rx="4" />
              <path d="m115 28 5 5 10-10" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* timer */}
            <g stroke="#F3EEE6" strokeWidth="2" fill="none">
              <circle cx="180" cy="80" r="18" />
              <path d="M180 70v10l7 6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M173 60h14" strokeLinecap="round" />
            </g>
            {/* formula */}
            <text x="20" y="140" fill="#F3EEE6" fontSize="22" fontWeight="700">
              ∑
            </text>
            <text x="70" y="150" fill="#F3EEE6" fontSize="16" fontWeight="700">
              x+y=z
            </text>
            {/* exam sheet lines */}
            <g stroke="#F3EEE6" strokeWidth="2" strokeLinecap="round">
              <path d="M120 170h60" />
              <path d="M120 182h44" />
              <path d="M120 194h52" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#examPattern)" />
      </svg>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-hero font-black text-ivory text-balance">
            덜 읽고,
            <br />
            더 풉니다.
            <br />
            <span className="text-lime">시간 안에 끝냅니다.</span>
          </h2>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-ivory/45">
            AptiON Exam Preparation System
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

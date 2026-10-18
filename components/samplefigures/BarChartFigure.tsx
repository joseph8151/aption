interface Series {
  label: string;
  color: string;
  values: number[];
}

export default function BarChartFigure({
  categories,
  series,
  unit,
  maxValue,
}: {
  categories: string[];
  series: Series[];
  unit: string;
  maxValue: number;
}) {
  const width = 520;
  const height = 250;
  const padL = 48;
  const padB = 28;
  const padT = 28;
  const padR = 16;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const groupW = chartW / categories.length;
  const barGap = 6;
  const barW = (groupW - barGap * (series.length + 1)) / series.length;
  const yTicks = 4;

  const yFor = (v: number) => padT + chartH - (v / maxValue) * chartH;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="통계 막대그래프">
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const v = (maxValue / yTicks) * i;
        const y = yFor(v);
        return (
          <g key={i}>
            <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="#D6CDBE" strokeWidth={1} />
            <text x={padL - 8} y={y + 4} fontSize={10} textAnchor="end" fill="#5B554C" fontFamily="sans-serif">
              {Math.round(v)}
            </text>
          </g>
        );
      })}
      <text x={padL} y={14} fontSize={10} fill="#5B554C" fontFamily="sans-serif">
        (단위: {unit})
      </text>

      {categories.map((cat, ci) => {
        const groupX = padL + ci * groupW;
        return (
          <g key={cat}>
            {series.map((s, si) => {
              const v = s.values[ci];
              const barH = (v / maxValue) * chartH;
              const x = groupX + barGap + si * (barW + barGap);
              const y = padT + chartH - barH;
              return (
                <g key={s.label}>
                  <rect x={x} y={y} width={barW} height={barH} fill={s.color} rx={2} />
                  <text
                    x={x + barW / 2}
                    y={y - 5}
                    fontSize={10}
                    textAnchor="middle"
                    fill="#1A1713"
                    fontFamily="sans-serif"
                    fontWeight={700}
                  >
                    {v}
                  </text>
                </g>
              );
            })}
            <text
              x={groupX + groupW / 2}
              y={height - padB + 16}
              fontSize={11}
              textAnchor="middle"
              fill="#1A1713"
              fontFamily="sans-serif"
            >
              {cat}
            </text>
          </g>
        );
      })}

      {series.length > 1 ? (
        <g transform={`translate(${padL}, ${height - 6})`}>
          {series.map((s, i) => (
            <g key={s.label} transform={`translate(${i * 110}, 0)`}>
              <rect width={10} height={10} fill={s.color} rx={2} />
              <text x={14} y={9} fontSize={10} fill="#1A1713" fontFamily="sans-serif">
                {s.label}
              </text>
            </g>
          ))}
        </g>
      ) : null}
    </svg>
  );
}

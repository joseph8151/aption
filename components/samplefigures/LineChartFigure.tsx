interface Series {
  label: string;
  color: string;
  values: number[];
}

export default function LineChartFigure({
  categories,
  series,
  unit,
  maxValue,
  minValue = 0,
}: {
  categories: string[];
  series: Series[];
  unit: string;
  maxValue: number;
  minValue?: number;
}) {
  const width = 520;
  const height = 230;
  const padL = 48;
  const padB = 28;
  const padT = 30;
  const padR = 16;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const range = maxValue - minValue;
  const yTicks = 4;

  const xFor = (i: number) => padL + (chartW / (categories.length - 1)) * i;
  const yFor = (v: number) => padT + chartH - ((v - minValue) / range) * chartH;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="통계 꺾은선그래프">
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const v = minValue + (range / yTicks) * i;
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

      {categories.map((cat, i) => (
        <text
          key={cat}
          x={xFor(i)}
          y={height - padB + 16}
          fontSize={11}
          textAnchor="middle"
          fill="#1A1713"
          fontFamily="sans-serif"
        >
          {cat}
        </text>
      ))}

      {series.map((s) => {
        const points = s.values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ");
        return (
          <g key={s.label}>
            <polyline points={points} fill="none" stroke={s.color} strokeWidth={2.5} />
            {s.values.map((v, i) => (
              <g key={i}>
                <circle cx={xFor(i)} cy={yFor(v)} r={3.5} fill={s.color} />
                <text
                  x={xFor(i)}
                  y={yFor(v) - 8}
                  fontSize={10}
                  fontWeight={700}
                  textAnchor="middle"
                  fill="#1A1713"
                  fontFamily="sans-serif"
                >
                  {v}
                </text>
              </g>
            ))}
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

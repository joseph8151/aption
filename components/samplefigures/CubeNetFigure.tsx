// 표준 '십자형(전개도)' 배치: 가로 4칸(왼쪽-앞-오른쪽-뒤) + 앞면 위의 윗면, 앞면 아래의 밑면.
// 격자 좌표(0-index, row/col) — 접었을 때 마주보는 면: (왼쪽↔오른쪽), (앞↔뒤), (위↔아래)
// labels 순서: [윗면, 왼쪽, 앞면, 오른쪽, 뒷면, 밑면]
const POSITIONS: Array<{ row: number; col: number; group: "ud" | "lr" | "fb" }> = [
  { row: 0, col: 1, group: "ud" }, // 윗면
  { row: 1, col: 0, group: "lr" }, // 왼쪽
  { row: 1, col: 1, group: "fb" }, // 앞면
  { row: 1, col: 2, group: "lr" }, // 오른쪽
  { row: 1, col: 3, group: "fb" }, // 뒷면
  { row: 2, col: 1, group: "ud" }, // 밑면
];

const GROUP_COLOR: Record<string, string> = {
  ud: "#122240",
  lr: "#7A2331",
  fb: "#8C3A2F",
};

const DEFAULT_LABELS = ["1", "2", "3", "4", "5", "6"];

export default function CubeNetFigure({
  highlightPairs = false,
  labels = DEFAULT_LABELS,
}: {
  highlightPairs?: boolean;
  labels?: string[];
}) {
  const net = POSITIONS.map((p, i) => ({ ...p, label: labels[i] ?? DEFAULT_LABELS[i] }));
  const cell = 56;
  const gap = 3;
  const cols = 4;
  const rows = 3;
  const width = cols * cell + (cols - 1) * gap;
  const height = rows * cell + (rows - 1) * gap;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto w-full max-w-[280px]"
      role="img"
      aria-label="정육면체 전개도"
    >
      {net.map((f) => {
        const x = f.col * (cell + gap);
        const y = f.row * (cell + gap);
        const stroke = highlightPairs ? GROUP_COLOR[f.group] : "#1A1713";
        return (
          <g key={f.label}>
            <rect
              x={x}
              y={y}
              width={cell}
              height={cell}
              fill="#FFFFFF"
              stroke={stroke}
              strokeWidth={highlightPairs ? 2.5 : 1.5}
              rx={3}
            />
            <text
              x={x + cell / 2}
              y={y + cell / 2 + 7}
              fontSize={22}
              fontWeight={700}
              textAnchor="middle"
              fill={highlightPairs ? GROUP_COLOR[f.group] : "#1A1713"}
              fontFamily="sans-serif"
            >
              {f.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

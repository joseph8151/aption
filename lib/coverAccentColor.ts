import { CoverAccent } from "./types";

export const coverAccentColors: Record<CoverAccent, { from: string; to: string; chip: string }> = {
  blue: { from: "#2748b8", to: "#3563e9", chip: "#8fb2ff" },
  purple: { from: "#4c3fb0", to: "#6c5ce7", chip: "#c3b8ff" },
  orange: { from: "#b96a1e", to: "#e08a3c", chip: "#ffd39c" },
  green: { from: "#1f7a52", to: "#2e9e6c", chip: "#9be6c4" },
  navy: { from: "#0e1526", to: "#17223b", chip: "#b8e34a" },
};

export function accentDot(accent: CoverAccent): string {
  return coverAccentColors[accent].to;
}

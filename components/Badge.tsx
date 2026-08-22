const styles: Record<string, string> = {
  BEST: "bg-navy text-white",
  NEW: "bg-lime text-navy",
};

export default function Badge({ label }: { label: "BEST" | "NEW" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${styles[label]}`}
    >
      {label}
    </span>
  );
}

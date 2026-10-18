export interface DataTableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export default function DataTableFigure({ headers, rows, caption }: DataTableData) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="overflow-x-auto rounded-[6px] border border-[#E2DDD2]">
        <table className="w-full min-w-max border-collapse text-left text-[13px]">
          <thead>
            <tr className="bg-[#FFFFFF]">
              {headers.map((h) => (
                <th key={h} className="whitespace-nowrap border-b border-[#E2DDD2] px-3.5 py-2 font-bold text-[#1A1713]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[#E2DDD2]">
                {row.map((cell, j) => (
                  <td key={j} className="whitespace-nowrap px-3.5 py-2 text-[#1A1713]/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? <p className="text-[11px] text-[#1A1713]/50">{caption}</p> : null}
    </div>
  );
}

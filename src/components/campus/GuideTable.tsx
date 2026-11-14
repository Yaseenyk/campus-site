/** Plain responsive table for guide bodies. Server component, `not-prose`. */
export default function GuideTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-white/[0.03] text-zinc-300">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-zinc-400">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 align-top ${i === 0 ? "text-zinc-200" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

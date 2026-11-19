/** `true` = yes, `false` = no, a string = a qualified yes rendered verbatim. */
type Cell = boolean | string;

const ROWS: { criterion: string; zip: Cell; shop: Cell; mine: Cell }[] = [
  { criterion: "Finished code handed to you", zip: true, shop: true, mine: false },
  { criterion: "You take part in building it", zip: false, shop: false, mine: true },
  { criterion: "A developer reviews what you write", zip: false, shop: false, mine: true },
  { criterion: "Report and diagrams", zip: "written for you", shop: "written for you", mine: "you write, reviewed" },
  { criterion: "Fits your problem statement", zip: false, shop: "sometimes", mine: true },
  { criterion: "You can answer viva questions on it", zip: false, shop: false, mine: true },
  { criterion: "Mock viva before submission", zip: false, shop: false, mine: true },
  { criterion: "Help with changes your guide asks for", zip: false, shop: "extra cost", mine: true },
  { criterion: "You know who is guiding you", zip: false, shop: "sometimes", mine: true },
];

function Mark({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="text-ice" aria-label="yes">
        ●
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-zinc-700" aria-label="no">
        —
      </span>
    );
  }
  return <span className="text-[11px] leading-tight text-zinc-500">{value}</span>;
}

/**
 * The objection that loses the most students is "I can get this for ₹2,000".
 * It is answered head-on rather than avoided — including conceding the row
 * where the cheap option is genuinely quicker: it hands over finished code.
 */
export default function PriceComparison() {
  return (
    <section className="py-4">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        &ldquo;I can get a project for ₹2,000&rdquo;
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
        You can. But it is someone else&rsquo;s work, the same file is sold to hundreds of
        students, and submitting it as your own is plagiarism at most universities.
        This is the other way: the project is built with you in live classes, and
        you write part of every module yourself, so you can stand in front of a
        panel and answer for it.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th scope="col" className="py-3 pr-4 text-sm font-normal text-zinc-500">
                What you actually need
              </th>
              <th
                scope="col"
                className="w-28 px-3 py-3 text-center text-xs font-normal uppercase tracking-[0.15em] text-zinc-500"
              >
                ₹2k zip
              </th>
              <th
                scope="col"
                className="w-28 px-3 py-3 text-center text-xs font-normal uppercase tracking-[0.15em] text-zinc-500"
              >
                Local shop
              </th>
              <th
                scope="col"
                className="w-32 rounded-t-lg bg-cyan/[0.06] px-3 py-3 text-center text-xs font-normal uppercase tracking-[0.15em] text-ice"
              >
                Here
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.criterion} className="border-b border-white/5">
                <th
                  scope="row"
                  className="py-3 pr-4 text-sm font-normal leading-snug text-zinc-300"
                >
                  {row.criterion}
                </th>
                <td className="px-3 py-3 text-center">
                  <Mark value={row.zip} />
                </td>
                <td className="px-3 py-3 text-center">
                  <Mark value={row.shop} />
                </td>
                <td className="bg-cyan/[0.06] px-3 py-3 text-center">
                  <Mark value={row.mine} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
        The cheap option is quicker because someone else did the work. Every row
        above is the difference between owning your project and hoping the panel
        does not ask.
      </p>
    </section>
  );
}

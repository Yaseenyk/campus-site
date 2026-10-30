import Link from "next/link";
import { formatInr, lowestPrice, type CampusProject } from "@/lib/campus";

/**
 * The built projects that belong on a topic hub, one row each: title, what it
 * does in a line, level, stack, and the price it starts from. Server component;
 * `not-prose` so it keeps its own layout inside a guide body.
 */
export default function BuiltProjectList({ projects }: { projects: CampusProject[] }) {
  return (
    <ol className="not-prose my-6 grid grid-cols-1 gap-3">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Link
            href={`/${p.slug}/`}
            className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-200 hover:border-cyan/40 sm:p-5"
          >
            <span className="shrink-0 font-mono text-xs text-cyan">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-medium leading-snug text-zinc-50 group-hover:text-cyan">
                {p.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-zinc-400">
                {p.tagline}
              </span>
              <span className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                <span className="text-zinc-300">{p.difficulty}</span>
                <span aria-hidden>·</span>
                <span>{p.stack.slice(0, 4).join(", ")}</span>
                <span aria-hidden>·</span>
                <span>{p.degrees.join(" / ")}</span>
                <span aria-hidden>·</span>
                <span className="tabular-nums">from {formatInr(lowestPrice(p))}</span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

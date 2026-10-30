import Link from "next/link";
import {
  CUSTOM_BUILD_RANGE,
  PAYMENT_POLICY,
  SESSION_POLICY,
  formatInr,
  whatsappHref,
} from "@/lib/campus";

/**
 * How the service works, in the space a topic hub can spare: three steps and
 * the CTAs the site already uses. Says only what the home page says.
 */
export default function ServiceBrief({ context }: { context: string }) {
  const steps = [
    {
      title: "It is built for you",
      body: "Code, database, report, diagrams, presentation deck and a working deployment. You do not write any of it.",
    },
    {
      title: "Then it is explained",
      body: `${SESSION_POLICY.cadence} ${SESSION_POLICY.durationMinutes}-minute sessions on ${SESSION_POLICY.platform} after ${SESSION_POLICY.startsAfter}, walking through the code line by line, ending in a mock viva.`,
    },
    {
      title: "Paid as you see it",
      body: `${PAYMENT_POLICY.method}, split into monthly installments. Sessions start ${PAYMENT_POLICY.sessionsStart.toLowerCase()}; full handover is ${PAYMENT_POLICY.handover.toLowerCase()}.`,
    },
  ];
  return (
    <section className="not-prose my-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
        How getting one of these built works
      </h3>
      <ol className="mt-6 grid gap-5 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="font-mono text-xs text-cyan">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 block text-sm font-medium text-zinc-100">
              {s.title}
            </span>
            <span className="mt-1.5 block text-sm leading-relaxed text-zinc-400">
              {s.body}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm leading-relaxed text-zinc-400">
        A topic that is not on the list is built to your problem statement, quoted
        between {formatInr(CUSTOM_BUILD_RANGE.min)} and{" "}
        {formatInr(CUSTOM_BUILD_RANGE.max)} by scope. The first call is free and
        commits you to nothing.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={whatsappHref(
            `Hi Yaseen, I was reading the ${context} page and want to know about getting a project built.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#04220F] transition-transform duration-200 hover:scale-[1.03]"
        >
          Ask on WhatsApp
        </a>
        <Link
          href="/custom/"
          className="rounded-xl bg-gradient-to-r from-cyan to-purple px-5 py-3 text-sm font-medium text-ink shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] transition-shadow duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)]"
        >
          Get your own idea built
        </Link>
        <Link
          href="/#how-it-works"
          className="rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition-colors duration-200 hover:border-cyan/60 hover:text-zinc-50"
        >
          The full process
        </Link>
      </div>
    </section>
  );
}

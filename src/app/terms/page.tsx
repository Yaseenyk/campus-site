import { seoDescription } from "@/lib/seoText";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { PAYMENT_POLICY, SESSION_POLICY } from "@/lib/campus";
import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const DESCRIPTION =
  "Terms for guided final year projects: what you receive, how installments and milestones work, session commitments, cancellation, academic integrity, and who owns the work.";

export const metadata: Metadata = {
  title: "Terms — Final Year Projects",
  description: seoDescription(DESCRIPTION),
  alternates: { canonical: `${SITE_URL}/terms/` },
  openGraph: {
    type: "website",
    title: "Terms — Final Year Projects | DefendIt",
    description: seoDescription(DESCRIPTION),
    url: `${SITE_URL}/terms/`,
    siteName: "DefendIt",
  },
};

interface Clause {
  heading: string;
  paragraphs: string[];
}

const CLAUSES: Clause[] = [
  {
    heading: "What you receive",
    paragraphs: [
      "This is a project class, not a delivery service. On the Mentored tier the project is built together in live classes: I write and explain part of each module on screen and you write part of it yourself, so you take part in every module. On the Starter and Guided tiers you build it yourself from the design and starter, with reviews. You write the report chapters yourself, and I review them. Nothing finished is handed over for you to submit.",
      "Every tier includes a project design document (scope, modules, database schema), a starter repository with the setup, folder structure, login and one worked example module, a module-by-module build plan, a setup guide and seed data where the project needs it. The Guided tier adds a written review of every module you write, a report template with a review of each chapter you write, a review of your diagrams, and a deployment walkthrough. The Mentored tier adds live classes where the project is built together, debugging help on WhatsApp, and viva preparation with a mock viva.",
      "What each tier includes is listed on the project page itself, and that listing is the agreement. If something is not written there, it is not included — ask before paying rather than after.",
    ],
  },
  {
    heading: "Payment and installments",
    paragraphs: [
      `Payment is direct — ${PAYMENT_POLICY.method.toLowerCase()}. There is no payment gateway, no checkout on this site, and no subscription. You will never be asked for card details, UPI PIN, OTP, or any login credential. Anyone asking for those in my name is not me.`,
      "The total for your tier is split into monthly installments, agreed in writing over email or WhatsApp before any money moves. The split is fixed once agreed; the price does not change midway.",
      "Every payment is acknowledged in writing. Keep that acknowledgement — it is your record.",
    ],
  },
  {
    heading: "Delivery milestones",
    paragraphs: [
      `The design document and starter repository are delivered ${PAYMENT_POLICY.handover.toLowerCase()}, and sessions and reviews begin then. Reviews of your modules and report chapters continue through to your submission date.`,
      "Reviews are returned in writing. You are never paying far ahead of what you have received.",
    ],
  },
  {
    heading: "Sessions",
    paragraphs: [
      `Sessions run live on ${SESSION_POLICY.platform}, ${SESSION_POLICY.cadence.toLowerCase()}, starting after ${SESSION_POLICY.startsAfter}, and run about ${SESSION_POLICY.durationMinutes} minutes each. The number of sessions included is stated on each project page. In each class we build the module of the day together on screen: I explain each step and write part of it, and you write part of it yourself before the class ends. The code is not written for you between classes.`,
      "If you cannot attend on a given day, tell me in advance and the session is rescheduled at no cost. If I cannot attend, the session is rescheduled and does not count against your total. Sessions missed without notice are counted as used.",
      "Session slots are limited by the hours available in an evening. A slot is confirmed only once the first installment clears.",
    ],
  },
  {
    heading: "Cancellation",
    paragraphs: [
      "You can stop at any point between installments. You keep everything delivered up to that point and owe nothing further. Installments already paid cover work already done and sessions already held, so they are not refunded.",
      "If I fail to deliver what the project page promised, your remaining installments are cancelled, you keep everything delivered, and the last installment paid is returned.",
    ],
  },
  {
    heading: "Academic integrity",
    paragraphs: [
      "You take part in building every module and write part of each one yourself, and you write the report. I will not build modules for you outside the classes, or write a report chapter for you, and I will stop an engagement where that is what is being asked for.",
      "It is your responsibility to follow your college's rules on outside help, and to tell your project guide you have a mentor wherever your institution asks for that. I do not sit your viva, write your exam, or contact your college on your behalf.",
    ],
  },
  {
    heading: "Licence and ownership",
    paragraphs: [
      "The project built in your classes, and everything you write, is yours to submit as your academic project, change, and show in your portfolio or to an employer afterwards. The starter repository and design document may be used and built on inside your project.",
      "You may not resell or redistribute the starter repository, the design document or my reviews to other students.",
    ],
  },
  {
    heading: "Support window",
    paragraphs: [
      "WhatsApp help on the Mentored tier runs until your submission date, agreed at the start. If the starter repository does not run on your machine, fixing that is mine to solve, on any tier.",
      "Help with features you add after your submission date is a new scope and is quoted separately.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Final Year Projects", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />

      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-cyan"
      >
        ← All projects
      </Link>

      <header className="mt-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          ~/terms
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Terms
        </h1>
        <p className="mt-5 leading-relaxed text-zinc-400">
          Plain terms, written so you know what you are paying for before you pay.
          Anything agreed over email or WhatsApp that differs from this page —
          a different installment split, a different session count — holds, as long
          as it is in writing.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-400">
          Updated 19 November 2026: the service is now a project class, where
          the project is built together with you in live classes and you write part
          of every module. Agreements made before
          that date keep the terms they were made on.
        </p>
      </header>

      <div className="mt-14 space-y-12">
        {CLAUSES.map((clause, i) => (
          <section key={clause.heading}>
            <h2 className="flex gap-3 text-xl font-semibold tracking-tight text-zinc-50">
              <span className="font-mono text-sm text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              {clause.heading}
            </h2>
            <div className="mt-4 space-y-4 pl-9">
              {clause.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-lg font-semibold text-zinc-50">Something unclear?</h2>
        <p className="mt-3 leading-relaxed text-zinc-400">
          Ask before you pay, not after. Every question about scope, price, or
          timeline gets a written answer.
        </p>
        <Link
          href="/custom/"
          className="mt-5 inline-block rounded-lg border border-white/10 px-6 py-3 text-sm text-zinc-300 transition-colors duration-200 hover:border-cyan/60 hover:text-zinc-50"
        >
          Ask a question →
        </Link>
      </section>
    </div>
  );
}

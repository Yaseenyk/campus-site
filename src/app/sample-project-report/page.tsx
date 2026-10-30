import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PERSON } from "@/lib/site";
import { getCampusProject } from "@/lib/campus";
import { SAMPLE_REPORT } from "@/lib/sampleReport";
import { breadcrumbJsonLd, faqPageJsonLd, personRef } from "@/lib/seo";
import { seoDescription } from "@/lib/seoText";
import JsonLd from "@/components/JsonLd";
import ServiceBrief from "@/components/campus/ServiceBrief";
import StickyActionBar from "@/components/campus/StickyActionBar";

const URL = `${SITE_URL}/sample-project-report/`;
const PDF_URL = `${SITE_URL}${SAMPLE_REPORT.pdfPath}`;

const DESCRIPTION =
  "A BCA and MCA final year project PDF with full documentation, free to download: the complete sample report for the Hospital Management System (MERN) — abstract, introduction, SRS, system design with diagrams, implementation, testing and conclusion.";

export const metadata: Metadata = {
  title: "BCA Final Year Project PDF: Sample Report, Free Download",
  description: seoDescription(DESCRIPTION),
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: "BCA & MCA Final Year Project PDF — Sample Report | DefendIt",
    description: seoDescription(DESCRIPTION),
    url: URL,
    siteName: "DefendIt",
    images: [`${SITE_URL}/og/campus/templates.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA & MCA Final Year Project PDF — Sample Report | DefendIt",
    description: seoDescription(DESCRIPTION),
    images: [`${SITE_URL}/og/campus/templates.jpg`],
  },
};

const FAQ = [
  {
    question: "Is this BCA final year project PDF free to download?",
    answer:
      "Yes. The PDF is a static file on this site, no form and no email. It is the complete sample report for the Hospital Management System, from abstract to appendix.",
  },
  {
    question: "Can I submit this report as my own project?",
    answer:
      "No, and it would not work: the report describes a specific system with specific design decisions, and a panel will ask you to show that system running and explain those decisions. It is published so you can see what a finished report looks like. The projects on this site come with a report written for the code you actually submit, and with sessions so you can defend it.",
  },
  {
    question: "Does it work as an MCA final year project PDF too?",
    answer:
      "Yes. The structure is the one BCA, MCA and B.Tech departments converge on, and the design chapter goes into the database model, the unique index that prevents double booking and the role-guard middleware — the depth an MCA panel expects. Your department's format document still overrides the front matter, margins and citation style.",
  },
  {
    question: "Why is there no college name, guide name or marks on it?",
    answer:
      "Because it is a sample, not a submitted report. The title page, certificate, declaration and acknowledgement are specific to your institution and are deliberately left out. Inventing them would be dishonest, and the site's whole point is real artifacts over claims.",
  },
];

const documentJsonLd = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: `Sample final year project report — ${SAMPLE_REPORT.projectTitle}`,
  description: seoDescription(DESCRIPTION),
  url: URL,
  author: personRef,
  publisher: personRef,
  inLanguage: "en",
  isAccessibleForFree: true,
  learningResourceType: "Sample report",
  educationalLevel: "Undergraduate and postgraduate (BCA, MCA, B.Tech)",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Final year students in India",
  },
  about: { "@type": "Service", url: `${SITE_URL}/${SAMPLE_REPORT.projectSlug}/` },
  encoding: {
    "@type": "MediaObject",
    contentUrl: PDF_URL,
    encodingFormat: "application/pdf",
  },
};

export default function SampleProjectReportPage() {
  const project = getCampusProject(SAMPLE_REPORT.projectSlug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 pb-32 md:pb-12">
      <JsonLd
        data={[
          documentJsonLd,
          faqPageJsonLd(FAQ),
          breadcrumbJsonLd([
            { name: "Final Year Projects", path: "/" },
            { name: "Sample project report", path: "/sample-project-report" },
          ]),
        ]}
      />

      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-cyan"
      >
        ← All projects
      </Link>

      <header className="mt-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          ~/sample-project-report
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl">
          A BCA and MCA final year project PDF you can actually read: the full
          sample report
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Most &ldquo;final year project PDF&rdquo; downloads are a title page and
          a table of contents behind a sign-up form. This is the complete project
          report for the{" "}
          <Link
            href={`/${SAMPLE_REPORT.projectSlug}/`}
            className="text-cyan underline-offset-4 hover:underline"
          >
            {SAMPLE_REPORT.projectTitle}
          </Link>{" "}
          — the structure, depth and diagrams a report is expected to have — as
          a free PDF with no form in front of it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={SAMPLE_REPORT.pdfPath}
            download
            className="rounded-xl bg-gradient-to-r from-cyan to-purple px-6 py-3.5 text-sm font-medium text-ink shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] transition-shadow duration-300 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.5)]"
          >
            Download the sample report (PDF)
          </a>
          <a
            href={SAMPLE_REPORT.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-cyan/60 hover:text-zinc-50"
          >
            Open it in the browser
          </a>
        </div>
      </header>

      <section className="mt-16 border-t border-white/5 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          What is in the PDF
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-400">
          The chapters below, in this order. It follows the structure explained
          in the{" "}
          <Link
            href="/guides/final-year-project-report-format/"
            className="text-cyan underline-offset-4 hover:underline"
          >
            report format guide
          </Link>
          , filled in for a real system: the three role-based portals, the JWT
          role guards, the appointment engine with its unique index, the data
          model and the test cases.
        </p>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {SAMPLE_REPORT.chapters.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-200"
            >
              {c}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 border-t border-white/5 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          What it is, and what it is not
        </h2>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-400">
          <li>
            <span className="text-zinc-200">It is a genuine report</span> for the
            system described on the{" "}
            <Link
              href={`/${SAMPLE_REPORT.projectSlug}/`}
              className="text-cyan underline-offset-4 hover:underline"
            >
              project page
            </Link>
            : the same features, data model, hard parts and viva questions,
            written up the way a submitted report writes them up. It was written
            by {PERSON.name}, who built the project.
          </li>
          <li>
            <span className="text-zinc-200">
              It carries no college name, guide name or marks.
            </span>{" "}
            Those belong to your institution. The delivered report for a purchased
            project carries your department&rsquo;s title page, certificate and
            declaration in its format; this sample leaves them out rather than
            invent them.
          </li>
          <li>
            <span className="text-zinc-200">It is not a report to submit.</span>{" "}
            A report only earns marks when it matches the code on your laptop and
            you can explain both. Read it for the shape and the depth, then write
            yours — or get a project whose report is written to match its code.
          </li>
          <li>
            <span className="text-zinc-200">Screenshots are described, not pasted.</span>{" "}
            The results chapter explains what each portal shows; the delivered
            report for a purchased build carries the screenshots of that build.
          </li>
        </ul>
      </section>

      <section className="mt-16 border-t border-white/5 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          Who it is for
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-400">
          BCA and B.Sc IT students looking for a BCA final year project PDF with
          full documentation to learn the format from; MCA students who want to
          see how deep the design chapter should go; B.Tech CSE teams writing
          their first review-panel report. The project itself suits{" "}
          {project?.degrees.join(", ")}.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { href: "/guides/bca-final-year-project-topics/", label: "BCA project topics" },
            { href: "/guides/mca-final-year-project-topics/", label: "MCA project topics" },
            { href: "/guides/btech-cse-final-year-project-topics/", label: "B.Tech CSE projects" },
            { href: "/templates/", label: "Report and synopsis templates" },
            { href: "/guides/final-year-project-synopsis-format/", label: "Synopsis format" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-zinc-400 transition-colors duration-200 hover:border-cyan/60 hover:text-zinc-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <ServiceBrief context="sample project report" />

      <section className="mt-16 border-t border-white/5 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          Common questions
        </h2>
        <dl className="mt-8 space-y-6">
          {FAQ.map((f) => (
            <div
              key={f.question}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <dt className="font-medium text-zinc-100">{f.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-400">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <StickyActionBar />
    </div>
  );
}

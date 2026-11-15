import { seoDescription } from "@/lib/seoText";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PORTFOLIO_URL, SOCIALS, PERSON } from "@/lib/site";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import { GUIDES } from "@/lib/guides";
import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const DESCRIPTION =
  "Who runs DefendIt, what it sells and what is free, how the guides are written, and the limits: a one-person service for Indian final year students, run from Hyderabad.";

export const metadata: Metadata = {
  title: "About DefendIt: who runs it and what it is",
  description: seoDescription(DESCRIPTION),
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    type: "website",
    title: "About DefendIt",
    description: seoDescription(DESCRIPTION),
    url: `${SITE_URL}/about/`,
    siteName: "DefendIt",
  },
};

const P = "mt-4 leading-relaxed text-zinc-400";
const H2 = "mt-12 text-xl font-semibold tracking-tight text-zinc-50";
const A = "text-cyan underline-offset-4 hover:underline";

export default function AboutPage() {
  const projects = CAMPUS_PROJECTS.length;
  const guides = GUIDES.length;
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">About DefendIt</h1>
      <p className="mt-5 text-lg leading-relaxed text-zinc-300">
        DefendIt is a small, one-person service for Indian final year students (BCA, MCA, B.Tech, B.Sc IT, M.Tech and diploma). It does two things: it publishes free guides on final year projects, and it sells project building with live mentoring. This page says plainly which is which.
      </p>

      <h2 className={H2}>Who runs it</h2>
      <p className={P}>
        I am <a className={A} href={`${PORTFOLIO_URL}/`}>{PERSON.name}</a>, a {PERSON.jobTitle} based in {PERSON.locality}, India. I write the code, the guides and the question bank, and I run the live sessions myself. There is no team behind the site and no outsourcing of the sessions. My work history and projects are on my <a className={A} href={`${PORTFOLIO_URL}/`}>portfolio</a>, <a className={A} href={SOCIALS.github} rel="noopener">GitHub</a> and <a className={A} href={SOCIALS.linkedin} rel="noopener">LinkedIn</a>.
      </p>
      <p className={P}>
        I started it because final year students are asked to defend a project in a viva, and most of what exists online is either a list of topics with no guidance or a zip file of code the student cannot explain. The site is organised around the viva: whatever you submit, you should be able to explain every part of it.
      </p>

      <h2 className={H2}>What is free</h2>
      <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-zinc-400">
        <li>
          <Link className={A} href="/guides/">{guides} guides</Link>: project topics by course with honest difficulty ratings, report and synopsis formats chapter by chapter, presentation, deployment on free hosting, and how to prepare for the viva.
        </li>
        <li>
          The <Link className={A} href="/question-bank/">viva question bank</Link>, the <Link className={A} href="/templates/">report and synopsis templates</Link>, a <Link className={A} href="/sample-project-report/">sample project report</Link>, a <Link className={A} href="/planner/">timeline planner</Link>, a <Link className={A} href="/cost-estimator/">cost estimator</Link> and a short <Link className={A} href="/find-my-project/">project finder</Link>.
        </li>
        <li>
          A <Link className={A} href="/journey/">16-day AI engineering journey</Link>: written lessons that take a developer from how language models work to retrieval, agents, evaluation and deployment.
        </li>
      </ul>

      <h2 className={H2}>What is paid</h2>
      <p className={P}>
        There are {projects} project listings (web, mobile and machine learning) that I build for a student and then teach: live sessions on Google Meet that walk through the code line by line and end in a mock viva. Prices, what each tier includes, the payment split and the cancellation terms are on the project pages and in the <Link className={A} href="/terms/">terms</Link>; nothing is hidden behind a form. Payment is direct by UPI or bank transfer, there is no checkout on the site, and I never ask for card details, OTPs or logins. There is also a <Link className={A} href="/custom/">custom build</Link> option and a <Link className={A} href="/colleges/">mentoring and workshop offer for colleges</Link>.
      </p>
      <p className={P}>
        To be direct about it: a project listing is a build service plus mentoring, not a tutorial you follow yourself. Many colleges have rules about external assistance and some require it to be disclosed. Following your college&apos;s rules is your responsibility, as the terms say. If your institution does not allow built projects, the free guides and the viva material are the part of this site meant for you.
      </p>

      <h2 className={H2}>How the guides are written</h2>
      <p className={P}>
        Guides are written around how final year projects are structured and assessed in Indian colleges and the kinds of questions panels ask. The topic guides rate difficulty from my own experience building the projects, so a rating is an opinion and not a measured statistic. Where a guide gives a format (synopsis, report chapters), colleges and universities differ: your university&apos;s own guidelines always win over any guide here, mine included. The viva question bank is a preparation aid; it cannot tell you what your panel will ask.
      </p>

      <h2 className={H2}>What this site is not</h2>
      <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-zinc-400">
        <li>It is not affiliated with any university, board or accrediting body, and cannot promise marks, a grade or a result.</li>
        <li>I do not sit your viva, write your exam or contact your college for you.</li>
        <li>It does not show advertising. I may apply for Google AdSense to cover running costs; if ads ever appear they will be labelled, the privacy policy will be updated first, and they will not change what the guides say.</li>
      </ul>

      <h2 className={H2}>Contact</h2>
      <p className={P}>
        Questions, corrections to a guide, or a privacy request: see the <Link className={A} href="/contact/">contact page</Link> or write to <a className={A} href={`mailto:${PERSON.email}`}>{PERSON.email}</a>. The <Link className={A} href="/privacy/">privacy notice</Link> explains what is collected.
      </p>
    </article>
  );
}

import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "mca-project-synopsis-format-and-sample",
  title: "Project Synopsis Format: MCA Sample + Template",
  h1: "Project synopsis format for MCA: a full worked sample and a template you can copy",
  description:
    "Project synopsis format for MCA: the sections, a complete sample for a real project, a one-page template to copy, and why synopses get rejected. Fits BCA too.",
  tldr: "An MCA project synopsis is a short proposal, usually 5 to 15 pages depending on the university, that your guide or committee approves before you build. It normally has a title, problem statement, objectives, scope, methodology, technology stack, hardware and software requirements, expected outcome, timeline and references. Approval depends on being specific and finishable in one semester; a complete worked sample and a copy-ready template are below, and your university's own synopsis format overrides both.",
  category: "Documentation",
  publishedAt: "2026-11-15",
  readingMinutes: 10,
  ogImage: "/og/campus/templates.jpg",
  degrees: ["MCA"],
  faq: [
    {
      question: "What is a synopsis in an MCA project?",
      answer:
        "A synopsis is the proposal you submit before building. It tells your guide or project committee what problem you will solve, how, with what tools and in what time, so they can approve, change or reject the topic early. It is not the final report.",
    },
    {
      question: "How long should an MCA project synopsis be?",
      answer:
        "Many departments accept 5 to 15 pages, some ask for as little as two to four. The only length that counts is the one in your department's format circular. A short, specific synopsis is read more carefully than a padded one.",
    },
    {
      question: "Can I change my project after the synopsis is approved?",
      answer:
        "Small changes to features or tools are normal, and you should tell your guide. A change of topic usually needs fresh approval, and some universities require a formal request. Ask before you change, not after.",
    },
    {
      question: "Why do MCA synopses get rejected?",
      answer:
        "The common reasons are a vague or oversized problem, objectives that cannot be checked, a topic that duplicates one already approved in the batch, a stack the student has not used before, and no timeline. The mistakes section below covers each.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        The general guide to{" "}
        <Link href="/guides/final-year-project-synopsis-format/">
          final year project synopsis format
        </Link>{" "}
        covers every degree. This page is the MCA version: what an MCA committee
        wants to see, one synopsis written out in full so you can see what
        &ldquo;specific&rdquo; looks like, and a one-page template. Universities
        differ in page counts, section names and the order of sections. If your
        department has a synopsis format, follow it, and use this page for what to
        write inside each heading.
      </p>

      <h2>What a synopsis is for</h2>
      <p>
        A synopsis is a request for permission. Your guide or committee uses it to
        answer three questions: is the problem real, can this student finish it in
        one semester, and is it different from what the rest of the batch is
        doing. Everything in it should help them say yes. It is shorter and
        earlier than the report, and it describes what you plan to build, so it
        is allowed to be wrong in small ways later. It is not allowed to be vague.
      </p>

      <h2>The sections, and what goes in each</h2>
      <GuideTable
        head={["Section", "What to write", "Common weakness"]}
        rows={[
          ["Title", "A buildable system name, specific to a user and a domain", "Titles like “Management System” with nothing else"],
          ["Problem statement", "Who has the problem, what goes wrong today, what it costs, in 6 to 10 lines", "Describing the technology instead of the problem"],
          ["Objectives", "3 to 6 numbered outcomes the finished system will deliver", "Objectives like “to learn React” that cannot be checked"],
          ["Scope", "What is included and, separately, what is deliberately out", "No out-of-scope list, so the project looks unbounded"],
          ["Methodology", "The process (for example iterative or Agile sprints) and the phases of work", "Naming a model without saying how you will use it"],
          ["Technology stack", "Language, framework, database, key libraries, each with a reason", "A menu of everything you have heard of"],
          ["Hardware and software requirements", "Development and deployment needs, with versions where relevant", "Requirements that do not match the stack"],
          ["Expected outcome", "What exists at the end and how it can be checked", "Claims about impact you cannot measure"],
          ["Timeline", "Phase by phase or week by week, ending before submission", "No buffer for testing and the report"],
          ["References", "Real sources: documentation, papers, existing systems", "Padded lists or none"],
        ]}
      />

      <h2>A complete worked sample synopsis</h2>
      <p>
        The sample below is for the Hospital Management System that is already
        listed on DefendIt as the{" "}
        <Link href="/hospital-management-mern/">
          Hospital Management System (MERN)
        </Link>
        , so the stack, modules and design decisions match a system that is
        actually built. The wording and the timeline are illustrative; write
        your own, since a synopsis copied from a sample is the first thing
        similarity checks and committees notice.
      </p>

      <div className="not-prose my-6 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
          Sample synopsis
        </p>
        <h3 className="mt-3 text-lg font-semibold text-zinc-50">
          Title: Role-Based Hospital Management System with Slot-Conflict-Free
          Appointment Booking
        </h3>

        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-zinc-400">
          <div>
            <h4 className="font-medium text-zinc-200">1. Problem statement</h4>
            <p className="mt-1">
              Small clinics and hospitals often book appointments by phone or in a
              register. Two patients can be given the same doctor and time, doctors
              cannot see their day in one place, and a patient has no record of past
              prescriptions or bills. Many ready-made hospital systems are too
              large and costly for a small clinic. This project proposes a
              lightweight web system where patients book and track appointments,
              doctors manage visits and prescriptions, and an administrator
              manages doctors, departments and billing, with the system itself
              preventing double booking.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">2. Objectives</h4>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              <li>To provide separate patient, doctor and admin portals behind one login with role-based access.</li>
              <li>To let patients book a doctor&apos;s free slot and reject any slot already taken.</li>
              <li>To let doctors record a prescription against each visit and let patients view their history.</li>
              <li>To generate a bill from the consultation fee and listed services, printable as an invoice.</li>
              <li>To give the admin a dashboard of appointments per department and per day.</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">3. Scope</h4>
            <p className="mt-1">
              <strong className="text-zinc-300">Included:</strong> registration and
              login, doctor schedules and slots, appointment booking and
              cancellation, prescriptions, billing, admin reports.{" "}
              <strong className="text-zinc-300">Not included:</strong> online
              payment gateways, insurance claims, laboratory or pharmacy
              inventory, video consultation, and integration with any government
              health record system.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">4. Methodology</h4>
            <p className="mt-1">
              Iterative development in four phases: requirements and design;
              database and authentication; appointment, prescription and billing
              modules; testing, deployment and documentation. Each phase ends with
              a working demo to the guide. Requirements are written as numbered,
              testable statements and each is traced to a test case.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">5. Technology stack</h4>
            <p className="mt-1">
              React for the front end, Node.js with Express for the API, MongoDB
              with Mongoose for data, JWT for authentication and bcrypt for
              password hashing, Tailwind CSS for styling. MongoDB suits
              document-shaped records such as a prescription with a list of
              medicines; the trade-off against a relational database is discussed
              in the report.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">6. Hardware and software requirements</h4>
            <p className="mt-1">
              <strong className="text-zinc-300">Development:</strong> a laptop with
              8 GB RAM, Node.js LTS, MongoDB (local or free-tier Atlas), VS Code,
              Git, Postman. <strong className="text-zinc-300">Deployment:</strong>{" "}
              a free-tier cloud host for the API and database, static hosting
              for the front end, and any modern browser for users.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">7. Expected outcome</h4>
            <p className="mt-1">
              A deployed, working system in which all five objectives can be
              demonstrated, a test-case table showing a second booking for the
              same slot is rejected and a patient cannot reach an admin route, and
              a report with the SRS, ER and data flow diagrams, and UML diagrams.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">8. Timeline (16 weeks, illustrative)</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Weeks 1 to 3: literature survey, requirements, diagrams, schema.</li>
              <li>Weeks 4 to 6: authentication, roles, doctor and patient profiles.</li>
              <li>Weeks 7 to 10: appointment engine, prescriptions, billing.</li>
              <li>Weeks 11 to 12: admin dashboard and search.</li>
              <li>Weeks 13 to 14: testing, bug fixing, deployment.</li>
              <li>Weeks 15 to 16: report, presentation, viva preparation.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-zinc-200">9. References (placeholders)</h4>
            <p className="mt-1">
              [1] Official documentation of React, Express, MongoDB and Mongoose,
              with access dates. [2] Two or three existing clinic or hospital
              systems you actually reviewed. [3] One paper or standard on
              appointment scheduling or role-based access control. Replace these
              with the real sources you read.
            </p>
          </div>
        </div>
      </div>

      <p>
        Notice what makes it approvable: the problem is concrete, every objective
        can be demonstrated, the scope says what is out, the stack is named with a
        reason, and the timeline leaves four weeks for testing and writing. None
        of it claims a result that has not been measured.
      </p>

      <h2>A one-page template you can copy</h2>
      <p>
        Paste this into Word, keep the headings, replace everything in square
        brackets, and reshape it to your university&apos;s format.
      </p>
      <pre>
        <code>{`PROJECT SYNOPSIS
Title: [specific system name for a named user group]
Student: [name, enrolment no.]   Guide: [name]   Semester: [x]   Year: [yyyy]

1. PROBLEM STATEMENT
[Who has the problem. What goes wrong today. Why existing options do not fit. 6-10 lines.]

2. OBJECTIVES
1) [verifiable outcome]
2) [verifiable outcome]
3) [verifiable outcome]

3. SCOPE
In scope: [list]
Out of scope: [list]

4. METHODOLOGY
[Process model and phases, one line each.]

5. TECHNOLOGY STACK
[Front end / back end / database / key libraries, each with a one-line reason]

6. HARDWARE AND SOFTWARE REQUIREMENTS
Development: [ ]
Deployment: [ ]

7. EXPECTED OUTCOME
[What exists at the end and how it will be checked.]

8. TIMELINE
[Phase / weeks / deliverable]

9. REFERENCES
[1] [real source, IEEE style]

Student signature: ______   Guide signature: ______`}</code>
      </pre>

      <h2>Mistakes that get synopses rejected</h2>
      <ol>
        <li>
          <strong>Too big.</strong> &ldquo;A complete smart city platform&rdquo; cannot
          be finished in a semester. Pick one user, one problem, four to six
          modules.
        </li>
        <li>
          <strong>Too vague.</strong> If an objective cannot be demonstrated or
          tested, rewrite it until it can.
        </li>
        <li>
          <strong>A stack you do not know.</strong> Committees ask what you have
          built before. Choose tools you can already read and debug.
        </li>
        <li>
          <strong>Duplicate topics in a batch.</strong> Check with your guide
          which topics are already approved. A common topic with a distinct angle,
          such as conflict-free booking, is safer than a rare topic you cannot
          finish.
        </li>
        <li>
          <strong>No out-of-scope list.</strong> It signals that you do not know
          where the project stops.
        </li>
        <li>
          <strong>Buzzword stacks.</strong> Adding &ldquo;AI&rdquo; or
          &ldquo;blockchain&rdquo; with no role in the problem invites hard
          questions.
        </li>
        <li>
          <strong>Copied text.</strong> Synopses are compared across a batch and
          against online samples. Use this one for structure, not wording.
        </li>
        <li>
          <strong>No timeline or no buffer.</strong> Plan testing and the report
          as real work, because they are.
        </li>
      </ol>

      <h2>Before you submit</h2>
      <ul>
        <li>Confirm the format, page count and submission date with your department.</li>
        <li>Get your guide to read it once before it goes to the committee.</li>
        <li>Be ready to explain every sentence; the synopsis is the first thing a panel asks about.</li>
        <li>Keep a copy; the report&apos;s introduction should grow out of it.</li>
      </ul>

      <hr />

      <p>
        The next document after approval is the report, laid out in the{" "}
        <Link href="/guides/mca-final-year-project-report-format/">
          MCA project report format
        </Link>
        . If you are weighing projects that already come with working code, read{" "}
        <Link href="/guides/mca-projects-with-source-code/">
          MCA projects with source code, used properly
        </Link>
        , or browse{" "}
        <Link href="/guides/mca-final-year-project-topics/">
          MCA final year project topics
        </Link>{" "}
        and the <Link href="/templates/">free templates</Link>. Not sure which
        topic fits you? Try the{" "}
        <Link href="/find-my-project/">find-my-project quiz</Link>.
      </p>
    </>
  );
}

import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import { HUBS } from "@/lib/hubs";
import { SOCIALS } from "@/lib/site";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "mern-stack-project-ideas-with-source-code",
  title: "MERN Stack Project Ideas With Source Code",
  h1: "MERN stack project ideas with source code, and what each one has to get right",
  description:
    
    "MERN stack projects with source code for final year: e-commerce, chat, hospital and blood bank management, each with report and viva prep, plus more ideas.",
  tldr: "A MERN stack final year project is a React front end, an Express and Node API, and MongoDB behind it. The four MERN stack projects here come with full source code, the project report, diagrams and a working deployment: an e-commerce platform with a real cart and stock, a Socket.IO chat with presence, a hospital management system with slot-conflict detection, and a blood bank system with donor matching. Source is delivered on purchase, not published on GitHub, and the reason is explained below.",
  category: "Project ideas",
  publishedAt: "2026-10-30",
  readingMinutes: 9,
  faq: [
    {
      question: "Are these MERN stack projects available on GitHub?",
      answer:
        "No. The source code is delivered to you on purchase — on every tier — rather than published in a public repository, because a public repo gets submitted by hundreds of students and your panel will have seen it. Each project is capped per college for the same reason. The author's own public repositories are on GitHub if you want to read his code before paying.",
    },
    {
      question: "Is the MERN stack a good choice for a final year project?",
      answer:
        "Yes, and most departments accept it. It is one language end to end, it deploys free, and MongoDB's document model fits the data most student projects carry. The viva risk is not the stack — it is building a login-plus-CRUD app with nothing a panel can probe. Each project here has one piece of real logic for that reason.",
    },
    {
      question: "What do I get with the source code?",
      answer:
        "On the Source tier: the full code, a local setup guide, sample or seed data and a handover call. The Academic tier adds the project report, presentation deck, ER, DFD and architecture diagrams and a deployment walkthrough. The Mentored tier adds live sessions walking the code line by line, viva prep, a mock viva and one module varied for you.",
    },
    {
      question: "Can I get a different MERN project built?",
      answer:
        "Yes. Any of the ideas on this page, or your guide's problem statement, can be built to spec in the MERN stack with the same source, report and sessions. Custom builds are quoted by scope.",
    },
  ],
};

const MERN_IDEAS: Topic[] = [
  {
    title: "Local service booking marketplace (tutors, electricians, tiffin)",
    stack: "MERN, JWT, Google Maps API",
    difficulty: "Moderate",
    why: "Two-sided marketplace mechanics and a plausible real product.",
    question: "How do you stop double-booking a provider?",
  },
  {
    title: "Role-based e-learning platform with progress tracking",
    stack: "MERN, JWT, video hosting",
    difficulty: "Moderate",
    why: "Three roles, real permission boundaries, and content sequencing logic.",
    question: "Show me a student calling an instructor route directly.",
  },
  {
    title: "Online examination system with autosave and timing",
    stack: "MERN, WebSockets, Redis",
    difficulty: "Hard",
    why: "Timing, tab-switch detection and autosave under connection loss are real problems.",
    question: "What happens if the browser closes mid-exam?",
  },
  {
    title: "Inventory and billing with an audit trail",
    stack: "MERN, Mongoose transactions",
    difficulty: "Moderate",
    why: "An append-only ledger instead of a mutable quantity column is a genuine design decision.",
    question: "How do you reverse a sale without losing history?",
  },
  {
    title: "Complaint and grievance tracker with escalation",
    stack: "MERN, node-cron",
    difficulty: "Moderate",
    why: "State machines and time-based escalation are more interesting than CRUD.",
    question: "What happens to a complaint nobody touches for a week?",
  },
  {
    title: "Real-time auction platform",
    stack: "MERN, Socket.IO",
    difficulty: "Hard",
    why: "Race conditions on the final bid are the entire challenge.",
    question: "Two bids arrive in the same millisecond. Which wins, and why?",
  },
  {
    title: "Event management with QR check-in",
    stack: "MERN, QR generation, JWT",
    difficulty: "Easy",
    why: "Finishable in weeks, demos well, and single-use QR codes give you something to defend.",
    question: "How do you stop the same QR being scanned twice?",
  },
  {
    title: "Job portal with application tracking",
    stack: "MERN, file uploads, JWT",
    difficulty: "Moderate",
    why: "Two roles, an application state machine, and resume uploads to handle properly.",
    question: "Where are uploaded resumes stored and who can read them?",
  },
];

export function Body() {
  const hub = HUBS.find((h) => h.slug === meta.slug)!;
  const built = CAMPUS_PROJECTS.filter(hub.includes);

  return (
    <>
      <p>
        MERN is the stack most Indian colleges now accept without argument: React on
        the front, Express and Node behind it, MongoDB underneath. One language end
        to end, free to deploy, and a document database that fits the shape of most
        student data. The risk is not the stack. It is that MERN makes a
        login-plus-CRUD app so easy that half the batch submits one, and the panel
        has nothing to ask except &ldquo;what happens when two users do this at
        once?&rdquo;
      </p>
      <p>
        So every MERN stack project on this page is chosen for the one piece of
        real logic a panel can probe. First the four that are built, with source
        code, report, diagrams and deployment. Then more MERN stack project ideas
        that can be built to your problem statement, and a straight answer on why
        none of this is on GitHub.
      </p>

      <h2>MERN stack projects with source code</h2>
      <p>
        Four complete MERN applications. Each ships with the full source code on
        every tier, and with the project report, ER and architecture diagrams and
        a deployment walkthrough on the Academic tier and above.
      </p>
      <BuiltProjectList projects={built} />

      <h3>What each one has to get right</h3>
      <ul>
        <li>
          <Link href="/ecommerce-mern/">E-Commerce Platform</Link> &mdash; the
          cart lives on the server so it survives a refresh and a login, stock is
          decremented so it can never oversell, and checkout runs a real Razorpay
          test-mode payment that produces an order you can open in the admin panel.
          The panel question is two buyers and the last unit.
        </li>
        <li>
          <Link href="/realtime-chat-mern/">Real-Time Chat App</Link> &mdash;
          Socket.IO rather than polling: one-to-one and group chats, typing
          indicators, online and last-seen presence, delivery and read receipts,
          and history that persists and paginates. The panel question is how you
          know a message arrived, in order.
        </li>
        <li>
          <Link href="/hospital-management-mern/">Hospital Management System</Link>{" "}
          &mdash; three role-based portals behind one login, JWT role guards on
          every route, and appointment booking where a unique compound index on
          doctor and slot makes the database itself reject a double booking. This
          is also the project the{" "}
          <Link href="/sample-project-report/">sample project report PDF</Link> is
          written for.
        </li>
        <li>
          <Link href="/blood-bank-management/">Blood Bank Management System</Link>{" "}
          &mdash; donors, units tracked individually with expiry, and request
          matching that encodes the real red-cell compatibility table rather than
          matching equal groups only. The panel question is which groups an A
          positive patient can receive.
        </li>
      </ul>

      <ServiceBrief context="MERN stack project ideas" />

      <h2>Why these MERN stack projects are not on GitHub</h2>
      <p>
        Students search for &ldquo;mern stack projects github&rdquo; because a
        public repo is free. It is also the problem. A repository with a few
        thousand stars has been cloned and submitted by students in every batch
        your examiner has sat on, and the first question will be how your project
        differs from the one they saw last year. The source here is delivered to
        you on purchase &mdash; on every tier, not as an upsell &mdash; and each
        listing is capped to a small number of students per college per academic
        year so that does not happen.
      </p>
      <p>
        If what you want is to read the author&rsquo;s code before paying, that is
        public:{" "}
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
          his repositories on GitHub
        </a>{" "}
        are the same hands that write your project. If what you want is a free
        starter you intend to extend yourself, a public repo is the right choice
        and this page is not for you.
      </p>

      <h2>More MERN stack project ideas</h2>
      <p>
        Ideas, not built listings &mdash; any of them can be{" "}
        <Link href="/custom/">built to your problem statement</Link> in MERN with
        the same source, report and sessions. Each is listed with the stack it
        needs beyond MERN itself, an honest difficulty, and the question a panel
        will open with.
      </p>
      <TopicTable topics={MERN_IDEAS} />

      <h2>What a MERN viva actually asks</h2>
      <ol>
        <li>
          <strong>Why MongoDB and not MySQL?</strong> Have a real answer about
          document shape and the trade-off on cross-collection reporting, not
          &ldquo;because it is NoSQL&rdquo;.
        </li>
        <li>
          <strong>Where is the auth check?</strong> If the only protection is the
          React router hiding a page, you have no protection. Middleware on the
          Express route, reading the role from a verified JWT, is the answer.
        </li>
        <li>
          <strong>What happens to two requests at once?</strong> The cart, the
          slot, the last unit in stock. A unique index or an atomic update is the
          answer; a check-then-write in application code is the wrong one.
        </li>
        <li>
          <strong>Show me the schema.</strong> Mongoose models with required
          fields, enums and references, and an ER diagram that matches them
          exactly.
        </li>
        <li>
          <strong>Where is it deployed?</strong> A URL beats a localhost demo.
          The{" "}
          <Link href="/guides/how-to-deploy-your-final-year-project-free/">
            free deployment guide
          </Link>{" "}
          covers the MERN case.
        </li>
      </ol>

      <hr />

      <p>
        For the wider picture, the{" "}
        <Link href="/guides/web-development-final-year-projects/">
          web development final year projects
        </Link>{" "}
        guide covers the categories beyond MERN, and the{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          viva questions guide
        </Link>{" "}
        has the questions panels actually ask. Browse by degree:{" "}
        <Link href="/guides/bca-final-year-project-topics/">BCA</Link>,{" "}
        <Link href="/guides/mca-final-year-project-topics/">MCA</Link>,{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">B.Tech CSE</Link>.
      </p>
    </>
  );
}

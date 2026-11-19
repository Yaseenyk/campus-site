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
    
    "MERN stack projects for final year we build together from a starter repository: e-commerce, chat, hospital and blood bank management, plus more ideas.",
  tldr: "A MERN stack final year project is a React front end, an Express and Node API, and MongoDB behind it. The four MERN stack projects here are project classes, built together: a design document, a starter repository and a module-by-module plan, with every part you write reviewed on Guided and the project built together in live classes on Mentored. They are an e-commerce platform with a real cart and stock, a Socket.IO chat with presence, a hospital management system with slot-conflict detection, and a blood bank system with donor matching. No finished code is handed over, and the reason is explained below.",
  category: "Project ideas",
  publishedAt: "2026-10-30",
  readingMinutes: 9,
  faq: [
    {
      question: "Are these MERN stack projects available on GitHub?",
      answer:
        "No, and there is no finished version to download. You get a private starter repository (setup, folder structure, login and one worked example module). On Starter and Guided you write the rest from it, with every module reviewed on Guided; on Mentored we build it together in live classes, with you writing part of each module. A finished public repo gets submitted by hundreds of students and your panel will have seen it; code you built yourself has no such problem. The author's own public repositories are on GitHub if you want to read his code before paying.",
    },
    {
      question: "Is the MERN stack a good choice for a final year project?",
      answer:
        "Yes, and most departments accept it. It is one language end to end, it deploys free, and MongoDB's document model fits the data most student projects carry. The viva risk is not the stack — it is building a login-plus-CRUD app with nothing a panel can probe. Each project here has one piece of real logic for that reason.",
    },
    {
      question: "What do I get, if not finished source code?",
      answer:
        "On the Starter tier: a project design document (scope, modules, database schema), a starter repository with setup, folder structure, login and one worked example module, a module-by-module build plan, a local setup guide, seed data and a kickoff call. The Guided tier adds written review of every module you write, a report template with review of each chapter you write, review of your ER, DFD and architecture diagrams, and a deployment walkthrough. The Mentored tier adds live classes on Google Meet where we build the project together on screen, one module per class (I write and explain part of each module and you write part of it yourself, so you end with the complete project), debugging help on WhatsApp until submission, viva prep and a mock viva.",
    },
    {
      question: "Can we build a different MERN project together?",
      answer:
        "Yes. Bring any of the ideas on this page, or your guide's problem statement, and we build it together in the MERN stack with the same design document, starter repository, reviews and classes. Custom project classes are quoted by scope.",
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
        real logic a panel can probe. First the four we can build together, from
        a starter repository. Then more MERN stack
        project ideas you can bring as your own problem statement, and a straight
        answer on why none of this is on GitHub.
      </p>

      <h2>MERN stack projects you build from a starter repository</h2>
      <p>
        Four MERN applications, each as a project class. Every tier starts with a
        design document and a starter repository; the Guided tier and above add
        review of the code, report and ER and architecture diagrams you write, and
        a deployment walkthrough; the Mentored tier adds live classes on Google
        Meet where we build the project together, one module per class, with you
        writing part of each module. Check your college&rsquo;s rules on outside
        help first; you take part in every module and write the report yourself,
        and I review it.
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
        differs from the one they saw last year. There is no finished repository
        here at all: you get a private starter repository and build the rest,
        on your own or together with me in live classes, so the project you
        defend is one you actually built.
      </p>
      <p>
        If what you want is to read the author&rsquo;s code before paying, that is
        public:{" "}
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
          his repositories on GitHub
        </a>{" "}
        are the same hands that review your code. If what you want is a free
        starter you intend to extend on your own, a public repo with a clear
        licence is a fine choice, and the guides on this site are free either way.
      </p>

      <h2>More MERN stack project ideas</h2>
      <p>
        Ideas, not listings &mdash; you can{" "}
        <Link href="/custom/">bring any of them and we build it together</Link> in
        MERN with the same design document, reviews and classes. Each is listed with the stack it
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

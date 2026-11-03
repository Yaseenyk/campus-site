import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import { HUBS } from "@/lib/hubs";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "bca-final-year-project-topics",
  title: "BCA Final Year Project Topics 2026 With Code",
  h1: "BCA final year project topics for 2026: a list you can actually finish",
  description:
    
    "BCA final year project topics for 2026 with source code and report, plus more ideas with stack, honest difficulty and the viva question each attracts.",
  tldr: "The best BCA final year project is one you can finish and fully document in the time you have — a hospital, blood bank or e-commerce system, an expense tracker, a chat app — built as a clean full-stack application with a database design that matches the code. A complete moderate project scores better than a half-built ambitious one. Seven such projects are already built and listed below, with source code.",
  category: "Topic lists",
  publishedAt: "2026-07-27",
  updatedAt: "2026-10-30",
  readingMinutes: 11,
  ogImage: "/social/bca-topics-wide.jpg",
  degrees: ["BCA", "B.Sc IT", "Diploma"],
  faq: [
    {
      question: "Which project is best for BCA final year?",
      answer:
        "One you can finish and document completely. BCA is marked heavily on a working application whose documentation matches the code, so a complete moderate project scores better than an ambitious one that is still half-built at submission.",
    },
    {
      question: "Do BCA projects need machine learning?",
      answer:
        "No. A well-built full-stack application with a clean database design is marked well and is far easier to defend. Add machine learning only if you can explain your dataset and your metric, otherwise it becomes a liability in the viva.",
    },
    {
      question: "Where can I get a BCA final year project with source code?",
      answer:
        "The projects listed on this page are built end to end — source code, report, diagrams, deployment — and come with daily live sessions that walk through the code so you can defend it. Source code is included on every tier; the sessions are what make it yours to explain.",
    },
    {
      question: "Is there a BCA final year project PDF I can download?",
      answer:
        "Yes. A complete sample project report for the Hospital Management System — abstract, introduction, SRS, design, implementation, testing, conclusion — is published as a free PDF on the sample project report page, so you can see what a finished BCA report looks like before you write yours.",
    },
  ],
};

const WEB_TOPICS: Topic[] = [
  {
    title: "Hospital or clinic management system",
    stack: "PHP + MySQL, or MERN",
    difficulty: "Moderate",
    why: "The classic, and still well-marked when appointment conflicts are handled properly instead of overwritten.",
    question: "Two patients book the same slot. What happens?",
  },
  {
    title: "College admission and enquiry portal",
    stack: "PHP + MySQL, or Django",
    difficulty: "Easy",
    why: "Small, finishable, and the workflow states give you something real to draw in your report.",
    question: "Draw the state diagram for an application.",
  },
  {
    title: "Library management with fine calculation",
    stack: "PHP + MySQL",
    difficulty: "Easy",
    why: "Heavily duplicated — only pick it if you can differentiate with reservations or fine rules.",
    question: "How do you calculate a fine across a holiday?",
  },
  {
    title: "Online complaint and grievance tracker",
    stack: "Django or Node, PostgreSQL",
    difficulty: "Moderate",
    why: "Escalation over time is more interesting than plain CRUD and rarely duplicated.",
    question: "What happens to a complaint nobody touches for a week?",
  },
  {
    title: "Blood bank or donor matching portal",
    stack: "PHP + MySQL, or MERN",
    difficulty: "Moderate",
    why: "Matching logic plus urgency gives you something to actually explain.",
    question: "How do you rank donors for an urgent request?",
  },
  {
    title: "Local service booking (tutors, electricians, tiffin)",
    stack: "MERN",
    difficulty: "Moderate",
    why: "Two-sided marketplace mechanics, and it is genuinely plausible as a real product.",
    question: "How do you stop double-booking a provider?",
  },
  {
    title: "Online shop with a working cart and stock",
    stack: "MERN",
    difficulty: "Moderate",
    why: "Common topic, but a cart that survives refresh and stock that cannot go negative is uncommon execution.",
    question: "Two people buy the last unit at the same moment. Who gets it?",
  },
];

const DATA_TOPICS: Topic[] = [
  {
    title: "Student performance dashboard with trend analysis",
    stack: "Python, pandas, Streamlit or Flask",
    difficulty: "Easy",
    why: "Real analysis without needing a trained model. Very finishable.",
    question: "What does this chart tell a class teacher that a table does not?",
  },
  {
    title: "Expense tracker with category insights",
    stack: "PHP or Node, MySQL, Chart.js",
    difficulty: "Easy",
    why: "Small scope, clean schema, and charts computed from real queries.",
    question: "Show me the query behind this chart.",
  },
  {
    title: "Attendance system with defaulter alerts",
    stack: "PHP + MySQL",
    difficulty: "Easy",
    why: "Percentage calculation and threshold alerting is enough logic for a BCA panel.",
    question: "How is the percentage calculated when a student joins mid-term?",
  },
  {
    title: "Crop or weather advisory dashboard",
    stack: "Python, Flask, a public API",
    difficulty: "Moderate",
    why: "Consuming a third-party API teaches you error handling you will be asked about.",
    question: "What does your app do when the API is down?",
  },
];

const APP_TOPICS: Topic[] = [
  {
    title: "Offline-first expense or budget app",
    stack: "React Native or Flutter, SQLite",
    difficulty: "Moderate",
    why: "Works when campus wifi dies mid-demo, and the examiner can install it.",
    question: "Where is the data stored, and what happens with no network?",
  },
  {
    title: "Medicine and appointment reminder app",
    stack: "Flutter, SQLite, local notifications",
    difficulty: "Easy",
    why: "Small, useful, and notification scheduling is a real thing to explain.",
    question: "What happens to a reminder if the phone is switched off?",
  },
  {
    title: "Campus notice and event app",
    stack: "React Native, Firebase",
    difficulty: "Easy",
    why: "Push notifications and role-based posting, finishable in weeks.",
    question: "Who can post, and how is that enforced?",
  },
];

const MISC_TOPICS: Topic[] = [
  {
    title: "Face recognition attendance",
    stack: "Python, OpenCV, Flask",
    difficulty: "Moderate",
    why: "Visually impressive; the marks are in rejecting unknown faces rather than guessing.",
    question: "What happens when someone unenrolled stands in front of the camera?",
  },
  {
    title: "Chat application with message history",
    stack: "Node, Socket.io, MongoDB",
    difficulty: "Moderate",
    why: "Real-time without being unmanageable, and delivery states are a good talking point.",
    question: "What happens to a message sent to an offline user?",
  },
  {
    title: "Resume screening against a job description",
    stack: "Python, Flask, scikit-learn",
    difficulty: "Moderate",
    why: "The one ML topic that stays defensible for BCA, because the score can be explained skill by skill.",
    question: "Why did this resume score higher than that one?",
  },
  {
    title: "QR-based canteen ordering and billing",
    stack: "PHP or Node, MySQL",
    difficulty: "Easy",
    why: "Practical, demos well, and the order state machine gives you report material.",
    question: "How do you stop the same QR being used twice?",
  },
];

export function Body() {
  const hub = HUBS.find((h) => h.slug === meta.slug)!;
  const built = CAMPUS_PROJECTS.filter(hub.includes);

  return (
    <>
      <p>
        A BCA final year project is marked on three things: does it run, does the
        documentation match the code, and can you walk an examiner through it.
        Depth of algorithm matters far less than completeness. The most common
        mistake is picking something ambitious, getting eighty per cent of the way
        there, and submitting a half-finished demo with a report describing
        features that do not exist.
      </p>
      <p>
        So this list is filtered for finishable. It comes in two parts: the BCA
        final year projects that are already built, with source code, report and
        sessions, and then a longer BCA project topics list for 2026 with the stack
        each needs, an honest difficulty rating, and the question a panel will open
        with — because choosing a topic is really choosing which question you will
        have to answer.
      </p>

      <h2>BCA final year projects already built, with source code</h2>
      <p>
        These {built.length} suit BCA. Each one is a complete application with the
        source code, the project report, ER and architecture diagrams and a working
        deployment, and each comes with live sessions that walk through the code
        until you can explain it. Prices are the starting tier; the project page
        has the full breakdown.
      </p>
      <BuiltProjectList projects={built} />

      <ServiceBrief context="BCA final year project topics" />

      <h2>BCA project topics list: web applications</h2>
      <p>
        The safest category for BCA, and the one where duplication is worst. If you
        pick a common topic, differentiate it with one piece of real logic —
        conflict detection, escalation rules, a fine calculation that handles edge
        cases — and lead with that in your presentation.
      </p>
      <TopicTable topics={WEB_TOPICS} />

      <h2>Data and dashboards</h2>
      <p>
        Underrated for BCA. Real analysis on real data, without needing to defend a
        trained model, and the charts give you something concrete to discuss.
      </p>
      <TopicTable topics={DATA_TOPICS} />

      <h2>Mobile applications</h2>
      <p>
        The strongest impression available to a BCA student: an examiner installing
        your app on their own phone. Worth the extra setup.
      </p>
      <TopicTable topics={APP_TOPICS} />

      <h2>More final year project ideas for BCA students</h2>
      <TopicTable topics={MISC_TOPICS} />

      <h2>Three mistakes that cost BCA students marks</h2>
      <ol>
        <li>
          <strong>The report does not match the code.</strong> Panels check. An ER
          diagram showing seven tables when your database has four is worse than
          having no diagram, because it proves neither was made by you.
        </li>
        <li>
          <strong>Nothing is validated.</strong> The examiner will type a negative
          number, or a letter in a phone field, or leave a form blank. Handle those
          three cases and you look competent.
        </li>
        <li>
          <strong>Choosing on ambition rather than time.</strong> Count the weeks you
          actually have, subtract exams, and be honest. Finished beats impressive.
        </li>
      </ol>

      <h2>What a finished BCA project report looks like</h2>
      <p>
        Before you write a line of the report, read one. The{" "}
        <Link href="/sample-project-report/">sample project report</Link> is a
        complete report for the Hospital Management System above — abstract,
        introduction, requirements specification, design with diagrams,
        implementation, testing and conclusion — published as a free PDF. The{" "}
        <Link href="/guides/final-year-project-report-format/">
          report format guide
        </Link>{" "}
        explains what each chapter is for.
      </p>

      <hr />

      <p>
        Everything on the built list ships with the source, the report, the
        diagrams and daily sessions walking through the code —{" "}
        <Link href="/for/bca/">see the BCA projects</Link>, or{" "}
        <Link href="/custom/">
          have something on this list built for you
        </Link>
        . Before your viva, read{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          the questions panels actually ask
        </Link>
        . Doing MCA instead? The{" "}
        <Link href="/guides/mca-final-year-project-topics/">
          MCA final year project topics
        </Link>{" "}
        list goes deeper on design questions.
      </p>
    </>
  );
}

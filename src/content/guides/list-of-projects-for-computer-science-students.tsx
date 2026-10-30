import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "list-of-projects-for-computer-science-students",
  title: "List of Projects for Computer Science Students",
  h1: "A list of projects for computer science students, by domain and difficulty",
  description:
    "A list of projects for computer science students — BCA, B.Sc CS, MCA, B.Tech CSE — organised by domain with stack and honest difficulty: the top 10 projects in computer science for a final year, web, AI, mobile, systems and data ideas, and the eleven already built with source code.",
  tldr: "The best projects for computer science students are complete systems with one piece of logic a panel can probe: a web app that handles two users at once, an ML model that reports where it fails, a mobile app that works offline, a systems project that survives a crash. This page lists the top 10 projects in computer science for a final year, then more ideas by domain, then the eleven projects already built with source code.",
  category: "Project ideas",
  publishedAt: "2026-10-30",
  readingMinutes: 11,
  faq: [
    {
      question: "What are the top 10 projects in computer science for final year?",
      answer:
        "A hospital or appointment system with real conflict detection, an e-commerce platform with stock-safe checkout, a real-time chat with delivery guarantees, a document chatbot with retrieval and citations, a recommender with a cold-start answer, a fake news or spam classifier that explains itself, a leaf disease or similar image classifier tested on real photos, face recognition attendance that rejects unknowns, an offline-first mobile app, and a resume screener with an explainable score. Each is on this page with the question it attracts.",
    },
    {
      question: "Which projects are best for second or third year computer science students?",
      answer:
        "Smaller, single-mechanism builds: an expense tracker with charts from real queries, a QR-based canteen ordering system, a campus notice app, a URL shortener with analytics, a to-do API with authentication. They teach the schema, the auth boundary and deployment without the documentation load a final year project carries.",
    },
    {
      question: "Do these computer science projects come with source code?",
      answer:
        "The eleven on the built list do — full source on every tier, with the report, diagrams and deployment on the Academic tier and live code-walkthrough sessions on the Mentored tier. The rest of the page is ideas that can be built to your problem statement.",
    },
  ],
};

const TOP_TEN: { title: string; href?: string; why: string }[] = [
  {
    title: "Hospital management system with slot-conflict detection",
    href: "/hospital-management-mern/",
    why: "The most-attempted computer science project in India; done properly, with a unique index that refuses a double booking, it is still well-marked.",
  },
  {
    title: "E-commerce platform with a real cart, stock and checkout",
    href: "/ecommerce-mern/",
    why: "A cart that survives refresh, stock that cannot go negative, and a test-mode payment that produces an order.",
  },
  {
    title: "Real-time chat with presence and delivery receipts",
    href: "/realtime-chat-mern/",
    why: "Genuine websockets rather than polling; ordering and delivery state are the questions it attracts.",
  },
  {
    title: "Document chatbot with retrieval-augmented generation",
    href: "/ai-college-assistant/",
    why: "Answers only from a document set and cites the page, which is the defence against the hallucination question.",
  },
  {
    title: "Recommendation system with a cold-start answer",
    href: "/recommendation-system-ml/",
    why: "Collaborative plus content-based filtering, with an explanation for each recommendation.",
  },
  {
    title: "Fake news detection that explains its prediction",
    href: "/fake-news-detection-ml/",
    why: "An NLP pipeline with a confusion matrix and the words that drove each decision.",
  },
  {
    title: "Plant disease detection on real phone photos",
    href: "/plant-disease-detection/",
    why: "A CNN with transfer learning that returns low confidence on a blurry or unknown leaf.",
  },
  {
    title: "Face recognition attendance that rejects unknown faces",
    href: "/face-recognition-attendance/",
    why: "Enrolment from a few photos, a live feed, and a distance threshold you can defend.",
  },
  {
    title: "Offline-first expense tracker mobile app",
    href: "/expense-tracker-mobile/",
    why: "Works with the internet off, syncs when it returns, and installs on the examiner's phone.",
  },
  {
    title: "Resume screening with an explainable match score",
    href: "/resume-screening-ml/",
    why: "Every score breaks into skills matched, skills missing and the experience gap.",
  },
];

const WEB_IDEAS: Topic[] = [
  {
    title: "Blood bank management with donor matching",
    stack: "MERN",
    difficulty: "Moderate",
    why: "Compatibility rules and expiry tracking give you real logic to explain.",
    question: "Which groups can an A positive patient receive?",
  },
  {
    title: "Online examination system with autosave",
    stack: "MERN, WebSockets",
    difficulty: "Hard",
    why: "Timing and connection loss are real problems.",
    question: "What happens if the browser closes mid-exam?",
  },
  {
    title: "Complaint tracker with SLA escalation",
    stack: "Django or Node, PostgreSQL",
    difficulty: "Moderate",
    why: "A state machine with time-based escalation beats plain CRUD.",
    question: "What happens to a complaint nobody touches for a week?",
  },
  {
    title: "Job portal with application tracking",
    stack: "MERN, file uploads",
    difficulty: "Moderate",
    why: "Two roles and an application state machine.",
    question: "Who can read an uploaded resume?",
  },
  {
    title: "URL shortener with click analytics",
    stack: "Node, Redis, PostgreSQL",
    difficulty: "Easy",
    why: "Small, but hashing, redirects and counters are a good second-year build.",
    question: "What happens when two links hash to the same code?",
  },
];

const SYSTEMS_IDEAS: Topic[] = [
  {
    title: "Distributed task queue with retries",
    stack: "Go or Node, Redis",
    difficulty: "Very hard",
    why: "Rare in a batch and panels notice immediately.",
    question: "A worker dies mid-task. What happens?",
  },
  {
    title: "API gateway with rate limiting",
    stack: "Node or Go, Redis",
    difficulty: "Hard",
    why: "Each policy is a module one team member can own.",
    question: "Explain your rate limiter and its failure mode.",
  },
  {
    title: "Container-based auto-grader",
    stack: "Python, Docker API",
    difficulty: "Hard",
    why: "Sandboxing untrusted code is a real security problem.",
    question: "How does a submission not escape the container?",
  },
  {
    title: "Key-value store with write-ahead log",
    stack: "Go, Rust or C++",
    difficulty: "Very hard",
    why: "A genuine systems project: durability and recovery after a crash.",
    question: "Kill the process mid-write. What survives?",
  },
];

const DATA_IDEAS: Topic[] = [
  {
    title: "Sales forecasting for a small business",
    stack: "Python, pandas, Prophet or ARIMA",
    difficulty: "Moderate",
    why: "Time series is a distinct skill and far less duplicated.",
    question: "Why can you not shuffle time series before splitting?",
  },
  {
    title: "Anomaly detection on transaction data",
    stack: "Python, scikit-learn",
    difficulty: "Hard",
    why: "Class imbalance forces you to abandon accuracy.",
    question: "Why is your model not just predicting normal?",
  },
  {
    title: "Student performance dashboard",
    stack: "Python, pandas, Streamlit",
    difficulty: "Easy",
    why: "Real analysis without a trained model; very finishable.",
    question: "What does this chart tell a teacher that a table does not?",
  },
  {
    title: "Sentiment analysis on product reviews",
    stack: "Python, transformers or scikit-learn",
    difficulty: "Moderate",
    why: "Approachable data with results to discuss.",
    question: "How does it handle sarcasm?",
  },
];

const MOBILE_IDEAS: Topic[] = [
  {
    title: "Medicine reminder app",
    stack: "Flutter, SQLite, local notifications",
    difficulty: "Easy",
    why: "Small, useful, and scheduling is a real thing to explain.",
    question: "What happens to a reminder if the phone is off?",
  },
  {
    title: "Campus notice and event app",
    stack: "React Native, Firebase",
    difficulty: "Easy",
    why: "Push notifications and role-based posting.",
    question: "Who can post, and how is that enforced?",
  },
  {
    title: "Field data collection with background sync",
    stack: "Flutter or React Native, SQLite",
    difficulty: "Moderate",
    why: "A real problem for surveys and health workers.",
    question: "What is in your sync queue if it fails halfway?",
  },
];

export function Body() {
  return (
    <>
      <p>
        Most lists of projects for computer science students are two hundred
        titles with no indication of what any of them takes to build or what a
        panel will ask about it. This one is shorter and organised by what
        matters: a top ten for a final year, then ideas by domain with the stack,
        an honest difficulty and the question each attracts, then the eleven
        projects that are already built with source code.
      </p>
      <p>
        The difficulty ratings are written from the other side of the table &mdash;
        these are systems I build professionally &mdash; so they are honest rather
        than encouraging. A project rated Hard here is hard.
      </p>

      <h2>Top 10 projects in computer science for a final year</h2>
      <p>
        Ranked by how reliably they earn marks across BCA, MCA and B.Tech panels:
        each is a complete system with one mechanism the examiner can probe. All
        ten are built and linked.
      </p>
      <ol>
        {TOP_TEN.map((t) => (
          <li key={t.title}>
            <strong>
              {t.href ? <Link href={t.href}>{t.title}</Link> : t.title}
            </strong>{" "}
            &mdash; {t.why}
          </li>
        ))}
      </ol>

      <h2>Web application projects</h2>
      <TopicTable topics={WEB_IDEAS} />

      <h2>Systems and infrastructure projects</h2>
      <p>
        The rarest category in any batch. If your department leans theoretical,
        this is where a B.Tech team differentiates.
      </p>
      <TopicTable topics={SYSTEMS_IDEAS} />

      <h2>Data and machine learning projects</h2>
      <TopicTable topics={DATA_IDEAS} />

      <h2>Mobile application projects</h2>
      <TopicTable topics={MOBILE_IDEAS} />

      <h2>Projects for second and third year students</h2>
      <p>
        Before the final year, the point is to learn the schema, the auth
        boundary and deployment without the documentation load. The smaller
        entries above &mdash; the URL shortener, the student dashboard, the
        medicine reminder, the campus notice app &mdash; are the right size.
        Finish one, deploy it to a real URL, and you arrive at your final year
        knowing what a complete project feels like.
      </p>

      <h2>The eleven projects already built, with source code</h2>
      <p>
        Every project below is complete &mdash; source code, project report,
        diagrams, presentation deck, working deployment &mdash; and comes with
        live sessions that walk through the code until you can defend it. The
        line under each is the mechanism a panel will ask about.
      </p>
      <BuiltProjectList projects={CAMPUS_PROJECTS} />

      <ServiceBrief context="list of projects for computer science students" />

      <hr />

      <p>
        Lists by degree:{" "}
        <Link href="/guides/bca-final-year-project-topics/">BCA</Link>,{" "}
        <Link href="/guides/mca-final-year-project-topics/">MCA</Link>,{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">B.Tech CSE</Link>,{" "}
        <Link href="/guides/bsc-it-final-year-project-topics/">B.Sc IT</Link>,{" "}
        <Link href="/guides/diploma-final-year-project-topics/">Diploma</Link>.
        By stack or domain:{" "}
        <Link href="/guides/mern-stack-project-ideas-with-source-code/">
          MERN stack projects
        </Link>
        ,{" "}
        <Link href="/guides/ai-ml-final-year-projects/">AI projects</Link>,{" "}
        <Link href="/guides/unique-project-ideas-for-final-year-students/">
          unique project ideas
        </Link>
        . Then read{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          the questions panels actually ask
        </Link>
        .
      </p>
    </>
  );
}

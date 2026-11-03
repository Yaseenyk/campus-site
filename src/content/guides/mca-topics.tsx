import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import { HUBS } from "@/lib/hubs";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "mca-final-year-project-topics",
  title: "MCA Final Year Project Topics 2026 With Code",
  h1: "MCA final year project topics for 2026, with the stack and the honest difficulty",
  description:
    
    "MCA final year project topics for 2026: ten built MCA projects with source code and report, then twenty more ideas by domain with stack and difficulty.",
  tldr: "Good MCA final year projects are moderately sized systems you can defend in depth — a RAG document assistant, resume screening, a recommender, or a well-architected full-stack app — each paired with a stack you actually know. MCA vivas push into design decisions, so pick by the depth of questions a project attracts, not by the title. Ten such projects are built and listed below with source code.",
  category: "Topic lists",
  publishedAt: "2026-07-27",
  updatedAt: "2026-10-30",
  readingMinutes: 13,
  ogImage: "/social/mca-topics-wide.jpg",
  degrees: ["MCA", "M.Tech"],
  faq: [
    {
      question: "Which project is best for MCA final year?",
      answer:
        "The one you can explain. MCA vivas push into design decisions rather than features, so a moderately sized project you understand completely scores better than an ambitious one you cannot defend. Pick by the depth of the questions it will attract, not by how impressive the title sounds.",
    },
    {
      question: "Is a machine learning project better than a web project for MCA?",
      answer:
        "Not automatically. An ML project scores well only if you can discuss your dataset, your metric, and where the model fails. A well-architected full-stack system with real design decisions behind it will beat a machine learning project you cannot evaluate.",
    },
    {
      question: "Is there an MCA final year project PDF I can download?",
      answer:
        "Yes. A complete sample project report for the Hospital Management System — abstract through conclusion, with the requirements specification, design diagrams, implementation detail and test cases — is published as a free PDF on the sample project report page. It shows the depth an MCA report is expected to reach.",
    },
    {
      question: "Do MCA projects here come with source code and documentation?",
      answer:
        "Every project on the built list ships with full source code, the project report and synopsis, diagrams, a presentation deck and a working deployment, then live sessions that walk through the code line by line. Source is included on every tier.",
    },
  ],
};

const AI_TOPICS: Topic[] = [
  {
    title: "Document assistant with retrieval-augmented generation",
    stack: "Python, FastAPI, a vector database, React",
    difficulty: "Hard",
    why: "Answers questions from a real document set and cites its source, instead of being a wrapper around a chat API.",
    question: "How do you stop it from inventing an answer?",
  },
  {
    title: "Resume screening and job matching",
    stack: "Python, spaCy, scikit-learn, Flask",
    difficulty: "Moderate",
    why: "Parsing is the hard half. The explainable score is what makes it defensible.",
    question: "Explain TF-IDF and why cosine similarity, not Euclidean distance.",
  },
  {
    title: "Fake news / claim detection with source checking",
    stack: "Python, transformers, Flask",
    difficulty: "Hard",
    why: "Forces you to confront class imbalance and the limits of your training data.",
    question: "Why is accuracy a misleading metric on this dataset?",
  },
  {
    title: "Medical symptom triage with confidence bounds",
    stack: "Python, scikit-learn, Flask, MySQL",
    difficulty: "Hard",
    why: "Refusing to predict when unsure is the whole project. Panels love it.",
    question: "What happens when the model is 51% confident?",
  },
  {
    title: "Demand or sales forecasting for a small business",
    stack: "Python, pandas, Prophet or ARIMA, Streamlit",
    difficulty: "Moderate",
    why: "Time series is a distinct skill and far less duplicated than classification.",
    question: "Why can you not shuffle time series data before splitting?",
  },
];

const FULLSTACK_TOPICS: Topic[] = [
  {
    title: "Multi-tenant hospital or clinic management",
    stack: "MERN or Django, PostgreSQL",
    difficulty: "Moderate",
    why: "Common topic, uncommon execution — real slot-conflict detection is what separates it.",
    question: "What happens if two patients book the same slot simultaneously?",
  },
  {
    title: "Inventory system with audit trail and reversals",
    stack: "Node, PostgreSQL, React",
    difficulty: "Moderate",
    why: "An immutable ledger instead of a mutable quantity column is a genuine design decision.",
    question: "How do you reverse a transaction without losing history?",
  },
  {
    title: "Role-based e-learning platform with progress tracking",
    stack: "MERN, MongoDB",
    difficulty: "Moderate",
    why: "Three roles, real permission boundaries, and content sequencing logic.",
    question: "Show me a student accessing an instructor route.",
  },
  {
    title: "Online examination system with anti-cheating measures",
    stack: "MERN, WebSockets, Redis",
    difficulty: "Hard",
    why: "Timing, tab-switch detection, and autosave under connection loss are real problems.",
    question: "What happens if the browser closes mid-exam?",
  },
  {
    title: "Complaint or grievance tracking with SLA escalation",
    stack: "Django or Node, PostgreSQL",
    difficulty: "Moderate",
    why: "State machines and time-based escalation are more interesting than CRUD.",
    question: "Draw the state diagram for a complaint.",
  },
];

const REALTIME_TOPICS: Topic[] = [
  {
    title: "Collaborative document or whiteboard editor",
    stack: "Node, WebSockets, React, Redis",
    difficulty: "Very hard",
    why: "Conflict resolution between simultaneous edits is a genuinely hard problem.",
    question: "Two users type in the same place. What happens?",
  },
  {
    title: "Live vehicle or delivery tracking",
    stack: "Node, WebSockets, MongoDB, Leaflet",
    difficulty: "Hard",
    why: "Geospatial queries plus streaming updates plus offline gaps.",
    question: "What happens to the trail when the driver loses signal for ten minutes?",
  },
  {
    title: "Real-time auction or bidding platform",
    stack: "Node, WebSockets, PostgreSQL",
    difficulty: "Hard",
    why: "Race conditions on the final bid are the entire challenge.",
    question: "Two bids arrive in the same millisecond. Which wins, and why?",
  },
];

const VISION_TOPICS: Topic[] = [
  {
    title: "Face recognition attendance with unknown-face rejection",
    stack: "Python, OpenCV, dlib, Flask",
    difficulty: "Moderate",
    why: "Rejecting unknown faces rather than matching the nearest is the marking point.",
    question: "What is your distance threshold, and how did you choose it?",
  },
  {
    title: "Automatic number plate recognition",
    stack: "Python, OpenCV, Tesseract or a detection model",
    difficulty: "Hard",
    why: "Real-world image conditions make this much harder than it demos.",
    question: "Show me it failing on a dirty or angled plate.",
  },
  {
    title: "Sign language or gesture recognition",
    stack: "Python, MediaPipe, TensorFlow",
    difficulty: "Hard",
    why: "Genuinely useful, visually striking, and rarely duplicated in a batch.",
    question: "How much of your accuracy is the model and how much is the landmark extraction?",
  },
];

const MOBILE_TOPICS: Topic[] = [
  {
    title: "Offline-first expense or budget tracker",
    stack: "React Native, SQLite, Node backend",
    difficulty: "Moderate",
    why: "Works when the campus wifi dies during your demo. That alone is worth it.",
    question: "Two devices edit the same record offline. How do you resolve it?",
  },
  {
    title: "Field data collection app with background sync",
    stack: "Flutter or React Native, SQLite",
    difficulty: "Moderate",
    why: "A real problem for surveys, agriculture and health workers.",
    question: "What is in your sync queue, and what happens if it fails halfway?",
  },
  {
    title: "Accessibility app — text to speech with on-device OCR",
    stack: "React Native, ML Kit",
    difficulty: "Moderate",
    why: "Socially useful projects get a warmer reception than another booking app.",
    question: "Why on-device rather than an API call?",
  },
];

export function Body() {
  const hub = HUBS.find((h) => h.slug === meta.slug)!;
  const built = CAMPUS_PROJECTS.filter(hub.includes);

  return (
    <>
      <p>
        Most MCA topic lists are the same forty titles copied between sites, with no
        indication of what any of them takes to build or what a panel will ask about
        it. This one is written from the other side — these are systems I build
        professionally, and the difficulty ratings are honest rather than
        encouraging.
      </p>
      <p>
        MCA is postgraduate, and the viva reflects it. Panels push past what your
        project does and into why you built it that way. So each topic below lists
        the question it will attract. If you cannot imagine answering that question,
        pick a different topic — that is the entire point of this list.
      </p>

      <h2>MCA final year projects already built, with source code</h2>
      <p>
        These {built.length} suit MCA. Each is a complete system with the source
        code, the full project report, diagrams and a working deployment, and each
        comes with live sessions that go into the design decisions an MCA panel
        asks about — schema, auth boundary, the metric, the failure case. Prices
        shown are the starting tier.
      </p>
      <BuiltProjectList projects={built} />

      <ServiceBrief context="MCA final year project topics" />

      <h2>More MCA project topics: AI and machine learning</h2>
      <p>
        The highest-scoring category and the easiest to get wrong. An ML project
        only earns its marks if you can discuss your dataset, defend your metric,
        and show a case where the model fails.
      </p>
      <TopicTable topics={AI_TOPICS} />

      <h2>Full-stack systems</h2>
      <p>
        Unfashionable, consistently well-marked. The marks are in schema design and
        the auth boundary, not in the number of screens. A hospital management
        system built properly beats a weak ML project every time.
      </p>
      <TopicTable topics={FULLSTACK_TOPICS} />

      <h2>Real-time systems</h2>
      <p>
        The most technically demanding group. Attempt these only if you are
        comfortable reasoning about two things happening at once — but if you are,
        they are almost never duplicated in a batch.
      </p>
      <TopicTable topics={REALTIME_TOPICS} />

      <h2>Computer vision</h2>
      <p>
        Demos beautifully, which cuts both ways: panels get excited and then probe
        hard. Know your failure cases before you walk in.
      </p>
      <TopicTable topics={VISION_TOPICS} />

      <h2>Mobile applications</h2>
      <p>
        Consistently underrated. An app the examiner can install on their own phone
        makes an impression that a localhost demo cannot.
      </p>
      <TopicTable topics={MOBILE_TOPICS} />

      <h2>MCA final year project PDF: read a finished report first</h2>
      <p>
        An MCA report is expected to justify its design, not just describe it. The{" "}
        <Link href="/sample-project-report/">sample project report</Link> is a
        complete report for the Hospital Management System on the built list —
        abstract, requirements specification, architecture and data model with
        diagrams, implementation with the conflict-detection code, test cases,
        conclusion — as a free PDF. Read it before you write, and read the{" "}
        <Link href="/guides/final-year-project-report-format/">
          chapter-by-chapter format guide
        </Link>{" "}
        alongside it.
      </p>

      <h2>How to actually choose from this list</h2>
      <ol>
        <li>
          Read the viva question next to each topic. Pick three where the question
          interests you rather than frightens you.
        </li>
        <li>
          Check what the rest of your batch is doing. Duplication inside one cohort
          is the fastest way to a hostile panel.
        </li>
        <li>
          Be honest about your time. A moderate project finished and understood
          beats a hard one that is eighty per cent done in March.
        </li>
        <li>
          Confirm with your guide before you build anything. A rejected topic in
          week six is the most expensive mistake available to you.
        </li>
      </ol>

      <hr />

      <p>
        Everything on the built list comes with the source, the report, and daily
        sessions that walk you through the code —{" "}
        <Link href="/for/mca/">see the MCA projects</Link>. Anything on this list
        that is not there can be{" "}
        <Link href="/custom/">built to your problem statement</Link>. And before
        your viva, read{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          the questions panels actually ask
        </Link>
        . For B.Tech CSE batches, the{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">
          B.Tech CSE final year projects
        </Link>{" "}
        list covers team splits and review panels.
      </p>
    </>
  );
}

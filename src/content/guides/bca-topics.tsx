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
  updatedAt: "2026-11-03",
  readingMinutes: 14,
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
    {
      question: "Which language is best for a BCA final year project?",
      answer:
        "The one you can explain line by line. PHP with MySQL, Python with Flask or Django, Java, and the MERN stack are all accepted by panels, so choose on what you already know and what the topic needs, then check your college's rules. A stack you half-know produces code you cannot defend in the viva, which costs more marks than an older stack would.",
    },
    {
      question: "How many modules should a BCA project have?",
      answer:
        "Enough to show one complete flow from login to a finished result, which usually means four to eight modules. The synopsis format guide uses the same range. Fewer than four tends to look like a form with a database, and more than eight is how a project ends up half-built at the deadline.",
    },
    {
      question: "Can I use a template or open-source code for my BCA project?",
      answer:
        "Many students start from existing code, and the risk is the viva, not the rule. A panel will ask which parts you wrote and why, so anything you reuse has to be code you can explain, with your own changes you can point to. If you cannot walk through a module, rewrite it or leave it out.",
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
  {
    title: "Online quiz or exam system with timer and result analysis",
    stack: "PHP + MySQL, or Node",
    difficulty: "Moderate",
    why: "A timer, randomised questions and per-topic results give you three separate pieces of logic to explain.",
    question: "What happens to an attempt if the browser closes halfway?",
  },
  {
    title: "Job portal with application tracking",
    stack: "MERN, or Django",
    difficulty: "Moderate",
    why: "Two roles, a status pipeline and search. Plenty of report material without needing anything exotic.",
    question: "Who can see a candidate's application, and how is that enforced?",
  },
  {
    title: "Hostel or room allocation system",
    stack: "PHP + MySQL",
    difficulty: "Easy",
    why: "Rules such as capacity, year and preference make allocation a real problem instead of a form.",
    question: "What happens when two students are allotted the last bed?",
  },
  {
    title: "Placement and internship tracker for a college",
    stack: "Django or Node, PostgreSQL",
    difficulty: "Easy",
    why: "Genuinely useful to a college, simple schema, and the eligibility rules are easy to defend.",
    question: "How do you decide which students are eligible for a drive?",
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

      <h2>Pick the stack you can explain, then the topic</h2>
      <p>
        Students usually choose the topic first and discover the stack problem in
        week six. Reverse it. Decide what you can already read and debug, then pick
        from the topics that fit. The table below maps the common choices to the
        lists above. None of these is wrong; the risk is always the same, a stack
        you cannot explain in the viva.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-white/[0.03] text-zinc-300">
            <tr>
              <th className="px-4 py-3 font-medium">Stack</th>
              <th className="px-4 py-3 font-medium">Fits best</th>
              <th className="px-4 py-3 font-medium">Where the viva pushes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-400">
            <tr>
              <td className="px-4 py-3 text-zinc-200">PHP + MySQL</td>
              <td className="px-4 py-3">Management systems, portals, anything form-and-report heavy</td>
              <td className="px-4 py-3">Normalisation, SQL injection, how sessions work</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-zinc-200">Python (Flask or Django)</td>
              <td className="px-4 py-3">Dashboards, data topics, the one defensible ML project</td>
              <td className="px-4 py-3">Why this library, how the data was cleaned, what the model gets wrong</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-zinc-200">MERN</td>
              <td className="px-4 py-3">Marketplaces, chat, anything with live updates or two roles</td>
              <td className="px-4 py-3">Authentication, API design, where state lives</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-zinc-200">Flutter or React Native</td>
              <td className="px-4 py-3">Mobile topics an examiner can install on their own phone</td>
              <td className="px-4 py-3">Offline behaviour, permissions, what runs on the device</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Not sure which of these you can finish? The{" "}
        <Link href="/find-my-project/">find my project quiz</Link> asks four
        questions (your degree, the area you enjoy, the time you have and your
        goal) and suggests the built projects that fit, and the{" "}
        <Link href="/cost-estimator/">cost estimator</Link> prices a build if you
        would rather have one done properly.
      </p>

      <h2>Work backwards from the submission date</h2>
      <p>
        Most half-finished BCA projects were not too hard. They started late and
        spent the first half of the time choosing. Count the weeks until your
        submission, subtract exams and the weeks you know you will lose, and divide
        what is left into four blocks in this order.
      </p>
      <ol>
        <li>
          <strong>Topic and synopsis.</strong> Get approval early. Your synopsis
          fixes the scope, which protects you from adding features at the end.
        </li>
        <li>
          <strong>Database and one complete flow.</strong> Login, one record
          created, one record shown. If this works, the rest is repetition.
        </li>
        <li>
          <strong>Remaining modules and validation.</strong> Handle the empty form,
          the wrong type and the duplicate entry as you go, not afterwards.
        </li>
        <li>
          <strong>Testing, report and viva practice.</strong> Leave real time for
          this block. A finished project with a rushed report loses the marks it
          earned.
        </li>
      </ol>
      <p>
        The <Link href="/planner/">timeline planner</Link> does the division for
        your dates. If you have only a month left,{" "}
        <Link href="/guides/final-year-project-in-one-month/">
          the one-month plan
        </Link>{" "}
        is the realistic version of the same idea.
      </p>

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

      <h2>The documents a BCA project needs, and where to get them free</h2>
      <p>
        Searching for a BCA final year project PDF usually means you want the
        paperwork, not only the code. Colleges differ on the exact set, so check
        your format sheet first. The usual ones, with a free starting point for
        each, are below.
      </p>
      <ul>
        <li>
          <strong>Synopsis.</strong> The approval document. Follow the{" "}
          <Link href="/guides/final-year-project-synopsis-format/">
            synopsis format
          </Link>{" "}
          and start from the free synopsis template on the{" "}
          <Link href="/templates/">templates page</Link>.
        </li>
        <li>
          <strong>Project report.</strong> The main document, with chapters from
          introduction to conclusion. The free report template is on the same
          templates page, and the{" "}
          <Link href="/guides/final-year-project-report-format/">
            report format guide
          </Link>{" "}
          explains each chapter.
        </li>
        <li>
          <strong>Presentation.</strong> Slides for the viva, covered slide by slide
          in the{" "}
          <Link href="/guides/final-year-project-presentation-ppt/">
            project PPT guide
          </Link>
          .
        </li>
        <li>
          <strong>Source code and a working demo.</strong> Deploy it if you can; the{" "}
          <Link href="/guides/how-to-deploy-your-final-year-project-free/">
            free deployment guide
          </Link>{" "}
          shows how.
        </li>
        <li>
          <strong>Test cases and a short user manual.</strong> Often asked for as
          appendices. The report template has a testing chapter you can reuse.
        </li>
      </ul>

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

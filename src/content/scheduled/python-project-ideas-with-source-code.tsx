import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "python-project-ideas-with-source-code",
  title: "Python Project Ideas With Source Code, Honestly",
  h1: "Python project ideas with source code: what to build, and what the code should prove",
  description:
    "Python project ideas for mini and final year projects, by lane: automation, desktop, web and data. What a source-code project must prove, how to check one, and the viva questions each idea attracts.",
  tldr: "Python is a good choice for a student project because the same language covers scripts, desktop apps, web apps and data work, so you can choose the lane you can explain. Pick a mini idea (two to four weeks) or a final year idea from the tables below, write it in your own repository with a virtual environment, a requirements file and a README, and treat any source code you find online as a reference you must understand, change and credit, never as a submission. Check your college's rules on reused code before you start.",
  category: "Project ideas",
  publishedAt: "2026-11-27",
  readingMinutes: 10,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "Is it okay to download a Python project with source code for my mini project?",
      answer:
        "Reading other people's code to learn is normal. Submitting it as your own is plagiarism at most colleges. If you use open-source code as a base, check the licence, credit it in your report, and make a substantial change you can explain line by line. Ask your guide what is allowed.",
    },
    {
      question: "Which Python framework is best for a final year project: Flask, Django or FastAPI?",
      answer:
        "Flask is small and easy to explain, which suits a project where you want to show every piece yourself. Django gives you an admin panel, authentication and an ORM out of the box, which saves time on data-heavy systems. FastAPI suits an API in front of a model or a separate frontend. Choose the one whose structure you can draw on a whiteboard.",
    },
    {
      question: "Is Tkinter good enough for a project?",
      answer:
        "For a mini project, yes. A Tkinter app with a SQLite database and clean code is a fine first or second year project. For a final year project, panels usually expect a web interface, multiple users or a substantial algorithm, so a desktop-only app needs a strong core idea to carry it.",
    },
    {
      question: "How much Python do I need to know before starting?",
      answer:
        "Functions, lists and dictionaries, reading and writing files, classes, exceptions and installing packages with pip. If you know those, you can learn the framework while you build. If you do not, start with a mini project in the automation lane first.",
    },
  ],
};

export function Body() {
  const python = CAMPUS_PROJECTS.filter((p) => p.stack.includes("Python"));

  return (
    <>
      <p>
        Search for Python projects with source code and you get thousands of
        repositories, many of them the same dozen titles. The code is rarely the
        problem. The problem is what happens when an examiner opens a file and asks
        what it does. This guide gives you ideas sorted by the kind of Python you
        want to write, then explains what a source-code project has to prove and how
        to check one before you rely on it. Your college decides what reuse is
        allowed, so read its rules first.
      </p>

      <h2>What &ldquo;with source code&rdquo; should mean</h2>
      <p>
        Students search for source code for good reasons: to see how a real project
        is laid out, to get unstuck, to save setup time. That is fine. The line is
        between using code to learn and handing in code you cannot explain. A
        project you can defend has four properties:
      </p>
      <ol>
        <li><strong>It runs from a clean clone</strong> by following the README, on a machine that is not yours.</li>
        <li><strong>You can explain every file</strong>, including the ones you did not write.</li>
        <li><strong>You changed something real</strong>: a module, the data, the algorithm, not the colours.</li>
        <li><strong>You say where it came from</strong>, in the report and in the README.</li>
      </ol>
      <p>
        The longer version of this, with a seven-point check for choosing a base
        project, is in{" "}
        <Link href="/guides/mca-projects-with-source-code/">
          how to use a project with source code honestly
        </Link>
        . It is written for MCA but applies to any degree.
      </p>

      <h2>Choose your Python lane</h2>
      <p>
        Python covers four quite different kinds of project. Pick the lane first,
        because it decides the libraries you learn and the questions you get.
      </p>
      <GuideTable
        head={["Lane", "Typical libraries", "What the panel looks for"]}
        rows={[
          ["Automation and scripts", "pathlib, csv, openpyxl, requests, schedule", "Safe file handling, logging, error handling, a real time saving"],
          ["Desktop apps", "Tkinter or PySide, SQLite", "A clean separation between the window code and the logic"],
          ["Web apps", "Flask, Django or FastAPI, an ORM, a database", "Authentication, roles, validation, a schema you can draw"],
          ["Data and machine learning", "pandas, scikit-learn, matplotlib, Streamlit", "A named dataset, a baseline, one metric you can explain"],
        ]}
      />

      <h2>Python mini project ideas (two to four weeks)</h2>
      <GuideTable
        head={["Idea", "Lane", "The hard part", "Viva question it attracts"]}
        rows={[
          ["Downloads folder organiser with undo", "Automation", "Never deleting or overwriting a file; an undo log", "What happens if two files have the same name?"],
          ["Attendance sheet merger", "Automation", "Different sheet formats from different teachers", "How do you handle a student missing from one sheet?"],
          ["Bulk certificate generator from a CSV", "Automation", "Long names and fonts that overflow the template", "How did you test it with bad data?"],
          ["Library or book-lending desktop app", "Desktop", "Due dates, fines and preventing a double issue", "Where is the fine calculated, and why there?"],
          ["Personal expense tracker with charts", "Desktop", "Monthly totals by category and editing old entries", "Why SQLite and not a text file?"],
          ["Quiz app with a timer and score history", "Web (Flask)", "Keeping the timer on the server so it cannot be cheated", "Can a user change their score in the browser?"],
          ["Spam message classifier", "Data", "Turning text into features, then a fair test split", "What do precision and recall mean for your model?"],
        ]}
      />
      <p>
        A finished mini project in any of these, with a README and a short demo
        video, is worth more than an unfinished big one. For non-Python ideas in the
        same size, see the{" "}
        <Link href="/guides/mini-project-ideas/">mini project ideas list</Link>.
      </p>

      <h2>Python final year project ideas</h2>
      <p>
        A final year project needs more than a working feature: usually several
        modules, more than one kind of user or a substantial algorithm, tests and a
        report. These ideas each have a core that is genuinely yours to design.
      </p>
      <GuideTable
        head={["Idea", "Suggested stack", "The hard part", "Viva question it attracts"]}
        rows={[
          ["Placement cell portal with eligibility rules", "Django, PostgreSQL", "Rules like minimum CGPA and no active backlogs, applied automatically and auditable", "Where are eligibility rules stored, and how does an admin change one?"],
          ["Hostel mess feedback and menu planner", "Flask, SQLite, pandas", "Turning ratings into a menu suggestion that is not just the average", "How do you stop one student rating fifty times?"],
          ["Resume screener against a job description", "Flask, scikit-learn, spaCy", "Explaining why a resume scored what it did", "Is your ranking biased, and how would you check?"],
          ["Ask-my-documents assistant for a department", "FastAPI, a vector store, a hosted language model", "Showing the passage each answer came from; saying 'not found'", "What happens when the answer is not in the documents?"],
          ["Face recognition attendance", "Flask, OpenCV, face-recognition", "Rejecting unknown faces instead of guessing the nearest match", "What is your threshold, and how did you choose it?"],
          ["Small-shop demand forecaster", "pandas, statsmodels or scikit-learn, Streamlit", "A naive baseline to beat and honest error bars", "Does your model beat 'same as last week'?"],
          ["Lab inventory with QR labels and audit log", "Django, PostgreSQL", "Every change recorded with who and when", "Can an admin delete history? Should they?"],
        ]}
      />
      <p>
        Several of these exist as listed projects on this site, with their modules
        and viva questions laid out; see the list further down. For machine learning
        ideas in more depth, read{" "}
        <Link href="/guides/ai-ml-final-year-projects/">AI projects for final year students</Link>.
      </p>

      <h2>Check a Python repository before you trust it</h2>
      <p>
        If you are using a repository as a reference or a base, go through it in one
        sitting before you invest weeks:
      </p>
      <ul>
        <li>
          <strong>Does it pin its dependencies?</strong> A <code>requirements.txt</code>{" "}
          or <code>pyproject.toml</code> with versions. Without it, it may not
          install at all on a current Python.
        </li>
        <li>
          <strong>Does it run in a fresh virtual environment?</strong> Create one,
          install, run. If it only works on the author&apos;s machine, you will
          inherit that.
        </li>
        <li>
          <strong>Are secrets in the code?</strong> A hard-coded database password or
          API key means it was never meant to be deployed, and you must move them to
          environment variables.
        </li>
        <li>
          <strong>Is SQL built by joining strings?</strong> That is an injection
          hole. Parameterised queries or an ORM are the fix, and a good thing to
          show in the viva.
        </li>
        <li>
          <strong>Is there a licence?</strong> No licence file means no permission
          to reuse, even if it is public.
        </li>
        <li>
          <strong>Is the logic separate from the interface?</strong> If the business
          rules live inside button handlers, testing and explaining them is hard.
        </li>
      </ul>

      <h2>A repository layout that reads as your own work</h2>
      <pre>
        <code>{`my-project/
  README.md          what it does, screenshots, how to run, what I built
  requirements.txt   pinned versions
  .env.example       every setting the app needs, no real secrets
  app/               the application package
    models.py        tables or data classes
    services.py      the business rules, testable on their own
    routes.py        web routes or UI handlers, thin
  tests/             pytest tests for services.py first
  data/              sample or seed data, small
  docs/              diagrams and the report`}</code>
      </pre>
      <p>
        Commit often, with messages that describe what changed. A history spread
        over weeks is quiet evidence the work is yours; a single commit named
        &ldquo;final&rdquo; invites the question.
      </p>

      <h2>Python questions examiners like to ask</h2>
      <ol>
        <li>Why did you use a virtual environment, and what is in your requirements file?</li>
        <li>What is the difference between a list and a tuple, and where did you use each?</li>
        <li>How does your app handle an exception in the middle of saving data?</li>
        <li>Why Flask (or Django, or FastAPI) for this project?</li>
        <li>How are passwords stored? (The answer should be a slow hash such as bcrypt or the framework&apos;s built-in hasher, never plain text.)</li>
        <li>Show me the function that implements your main rule, and a test for it.</li>
        <li>If ten times as many users arrived, what would break first?</li>
      </ol>
      <p>
        More, with the reasoning behind them, are in the{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          viva questions guide
        </Link>{" "}
        and the free <Link href="/question-bank/">question bank</Link>. To give the
        project a live link for the demo, the{" "}
        <Link href="/guides/how-to-deploy-your-final-year-project-free/">
          free deployment guide
        </Link>{" "}
        covers Python hosts.
      </p>

      <h2>Python projects we can build together</h2>
      <p>
        These {python.length} listed projects use Python. Each page shows the
        modules, the data, the hard parts and the viva questions for that project.
      </p>
      <BuiltProjectList projects={python} />

      <hr />

      <p>
        None of them is a download. They are project classes: Starter gives you a
        design document, a starter repository and a module-by-module build plan;
        Guided adds a review of every module and report chapter you write; Mentored
        adds live Google Meet classes where we build the project together, one
        module per class, with you writing part of every module, plus viva prep and
        a mock viva. A Python idea of your own can go through the{" "}
        <Link href="/custom/">custom project page</Link>. Check your college&apos;s
        rules on outside help before you decide.
      </p>
    </>
  );
}

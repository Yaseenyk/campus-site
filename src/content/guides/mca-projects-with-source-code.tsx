import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "mca-projects-with-source-code",
  title: "MCA Projects With Source Code: Use Them Honestly",
  h1: "MCA projects with source code: how to choose one, understand it and make it your own",
  description:
    "Use an MCA project with source code without failing the viva: what to check, how to make it your own, a good repo layout, and ten real projects.",
  tldr: "A source-code project is a legitimate starting point only if you can run it, explain every module, change something meaningful, and credit what is not yours. Submitting someone else's code unchanged is academic misconduct at most universities and fails in the viva within minutes. Pick a project you can read, modify at least one module with your own data or feature, cite the origin, and keep a clean repo with a README, tests and a demo. Ten MCA projects we can build together from a starter repository are listed below; this guide does not link to free downloads of other people's work.",
  category: "Project code",
  publishedAt: "2026-11-15",
  updatedAt: "2026-11-15",
  readingMinutes: 10,
  ogImage: "/og/campus/hub.jpg",
  degrees: ["MCA"],
  faq: [
    {
      question: "Is it allowed to submit an MCA project with source code from the internet?",
      answer:
        "It depends on your university's rules, so check them and ask your guide. Using open-source code as a base is often acceptable if it is licensed for reuse, you credit it, and your own contribution is substantial and clearly described. Submitting someone else's project unchanged as your own is treated as plagiarism at most universities.",
    },
    {
      question: "What will an examiner ask about a source-code project?",
      answer:
        "Typically: which parts you wrote or changed, how to run it from scratch, why this stack, how the data model works, how a specific feature is implemented, and what happens in a failure case. Examiners often open a file at random and ask what it does.",
    },
    {
      question: "How do I make a source-code project my own?",
      answer:
        "Change something that matters: swap the dataset or domain, add a module with its own tables and tests, replace a weak algorithm and measure the difference, or improve security and deployment. Then document what you changed in the report and keep your commit history.",
    },
    {
      question: "Do DefendIt projects include source code?",
      answer:
        "Not finished code. Every listed project is a project class: you get a design document and a starter repository (setup, folder structure, login and one worked example module) with a local setup guide. On Starter and Guided you write the rest from the starter, with every module reviewed on Guided; on Mentored we build it together in live classes on Google Meet, one module per class, with you writing part of each module. The project pages say exactly what each tier adds.",
    },
  ],
};

export function Body() {
  const mca = CAMPUS_PROJECTS.filter((p) => p.degrees.includes("MCA"));

  return (
    <>
      <p>
        Searching for MCA projects with source code mostly turns up repositories,
        video playlists and university pages. They can save you weeks, and they
        can also end your project if you handle them badly. This guide is about
        the difference: how to choose a source-code project, what to do with it,
        and what a panel will ask when it sees one. Your university&apos;s
        academic-integrity rules decide what is allowed, so read them, and ask your
        guide if you are unsure.
      </p>

      <h2>Source code is a starting point, not a submission</h2>
      <p>
        Examiners see the same popular projects year after year. They recognise a
        library-management or hospital-booking system that has not been touched.
        Reusing code is normal in software; hiding that you reused it, or being
        unable to explain it, is the problem. The standard that works in practice
        is simple: you can run it, you can explain it, you changed something real,
        and you say where it came from.
      </p>

      <h2>Choosing a source-code project: a seven-point check</h2>
      <ol>
        <li>
          <strong>Does it run?</strong> Clone it into a clean folder and follow its
          own instructions. If you cannot start it in an hour, the project is
          unmaintained or incomplete.
        </li>
        <li>
          <strong>Is the stack one you can learn in the time you have?</strong> A
          project in a framework you have never used becomes a viva you cannot
          pass.
        </li>
        <li>
          <strong>Is the licence clear?</strong> A public repository with no
          licence file is not automatically free to reuse. Prefer permissive
          licences such as MIT or Apache 2.0, and note them in your report.
        </li>
        <li>
          <strong>Is it the right size?</strong> Roughly four to seven modules
          for MCA. Smaller leaves nothing to defend; larger leaves things you
          cannot explain.
        </li>
        <li>
          <strong>Is the design sound?</strong> Check the schema, how passwords are
          stored, and whether role checks are on the server. Weak foundations are
          expensive to fix later.
        </li>
        <li>
          <strong>Is it already common in your batch?</strong> Ask your guide
          which topics are taken before you invest.
        </li>
        <li>
          <strong>Is there room to extend it?</strong> You need at least one
          module you can genuinely change or add, covered below.
        </li>
      </ol>

      <h2>Understand it before you change it</h2>
      <p>
        Spend the first week reading, not editing. A workable routine:
      </p>
      <ul>
        <li>Draw the architecture and ER diagram yourself from the code, not from the README.</li>
        <li>Follow one request end to end: click, route, controller, query, response. Do it for login and for the main business action.</li>
        <li>Run it with a debugger or logging and break it on purpose to see what fails.</li>
        <li>For every file, write one sentence on what it is for. If you cannot, you are not ready to present it.</li>
        <li>Write down the ten questions you would ask if you were the examiner and answer them.</li>
      </ul>

      <h2>Make it your own: ways to extend a project</h2>
      <p>
        Cosmetic changes such as new colours, a renamed title or a different logo
        do not count, and examiners know it. Substantive changes do:
      </p>
      <GuideTable
        head={["Type of change", "Example", "What you can show"]}
        rows={[
          ["New domain or dataset", "Reuse a booking engine for a dental clinic or a library, with your own data model", "A new schema, seed data and screens"],
          ["New module", "Add notifications, reports or a role the project does not have", "New tables or collections, routes, tests"],
          ["Better algorithm", "Replace a keyword match with TF-IDF or an embedding search, or add a threshold", "Before and after metrics on the same data"],
          ["Hardening", "Rate limiting, input validation, audit log, stronger password policy", "Test cases that fail before and pass after"],
          ["Deployment", "Containerise it, add CI, deploy on a free tier", "A live URL and a pipeline file"],
          ["Evaluation", "Write a proper test suite or an evaluation script", "Test report and coverage figures you actually ran"],
        ]}
      />
      <p>
        Keep your changes in your own commits, so the history proves what is
        yours. In the report, include a short section titled something like
        &ldquo;Base work and my contribution&rdquo; that lists what came from where.
        That honesty is what protects you.
      </p>

      <h2>MCA projects we can build together on DefendIt</h2>
      <p>
        These {mca.length} listed projects suit MCA. Each is a project class
        rather than finished source code: a design document, a starter repository
        with a local setup guide, login and one worked example module, and a
        module-by-module plan. Each page spells out what every tier adds: on
        Starter you write the rest from the starter; Guided adds review of every
        module, report chapter and diagram you write; Mentored adds live classes
        on Google Meet where we build the project together, one module per class,
        with me writing and explaining part of each module and you writing part
        of it yourself, plus debugging help and a mock viva. Either way, the
        &ldquo;Base work and my contribution&rdquo; section above should say
        honestly what came from the starter repository and the classes, and what
        you wrote. Prices shown are the starting tier.
        Check your university&apos;s rules on outside help before you decide;
        they differ.
      </p>
      <BuiltProjectList projects={mca} />
      <p>
        For depth on any one of them, each page lists the stack, the modules and
        the viva questions that project attracts. Weighing topics first? The{" "}
        <Link href="/guides/mca-final-year-project-topics/">
          MCA final year project topics guide
        </Link>{" "}
        ranks them by difficulty, and the{" "}
        <Link href="/find-my-project/">find-my-project quiz</Link> narrows them by
        what you already know.
      </p>

      <h2>What a good project repository looks like</h2>
      <p>
        If your guide or panel asks to see the repository, or you are asked to
        submit a link, this is what reads as a serious submission:
      </p>
      <pre>
        <code>{`project/
  README.md          what it is, screenshots, stack, setup, run, test, licence
  .env.example       every variable the app needs, with no real secrets
  docs/              SRS, ER and DFD images, report PDF
  server/            routes, controllers, models, middleware
  client/            pages, components, state
  tests/             unit and API tests, plus how to run them
  seed/              sample data so a clean clone shows something
  .gitignore         node_modules, .env, build output`}</code>
      </pre>
      <ul>
        <li><strong>README.</strong> A stranger should be able to install and run the project from it in ten minutes. Include a screenshot or two, the feature list and a &ldquo;What I built and what I reused&rdquo; section.</li>
        <li><strong>No secrets in git.</strong> API keys and database passwords never go in the repository; commit an example env file instead.</li>
        <li><strong>Tests.</strong> Even a small set that covers login, the main business rule and one failure shows engineering habit.</li>
        <li><strong>Commit history.</strong> Meaningful messages over many days read as real work; one commit named &ldquo;final&rdquo; invites doubt.</li>
        <li><strong>A demo.</strong> A deployed link or a short screen recording means the panel can see it work even if the venue network fails. The <Link href="/guides/how-to-deploy-your-final-year-project-free/">free deployment guide</Link> shows how.</li>
      </ul>

      <h2>Viva questions for a source-code project</h2>
      <p>
        Expect questions designed to separate understanding from possession.
        Practise these aloud:
      </p>
      <ol>
        <li>Which parts did you write and which parts did you reuse?</li>
        <li>Open any file. What does it do and who calls it?</li>
        <li>How do you run this from a clean machine?</li>
        <li>Why this database and this schema? What would you change at ten times the data?</li>
        <li>How is authentication done, and where are roles enforced?</li>
        <li>Show me a bug you found and how you fixed it.</li>
        <li>What does it do when the input is wrong, empty or hostile?</li>
        <li>What would you add next, and why did you not add it now?</li>
      </ol>
      <p>
        There are more, with the reasoning behind them, in the{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          viva questions guide
        </Link>
        .
      </p>

      <h2>Mistakes that cost marks</h2>
      <ul>
        <li>Submitting the code unchanged, or with only the title and colours changed.</li>
        <li>Presenting diagrams that do not match the code, because they were taken from the original project&apos;s report.</li>
        <li>Leaving the original author&apos;s name, comments or credentials in files.</li>
        <li>Claiming a feature that exists only in the README, not in the running system.</li>
        <li>Not testing a clean install, then failing on the day.</li>
        <li>Ignoring the licence.</li>
      </ul>

      <hr />

      <p>
        Working code is the middle of the process, not the whole of it. Before it,
        you submit an approved plan, covered in the{" "}
        <Link href="/guides/mca-project-synopsis-format-and-sample/">
          MCA project synopsis guide with a worked sample
        </Link>
        . After it, you document it, laid out in the{" "}
        <Link href="/guides/mca-final-year-project-report-format/">
          MCA project report format guide
        </Link>
        . If you want to build your own problem statement together, see{" "}
        <Link href="/custom/">custom project classes</Link>.
      </p>
      <p>
        Looking for a smaller starting point? See <Link href="/guides/mini-project-ideas/">mini project ideas</Link>, or <Link href="/guides/bca-final-year-project/">choosing a BCA final year project</Link> if you are comparing degree levels.
      </p>
    </>
  );
}

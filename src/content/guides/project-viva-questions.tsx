import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";

export const meta: GuideMeta = {
  slug: "project-viva-questions",
  title: "What Examiners Test in a Project Viva",
  h1: "Project viva questions: what the examiner is really testing",
  description:
    "Project viva questions grouped by what the panel is really checking: running it, failure handling, security, your own code. Based on 83 questions.",
  tldr: "Project viva questions look random, but each one tests something specific: that it runs, that you chose its design, that it survives failure, that the code is yours. Our bank of 83 questions groups them by category, and failure handling is the largest at 15. Prepare for what is being tested, not the wording.",
  category: "Project story",
  publishedAt: "2026-11-04",
  readingMinutes: 8,
  degrees: ["BCA", "MCA", "B.Tech"],
  ogImage: "/og/campus/question-bank.jpg",
  faq: [
    {
      question: "What are the most common project viva questions?",
      answer:
        "Show me it running, why this database and framework, what happens if two users act at once, where passwords are stored, which part you found hardest, and what you would do differently. Our bank groups 83 questions into ten categories so you can see which ones apply to your project type.",
    },
    {
      question: "How do I prepare for project viva questions in one week?",
      answer:
        "Open your own project and answer each category out loud against it: run it from scratch, show a real database record, explain one bug you fixed, and break it on purpose. Reading answers off a list is the smaller half of the preparation.",
    },
    {
      question: "Are project viva questions different for ML projects?",
      answer:
        "Yes. The bank has eleven machine learning questions on data provenance, train and test splits, overfitting, wrong predictions, bias and why accuracy can be the wrong metric. Web projects get more questions on security, databases and race conditions.",
    },
    {
      question: "What if the examiner asks how much I wrote myself?",
      answer:
        "Answer honestly and specifically: name the library that does the real work, and name what you wrote on top of it. The panel is separating your contribution from the dependency. A vague answer is worse than a modest, exact one.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        For the full guide to answering them, see our{" "}
        <Link href="/guides/final-year-project-viva-questions/">viva questions</Link>{" "}
        guide. The most useful line in our viva question bank is not a question. It is
        the short note printed under each one, saying what the examiner is
        actually testing. When I set the bank up, I decided that every entry had
        to carry one, because a list of questions is only half a tool. The
        follow-up in a viva is always aimed at the note, never at the wording.
      </p>

      <h2>The student&rsquo;s problem, in plain words</h2>
      <p>
        You search for project viva questions and find PDFs, document-sharing
        pages and a few college blogs, mostly long lists with a one-line answer
        under each. You read fifty of them the night before. Then the panel asks
        something that is not on any list, and you freeze, because you
        memorised sentences and not what they were for.
      </p>
      <p>
        Picture a BCA student with a good project and a good memory. This is a
        made-up student. The panel says &ldquo;open the database and show me a
        real record&rdquo; and she has only ever shown the app. Nothing on her
        list covered that, because it is not a question about knowledge. It
        checks whether the data is real or hardcoded for the demo.
      </p>

      <h2>Chapter one: group the questions by purpose</h2>
      <p>
        The bank currently holds 83 questions, in ten categories. By count they
        are: failure handling 15, design decisions 11, machine learning 11,
        security 9, database 8, your code 8, running it 6, closing 6, frontend
        5 and testing 4. The sizes are simply what you get when you sort the questions by what
        they test, and the shape is informative. The largest group is not about knowledge at all. It is
        about what happens when something goes wrong.
      </p>

      <h2>Chapter two: &ldquo;running it&rdquo; and &ldquo;your code&rdquo;</h2>
      <p>
        These are the groups that catch students who did not build the project.
        &ldquo;Can you set this up from scratch on this machine right
        now?&rdquo; tests whether you have ever installed it yourself.
        &ldquo;What does this line do? Why is it necessary?&rdquo; carries a
        blunt note in the bank: usually asked about the one line you copied.
        &ldquo;Show me a bug you fixed and explain what was wrong&rdquo; is
        marked as the clearest evidence of authorship.
      </p>
      <p>
        And there is &ldquo;Which part did you find hardest, and how did you get
        past it?&rdquo; The bank says: not small talk. Builders have a specific
        story; buyers do not. That is the reason this whole series of guides is
        written as stories. If you have built something, you already have one.
        Write it down before the viva, in three sentences.
      </p>

      <h2>Chapter three: failure handling is the biggest group</h2>
      <p>
        Fifteen questions, more than any other category. &ldquo;What happens if
        two users do this at exactly the same time?&rdquo; is marked
        &ldquo;race conditions; almost nobody prepares for this&rdquo;. Others:
        enter a negative number here, submit this form empty, upload a file in
        the wrong format, what if the network drops halfway through, what does
        your app do when the external API is down.
      </p>
      <p>
        The pattern is that none of them need advanced knowledge. They need the
        habit of having broken your own project on purpose. A student can
        prepare for this category completely, in one afternoon, by trying each
        of those on their own app and writing down what happened. The race
        condition has a concrete answer in two of our projects. In the{" "}
        <Link href="/guides/hospital-management-system-project/">
          hospital management system
        </Link>
        , a unique index stops two patients booking one slot. In the e-commerce
        project, a single atomic update that matches only when enough stock
        remains stops two customers buying the last unit.
      </p>

      <h2>The turning point: stop collecting answers</h2>
      <p>
        Here is the idea the bank is built on. A one-line model answer is
        useless if the question arrives in different words. The note under the
        question is what transfers. &ldquo;Whether you can name the alternative
        you rejected&rdquo; applies to the database, the framework and the
        algorithm. &ldquo;Whether the report matches the code&rdquo;, the note
        on the ER diagram question, applies to every diagram you submit. Once
        you learn the ten or so things being tested, most questions become
        variations.
      </p>
      <p>
        Security and database questions work the same way. Where are passwords
        stored and in what form? Whether hashing is understood or just
        mentioned. Can one user read another user&rsquo;s data by changing the
        URL? Object-level authorisation, which the bank notes is very commonly
        missing. If you can answer those in the language of your own routes and
        tables, you have answered the category.
      </p>

      <h2>What I would do again</h2>
      <ol>
        <li>Sort practice questions by what they test, not by topic.</li>
        <li>Run your project from a clean folder once, on a different machine if you can.</li>
        <li>Open your database and have one real record ready to show.</li>
        <li>Break your own app with a negative number, an empty form and a wrong file type, and note what happens.</li>
        <li>Prepare one real story about the hardest part and one bug you fixed.</li>
        <li>For each design choice, write the alternative you rejected in one sentence.</li>
        <li>Prepare an honest, specific answer to &ldquo;how much did you write yourself?&rdquo;</li>
      </ol>

      <h2>Where to practise</h2>
      <p>
        The full bank is on the{" "}
        <Link href="/question-bank/">question bank page</Link>, filterable by
        category and project type, with a tick-off list that saves your progress
        in your own browser. For how the whole viva is structured, read{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          the viva questions guide
        </Link>{" "}
        and then{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          how to explain your project
        </Link>
        .
      </p>

      <hr />

      <p>
        If your worry is that the project is not yours enough to answer these,
        that is a real problem and a fixable one. Every project on DefendIt
        comes with sessions that go through the code line by line and a mock
        viva at the end. See the{" "}
        <Link href="/custom/">custom build option</Link> if you want to talk
        through it.
      </p>
    </>
  );
}

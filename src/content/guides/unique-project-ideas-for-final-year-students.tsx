import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { CAMPUS_PROJECTS } from "@/lib/campus";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import BuiltProjectList from "@/components/campus/BuiltProjectList";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "unique-project-ideas-for-final-year-students",
  title: "Unique Project Ideas for Final Year Students",
  h1: "Unique project ideas for final year students (that are not another library system)",
  description:
    
    "Unique project ideas for final year students in BCA, MCA and B.Tech: what makes a project unique to a panel, and eighteen ideas rarely duplicated.",
  tldr: "A final year project is unique to a panel not because of its title but because of one mechanism they have not seen handled properly: a cart that cannot oversell, a chatbot that cites its source, a classifier that admits when it is unsure. Pick a topic that is rarely duplicated in your batch, then build the one piece of logic that makes it yours. Eighteen such ideas are below, with the built projects that already carry a distinctive mechanism.",
  category: "Project ideas",
  publishedAt: "2026-10-30",
  readingMinutes: 10,
  faq: [
    {
      question: "What makes a final year project unique?",
      answer:
        "Not the title. Panels have seen every title. A project reads as unique when it handles one problem the examiner has watched a hundred students skip: concurrency, a failure case, an explainable output, offline behaviour. A hospital system with real slot-conflict detection is more unique to a panel than a blockchain project that cannot explain why it needs a blockchain.",
    },
    {
      question: "Is a unique project idea riskier than a common one?",
      answer:
        "Sometimes. An unusual topic with no public reference material can stall, and a guide who has not seen it before may be slower to approve it. The safer route is a familiar domain with an unusual mechanism — you keep the finishability and gain the differentiation.",
    },
    {
      question: "Can I get one of these unique project ideas built?",
      answer:
        "Yes. Any idea on this page, or your own, can be built to your problem statement with the source code, report, diagrams and deployment, then explained in live sessions until you can defend it. The built list at the bottom is the set that already exists.",
    },
  ],
};

const SOCIAL_IDEAS: Topic[] = [
  {
    title: "Blood bank with donor eligibility and compatibility matching",
    stack: "MERN or Django",
    difficulty: "Moderate",
    why: "The compatibility table and expiry-first issuing are logic almost nobody implements.",
    question: "Which groups can an A positive patient receive?",
  },
  {
    title: "Lost-and-found for a campus with image similarity",
    stack: "Python, CLIP or a CNN embedding, Flask, React",
    difficulty: "Hard",
    why: "Matching a photo of a found item to reports is a real retrieval problem, and nobody in the batch will have it.",
    question: "How do you rank matches, and what is a false positive here?",
  },
  {
    title: "Mess or canteen food-waste tracker with demand prediction",
    stack: "Python, pandas, Flask, Chart.js",
    difficulty: "Moderate",
    why: "Real campus data, a real cost, and a forecast you can evaluate against the next week.",
    question: "How far off was last week's prediction, and why?",
  },
  {
    title: "Accessibility reader — on-device OCR to speech",
    stack: "React Native, ML Kit",
    difficulty: "Moderate",
    why: "Socially useful and rarely duplicated; the on-device decision is a design discussion.",
    question: "Why on-device rather than an API call?",
  },
  {
    title: "Scholarship and scheme eligibility finder",
    stack: "MERN, a rules engine",
    difficulty: "Easy",
    why: "A rules engine over real government scheme criteria is small, finishable and genuinely useful.",
    question: "How do you keep the rules current without redeploying?",
  },
  {
    title: "Hostel room allocation with constraint solving",
    stack: "Python, OR-Tools, Django",
    difficulty: "Hard",
    why: "Preferences, capacity and fairness constraints make it an optimisation problem, not CRUD.",
    question: "What makes your allocation optimal rather than merely valid?",
  },
];

const TECH_IDEAS: Topic[] = [
  {
    title: "Chatbot that answers only from your college's documents, with citations",
    stack: "Python, FastAPI, LangChain, a vector store, React",
    difficulty: "Hard",
    why: "Retrieval plus citation is the mechanism that separates it from an LLM wrapper.",
    question: "How do you know the answer came from the documents?",
  },
  {
    title: "Recommender with an explicit cold-start strategy",
    stack: "Python, scikit-learn, Flask",
    difficulty: "Hard",
    why: "Every recommender project gets the new-user question; almost none has an answer.",
    question: "What do you recommend to a user with no history?",
  },
  {
    title: "Offline-first mobile app with conflict resolution",
    stack: "React Native, SQLite, a sync API",
    difficulty: "Moderate",
    why: "Works when the campus wifi dies during the demo, and two devices editing offline is a real problem.",
    question: "Two devices edit the same record offline. Who wins?",
  },
  {
    title: "Plagiarism checker for code submissions",
    stack: "Python, AST parsing, winnowing fingerprints",
    difficulty: "Hard",
    why: "Token-level fingerprinting over source code is a real algorithm with real literature.",
    question: "How does it handle a renamed variable, and how does it handle a rewritten loop?",
  },
  {
    title: "Container-based auto-grader for programming assignments",
    stack: "Python, Docker API",
    difficulty: "Hard",
    why: "Running untrusted code safely is a security problem panels respect.",
    question: "How do you stop a submission from escaping the container?",
  },
  {
    title: "Real-time chat with delivery and read receipts",
    stack: "MERN, Socket.IO",
    difficulty: "Moderate",
    why: "Ordering and delivery state are the questions a chat project attracts; most skip both.",
    question: "What happens to a message sent to someone who just went offline?",
  },
];

const DATA_IDEAS: Topic[] = [
  {
    title: "Fake news classifier that shows the words behind each prediction",
    stack: "Python, scikit-learn, NLTK, Flask",
    difficulty: "Moderate",
    why: "Explaining the prediction is the mechanism; the accuracy number is not.",
    question: "Which words is the model keying on?",
  },
  {
    title: "Leaf disease detection that reports low confidence on bad photos",
    stack: "Python, TensorFlow/Keras",
    difficulty: "Hard",
    why: "Refusing to be confident on a blurry or unknown leaf is the part everyone skips.",
    question: "What does it do with a photo that is not a leaf?",
  },
  {
    title: "Attendance that rejects unknown faces instead of guessing",
    stack: "Python, OpenCV, dlib, Flask",
    difficulty: "Moderate",
    why: "The rejection threshold is the design decision, and it is rarely defended.",
    question: "What is your distance threshold, and how did you choose it?",
  },
  {
    title: "Resume ranking with a skill-by-skill score breakdown",
    stack: "Python, spaCy, scikit-learn, Flask",
    difficulty: "Moderate",
    why: "An explainable score is defensible; a single number is not.",
    question: "Why did this resume score higher than that one?",
  },
  {
    title: "Electricity or water usage anomaly detector for a hostel",
    stack: "Python, scikit-learn, a sensor or a simulated feed",
    difficulty: "Hard",
    why: "Real-world, imbalanced data where accuracy is the wrong metric.",
    question: "Your data is almost all normal. Why is your model not just predicting normal?",
  },
  {
    title: "Exam timetable generator with clash detection",
    stack: "Python, OR-Tools or a greedy solver, Django",
    difficulty: "Moderate",
    why: "Every student has suffered a clash; solving it is concrete and testable.",
    question: "Show me a case your solver cannot satisfy, and what it does.",
  },
];

export function Body() {
  return (
    <>
      <p>
        Every list of unique project ideas for final year students has the same
        problem: the ideas are unique for about one admission cycle, and then
        the whole batch has them. So this page starts with what &ldquo;unique&rdquo;
        actually means to the people marking you, and then lists ideas chosen for
        a mechanism that is rarely built properly &mdash; because that is the part
        that stays unique even when the title does not.
      </p>

      <h2>What unique means to a panel</h2>
      <p>
        An examiner sees forty projects a season. They are not surprised by titles.
        What they notice is a student who handled the one thing the previous
        thirty-nine skipped: two users hitting the system at once, an input the
        model was not trained on, a message to someone offline, a photo taken in
        bad light. A hospital system with a unique index that makes the database
        itself refuse a double booking is more unique to that panel than a
        blockchain project that cannot say why it needs a blockchain.
      </p>
      <p>
        So the recipe is: a domain you can finish, plus one piece of logic you can
        draw on a whiteboard and defend. The ideas below are grouped three ways,
        and each one names the question it will attract &mdash; because that
        question is where the uniqueness lives.
      </p>

      <h2>Socially useful ideas rarely seen in a batch</h2>
      <TopicTable topics={SOCIAL_IDEAS} />

      <h2>Technically distinctive ideas</h2>
      <TopicTable topics={TECH_IDEAS} />

      <h2>Data and AI ideas with a defensible twist</h2>
      <TopicTable topics={DATA_IDEAS} />

      <h2>How to keep a common topic unique</h2>
      <ol>
        <li>
          <strong>Pick the mechanism before the title.</strong> Decide what the
          hard question will be, then build the project around answering it.
        </li>
        <li>
          <strong>Check the batch.</strong> Ask what the rest of your class
          submitted last year. Duplication inside one cohort is the fastest way
          to a hostile panel.
        </li>
        <li>
          <strong>Show it failing on purpose.</strong> A demonstrated failure case
          handled gracefully is the single most memorable thing you can do in a
          viva, because almost nobody does it.
        </li>
        <li>
          <strong>Write the twist into chapter one.</strong> The scope and
          objectives should name the mechanism, so the report and the viva tell
          the same story.
        </li>
      </ol>

      <h2>Built projects whose distinctive mechanism is already in place</h2>
      <p>
        Each of the eleven projects below was built around one of the mechanisms
        above &mdash; the tagline under each is the twist. All come with source
        code, the report, diagrams, deployment and live sessions walking through
        the code until you can defend it.
      </p>
      <BuiltProjectList projects={CAMPUS_PROJECTS} />

      <ServiceBrief context="unique project ideas for final year students" />

      <hr />

      <p>
        For lists by degree, see{" "}
        <Link href="/guides/bca-final-year-project-topics/">
          BCA final year project topics
        </Link>
        ,{" "}
        <Link href="/guides/mca-final-year-project-topics/">
          MCA final year project topics
        </Link>{" "}
        and{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">
          B.Tech CSE final year projects
        </Link>
        . Not sure how to choose between them? Read{" "}
        <Link href="/guides/how-to-choose-a-final-year-project/">
          how to choose a final year project
        </Link>
        , or take the four-question{" "}
        <Link href="/find-my-project/">project matcher</Link>.
      </p>
    </>
  );
}

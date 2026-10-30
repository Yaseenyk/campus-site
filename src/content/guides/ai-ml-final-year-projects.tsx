import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import TopicTable, { type Topic } from "@/components/campus/TopicTable";
import ServiceBrief from "@/components/campus/ServiceBrief";

export const meta: GuideMeta = {
  slug: "ai-ml-final-year-projects",
  title: "AI Projects for Final Year Students (2026)",
  h1: "AI projects for final year students that survive the viva",
  description:
    "AI projects for final year students in 2026: the sub-areas that work, twelve AI and machine learning project ideas with stack and honest difficulty, the one viva question each attracts, and the six AI projects already built with source code.",
  tldr: "The strongest AI projects for final year students are ones you can fully defend — a classifier, recommender, NLP, RAG or computer-vision system on a clean dataset where you understand the data, the metric, and what the model gets wrong. Six such projects are built and listed below; full source code, the report, and the training notebook come with each.",
  category: "Project ideas",
  publishedAt: "2026-07-27",
  updatedAt: "2026-10-30",
  readingMinutes: 12,
  ogImage: "/og/campus/cat-ai-ml.jpg",
  faq: [
    {
      question: "Are AI and machine learning projects good for final year?",
      answer:
        "They impress a panel more than a plain CRUD app, but only if you can explain your dataset, your metric, and what your model gets wrong. An ML project you cannot defend scores worse than a simple web app you can. Pick one where you understand every number.",
    },
    {
      question: "Do AI projects for final year students come with source code?",
      answer:
        "The ones we build do — full source on every tier, plus the report, the diagrams, and the training notebook. Source code being included is the baseline, not an upsell. The thing students actually run out of time for is the viva prep, which is why we do that live.",
    },
    {
      question: "Which AI project is easiest to defend in a viva?",
      answer:
        "One with a clear, honest metric and a visible failure mode. A classifier that shows its confidence and admits when it is unsure is far easier to defend than one that silently guesses, because the panel's first question is always how you know it is not guessing.",
    },
    {
      question: "Which degrees are AI final year projects suitable for?",
      answer:
        "MCA, B.Tech CSE/IT and M.Tech most naturally, where panels expect to probe the evaluation. For BCA, the resume screening and face recognition attendance projects are the defensible choices because their outputs can be explained feature by feature.",
    },
  ],
};

const AI_IDEAS: Topic[] = [
  {
    title: "Document question-answering with retrieval-augmented generation",
    stack: "Python, FastAPI, LangChain, a vector store, React",
    difficulty: "Hard",
    why: "Answers only from retrieved passages and cites them, which is the whole defence against the hallucination question.",
    question: "How do you know the answer came from the documents and not the model?",
  },
  {
    title: "Fake news or spam classifier that explains its prediction",
    stack: "Python, scikit-learn, NLTK, Flask",
    difficulty: "Moderate",
    why: "TF-IDF plus a linear model is enough; the marks are in the confusion matrix and the top-weighted words.",
    question: "Which words is your model actually keying on?",
  },
  {
    title: "Resume screening and ranking against a job description",
    stack: "Python, spaCy, scikit-learn, Flask",
    difficulty: "Moderate",
    why: "An explainable score — skills matched, skills missing — turns an opaque model into a defensible one.",
    question: "Why did this resume score higher than that one?",
  },
  {
    title: "Hybrid recommender with a cold-start answer",
    stack: "Python, pandas, scikit-learn, Flask",
    difficulty: "Hard",
    why: "Collaborative plus content-based filtering, and a real answer for a user with no history.",
    question: "What do you recommend to a brand-new user?",
  },
  {
    title: "Leaf disease detection on real phone photos",
    stack: "Python, TensorFlow/Keras, transfer learning",
    difficulty: "Hard",
    why: "Transfer learning makes it trainable in days; the marks are in low confidence on blurry or unseen leaves.",
    question: "What does it do with a photo of something that is not a leaf?",
  },
  {
    title: "Face recognition attendance with unknown-face rejection",
    stack: "Python, OpenCV, dlib, Flask, SQLite",
    difficulty: "Moderate",
    why: "Rejecting an unknown face instead of matching the nearest is what separates it from the demo version.",
    question: "What is your distance threshold, and how did you choose it?",
  },
  {
    title: "Sentiment analysis dashboard for product reviews",
    stack: "Python, transformers or scikit-learn, Streamlit",
    difficulty: "Moderate",
    why: "Approachable data, and the dashboard gives you results to discuss rather than one accuracy number.",
    question: "How does it handle sarcasm, and how often does it get it wrong?",
  },
  {
    title: "Medical symptom triage with confidence bounds",
    stack: "Python, scikit-learn, Flask, MySQL",
    difficulty: "Hard",
    why: "A model that refuses to predict when unsure is the project; panels respond to the honesty.",
    question: "What happens when the model is 51% confident?",
  },
  {
    title: "Sales or demand forecasting for a small business",
    stack: "Python, pandas, Prophet or ARIMA, Streamlit",
    difficulty: "Moderate",
    why: "Time series is far less duplicated than classification and has its own evaluation traps worth knowing.",
    question: "Why can you not shuffle time series data before splitting?",
  },
  {
    title: "Automatic number plate recognition",
    stack: "Python, OpenCV, Tesseract or a detection model",
    difficulty: "Hard",
    why: "Real image conditions — angle, dirt, low light — make this much harder than it demos.",
    question: "Show me it failing on a dirty or angled plate.",
  },
  {
    title: "Anomaly detection on transaction data",
    stack: "Python, scikit-learn, isolation forest or autoencoder",
    difficulty: "Hard",
    why: "Extreme class imbalance forces you to abandon accuracy and talk about precision and recall.",
    question: "Your data is 99.8% normal. Why is your model not just predicting normal?",
  },
  {
    title: "Sign language or gesture recognition",
    stack: "Python, MediaPipe, TensorFlow",
    difficulty: "Hard",
    why: "Useful, visually striking, rarely duplicated, and the landmark pipeline is a good design discussion.",
    question: "How much of your accuracy is the model and how much is the landmark extraction?",
  },
];

export function Body() {
  return (
    <>
      <p>
        A machine learning project impresses a panel before you say a word. It
        signals that you did something harder than a CRUD form, and examiners
        reward that. But it is also where more final year projects quietly
        collapse than anywhere else, and they collapse on one question:{" "}
        <strong>
          what does your model get wrong, and how do you know it is not just
          guessing?
        </strong>
      </p>
      <p>
        Most students train a model, screenshot a high accuracy number, and stop.
        Then the panel asks about the class distribution, or what happens on an
        input the model has never seen, and there is nothing to say. The accuracy
        was on a test set that looked exactly like the training set, and the whole
        thing folds. An AI project you cannot defend scores worse than a plain web
        app you can &mdash; so the entire game is picking an area where you
        understand the failure mode, not just the demo.
      </p>
      <p>
        Below are the sub-areas that work as AI projects for final year students,
        the one viva question each reliably attracts, a list of twelve project
        ideas with honest difficulty, and then the six AI projects we have actually
        built with source code and line-by-line viva sessions.
      </p>

      <h2>Natural language processing (NLP)</h2>
      <p>
        Text classification &mdash; spam, sentiment, fake news, topic tagging.
        Approachable because the data is everywhere and the pipeline is
        well-trodden: clean the text, vectorise it, train a classifier. The trap
        is that a bag-of-words model can score well on a leaky dataset and mean
        nothing.
      </p>
      <p>
        <strong>The viva question:</strong> &ldquo;Which words is your model
        actually keying on?&rdquo; If you cannot show the features driving a
        prediction, the panel assumes it learned the dataset, not the language.
      </p>

      <h2>Computer vision (CV)</h2>
      <p>
        Image classification and detection &mdash; leaf disease, defects, medical
        scans, face recognition. The most visually impressive category, which is
        exactly why panels probe it hardest. A CNN that hits 98% on a clean
        Kaggle set often falls apart on a photo you take yourself.
      </p>
      <p>
        <strong>The viva question:</strong> &ldquo;What does it do with a blurry,
        badly-lit, or completely unrelated image?&rdquo; The marks are in
        rejecting or flagging the input you were not trained on, not in the clean
        demo.
      </p>

      <h2>Recommender systems</h2>
      <p>
        Suggesting products, movies, courses, or content from user behaviour.
        Attractive because it feels like a real product, and there is genuine
        logic to explain &mdash; collaborative filtering, content-based, or a
        hybrid. The trap is the cold-start problem.
      </p>
      <p>
        <strong>The viva question:</strong> &ldquo;What do you recommend to a
        brand-new user with no history?&rdquo; A recommender with no answer for
        the new user is a recommender that only works in the demo.
      </p>

      <h2>RAG and LLM applications</h2>
      <p>
        Retrieval-augmented generation &mdash; a chatbot that answers from a
        specific set of documents instead of making things up. The current
        favourite, and a strong one, because it is genuinely modern and useful.
        The trap is treating the LLM as magic and having no story for grounding.
      </p>
      <p>
        <strong>The viva question:</strong> &ldquo;How do you stop it inventing an
        answer that is not in your documents?&rdquo; If you cannot point to
        retrieval and citations, the panel correctly calls it a wrapper around
        someone else&rsquo;s API.
      </p>

      <h2>Twelve AI project ideas for final year students</h2>
      <p>
        Ideas, with the stack each needs and an honest difficulty. The first six
        are built and available below; the rest can be{" "}
        <Link href="/custom/">built to your problem statement</Link>.
      </p>
      <TopicTable topics={AI_IDEAS} />

      <h2>The AI projects we actually build, with source code</h2>
      <p>
        Every project below ships with full source code on every tier, the report
        and diagrams written to match the code, and live sessions that walk you
        through it line by line so the viva questions above have real answers.
        Seats are capped per college, so no two students at the same institution
        get handed the same defence.
      </p>
      <ul>
        <li>
          <Link href="/ai-college-assistant/">
            AI College Assistant (agentic RAG)
          </Link>{" "}
          &mdash; answers from your college&rsquo;s own PDFs and cites the page it
          answered from, so &ldquo;how do you know it is not hallucinating&rdquo;
          has a one-click answer. Advanced; MCA, B.Tech, M.Tech.
        </li>
        <li>
          <Link href="/recommendation-system-ml/">
            Recommendation System (hybrid ML)
          </Link>{" "}
          &mdash; combines collaborative and content-based filtering and has a
          real answer for the new-user cold-start, which is the question this
          topic always attracts. Advanced; MCA, B.Tech, M.Tech.
        </li>
        <li>
          <Link href="/fake-news-detection-ml/">
            Fake News Detection (NLP)
          </Link>{" "}
          &mdash; returns a confidence score and the words that drove the
          decision, so you can show the panel what the model is keying on instead
          of hand-waving. Advanced; MCA, B.Tech, M.Tech.
        </li>
        <li>
          <Link href="/plant-disease-detection/">
            Plant Disease Detection (CV)
          </Link>{" "}
          &mdash; a CNN tested on real phone photos, not just a clean dataset, so
          the &ldquo;what about a bad image&rdquo; question is already handled.
          Advanced; B.Tech, M.Tech, MCA.
        </li>
        <li>
          <Link href="/resume-screening-ml/">
            Resume Screening &amp; Job Match
          </Link>{" "}
          &mdash; ranks resumes against a job description and shows why each one
          scored what it did, which turns an opaque model into an explainable one.
          Intermediate; MCA, B.Tech, BCA, M.Tech.
        </li>
        <li>
          <Link href="/face-recognition-attendance/">
            Face Recognition Attendance (CV)
          </Link>{" "}
          &mdash; the marks are in rejecting an unknown face rather than guessing
          the nearest match, and that rejection path is built and explained.
          Intermediate; BCA, B.Tech, MCA, Diploma.
        </li>
      </ul>

      <ServiceBrief context="AI projects for final year students" />

      <hr />

      <p>
        If none of these fit your college&rsquo;s brief, we{" "}
        <Link href="/custom/">build to a custom spec</Link>{" "}
        with the same source, documentation, and viva sessions. Not sure ML is the
        right call for your degree? Read{" "}
        <Link href="/guides/how-to-choose-a-final-year-project/">
          how to choose a final year project
        </Link>{" "}
        first, then browse by degree:{" "}
        <Link href="/guides/bca-final-year-project-topics/">BCA</Link>,{" "}
        <Link href="/guides/mca-final-year-project-topics/">MCA</Link>,{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">B.Tech CSE</Link>, or{" "}
        <Link href="/for/mtech/">M.Tech</Link>. Or see the{" "}
        <Link href="/">full catalog</Link>.
      </p>
    </>
  );
}

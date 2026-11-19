import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "data-science-project-ideas-for-final-year",
  title: "Data Science Project Ideas for Final Year Students",
  h1: "Data science project ideas for final year: start with a question, not a model",
  description:
    "Data science final year project ideas built around a real question and real Indian data sources, with the method, the hard part and the viva question for each, plus how to turn a notebook into a defensible project.",
  tldr: "A data science project is a question answered with data, so start with a question someone would act on, then find a dataset that can answer it, then choose the simplest method that does. Use real sources such as India's Open Government Data platform (data.gov.in), the RBI's DBIE database, Kaggle or the UCI repository, and say how you cleaned the data. Beat a naive baseline, report one metric you can explain, and present the result in a small dashboard plus a report, not just a notebook. Ideas, a project structure and viva questions are below. Check your college's brief on what counts as a final year project.",
  category: "Project ideas",
  publishedAt: "2026-12-18",
  readingMinutes: 9,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "What is the difference between a data science project and a machine learning project?",
      answer:
        "A machine learning project centres on building and evaluating a model. A data science project centres on a question and the evidence for its answer, which may involve a model or may be careful analysis, statistics and visualisation. Many good data science projects use only simple models; the depth is in the data work and the reasoning.",
    },
    {
      question: "Where can I find Indian datasets for a data science project?",
      answer:
        "India's Open Government Data platform at data.gov.in publishes datasets from ministries and departments; the Reserve Bank of India's DBIE portal has economic and banking series; Kaggle and the UCI Machine Learning Repository have many cleaned datasets. Check each dataset's licence and how recently it was updated, and cite it in your report.",
    },
    {
      question: "Is a Jupyter notebook enough for a final year data science project?",
      answer:
        "Usually not on its own. Panels expect a project: a repeatable pipeline from raw data to result, a way for someone else to use or see the result such as a Streamlit dashboard, and a report. Keep the notebook for exploration and move the final steps into scripts or functions you can run in one go.",
    },
    {
      question: "Do I need deep learning for a data science project?",
      answer:
        "No. For tabular data, linear and logistic regression, decision trees and gradient-boosted trees are often as good or better, and far easier to explain. Use deep learning only when the data is images, audio or long text and you can show why a simpler method falls short.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Data science project lists tend to be lists of datasets: Titanic, house
        prices, iris. Examiners have seen them all, and the projects built on them
        rarely answer anything. A strong data science project starts the other way
        round, with a question someone would act on. This guide gives you ideas
        framed as questions, real places to get data, and the structure that turns
        a notebook into something you can defend. It sits next to the{" "}
        <Link href="/guides/ai-ml-final-year-projects/">AI projects guide</Link>,
        which focuses on building models; this one focuses on questions, data and
        evidence. Check your college&apos;s brief first.
      </p>

      <h2>Question, data, method: in that order</h2>
      <ol>
        <li>
          <strong>The question.</strong> Specific, answerable, and useful to a named
          person. &ldquo;Which weeks will the college canteen run short of
          staff?&rdquo; beats &ldquo;analysis of food sales&rdquo;.
        </li>
        <li>
          <strong>The data.</strong> Can a dataset you can actually get answer it?
          If not, change the question, not the facts.
        </li>
        <li>
          <strong>The method.</strong> The simplest one that answers the question
          better than a naive guess. Complexity has to earn its place.
        </li>
      </ol>

      <h2>Where to get real data</h2>
      <GuideTable
        head={["Source", "What is there", "Watch out for"]}
        rows={[
          ["data.gov.in (Open Government Data platform, India)", "Datasets from central ministries and departments: agriculture, health, transport, education and more", "Uneven formats and update dates; read the metadata and note the period covered"],
          ["RBI DBIE (Database on Indian Economy)", "Economic and banking time series from the Reserve Bank of India", "Units, base years and revisions; read the notes before comparing series"],
          ["Kaggle datasets", "Many cleaned datasets on almost any topic, with community notebooks", "Unknown origin for some; popular ones are overused; check the licence"],
          ["UCI Machine Learning Repository", "Long-standing benchmark datasets with documentation", "Some are old or small; fine for method, weak for a fresh question"],
          ["Data you collect yourself", "A survey, your college's anonymised records with permission, sensor logs", "Consent, anonymisation and sample size; get your guide's approval"],
        ]}
      />
      <p>
        Combining a public dataset with a little data of your own (a survey of
        your batch, prices you recorded over a month) is one of the easiest ways to
        make a project original.
      </p>

      <h2>Data science project ideas, framed as questions</h2>
      <GuideTable
        head={["Question", "Likely data", "Method", "The hard part", "Viva question"]}
        rows={[
          ["Which districts are most at risk of a crop yield drop next season?", "Crop production and rainfall data from government sources", "Regression or gradient-boosted trees with lagged rainfall features", "Joining datasets with different district names and years", "How did you match districts across datasets?"],
          ["When will the college library or canteen be busiest?", "Entry or sales logs (with permission), timetable, holidays", "Time-series forecasting against a same-week-last-year baseline", "Holidays and exam weeks breaking the pattern", "Does your model beat last year's numbers for the same week?"],
          ["Which students are likely to need academic support early?", "Anonymised attendance and internal marks, with permission", "Logistic regression or a decision tree, explained per student", "Fairness and privacy; small data", "Could your model unfairly label a group? How did you check?"],
          ["How have food prices in my city moved compared with inflation?", "Retail price series plus official inflation data", "Descriptive analysis, indexing, clear charts", "Units and base years; not overclaiming causes", "What can and can't your data tell us about why prices rose?"],
          ["Which complaints in public feedback are about the same issue?", "Text feedback or reviews from a public dataset", "TF-IDF or embeddings with clustering, then manual labelling of clusters", "Deciding how many clusters and naming them honestly", "How do you know your clusters mean something?"],
          ["Where should a city add electric vehicle chargers?", "Public charger locations, road and population data", "Spatial analysis and a simple scoring model", "Weighting the criteria; showing results on a map", "Why those weights, and what if they change?"],
          ["Do air quality spikes follow a pattern by hour and season?", "Public air quality monitoring data", "Time-series decomposition and anomaly detection", "Missing readings and sensor outages", "How did you handle gaps in the data?"],
        ]}
      />
      <p>
        If you want a project with a ready-made design, the{" "}
        <Link href="/recommendation-system-ml/">recommendation system</Link> and{" "}
        <Link href="/fake-news-detection-ml/">fake news detection</Link> listings on
        this site are data-heavy projects with their data, hard parts and viva
        questions laid out.
      </p>

      <h2>The notebook is not the project</h2>
      <p>
        Exploring in Jupyter is the right way to start. Submitting the notebook as
        the whole project is the common mistake: cells run out of order, results
        cannot be reproduced and nobody else can use the output. A structure that
        holds up:
      </p>
      <pre>
        <code>{`project/
  README.md            the question, the data sources, how to reproduce
  data/raw/            untouched downloads (or a script that downloads them)
  data/processed/      produced by the pipeline, never edited by hand
  notebooks/           exploration, clearly labelled as such
  src/clean.py         raw to processed, every cleaning step in code
  src/features.py      feature building
  src/model.py         baseline and model, training and evaluation
  app.py               a Streamlit dashboard showing the answer
  reports/             figures and the final report`}</code>
      </pre>
      <p>
        The test is simple: delete <code>data/processed</code>, run the pipeline,
        and get the same numbers. If you can do that, you can answer &ldquo;how did
        you get this result?&rdquo; with confidence.
      </p>

      <h2>Evaluation that a panel will accept</h2>
      <ul>
        <li><strong>A naive baseline first.</strong> For forecasting, &ldquo;same as last week&rdquo; or &ldquo;same as last year&rdquo;; for classification, &ldquo;always predict the most common class&rdquo;. Your model must beat it.</li>
        <li><strong>A fair split.</strong> For time series, train on the past and test on the future, never a random shuffle.</li>
        <li><strong>One metric you can explain</strong>, chosen for the question: mean absolute error in real units for a forecast, recall when missing a case is costly.</li>
        <li><strong>Error analysis.</strong> Look at the worst predictions and explain them. It is where the insight usually is.</li>
        <li><strong>Limits.</strong> What the data cannot tell you, especially about causes.</li>
      </ul>

      <h2>Scoping to your weeks</h2>
      <GuideTable
        head={["Phase", "Share of your time", "Output"]}
        rows={[
          ["Question and data hunt", "Early, and short", "A one-paragraph question and confirmed datasets"],
          ["Cleaning and joining", "Usually the largest share", "A clean.py that runs end to end"],
          ["Exploration and baseline", "Moderate", "Key charts and a baseline score"],
          ["Modelling and error analysis", "Moderate", "A model that beats the baseline, or a clear reason none does"],
          ["Dashboard, report and viva prep", "Protected at the end", "A Streamlit app, the report and a rehearsed demo"],
        ]}
      />
      <p>
        If the data hunt drags past the first couple of weeks, change the question.
        A modest question with good data beats an ambitious one with none. The{" "}
        <Link href="/guides/final-year-project-in-one-month/">one-month plan</Link>{" "}
        is useful if time is short.
      </p>

      <h2>Viva questions to rehearse</h2>
      <ol>
        <li>Who would use this answer, and what would they do differently?</li>
        <li>Where does your data come from, what period does it cover, and what is missing?</li>
        <li>Walk me through your cleaning steps. What did you drop and why?</li>
        <li>What was your baseline, and by how much did you beat it?</li>
        <li>Why this metric for this question?</li>
        <li>Is this correlation or causation? How do you know?</li>
        <li>If I gave you next year&apos;s data, would your result hold?</li>
      </ol>
      <p>
        More are in the{" "}
        <Link href="/guides/final-year-project-viva-questions/">viva questions guide</Link>.
        Python setup and repository habits are covered in the{" "}
        <Link href="/guides/python-project-ideas-with-source-code/">
          Python project ideas guide
        </Link>
        , and the{" "}
        <Link href="/guides/cyber-security-project-ideas-for-students/">
          cyber security ideas
        </Link>{" "}
        include two data-driven detection projects. For the write-up, see the{" "}
        <Link href="/guides/final-year-project-report-format/">report format guide</Link>.
      </p>

      <hr />

      <p>
        If you want help building a data science project, DefendIt runs project
        classes. Starter gives you a design document, a starter repository and a
        module-by-module build plan; Guided adds a review of every module and report
        chapter you write; Mentored adds live Google Meet classes where we build the
        project together, one module per class, with you writing part of every
        module, plus viva prep and a mock viva. Your own question can go through the{" "}
        <Link href="/custom/">custom project page</Link>. Check your college&apos;s
        rules on outside help before you decide.
      </p>
    </>
  );
}

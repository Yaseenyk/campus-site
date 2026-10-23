import type { CampusProject } from "@/lib/campus";

export const resumeScreeningMl: CampusProject = {
  slug: "resume-screening-ml",
  title: "AI Resume Screening & Job Match System",
  category: "NLP · Machine Learning",
  tagline: "Ranks resumes against a job description, and shows why each one scored what it did.",
  summary:
    "Upload a job description and a folder of resumes; the system parses each PDF, extracts skills and experience, scores the match, and ranks the candidates. The part that earns marks is explainability — every score breaks down into the skills matched, the skills missing, and the experience gap, so it is a model you can defend rather than a black box that prints a number.",
  degrees: ["MCA", "B.Tech", "BCA", "M.Tech"],
  domain: "AI / Machine Learning",
  stack: [
    "Python",
    "Flask",
    "scikit-learn",
    "spaCy",
    "TF-IDF",
    "PyPDF2",
    "MySQL",
    "Bootstrap",
  ],
  features: [
    "Bulk resume upload with PDF and DOCX parsing",
    "Skill and experience extraction using an NLP entity pipeline",
    "Match score against any pasted job description, with a ranked shortlist",
    "Per-candidate breakdown: skills matched, skills missing, experience gap",
    "Recruiter dashboard with saved job posts and past shortlists",
    "Candidate view showing what to add to score higher",
  ],
  modules: [
    "Text extraction from PDFs and why parsing is the hard half of this project",
    "The NLP pipeline — tokenising, entity extraction, and the skill dictionary",
    "Vectorising text: TF-IDF explained, and cosine similarity by hand",
    "Turning similarity into an explainable score with weighted components",
    "Flask app, database schema, and the recruiter dashboard",
    "Evaluating the model, discussing its bias and limits, and mock viva",
  ],
  deepDive: {
    "howItWorks": [
      "Uploaded resumes are parsed to plain text: PyPDF2 for PDF files and python-docx for Word files. The text is split into rough sections by detecting headings such as Skills, Experience and Education.",
      "spaCy's PhraseMatcher, loaded with a curated skills list, extracts skills; date ranges in the experience section are parsed to estimate years of experience. The job description goes through the same extraction, producing required skills and the experience asked for.",
      "Each resume gets a score that combines TF-IDF cosine similarity between the resume and the job description with the share of required skills found and an experience check. The recruiter sees a ranked shortlist, and each candidate's breakdown shows matched skills, missing skills and the experience gap."
    ],
    "data": "Resumes and job posts entered through the app, stored in MySQL with the extracted skills and scores. For testing, public resume datasets such as the Kaggle resume dataset of a few thousand resumes labelled by job category can be used. The skills list is a plain text file that can be extended without changing code.",
    "hardParts": [
      {
        "title": "Messy PDFs",
        "body": "Two-column layouts and tables come out of PDF text extraction in the wrong order. The project shows where parsing fails and keeps the skills extraction tolerant to word order."
      },
      {
        "title": "Synonyms and spellings",
        "body": "ReactJS, React.js and React are the same skill. The skills list maps variants to one canonical name before matching."
      },
      {
        "title": "Bias and explainability",
        "body": "Ranking people deserves care. The score uses only skills and experience, never name, gender or college, and every score is broken down so a recruiter can see why a candidate ranked where they did."
      }
    ],
    "viva": [
      {
        "question": "How is the match score calculated?",
        "answer": "A weighted mix of three parts: TF-IDF cosine similarity between resume and job description, the fraction of the job's required skills found in the resume, and whether the candidate's years of experience meet the requirement."
      },
      {
        "question": "What is cosine similarity?",
        "answer": "The cosine of the angle between two vectors. For TF-IDF vectors of two documents, it is close to 1 when they use similar distinctive words and close to 0 when they share almost nothing, regardless of document length."
      },
      {
        "question": "How does spaCy extract skills?",
        "answer": "A PhraseMatcher is built from the skills list and run over the tokenised resume, returning every span that matches a known skill. Variants are mapped to one canonical skill name."
      },
      {
        "question": "Why not use a deep learning model?",
        "answer": "The scores must be explainable to a recruiter and to the candidate. Skill matching and TF-IDF give a transparent breakdown, and a black-box model would make that much harder."
      },
      {
        "question": "How do you avoid unfair screening?",
        "answer": "The model never uses personal details such as name, gender, age or college. It scores only skills and experience, and the breakdown makes every ranking reviewable by a person."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 6,
  prices: { source: 4500, academic: 8000, mentored: 14000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};

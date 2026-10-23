import type { CampusProject } from "@/lib/campus";

export const fakeNewsDetectionMl: CampusProject = {
  slug: "fake-news-detection-ml",
  title: "Fake News Detection — an NLP classifier that shows its reasoning",
  category: "AI / Machine Learning · NLP",
  tagline:
    "Classifies an article as real or fake, with a confidence score and the words that drove it.",
  summary:
    "Most fake-news projects are a pasted Kaggle notebook that reports 99% accuracy and cannot explain a single prediction. This one builds the NLP pipeline properly — cleaning, tokenizing, TF-IDF, a trained classifier, with an optional transformer upgrade — reports real metrics with a confusion matrix, and surfaces the exact words that pushed a decision. It is built to answer the one question that ends most of these vivas honestly: what does your model get wrong, and why?",
  degrees: ["MCA", "B.Tech", "M.Tech"],
  domain: "AI / Machine Learning",
  stack: [
    "Python",
    "scikit-learn",
    "NLTK",
    "TF-IDF",
    "FastAPI",
    "React",
  ],
  features: [
    "Paste or upload an article and get real / fake with a confidence score",
    "Explainability — the top words that pushed the prediction each way",
    "A confusion matrix and honest precision / recall, not just accuracy",
    "Batch-classify a CSV of articles at once",
    "Admin option to retrain the model on new labelled data",
    "A FastAPI service behind a clean React front end",
  ],
  modules: [
    "The NLP pipeline: cleaning, tokenizing, and vectorizing text",
    "TF-IDF and a classifier baseline that actually generalises",
    "Evaluation: the confusion matrix and why accuracy lies on imbalance",
    "Explainability — reading feature weights back into words",
    "An optional transformer upgrade and when it is worth it",
    "Serving the model with FastAPI",
    "The React UI for single and batch classification",
    "Deployment and a full mock viva on the error analysis",
  ],
  deepDive: {
    "howItWorks": [
      "Text is cleaned (lower-cased, URLs and punctuation removed, stop words dropped with NLTK, words lemmatised) and turned into TF-IDF features over unigrams and bigrams, capped at the most informative few thousand terms.",
      "Logistic regression and a linear SVM (PassiveAggressive is compared too) are trained on those features with a stratified train and test split. Logistic regression is kept for the live service because its coefficients are directly interpretable and its probabilities double as the confidence score.",
      "For explanation, the service multiplies each word's TF-IDF value in the submitted article by its model coefficient and returns the words pushing hardest towards real and towards fake. The React front end highlights those words in the text, so the prediction comes with its reasons."
    ],
    "data": "Public labelled datasets such as the ISOT Fake News dataset from the University of Victoria (about 44,000 articles) or LIAR (about 12,800 short statements from PolitiFact, six truthfulness labels). The project discusses the known flaw in ISOT: real articles mostly come from one wire service, so a model can learn the source's writing style, for example the word Reuters, instead of truthfulness. Those giveaway tokens are removed before training.",
    "hardParts": [
      {
        "title": "Leakage through the source",
        "body": "With ISOT, a classifier can score near 99 per cent just by spotting the dateline of the real articles. Removing source markers and reporting the drop in accuracy is the most important result in the project."
      },
      {
        "title": "Accuracy is not enough",
        "body": "The report shows precision, recall and F1 per class and a confusion matrix, because the cost of calling a true story fake differs from the cost of missing a fake one."
      },
      {
        "title": "What the model cannot do",
        "body": "It learns writing patterns, not facts. It cannot check whether a claim is true, and the project states that limit plainly rather than calling it a lie detector."
      }
    ],
    "viva": [
      {
        "question": "What is TF-IDF?",
        "answer": "Term frequency multiplied by inverse document frequency. A word scores high when it is frequent in this article but rare across the whole corpus, so common words such as said get little weight and distinctive words get more."
      },
      {
        "question": "Why logistic regression and not a deep model?",
        "answer": "On TF-IDF features it performs close to heavier models, trains in seconds, and its coefficients show which words drive each prediction. Explainability was a requirement, so the simpler model wins."
      },
      {
        "question": "Your accuracy is 99 per cent. Is the model that good?",
        "answer": "No, and that is the point worth explaining. In ISOT the real articles share a source and style, so the model learns the source. After removing those markers the score drops, and the lower number is the honest one."
      },
      {
        "question": "What is the difference between precision and recall here?",
        "answer": "Precision for fake is how many articles flagged fake really were fake. Recall is how many of the fake articles were caught. Raising one usually lowers the other, and the threshold decides the trade."
      },
      {
        "question": "Can this detect a brand-new fake story?",
        "answer": "Only if it is written like the fake articles it trained on. It does not verify facts, so a fabricated story written in a neutral news style can pass. That limitation belongs in the report."
      }
    ]
  },
  difficulty: "Advanced",
  sessionCount: 8,
  prices: { source: 6000, academic: 11000, mentored: 18000 },
  seatsPerCollege: 1,
  publishedAt: "2026-07-27",
};

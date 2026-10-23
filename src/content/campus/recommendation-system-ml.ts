import type { CampusProject } from "@/lib/campus";

export const recommendationSystemMl: CampusProject = {
  slug: "recommendation-system-ml",
  title: "Recommendation System — hybrid collaborative + content filtering",
  category: "AI / Machine Learning · Python",
  tagline:
    "Recommends from real user behaviour, explains why, and handles the new-user problem.",
  summary:
    "Most recommender projects hardcode a similarity matrix, demo on the same three users, and freeze the moment an examiner logs in as someone new. This one builds collaborative filtering with matrix factorization, adds a content-based model for cold-start, blends the two, and shows why each item was recommended. It reports precision and recall honestly rather than claiming it is always right, and it answers the question that sinks most of these: what do you recommend to a user with no history?",
  degrees: ["MCA", "B.Tech", "M.Tech"],
  domain: "AI / Machine Learning",
  stack: [
    "Python",
    "pandas",
    "scikit-learn",
    "Surprise",
    "FastAPI",
    "React",
    "PostgreSQL",
  ],
  features: [
    "Personalised recommendations from a user's ratings and behaviour",
    "Content-based fallback so a brand-new user still gets sensible picks",
    "A plain-English 'why this was recommended' next to each item",
    "Honest evaluation — precision@k and recall, not a vanity accuracy",
    "Admin view of the catalogue and the interaction data",
    "A FastAPI service the React front end calls for live recommendations",
  ],
  modules: [
    "Collaborative vs content-based vs hybrid — and when each fails",
    "Preparing the data and building the user-item ratings matrix",
    "Matrix factorization (SVD) — the intuition without the heavy math",
    "Content features and similarity for the cold-start path",
    "Blending the two models and handling a brand-new user",
    "Evaluating honestly: precision@k, recall, and why accuracy lies here",
    "Serving with FastAPI and rendering recommendations in React",
    "Deployment and a full mock viva on the cold-start design",
  ],
  deepDive: {
    "howItWorks": [
      "The system learns from a ratings matrix of users against items. The collaborative part trains a matrix factorisation model (SVD from the Surprise library) that represents each user and item as a short vector, so a predicted rating is the dot product of the two plus bias terms.",
      "The content part builds a TF-IDF vector for every item from its genres, tags and description and computes cosine similarity between items. For a user with no ratings it recommends items similar to what they picked during onboarding; once they have enough ratings, the two scores are blended with a weight that shifts towards the collaborative model.",
      "A FastAPI service loads both trained models at startup and returns the top ten items for a user, excluding ones they already rated, along with the reason each was chosen: the similar item that triggered it, or the fact that users with similar taste rated it highly."
    ],
    "data": "The MovieLens 100K or MovieLens latest-small dataset from GroupLens, both free for research and education with attribution: about 100,000 ratings on a 1 to 5 scale, plus movie titles and genres. Ratings are split by time per user, the last few ratings held out as the test set, so the model is judged on predicting the future rather than on shuffled rows.",
    "hardParts": [
      {
        "title": "Cold start",
        "body": "A new user has no ratings for matrix factorisation to use. The content-based model covers them from day one, which is the reason the system is hybrid rather than purely collaborative."
      },
      {
        "title": "Evaluating it honestly",
        "body": "Accuracy is meaningless for a ranked list. The project reports RMSE for rating prediction and precision@10 and recall@10 on held-out data, compared against a baseline that recommends the most popular items."
      },
      {
        "title": "Popularity bias",
        "body": "Popular items dominate any model trained on ratings. Excluding already-seen items and showing catalogue coverage alongside precision makes the bias visible instead of hidden."
      }
    ],
    "viva": [
      {
        "question": "What is the difference between collaborative and content-based filtering?",
        "answer": "Collaborative filtering uses other users' behaviour: people who rated like you also liked this. Content-based filtering uses the item's own attributes: this film shares genres and tags with films you liked. One needs ratings, the other needs item metadata."
      },
      {
        "question": "How does SVD work for recommendations?",
        "answer": "It factorises the sparse user-item rating matrix into user vectors and item vectors of a small dimension, learned by minimising the error on known ratings. A missing rating is predicted from the dot product of the user and item vectors plus biases."
      },
      {
        "question": "What is precision@k?",
        "answer": "Of the top k items recommended, the fraction the user actually rated highly in the held-out set. It measures whether the list is useful, which RMSE on individual ratings does not."
      },
      {
        "question": "Why split the test set by time?",
        "answer": "A random split lets the model learn from ratings made after the ones it is tested on, which leaks the future and inflates the score. Holding out each user's latest ratings mimics real use."
      },
      {
        "question": "How is the cold-start problem handled?",
        "answer": "New users get content-based recommendations from the items they choose at sign-up. As they rate more, the blend weight moves towards the collaborative score."
      }
    ]
  },
  difficulty: "Advanced",
  sessionCount: 8,
  prices: { source: 6000, academic: 11000, mentored: 18000 },
  seatsPerCollege: 1,
  publishedAt: "2026-07-27",
};

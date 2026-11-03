# DefendIt SEO content plan: five story guides, 4 November 2026

Part of a five-site experiment: every post is a first-person story that still targets one keyword. We check
Search Console and GA4 later to see whether the format ranks. India (location 2356), English.

## 1. Research and spend

Tool: treg CLI. Ledger (failed calls are free, none failed for money):

| Call | Count | Cost |
|---|---|---|
| dataforseo.google.keywords.ideas | 14 seeds | $0.1998 |
| treg.google.serp.organic | 8 | $0.0012 |
| dataforseo.google.domain.ranked_keywords | 2 (filemakr.com, collegeproject.in) | $0.0288 |
| **Total** | | **about $0.23 of the $0.40 cap** |

Seeds searched: final year project viva questions, hospital management system project, final year project report,
mca final year project, btech cse final year project ideas, final year project synopsis, viva questions, bca project,
project report, final year project ideas, face recognition attendance system, plant disease detection, ecommerce
website project, project viva questions. Long seeds ("final year project viva questions", "btech cse final year
project ideas") returned almost nothing; short head terms returned the useful lists.

## 2. Keyword table (India, monthly volume, KD from DataForSEO)

| Keyword | Vol | KD | Intent | Who ranks (SERP, India) | Covered by us before? |
|---|---|---|---|---|---|
| project report | 8,100 | 0 | info | generic and bank-loan reports | no (too broad, wrong intent) |
| project report format | 5,400 | 0 | info | business/bank-loan templates | report-format guide exists |
| face recognition attendance system | 4,400 | 0 | info | tutorials, GitHub | no |
| viva questions | 3,600 | 0 | info | school practical viva (chemistry, physics) | partly |
| final year project ideas for computer science | 2,400 | 0 | info | listicles | CS list guide |
| hospital management system project | 1,300 | 0 | commercial | itmedical, GitHub (DBMS repo), phpgurukul, Google Play, cmarix, IJRPR PDF | no guide |
| plant disease detection | 1,300 | 6 | info | apps, papers | no |
| viva questions and answers | 720 | 0 | info | scribd, school viva | no |
| face recognition attendance system project | 260 | 0 | info | sirtbhopal.ac.in blog, an essl product page (thin SERP) | no |
| hospital management system project pdf | 260 | 0 | info | PDFs, repos | sample report page partly |
| plant disease detection using machine learning | 210 | 0 | info | IEEE, ScienceDirect, MDPI, ANITS PDF, matlabprojects.org | no |
| final year project report | 210 | 0 | info | GitHub topic, nevonprojects, takeoffprojects, jpinfotech, projectmart | report-format guide partly |
| face recognition attendance system using python | 170 | 0 | info | tutorials | no |
| project viva questions | 140 | 0 | info | scribd, programmer2programmer, studocu, thesisroom, ignouprojects, filemakr (Medium) | final-year-project-viva-questions guide is adjacent |
| hospital management system project with source code | 140 | 3 | info | GitHub, phpgurukul | no |
| ecommerce website project | 140 | 12 | info | agency sites | not chosen |
| plant disease detection project | 110 | n/a | info | papers | no |
| final year project report sample | 50 | n/a | info | scribd, GitHub lists | sample report page (PDF intent) |
| final year project documentation pdf | 40 | n/a | info | scribd | no |

Observations: the niche is KD 0 almost everywhere. The head terms with real volume (project report, viva
questions) are polluted by non-CS intent (bank-loan reports, school chemistry viva), so we target the CS-specific
long forms. SERPs for our five targets are scribd, GitHub, journals, college blogs and agency pages, not strong
dedicated guides.

## 3. Competitor analysis

- **filemakr.com** (ranked_keywords, 100 keywords): one page per project title and per language/topic. Wins
  "library management system" family (1,900 each, KD 0, positions 15 to 22), "java projects" (3,600, position 70
  to 71, so it is indexed but weak), and its own "bca final year project" report page at position 16 to 18 for 880.
  Gap: it ranks 15 to 22, not top 5; pages are listicles and templates, never a first-person account of building
  one thing. Its Medium post is the only story-ish viva result.
- **nevonprojects / takeoffprojects** (from the 30 Oct research doc): thousands of per-title pages and one
  listicle per degree, "ai projects" at position 17, "project ideas" at 4. Gap: no depth on why a design choice was
  made, and no viva answers per project.
- **collegeproject.in**: zero ranked keywords in India. It appears in AI answers (see ai-visibility 4 Nov) but
  not in Google, so an AI citation is not the same as rankings.
- **The SERPs themselves**: for "project viva questions" the top results are scribd and studocu documents and a
  .net tutorial site, i.e. thin lists. For "hospital management system project" the top results are products,
  GitHub and journal PDFs, none a build narrative for a student. For "plant disease detection using machine
  learning" the first page is entirely papers.
- **What we hold that they do not**: a real sample report (21 pages), a 83-question bank where every question has
  an "examiner is testing" note, and per-project deep dives with viva answers. The stories reuse those artifacts.

## 4. The five stories

All five are `publishedAt: 2026-11-04`. The guide mechanism has no future-date support (a static export, no
date filter), so staggering would need a code change plus a scheduled rebuild; all five are published now.

### 4.1 Hospital management system project
- URL: `/guides/hospital-management-system-project/`
- Primary: hospital management system project (1,300, KD 0). Secondary: hospital management system project with
  source code (140), project pdf (260), in MERN.
- True material: `src/content/campus/hospital-management-mern.ts` (six collections, unique compound index, JWT
  role, UTC vs IST, fee copied into bill); `scripts/generate-sample-report.mjs` section 5.3 (cancelled appointments
  vs the unique index); commit 9dbcf26 (30 Oct 2026, sample report).
- Why it can win: the SERP is products, repos and journal PDFs. A student-facing explanation that ends at three
  concrete things the panel asks, with a free 21-page report to match, is not there yet.

### 4.2 Face recognition attendance system project
- URL: `/guides/face-recognition-attendance-system-project/`
- Primary: face recognition attendance system project (260, KD 0). Secondary: using python (170), head term
  face recognition attendance system (4,400).
- True material: `face-recognition-attendance.ts` deepDive (128-number dlib encoding, 0.5 threshold vs 0.6
  default, every-third-frame processing, unique constraint on student and session, no liveness in base version);
  question bank entry vi4 ("What does it do with a face it has never seen?") and vi2.
- Why it can win: the SERP for the project phrase has two results, one of them a product page.

### 4.3 Plant disease detection using machine learning
- URL: `/guides/plant-disease-detection-using-machine-learning/`
- Primary: plant disease detection using machine learning (210, KD 0). Secondary: plant disease detection project
  (110), plant disease detection using deep learning (90), plant disease detection (1,300, KD 6).
- True material: `plant-disease-detection.ts` deepDive (MobileNetV2 or EfficientNetB0 transfer learning,
  PlantVillage about 54,000 images, PlantDoc about 2,600, lab vs field gap, confidence threshold, class imbalance);
  question bank m1 to m3.
- Why it can win: page one is all journals and one project-sale page; a plain-language, student-facing page with a
  viva angle is a different result type.

### 4.4 Project viva questions
- URL: `/guides/project-viva-questions/`
- Primary: project viva questions (140, KD 0). Secondary: viva questions and answers (720), common viva questions
  (90), practical viva questions (170, mostly school).
- True material: `src/lib/vivaQuestions.ts`, 83 questions in ten categories (counts computed from the file:
  failure handling 15, design decisions 11, machine learning 11, security 9, database 8, your code 8, running it 6,
  closing 6, frontend 5, testing 4); the "why" note on each entry.
- Why it can win: the top results are scribd/studocu lists. Risk: it sits next to the existing
  `final-year-project-viva-questions` guide; the story angle (what is tested, by category) is different, and both
  cross-link.

### 4.5 Final year project report (sample)
- URL: `/guides/final-year-project-report-sample/`
- Primary: final year project report (210, KD 0). Secondary: final year project report sample (50),
  documentation pdf (40), report pdf (40).
- True material: `scripts/generate-sample-report.mjs` (21 pages generated 4 Nov; FR-01 to FR-14, six NFRs,
  TC-01 to TC-17 each tied to a requirement); `public/downloads/*`; commit 4415190 (30 Oct 2026, the template
  links that returned 404 after the unlock form).
- Why it can win: page one is GitHub lists and project vendors; none shows what a finished report contains with the
  traceability habit explained. Risk: overlaps the report-format guide and `/sample-project-report/`.

## 5. Honesty rules applied

- No invented students: every hypothetical is introduced as "Picture a ... student. This is a made-up student."
- Numbers come from this repo (83 questions, 21 pages, 14 requirements, 17 test cases, 0.5 vs 0.6 threshold,
  PlantVillage and PlantDoc sizes as stated on the project page) or from the treg research above.
- The project descriptions are the site's own catalogue pages. The stories do not claim an exam result, a student
  count or a live deployment. They say "the project page describes" where the source is the listing.
- Not verified: the PlantVillage and PlantDoc sizes are quoted from the project page, not re-checked against the
  dataset papers.

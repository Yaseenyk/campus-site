# Scheduled guides, batch 1 (planned 19 Nov 2026)

Source: `docs/keywords-2026-11-19.json` (India, Google, monthly volume; DataForSEO via treg, checked 19 Nov 2026).
Google groups close variants, so several phrasings share one volume.

## How scheduling works

- A scheduled guide lives in `src/content/scheduled/<slug>.tsx` (same shape as `src/content/guides/*.tsx`) and is
  registered in `src/content/scheduled/index.ts`. Its `publishedAt` is the release day (UTC).
- `lib/guides.ts` drops every guide whose day has not come from `GUIDES`, so it is absent from its own page, the
  guides index, the home page, the sitemap, `llms.txt`, `llms-full.txt` and the "read next" links.
- `deploy.yml` rebuilds daily at 00:17 UTC, so a guide goes live on its day without a commit, and IndexNow is told.
- `scripts/check-schedule.mjs` runs first in `npm run build` (and as `npm run check:schedule`). It fails when more
  than two scheduled guides fall in one ISO week, when two share a day or slug, when a file is not registered, or
  when any page links to a scheduled guide that releases after it (that link would dangle until then).
- Preview a later day: `POSTS_NOW=2026-12-31 npm run build`.
- A person reviews each batch before it is committed. Post files are not committed by the scheduling commit.

## Rules for every guide

Written for a student, not a keyword. Each guide is different in structure. No invented numbers, prices,
testimonials or stories. The pitch names the tiers correctly (Starter: design document, starter repository, build
plan; Guided: plus review of every module and report chapter the student writes; Mentored: plus live Google Meet
classes, the project built together one module per class with the student writing part of every module, viva prep
and a mock viva) and ends with the college-rules line. Links point only to live pages or to scheduled guides that
release earlier.

## Batch 1: Tuesdays and Fridays, two per ISO week

| Release (UTC) | Slug | Target search (monthly volume, India) | Angle |
|---|---|---|---|
| Tue 24 Nov 2026 | `android-project-ideas-for-students` | android project ideas for students (1,900) | Ideas grouped by what only a phone can do (camera, location, sensors, offline, notifications); stack choice; permissions |
| Fri 27 Nov 2026 | `python-project-ideas-with-source-code` | python project with source code (1,600); mini project in python (1,000) | What "with source code" should mean, Python lanes, mini and final-year tables, checking a repo before trusting it |
| Tue 1 Dec 2026 | `java-projects-with-source-code` | java project with source code (880); mini project in java (480) | Ideas sorted by the Java concept they prove; Swing vs JavaFX vs Spring Boot; the JDBC mistakes to fix in reused code |
| Fri 4 Dec 2026 | `iot-project-ideas-for-final-year` | iot project for final year (880) | Teaching guide: three layers, simulator first, demo-day failures, mains safety; honest that the classes are software-only |
| Tue 8 Dec 2026 | `php-projects-with-source-code` | project on php with source code (480) | Five security checks for any PHP project, ideas paired with the rule each teaches, plain PHP vs Laravel |
| Fri 11 Dec 2026 | `c-programming-mini-project-ideas` | c programming mini project (320); mini project in c (260) | Ideas by C concept, a standard-C file-records skeleton, Turbo C vs GCC, debugging tools |
| Tue 15 Dec 2026 | `cyber-security-project-ideas-for-students` | cybersecurity project ideas for students (210) | Legal, defensive projects in your own VM lab; evaluation with false positives; what a project should not be |
| Fri 18 Dec 2026 | `data-science-project-ideas-for-final-year` | data science project ideas for final year (170) | Question first; real Indian data sources; notebook to reproducible pipeline; baselines |

## Searches deliberately not given a new guide (already covered)

- final year project computer science / cse (2,900), cse final year project ideas (2,400): `btech-cse-final-year-project-topics`
  and `list-of-projects-for-computer-science-students`.
- mini project / mini project ideas (4,400 / 3,600): `mini-project-ideas`.
- ai project for students (1,600), machine learning final year project (480): `ai-ml-final-year-projects`.
- bca final year project (880): `bca-final-year-project` and `bca-final-year-project-topics`.
- mern stack project with source code (260): `mern-stack-project-ideas-with-source-code`.
- final year it project ideas (1,600): closest is `bsc-it-final-year-project-topics`; left alone to avoid a near-duplicate.

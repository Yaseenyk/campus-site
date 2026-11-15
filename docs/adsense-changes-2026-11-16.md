# AdSense readiness changes, campus.streamerosai.com / DefendIt (16 Nov 2026)

Context: the parent domain streamerosai.com was rejected for "Low-value content"; subdomains are judged with it. Policy notes: `portfolio/docs/adsense-readiness-2026-11-16.md`. Ads stay OFF and `scripts/verify-no-ads.mjs` still runs in the build and passes (no Google ad code in 227 built files).

## Audit (visible `<main>` words in the built `out/`, 79 HTML files before this work; 71 in the sitemap)

| Page type | Pages | Words | Verdict |
|---|---|---|---|
| Free guides | 31 | 1,180 to 3,100 | Substantive. Keep. Some topic overlap (two viva-question guides, report-format guides per course) but each is long and distinct in content. |
| AI journey lessons | 16 plus the index | 720 to 2,580 | Substantive. Keep. |
| Project listings | 10 | 1,350 to 1,470 | Roughly 55 to 60 percent of each page is its own content (stack, features, viva questions); 40 to 45 percent is shared tier, terms and FAQ boilerplate (measured by 5-word shingle overlap between pages). Acceptable, but the weakest "templated" group. |
| Tool and utility pages | find-my-project 213, cost-estimator 261, templates 338, planner 354, custom 362, colleges 498 | 213 to 498 | Real working tools with FAQ; short. Kept indexable. |
| Question bank, sample report | 2 | 2,198 and 778 | Fine. |
| Terms, Privacy | 2 | 813, 288 | Terms good; privacy lacked the visit counter, cookies and AdSense sections. |
| `/for/*` (BCA, MCA, B.Tech, B.Sc IT, M.Tech, diploma), `/agreement` | 7 | 990 to 1,690 | Already `noindex` and out of the sitemap. Unchanged. |
| About, Contact | 0 (404) | - | Missing. |

No broken internal links (`verify-links`: 83 pages after the change; `verify-sitemap`: all 73 URLs resolve and are indexable). No placeholder text.

## Changes

| Page | Before | After |
|---|---|---|
| `/about/` | 404 | New, about 850 words: who runs it (Yaseen Khatib, solo, Hyderabad), what is free versus paid stated plainly, the fact that a project listing is a build service plus mentoring and that following the college's rules on external assistance is the student's responsibility, how guides are written (difficulty ratings are opinion, the university's guidelines win), what the site is not, ads policy. Counts of guides and listings are read from the data, not typed. |
| `/contact/` | 404 | New: email for corrections, tools and privacy, WhatsApp for project enquiries, what not to send, a warning not to pay any account not confirmed in writing by email. |
| `/privacy/` | 288 words | About 520 words: adds the first-party visit counter (no cookies, no IP, nothing typed, 90-day retention, off with Do Not Track or GPC), a cookies paragraph, an Advertising section (AdSense for the future, opt-out of personalised ads via Google ad settings and aboutads.info, notice will be updated before any ad), run-by and contact pointers. Existing GA, Clarity, GoatCounter, EmailJS and Worker text kept. |
| Footer, every page | Guides, Viva questions, Question bank, AI journey, For colleges, Terms, Privacy | Adds About and Contact; the byline now says "Full Stack AI Developer" (it said "senior full-stack AI engineer", which the earlier one-job-title commit had missed); same fix in `llms.txt`. |
| `sitemap.xml` | 71 URLs | 73: About and Contact are picked up automatically by the route scan. |

No page was merged, noindexed or removed.

## Gates

`npm run build` passes with `verify-sitemap`, `verify-links` and `verify-no-ads`; `npm run lint` passes. No gate was changed.

## Remaining weaknesses (read this one carefully)

1. **The business model is the biggest AdSense risk, not the content.** The project listings and the Terms say the project is "built for you", "you are not expected to write any of it", that one module is varied "so two submissions of the same listing do not read the same", and the colleges page offers "distinct projects across a cohort so no two submissions collide". Google's publisher policies prohibit ads on pages that enable dishonest behaviour, and academic-cheating services are the textbook example. A reviewer who reads those lines can reject the whole domain family on this alone. I did not rewrite the owner's commercial terms or hide them; the About page states the service honestly and points students whose institution forbids external help to the free guides. The owner should decide whether DefendIt stays ad-free permanently, is reframed as mentoring and teaching (the sessions, the viva prep, the free guides), or is moved off the streamerosai.com family.
2. Ten project pages share about 40 to 45 percent boilerplate.
3. The tool pages are short (213 to 498 words).
4. Guide difficulty ratings and "viva questions panels ask" are the author's experience, not data; the About page says so.
5. About and Contact claim no external credentials beyond the linked portfolio, GitHub and LinkedIn.

## Honest assessment

Content depth on guides and the AI journey is strong, far above a typical "low-value" site, and the build gates are good. The missing trust pages and thin privacy policy are fixed. The service model in point 1 is a policy question that only the owner can answer.

## Owner to-dos

1. Decide on point 1 above before requesting any AdSense review that includes this site.
2. Confirm the About statements (no team, sessions run by you).
3. Consider folding the shared tier and FAQ boilerplate on the project pages into one linked page to raise the share of unique text per listing.

# AdSense changes, 19 Nov 2026 (campus.streamerosai.com)

## Privacy and crawl audit (19 Nov 2026)

Method: home and /contact/ loaded in headless Chromium with every third-party request and cookie recorded, two journey
pages fetched raw, and `src/app/layout.tsx` read for scripts injected later.

- Loaded on campus.streamerosai.com: Google Analytics 4 (googletagmanager.com, analytics.google.com,
  stats.g.doubleclick.net; cookies `_ga`, `_ga_MRVEYT4M1Z`), Microsoft Clarity (clarity.ms, c.bing.com; cookies `_clck`,
  `_clsk`, plus Microsoft's `MUID`/`MR`/`SM`), Pulse (pulse.yaseenyk.workers.dev, no cookies), GoatCounter (gc.zgo.at,
  yaseen.goatcounter.com, no cookies). On demand only: EmailJS and the enquiry Worker when a form is sent; WhatsApp when a
  visitor taps it. No AdSense, no Google Fonts request.
- Privacy page fixed: it said GoatCounter sets cookies (it does not), the Pulse text missed what it records (country,
  network name, clicks, form name on submit) and the daily-rotating visitor code, Clarity's cookies were not named, and
  there was no GA opt-out. Rewritten as one paragraph per service. AdSense "future use" paragraph kept.
- Crawl: robots.txt allows crawling (only /agreement/ is disallowed, and it is not in the sitemap) and names the sitemap.
  All 73 sitemap URLs return 200, none redirects, none is noindex, every canonical matches.
- Raw HTML: main text is in the static HTML (home about 2,560 words, journey pages 1,600 to 2,000 words).

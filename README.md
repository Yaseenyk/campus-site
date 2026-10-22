# Final Year Projects — campus.streamerosai.com

The student-projects business, split out of the portfolio
(yaseenkhatib.streamerosai.com) so each site is judged by search engines on
one purpose.

Next.js 14 App Router, static export, Tailwind, Framer Motion. Deployed to
GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out, then verifies the sitemap and every internal link
npm run lint
```

## Where things live

- `src/lib/campus.ts` and `src/content/campus/*`: the project catalogue, prices, tiers, FAQ.
  `INDEXABLE_PROJECTS` lists the project pages allowed into the index; each
  stays `noindex` until its page has content genuinely its own.
- `src/lib/guides.ts` and `src/content/guides/*`: the free guides.
- `src/lib/journey.ts` and `src/app/journey/*`: the 16-day AI engineering journey.
- `src/lib/site.ts`: site URL, portfolio URL, verification codes.
- `src/lib/seo.ts`: JSON-LD. The Person `@id` is the portfolio's, so both sites join into one entity.

The lead form, consent PDF and agreement storage post to the shared Cloudflare
worker in the portfolio repo (`worker/`), which allow-lists this origin.

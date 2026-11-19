/**
 * Pre-build guard for scheduled guides (src/content/scheduled/<slug>.tsx).
 *
 * Fails the build when:
 *   - a scheduled guide has no valid `slug` or `publishedAt: "YYYY-MM-DD"`,
 *   - a guide file is not registered in src/content/scheduled/index.ts (or the
 *     index imports a file that is missing),
 *   - two guides share a slug or a release day,
 *   - more than MAX_PER_WEEK guides fall in one ISO week (cadence cap: an
 *     auto-publishing flood cost a sibling site its index in July 2026),
 *   - a page links to a scheduled guide that releases after it. That link would
 *     dangle on the days in between and verify-links would fail the daily
 *     deploy, so it is caught here, on the day the post is committed.
 *
 * Prints the schedule with what is live as of today (UTC, or POSTS_NOW).
 * No dependencies. Runs first in `npm run build`; also `npm run check:schedule`.
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DIR = join(ROOT, "src", "content", "scheduled");
const SRC = join(ROOT, "src");
const MAX_PER_WEEK = 2;
const today = process.env.POSTS_NOW ?? new Date().toISOString().slice(0, 10);

const errors = [];

/** ISO-8601 week key, e.g. "2026-W48". */
function isoWeek(day) {
  const d = new Date(`${day}T00:00:00Z`);
  const dow = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dow);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".tsx")) : [];
const index = existsSync(join(DIR, "index.ts")) ? readFileSync(join(DIR, "index.ts"), "utf-8") : "";
const imported = new Set(
  [...index.matchAll(/from\s+["'](?:\.\/|@\/content\/scheduled\/)([^"']+)["']/g)].map((m) => m[1].replace(/\.tsx?$/, "")),
);

const posts = [];
for (const file of files) {
  const text = readFileSync(join(DIR, file), "utf-8");
  const slug = /\bslug:\s*"([^"]+)"/.exec(text)?.[1];
  const date = /\bpublishedAt:\s*"([^"]+)"/.exec(text)?.[1];
  const name = file.replace(/\.tsx$/, "");
  if (!slug) errors.push(`${file}: no slug`);
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
    errors.push(`${file}: publishedAt must be a real UTC day, "YYYY-MM-DD" (got ${JSON.stringify(date)})`);
  }
  if (!imported.has(name)) errors.push(`${file}: not imported in src/content/scheduled/index.ts`);
  if (slug && date) posts.push({ file, slug, date });
}
for (const name of imported) {
  if (!files.includes(`${name}.tsx`)) errors.push(`index.ts imports "${name}", but src/content/scheduled/${name}.tsx is missing`);
}

// Unique slugs and days.
const seen = new Map();
for (const p of posts) {
  for (const key of [`slug ${p.slug}`, `day ${p.date}`]) {
    if (seen.has(key)) errors.push(`${p.file} and ${seen.get(key)} share the same ${key}`);
    else seen.set(key, p.file);
  }
}

// Cadence cap per ISO week.
const weeks = new Map();
for (const p of posts) {
  const w = isoWeek(p.date);
  weeks.set(w, [...(weeks.get(w) ?? []), p]);
}
for (const [w, list] of weeks) {
  if (list.length > MAX_PER_WEEK) {
    errors.push(`${w} has ${list.length} scheduled guides (cap ${MAX_PER_WEEK}): ${list.map((p) => `${p.slug} ${p.date}`).join(", ")}`);
  }
}

// No page may link to a scheduled guide that releases after it.
const bySlug = new Map(posts.map((p) => [p.slug, p]));
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(tsx?|mdx?)$/.test(entry)) acc.push(p);
  }
  return acc;
}
for (const path of walk(SRC)) {
  const text = readFileSync(path, "utf-8");
  const own = path.startsWith(DIR) ? posts.find((p) => join(DIR, p.file) === path) : undefined;
  for (const [, slug] of text.matchAll(/\/guides\/([a-z0-9-]+)/g)) {
    const target = bySlug.get(slug);
    if (!target || target === own) continue;
    if (!own) {
      errors.push(`${relative(ROOT, path)} links to scheduled guide /guides/${slug}/ (releases ${target.date}); only a guide released later may link to it`);
    } else if (target.date > own.date) {
      errors.push(`${own.file} (${own.date}) links to /guides/${slug}/, which releases later (${target.date})`);
    }
  }
}

const sorted = [...posts].sort((a, b) => a.date.localeCompare(b.date));
const live = sorted.filter((p) => p.date <= today).length;
console.log(`check-schedule: ${posts.length} scheduled guide(s), ${live} live as of ${today}${process.env.POSTS_NOW ? " (POSTS_NOW)" : ""}`);
for (const p of sorted) console.log(`  ${p.date}  ${isoWeek(p.date)}  ${p.date <= today ? "live   " : "pending"}  /guides/${p.slug}/`);

if (errors.length) {
  console.error(`\ncheck-schedule: FAILED\n- ${errors.join("\n- ")}\n`);
  process.exit(1);
}

import { SITE_URL, PORTFOLIO_URL } from "@/lib/site";
import { CAMPUS_PROJECTS, CUSTOM_BUILD_RANGE, SESSION_POLICY, formatInr } from "@/lib/campus";
import { GUIDES } from "@/lib/guides";
import { VIVA_QUESTIONS } from "@/lib/vivaQuestions";

export const dynamic = "force-static";

/** /llms.txt (llmstxt.org): a curated markdown map of the site for LLM crawlers. */
export function GET() {
  const md = `# DefendIt — final year projects, built and explained, by Yaseen Khatib

> Final year projects for Indian students (BCA, MCA, B.Tech, B.Sc IT, M.Tech,
> diploma), built end to end — code, database, report, diagrams, deck and
> deployment — by a working senior full-stack AI engineer. Any idea can be
> commissioned, in any stack, quoted ${formatInr(CUSTOM_BUILD_RANGE.min)}–${formatInr(CUSTOM_BUILD_RANGE.max)} by scope.
> After delivery there are ${SESSION_POLICY.cadence.toLowerCase()} live
> ${SESSION_POLICY.platform} sessions after ${SESSION_POLICY.startsAfter} where the
> code is explained line by line, ending in a mock viva.
> Payment is direct (UPI / bank transfer) in monthly installments.
> The engineer behind it: ${PORTFOLIO_URL}/

## Pages

- [Catalogue — all final year projects](${SITE_URL}/)
- [Custom project built to your problem statement](${SITE_URL}/custom/)
- [For colleges — workshops and cohort mentoring](${SITE_URL}/colleges/)
- [Terms — payment, delivery, cancellation](${SITE_URL}/terms/)
- [16-day AI engineering journey](${SITE_URL}/journey/)
- [Free tool: timeline planner](${SITE_URL}/planner/)
- [Free tool: viva question bank — ${VIVA_QUESTIONS.length} questions, with what each one tests](${SITE_URL}/question-bank/)

## Free guides

${GUIDES.map((g) => `- [${g.meta.title}](${SITE_URL}/guides/${g.meta.slug}/): ${g.meta.description}`).join("\n")}

## Projects

${CAMPUS_PROJECTS.map(
  (p) =>
    `- [${p.title}](${SITE_URL}/${p.slug}/): ${p.summary} Suits ${p.degrees.join(", ")}. Stack: ${p.stack.join(", ")}. From ${formatInr(p.prices.source)}.`,
).join("\n")}

- [Sitemap](${SITE_URL}/sitemap.xml)
`;
  return new Response(md, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "@/lib/site";
import { CAMPUS_PROJECTS, isIndexableProject } from "@/lib/campus";
import { GUIDES } from "@/lib/guides";
import { routeDate } from "@/lib/lastmod";

export const dynamic = "force-static";

const APP = join(process.cwd(), "src", "app");
const FALLBACK = "2026-10-22";

// Static routes that are deliberately out of the index (noindex in their
// own metadata) — listing them would ask Google to index what we told it not to.
const EXCLUDED = new Set(["agreement"]);

/** Every static route under src/app: folders holding a page.tsx, skipping
 *  dynamic segments (listed below from their data) and excluded routes. */
function staticRoutes(dir = APP, prefix = ""): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("[") || name.startsWith("(") || name.startsWith("_")) continue;
    const route = `${prefix}/${name}`;
    if (EXCLUDED.has(route.slice(1))) continue;
    try {
      statSync(join(full, "page.tsx"));
      out.push(route);
    } catch {
      /* folder without its own page */
    }
    out.push(...staticRoutes(full, route));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: routeDate("src/app/page.tsx", FALLBACK), changeFrequency: "weekly", priority: 1.0 },
    ...staticRoutes().map((r) => ({
      url: `${SITE_URL}${r}/`,
      lastModified: routeDate(`src/app${r}`, FALLBACK),
      changeFrequency: "monthly" as const,
      priority: r.split("/").length > 2 ? 0.7 : 0.8,
    })),
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.meta.slug}/`,
      lastModified: g.meta.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Templated project pages stay out until rewritten (INDEXABLE_PROJECTS).
    // Per-degree /for/<slug>/ pages are noindex and never listed.
    ...CAMPUS_PROJECTS.filter((p) => isIndexableProject(p.slug)).map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: p.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
  return entries;
}

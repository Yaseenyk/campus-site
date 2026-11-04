import { lowestPrice, type CampusProject, type Degree } from "@/lib/campus";

/** What a project card and the home filter need. Passing the full CampusProject
 *  to a client component serialises every deep-dive and viva answer into the
 *  page's RSC payload (~100 KB on the home page), so cards get this slim shape. */
export interface CardProject {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  degrees: Degree[];
  domain: string;
  stack: string[];
  from: number;
}

export function toCard(p: CampusProject): CardProject {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    tagline: p.tagline,
    degrees: p.degrees,
    domain: p.domain,
    stack: p.stack.slice(0, 5),
    from: lowestPrice(p),
  };
}

// Topic hubs and listicles: the guide pages that list the built projects for a
// search phrase ("bca final year project topics", "mern stack projects with
// source code"). Project pages link back to every hub they appear in, so each
// hub has inbound links from the catalogue as well as from the home page.
//
// Imports the TYPE only from lib/campus, so content files can use it without
// closing an import cycle.
import type { CampusProject } from "@/lib/campus";

export interface Hub {
  /** Guide slug under /guides/. */
  slug: string;
  /** Short label for link rows. */
  label: string;
  /** Which of the eleven built projects belong on this hub. */
  includes: (p: CampusProject) => boolean;
}

const isMern = (p: CampusProject) =>
  p.stack.includes("React") && p.stack.includes("MongoDB");

export const HUBS: Hub[] = [
  {
    slug: "bca-final-year-project-topics",
    label: "BCA project topics",
    includes: (p) => p.degrees.includes("BCA"),
  },
  {
    slug: "mca-final-year-project-topics",
    label: "MCA project topics",
    includes: (p) => p.degrees.includes("MCA"),
  },
  {
    slug: "btech-cse-final-year-project-topics",
    label: "B.Tech CSE projects",
    includes: (p) => p.degrees.includes("B.Tech"),
  },
  {
    slug: "mern-stack-project-ideas-with-source-code",
    label: "MERN stack projects",
    includes: isMern,
  },
  {
    slug: "ai-ml-final-year-projects",
    label: "AI projects",
    includes: (p) => p.domain === "AI / Machine Learning",
  },
  {
    slug: "list-of-projects-for-computer-science-students",
    label: "Computer science project list",
    includes: () => true,
  },
  {
    slug: "unique-project-ideas-for-final-year-students",
    label: "Unique project ideas",
    includes: () => true,
  },
];

export function hubUrl(hub: Hub): string {
  return `/guides/${hub.slug}/`;
}

/** Hubs that list this project, in the order above. */
export function hubsForProject(project: CampusProject): Hub[] {
  return HUBS.filter((h) => h.includes(project));
}

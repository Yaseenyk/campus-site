/** Production base URL — used for canonical links, OpenGraph, JSON-LD, sitemap. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://campus.streamerosai.com";

/** The author's portfolio. A separate site: this one is the student business,
 *  that one is the engineer. Links between them are deliberate and few. */
export const PORTFOLIO_URL = "https://yaseenkhatib.streamerosai.com";

/** Registrable domain, for Google Preferred Sources (subdomains can't register). */
export const PREFERRED_SOURCE_DOMAIN = "streamerosai.com";

/** Sitewide default description — root metadata, OG, and the WebSite entity. */
export const SITE_DESCRIPTION =
  "Final year projects for BCA, MCA, B.Tech and diploma students, built by a working senior engineer and explained until you can defend them in the viva. Free guides, a viva question bank, and a 16-day AI engineering journey.";

/**
 * Search-engine site-verification codes. Paste the content value from
 * Google Search Console (HTML-tag method) and Bing Webmaster Tools here,
 * then rebuild — empty strings are omitted from the page entirely.
 */
export const VERIFICATION = {
  google: "OG5PRiRPw3I5jB5p-G7nDzf_mlxdiZzrpLaFYCZ0p1M",
  bing: "",
};

/** The CV lives on the portfolio; this site only links to it. */
export const RESUME_URL = `${PORTFOLIO_URL}/Resume.pdf`;

export const SOCIALS = {
  github: "https://github.com/Yaseenyk",
  linkedin: "https://www.linkedin.com/in/yaseen-yk",
};

export const PERSON = {
  name: "Yaseen Nurmahammad Khatib",
  jobTitle: "Senior Full-Stack AI Engineer",
  email: "contact@streamerosai.com",
  locality: "Hyderabad",
  country: "India",
  knowsAbout: [
    "MERN Stack",
    "Agentic RAG",
    "React.js",
    "Node.js",
    "TypeScript",
    "LLM Orchestration",
    "MongoDB",
  ],
};

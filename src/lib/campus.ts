// Single source of truth for the Final Year Projects surface: the
// / catalog, each /<slug> page, the
// custom-build brief, and the sitemap all read from here.
//
// Listing files under src/content/campus/ import the TYPE only — importing a
// runtime value from here would create an import cycle and hit a TDZ error
// during the static export.
import { SITE_URL } from "@/lib/site";
import type { FaqItem } from "@/lib/seo";
import { aiCollegeAssistant } from "@/content/campus/ai-college-assistant";
import { hospitalManagementMern } from "@/content/campus/hospital-management-mern";
import { expenseTrackerMobile } from "@/content/campus/expense-tracker-mobile";
import { resumeScreeningMl } from "@/content/campus/resume-screening-ml";
import { faceRecognitionAttendance } from "@/content/campus/face-recognition-attendance";
import { ecommerceMern } from "@/content/campus/ecommerce-mern";
import { realtimeChatMern } from "@/content/campus/realtime-chat-mern";
import { recommendationSystemMl } from "@/content/campus/recommendation-system-ml";
import { fakeNewsDetectionMl } from "@/content/campus/fake-news-detection-ml";
import { plantDiseaseDetection } from "@/content/campus/plant-disease-detection";
import { bloodBankManagement } from "@/content/campus/blood-bank-management";

export type Degree = "BCA" | "MCA" | "B.Tech" | "B.Sc IT" | "M.Tech" | "Diploma";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type TierId = "source" | "academic" | "mentored";

export interface CampusPrices {
  source: number;
  academic: number;
  mentored: number;
}

export interface CampusTier {
  id: TierId;
  name: string;
  /** Total price in INR. */
  price: number;
  /** Number of monthly installments the total is split across. */
  emiMonths: number;
  includes: string[];
}

export interface CampusProject {
  slug: string;
  title: string;
  /** Mono eyebrow, e.g. "Machine Learning · Python". */
  category: string;
  /** One-line positioning under the title. */
  tagline: string;
  /** Card body + SEO description. */
  summary: string;
  degrees: Degree[];
  domain: string;
  stack: string[];
  /** What the built system actually does — user-facing capabilities. */
  features: string[];
  /** Code modules walked through in the sessions. */
  modules: string[];
  /** Project-specific technical walkthrough — what makes each page its own. */
  deepDive: {
    howItWorks: string[];
    /** Datasets and data model. */
    data: string;
    hardParts: { title: string; body: string }[];
    viva: FaqItem[];
  };
  difficulty: Difficulty;
  /** Live sessions included in the Mentored tier. */
  sessionCount: number;
  prices: CampusPrices;
  demoUrl?: string;
  /**
   * Share/rich-result image (site-relative), e.g. "/social/ai-college.jpg".
   * Omit to fall back to the brand-locked FYP portal image — see
   * campusImageUrl(). Generate bespoke per-project images with
   * scripts/campus_social.py when you want them.
   */
  ogImage?: string;
  publishedAt: string;
}

/** Sessions run live on Google Meet, one per day, after 8 PM IST. */
export const SESSION_POLICY = {
  platform: "Google Meet",
  startsAfter: "8:00 PM IST",
  cadence: "Daily",
  durationMinutes: 60,
};

/**
 * Payment is direct (UPI / bank transfer) and split into monthly
 * installments — no gateway, no checkout on this site. The design document
 * and starter repository arrive with the first installment, and sessions and
 * reviews start then. The project is built together with the student in live
 * classes, and the student writes part of every module; nothing finished is
 * handed over (owner's decision 19 Nov 2026, "option B").
 */
export const PAYMENT_POLICY = {
  method: "Direct UPI / bank transfer",
  sessionsStart: "After the first installment",
  handover: "With the first installment",
};

/** One line on academic integrity, reused wherever the service is described. */
export const INTEGRITY_NOTE =
  "We build it together in live classes and you write part of every module and the report yourself; I teach, review and help. Check your college's rules on outside help — most allow coaching, and your project guide should know you have a mentor.";

export const CUSTOM_BUILD_RANGE = { min: 10000, max: 50000 };

/**
 * Referral offer. Final year projects happen in batches, so a classmate is the
 * best channel. Honest and code-free: both parties get the discount when they
 * book, claimed by naming each other on WhatsApp — no coupon system to fake.
 * Set discountPercent to 0 to retire it.
 */
export const REFERRAL = { discountPercent: 15 };

/** WhatsApp is the conversion channel for this audience — every CTA offers it. */
export const WHATSAPP_NUMBER = "918208335028";

export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Launch offer. This is the honest substitute for testimonials the site does
 * not have yet: a real discount for the first students, in exchange for
 * permission to publish what they thought. Set `seats` to 0 to retire it —
 * the band disappears everywhere rather than going stale.
 */
export const EARLY_BIRD = {
  seats: 3,
  discountPercent: 40,
  condition:
    "in exchange for an honest review and permission to show your finished project here",
};

/**
 * Registered listings, newest first. Add a file under `src/content/campus/`
 * and import it above — nothing is live until it appears in this array.
 */
export const CAMPUS_PROJECTS: CampusProject[] = [
  ecommerceMern,
  realtimeChatMern,
  recommendationSystemMl,
  fakeNewsDetectionMl,
  plantDiseaseDetection,
  bloodBankManagement,
  aiCollegeAssistant,
  hospitalManagementMern,
  expenseTrackerMobile,
  resumeScreeningMl,
  faceRecognitionAttendance,
];

/**
 * Project pages allowed into the index. On the portfolio these eleven were
 * 64-70% identical to each other (shared template text), which is the
 * near-duplicate pattern Google declines and holds against the whole site.
 * Each stays noindex and out of the sitemap until its page carries content
 * genuinely its own; add the slug here when it does. With deepDive content
 * all eleven measured under 0.30 (5-word shingle Jaccard), max 0.286.
 */
export const INDEXABLE_PROJECTS = new Set<string>([
  "ai-college-assistant",
  "blood-bank-management",
  "ecommerce-mern",
  "expense-tracker-mobile",
  "face-recognition-attendance",
  "fake-news-detection-ml",
  "hospital-management-mern",
  "plant-disease-detection",
  "realtime-chat-mern",
  "recommendation-system-ml",
  "resume-screening-ml",
]);

export function isIndexableProject(slug: string): boolean {
  return INDEXABLE_PROJECTS.has(slug);
}

/**
 * The standard three tiers for a listing. Inclusions are identical across the
 * catalog so a student comparing two projects is only comparing the projects.
 */
export function getTiers(project: CampusProject): CampusTier[] {
  return [
    {
      id: "source",
      name: "Starter",
      price: project.prices.source,
      emiMonths: 1,
      includes: [
        "Project design document (scope, modules, database schema)",
        "Starter repository: setup, folder structure, login and one worked example module",
        "Module-by-module build plan",
        "Local setup guide and seed data",
        "One kickoff call",
      ],
    },
    {
      id: "academic",
      name: "Guided",
      price: project.prices.academic,
      emiMonths: 2,
      includes: [
        "Everything in Starter",
        "Written review of every module you write",
        "Report template, plus review of each chapter you write",
        "Review of your ER / DFD / architecture diagrams",
        "Deployment walkthrough",
      ],
    },
    {
      id: "mentored",
      name: "Mentored",
      price: project.prices.mentored,
      emiMonths: 3,
      includes: [
        "Everything in Guided",
        `${project.sessionCount} live classes on ${SESSION_POLICY.platform}`,
        "The project built together on screen, one module per class — you write part of every module",
        "Viva question prep + mock viva",
        "Debugging help on WhatsApp until submission",
      ],
    },
  ];
}

export function getCampusProject(slug: string): CampusProject | undefined {
  return CAMPUS_PROJECTS.find((p) => p.slug === slug);
}

/** URL segment for each course landing page under /for/. */
export const DEGREE_SLUGS: Record<Degree, string> = {
  BCA: "bca",
  MCA: "mca",
  "B.Tech": "btech",
  "B.Sc IT": "bsc-it",
  "M.Tech": "mtech",
  Diploma: "diploma",
};

export function degreeFromSlug(slug: string): Degree | undefined {
  return (Object.keys(DEGREE_SLUGS) as Degree[]).find(
    (d) => DEGREE_SLUGS[d] === slug,
  );
}

export function projectsForDegree(degree: Degree): CampusProject[] {
  return CAMPUS_PROJECTS.filter((p) => p.degrees.includes(degree));
}

export function campusUrl(slug: string): string {
  return `${SITE_URL}/${slug}/`;
}

/**
 * Absolute rich-result / share image for a project. Falls back to the
 * brand-locked FYP portal image so the Product schema always has a valid
 * `image` (Google Merchant-listing requirement) and every project page ships
 * a real OG card.
 */
export function campusImageUrl(project: CampusProject): string {
  if (project.ogImage) return `${SITE_URL}${project.ogImage}`;
  // Category cover fallback — bespoke per-project images can still override
  // via ogImage. Covers live in public/og/campus/ (generate-campus-og.py).
  const d = project.domain.toLowerCase();
  const cover =
    d.includes("machine learning") || d.includes("ai")
      ? "cat-ai-ml"
      : d.includes("mobile")
        ? "cat-mobile"
        : "cat-web";
  return `${SITE_URL}/og/campus/${cover}.jpg`;
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Per-month figure shown next to a tier price. */
export function emiPerMonth(tier: CampusTier): number {
  return Math.ceil(tier.price / tier.emiMonths / 100) * 100;
}

export function lowestPrice(project: CampusProject): number {
  return project.prices.source;
}

/** Distinct degrees across the catalog, for the filter bar. */
export function allDegrees(): Degree[] {
  const seen = new Set<Degree>();
  CAMPUS_PROJECTS.forEach((p) => p.degrees.forEach((d) => seen.add(d)));
  return [...seen];
}

/** Distinct domains across the catalog, for the filter bar. */
export function allDomains(): string[] {
  return [...new Set(CAMPUS_PROJECTS.map((p) => p.domain))].sort();
}

export const CAMPUS_FAQ = [
  {
    question: "Do I have to build it myself?",
    answer:
      "You build it with me. On the Mentored tier we build it together in live classes: I write and explain part of each module on screen, and you write the next part yourself in the same class, so by the end you have written part of every module and understand all of it. You write the report chapters and I review them. On the Starter and Guided tiers you build from the design and starter on your own time, with every module reviewed. Either way you can answer anything in your viva, because you were there when every line was written.",
  },
  {
    question: "Is this allowed by my college?",
    answer:
      "Most colleges allow a mentor or tutor, the same way they allow coaching; what they do not allow is submitting work someone else did for you. Here you take part in building every module and write part of each one yourself. Check your own college's rules on outside help, and tell your project guide you have a mentor if the rules ask you to.",
  },
  {
    question: "Can I bring my own idea instead of picking from the list?",
    answer: `Yes. Send whatever your guide approved, or an idea of your own, through the custom form. Any stack, any domain. I turn it into a design and a build plan, and guide you through building it. Custom projects are quoted between ${formatInr(CUSTOM_BUILD_RANGE.min)} and ${formatInr(CUSTOM_BUILD_RANGE.max)} depending on scope, and run on the same sessions and installments.`,
  },
  {
    question: "Do I get the source code?",
    answer:
      "Not as a download. On the Mentored tier the complete code is built in the classes with you, so you end with the whole project — built together, with part of every module written by you. On the Starter and Guided tiers you get a starter repository (setup, folder structure, login and one worked example module) and write the rest following the build plan, with every module reviewed.",
  },
  {
    question: "How do the daily sessions work?",
    answer: `Sessions are live on ${SESSION_POLICY.platform}, one per day, starting after ${SESSION_POLICY.startsAfter} so they do not clash with college hours. Each runs about ${SESSION_POLICY.durationMinutes} minutes and covers one module: we build it together on screen, I explain each step, and you write part of it yourself before the class ends.`,
  },
  {
    question: "Can I pay in installments?",
    answer: `Yes. Payment is direct — ${PAYMENT_POLICY.method.toLowerCase()} — split into monthly installments. The design document and starter repository arrive with the first installment, and sessions and reviews start then.`,
  },
  {
    question: "I can buy a project online for ₹2,000. Why does this cost more?",
    answer:
      "Because that ₹2,000 buys a zip file someone else wrote, the same file has been sold to hundreds of students, and submitting it as your own is plagiarism at most universities. It also collapses the moment your examiner asks why you chose that database. What you are paying for here is a working developer's time: the design, the reviews and the sessions that get you to a project you built and can explain.",
  },
  {
    question: "How do I know you will not disappear after I take money?",
    answer:
      "Payment is split across months, so you are never paying far ahead — the design, the starter repository and the first sessions come with the first installment. If I fail to deliver what the project page promised, your remaining installments are cancelled and the last one is returned. I also have a name attached to this: the same site carries my portfolio, my published work, and my public repositories. That is not something I would burn for one project.",
  },
  {
    question: "What if my guide rejects the project or asks for changes?",
    answer:
      "Help with changes your guide asks for during review is included at no extra cost — that is part of the guidance, not a new scope. If your guide rejects the topic outright before work begins, you can switch to a different project or stop with nothing further owed.",
  },
  {
    question: "Who guides this?",
    answer:
      "Yaseen Khatib — a Full Stack AI Developer who builds systems like these for work. The same person writes the design, reviews your code and runs the sessions.",
  },
];

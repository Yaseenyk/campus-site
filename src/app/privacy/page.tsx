import { seoDescription } from "@/lib/seoText";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const DESCRIPTION =
  "What the DefendIt website collects when you browse it, send an enquiry or download a template, how long it is kept, and how to ask for it to be deleted.";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: seoDescription(DESCRIPTION),
  alternates: { canonical: `${SITE_URL}/privacy/` },
  openGraph: {
    type: "website",
    title: "Privacy notice | DefendIt",
    description: seoDescription(DESCRIPTION),
    url: `${SITE_URL}/privacy/`,
    siteName: "DefendIt",
  },
};

const CLAUSES: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "What the forms collect",
    paragraphs: [
      "When you send an enquiry, download a template or sign the agreement, I receive what you type: your name, email, phone number, college and course, and your message, plus the page you sent it from.",
      "The form sends it by email using EmailJS, and a second copy is stored by a Cloudflare Worker so an enquiry is not lost if the email fails. WhatsApp messages you start yourself go through WhatsApp, under its own terms.",
    ],
  },
  {
    heading: "Analytics",
    paragraphs: [
      "The site uses Google Analytics and GoatCounter to see which pages are read and how visitors arrive. Google Analytics sets first-party cookies and sends usage data, such as pages viewed, approximate location and the source of the visit, to Google. It also keeps your first source in your browser so a later enquiry can be tied to where you first came from. The site also uses Microsoft Clarity, a free tool that records anonymised heatmaps and session replays so I can see where visitors get stuck. Text typed into forms is masked and is not recorded. None of it is used for advertising, and you can block it with a browser extension or by disabling cookies.",
    ],
  },
  {
    heading: "What I use it for",
    paragraphs: [
      "Only to reply to you about your project, sessions and delivery, and to understand which pages help students. I do not sell or share your details.",
    ],
  },
  {
    heading: "How long I keep it",
    paragraphs: [
      "Enquiries and signed agreements are kept as long as the project needs them, and enquiries are deleted when you ask. Analytics data is kept by Google for 14 months at most.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "To see, correct or delete what you sent, email contact@streamerosai.com.",
      "Last updated 4 November 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <JsonLd data={breadcrumbJsonLd([{ name: "Privacy notice", path: "/privacy" }])} />
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Privacy notice</h1>
      <p className="mt-3 text-zinc-400">This notice covers this website only.</p>
      {CLAUSES.map((c) => (
        <section key={c.heading} className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-100">{c.heading}</h2>
          {c.paragraphs.map((p) => (
            <p key={p} className="mt-3 leading-relaxed text-zinc-400">
              {p}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}

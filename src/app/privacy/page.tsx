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
      "Messages sent through the forms are also saved in my own database: a Cloudflare Worker and D1 database I run (pulse.yaseenyk.workers.dev), together with where the visit came from (the page you sent it from and the referring site or campaign Pulse noted for that browser tab). Only I can read them. They are kept for up to 24 months (spam for 30 days) and deleted sooner if you ask at contact@streamerosai.com. EmailJS then sends me an email as a notification.",
    ],
  },
  {
    heading: "Analytics",
    paragraphs: [
      "Four measuring tools load on this site. None of them is used for advertising, and the site works the same if you block all of them with a browser extension.",
      "Google Analytics (googletagmanager.com) shows which pages are read and how visitors arrive. It sets first-party cookies (_ga and _ga_*) and sends usage data, such as pages viewed, approximate location and the source of the visit, to Google. Google signals is on, so for visitors signed in to a Google account with ad personalisation on, Google may associate this site's visit data with their account to give me aggregated reports on age group, gender and interests; no individual is identified to me. You can turn this off in your Google account under Data & privacy, or in My Ad Center at myadcenter.google.com. You can opt out with Google's browser add-on at tools.google.com/dlpage/gaoptout.",
      "Microsoft Clarity (clarity.ms) records session replays and heatmaps: mouse movement, clicks and scrolling, so I can see where visitors get stuck. Text typed into forms is masked and never recorded. It sets its own cookies (_clck, _clsk) and Microsoft cookies on clarity.ms and bing.com (such as MUID). Microsoft explains its use at privacy.microsoft.com/privacystatement.",
      "Pulse is my own visit counter, a script from pulse.yaseenyk.workers.dev (a Cloudflare Worker I run). It records the page (without the query string), the referring site and campaign tags, country, device type, browser and system name, screen size, language, the name of your network provider, scroll depth, time on the page, page speed, which links and buttons were clicked, and, when a form is sent, the form's name only, never what was typed in it. Since 24 November 2026 it also records a few technical details that show when a page is broken or slow: up to three script error messages per page (the message, the script file and the line), whether your browser translated the page and into which language, your connection type (such as 4g or 3g), how fast the page responded to a tap, how much the layout jumped while loading, and the name of a form that was sent or started but not sent, never what was typed. It sets no cookies and stores no IP address or browser string. The IP address is used in memory only, to limit abuse and to make a visitor code that changes every day (a one-way hash with a random salt that is deleted the next day), so visits cannot be linked across days. Rows are deleted after 90 days, and it does nothing if your browser sends Do Not Track or Global Privacy Control.",
      "GoatCounter (gc.zgo.at) is a cookie-free page counter. It records the page, referrer, browser, screen size and country, and does not store your IP address.",
      "Cookies on this site come only from Google Analytics and Microsoft Clarity as described above. The site itself keeps one note in your browser's local storage, the first site that sent you, so an enquiry can be tied to it. Clearing your browser data removes it.",
    ],
  },
  {
    heading: "Advertising",
    paragraphs: [
      "The site shows no ads today. If Google AdSense approves it and ads are switched on, Google and its partners may use cookies to show ads based on your visits to this and other sites. Ads will be labelled and will never change what a guide says, and this notice will be updated before any ad appears.",
      "You can opt out of personalised ads at adssettings.google.com, in your Google account settings, or at aboutads.info/choices. You will still see ads, but not personalised ones. Google explains how it uses data from sites that use its services at policies.google.com/technologies/partner-sites.",
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
      "Enquiries and signed agreements are kept as long as the project needs them, and enquiries are deleted when you ask. The copies in my form database are kept for up to 24 months (spam for 30 days). Analytics data is kept by Google for 14 months at most, and Pulse rows are deleted after 90 days. Clarity and GoatCounter keep data under their own retention rules.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "To see, correct or delete what you sent, email contact@streamerosai.com. This site is run by Yaseen Khatib, Hyderabad, India. See also the contact page, the about page and the terms.",
      "Last updated 24 November 2026.",
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

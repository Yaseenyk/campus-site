import { seoDescription } from "@/lib/seoText";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PERSON } from "@/lib/site";
import { whatsappHref } from "@/lib/campus";
import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const DESCRIPTION =
  "How to reach DefendIt: email for questions, corrections and privacy requests, WhatsApp for project enquiries, and what to expect.";

export const metadata: Metadata = {
  title: "Contact DefendIt",
  description: seoDescription(DESCRIPTION),
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    type: "website",
    title: "Contact DefendIt",
    description: seoDescription(DESCRIPTION),
    url: `${SITE_URL}/contact/`,
    siteName: "DefendIt",
  },
};

const P = "mt-4 leading-relaxed text-zinc-400";
const H2 = "mt-12 text-xl font-semibold tracking-tight text-zinc-50";
const A = "text-cyan underline-offset-4 hover:underline";

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Contact</h1>
      <p className="mt-5 text-lg leading-relaxed text-zinc-300">
        DefendIt is run by one person, {PERSON.name}, from {PERSON.locality}, India. Email is the best way to reach me for anything that is not a project enquiry: <a className={A} href={`mailto:${PERSON.email}`}>{PERSON.email}</a>. A reply can take a few days.
      </p>

      <h2 className={H2}>Email me about</h2>
      <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-zinc-400">
        <li>A mistake in a guide, a template or a viva answer. Tell me the page and what is wrong; I will check it and fix it.</li>
        <li>Questions about how the free tools or guides work.</li>
        <li>A privacy request: to see, correct or delete what you sent me. Email from the address you used. See the <Link className={A} href="/privacy/">privacy notice</Link>.</li>
        <li>Workshops or mentoring for your college: see <Link className={A} href="/colleges/">for colleges</Link>.</li>
      </ul>

      <h2 className={H2}>Project enquiries</h2>
      <p className={P}>
        If you are asking about building or mentoring a project, WhatsApp is faster:{" "}
        <a className={A} href={whatsappHref("Hi, I have a question about a final year project.")} rel="noopener">message on WhatsApp</a>. You can also use the forms on the project pages and the <Link className={A} href="/custom/">custom build</Link> page. What is included, the price and the payment terms are written on the project pages and in the <Link className={A} href="/terms/">terms</Link>, so you can read them before you write.
      </p>

      <h2 className={H2}>Please do not send</h2>
      <p className={P}>
        Card details, UPI PINs, OTPs, passwords or Aadhaar numbers. I never need them and will not ask for them. Do not pay anyone claiming to be DefendIt on a number or account that is not confirmed in writing by email from the address above.
      </p>

      <h2 className={H2}>More</h2>
      <p className={P}>
        Who I am and what the site is: <Link className={A} href="/about/">About</Link>.
      </p>
    </article>
  );
}

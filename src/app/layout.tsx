import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Link from "next/link";
import { SITE_URL, SITE_DESCRIPTION, VERIFICATION, PORTFOLIO_URL } from "@/lib/site";
import { siteGraphJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/MotionProvider";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/campus/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

const TITLE_DEFAULT = "DefendIt — Final Year Projects, Built and Explained";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | DefendIt",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Yaseen Khatib", url: PORTFOLIO_URL }],
  creator: "Yaseen Khatib",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    title: TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "DefendIt",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og-lockup.png`, alt: "DefendIt — final year projects, built and explained" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-lockup.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    ...(VERIFICATION.google ? { google: VERIFICATION.google } : {}),
    ...(VERIFICATION.bing ? { other: { "msvalidate.01": VERIFICATION.bing } } : {}),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans">
        <JsonLd data={siteGraphJsonLd} />
        <MotionProvider>
          <GridBackground />
          <Navbar />
          <main className="pt-28">{children}</main>
          <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-zinc-800/60 px-6 py-10 text-sm text-zinc-500">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} DefendIt. Built and taught by{" "}
                <a href={PORTFOLIO_URL + "/"} className="text-zinc-300 underline-offset-4 hover:text-cyan hover:underline">
                  Yaseen Khatib
                </a>
                , senior full-stack AI engineer.
              </p>
              <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
                <Link href="/guides/" className="hover:text-zinc-200">Guides</Link>
                <Link href="/question-bank/" className="hover:text-zinc-200">Viva questions</Link>
                <Link href="/journey/" className="hover:text-zinc-200">AI journey</Link>
                <Link href="/colleges/" className="hover:text-zinc-200">For colleges</Link>
                <Link href="/terms/" className="hover:text-zinc-200">Terms</Link>
              </nav>
            </div>
          </footer>
          <FloatingWhatsApp />
        </MotionProvider>
        <script data-goatcounter="https://yaseen.goatcounter.com/count" async src="https://gc.zgo.at/count.js" />
      </body>
    </html>
  );
}

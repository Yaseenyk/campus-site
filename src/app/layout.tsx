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
      <head>
        {/* Google tag (GA4). A plain tag in the server-rendered head so Google's tag checker finds it
            in the HTML; next/script would inject it client-side and the checker misses it. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var w=window,d=document,q=new URLSearchParams(location.search),st=null;try{st=w.localStorage}catch(e){}function g(k){return q.get(k)||''}var ref=g('ref'),hasUtm=!!g('utm_source');var ft=null;try{ft=JSON.parse(st.getItem('ga_ft')||'null')}catch(e){}if(!ft){var rh='';try{rh=d.referrer?new URL(d.referrer).hostname:''}catch(e){}ft={s:g('utm_source')||ref||rh||'direct',m:g('utm_medium')||(ref?'share':(rh?'referral':'none')),c:g('utm_campaign')||(ref?'ref-tag':'(not set)')};try{st.setItem('ga_ft',JSON.stringify(ft))}catch(e){}}w.dataLayer=w.dataLayer||[];function gtag(){w.dataLayer.push(arguments)}w.gtag=gtag;gtag('js',new Date());var cfg={};if(!hasUtm&&ref){cfg.campaign_source=ref;cfg.campaign_medium='share';cfg.campaign_name='ref-tag'}gtag('config','G-MRVEYT4M1Z',cfg);w.gaEvent=function(n,p){try{p=p||{};p.first_source=ft.s;p.first_medium=ft.m;p.first_campaign=ft.c;p.cta_page=p.cta_page||location.pathname;gtag('event',n,p)}catch(e){}};d.addEventListener('click',function(e){try{var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'',n='';if(/^(https?:)?\\/\\/(wa\\.me|api\\.whatsapp\\.com)|^whatsapp:/i.test(h))n='whatsapp_click';else if(/^mailto:/i.test(h))n='email_click';else if(/^tel:/i.test(h))n='phone_click';else if(/\\.(apk|ipa)([?#]|$)/i.test(h))n='app_download';else if(/\\.md([?#]|$)/i.test(h))n='template_download';var u=h;if(!n){var o;try{o=new URL(h,location.href)}catch(e){o=null}if(!o||(o.protocol!=='http:'&&o.protocol!=='https:')||o.origin!==location.origin)return;u=o.pathname;n=a.closest('footer')?'footer_click':a.closest('header,nav')?'nav_click':'internal_link_click'}if(n)w.gaEvent(n,{cta_text:(a.textContent||'').trim().slice(0,60),link_url:u.slice(0,100)});}catch(x){}},true);var done=0;function load(){if(done)return;done=1;var t=d.createElement('script');t.async=1;t.src='https://www.googletagmanager.com/gtag/js?id=G-MRVEYT4M1Z';d.head.appendChild(t);(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i+'?ref=bwt';y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(w,d,'clarity','script','z8aq0idbea');}['pointerdown','keydown','scroll','touchstart'].forEach(function(ev){w.addEventListener(ev,load,{once:true,passive:true})});function idle(){if(w.requestIdleCallback)w.requestIdleCallback(load,{timeout:3000});else setTimeout(load,3000)}if(d.readyState==='complete')idle();else w.addEventListener('load',idle,{once:true});w.addEventListener('load',function(){setTimeout(load,4000)},{once:true});})();",
          }}
        />
      </head>
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
                <Link href="/guides/final-year-project-viva-questions/" className="hover:text-zinc-200">Viva questions</Link>
                <Link href="/question-bank/" className="hover:text-zinc-200">Question bank</Link>
                <Link href="/journey/" className="hover:text-zinc-200">AI journey</Link>
                <Link href="/colleges/" className="hover:text-zinc-200">For colleges</Link>
                <Link href="/terms/" className="hover:text-zinc-200">Terms</Link>
                <Link href="/privacy/" className="hover:text-zinc-200">Privacy</Link>
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

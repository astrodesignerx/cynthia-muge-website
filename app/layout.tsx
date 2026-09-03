import type { Metadata } from "next";
import { Anton, Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { MainNav } from "@/components/Nav";
import { Search } from "@/components/Search";
import { MobileMenu } from "@/components/MobileMenu";
import { FooterWordmark } from "@/components/FooterWordmark";
import { NavWordmark } from "@/components/NavWordmark";
import { ScrollProgress } from "@/components/Motion";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cynthiamuge.com"),
  title: {
    default: "Hon. Cynthia Muge | Woman Representative, Nandi County",
    template: "%s | Hon. Cynthia Muge",
  },
  description:
    "Hon. Cynthia Jepkosgei Muge, Woman Representative for Nandi County. A record of service, rooted in the people and places of Nandi.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Hon. Cynthia Muge",
    images: [
      {
        url: "/img/facebook/i-am-not-a-small-girl-anymore-1-1367x2048.jpg",
        width: 1367,
        height: 2048,
        alt: "Hon. Cynthia Muge",
      },
    ],
  },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "Stories" },
  { href: "/pillars", label: "Pillars" },
  { href: "/record", label: "The Record" },
  { href: "/parliament", label: "Parliament" },
  { href: "/boso", label: "BOSO" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the pre-paint script below sets data-motion,
    // an attribute React did not render.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set before paint, so nothing is hidden where the observer cannot run. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.motion='on'}}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${instrument.variable} ${anton.variable} ${manrope.variable} ${jetbrains.variable}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>

        <header className="night sticky top-0 z-40 border-b border-[var(--color-night-rule)]/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
            <NavWordmark />
            <div className="ml-auto flex min-w-0 items-center gap-3">
              <MainNav nav={nav} />
              <Search nav={nav} />
              <MobileMenu nav={nav} />
            </div>
          </div>
          <ScrollProgress />
        </header>

        <main id="main">{children}</main>

        <footer className="night">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-wrap justify-between gap-10">
              <div className="max-w-sm">
                <FooterWordmark />
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-[var(--color-on-night-soft)]">
                  Woman Representative, Nandi County. Working with the people
                  and communities of Nandi.
                </p>
                <p className="label mt-5 text-[var(--color-gold)]">
                  #FormNiMama
                </p>
              </div>
              <nav aria-label="Footer">
                <ul className="flex flex-col gap-2">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.9375rem] text-[var(--color-on-night-soft)] transition-colors duration-150 hover:text-[var(--color-gold)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p className="label mt-12 border-t border-[var(--color-night-rule)] pt-6 leading-relaxed text-[var(--color-on-night-soft)]">
              Office of the Woman Representative, Nandi County. Last reviewed 30
              August 2026. This site follows the work across Nandi and updates
              the record as information arrives.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

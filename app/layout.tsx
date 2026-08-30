import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { MainNav } from "@/components/Nav";
import { ScrollProgress } from "@/components/Motion";
import { Wordmark } from "@/components/Wordmark";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
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
    "Hon. Cynthia Jepkosgei Muge, Woman Representative for Nandi County. Her work across the six sub-counties and thirty wards.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Hon. Cynthia Muge",
  },
};

const nav = [
  { href: "/pillars", label: "The six pillars" },
  { href: "/record", label: "The record" },
  { href: "/parliament", label: "In Parliament" },
  { href: "/about", label: "About" },
  { href: "/boso", label: "BOSO Supercup" },
  { href: "/media", label: "Media" },
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
        className={`${instrument.variable} ${manrope.variable} ${jetbrains.variable}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>

        <header className="night sticky top-0 z-40 border-b border-[var(--color-night-rule)]/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
            <Link
              href="/"
              aria-label="Cynthia Muge, home"
              className="shrink-0 transition-opacity duration-200 hover:opacity-85"
            >
              <Wordmark />
            </Link>
            <MainNav nav={nav} />
          </div>
          <ScrollProgress />
        </header>

        <main id="main">{children}</main>

        <footer className="night">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-wrap justify-between gap-10">
              <div className="max-w-sm">
                <Wordmark size="lg" />
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-[var(--color-on-night-soft)]">
                  Woman Representative, Nandi County. Serving the six
                  sub-counties and thirty wards.
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
              August 2026. Figures on this site carry their source; those not
              yet counted are marked as such
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

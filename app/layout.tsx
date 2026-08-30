import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
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
  { href: "/about", label: "About" },
  { href: "/boso", label: "BOSO Supercup" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${instrument.variable} ${manrope.variable} ${jetbrains.variable}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>

        <header className="border-b border-[var(--color-rule)]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <Link href="/" className="group flex flex-col gap-1">
              <span className="display text-[1.375rem] leading-none">
                Cynthia Muge
              </span>
              <span
                aria-hidden
                className="h-[2px] w-14 bg-[var(--color-murram)] transition-[width] duration-200 ease-out group-hover:w-20"
              />
            </Link>
            <nav aria-label="Main">
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] font-medium text-[var(--color-soft)] transition-colors duration-150 hover:text-[var(--color-murram)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="mt-28 border-t-2 border-[var(--color-ink)]">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-wrap justify-between gap-10">
              <div className="max-w-sm">
                <p className="display text-[1.375rem]">Cynthia Muge</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
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
                        className="text-[0.9375rem] text-[var(--color-soft)] hover:text-[var(--color-murram)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p className="meta mt-10 border-t border-[var(--color-rule)] pt-5">
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

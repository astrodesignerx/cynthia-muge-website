import type { Metadata } from "next";
import { ImageBand, SplitHero } from "@/components/Page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Office of the Woman Representative, Nandi County.",
};

const routes = [
  {
    k: "Office",
    v: "Office of the Woman Representative, Nandi County. Kapsabet.",
  },
  {
    k: "BOSO registration",
    v: "Team registration runs through the ward coordinator.",
  },
  {
    k: "Programmes",
    v: "Kahawa na Mama, Elimu Ni Mwangaza, and empowerment groups.",
  },
  { k: "Press", v: "Media enquiries go to the office." },
];

const subCounties = [
  "Nandi Hills",
  "Aldai",
  "Mosop",
  "Chesumei",
  "Emgwen",
  "Tinderet",
];

const socials = [
  {
    name: "Facebook",
    handle: "Official Facebook page",
    href: "https://www.facebook.com/profile.php?id=100083334182719",
    ink: (
      <path d="M13.5 21v-8h2.7l.5-3h-3.2V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.6-.1-1.5-.2-2.5-.2-2.6 0-4.2 1.5-4.2 4.3V10H6.8v3h2.9v8h3.8z" />
    ),
  },
  {
    name: "TikTok",
    handle: "@hon_cynthia_muge",
    href: "https://www.tiktok.com/@hon_cynthia_muge",
    ink: (
      <path d="M16.5 3c.2 1.6.9 2.7 2.5 3v2.9c-1 0-1.8-.3-2.5-.8v4.9C16.5 16.6 14.6 18 12 18c-2.4 0-4.1-1.7-4.1-4 0-2.4 1.8-4 4.2-4 .3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-.9 0-1.6.7-1.6 1.5s.7 1.6 1.6 1.6c1 0 1.8-.9 1.8-2.1V3h2.6z" />
    ),
  },
  {
    name: "X",
    handle: "@Muge_Cynthia",
    href: "https://x.com/Muge_Cynthia",
    ink: <path d="M3 3l7.6 9.4L3.4 21h2.6l5.9-6.9L17.6 21H21l-7.9-9.7L20.2 3h-2.6l-5.4 6.3L6.4 3H3z" />,
  },
];

export default function Contact() {
  return (
    <>
      <SplitHero
        eyebrow="Get in touch"
        title="Contact"
        lead="Six sub-counties. Thirty wards."
        img="/img/coffee-handover-b.jpg"
        alt="A Kahawa na Mama distribution point in Nandi County"
        pos="50% 45%"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <dl>
            {routes.map((r) => (
              <div
                key={r.k}
                className="group grid gap-4 border-b border-[var(--color-rule)] py-6 transition-colors duration-200 first:border-t hover:bg-[var(--color-sunk)]/60 sm:grid-cols-[11rem_1fr]"
              >
                <dt className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--color-murram)] transition-colors duration-200 group-hover:text-[var(--color-amber)]">
                  {r.k}
                </dt>
                <dd className="leading-relaxed text-[var(--color-soft)]">
                  {r.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="rounded-sm bg-[var(--color-sunk)] p-8">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--color-faint)]">
              Sub-counties
            </p>
            <ul className="mt-5 grid gap-2.5">
              {subCounties.map((s) => (
                <li
                  key={s}
                  className="flex items-baseline gap-3 text-[1.0625rem] font-semibold"
                >
                  <span
                    aria-hidden
                    className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-murram)]"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="night">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="label text-[var(--color-gold)]">Find the office online</p>
          <h2 className="display mt-4 text-[2.25rem] leading-[1.06] text-[var(--color-on-night)] sm:text-[2.75rem]">
            Stay close to the work.
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-sm border border-[var(--color-night-rule)] bg-[var(--color-night-2)] p-5 transition-colors duration-200 hover:border-[var(--color-gold)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[var(--color-night)] text-[var(--color-gold)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-3">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                      {s.ink}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[1.0625rem] font-semibold text-[var(--color-on-night)]">
                      {s.name}
                    </span>
                    <span className="label mt-1 block truncate text-[var(--color-on-night-soft)]">
                      {s.handle}
                    </span>
                  </span>
                  <span className="label ml-auto text-[var(--color-on-night-soft)] transition-colors duration-200 group-hover:text-[var(--color-gold)]">
                    Follow &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImageBand
        img="/img/market.jpg"
        pos="50% 38%"
        eyebrow="Nandi County"
        title="Kapsabet, and every ward beyond it."
      />
    </>
  );
}

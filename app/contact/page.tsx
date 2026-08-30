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
                className="grid gap-4 border-b border-[var(--color-rule)] py-6 first:border-t sm:grid-cols-[11rem_1fr]"
              >
                <dt className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--color-murram)]">
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

      <ImageBand
        img="/img/market.jpg"
        pos="50% 38%"
        eyebrow="Nandi County"
        title="Kapsabet, and every ward beyond it."
      />
    </>
  );
}

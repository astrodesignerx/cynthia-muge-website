import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Office of the Woman Representative, Nandi County.",
};

const routes = [
  {
    k: "Constituency office",
    v: "Office of the Woman Representative, Nandi County, Kapsabet.",
  },
  {
    k: "BOSO registration",
    v: "Team registration runs through your ward coordinator. Contact the office and you will be put in touch.",
  },
  {
    k: "Programme enquiries",
    v: "For Kahawa na Mama, Elimu Ni Mwangaza or empowerment groups, contact the office with your ward and group name.",
  },
  {
    k: "Press",
    v: "Journalists checking a figure published on this site should quote the source listed beside it. For anything further, contact the office directly.",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-14">
        <p className="eyebrow">Get in touch</p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">Contact</h1>
        <p className="mt-4 max-w-[54ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          The office covers all six sub-counties and thirty wards of Nandi.
        </p>
      </header>

      <dl className="pt-12">
        {routes.map((r) => (
          <div
            key={r.k}
            className="grid gap-4 border-b border-[var(--color-rule)] py-5 sm:grid-cols-[11rem_1fr]"
          >
            <dt className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--color-faint)]">
              {r.k}
            </dt>
            <dd className="leading-relaxed text-[var(--color-soft)]">{r.v}</dd>
          </div>
        ))}
      </dl>

      <p className="meta mt-8 max-w-[58ch]">
        Contact numbers and email are held by the office and should be added
        here before this page goes live.
      </p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volleyball — rules and registration",
  description: "Register your volleyball team for the BOSO Supercup, Nandi County.",
};

const rules = [
  "Teams register by ward. One entry per team, per ward.",
  "Registration is free. No fee is payable to any person at any stage.",
  "Squad lists must be submitted before the first fixture and cannot be changed after the ward stage closes.",
  "Players must be resident in, or originate from, the ward they represent.",
  "Men's and women's competitions run in parallel with the same rules and the same prize structure.",
  "Ward winners progress to the sub-county stage, and sub-county winners to the county final.",
];

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <nav aria-label="Breadcrumb" className="pt-10">
        <Link href="/boso" className="meta hover:text-[var(--color-murram)]">
          &larr; BOSO Supercup
        </Link>
      </nav>

      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-6">
        <p className="eyebrow">BOSO Supercup</p>
        <h1 className="display mt-4 text-[3rem]">Volleyball</h1>
        <p className="mt-4 max-w-[54ch] text-[1.125rem] leading-relaxed text-[var(--color-soft)]">
          Rules and registration for the volleyball competition.
        </p>
      </header>

      <section className="pt-12">
        <h2 className="display text-[2.125rem]">Rules</h2>
        <ol className="mt-6 border-t border-[var(--color-rule)]">
          {rules.map((r, i) => (
            <li
              key={i}
              className="grid grid-cols-[2rem_1fr] gap-4 border-b border-[var(--color-rule)] py-4"
            >
              <span className="font-mono text-[0.75rem] font-medium tabular-nums text-[var(--color-murram)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed text-[var(--color-soft)]">{r}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 rounded-r border-l-[3px] border-[var(--color-murram)] bg-[var(--color-murram-wash)] px-7 py-6">
        <h2 className="display text-[1.625rem]">Register your team</h2>
        <p className="mt-2 max-w-[52ch] leading-relaxed text-[var(--color-soft)]">
          Registration is handled by the ward coordinator. Contact the office and
          you will be put in touch with the coordinator for your ward.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded bg-[var(--color-murram)] px-6 py-3 text-[0.9375rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--color-murram-deep)]"
        >
          Contact the office
        </Link>
      </section>
    </div>
  );
}

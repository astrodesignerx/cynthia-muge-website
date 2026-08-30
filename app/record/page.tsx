import type { Metadata } from "next";
import Link from "next/link";
import { programmes, countyFinance } from "@/content/programmes";
import { SourceLine } from "@/components/Figures";

export const metadata: Metadata = {
  title: "The record",
  description:
    "Kahawa na Mama, Elimu Ni Mwangaza, the BOSO Supercup, and health and water projects across Nandi County.",
};

export default function RecordPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-14">
        <p className="eyebrow">Office of the Woman Representative, Nandi County</p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">The record</h1>
        <p className="mt-4 max-w-[58ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          Four programmes, where each one reached, and what is still being
          counted.
        </p>
      </header>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {programmes.map((p) => {
          const verified = p.figures.filter((f) => f.status === "verified");
          const open = p.gaps.length;
          return (
            <li key={p.slug}>
              <Link
                href={`/record/${p.slug}`}
                className="group flex h-full flex-col rounded border border-[var(--color-rule)] p-7 transition-colors duration-150 hover:border-[var(--color-murram)]"
              >
                <p className="meta">{p.status}</p>
                <h2 className="display mt-2 text-[1.625rem] group-hover:text-[var(--color-murram)]">
                  {p.name}
                </h2>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                  {p.oneLine}
                </p>
                <p className="meta mt-5 border-t border-[var(--color-rule)] pt-3">
                  {verified.length} sourced{" "}
                  {verified.length === 1 ? "figure" : "figures"} · {open} open{" "}
                  {open === 1 ? "question" : "questions"}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* County finance explainer — an official, checkable argument */}
      <section className="mt-20 border-t border-[var(--color-rule)] pt-12">
        <p className="eyebrow">Context</p>
        <h2 className="display mt-3 text-[2.125rem]">
          Where Nandi County money goes
        </h2>
        <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
          {countyFinance.total} in {countyFinance.year}, at{" "}
          {countyFinance.absorption} absorption.
        </p>

        <div className="mt-7 flex h-24 overflow-hidden rounded">
          <div
            className="flex flex-col justify-center bg-[var(--color-rule-firm)] px-6"
            style={{ flex: countyFinance.recurrent.flex }}
          >
            <p className="display text-[1.375rem] text-[var(--color-ink)]">
              {countyFinance.recurrent.amount}
            </p>
            <p className="text-[0.8125rem] text-[var(--color-ink)]">
              Recurrent — {countyFinance.recurrent.ofBudget} of budget
            </p>
          </div>
          <div
            className="flex flex-col justify-center bg-[var(--color-leaf)] px-6"
            style={{ flex: countyFinance.development.flex }}
          >
            <p className="display text-[1.375rem] text-[#F4FAF6]">
              {countyFinance.development.amount}
            </p>
            <p className="text-[0.8125rem] text-[#F4FAF6]">
              Development — {countyFinance.development.ofBudget}
            </p>
          </div>
        </div>

        <div className="max-w-[52ch]">
          <SourceLine source={countyFinance.source} />
        </div>
      </section>
    </div>
  );
}

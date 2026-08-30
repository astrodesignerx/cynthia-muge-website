import type { Metadata } from "next";
import Link from "next/link";
import { getProgramme } from "@/content/programmes";
import { FigureGrid } from "@/components/Figures";

export const metadata: Metadata = {
  title: "BOSO Supercup",
  description:
    "Football and volleyball across all 30 wards of Nandi County. Team registration is open.",
};

export default function Boso() {
  const p = getProgramme("boso-supercup");
  return (
    <div className="mx-auto max-w-5xl px-6">
      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-14">
        <p className="eyebrow">Nandi County</p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">BOSO Supercup</h1>
        <p className="mt-4 max-w-[56ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          Football and volleyball, men&rsquo;s and women&rsquo;s, in every ward
          of Nandi. Registration is free and open.
        </p>
      </header>

      <div className="grid gap-5 pt-12 sm:grid-cols-2">
        <Link
          href="/boso/football"
          className="group rounded border border-[var(--color-rule)] p-8 transition-colors duration-150 hover:border-[var(--color-murram)]"
        >
          <h2 className="display text-[1.875rem] group-hover:text-[var(--color-murram)]">
            Football League
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-soft)]">
            Register your team for the league and compete for county honours.
          </p>
          <p className="meta mt-5">Free to join · Rules and registration &rarr;</p>
        </Link>
        <Link
          href="/boso/volleyball"
          className="group rounded border border-[var(--color-rule)] p-8 transition-colors duration-150 hover:border-[var(--color-murram)]"
        >
          <h2 className="display text-[1.875rem] group-hover:text-[var(--color-murram)]">
            Volleyball Tournament
          </h2>
          <p className="mt-2 leading-relaxed text-[var(--color-soft)]">
            Register your volleyball team for the county championships.
          </p>
          <p className="meta mt-5">Free to join · Rules and registration &rarr;</p>
        </Link>
      </div>

      {p && (
        <section className="pt-16">
          <h2 className="display text-[2.125rem]">Where it has reached</h2>
          <p className="mt-2 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            The ward stage is complete. Sub-county rounds run from September, and
            the county final is in December 2026.
          </p>
          <div className="mt-6">
            <FigureGrid figures={p.figures} />
          </div>
          <Link
            href="/record/boso-supercup"
            className="mt-6 inline-block text-[0.9375rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
          >
            See the full BOSO record, including what has not been measured
          </Link>
        </section>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { declaration, pillars } from "@/content/programmes";
import { ImageBand } from "@/components/Page";
import { SourceLine } from "@/components/Figures";

export const metadata: Metadata = {
  title: "The six pillars",
  description:
    "Road Network, Education, Health, Water, Wealth Creation, Governance.",
};

export default function Pillars() {
  return (
    <>
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:pt-24">
          <p className="eyebrow">Nandi County, 2027</p>
          <h1 className="display mt-5 max-w-[12ch] text-[3.5rem] leading-[0.95] sm:text-[4.5rem] lg:text-[5.25rem]">
            The six pillars
          </h1>
          <p className="mt-7 max-w-[46ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
            Road Network. Education. Health. Water. Wealth Creation.
            Governance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <ol className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <li
              key={p.n}
              className="border-t-2 border-[var(--color-murram)] pt-5"
            >
              <span className="font-mono text-[0.75rem] font-medium tabular-nums text-[var(--color-murram)]">
                {p.n}
              </span>
              <h2 className="display mt-2 text-[1.875rem] leading-tight">
                {p.name}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-soft)]">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <ImageBand
        img="/img/coffee-crowd.jpg"
        pos="50% 45%"
        eyebrow="In her words"
        title="Fear is a luxury we cannot afford."
        body={declaration.quote}
      >
        <Link
          href="/record"
          className="mt-8 inline-block rounded-sm bg-white px-6 py-3 text-[0.9375rem] font-bold text-[var(--color-ink)] transition-colors duration-200 hover:bg-[#F0EFE9]"
        >
          The record so far
        </Link>
      </ImageBand>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8">
        <SourceLine source={declaration.source} />
      </section>
    </>
  );
}

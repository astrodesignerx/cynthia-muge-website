import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programmes, getProgramme } from "@/content/programmes";
import {
  FigureGrid,
  CoverageChart,
  GapCards,
  SourceList,
  Section,
} from "@/components/Figures";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) return { title: "Not found" };
  return { title: p.name, description: p.oneLine };
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) notFound();

  return (
    <article>
      <div className="mx-auto max-w-4xl px-6">
      <nav aria-label="Breadcrumb" className="pt-10">
        <Link
          href="/record"
          className="meta hover:text-[var(--color-murram)]"
        >
          &larr; The record
        </Link>
      </nav>

      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-6">
        <p className="eyebrow">
          Programme record <span className="sep" aria-hidden /> Office of the Woman Representative, Nandi
          County
        </p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">{p.name}</h1>
        <p className="mt-4 max-w-[56ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          {p.oneLine}
        </p>
        <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-faint)]">
          <div className="flex gap-2">
            <dt>Started</dt>
            <dd className="text-[var(--color-soft)]">{p.started}</dd>
          </div>
          <div className="flex gap-2">
            <dt>Status</dt>
            <dd className="text-[var(--color-soft)]">{p.status}</dd>
          </div>
          <div className="flex gap-2">
            <dt>Last updated</dt>
            <dd className="text-[var(--color-soft)]">{p.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      </div>

      {p.hero && (
        <figure className="relative mt-10 aspect-[21/9] w-full overflow-hidden bg-[var(--color-sunk)]">
          <Image
            src={p.hero}
            alt={p.heroAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </figure>
      )}

      <div className="mx-auto max-w-4xl px-6">

      <Section title="The figures">
        <FigureGrid figures={p.figures} />
      </Section>

      {p.phases.length > 0 && (
        <Section title="Phases">
          <div className="overflow-x-auto rounded border border-[var(--color-rule)]">
            <table className="w-full min-w-[34rem] border-collapse text-[0.875rem]">
              <thead>
                <tr className="bg-[var(--color-sunk)]">
                  {["Phase", "Period", "Quantity", "Beneficiaries", "Detail"].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="border-b border-[var(--color-rule-firm)] px-4 py-3 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-faint)]"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {p.phases.map((ph) => (
                  <tr
                    key={ph.name}
                    className="border-b border-[var(--color-rule)] last:border-0"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3 text-left font-bold"
                    >
                      {ph.name}
                    </th>
                    <td className="px-4 py-3 text-[var(--color-soft)]">
                      {ph.period}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums">
                      {ph.quantity}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums">
                      {ph.beneficiaries}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-soft)]">
                      {ph.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {p.coverage.length > 0 && (
        <Section title="Where it reached">
          <CoverageChart rows={p.coverage} note={p.coverageNote} />
        </Section>
      )}

      {p.distinctive && (
        <Section title="What makes it different">
          <div className="rounded-sm bg-[var(--color-leaf)] px-9 py-10">
            <h3 className="display text-[2rem] leading-tight text-white">
              {p.distinctive.title}
            </h3>
            <p className="mt-4 max-w-[58ch] leading-relaxed text-[#D6E6DC]">
              {p.distinctive.body}
            </p>
          </div>
        </Section>
      )}

      {p.partners.length > 0 && (
        <Section title="Delivery partners">
          <div className="overflow-x-auto rounded border border-[var(--color-rule)]">
            <table className="w-full min-w-[28rem] border-collapse text-[0.875rem]">
              <thead>
                <tr className="bg-[var(--color-sunk)]">
                  <th
                    scope="col"
                    className="border-b border-[var(--color-rule-firm)] px-4 py-3 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-faint)]"
                  >
                    Partner
                  </th>
                  <th
                    scope="col"
                    className="border-b border-[var(--color-rule-firm)] px-4 py-3 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-faint)]"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.partners.map((pt) => (
                  <tr
                    key={pt.name}
                    className="border-b border-[var(--color-rule)] last:border-0"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3 text-left font-bold"
                    >
                      {pt.name}
                    </th>
                    <td className="px-4 py-3 text-[var(--color-soft)]">
                      {pt.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

        {/* Required. See BUILD-BRIEF.md section 3. This section is what makes the rest credible. */}
      <Section title="Still to be counted">
        <GapCards gaps={p.gaps} />
      </Section>

      <Section title="Sources">
        <SourceList sources={p.sources} />
      </Section>
      </div>
    </article>
  );
}

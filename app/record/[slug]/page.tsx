import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PhotoStrip } from "@/components/Viz";
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
      <header className="night relative isolate flex min-h-[30rem] items-end overflow-hidden lg:min-h-[36rem]">
        {p.hero && (
          <Image
            src={p.hero}
            alt={p.heroAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-top"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/85 to-[#0C1420]/45"
        />
        <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-24">
          <nav aria-label="Breadcrumb">
            <Link
              href="/record"
              className="label text-[var(--color-on-night-soft)] transition-colors duration-200 hover:text-[var(--color-gold)]"
            >
              &larr; The record
            </Link>
          </nav>
          <h1 className="display mt-10 max-w-[16ch] text-[3rem] leading-[0.97] text-white sm:text-[4rem] lg:text-[4.75rem]">
            {p.name}
          </h1>
          <p className="mt-5 max-w-[56ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            {p.oneLine}
          </p>
          <dl className="label mt-9 flex flex-wrap gap-x-9 gap-y-2 text-[var(--color-on-night-soft)]">
            <div className="flex gap-2">
              <dt>Started</dt>
              <dd className="text-[var(--color-gold)]">{p.started}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Status</dt>
              <dd className="text-[var(--color-gold)]">{p.status}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Updated</dt>
              <dd className="text-[var(--color-gold)]">{p.lastUpdated}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">

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
      </div>

      {p.gallery && p.gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-14">
          <p className="eyebrow">Photographs</p>
          <div className="mt-6">
            <PhotoStrip images={p.gallery} height="19rem" />
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-6">

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

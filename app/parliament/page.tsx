import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { elected, oversight, parliament } from "@/content/programmes";
import { NightHead, Stat } from "@/components/Viz";
import { SourceLine } from "@/components/Figures";
import { NetField } from "@/components/NetField";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "In Parliament",
  description:
    "Committee oversight, public positions, and the questions Cynthia Muge has carried from Nandi into Parliament.",
};

const tagTone: Record<string, string> = {
  Committee: "bg-[var(--color-leaf-wash)] text-[var(--color-leaf)]",
  Position: "bg-[var(--color-murram-wash)] text-[var(--color-murram)]",
  Commitment: "bg-[var(--color-amber-wash)] text-[var(--color-amber)]",
  Convening: "bg-[var(--color-sunk)] text-[var(--color-soft)]",
};

export default function Parliament() {
  return (
    <>
      <section className="night relative isolate flex min-h-[28rem] items-end overflow-hidden lg:min-h-[34rem]">
        <Image
          src="/img/state-house.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 kenburns object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/86 to-[#0C1420]/45"
        />
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-28">
          <p
            className="label rise text-[var(--color-gold)]"
            style={{ animationDelay: "120ms" }}
          >
            The National Assembly, 13th Parliament
          </p>
          <h1
            className="display rise mt-6 max-w-[13ch] text-[3rem] leading-[0.96] text-white sm:text-[4rem] lg:text-[4.75rem]"
            style={{ animationDelay: "200ms" }}
          >
            In Parliament
          </h1>
          <p
            className="rise mt-6 max-w-[52ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]"
            style={{ animationDelay: "300ms" }}
          >
            Committee oversight, public positions, and the questions she has
            carried from Nandi into Parliament.
          </p>
        </div>
      </section>

      <section className="night border-t border-[var(--color-night-rule)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="label text-[var(--color-gold)]">Work in Parliament</p>
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {parliament.committees.map((c, i) => (
              <li
                key={c}
                className="border-t border-[var(--color-night-rule)] pt-4 text-[1.0625rem] leading-snug text-[var(--color-on-night)] transition-colors duration-200 hover:text-[var(--color-gold)]"
              >
                <Reveal delay={i * 50}>{c}</Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Oversight. The other half of the job, and the strongest block here. */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-x-16 gap-y-6 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Oversight</p>
            <h2 className="display mt-4 max-w-[13ch] text-[2.5rem] leading-[1.02] sm:text-[3.25rem]">
              Asking the government what it did with the money.
            </h2>
          </div>
          <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--color-soft)]">
            {oversight.lead}
          </p>
        </div>

        {/* The SHA case */}
        <Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-sunk)] lg:sticky lg:top-28 lg:self-start">
              <Image
                src="/img/portrait-studio.jpg"
                alt="Cynthia Muge, Woman Representative for Nandi County"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
                style={{ objectPosition: "50% 22%" }}
              />
            </div>

            <div>
              <span className="inline-block rounded-sm bg-[var(--color-leaf-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-leaf)]">
                Committee on Health
              </span>
              <h3 className="display mt-5 max-w-[20ch] text-[2rem] leading-[1.08] sm:text-[2.375rem]">
                {oversight.headline.title}
              </h3>
              <p className="mt-6 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
                {oversight.headline.body}
              </p>

              <p className="display my-9 max-w-[24ch] border-l-2 border-[var(--color-murram)] pl-6 text-[1.5rem] leading-[1.24] sm:text-[1.75rem]">
                {oversight.headline.pull}
              </p>

              <p className="max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
                {oversight.headline.body2}
              </p>
              <SourceLine source={oversight.headline.source} />
            </div>
          </div>
        </Reveal>

        {/* The floor record, unflattering parts included */}
        <div className="mt-20 border-t-2 border-[var(--color-ink)] pt-10">
          <p className="eyebrow">The floor record</p>
          <dl className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {oversight.floor.map((f, i) => (
              <Reveal key={f.label} delay={i * 60}>
                <div
                  className={
                    f.gap
                      ? "border-l-2 border-[var(--color-ember)] pl-5"
                      : "border-l-2 border-[var(--color-rule-firm)] pl-5"
                  }
                >
                  <dd
                    className={`numeral text-[2.5rem] sm:text-[3rem] ${
                      f.gap
                        ? "text-[var(--color-ember)]"
                        : "text-[var(--color-murram)]"
                    }`}
                  >
                    {f.value}
                  </dd>
                  <dt className="label mt-3 max-w-[22ch] leading-relaxed text-[var(--color-faint)]">
                    {f.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
          <p className="mt-10 max-w-[68ch] leading-relaxed text-[var(--color-soft)]">
            {oversight.floorNote}
          </p>
          <SourceLine source={oversight.floorSource} />
        </div>

        {/* Shorter interventions */}
        <div className="mt-20">
          <p className="eyebrow">Also raised</p>
          <ul className="mt-8 grid gap-px bg-[var(--color-rule)] sm:grid-cols-2">
            {oversight.items.map((it, i) => (
              <li key={it.title} className="bg-[var(--color-paper)] p-7">
                <Reveal delay={i * 50}>
                  <span className="numeral text-[1.25rem] text-[var(--color-murram)]">
                    {it.year}
                  </span>
                  <h3 className="display mt-2 text-[1.375rem] leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                    {it.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* The honest note about imagery */}
        <div className="mt-12 rounded-sm border border-dashed border-[var(--color-rule-firm)] p-8">
          <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            Gap
          </span>
          <h3 className="display mt-4 text-[1.5rem]">{oversight.gap.title}</h3>
          <p className="mt-3 max-w-[60ch] leading-relaxed text-[var(--color-soft)]">
            {oversight.gap.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:pb-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="display text-[2.5rem] leading-tight sm:text-[3rem]">
            On the record
          </h2>
            <p className="meta">{parliament.items.length} entries</p>
        </div>

        <ol className="mt-12 grid gap-0">
          {parliament.items.map((it, i) => (
            <li
              key={it.title}
              className="border-t border-[var(--color-rule)] py-9"
            >
              <Reveal
                delay={i * 50}
                className="grid gap-x-10 gap-y-4 lg:grid-cols-[10rem_1fr]"
              >
                <div>
                  <span className="numeral block text-[1.75rem] text-[var(--color-murram)]">
                    {it.year}
                  </span>
                  <span
                    className={`mt-3 inline-block rounded-sm px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] ${
                      tagTone[it.tag] ?? tagTone.Convening
                    }`}
                  >
                    {it.tag}
                  </span>
                </div>
                <div>
                  <h3 className="display text-[1.75rem] leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-[var(--color-soft)]">
                    {it.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-4 border-t border-[var(--color-rule)] pt-6">
          <SourceLine source={parliament.source} />
        </div>
      </section>

      <section className="night relative isolate overflow-hidden">
        <NetField />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <NightHead
              eyebrow="Elected"
              title="From Kilibwoni Ward to Parliament."
              lead="A ward seat in the County Assembly at twenty-four, running as an independent, then the county's Woman Representative seat in the National Assembly."
            />
            <dl className="grid gap-y-12 sm:grid-cols-3">
              {elected.map((e) => (
                <Stat
                  key={e.label}
                  scale="sm"
                  value={e.value}
                  label={e.label}
                  source={e.source}
                />
              ))}
            </dl>
            <p className="label mt-8 max-w-[60ch] leading-relaxed text-[var(--color-on-night-soft)]">
              Sources: IEBC and Office of the Woman Representative, 2017–2026. Full citations on the programme pages.
            </p>
          </div>
          <Link
            href="/pillars"
            className="mt-12 inline-block rounded-sm bg-[var(--color-gold)] px-7 py-3.5 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
          >
            The six pillars
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { elected, parliament } from "@/content/programmes";
import { NightHead, Stat } from "@/components/Viz";
import { SourceLine } from "@/components/Figures";
import { NetField } from "@/components/NetField";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "In Parliament",
  description:
    "Cynthia Muge's committee work, public positions, and service to Nandi in Parliament.",
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
            Committee work, public positions, and the questions she has carried
            from Nandi into Parliament.
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
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

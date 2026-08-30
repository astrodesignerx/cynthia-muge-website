import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { parliament } from "@/content/programmes";
import { NightHead, Stat } from "@/components/Viz";
import { SourceLine } from "@/components/Figures";

export const metadata: Metadata = {
  title: "In Parliament",
  description:
    "Committee work and positions taken in the National Assembly, and on public questions in Nandi.",
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
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/86 to-[#0C1420]/45"
        />
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-28">
          <p className="label text-[var(--color-gold)]">
            The National Assembly, 13th Parliament
          </p>
          <h1 className="display mt-6 max-w-[13ch] text-[3rem] leading-[0.96] text-white sm:text-[4rem] lg:text-[4.75rem]">
            In Parliament
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            Committee work, and positions taken on questions that reached Nandi
            before they reached the floor.
          </p>
        </div>
      </section>

      <section className="night border-t border-[var(--color-night-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label text-[var(--color-gold)]">Committees</p>
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {parliament.committees.map((c) => (
              <li
                key={c}
                className="border-t border-[var(--color-night-rule)] pt-4 text-[1.0625rem] leading-snug text-[var(--color-on-night)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="display text-[2.5rem] leading-tight sm:text-[3rem]">
            On the record
          </h2>
          <p className="meta">{parliament.items.length} items</p>
        </div>

        <ol className="mt-12 grid gap-0">
          {parliament.items.map((it) => (
            <li
              key={it.title}
              className="grid gap-x-10 gap-y-4 border-t border-[var(--color-rule)] py-9 lg:grid-cols-[10rem_1fr]"
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
            </li>
          ))}
        </ol>

        <div className="mt-4 border-t border-[var(--color-rule)] pt-6">
          <SourceLine source={parliament.source} />
        </div>
      </section>

      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <NightHead
              eyebrow="Elected"
              title="Two assemblies, ten years."
              lead="A ward seat in the County Assembly at twenty-four, running as an independent, then the county's Woman Representative seat in the National Assembly."
            />
            <dl className="grid gap-y-12 sm:grid-cols-3">
              <Stat scale="sm" value="2017" label="County Assembly" />
              <Stat scale="sm" value="2022" label="National Assembly" />
              <Stat scale="sm" value="275,500" label="Votes in 2022" />
            </dl>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { declaration, pillars } from "@/content/programmes";
import { NightHead } from "@/components/Viz";

export const metadata: Metadata = {
  title: "The six pillars",
  description:
    "Road Network, Education, Health, Water, Wealth Creation, Governance.",
};

/** A photograph for each pillar, drawn from work already on the record. */
const art: Record<string, { img: string; pos: string }> = {
  "Road Network": { img: "/img/boda-shade-lelmokwo.jpg", pos: "50% 55%" },
  Education: { img: "/img/scholars-line.jpg", pos: "50% 35%" },
  Health: { img: "/img/health-scanner.jpg", pos: "50% 40%" },
  Water: { img: "/img/water-c.jpg", pos: "50% 45%" },
  "Wealth Creation": { img: "/img/coffee-spouses.jpg", pos: "50% 45%" },
  Governance: { img: "/img/baraza-forum.jpg", pos: "50% 45%" },
};

export default function Pillars() {
  return (
    <>
      <section className="night relative isolate flex min-h-[30rem] items-end overflow-hidden lg:min-h-[36rem]">
        <Image
          src="/img/baraza-a.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/86 to-[#0C1420]/45"
        />
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
          <p className="label text-[var(--color-gold)]">Nandi County, 2027</p>
          <h1 className="display mt-6 max-w-[11ch] text-[3.5rem] leading-[0.94] text-white sm:text-[4.75rem] lg:text-[5.75rem]">
            The six pillars
          </h1>
          <p className="mt-7 max-w-[50ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            Road Network. Education. Health. Water. Wealth Creation.
            Governance.
          </p>
        </div>
      </section>

      {/* Each pillar, alternating side */}
      {pillars.map((p, i) => {
        const a = art[p.name];
        const flip = i % 2 === 1;
        return (
          <section
            key={p.n}
            className={
              i % 2 === 1
                ? "bg-[var(--color-sunk)]"
                : "bg-[var(--color-paper)]"
            }
          >
            <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
              <div className={flip ? "lg:order-2" : undefined}>
                <span className="numeral text-[3.5rem] text-[var(--color-murram)]">
                  {p.n}
                </span>
                <h2 className="display mt-4 text-[2.5rem] leading-tight sm:text-[3rem]">
                  {p.name}
                </h2>
                <p className="mt-5 max-w-[46ch] text-[1.125rem] leading-relaxed text-[var(--color-ink)]">
                  {p.body}
                </p>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-[var(--color-soft)]">
                  {p.detail}
                </p>

                <dl className="mt-8 max-w-[52ch] border-t border-[var(--color-rule)]">
                  <div className="grid gap-1 border-b border-[var(--color-rule)] py-4 sm:grid-cols-[9rem_1fr] sm:gap-5">
                    <dt className="label text-[var(--color-leaf)]">
                      Already
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.already}
                    </dd>
                  </div>
                  <div className="grid gap-1 border-b border-[var(--color-rule)] py-4 sm:grid-cols-[9rem_1fr] sm:gap-5">
                    <dt className="label text-[var(--color-amber)]">
                      Open question
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.question}
                    </dd>
                  </div>
                </dl>
              </div>
              {a && (
                <figure
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-sunk)] lg:sticky lg:top-28 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={a.img}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                    style={{ objectPosition: a.pos }}
                  />
                </figure>
              )}
            </div>
          </section>
        );
      })}

      {/* Declaration */}
      <section className="night relative isolate overflow-hidden">
        <Image
          src="/img/listening.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#0C1420]/84" />
        <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28">
          <NightHead eyebrow="In her words" title="Fear is a luxury we cannot afford." />
          <blockquote className="mt-8 max-w-[58ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            <p>&ldquo;{declaration.quote}&rdquo;</p>
          </blockquote>
          <p className="label mt-8 border-t border-[var(--color-night-rule)] pt-5 text-[var(--color-on-night-soft)]">
            {declaration.source.publisher}, {declaration.source.date}
          </p>
          <Link
            href="/record"
            className="mt-10 inline-block rounded-sm bg-[var(--color-gold)] px-7 py-3.5 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
          >
            The record so far
          </Link>
        </div>
      </section>
    </>
  );
}

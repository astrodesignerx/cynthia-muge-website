import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { declaration, pillars } from "@/content/programmes";
import { NightHead } from "@/components/Viz";
import { Reveal } from "@/components/Motion";
import { ScrollQuote } from "@/components/ScrollQuote";

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
  "Wealth Creation": { img: "/img/coffee-spouses.jpg", pos: "50% 45%" },
  Governance: { img: "/img/baraza-forum.jpg", pos: "50% 45%" },
};

/** Water is four boreholes, so it takes four frames in the same square. */
const waterGrid = [
  { src: "/img/water-c.jpg", alt: "A borehole under construction" },
  { src: "/img/water-d.jpg", alt: "Drilling at a school compound" },
  { src: "/img/water-a.jpg", alt: "A completed borehole head" },
  { src: "/img/water-b.jpg", alt: "Water drawn at the point of supply" },
];

/** Keeps the chip link target and the section id the same string. */
const slug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

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
          className="-z-10 kenburns object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/86 to-[#0C1420]/45"
        />
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
              <p
                className="label rise text-[var(--color-gold)]"
                style={{ animationDelay: "120ms" }}
              >
                Nandi County, 2027
              </p>
              <h1
                className="display rise mt-6 max-w-[11ch] text-[3.5rem] leading-[0.94] text-white sm:text-[4.75rem] lg:text-[5.75rem]"
                style={{ animationDelay: "200ms" }}
              >
                The six pillars
              </h1>
              <p
                className="rise mt-7 max-w-[50ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]"
                style={{ animationDelay: "300ms" }}
              >
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
            id={slug(p.name)}
            className={
              "scroll-mt-24 " +
              (i % 2 === 1
                ? "bg-[var(--color-sunk)]"
                : "bg-[var(--color-paper)]")
            }
          >
            <Reveal delay={i * 40}>
            <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
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
                      Already underway
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.already}
                    </dd>
                  </div>
                  <div className="grid gap-1 border-b border-[var(--color-rule)] py-4 sm:grid-cols-[9rem_1fr] sm:gap-5">
                    <dt className="label text-[var(--color-amber)]">
                       The next responsibility
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.question}
                    </dd>
                  </div>
                </dl>
              </div>
              {p.name === "Water" ? (
                <div
                  className={`grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-1.5 lg:sticky lg:top-28 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  {waterGrid.map((im) => (
                    <figure
                      key={im.src}
                      className="group relative overflow-hidden rounded-sm bg-[var(--color-sunk)]"
                    >
                      <Image
                        src={im.src}
                        alt={im.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 23vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </figure>
                  ))}
                </div>
              ) : (
                a && (
                  <figure
                    className={`group relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-sunk)] lg:sticky lg:top-28 ${
                      flip ? "lg:order-1" : ""
                    }`}
                  >
                    <Image
                      src={a.img}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      style={{ objectPosition: a.pos }}
                    />
                  </figure>
                )
              )}
            </div>
            </Reveal>
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
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <NightHead eyebrow="In her words" title="A practical agenda for Nandi." />
          <blockquote className="mt-8 max-w-[58ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            <ScrollQuote text={`\u201C${declaration.quote}\u201D`} />
          </blockquote>
          <p className="label mt-8 border-t border-[var(--color-night-rule)] pt-5 text-[var(--color-on-night-soft)]">
            {declaration.source.publisher}, {declaration.source.date}
          </p>
          <Link
            href="/record"
            className="mt-10 inline-block rounded-sm bg-[var(--color-gold)] px-7 py-3.5 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
          >
            See the work so far
          </Link>
        </div>
      </section>
    </>
  );
}

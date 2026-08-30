import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bosoFunnel, wards } from "@/content/programmes";
import { Funnel, NightHead, PhotoStrip, Stat, WardGrid } from "@/components/Viz";

export const metadata: Metadata = {
  title: "BOSO Supercup",
  description:
    "Football and volleyball across all thirty wards of Nandi County. Registration is free.",
};

const comps = [
  {
    href: "/boso/football",
    name: "Football",
    img: "/img/football.jpg",
    pos: "50% 45%",
    body: "Ward, sub-county and county rounds.",
  },
  {
    href: "/boso/volleyball",
    name: "Volleyball",
    img: "/img/volley.jpg",
    pos: "50% 45%",
    body: "County championships.",
  },
];

const prizes = [
  { place: "1st", men: "KSh 20,000", women: "KSh 20,000" },
  { place: "2nd", men: "KSh 15,000", women: "KSh 15,000" },
  { place: "3rd", men: "KSh 10,000", women: "KSh 10,000" },
];

const strip = [
  { src: "/img/boso-prize-a.jpg", alt: "A ward champion collecting prize money", pos: "50% 40%" },
  { src: "/img/boso-terraces.jpg", alt: "Spectators at a ward final", pos: "50% 45%" },
  { src: "/img/boso-crowd.jpg", alt: "A crowd gathered for the ward stage", pos: "50% 45%" },
  { src: "/img/boso-prize-b.jpg", alt: "Prize money handed over at the close of a ward round", pos: "50% 40%" },
];

export default function Boso() {
  return (
    <>
      <section className="night relative isolate flex min-h-[32rem] items-end overflow-hidden lg:min-h-[40rem]">
        <Image
          src="/img/boso-terraces.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 42%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/82 to-[#0C1420]/40"
        />
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
          <p className="label text-[var(--color-gold)]">Nandi County</p>
          <h1 className="display mt-6 max-w-[10ch] text-[3.5rem] leading-[0.92] text-white sm:text-[5rem] lg:text-[6rem]">
            BOSO Supercup
          </h1>
          <p className="mt-7 max-w-[44ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            Football and volleyball in every ward of Nandi. Registration is free
            and open.
          </p>
        </div>
      </section>

      {/* The two competitions */}
      <section className="grid sm:grid-cols-2">
        {comps.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group relative isolate flex min-h-[26rem] items-end overflow-hidden p-9 lg:min-h-[32rem]"
          >
            <Image
              src={c.img}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="-z-10 object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
              style={{ objectPosition: c.pos }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420]/94 via-[#0C1420]/50 to-[#0C1420]/10"
            />
            <div>
              <h2 className="display text-[2.5rem] leading-none text-white lg:text-[3rem]">
                {c.name}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#C3D0DC]">
                {c.body}
              </p>
              <p className="label mt-5 text-[var(--color-gold)]">
                Rules and registration &rarr;
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* The ward stage, as data */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <NightHead
              eyebrow="The ward stage, closed"
              title="Thirty wards, at the same time."
              lead="The first time a talent competition ran simultaneously in every ward of Nandi. Prize money was settled at the close of each ward round rather than held to the end."
            />
            <Funnel steps={bosoFunnel} caption="April to August 2026" />
          </div>

          <div className="mt-20">
            <WardGrid wards={wards} reached={30} caption="Every ward reached" />
          </div>
        </div>
      </section>

      {/* Prize structure */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Per ward</p>
            <h2 className="display mt-4 max-w-[14ch] text-[2.5rem] leading-[1.02] sm:text-[3rem]">
              The same prize, either competition.
            </h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-[var(--color-soft)]">
              Positions one and two go through to the sub-county round.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-[var(--color-rule)]">
            <table className="w-full min-w-[26rem] border-collapse text-[0.9375rem]">
              <thead>
                <tr className="bg-[var(--color-sunk)]">
                  {["Position", "Men", "Women"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-[var(--color-rule-firm)] px-5 py-3.5 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-faint)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prizes.map((r) => (
                  <tr key={r.place} className="border-b border-[var(--color-rule)] last:border-0">
                    <th scope="row" className="px-5 py-4 text-left font-bold">
                      {r.place}
                    </th>
                    <td className="px-5 py-4 tabular-nums text-[var(--color-soft)]">
                      {r.men}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-[var(--color-soft)]">
                      {r.women}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Photographs */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <PhotoStrip images={strip} height="20rem" />
        </div>
      </section>

      {/* Next stage */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <NightHead
            eyebrow="Next"
            title="Sub-county rounds, from September."
            lead="120 teams carry their wards into the sub-county stage. The county final is in December 2026."
          />
          <dl className="mt-14 grid gap-y-12 sm:grid-cols-3 lg:gap-x-12">
            <Stat scale="sm" value="120" label="Teams through" />
            <Stat scale="sm" value="6" label="Sub-county rounds" />
            <Stat scale="sm" value="Dec 2026" label="County final" />
          </dl>
          <Link
            href="/record/boso-supercup"
            className="mt-12 inline-block rounded-sm bg-[var(--color-gold)] px-7 py-3.5 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
          >
            The full BOSO record
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  bosoFunnel,
  countyFinance,
  declaration,
  healthVote,
  pillars,
  programmes,
  wards,
} from "@/content/programmes";
import {
  EvidencePlate,
  Funnel,
  NightHead,
  PhotoStrip,
  Stat,
  WardGrid,
} from "@/components/Viz";

const cards = [
  { slug: "kahawa-na-mama", img: "/img/coffee-crowd.jpg", pos: "50% 45%" },
  { slug: "elimu-ni-mwangaza", img: "/img/scholars-line.jpg", pos: "50% 30%" },
  { slug: "boso-supercup", img: "/img/boso-prize-a.jpg", pos: "50% 40%" },
  { slug: "health-and-infrastructure", img: "/img/ambulance-team.jpg", pos: "50% 40%" },
  { slug: "dairy-value-chain", img: "/img/milk-coolers.jpg", pos: "50% 45%" },
  { slug: "group-empowerment", img: "/img/empowerment-meeting.jpg", pos: "50% 25%" },
];

const strip = [
  { src: "/img/baraza-a.jpg", alt: "A community meeting at Chemamul", pos: "50% 40%" },
  { src: "/img/boso-terraces.jpg", alt: "Spectators at a BOSO ward final", pos: "50% 45%" },
  { src: "/img/coffee-planting.jpg", alt: "Coffee seedlings going into the ground", pos: "50% 50%" },
  { src: "/img/scholars-walk.jpg", alt: "Scholarship students before the KCSE dedication", pos: "50% 35%" },
  { src: "/img/boda-shade-lelmokwo.jpg", alt: "The boda boda shade at Lelmokwo Centre", pos: "50% 50%" },
  { src: "/img/listening.jpg", alt: "A listening session at Himaki", pos: "50% 45%" },
];

export default function Home() {
  return (
    <>
      {/* Hero: photograph first, statement over it */}
      <section className="relative isolate flex min-h-[36rem] items-end overflow-hidden sm:min-h-[42rem] lg:min-h-[46rem]">
        <Image
          src="/img/baraza-b.jpg"
          alt="A community meeting in Nandi County"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 42%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/88 to-[#0C1420]/40"
        />
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-28 lg:pb-24">
          <p className="label rise text-[var(--color-gold)]">
            Woman Representative, Nandi County
          </p>
          <h1 className="display rise mt-6 max-w-[15ch] text-[3.25rem] leading-[0.94] text-white sm:text-[4.5rem] lg:text-[5.75rem]">
            For the women and young people of Nandi.
          </h1>
          <p className="rise mt-8 text-[1.125rem] text-[var(--color-on-night-soft)]">
            Six sub-counties. Thirty wards. One office.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/record"
              className="rounded-sm bg-[var(--color-gold)] px-7 py-3.5 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
            >
              The record
            </Link>
            <Link
              href="/pillars"
              className="rounded-sm border border-white/35 px-7 py-3.5 text-[0.9375rem] font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              The six pillars
            </Link>
          </div>
        </div>
      </section>

      {/* Four years, in numbers */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <NightHead
            eyebrow="Four years on the record"
            title="What the office has counted."
            lead="Each figure below carries its source on the programme page it comes from. Where nothing has been counted, this site says so instead of estimating."
          />
          <dl className="mt-16 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            <Stat
              value="650,000"
              label="Coffee seedlings"
              note="Distributed to roughly 4,000 women across all six sub-counties."
            />
            <Stat
              value="449"
              label="Students on scholarship"
              note="All cohorts. 206 sit KCSE this year."
            />
            <Stat
              value="30 / 30"
              label="Wards reached by BOSO"
              note="846 matches in three months."
            />
            <Stat
              value="KSh 2.7m"
              label="Prize money paid"
              note="Settled at the close of each ward competition."
            />
          </dl>
        </div>
      </section>

      {/* Programmes as photographs */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The record</p>
            <h2 className="display mt-4 max-w-[16ch] text-[2.5rem] leading-[1.02] sm:text-[3.25rem]">
              Six programmes, each with its evidence attached.
            </h2>
          </div>
          <Link
            href="/record"
            className="text-[0.9375rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
          >
            All six, in full
          </Link>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const p = programmes.find((x) => x.slug === c.slug);
            if (!p) return null;
            return (
              <li key={c.slug}>
                <Link
                  href={`/record/${p.slug}`}
                  className="group relative isolate flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-sm p-7 lg:min-h-[28rem]"
                >
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="-z-10 object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05] motion-reduce:transform-none"
                    style={{ objectPosition: c.pos }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420]/95 via-[#0C1420]/45 to-[#0C1420]/5"
                  />
                  <h3 className="display text-[1.875rem] leading-tight text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[#C3D0DC]">
                    {p.oneLine}
                  </p>
                  <p className="label mt-5 text-[var(--color-gold)]">
                    {p.started} &ndash; {p.ended ?? "present"}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* BOSO, as data */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <NightHead
                eyebrow="BOSO Supercup, ward stage"
                title="Every ward of the county, in one season."
                lead="The first time a talent competition ran simultaneously in all thirty wards of Nandi. The ward stage closed in August. Sub-county rounds begin in September."
              />
              <Link
                href="/boso"
                className="mt-9 inline-block rounded-sm border border-[var(--color-night-rule)] px-6 py-3 text-[0.9375rem] font-bold text-[var(--color-on-night)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Rules and registration
              </Link>
            </div>
            <Funnel steps={bosoFunnel} caption="Ward stage, April to August 2026" />
          </div>

          <div className="mt-20">
            <WardGrid
              wards={wards}
              reached={30}
              caption="All thirty wards, in the order the office listed them"
            />
          </div>
        </div>
      </section>

      {/* Photograph strip */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Across the county</p>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6">
          <PhotoStrip images={strip} height="20rem" />
        </div>
      </section>

      {/* Evidence: the budget line */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="label text-[var(--color-gold)]">Health, on the estimates</p>
          <h2 className="display mt-5 max-w-[18ch] text-[2.5rem] leading-[1.02] text-[var(--color-on-night)] sm:text-[3.25rem]">
            A promise you can look up.
          </h2>
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[var(--color-on-night-soft)]">
            Two health facilities for Nandi appear as named line items in the
            national development estimates, with an amount against each.
          </p>
          <div className="mt-14">
            <EvidencePlate
              img="/img/budget-line.jpg"
              alt="Vote 1082 development expenditure estimates showing the two Nandi health facilities"
              title={healthVote.table}
              rows={healthVote.rows}
              source={healthVote.source}
            />
          </div>
        </div>
      </section>

      {/* The six pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Nandi County, 2027</p>
            <h2 className="display mt-4 text-[2.5rem] leading-[1.02] sm:text-[3.25rem]">
              The six pillars
            </h2>
          </div>
          <Link
            href="/pillars"
            className="text-[0.9375rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
          >
            What each one covers
          </Link>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.n} className="border-t-2 border-[var(--color-murram)] pt-5">
              <span className="label text-[var(--color-murram)]">{p.n}</span>
              <h3 className="display mt-2 text-[1.875rem] leading-tight">{p.name}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* County money */}
      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <NightHead
              eyebrow="Context"
              title="Where Nandi County money goes."
              lead={`${countyFinance.total} in ${countyFinance.year}, at ${countyFinance.absorption} absorption.`}
            />
            <div>
              <div className="flex h-24 overflow-hidden rounded-sm">
                <div
                  className="flex flex-col justify-center bg-[var(--color-night-2)] px-6"
                  style={{ flex: countyFinance.recurrent.flex }}
                >
                  <p className="numeral text-[1.5rem] text-[var(--color-on-night)]">
                    {countyFinance.recurrent.amount}
                  </p>
                  <p className="label mt-1.5 text-[var(--color-on-night-soft)]">
                    Recurrent
                  </p>
                </div>
                <div
                  className="flex flex-col justify-center bg-[var(--color-gold)] px-6"
                  style={{ flex: countyFinance.development.flex }}
                >
                  <p className="numeral text-[1.5rem] text-[#1A1206]">
                    {countyFinance.development.amount}
                  </p>
                  <p className="label mt-1.5 text-[#4A3A12]">Development</p>
                </div>
              </div>
              <p className="label mt-5 text-[var(--color-on-night-soft)]">
                {countyFinance.source.publisher}, {countyFinance.source.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/img/portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#0C1420]/82" />
        <div className="mx-auto max-w-4xl px-6 py-28">
          <figure>
            <blockquote className="display text-[2rem] leading-[1.2] text-white sm:text-[2.75rem]">
              <p>&ldquo;{declaration.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="label mt-10 border-t border-white/25 pt-5 text-[var(--color-on-night-soft)]">
              {declaration.source.publisher}, {declaration.source.date}
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

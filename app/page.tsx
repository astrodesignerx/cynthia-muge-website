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
  Stat,
  WardGrid,
} from "@/components/Viz";
import { FloatingPillars, Reveal } from "@/components/Motion";

const cards = [
  { slug: "kahawa-na-mama", img: "/img/coffee-handover-a.jpg", pos: "50% 45%" },
  { slug: "elimu-ni-mwangaza", img: "/img/scholars-line.jpg", pos: "50% 30%" },
  { slug: "boso-supercup", img: "/img/boso-prize-a.jpg", pos: "50% 40%" },
  { slug: "health-and-infrastructure", img: "/img/ambulance-team.jpg", pos: "50% 40%" },
  { slug: "dairy-value-chain", img: "/img/milk-coolers.jpg", pos: "50% 45%" },
  { slug: "group-empowerment", img: "/img/empowerment-meeting.jpg", pos: "50% 25%" },
];


/**
 * Signposts, not decoration. Each frame previews a section covered in full
 * elsewhere and links to it, so repeating those photographs is the point.
 */
const signposts = [
  {
    href: "/pillars",
    img: "/img/elders.jpg",
    pos: "50% 45%",
    label: "Governance",
    body: "The Kaburwo Council of Elders",
  },
  {
    href: "/parliament",
    img: "/img/state-house.jpg",
    pos: "50% 55%",
    label: "In Parliament",
    body: "Committee work and positions",
  },
  {
    href: "/record/kahawa-na-mama",
    img: "/img/coffee-spouses.jpg",
    pos: "50% 40%",
    label: "Kahawa na Mama",
    body: "Trees in both spouses' names",
  },
  {
    href: "/record/elimu-ni-mwangaza",
    img: "/img/scholars-walk.jpg",
    pos: "50% 30%",
    label: "Elimu Ni Mwangaza",
    body: "449 students on scholarship",
  },
  {
    href: "/record/health-and-infrastructure",
    img: "/img/boda-shade-lelmokwo.jpg",
    pos: "50% 50%",
    label: "Health and Infrastructure",
    body: "Shades, boreholes, equipment",
  },
  {
    href: "/contact",
    img: "/img/listening.jpg",
    pos: "50% 45%",
    label: "Contact",
    body: "Six sub-counties, thirty wards",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: she stands on the field, rather than behind a scrim */}
      <section className="night relative isolate overflow-hidden">
        <Image
          src="/img/baraza-b.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
          style={{ objectPosition: "50% 42%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[linear-gradient(105deg,#0C1420_0%,#0C1420E6_45%,#0C1420B3_100%)]"
        />
        <div
          aria-hidden
          className="absolute -left-24 top-1/2 -z-20 hidden h-[38rem] w-[38rem] -translate-y-1/2 rounded-full bg-[var(--color-murram)]/12 blur-3xl lg:block"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 pt-24 sm:gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:pt-32">
          <div className="pb-10 sm:pb-16 lg:pb-24">
            <p className="label rise text-[var(--color-gold)]">
              Woman Representative, Nandi County
            </p>
            <h1 className="display rise mt-6 max-w-[15ch] text-[2.5rem] leading-[0.98] text-white sm:text-[3.75rem] sm:leading-[0.94] lg:text-[4.75rem]">
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

          <div className="relative isolate flex min-h-[22rem] items-end justify-center sm:min-h-[33rem] lg:min-h-[47rem]">
            {/* Disc, chips and portrait share this square, so the chips land
                inside the circle and she can break its top edge. */}
            <div className="relative h-[19rem] w-[19rem] sm:h-[28rem] sm:w-[28rem] lg:h-[40rem] lg:w-[40rem]">
              <div
                aria-hidden
                className="absolute inset-0 z-0 rounded-full bg-[var(--color-murram)]"
              />
              {/* chips marked front carry z-20, so they pass in front of her */}
              <FloatingPillars pillars={pillars} className="inset-0" />
              <Image
                src="/img/speaking-beaded-cutout.png"
                alt="Cynthia Muge speaking"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="rise z-10 origin-bottom scale-[1.16] object-contain object-bottom"
              />
            </div>
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
            split
          />
          <dl className="mt-16 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            <Stat
              value="650,000"
              count
              label="Coffee seedlings"
              note="Distributed to roughly 4,000 women across all six sub-counties."
            />
            <Stat
              value="449"
              count
              label="Students on scholarship"
              note="All cohorts. 206 sit KCSE this year."
            />
            <Stat
              value="30 / 30"
              count
              label="Wards reached by BOSO"
              note="846 matches in three months."
            />
            <Stat
              value="KSh 2.7m"
              count
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
          {cards.map((c, i) => {
            const p = programmes.find((x) => x.slug === c.slug);
            if (!p) return null;
            return (
              <li key={c.slug}>
                <Reveal delay={i * 70}>
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
                </Reveal>
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

      {/* Signposts into the rest of the site */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <p className="eyebrow">Across the county</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signposts.map((sp, i) => (
            <li key={sp.href}>
              <Reveal delay={i * 60}>
              <Link
                href={sp.href}
                className="group relative isolate flex min-h-[13rem] flex-col justify-end overflow-hidden rounded-sm p-6"
              >
                <Image
                  src={sp.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="-z-10 object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05] motion-reduce:transform-none"
                  style={{ objectPosition: sp.pos }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420]/94 via-[#0C1420]/40 to-transparent"
                />
                <p className="label text-[var(--color-gold)]">{sp.label}</p>
                <p className="mt-2 text-[1.0625rem] font-semibold leading-snug text-white">
                  {sp.body}
                </p>
              </Link>
              </Reveal>
            </li>
          ))}
        </ul>
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
          {pillars.map((p, i) => (
            <Reveal key={p.n} as="li" delay={i * 60} className="border-t-2 border-[var(--color-murram)] pt-5">
              <span className="label text-[var(--color-murram)]">{p.n}</span>
              <h3 className="display mt-2 text-[1.875rem] leading-tight">{p.name}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                {p.body}
              </p>
            </Reveal>
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
      <section className="night relative isolate overflow-hidden">
        <Image
          src="/img/baraza-a.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-30 object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[linear-gradient(75deg,#080E17_0%,#080E17F7_46%,#0C1420E6_100%)]"
        />
        <div className="mx-auto grid max-w-7xl items-end gap-6 px-6 pt-20 lg:grid-cols-[1fr_1fr] lg:pt-24">
          <figure className="pb-14 lg:pb-24">
            <p className="label text-[var(--color-gold)]">In her words</p>
            <blockquote className="display mt-6 text-[1.75rem] leading-[1.22] text-white sm:text-[2.375rem]">
              <p>&ldquo;{declaration.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="label mt-9 border-t border-white/20 pt-5 text-[var(--color-on-night-soft)]">
              {declaration.source.publisher}, {declaration.source.date}
            </figcaption>
          </figure>

          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-[40rem]">
            <Image
              src="/img/portrait-cutout.png"
              alt="Cynthia Muge speaking"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { countyFinance, programmes } from "@/content/programmes";
import { NightHead, Stat } from "@/components/Viz";

export const metadata: Metadata = {
  title: "The record",
  description:
    "Kahawa na Mama, Elimu Ni Mwangaza, the BOSO Supercup, dairy, group empowerment, and health and water projects across Nandi County.",
};

const art: Record<string, { img: string; pos: string; tag: string }> = {
  "kahawa-na-mama": { img: "/img/coffee-planting-hand.jpg", pos: "50% 45%", tag: "Agriculture" },
  "elimu-ni-mwangaza": { img: "/img/scholars-walk.jpg", pos: "50% 30%", tag: "Education" },
  "boso-supercup": { img: "/img/boso-prize-b.jpg", pos: "50% 40%", tag: "Youth and sport" },
  "health-and-infrastructure": { img: "/img/ambulance-inside.jpg", pos: "center", tag: "Health and water" },
  "dairy-value-chain": { img: "/img/milk-coolers.jpg", pos: "50% 45%", tag: "Agriculture" },
  "group-empowerment": { img: "/img/empowerment-meeting.jpg", pos: "50% 25%", tag: "Enterprise" },
};

/** Counts the evidence state of every figure on the site. */
function tally() {
  let verified = 0;
  let open = 0;
  for (const p of programmes) {
    for (const f of p.figures) {
      if (f.status === "verified") verified++;
      else open++;
    }
    open += p.gaps.length;
  }
  return { verified, open };
}

export default function RecordPage() {
  const { verified, open } = tally();

  return (
    <>
      <section className="night relative isolate overflow-hidden">
        <Image
          src="/img/boso-crowd.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
          style={{ objectPosition: "50% 45%" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#0C1420]/78" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <NightHead
            eyebrow="Office of the Woman Representative"
            title="The record"
            lead="Six programmes, where each one reached, and what is still being counted."
          />
          <dl className="mt-16 grid gap-y-12 sm:grid-cols-3 lg:gap-x-12">
            <Stat scale="sm" value={String(programmes.length)} label="Programmes" />
            <Stat scale="sm" value={String(verified)} label="Figures with a named source" />
            <Stat
              scale="sm"
              value={String(open)}
              label="Still unconfirmed or uncounted"
              tone="ember"
            />
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <ul className="grid gap-6 lg:grid-cols-2">
          {programmes.map((p) => {
            const a = art[p.slug];
            const headline = p.figures.find((f) => f.status === "verified");
            return (
              <li key={p.slug}>
                <Link
                  href={`/record/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] transition-colors duration-200 hover:border-[var(--color-murram)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-sunk)]">
                    {a && (
                      <Image
                        src={a.img}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                        style={{ objectPosition: a.pos }}
                      />
                    )}
                    {a && (
                      <span className="absolute left-4 top-4 rounded-sm bg-[#0C1420]/80 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white">
                        {a.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <h2 className="display text-[2rem] leading-tight transition-colors duration-200 group-hover:text-[var(--color-murram)]">
                      {p.name}
                    </h2>
                    <p className="mt-3 max-w-[46ch] leading-relaxed text-[var(--color-soft)]">
                      {p.oneLine}
                    </p>

                    {headline && headline.status === "verified" && (
                      <div className="mt-7 flex items-baseline gap-4 border-t border-[var(--color-rule)] pt-6">
                        <span className="numeral text-[2.5rem] text-[var(--color-murram)]">
                          {headline.value}
                        </span>
                        <span className="text-[0.875rem] leading-snug text-[var(--color-soft)]">
                          {headline.label}
                        </span>
                      </div>
                    )}

                    <p className="meta mt-auto pt-6">
                      {p.started} &ndash; {p.ended ?? "present"}
                      <span className="sep" aria-hidden /> {p.status}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="night">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
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
                    <span className="sep" aria-hidden />
                    {countyFinance.recurrent.ofBudget} of budget
                  </p>
                </div>
                <div
                  className="flex flex-col justify-center bg-[var(--color-gold)] px-6"
                  style={{ flex: countyFinance.development.flex }}
                >
                  <p className="numeral text-[1.5rem] text-[#1A1206]">
                    {countyFinance.development.amount}
                  </p>
                  <p className="label mt-1.5 text-[#4A3A12]">
                    Development
                    <span className="sep" aria-hidden />
                    {countyFinance.development.ofBudget}
                  </p>
                </div>
              </div>
              <p className="label mt-5 text-[var(--color-on-night-soft)]">
                {countyFinance.source.publisher}, {countyFinance.source.date}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

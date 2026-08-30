import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programmes, countyFinance } from "@/content/programmes";
import { SourceLine } from "@/components/Figures";
import { ImageBand } from "@/components/Page";

export const metadata: Metadata = {
  title: "The record",
  description:
    "Kahawa na Mama, Elimu Ni Mwangaza, the BOSO Supercup, dairy, group empowerment, and health and water projects across Nandi County.",
};

const art: Record<string, { img: string; pos: string; tag: string }> = {
  "kahawa-na-mama": { img: "/img/coffee-planting.jpg", pos: "50% 50%", tag: "Agriculture" },
  "elimu-ni-mwangaza": { img: "/img/scholars-service.jpg", pos: "50% 35%", tag: "Education" },
  "boso-supercup": { img: "/img/football.jpeg", pos: "center", tag: "Youth & sport" },
  "health-and-infrastructure": { img: "/img/ambulance-inside.jpg", pos: "center", tag: "Health & water" },
  "dairy-value-chain": { img: "/img/milk-coolers.jpg", pos: "50% 45%", tag: "Agriculture" },
  "group-empowerment": { img: "/img/empowerment-meeting.jpg", pos: "50% 30%", tag: "Enterprise" },
};

export default function RecordPage() {
  return (
    <>
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
          <p className="eyebrow">Office of the Woman Representative</p>
          <h1 className="display mt-5 text-[3.25rem] leading-[0.98] sm:text-[4.25rem]">
            The record
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
            Six programmes, where each one reached, and what is still being
            counted.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <ul className="grid gap-6 sm:grid-cols-2">
          {programmes.map((p) => {
            const a = art[p.slug];
            return (
              <li key={p.slug}>
                <Link
                  href={`/record/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] transition-colors duration-200 hover:border-[var(--color-murram)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sunk)]">
                    <Image
                      src={a.img}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 44vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                      style={{ objectPosition: a.pos }}
                    />
                    <span className="absolute left-4 top-4 rounded-sm bg-white/90 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-ink)]">
                      {a.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="display text-[1.75rem] transition-colors duration-200 group-hover:text-[var(--color-murram)]">
                      {p.name}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.oneLine}
                    </p>
                    <p className="meta mt-6 border-t border-[var(--color-rule)] pt-3.5">
                      {p.started} &ndash; {p.ended ?? "present"}{" "}
                      <span className="sep" aria-hidden /> {p.status}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ImageBand
        img="/img/coffee-crowd.jpg"
        pos="50% 40%"
        eyebrow="Context"
        title="Where Nandi County money goes."
      >
        <div className="mt-9 flex h-28 overflow-hidden rounded-sm">
          <div
            className="flex flex-col justify-center bg-white/90 px-6"
            style={{ flex: countyFinance.recurrent.flex }}
          >
            <p className="display text-[1.625rem] text-[var(--color-ink)]">
              {countyFinance.recurrent.amount}
            </p>
            <p className="text-[0.8125rem] text-[var(--color-soft)]">
              Recurrent <span className="sep" aria-hidden /> {countyFinance.recurrent.ofBudget} of budget
            </p>
          </div>
          <div
            className="flex flex-col justify-center bg-[var(--color-murram)] px-6"
            style={{ flex: countyFinance.development.flex }}
          >
            <p className="display text-[1.625rem] text-white">
              {countyFinance.development.amount}
            </p>
            <p className="text-[0.8125rem] text-[#F6DFD6]">
              Development <span className="sep" aria-hidden /> {countyFinance.development.ofBudget}
            </p>
          </div>
        </div>
        <p className="mt-5 text-[0.9375rem] text-[#D3DCD6]">
          {countyFinance.total} in {countyFinance.year}, at{" "}
          {countyFinance.absorption} absorption.
        </p>
        <div className="mt-1 max-w-[52ch] [&_p]:text-[#8FA398] [&_a]:text-[#B8C4BC]">
          <SourceLine source={countyFinance.source} />
        </div>
      </ImageBand>
    </>
  );
}

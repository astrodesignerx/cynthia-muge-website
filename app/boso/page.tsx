import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProgramme } from "@/content/programmes";

export const metadata: Metadata = {
  title: "BOSO Supercup",
  description:
    "Football and volleyball across all thirty wards of Nandi County. Registration is free.",
};

const comps = [
  {
    href: "/boso/football",
    name: "Football",
    img: "/img/football.jpeg",
    pos: "50% 45%",
    body: "Ward, sub-county and county rounds.",
  },
  {
    href: "/boso/volleyball",
    name: "Volleyball",
    img: "/img/volley.jpeg",
    pos: "50% 45%",
    body: "County championships.",
  },
];

const stats = [
  { v: "30 / 30", l: "Wards" },
  { v: "499", l: "Teams" },
  { v: "846", l: "Matches" },
  { v: "83", l: "Playing fields" },
];

export default function Boso() {
  const p = getProgramme("boso-supercup");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:pt-24">
        <p className="eyebrow">Nandi County</p>
        <h1 className="display mt-5 max-w-[11ch] text-[3.5rem] leading-[0.95] sm:text-[4.5rem] lg:text-[5.5rem]">
          BOSO Supercup
        </h1>
        <p className="mt-7 max-w-[42ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          Football and volleyball in every ward of Nandi. Registration is free
          and open.
        </p>
      </section>

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
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="-z-10 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
              style={{ objectPosition: c.pos }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0E1310]/94 via-[#0E1310]/50 to-[#0E1310]/10 transition-opacity duration-300 group-hover:opacity-90"
            />
            <div>
              <h2 className="display text-[2.5rem] leading-none text-white lg:text-[3rem]">
                {c.name}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#D3DCD6]">
                {c.body}
              </p>
              <p className="mt-5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#E9906F]">
                Rules and registration &rarr;
              </p>
            </div>
          </Link>
        ))}
      </section>

      {p && (
        <section className="bg-[var(--color-ink)] text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#8FA398]">
              The ward stage
            </p>
            <dl className="mt-9 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="display text-[3rem] leading-none tabular-nums text-[#E9906F]">
                    {s.v}
                  </dt>
                  <dd className="mt-2 text-[0.875rem] text-[#B8C4BC]">{s.l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 max-w-[54ch] text-[0.9375rem] leading-relaxed text-[#B8C4BC]">
              Sub-county rounds run from September. The county final is in
              December 2026.
            </p>
            <Link
              href="/record/boso-supercup"
              className="mt-7 inline-block rounded-sm bg-white px-6 py-3 text-[0.9375rem] font-bold text-[var(--color-ink)] transition-colors duration-200 hover:bg-[#F0EFE9]"
            >
              The full BOSO record
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

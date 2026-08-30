import Image from "next/image";
import Link from "next/link";
import { pillars, programmes } from "@/content/programmes";

const cards = [
  { slug: "kahawa-na-mama", img: "/img/coffee-crowd.jpg", pos: "center", tag: "Agriculture" },
  { slug: "elimu-ni-mwangaza", img: "/img/scholars-service.jpg", pos: "50% 35%", tag: "Education" },
  { slug: "boso-supercup", img: "/img/football.jpeg", pos: "center", tag: "Youth & sport" },
  { slug: "health-and-infrastructure", img: "/img/ambulance-team.jpg", pos: "center", tag: "Health & water" },
];

export default function Home() {
  const coffee = programmes[0];

  return (
    <>
      {/* Introduction */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">
          Woman Representative <span className="sep" aria-hidden /> Nandi County
        </p>
            <h1 className="display mt-6 max-w-[13ch] text-[3.25rem] leading-[0.96] sm:text-[4.25rem] lg:text-[4.75rem]">
              For the women and young people of Nandi.
            </h1>
            <p className="mt-7 text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
              Six sub-counties. Thirty wards. One office.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/record"
                className="rounded-sm bg-[var(--color-murram)] px-7 py-3.5 text-[0.9375rem] font-bold text-white transition-colors duration-200 hover:bg-[var(--color-murram-deep)]"
              >
                The record
              </Link>
              <Link
                href="/about"
                className="rounded-sm border border-[var(--color-rule-firm)] px-7 py-3.5 text-[0.9375rem] font-bold text-[var(--color-soft)] transition-colors duration-200 hover:border-[var(--color-murram)] hover:text-[var(--color-murram)]"
              >
                Her story
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 hidden h-full w-full rounded-sm bg-[var(--color-murram-wash)] lg:block"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-sunk)]">
              <Image
                src="/img/coffee-seedling.jpg"
                alt="A woman holding a certified coffee seedling on her farm in Nandi County"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
                style={{ objectPosition: "50% 28%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The work, in numbers */}
      <section className="bg-[var(--color-ink)] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#8FA398]">
            Four years, four programmes
          </p>
          <dl className="mt-9 grid gap-y-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {[
              { v: "650,000", l: "Coffee seedlings to roughly 4,000 women, all six sub-counties" },
              { v: "206", l: "Students dedicated ahead of KCSE, on full scholarship" },
              { v: "30 / 30", l: "Wards reached by the BOSO Supercup in three months" },
              { v: "KSh 2.7m", l: "Ward-level prize money, men's and women's" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="display text-[3.25rem] leading-none tabular-nums text-[#E9906F]">
                  {s.v}
                </dt>
                <dd className="mt-3 max-w-[24ch] text-[0.875rem] leading-relaxed text-[#B8C4BC]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Programmes */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[2.5rem]">The programmes</h2>
          <Link
            href="/record"
            className="text-[0.9375rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
          >
            All four, in full
          </Link>
        </div>

        <ul className="mt-9 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => {
            const p = programmes.find((x) => x.slug === c.slug)!;
            return (
              <li key={c.slug}>
                <Link
                  href={`/record/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] transition-colors duration-200 hover:border-[var(--color-murram)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-sunk)]">
                    <Image
                      src={c.img}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 44vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                      style={{ objectPosition: c.pos }}
                    />
                    <span className="absolute left-4 top-4 rounded-sm bg-white/90 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-ink)]">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="display text-[1.75rem] transition-colors duration-200 group-hover:text-[var(--color-murram)]">
                      {p.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                      {p.oneLine}
                    </p>
                    <p className="meta mt-6 border-t border-[var(--color-rule)] pt-3.5">
                      {p.started} &ndash; present <span className="sep" aria-hidden /> {p.status}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* The charter, full bleed */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/img/coffee-planting.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#141A16]/80" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#E9906F]">
            Kahawa na Mama
          </p>
          <h2 className="display mt-6 max-w-[17ch] text-[2.75rem] leading-[1.04] text-white sm:text-[3.5rem]">
            {coffee.distinctive?.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D3DCD6]">
            {coffee.distinctive?.body}
          </p>
          <Link
            href="/record/kahawa-na-mama"
            className="mt-9 inline-block rounded-sm bg-white px-7 py-3.5 text-[0.9375rem] font-bold text-[var(--color-ink)] transition-colors duration-200 hover:bg-[#F0EFE9]"
          >
            Read the Kahawa na Mama record
          </Link>
        </div>
      </section>

      {/* The six pillars */}
      <section className="border-t border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="display text-[2.5rem] sm:text-[3rem]">
              The six pillars
            </h2>
            <Link
              href="/pillars"
              className="meta hover:text-[var(--color-murram)]"
            >
              All six &rarr;
            </Link>
          </div>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.n}
                className="border-t-2 border-[var(--color-murram)] pt-4"
              >
                <span className="font-mono text-[0.75rem] font-medium tabular-nums text-[var(--color-murram)]">
                  {p.n}
                </span>
                <h3 className="display mt-1.5 text-[1.625rem] leading-tight">
                  {p.name}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* In her words */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <figure>
          <blockquote className="display text-[2rem] leading-[1.22] sm:text-[2.625rem]">
            <p>
              &ldquo;Lifting our communities out of poverty happens{" "}
              <em className="italic text-[var(--color-murram)]">
                one family at a time
              </em>
              &nbsp;&mdash; starting with the education of children from needy
              backgrounds.&rdquo;
            </p>
          </blockquote>
          <figcaption className="meta mt-8 border-t border-[var(--color-rule)] pt-4">
            Cynthia Muge, on four years of Elimu Ni Mwangaza
          </figcaption>
        </figure>
      </section>
    </>
  );
}

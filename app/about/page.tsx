import type { Metadata } from "next";
import Image from "next/image";
import { ImageBand, SplitHero } from "@/components/Page";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hon. Cynthia Jepkosgei Muge, Woman Representative for Nandi County.",
};

const education = [
  { level: "Primary", school: "Kapchemoiywo Primary School", years: "1998 – 2007", note: "KCPE" },
  { level: "Secondary", school: "Moi Girls Isinya", years: "2008 – 2011", note: "KCSE" },
  { level: "Bachelor's", school: "Urban and Regional Planning", years: "2012 – 2016", note: "University of Nairobi" },
  { level: "Master's", school: "Project Planning and Management", years: "2018 – 2020", note: "University of Nairobi" },
];

const timeline = [
  {
    year: "2017",
    title: "Elected at twenty-four, as an independent",
    body: "Won the Kilibwoni Ward seat in the County Assembly as an independent.",
    pivot: true,
  },
  {
    year: "2017 – 22",
    title: "Committee leadership",
    body: "Chaired the Sports, Youth and Social Welfare Committee. Served on Trade and Investments, Appointments, Liaison, and Public Investments and Accounts.",
  },
  {
    year: "2022",
    title: "Woman Representative, Nandi County",
    body: "Elected with 275,500 votes. Sits on the Committee on Implementation and the Health Committee.",
    pivot: true,
  },
];

export default function About() {
  return (
    <>
      <SplitHero
        eyebrow="Woman Representative, Nandi County"
        title={<>Hon. Cynthia<br />Jepkosgei Muge</>}
        lead="Born in 1993 in Kipsirichoi village, Kilibwoni Ward, Emgwen Constituency. The eldest of six."
        img="/img/facebook/i-am-not-a-small-girl-anymore-1-1367x2048.jpg"
        alt="Hon. Cynthia Muge"
        pos="50% 18%"
      />

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="display text-[2.5rem]">The journey</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {timeline.map((t, i) => (
            <li
              key={t.year}
              className={`border-t-[3px] pt-5 ${
                t.pivot
                  ? "border-[var(--color-murram)]"
                  : "border-[var(--color-rule-firm)]"
              }`}
            >
              <Reveal delay={i * 70}>
                <p
                  className={`display text-[2rem] leading-none ${
                    t.pivot
                      ? "text-[var(--color-murram)]"
                      : "text-[var(--color-faint)]"
                  }`}
                >
                  {t.year}
                </p>
                <h3 className="mt-4 text-[1.0625rem] font-bold leading-snug">
                  {t.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                  {t.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <ImageBand
        img="/img/baraza-b.jpg"
        pos="50% 45%"
        eyebrow="Across the county"
        title="Six sub-counties, thirty wards."
        body="Nandi Hills, Aldai, Mosop, Chesumei, Emgwen and Tinderet."
      />

      {/* Education */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="display text-[2.5rem]">Education</h2>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <Reveal as="figure" className="relative min-h-[24rem] overflow-hidden rounded-sm bg-[var(--color-sunk)] lg:h-full">
            <Image
              src="/img/mhesh-cutout.png"
              alt="Cynthia Muge"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </Reveal>
          <ol className="grid content-start gap-0">
            {education.map((e, i) => (
              <li
                key={e.level}
                className="grid grid-cols-[7rem_1fr] gap-5 border-b border-[var(--color-rule)] py-5 first:border-t"
              >
                <Reveal delay={i * 50}>
                  <span className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-murram)]">
                    {e.level}
                  </span>
                  <span>
                    <span className="block whitespace-nowrap text-[1.0625rem] font-bold leading-snug">
                      {e.school}
                    </span>
                    <span className="mt-1 block whitespace-nowrap text-[0.875rem] text-[var(--color-soft)]">
                      {e.note}
                    </span>
                    <span className="mt-1 block whitespace-nowrap font-mono text-[0.75rem] text-[var(--color-faint)]">
                      {e.years}
                    </span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Family */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="display text-[2.5rem]">Family</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-4xl">
          <Reveal as="figure" className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-sunk)]">
            <Image
              src="/img/family-compound.jpg"
              alt="Cynthia Muge with her two sons at home"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </Reveal>
          <Reveal as="figure" delay={80} className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-sunk)]">
            <Image
              src="/img/family-portrait.jpg"
              alt="A family studio portrait with Mr Mathew Rotich and their two sons"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-6 max-w-[52ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
            Married to Mr Mathew Rotich. With two sons.
          </p>
        </Reveal>
      </section>

      <ImageBand
        img="/img/coffee-planting.jpg"
        pos="50% 45%"
        eyebrow="Kilibwoni Ward, Emgwen"
        title="Where the work is."
      />
    </>
  );
}

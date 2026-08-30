import type { Metadata } from "next";
import { ImageBand, SplitHero } from "@/components/Page";

export const metadata: Metadata = {
  title: "Media",
  description: "Speeches, programme footage and press.",
};

export default function Media() {
  return (
    <>
      <SplitHero
        eyebrow="Archive"
        title="Media"
        lead="Full speeches, programme footage and press."
        img="/img/ambulance-team.jpg"
        alt="A public appearance in Nandi County"
        pos="50% 35%"
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-sm border border-dashed border-[var(--color-rule-firm)] p-10">
          <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            In production
          </span>
          <h2 className="display mt-5 text-[2rem]">
            The archive is being built
          </h2>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            Full-length recordings of public appearances, with the date and
            location of each, alongside farmer and beneficiary interviews from
            the programmes.
          </p>
        </div>
      </section>

      <ImageBand
        img="/img/ambulance-speech.jpg"
        pos="50% 40%"
        eyebrow="On the record"
        title="Every appearance, in full."
      />
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description: "Speeches, video and press for Hon. Cynthia Muge.",
};

export default function Media() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-14">
        <p className="eyebrow">Archive</p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">Media</h1>
        <p className="mt-4 max-w-[54ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          Full speeches, programme footage and press.
        </p>
      </header>

      <section className="pt-12">
        <div className="rounded border border-dashed border-[var(--color-rule-firm)] p-8">
          <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2 py-[3px] text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            Being built
          </span>
          <h2 className="display mt-4 text-[1.625rem]">
            The archive is in production
          </h2>
          <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            Full-length recordings of public appearances, with the date and
            location of each, alongside farmer and beneficiary interviews from
            the programmes.
          </p>
        </div>
      </section>
    </div>
  );
}

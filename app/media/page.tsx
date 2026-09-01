import type { Metadata } from "next";
import { ImageBand, SplitHero } from "@/components/Page";
import { Counter, Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Media",
  description: "Speeches, programme footage and press.",
};

/** The eleven past live broadcasts on the verified Facebook page, longest first. */
const live = [
  { id: "a", video: "1376310434648688", len: "4:44:57", title: "Elimu Ni Mwangaza prayer and commitment service", views: "10.5K" },
  { id: "b", video: "1090331580167641", len: "3:10:44", title: "Untitled", views: "3.8K" },
  { id: "c", video: "1551480760046232", len: "2:33:22", title: "BOSO Supercup, ward level", views: "2.3K" },
  { id: "d", video: "1082362490893399", len: "2:10:22", title: "Untitled", views: "1.4K" },
  { id: "e", video: "1385292913551796", len: "1:43:34", title: "BOSO Supercup, ward", views: "3.9K" },
  { id: "f", video: "1935991367006101", len: "1:11:37", title: "BOSO Supercup", views: "1.5K" },
  { id: "g", video: "1008264325533798", len: "1:02:58", title: "BOSO Supercup, ward level", views: "1.5K" },
  { id: "h", video: "1753325359131796", len: "57:13", title: "BOSO Supercup, ward level", views: "2.9K" },
  { id: "i", video: "28281880034739546", len: "35:00", title: "BOSO Supercup", views: "1.6K" },
  { id: "j", video: "26941102278899813", len: "6:53", title: "BOSO Supercup", views: "1.1K" },
  { id: "k", video: "1283881831469872", len: "1:01", title: "BOSO Supercup, ward level", views: "1.2K" },
];

export default function Media() {
  return (
    <>
      <SplitHero
        eyebrow="Archive"
        title="Media"
        lead="Full speeches, programme footage and press."
        img="/img/speaking-beaded.jpg"
        alt="Cynthia Muge speaking at a public gathering"
        pos="50% 0%"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">The public archive</p>
            <h2 className="display mt-4 max-w-[16ch] text-[2.5rem] leading-[1.02] sm:text-[3rem]">
              Nineteen hours from the public archive.
            </h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-[var(--color-soft)]">
              Listen to the meetings, ceremonies, and tournament days that make
              up the work across the county.
            </p>
          </div>

          <Reveal delay={60} className="min-w-0">
          <div className="overflow-x-auto rounded-sm border border-[var(--color-rule)]">
            <table className="w-full min-w-[28rem] border-collapse text-[0.9375rem]">
              <thead>
                <tr className="bg-[var(--color-sunk)]">
                  {["Length", "Recording", "Views"].map((h) => (
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
                {live.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-[var(--color-rule)] transition-colors duration-200 last:border-0 hover:bg-[var(--color-sunk)]/70"
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[0.8125rem] tabular-nums text-[var(--color-murram)]">
                      {r.len}
                    </td>
                    <td className="px-5 py-3.5 text-[var(--color-soft)]">
                      <a
                        href={`https://www.facebook.com/watch/?v=${r.video}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--color-rule-firm)] underline-offset-2 transition-colors duration-150 hover:text-[var(--color-murram)]"
                      >
                        {r.title}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 tabular-nums text-[var(--color-soft)]">
                      <Counter value={r.views} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Reveal>
        </div>

        <Reveal delay={40}>
        <div className="mt-14 border-t border-[var(--color-rule)] pt-10">
            <p className="eyebrow">A voice from the work</p>
          <h3 className="display mt-4 text-[1.75rem]">
            Cynthia Muge on healthcare, and on the 2027 bid
          </h3>
          <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            A radio interview about healthcare and the next responsibility she
            is asking Nandi to take with her.
          </p>
          <p className="meta mt-3">Carried by Bethwel Melli, 2026</p>
        </div>
        </Reveal>

        <Reveal delay={60}>
        <div className="mt-14 rounded-sm border border-dashed border-[var(--color-rule-firm)] p-10">
          <span className="pulse-soft inline-block rounded-sm bg-[var(--color-amber-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            Archive in progress
          </span>
          <h2 className="display mt-5 text-[2rem]">More voices will join it</h2>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            The archive will grow with titled recordings, dates, locations, and
            conversations with the people who take part in the programmes.
          </p>
        </div>
        </Reveal>
      </section>

      <ImageBand
        img="/img/boso-match.jpg"
        pos="50% 45%"
        eyebrow="Hear the work"
        title="The moments that bring people together."
      />
    </>
  );
}

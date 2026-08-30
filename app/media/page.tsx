import type { Metadata } from "next";
import { ImageBand, SplitHero } from "@/components/Page";

export const metadata: Metadata = {
  title: "Media",
  description: "Speeches, programme footage and press.",
};

/** The eleven past live broadcasts on the Facebook page, longest first. */
const live = [
  { id: "a", len: "4:44:57", title: "Elimu Ni Mwangaza prayer and commitment service", views: "10.5K" },
  { id: "b", len: "3:10:44", title: "Untitled", views: "3.8K" },
  { id: "c", len: "2:33:22", title: "BOSO Supercup, ward level", views: "2.3K" },
  { id: "d", len: "2:10:22", title: "Untitled", views: "1.4K" },
  { id: "e", len: "1:43:34", title: "BOSO Supercup, ward", views: "3.9K" },
  { id: "f", len: "1:11:37", title: "BOSO Supercup", views: "1.5K" },
  { id: "g", len: "1:02:58", title: "BOSO Supercup, ward level", views: "1.5K" },
  { id: "h", len: "57:13", title: "BOSO Supercup, ward level", views: "2.9K" },
  { id: "i", len: "35:00", title: "BOSO Supercup", views: "1.6K" },
  { id: "j", len: "6:53", title: "BOSO Supercup", views: "1.1K" },
  { id: "k", len: "1:01", title: "BOSO Supercup, ward level", views: "1.2K" },
];

export default function Media() {
  return (
    <>
      <SplitHero
        eyebrow="Archive"
        title="Media"
        lead="Full speeches, programme footage and press."
        img="/img/ambulance-speech.jpg"
        alt="A public appearance in Nandi County"
        pos="50% 35%"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">On the page now</p>
            <h2 className="display mt-4 max-w-[16ch] text-[2.5rem] leading-[1.02] sm:text-[3rem]">
              Nineteen hours of it, unedited.
            </h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-[var(--color-soft)]">
              Eleven past live broadcasts sit on the Facebook page, two of them
              untitled and several sharing a name. They are listed here so the
              recordings can be found.
            </p>
          </div>

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
                    className="border-b border-[var(--color-rule)] last:border-0"
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[0.8125rem] tabular-nums text-[var(--color-murram)]">
                      {r.len}
                    </td>
                    <td className="px-5 py-3.5 text-[var(--color-soft)]">
                      {r.title}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 tabular-nums text-[var(--color-soft)]">
                      {r.views}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-rule)] pt-10">
          <p className="eyebrow">Broadcast</p>
          <h3 className="display mt-4 text-[1.75rem]">
            Cynthia Muge on healthcare, and on the 2027 bid
          </h3>
          <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            A radio interview in which she sets out the healthcare record and
            why she is asking Nandi to support her for governor.
          </p>
          <p className="meta mt-3">Carried by Bethwel Melli, 2026</p>
        </div>

        <div className="mt-14 rounded-sm border border-dashed border-[var(--color-rule-firm)] p-10">
          <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            In production
          </span>
          <h2 className="display mt-5 text-[2rem]">Cut, titled and dated</h2>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            Each recording carries the date and location of the event, alongside
            farmer and beneficiary interviews from the programmes.
          </p>
        </div>
      </section>

      <ImageBand
        img="/img/boso-match.jpg"
        pos="50% 45%"
        eyebrow="On the record"
        title="Every appearance, in full."
      />
    </>
  );
}

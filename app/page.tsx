import Link from "next/link";
import { programmes } from "@/content/programmes";

export default function Home() {
  const flagship = programmes[0];
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pt-20 pb-16">
        <p className="eyebrow">Woman Representative, Nandi County</p>
        <h1 className="display mt-5 max-w-[16ch] text-[3.25rem] sm:text-[4.5rem]">
          Hon. Cynthia Jepkosgei Muge
        </h1>
        <p className="mt-6 max-w-[54ch] text-[1.25rem] leading-relaxed text-[var(--color-soft)]">
          Elected as an independent councillor at 24. Woman Representative since
          2022. This site is the record of what that has delivered &mdash; with
          the source beside every figure.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/record"
            className="rounded bg-[var(--color-murram)] px-6 py-3 text-[0.9375rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--color-murram-deep)]"
          >
            See the record
          </Link>
          <Link
            href="/about"
            className="rounded border border-[var(--color-rule-firm)] px-6 py-3 text-[0.9375rem] font-bold text-[var(--color-soft)] transition-colors duration-150 hover:border-[var(--color-murram)] hover:text-[var(--color-murram)]"
          >
            About Cynthia
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--color-rule)] pt-14">
        <h2 className="display text-[2.125rem]">The programmes</h2>
        <ul className="mt-7 grid gap-5 sm:grid-cols-2">
          {programmes.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/record/${p.slug}`}
                className="group flex h-full flex-col rounded border border-[var(--color-rule)] p-6 transition-colors duration-150 hover:border-[var(--color-murram)]"
              >
                <h3 className="display text-[1.375rem] group-hover:text-[var(--color-murram)]">
                  {p.name}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-soft)]">
                  {p.oneLine}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-r border-l-[3px] border-[var(--color-leaf)] bg-[var(--color-leaf-wash)] px-8 py-7">
        <p className="eyebrow" style={{ color: "var(--color-leaf)" }}>
          The flagship
        </p>
        <h2 className="display mt-3 text-[1.875rem]">
          {flagship.distinctive?.title}
        </h2>
        <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
          {flagship.distinctive?.body}
        </p>
        <Link
          href={`/record/${flagship.slug}`}
          className="mt-5 inline-block text-[0.9375rem] font-bold text-[var(--color-leaf)] underline underline-offset-4"
        >
          Read the Kahawa na Mama record
        </Link>
      </section>
    </div>
  );
}

import Image from "next/image";
import { GrowBar, Reveal } from "@/components/Motion";
import type { Source } from "@/lib/types";

/* ------------------------------------------------------------------ *
 * Display pieces for the dark surface. Every number that appears here
 * is passed in from content/programmes.ts, never written inline.
 * ------------------------------------------------------------------ */

/** A single large figure with its label. Sized by `scale`. */
export function Stat({
  value,
  label,
  note,
  scale = "md",
  tone = "gold",
}: {
  value: string;
  label: string;
  note?: string;
  scale?: "sm" | "md" | "lg";
  tone?: "gold" | "ember" | "ink";
}) {
  const size =
    scale === "lg"
      ? "text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem]"
      : scale === "sm"
        ? "text-[2rem] sm:text-[2.5rem]"
        : "text-[2.75rem] sm:text-[3.5rem]";
  const colour =
    tone === "ember"
      ? "text-[var(--color-ember)]"
      : tone === "ink"
        ? "text-[var(--color-murram)]"
        : "text-[var(--color-gold)]";
  const labelColour =
    tone === "ink" ? "text-[var(--color-faint)]" : "text-[var(--color-on-night-soft)]";

  return (
    <Reveal>
      <p className={`numeral ${size} ${colour}`}>{value}</p>
      <p className={`label mt-4 ${labelColour}`}>{label}</p>
      {note && (
        <p
          className={`mt-2 max-w-[30ch] text-[0.875rem] leading-relaxed ${
            tone === "ink" ? "text-[var(--color-soft)]" : "text-[var(--color-on-night-soft)]"
          }`}
        >
          {note}
        </p>
      )}
    </Reveal>
  );
}

/** Thirty wards, drawn as a grid. `reached` marks the ones covered. */
export function WardGrid({
  wards,
  reached,
  caption,
}: {
  wards: string[];
  reached: number;
  caption?: string;
}) {
  return (
    <Reveal as="figure">
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-[var(--color-night-rule)] sm:grid-cols-3 lg:grid-cols-5">
        {wards.map((w, i) => (
          <li
            key={w}

            className={`flex min-h-[4.5rem] flex-col justify-between p-3 transition-colors duration-200 ${
              i < reached
                ? "bg-[var(--color-night-2)]"
                : "bg-[var(--color-night)] opacity-60"
            }`}
          >
            <span className="label text-[0.5625rem] text-[var(--color-gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[0.8125rem] font-semibold leading-tight text-[var(--color-on-night)]">
              {w}
            </span>
          </li>
        ))}
      </ul>
      {caption && (
        <figcaption className="label mt-5 text-[var(--color-on-night-soft)]">
          {caption}
        </figcaption>
      )}
    </Reveal>
  );
}

/** A narrowing sequence: each step is a smaller bar than the last. */
export function Funnel({
  steps,
  caption,
}: {
  steps: { value: number; display: string; label: string }[];
  caption?: string;
}) {
  const top = Math.max(...steps.map((s) => s.value));
  return (
    <figure>
      <ul className="grid gap-4">
        {steps.map((s, i) => {
          const pct = Math.max(6, Math.round((s.value / top) * 100));
          return (
            <li key={s.label} className="grid gap-2">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.9375rem] text-[var(--color-on-night-soft)]">
                  {s.label}
                </span>
                <span className="numeral text-[1.5rem] text-[var(--color-gold)]">
                  {s.display}
                </span>
              </div>
              <GrowBar
                pct={pct}
                delay={i * 90}
                className="h-2.5 overflow-hidden rounded-full bg-[var(--color-night-rule)]"
              />
            </li>
          );
        })}
      </ul>
      {caption && (
        <figcaption className="label mt-6 text-[var(--color-on-night-soft)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A horizontal strip of photographs that scrolls sideways. */
export function PhotoStrip({
  images,
  height = "18rem",
}: {
  images: { src: string; alt: string; pos?: string }[];
  height?: string;
}) {
  return (
    <div
      className="no-scrollbar flex gap-3 overflow-x-auto pb-1"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {images.map((im) => (
        <div
          key={im.src}
          className="relative shrink-0 overflow-hidden rounded-sm bg-[var(--color-night-2)]"
          style={{ height, width: "min(78vw, 26rem)", scrollSnapAlign: "start" }}
        >
          <Image
            src={im.src}
            alt={im.alt}
            fill
            sizes="(max-width: 640px) 78vw, 26rem"
            className="object-cover"
            style={{ objectPosition: im.pos ?? "center" }}
          />
        </div>
      ))}
    </div>
  );
}

/** A document reproduced as evidence, with what it shows stated beside it. */
export function EvidencePlate({
  img,
  alt,
  title,
  rows,
  source,
}: {
  img: string;
  alt: string;
  title: string;
  rows: { k: string; v: string }[];
  source: Source;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
      <figure className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[var(--color-night-2)] ring-1 ring-[var(--color-night-rule)]">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover object-top"
        />
      </figure>
      <div>
        <h3 className="display text-[2rem] leading-tight text-[var(--color-on-night)] sm:text-[2.5rem]">
          {title}
        </h3>
        <dl className="mt-7">
          {rows.map((r) => (
            <div
              key={r.k}
              className="flex items-baseline justify-between gap-6 border-t border-[var(--color-night-rule)] py-4"
            >
              <dt className="text-[0.9375rem] text-[var(--color-on-night-soft)]">
                {r.k}
              </dt>
              <dd className="numeral text-[1.375rem] text-[var(--color-gold)]">
                {r.v}
              </dd>
            </div>
          ))}
        </dl>
        <p className="label mt-5 text-[var(--color-on-night-soft)]">
          {source.publisher}, {source.date}
        </p>
      </div>
    </div>
  );
}

/**
 * Section heading for the dark surface.
 * `split` sets the heading against the left edge and the body copy to the
 * right, for sections that run the full width rather than sitting in a column.
 */
export function NightHead({
  eyebrow,
  title,
  lead,
  split = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  split?: boolean;
}) {
  if (split && lead) {
    return (
      <Reveal as="header" className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className="label text-[var(--color-gold)]">{eyebrow}</p>
          <h2 className="display mt-5 max-w-[15ch] text-[2.5rem] leading-[1.02] text-[var(--color-on-night)] sm:text-[3.25rem]">
            {title}
          </h2>
        </div>
        <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-[var(--color-on-night-soft)] lg:pb-2">
          {lead}
        </p>
      </Reveal>
    );
  }
  return (
    <Reveal as="header" className="max-w-[34ch]">
      <p className="label text-[var(--color-gold)]">{eyebrow}</p>
      <h2 className="display mt-5 text-[2.5rem] leading-[1.02] text-[var(--color-on-night)] sm:text-[3.25rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[var(--color-on-night-soft)]">
          {lead}
        </p>
      )}
    </Reveal>
  );
}

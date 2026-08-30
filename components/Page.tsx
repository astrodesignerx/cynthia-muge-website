import Image from "next/image";

/** Split hero: text left, photograph right with the murram offset block. */
export function SplitHero({
  eyebrow,
  title,
  lead,
  img,
  alt,
  pos = "center",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  img: string;
  alt: string;
  pos?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--color-rule)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 text-[3rem] leading-[0.98] sm:text-[3.75rem] lg:text-[4.25rem]">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-[46ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
              {lead}
            </p>
          )}
          {children}
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-3 -top-3 hidden h-full w-full rounded-sm bg-[var(--color-murram-wash)] lg:block"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-sunk)]">
            <Image
              src={img}
              alt={alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
              style={{ objectPosition: pos }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Full-bleed photograph with a dark wash and text over it. */
export function ImageBand({
  img,
  pos = "center",
  eyebrow,
  title,
  body,
  children,
}: {
  img: string;
  pos?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={img}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: pos }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#141A16]/80" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        {eyebrow && (
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#E9906F]">
            {eyebrow}
          </p>
        )}
        <h2 className="display mt-5 max-w-[18ch] text-[2.5rem] leading-[1.05] text-white sm:text-[3.25rem]">
          {title}
        </h2>
        {body && (
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D3DCD6]">
            {body}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/** A single photograph, framed, with an optional caption. */
export function Plate({
  img,
  alt,
  caption,
  ratio = "16/9",
  pos = "center",
}: {
  img: string;
  alt: string;
  caption?: string;
  ratio?: string;
  pos?: string;
}) {
  return (
    <figure>
      <div
        className="relative overflow-hidden rounded-sm bg-[var(--color-sunk)]"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
          style={{ objectPosition: pos }}
        />
      </div>
      {caption && <figcaption className="meta mt-3">{caption}</figcaption>}
    </figure>
  );
}

import Image from "next/image";
import { Parallax, Reveal } from "@/components/Motion";

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
    <section className="night relative isolate flex min-h-[26rem] items-end overflow-hidden lg:min-h-[32rem]">
      <Parallax className="absolute inset-0 -z-10" speed={0.1}>
        <Image
          src={img}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover"
          style={{ objectPosition: pos }}
        />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/84 to-[#0C1420]/45"
      />
      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-28">
        <p
          className="label rise text-[var(--color-gold)]"
          style={{ animationDelay: "120ms" }}
        >
          {eyebrow}
        </p>
        <h1
          className="display rise mt-6 max-w-[14ch] text-[3rem] leading-[0.96] text-white sm:text-[4rem] lg:text-[4.75rem]"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="rise mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]"
            style={{ animationDelay: "300ms" }}
          >
            {lead}
          </p>
        )}
        {children}
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
      <Parallax className="absolute inset-0 -z-10" speed={0.08}>
        <Image
          src={img}
          alt=""
          fill
          sizes="100vw"
          className="kenburns object-cover"
          style={{ objectPosition: pos }}
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#141A16]/80" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        {eyebrow && (
          <p
            className="rise text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#E9906F]"
            style={{ animationDelay: "120ms" }}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className="display rise mt-5 max-w-[18ch] text-[2.5rem] leading-[1.05] text-white sm:text-[3.25rem]"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h2>
        {body && (
          <p
            className="rise mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D3DCD6]"
            style={{ animationDelay: "300ms" }}
          >
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
    <Reveal as="figure">
      <div
        className="group relative overflow-hidden rounded-sm bg-[var(--color-sunk)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{ objectPosition: pos }}
        />
      </div>
      {caption && <figcaption className="meta mt-3">{caption}</figcaption>}
    </Reveal>
  );
}

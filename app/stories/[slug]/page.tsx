import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fieldNotes, getFieldNote } from "@/content/stories";

export function generateStaticParams() {
  return fieldNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getFieldNote(slug);
  if (!story) return { title: "Not found" };
  return { title: story.title, description: story.lede };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getFieldNote(slug);
  if (!story) notFound();

  return (
    <article>
      <header className="night relative isolate overflow-hidden">
        <Image
          src={story.image}
          alt={story.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/84 to-[#0C1420]/45" />
        <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-24">
          <Link
            href="/stories"
            className="label text-[var(--color-on-night-soft)] transition-colors duration-200 hover:text-[var(--color-gold)]"
          >
            &larr; Stories from the wards
          </Link>
          <p className="label mt-12 text-[var(--color-gold)]">{story.programme}</p>
          <h1 className="display mt-5 max-w-[15ch] text-[3.5rem] leading-[0.96] text-white sm:text-[5rem]">
            {story.title}
          </h1>
          <p className="mt-6 max-w-[54ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            {story.lede}
          </p>
          <p className="label mt-8 text-[var(--color-gold)]">{story.place}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-[1.1875rem] leading-relaxed text-[var(--color-ink)]">{story.body}</p>
            <p className="meta mt-8 border-t border-[var(--color-rule)] pt-4">
              Source: {story.source.publisher}, {story.source.date}
            </p>
            {story.source.url && (
              <a
                href={story.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[0.875rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
              >
                Open the verified page
              </a>
            )}
          </div>

          <aside className="rounded-sm border border-dashed border-[var(--color-rule-firm)] p-6">
            <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
              What we are following next
            </span>
            <h2 className="display mt-4 text-[1.875rem] leading-tight">The next update</h2>
            <p className="mt-3 leading-relaxed text-[var(--color-soft)]">{story.openQuestion}</p>
          </aside>
        </div>

        <div className="mt-16 border-t border-[var(--color-rule)] pt-8">
          <Link
            href="/record"
            className="text-[0.9375rem] font-bold text-[var(--color-murram)] underline underline-offset-4"
          >
            See the programme record &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { FieldNote } from "@/content/stories";

export function StoryCard({ story }: { story: FieldNote }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper)] transition-colors duration-200 hover:border-[var(--color-murram)]">
      <Link href={`/stories/${story.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[var(--color-sunk)]">
        <Image
          src={story.image}
          alt={story.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-[var(--color-murram)]">{story.programme}</p>
        <p className="meta mt-2">{story.place}</p>
        <h3 className="display mt-4 text-[1.875rem] leading-tight transition-colors duration-200 group-hover:text-[var(--color-murram)]">
          <Link href={`/stories/${story.slug}`}>{story.title}</Link>
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--color-soft)]">{story.lede}</p>
      </div>
    </article>
  );
}

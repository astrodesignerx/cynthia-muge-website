import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fieldNotes } from "@/content/stories";
import { StoryCard } from "@/components/StoryCard";

export const metadata: Metadata = {
  title: "Stories from the wards",
  description:
    "Field notes from documented programme activity across Nandi County.",
};

export default function StoriesPage() {
  return (
    <>
      <header className="night relative isolate overflow-hidden">
        <Image
          src="/img/facebook/we-had-a-fruitful-community-engagement-wit-1-2048x1591.jpg"
          alt="A community engagement in Nandi County"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "50% 42%" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0C1420] via-[#0C1420]/84 to-[#0C1420]/45" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
          <p className="label rise text-[var(--color-gold)]">From the wards</p>
          <h1 className="display rise mt-6 max-w-[12ch] text-[3.5rem] leading-[0.94] text-white sm:text-[5rem]">
            Stories from the wards
          </h1>
          <p className="rise mt-7 max-w-[48ch] text-[1.125rem] leading-relaxed text-[var(--color-on-night-soft)]">
            A closer look at the people, places, and work across Nandi.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-[62ch]">
          <h2 className="display text-[2.75rem] leading-tight">A closer look at the work.</h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-[var(--color-soft)]">
            Each note begins with a place and follows a piece of work from there.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {fieldNotes.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>

        <section className="mt-20 border-t border-[var(--color-rule)] pt-12">
          <p className="eyebrow">A continuing conversation</p>
          <h2 className="display mt-4 max-w-[18ch] text-[2.5rem] leading-tight">
            The story continues with the people who live it.
          </h2>
          <p className="mt-5 max-w-[58ch] leading-relaxed text-[var(--color-soft)]">
            As more people share their experiences, these field notes will grow into first-person stories with their voices, places, and everyday outcomes at the centre.
          </p>
          <Link
            href="/record"
            className="mt-7 inline-block rounded-sm bg-[var(--color-murram)] px-6 py-3 text-[0.9375rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--color-murram-deep)]"
          >
            Read the full record
          </Link>
        </section>
      </main>
    </>
  );
}

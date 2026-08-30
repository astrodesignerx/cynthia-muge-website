import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[3rem]">That page is not here.</h1>
      <p className="mt-4 leading-relaxed text-[var(--color-soft)]">
        It may have moved. The record of every programme is on one page.
      </p>
      <Link
        href="/record"
        className="mt-7 inline-block rounded bg-[var(--color-murram)] px-6 py-3 text-[0.9375rem] font-bold text-white transition-colors duration-150 hover:bg-[var(--color-murram-deep)]"
      >
        Go to the record
      </Link>
    </div>
  );
}

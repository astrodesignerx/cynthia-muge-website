/**
 * The lockup from her own Mama na Kahawa graphic, rebuilt in the site palette.
 * Structure kept exactly: a rule of three stars, then HON. in a chip beside
 * CYNTHIA, then MUGE oversized beneath, then the promise in a solid bar.
 */
export function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex flex-col items-start leading-none">
      {/* stars rule */}
      <span
        aria-hidden
        className="flex w-full items-center gap-[3px] pb-[3px] text-[0.4rem]"
      >
        <span className="h-px flex-1 bg-[var(--color-on-night-soft)]/45" />
        <span className="text-[var(--color-on-night-soft)]">★</span>
        <span className="text-[var(--color-murram)]">★</span>
        <span className="text-[var(--color-gold)]">★</span>
        <span className="h-px flex-1 bg-[var(--color-on-night-soft)]/45" />
      </span>

      <span className="flex items-center gap-[0.3em]">
        <span
          className={`rounded-[2px] bg-[var(--color-gold)] px-[0.35em] py-[0.1em] font-bold tracking-[0.06em] text-[#1A1206] ${
            big ? "text-[0.6875rem]" : "text-[0.5rem]"
          }`}
        >
          HON.
        </span>
        <span
          className={`display tracking-[0.01em] text-[var(--color-on-night)] ${
            big ? "text-[1.375rem]" : "text-[1rem]"
          }`}
        >
          CYNTHIA
        </span>
      </span>

      <span
        className={`display -mt-[0.06em] tracking-[0.005em] text-[var(--color-gold)] ${
          big ? "text-[2.75rem]" : "text-[1.9rem]"
        }`}
      >
        MUGE
      </span>

      <span
        className={`mt-[0.28em] w-full rounded-[2px] bg-[var(--color-murram)] px-[0.5em] py-[0.18em] text-center font-bold uppercase tracking-[0.13em] text-white ${
          big ? "text-[0.625rem]" : "text-[0.4375rem]"
        }`}
      >
        Keeping the Promise
      </span>
    </span>
  );
}

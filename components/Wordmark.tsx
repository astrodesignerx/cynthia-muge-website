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
          className={`heavy rounded-[2px] bg-[var(--color-gold)] px-[0.4em] py-[0.14em] leading-none tracking-[0.05em] text-[#1A1206] ${
            big ? "text-[0.8125rem]" : "text-[0.5625rem]"
          }`}
        >
          HON.
        </span>
        <span
          className={`heavy leading-[1] tracking-[0.015em] text-[var(--color-on-night)] ${
            big ? "text-[1.5rem]" : "text-[1.0625rem]"
          }`}
        >
          CYNTHIA
        </span>
      </span>

      <span
        className={`heavy mt-[0.1em] leading-[0.78] tracking-[0.01em] text-[var(--color-gold)] ${
          big ? "text-[3.25rem]" : "text-[2.125rem]"
        }`}
      >
        MUGE
      </span>

      <span
        className={`heavy mt-[0.22em] w-full rounded-[2px] bg-[var(--color-murram)] px-[0.5em] py-[0.22em] text-center uppercase leading-none tracking-[0.11em] text-white ${
          big ? "text-[0.75rem]" : "text-[0.5rem]"
        }`}
      >
        Keeping the Promise
      </span>
    </span>
  );
}

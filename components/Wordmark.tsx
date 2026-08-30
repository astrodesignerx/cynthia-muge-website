/**
 * The lockup from her own Mama na Kahawa graphic, rebuilt in the site palette.
 * Structure kept exactly: a rule of three stars, then HON. in a chip beside
 * CYNTHIA, then MUGE oversized beneath, then the promise in a solid bar.
 */
export function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex flex-col items-start leading-none">
      <span className="flex items-baseline gap-[0.28em]">
        <span
          className={`heavy self-center rounded-[2px] bg-[var(--color-gold)] px-[0.4em] py-[0.16em] leading-none tracking-[0.05em] text-[#1A1206] ${
            big ? "text-[0.8125rem]" : "text-[0.5625rem]"
          }`}
        >
          HON.
        </span>
        <span
          className={`heavy leading-[0.9] tracking-[0.015em] text-[var(--color-on-night)] ${
            big ? "text-[2rem]" : "text-[1.375rem]"
          }`}
        >
          CYNTHIA
        </span>
        <span
          className={`heavy leading-[0.9] tracking-[0.015em] text-[var(--color-gold)] ${
            big ? "text-[2rem]" : "text-[1.375rem]"
          }`}
        >
          MUGE
        </span>
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

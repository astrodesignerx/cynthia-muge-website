/**
 * The lockup from her own Mama na Kahawa graphic, rebuilt in the site palette.
 * Three blocks, each skewed to the right as on the original: the HON. chip,
 * the two names, and the promise bar, with the pair of angled slits that sit
 * off the end of the bar.
 */
export function Wordmark({ size = "lg" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";

  // The whole lockup leans; the type inside counter-leans so it stays upright.
  const lean = "skew-x-[-9deg]";
  const upright = "skew-x-[9deg]";

  return (
    <span className="inline-flex flex-col items-start leading-none">
      <span className="flex items-baseline gap-[0.3em]">
        <span
          className={`${lean} self-center rounded-[2px] bg-[var(--color-gold)] px-[0.45em] py-[0.18em]`}
        >
          <span
            className={`${upright} heavy block leading-none tracking-[0.05em] text-[#1A1206] ${
              big ? "text-[0.8125rem]" : "text-[0.5rem]"
            }`}
          >
            HON.
          </span>
        </span>

        <span className={lean}>
          <span
            className={`${upright} heavy block leading-[0.9] tracking-[0.015em] ${
              big ? "text-[2rem]" : "text-[1.125rem]"
            }`}
          >
            <span className="text-[var(--color-on-night)]">CYNTHIA</span>{" "}
            <span className="text-[var(--color-gold)]">MUGE</span>
          </span>
        </span>
      </span>

      <span className="mt-[0.3em] flex w-full items-stretch gap-[0.35em]">
        <span
          className={`${lean} flex-1 rounded-[2px] bg-[var(--color-murram)] px-[0.6em] py-[0.26em]`}
        >
          <span
            className={`${upright} heavy block text-center uppercase leading-none tracking-[0.1em] text-white ${
              big ? "text-[0.9375rem]" : "text-[0.5625rem]"
            }`}
          >
            Keeping the Promise
          </span>
        </span>

        {/* the two angled slits that finish the bar on the original */}
        <span aria-hidden className="flex items-stretch gap-[0.16em]">
          <span className={`${lean} w-[3px] rounded-[1px] bg-[var(--color-murram)]`} />
          <span className={`${lean} w-[3px] rounded-[1px] bg-[var(--color-gold)]`} />
        </span>
      </span>
    </span>
  );
}

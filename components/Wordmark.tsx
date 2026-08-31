/**
 * The lockup from her own Mama na Kahawa graphic, rebuilt in the site palette.
 * Three blocks, each skewed to the right as on the original: the HON. chip,
 * the two names, and the promise bar, with the pair of angled slits that sit
 * off the end of the bar.
 */
const SIZES = {
  sm: { hon: "text-[0.5rem]", name: "text-[1.125rem]", promise: "text-[0.5625rem]" },
  nav: { hon: "text-[0.509rem]", name: "text-[1.389rem]", promise: "text-[0.581rem]" },
  lg: { hon: "text-[0.8125rem]", name: "text-[2rem]", promise: "text-[0.9375rem]" },
} as const;

export function Wordmark({
  size = "lg",
  accentKey,
}: {
  size?: "sm" | "nav" | "lg";
  accentKey?: number;
}) {
  const t = SIZES[size];

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
            className={`${upright} heavy block leading-none tracking-[0.05em] text-[#1A1206] ${t.hon}`}
          >
            HON.
          </span>
        </span>

        <span className={lean}>
          <span
            className={`${upright} heavy block leading-[0.9] tracking-[0.015em] ${t.name}`}
          >
            <span className="text-[var(--color-on-night)]">CYNTHIA</span>{" "}
            <span className="text-[var(--color-gold)]">MUGE</span>
          </span>
        </span>
      </span>

      <span className="mt-[0.3em] flex w-full items-stretch gap-[0.2em]">
        <span
          className={`${lean} relative flex-1 overflow-hidden rounded-[2px] bg-[var(--color-murram)] px-[0.6em] py-[0.26em]`}
        >
          <span
            className={`${upright} font-mono italic font-medium block text-center uppercase leading-none tracking-[0.1em] text-white ${t.promise}`}
          >
            Keeping the Promise
          </span>
          {accentKey ? (
            <span key={accentKey} aria-hidden className="shine" />
          ) : null}
        </span>

        {/* the two angled slits that finish the bar on the original */}
        <span
          aria-hidden
          key={accentKey || undefined}
          className={`${accentKey ? "slit-dip " : ""}flex items-stretch gap-[0.2em]`}
        >
          <span className={`${lean} w-[0.5em] rounded-[1px] bg-[var(--color-murram)]`} />
          <span className={`${lean} w-[0.5em] rounded-[1px] bg-[var(--color-gold)]`} />
        </span>
      </span>
    </span>
  );
}

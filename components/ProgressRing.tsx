"use client";

import { useInView } from "./Motion";

/**
 * A circular completion indicator for a headline figure: a gold ring that
 * sweeps in when the section is reached, with the figure and its total in the
 * centre. Built for the dark surface. Under reduced motion the sweep snaps to
 * its end state (handled globally in globals.css).
 */
export function ProgressRing({
  value,
  total,
  label,
  className = "",
}: {
  value: number;
  total: number;
  label: string;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const R = 84;
  const C = 2 * Math.PI * R;
  const pct = total > 0 ? Math.min(1, value / total) : 0;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="var(--color-night-rule)"
          strokeWidth="11"
        />
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={seen ? C * (1 - pct) : C}
          style={{
            transition: "stroke-dashoffset 1200ms cubic-bezier(0.16, 0.84, 0.44, 1)",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="numeral text-[3rem] leading-none text-[var(--color-gold)]">
          {value}
          <span className="text-[1.125rem] text-[var(--color-on-night-soft)]">
            {" "}
            / {total}
          </span>
        </p>
        <p className="label mt-2 text-[var(--color-on-night-soft)]">{label}</p>
      </div>
    </div>
  );
}

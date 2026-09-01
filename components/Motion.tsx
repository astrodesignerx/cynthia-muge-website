"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ *
 * Motion. Two kinds: things that reveal when a section is reached,
 * and one thing tied to scroll position itself.
 * Everything here cuts to its end state under prefers-reduced-motion,
 * which is handled in globals.css so no JavaScript branch is needed.
 * ------------------------------------------------------------------ */

/** True once the element has been scrolled into view. Never flips back. */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, rootMargin]);

  return { ref, seen };
}

/**
 * Reveals its children when the section is reached.
 * `delay` staggers siblings; `as` keeps the surrounding markup semantic.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right" | "none";
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "header" | "p";
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-reveal={from}
      data-seen={seen ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Staggers each child of a list or grid by a fixed step. */
export function RevealGroup({
  children,
  step = 70,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode[];
  step?: number;
  className?: string;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  return (
    <Tag className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step} as="div">
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}

/** A hairline that fills across the top of the page as you scroll. */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-[var(--color-gold)]"
        style={{ transform: `scaleX(${pct})` }}
      />
    </div>
  );
}

/**
 * A wrapper that drifts its child a few percent as it passes the middle of
 * the viewport, giving photographs a sense of depth. Transform-only, and cut
 * to a static frame under reduced motion.
 */
export function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(-p * 100 * speed).toFixed(2)}%, 0)`;
    };
    const onMove = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * A bar that grows to its width when reached.
 * Used by the funnel, so the figures arrive rather than being already there.
 */
export function GrowBar({
  pct,
  delay = 0,
  className = "",
}: {
  pct: number;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      <div
        className="h-full rounded-full bg-[var(--color-gold)] transition-[width] duration-[900ms] ease-out motion-reduce:transition-none"
        style={{ width: seen ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

/**
 * Counts a figure up when its section is reached.
 * The value is a display string, so the digits animate while everything
 * around them, currency, separators and slashes, stays exactly as written.
 */
export function Counter({ value, ms = 1100 }: { value: string; ms?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setT(1);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      // ease out, so it settles rather than stops
      setT(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, ms]);

  // Split into runs of digits and everything else, and only count the digits.
  const parts = value.split(/(\d[\d,.]*)/);
  const shown = parts
    .map((part) => {
      if (!/^\d/.test(part)) return part;
      const decimals = part.includes(".") ? part.split(".")[1].length : 0;
      const target = Number(part.replace(/,/g, ""));
      const at = target * t;
      const out =
        decimals > 0 ? at.toFixed(decimals) : String(Math.round(at));
      // put the thousands separators back where the source had them
      return part.includes(",")
        ? Number(out).toLocaleString("en-US")
        : out;
    })
    .join("");

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}

/**
 * Six pillar chips arranged around the inside of the hero disc. All sit in
 * front of her, so nothing passes behind the cut image. Each is a link to its
 * pillar on the six-pillars page, carrying the pointer and the hover glow.
 * Positions are polar: an angle and a radius as a fraction of the disc, so
 * every chip lands inside the circle whatever size the disc renders at.
 * Shown only on large screens; earlier the whole cluster was decorative.
 */
export function FloatingPillars({
  pillars,
  className = "",
}: {
  pillars: { n: string; name: string }[];
  className?: string;
}) {
  const slug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  // deg clockwise from twelve o'clock, and how far out as a share of the radius
  const spots = [
    { deg: 316, r: 0.84, front: false, dur: "7.5s", delay: "0s", rot: -5 },
    { deg: 38, r: 0.88, front: true, dur: "9s", delay: "-2s", rot: 4 },
    { deg: 285, r: 0.82, front: true, dur: "8.2s", delay: "-4s", rot: 3 },
    { deg: 88, r: 0.90, front: false, dur: "10s", delay: "-1s", rot: -4 },
    { deg: 243, r: 0.72, front: true, dur: "8.8s", delay: "-3s", rot: 5 },
    { deg: 128, r: 0.86, front: true, dur: "7.8s", delay: "-5s", rot: -3 },
  ];

  return (
    <div className={`pointer-events-none absolute hidden lg:block ${className}`}>
      {pillars.slice(0, 6).map((p, i) => {
        const s = spots[i];
        const rad = (s.deg * Math.PI) / 180;
        // 50% is the disc centre; sin/cos put the chip on the chord
        // fixed precision, so the server and the client emit the same string
        const left = (50 + Math.sin(rad) * s.r * 50).toFixed(3);
        const top = (50 - Math.cos(rad) * s.r * 50).toFixed(3);
        return (
          <span
            key={p.n}
            className="drift absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: s.dur,
              animationDelay: s.delay,
              ["--rot" as string]: `${s.rot}deg`,
            }}
          >
            <Link
              href={`/pillars#${slug(p.name)}`}
              aria-label={`${p.name}: pillar ${p.n}`}
              className="pillar-chip pointer-events-auto flex items-center gap-2 rounded-sm border border-white/25 bg-[#0C1420]/78 px-2.5 py-1.5 shadow-lg shadow-black/40 backdrop-blur-sm"
            >
              <span className="label text-[0.5625rem] text-[var(--color-gold)]">
                {p.n}
              </span>
              <span className="whitespace-nowrap text-[0.75rem] font-semibold text-white">
                {p.name}
              </span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ *
 * Motion. Two kinds: things that reveal when a section is reached,
 * and one thing tied to scroll position itself.
 * Everything here cuts to its end state under prefers-reduced-motion,
 * which is handled in globals.css so no JavaScript branch is needed.
 * ------------------------------------------------------------------ */

/** True once the element has been scrolled into view. Never flips back. */
function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
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

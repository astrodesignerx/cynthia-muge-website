"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * A quote that reveals itself line by line as the reader scrolls.
 *
 * The text is split into words, each rendered in its own inline-block span so
 * the line breaks stay exactly as the layout would typeset them. After the
 * fonts have settled, the words are grouped into lines by their offsetTop.
 * A scroll handler maps how far the paragraph has moved through the viewport
 * to a number of revealed lines, so every word on a line fades in together
 * and the cascade is locked to the scroll, not to a timer.
 */
export function ScrollQuote({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [counts, setCounts] = useState<number[]>([]);
  const [visible, setVisible] = useState(0);

  const words = useMemo(() => text.split(/\s+/), [text]);

  const group = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (!spans.length) return;
    const rows: string[][] = [];
    let prevTop: number | null = null;
    let row: string[] = [];
    for (const s of spans) {
      const top = s.offsetTop;
      if (prevTop === null || Math.abs(top - prevTop) < 3) {
        row.push(s.textContent ?? "");
      } else {
        rows.push(row);
        row = [s.textContent ?? ""];
      }
      prevTop = top;
    }
    if (row.length) rows.push(row);
    setCounts(rows.map((r) => r.length));
  }, []);

  useEffect(() => {
    group();
    // The display font loads async, so the first measure may be against the
    // fallback. Re-measure once the real font (and any late wrapper swap) is in.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => group());
    }
  }, [group]);

  const lines = counts.length;

  useEffect(() => {
    if (lines === 0) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(lines);
      return;
    }
    let raf = 0;
    let last = -1;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const vh = window.innerHeight;
        const rect = el.getBoundingClientRect();
        const start = vh * 0.82;
        const end = vh * 0.35;
        const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
        const n = Math.max(0, Math.round(p * lines));
        if (n !== last) {
          last = n;
          setVisible(n);
        }
      });
    };
    onScroll();
    const ro = new ResizeObserver(() => {
      group();
      onScroll();
    });
    ro.observe(ref.current as Element);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [lines, group]);

  // word index -> line index, from the per-line word counts
  const lineOfWord: number[] = [];
  counts.forEach((n, li) => {
    for (let k = 0; k < n; k++) lineOfWord.push(li);
  });

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const on = lines === 0 || lineOfWord[i] < visible;
        return (
          <Fragment key={i}>
            <span
              aria-hidden
              data-w
              className="inline-block transition-opacity duration-[450ms] ease-out"
              style={{ opacity: on ? 1 : 0 }}
            >
              {w}
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </p>
  );
}

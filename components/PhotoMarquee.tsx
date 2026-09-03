"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * An endless photo marquee that drifts like a film gate and can also be
 * grabbed and dragged. The track carries two identical sets of images, so
 * the offset only lives in [0, copyWidth) and the wrap is invisible.
 */
export function PhotoMarquee({
  images,
  height = "18rem",
}: {
  images: { src: string; alt: string; pos?: string }[];
  height?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef(0);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const grabRef = useRef(0);
  const startRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  const apply = useCallback(() => {
    const el = trackRef.current;
    if (!el || !copyRef.current) return;
    const at =
      ((offsetRef.current % copyRef.current) + copyRef.current) % copyRef.current;
    el.style.transform = `translate3d(${-at}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    copyRef.current = el.scrollWidth / 2;
    const ro = new ResizeObserver(() => {
      copyRef.current = el.scrollWidth / 2;
    });
    ro.observe(el);
    apply();
    return () => ro.disconnect();
  }, [apply]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (copyRef.current && !draggingRef.current && !reduced.matches) {
        offsetRef.current +=
          (copyRef.current / 90) * Math.max(0, Math.min(0.05, (now - last) / 1000));
        apply();
      }
      last = now;
    };
    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // No point scrolling a strip nobody can see.
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(el);
    // A backgrounded tab should not keep it running either.
    const onVisibility = () =>
      document.hidden ? stop() : el.getBoundingClientRect().top < window.innerHeight && start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [apply]);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    grabRef.current = e.clientX;
    startRef.current = offsetRef.current;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    offsetRef.current = startRef.current - (e.clientX - grabRef.current);
    apply();
  };
  const onUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
  };

  return (
    <div
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className={`select-none overflow-hidden ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ touchAction: "pan-y" }}
    >
      <div ref={trackRef} className="flex w-max" style={{ willChange: "transform" }}>
        {[...images, ...images].map((im, i) => (
          <div
            key={`${im.src}-${i}`}
            className="relative mr-3 shrink-0 overflow-hidden rounded-sm bg-[var(--color-night-2)]"
            style={{ height, width: "min(78vw, 26rem)" }}
          >
            <Image
              src={im.src}
              alt={im.alt}
              fill
              sizes="(max-width: 640px) 78vw, 26rem"
              className="object-cover"
              style={{ objectPosition: im.pos ?? "center" }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

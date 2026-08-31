"use client";

import { useEffect, useRef } from "react";

/**
 * Version two, and a different idea from the first.
 *
 * Instead of a drifting constellation, this is an ordered lattice: a regular
 * grid of points, at rest, that the cursor pushes aside and lights up as it
 * passes. Order disturbed and recovering suits a section of counted figures
 * better than a random scatter, and the recovery is what carries the motion,
 * so nothing moves at all until the pointer is over it.
 *
 * One canvas, paused off-screen, and inert under reduced motion or a coarse
 * pointer, where there is no cursor to disturb anything.
 */
export function NetField({ spacing = 34 }: { spacing?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!matchMedia("(pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Dot = { hx: number; hy: number; x: number; y: number; vx: number; vy: number };
    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    let cols = 0;
    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      dots = [];
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          // stagger alternate rows, so the lattice reads as woven not square
          const hx = i * spacing + (j % 2 ? spacing / 2 : 0);
          const hy = j * spacing;
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0 });
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const REACH = 160;
    const PUSH = 26;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        // pushed away from the cursor, then pulled home by a spring
        let tx = d.hx;
        let ty = d.hy;
        let lit = 0;
        if (dist < REACH && dist > 0.01) {
          lit = 1 - dist / REACH;
          const push = PUSH * lit * lit;
          tx = d.hx + (dx / dist) * push;
          ty = d.hy + (dy / dist) * push;
        }

        d.vx = (d.vx + (tx - d.x) * 0.14) * 0.72;
        d.vy = (d.vy + (ty - d.y) * 0.14) * 0.72;
        d.x += d.vx;
        d.y += d.vy;

        const size = 1 + lit * 1.9;
        ctx.fillStyle = `rgba(216,164,60,${0.14 + lit * 0.62})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fill();

        // a short leader back to where the dot belongs, only while displaced
        if (lit > 0.18) {
          ctx.strokeStyle = `rgba(216,164,60,${lit * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(d.hx, d.hy);
          ctx.lineTo(d.x, d.y);
          ctx.stroke();
        }
      }
    };

    let raf = 0;
    let running = false;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    window.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [spacing]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

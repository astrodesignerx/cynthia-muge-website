"use client";

import { useEffect, useRef } from "react";

/**
 * A constellation net behind a dark section: points drift slowly, join to
 * their nearest neighbours, and lean towards the cursor when it is over the
 * section. Drawn on a canvas so the whole thing is one composited layer
 * rather than dozens of animated nodes.
 *
 * It is decorative: it pauses when scrolled out of view, does not run at all
 * under reduced motion or on coarse pointers, and sits behind the content.
 */
export function NetField({ density = 46 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // a net that follows the cursor has nothing to follow on touch
    if (!matchMedia("(pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const pointer = { x: -9999, y: -9999, on: false };
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // scale the count to the area so density reads the same at any width
      const target = Math.round((density * (w * h)) / (1280 * 520));
      nodes = Array.from({ length: Math.max(18, Math.min(90, target)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.on =
        pointer.x >= 0 && pointer.x <= r.width && pointer.y >= 0 && pointer.y <= r.height;
    };
    const onLeave = () => {
      pointer.on = false;
    };

    const LINK = 132;
    const REACH = 190;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // wrap, so the field never empties at an edge
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      // links between neighbours, fading with distance
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d > LINK) continue;
          ctx.strokeStyle = `rgba(216,164,60,${0.16 * (1 - d / LINK)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // the cursor pulls in the nodes near it, brighter as it closes
      if (pointer.on) {
        for (const n of nodes) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d > REACH) continue;
          const k = 1 - d / REACH;
          n.x += dx * 0.006 * k;
          n.y += dy * 0.006 * k;
          ctx.strokeStyle = `rgba(216,164,60,${0.3 * k})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = "rgba(216,164,60,0.42)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
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

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // only animate while the section is on screen
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
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

/**
 * The nav wordmark, wrapped so the tagline can carry the gold shine.
 * It plays once ~1.2s after first paint, then again whenever the logo is
 * clicked to go home. `accentKey` is bumped to restart the CSS animation.
 */
export function NavWordmark() {
  const [accent, setAccent] = useState(0);
  const entrance = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    entrance.current = setTimeout(() => setAccent((n) => n + 1), 1200);
    return () => {
      if (entrance.current) clearTimeout(entrance.current);
    };
  }, []);

  const play = useCallback(() => {
    // A click is a welcome in itself; don't also fire the delayed entrance.
    if (entrance.current) {
      clearTimeout(entrance.current);
      entrance.current = null;
    }
    setAccent((n) => n + 1);
  }, []);

  return (
    <Link
      href="/"
      aria-label="Cynthia Muge, home"
      className="shrink-0 transition-opacity duration-200 hover:opacity-85"
      onClick={play}
    >
      <Wordmark size="nav" accentKey={accent} />
    </Link>
  );
}

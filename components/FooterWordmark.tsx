"use client";

import { useCallback, useState } from "react";
import { Wordmark } from "./Wordmark";

/**
 * The footer wordmark. Unlike the nav, it queues the gold shine and the slit
 * dip whenever the logo is hovered, so the lockup greets the cursor and then
 * settles back to rest. `accentKey` is bumped to restart the CSS animation.
 */
export function FooterWordmark() {
  const [accent, setAccent] = useState(0);

  const play = useCallback(() => setAccent((n) => n + 1), []);

  return (
    <span
      aria-hidden
      onMouseEnter={play}
      className="inline-flex shrink-0 cursor-default"
    >
      <Wordmark size="lg" accentKey={accent} />
    </span>
  );
}

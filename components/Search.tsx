"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { SearchDoc } from "@/lib/search";

/** Loaded on first open: pulls in the content index and Fuse. */
type SearchFn = (q: string, limit?: number) => SearchDoc[];

type NavItem = { href: string; label: string };

// Ghosts: random site information + generic tip (tip is part of rotation)
const GHOSTS: string[] = [
  "Search Kahawa na Mama: 650,000+ seedlings…",
  "Search Elimu Ni Mwangaza: 449 scholars…",
  "Search BOSO: 846 matches, 30 wards…",
  "Search Health: the ambulance at Kabiemit…",
  "Search Dairy: 10 milk coolers…",
  "Search a ward, such as Kilibwoni or Kabiyet…",
  "Search Karebe Goldmine, ECDE literacy…",
  "Search Chepkemel, Lelmokwo, Koilot…",
  "Type to search. All text is indexed",
];

export function Search({ nav }: { nav: NavItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [ghostIdx, setGhostIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Debounced query
  const [debounced, setDebounced] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 140);
    return () => clearTimeout(t);
  }, [query]);

  // The index is fetched once, the first time the panel is opened.
  const [search, setSearch] = useState<{ fn: SearchFn } | null>(null);
  useEffect(() => {
    if (!open || search) return;
    let live = true;
    import("@/lib/search").then((m) => {
      if (live) setSearch({ fn: m.searchDocs });
    });
    return () => {
      live = false;
    };
  }, [open, search]);

  const results: SearchDoc[] = useMemo(() => {
    if (!debounced.trim() || !search) return [];
    return search.fn(debounced, 8);
  }, [debounced, search]);

  // Ghost rotation, only when empty and visible
  useEffect(() => {
    if (!mounted || !visible || query.trim()) return;
    const id = setInterval(() => setGhostIdx((i) => (i + 1) % GHOSTS.length), 3200);
    return () => clearInterval(id);
  }, [mounted, visible, query]);

  const ghostText = GHOSTS[ghostIdx % GHOSTS.length];

  // Open / close with intro/outro timing
  const doOpen = () => setOpen(true);
  const requestClose = () => setOpen(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    } else if (mounted) {
      setVisible(false);
      const t = setTimeout(() => {
        setMounted(false);
        setQuery("");
        setActive(0);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // Focus input when visible
  useEffect(() => {
    if (visible) {
      const id = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(id);
    }
  }, [visible]);

  // Esc + Cmd+K while mounted + lock page scroll without scrollbar jump (gutter is stable globally)
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    html.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        requestClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      document.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  // Click anywhere outside panel + trigger closes
  useEffect(() => {
    if (!mounted || !visible) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (triggerRef.current?.contains(t)) return;
      requestClose();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [mounted, visible]);

  // Global shortcut: / and Cmd+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) requestClose();
        else doOpen();
        return;
      }
      if (!open && !isTyping && e.key === "/") {
        e.preventDefault();
        doOpen();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => setActive(0), [results.length]);

  const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((n) => (n + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((n) => (n - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = results[active] ?? results[0];
      if (pick) {
        requestClose();
        router.push(pick.href);
      }
    }
  };

  const closeFromLink = () => requestClose();

  return (
    <>
      {/* Trigger — pill */}
      <button
        ref={triggerRef}
        type="button"
        aria-label="Search"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => (open ? requestClose() : doOpen())}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--color-night-rule)] bg-[rgba(255,255,255,0.06)] text-[var(--color-on-night-soft)] backdrop-blur-sm transition-colors duration-150 hover:border-[var(--color-gold)]/50 hover:bg-[rgba(255,255,255,0.10)] hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="6.8" cy="6.8" r="4.4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.2 10.2L13.2 13.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Backdrop — dims + blurs page content behind the panel (not the nav) */}
      {mounted && (
        <div
          aria-hidden
          onClick={requestClose}
          className={`fixed inset-x-0 bottom-0 top-[69px] z-30 bg-[#0C1420]/60 backdrop-blur-[8px] transition-opacity duration-200 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ animation: visible ? "search-backdrop-in 180ms ease-out both" : undefined }}
        />
      )}

      {/* Panel — stems from below the nav bar, themed like the nav (night) */}
      {mounted && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          className={`no-scrollbar fixed inset-x-0 top-[69px] z-50 max-h-[min(72vh,640px)] overflow-auto overscroll-contain border-y border-[var(--color-night-rule)]/60 bg-[var(--color-night)] shadow-sm transition-all duration-200 ease-out ${visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"}`}
          style={{ animation: visible ? "search-panel-in 220ms cubic-bezier(0.16,0.84,0.44,1) both" : undefined }}
        >
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-7">
            {/* Search field with rotating ghost */}
            <div className="relative">
              <span aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-on-night-soft)]/60">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="6.8" cy="6.8" r="4.4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.2 10.2L13.2 13.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              {/* Ghost placeholder — rotates random site info + tip */}
              {!query && (
                <span
                  key={ghostIdx}
                  aria-hidden
                  className="search-ghost pointer-events-none absolute inset-y-0 left-11 right-24 flex items-center truncate font-mono text-[0.9375rem] text-[var(--color-on-night-soft)]/55"
                >
                  {ghostText}
                </span>
              )}
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDownInput}
                placeholder=""
                aria-label="Search the site"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-results"
                aria-activedescendant={results.length ? `result-${active}` : undefined}
                className="relative h-12 w-full rounded-sm border border-[var(--color-night-rule)] bg-[rgba(255,255,255,0.06)] py-3 pl-11 pr-24 text-[0.9375rem] text-[var(--color-on-night)] placeholder:text-transparent focus:border-[var(--color-gold)] focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
              />
              {/* ESC pill — same style as trigger */}
              <button
                type="button"
                onClick={requestClose}
                aria-label="Close search"
                className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-sm border border-[var(--color-night-rule)] bg-[rgba(255,255,255,0.06)] px-2.5 py-1.5 font-mono text-[0.625rem] font-medium leading-none text-[var(--color-on-night-soft)] backdrop-blur-sm transition-colors duration-150 hover:border-[var(--color-gold)]/50 hover:bg-[rgba(255,255,255,0.10)] hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              >
                ESC
              </button>
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-[4.5rem] top-1/2 inline-flex -translate-y-1/2 rounded-sm px-2 py-1 text-[0.75rem] font-medium text-[var(--color-on-night-soft)]/70 hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--color-on-night)]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
            {query.trim() && results.length > 0 ? (
              <div className="mt-6">
                <ul id="search-results" role="listbox" className="grid gap-2">
                  {results.map((doc, i) => {
                    const isActive = i === active;
                    return (
                      <li key={doc.id} role="option" aria-selected={isActive} id={`result-${i}`}>
                        <Link
                          href={doc.href}
                          onClick={closeFromLink}
                          className={`group flex items-start gap-4 rounded-sm border px-4 py-3.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-0 ${
                            isActive
                              ? "border-[var(--color-gold)] bg-[rgba(216,164,60,0.12)]"
                              : "border-[var(--color-night-rule)]/50 bg-[var(--color-night-2)] hover:border-[var(--color-gold)]/30 hover:bg-[rgba(255,255,255,0.06)]"
                          }`}
                        >
                          <span
                            className={`mt-0.5 shrink-0 rounded-sm px-2 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] ${
                              doc.kind === "programme"
                                ? "bg-[var(--color-murram-wash)] text-[var(--color-murram)]"
                                : doc.kind === "story"
                                  ? "bg-[var(--color-leaf-wash)] text-[var(--color-leaf)]"
                                  : doc.kind === "pillar"
                                    ? "bg-[var(--color-amber-wash)] text-[var(--color-amber)]"
                                    : "bg-white/10 text-[var(--color-on-night-soft)]"
                            }`}
                          >
                            {doc.kindLabel}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[0.9375rem] font-semibold leading-tight text-[var(--color-on-night)] group-hover:text-[var(--color-gold)]">
                              {doc.title}
                            </span>
                            <span className="mt-1 line-clamp-2 block text-[0.8125rem] leading-relaxed text-[var(--color-on-night-soft)]">
                              {doc.excerpt}
                            </span>
                          </span>
                          <span aria-hidden className="mt-1 hidden shrink-0 text-[var(--color-on-night-soft)]/50 group-hover:text-[var(--color-gold)] sm:block">
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <p className="meta mt-4 !text-[var(--color-on-night-soft)]/60">
                  Press <kbd className="rounded border border-[var(--color-night-rule)] bg-[rgba(255,255,255,0.08)] px-1 py-0.5 font-mono text-[0.625rem] text-[var(--color-on-night-soft)]">Enter</kbd> to open{" "}
                  <span className="font-medium text-[var(--color-on-night)]">{results[active]?.title ?? results[0].title}</span>
                </p>
              </div>
            ) : query.trim() && results.length === 0 ? (
              <div className="mt-6 rounded-sm border border-dashed border-[var(--color-night-rule)]/50 bg-[rgba(255,255,255,0.04)] px-6 py-8 text-center">
                <p className="text-[0.9375rem] font-semibold text-[var(--color-on-night)]">No results for “{query}”.</p>
                <p className="meta mx-auto mt-2 max-w-[40ch] !text-[var(--color-on-night-soft)]/60">Try fewer words or check spelling.</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

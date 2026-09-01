"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

/**
 * The mobile menu: a hamburger below the tablet breakpoint that reveals the
 * nav links in a full-width panel beneath the sticky header. Mirrors the
 * Search panel's mount/visible animation so a reduced-motion preference
 * collapses it to an instant show.
 */
export function MobileMenu({ nav }: { nav: NavItem[] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isCurrent = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  const doOpen = () => setOpen(true);
  const requestClose = () => setOpen(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    } else if (mounted) {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // Lock page scroll while open
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
    };
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      document.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  // Outside click closes
  useEffect(() => {
    if (!mounted || !visible) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (triggerRef.current?.contains(t)) return;
      requestClose();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [mounted, visible]);

  return (
    <>
      {/* Trigger — pill, visible below md */}
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        onClick={() => (open ? requestClose() : doOpen())}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--color-night-rule)] bg-[rgba(255,255,255,0.06)] text-[var(--color-on-night-soft)] backdrop-blur-sm transition-colors duration-150 hover:border-[var(--color-gold)]/50 hover:bg-[rgba(255,255,255,0.10)] hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] md:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          {open ? (
            <>
              <path d="M3 3L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M2 4.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2 11.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop — below the sticky header */}
      {mounted && (
        <div
          aria-hidden
          onClick={requestClose}
          className={`fixed inset-x-0 bottom-0 top-[69px] z-30 bg-[#0C1420]/55 backdrop-blur-[6px] transition-opacity duration-200 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ animation: visible ? "search-backdrop-in 180ms ease-out both" : undefined }}
        />
      )}

      {/* Panel — full-width below the header, night themed */}
      {mounted && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`no-scrollbar fixed inset-x-0 top-[69px] z-50 max-h-[min(72vh,640px)] overflow-auto overscroll-contain border-y border-[var(--color-night-rule)]/60 bg-[var(--color-night)] shadow-sm transition-all duration-200 ease-out ${visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"}`}
          style={{ animation: visible ? "search-panel-in 220ms cubic-bezier(0.16,0.84,0.44,1) both" : undefined }}
        >
          <div className="mx-auto max-w-7xl px-6 py-6">
            <ul className="grid gap-1">
              {nav.map((item) => {
                const current = isCurrent(item.href);
                if (item.href === "/contact") {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={requestClose}
                        aria-current={current ? "page" : undefined}
                        className="mt-1 block rounded-sm bg-[var(--color-gold)] px-4 py-3 text-[0.9375rem] font-bold text-[#1A1206] transition-colors duration-200 hover:bg-[var(--color-gold-soft)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={requestClose}
                      aria-current={current ? "page" : undefined}
                      className="block border-b border-[var(--color-night-rule)]/50 py-3.5 text-[1.0625rem] font-medium transition-colors duration-150 hover:text-[var(--color-gold)]"
                    >
                      <span className={current ? "text-[var(--color-gold)]" : "text-[var(--color-on-night)]"}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

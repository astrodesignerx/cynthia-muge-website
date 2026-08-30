"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Marks the section you are in, including its sub-pages. */
export function MainNav({ nav }: { nav: { href: string; label: string }[] }) {
  const path = usePathname();

  const isCurrent = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  return (
    <nav aria-label="Main" className="-mx-2 overflow-x-auto px-2">
      <ul className="flex items-center gap-x-6 whitespace-nowrap">
        {nav.map((item) => {
          const current = isCurrent(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`relative block py-1 text-[0.875rem] font-medium transition-colors duration-150 lg:text-[0.9375rem] ${
                  current
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-on-night-soft)] hover:text-[var(--color-gold)]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[var(--color-gold)] transition-[width] duration-300 ease-out ${
                    current ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

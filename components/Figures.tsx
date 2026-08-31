import type { Figure, Source, Coverage, Gap } from "@/lib/types";

export function SourceLine({ source }: { source: Source }) {
  const text = `${source.publisher}, ${source.date}`;
  return (
    <p className="meta mt-3 border-t border-[var(--color-rule)] pt-2">
      <span className="text-[var(--color-soft)]">Source</span>{" "}
      {source.url ? (
        <a
          href={source.url}
          className="underline decoration-[var(--color-rule-firm)] underline-offset-2 hover:text-[var(--color-murram)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        text
      )}
    </p>
  );
}

/**
 * A figure renders one of three ways. There is no fourth path. A value
 * without a source cannot be constructed (see lib/types.ts).
 */
export function FigureCard({ figure }: { figure: Figure }) {
  if (figure.status === "verified") {
    return (
      <div className="bg-[var(--color-paper)] p-6">
        <p className="display text-[2.875rem] leading-none tabular-nums text-[var(--color-murram)]">
          {figure.value}
        </p>
        <p className="mt-3 text-[0.875rem] leading-snug text-[var(--color-soft)]">
          {figure.label}
        </p>
        <SourceLine source={figure.source} />
      </div>
    );
  }

  const statusLabel =
    figure.status === "unconfirmed" ? "Awaiting confirmation" : "Being gathered";
  return (
    <div className="bg-[var(--color-paper)] p-6">
      <p
        className="display text-[2.875rem] leading-none text-[var(--color-rule-firm)]"
        aria-label="No figure published"
      >
        &mdash;
      </p>
      <p className="mt-3 text-[0.875rem] leading-snug text-[var(--color-soft)]">
        {figure.label}
      </p>
      <p className="mt-3 border-t border-[var(--color-rule)] pt-2">
        <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2 py-[3px] text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
          {statusLabel}
        </span>
      </p>
      <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-faint)]">
        {figure.note}
      </p>
    </div>
  );
}

export function FigureGrid({ figures }: { figures: Figure[] }) {
  if (!figures.length) return null;
  const n = figures.length;
  // Widest column count that divides evenly, so the last row is usually full.
  const perRow = n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : 3;
  const cols =
    perRow === 4 ? "lg:grid-cols-4" : perRow === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  // Any shortfall would show the grid-line colour through, so pad it out.
  const fill = (perRow - (n % perRow)) % perRow;
  return (
    <div
      className={`grid gap-px border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 ${cols}`}
    >
      {figures.map((f) => (
        <FigureCard key={f.label} figure={f} />
      ))}
      {Array.from({ length: fill }).map((_, i) => (
        <div key={`fill-${i}`} aria-hidden className="hidden bg-[var(--color-paper)] lg:block" />
      ))}
    </div>
  );
}

export function CoverageChart({
  rows,
  note,
}: {
  rows: Coverage[];
  note?: string;
}) {
  if (!rows.length) return null;
  const max = Math.max(...rows.map((r) => r.value ?? 0), 1);

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {rows.map((r) => {
          const pct = r.value === null ? 0 : (r.value / max) * 100;
          return (
            <li
              key={r.area}
              className="grid grid-cols-[7rem_1fr_4rem] items-center gap-4"
            >
              <span
                className={`text-[0.875rem] ${
                  r.lead
                    ? "font-bold text-[var(--color-murram)]"
                    : "text-[var(--color-soft)]"
                }`}
              >
                {r.area}
              </span>
              <span className="h-5 overflow-hidden rounded-sm bg-[var(--color-sunk)]">
                {r.value !== null && (
                  <span
                    className={`block h-full rounded-sm ${
                      r.lead
                        ? "bg-[var(--color-murram)]"
                        : "bg-[var(--color-leaf)]"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                )}
              </span>
              <span
                className={`text-right font-mono text-[0.8125rem] tabular-nums ${
                  r.lead
                    ? "font-bold text-[var(--color-murram)]"
                    : "text-[var(--color-faint)]"
                }`}
              >
                {r.display}
              </span>
            </li>
          );
        })}
      </ul>
      {note && (
        <p className="mt-5 max-w-[62ch] text-[0.875rem] leading-relaxed text-[var(--color-faint)]">
          {note}
        </p>
      )}
    </div>
  );
}

export function GapCards({ gaps }: { gaps: Gap[] }) {
  if (!gaps.length) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {gaps.map((g) => (
        <div
          key={g.title}
          className="rounded border border-dashed border-[var(--color-rule-firm)] p-5"
        >
          <span className="inline-block rounded-sm bg-[var(--color-amber-wash)] px-2 py-[3px] text-[0.625rem] font-bold uppercase tracking-[0.11em] text-[var(--color-amber)]">
            {g.tag === "Unconfirmed"
              ? "Awaiting confirmation"
              : g.tag === "Not measured"
                ? "Being gathered"
                : "Next update"}
          </span>
          <p className="mt-3 text-[1rem] font-bold">{g.title}</p>
          <p className="mt-1 text-[0.875rem] leading-relaxed text-[var(--color-soft)]">
            {g.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ol className="border-t border-[var(--color-rule)]">
      {sources.map((s, i) => (
        <li
          key={`${s.publisher}-${i}`}
          className="grid grid-cols-[1.75rem_1fr] gap-4 border-b border-[var(--color-rule)] py-3.5"
        >
          <span className="font-mono text-[0.75rem] font-medium tabular-nums text-[var(--color-murram)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.875rem] leading-relaxed text-[var(--color-soft)]">
            <b className="block text-[var(--color-ink)]">
              {s.publisher}
              {s.date ? `, ${s.date}` : ""}
            </b>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--color-rule-firm)] underline-offset-2 hover:text-[var(--color-murram)]"
              >
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Section({
  title,
  lead,
  children,
  className = "",
}: {
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`pt-14 ${className}`}>
      <h2 className="display text-[2.125rem]">{title}</h2>
      {lead && (
        <p className="mt-2 max-w-[62ch] text-[1rem] leading-relaxed text-[var(--color-soft)]">
          {lead}
        </p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}

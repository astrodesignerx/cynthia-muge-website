/**
 * The evidence contract.
 *
 * The whole point of this site is that a figure cannot be published without a
 * source. That rule is enforced here in the type system rather than left to
 * discipline: a Figure is a discriminated union, so TypeScript will not let you
 * write a value without also writing where it came from.
 */

export type Source = {
  label: string;
  publisher: string;
  date: string;
  url?: string;
};

/** A number we can stand behind, with its provenance attached. */
export type VerifiedFigure = {
  status: "verified";
  value: string;
  label: string;
  source: Source;
  note?: string;
};

/** A figure that exists in circulation but the office has not confirmed. */
export type UnconfirmedFigure = {
  status: "unconfirmed";
  /** Deliberately no `value`. An unconfirmed number is not published. */
  label: string;
  note: string;
};

/** Something nobody has counted yet. Saying so is the point. */
export type UnmeasuredFigure = {
  status: "unmeasured";
  label: string;
  note: string;
};

export type Figure = VerifiedFigure | UnconfirmedFigure | UnmeasuredFigure;

export type Phase = {
  name: string;
  period: string;
  quantity: string;
  beneficiaries: string;
  detail: string;
};

export type Coverage = {
  area: string;
  /** null where the number is not published. Renders as a dash, never a guess. */
  value: number | null;
  display: string;
  lead?: boolean;
};

export type Gap = {
  title: string;
  body: string;
  tag: "Not measured" | "Open question" | "Unconfirmed";
};

export type Partner = { name: string; role: string };

export type Programme = {
  slug: string;
  /** Lead photograph for the programme page. */
  hero?: string;
  heroAlt?: string;
  name: string;
  oneLine: string;
  started: string;
  /** Omit while the programme is still running. */
  ended?: string;
  status: string;
  lastUpdated: string;
  figures: Figure[];
  phases: Phase[];
  coverage: Coverage[];
  coverageNote?: string;
  distinctive?: { title: string; body: string };
  partners: Partner[];
  gaps: Gap[];
  sources: Source[];
};

/** Type guard used by the figure component to pick a render path. */
export function isVerified(f: Figure): f is VerifiedFigure {
  return f.status === "verified";
}

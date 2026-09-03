import { programmes, pillars, parliament, oversight, wards } from "@/content/programmes";
import { fieldNotes } from "@/content/stories";
import Fuse from "fuse.js";

export type SearchKind =
  | "programme"
  | "pillar"
  | "parliament"
  | "story"
  | "ward"
  | "page";

export type SearchDoc = {
  id: string;
  title: string;
  href: string;
  excerpt: string;
  body: string;
  kind: SearchKind;
  kindLabel: string;
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  // Static pages
  const pages: SearchDoc[] = [
    {
      id: "page-about",
      title: "About Cynthia Muge",
      href: "/about",
      excerpt: "Life in Nandi, from Kilibwoni to Parliament, and a site rooted in the record.",
      body: "About Cynthia Muge biography Kilibwoni Ward County Assembly independent Woman Representative Nandi life story family education parliament",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-stories",
      title: "Stories from the wards",
      href: "/stories",
      excerpt: "Field notes from documented programme activity across Nandi County.",
      body: "Stories field notes wards Chepkemel Lelmokwo Koilot community voices places work",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-pillars",
      title: "The six pillars",
      href: "/pillars",
      excerpt: "Road Network, Education, Health, Water, Wealth Creation, Governance.",
      body: "Pillars Road Network Education Health Water Wealth Creation Governance Nandi 2027 agenda declaration county top seat devolution",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-record",
      title: "The Record",
      href: "/record",
      excerpt: "Six programmes across Nandi, and the work taking shape in each one.",
      body: "Record programmes Kahawa na Mama Elimu Ni Mwangaza BOSO Supercup Health and Infrastructure Dairy Value Chain Group Empowerment NGAAF figures",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-parliament",
      title: "In Parliament",
      href: "/parliament",
      excerpt: "Committee oversight, public positions, and the questions carried from Nandi into Parliament.",
      body: "Parliament National Assembly Implementation Health committee oversight Social Health Authority SHA Duale hospitals Rivatex police brutality ethnic profiling Sports Youth Social Welfare SHIF tariffs Karebe Goldmine Koitalel Samoei University ECDE literacy Mashujaa Day bills sponsored floor record Mzalendo",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-boso",
      title: "BOSO Supercup",
      href: "/boso",
      excerpt: "A football and volleyball league that reached every ward in Nandi in three months.",
      body: "BOSO football volleyball tournament wards teams matches prize money Chepkunyuk Seroi FC sub-county county final",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-media",
      title: "Media",
      href: "/media",
      excerpt: "Photographs, documents, and the sources behind the record.",
      body: "Media photographs documents sources Facebook register images",
      kind: "page",
      kindLabel: "Page",
    },
    {
      id: "page-contact",
      title: "Contact",
      href: "/contact",
      excerpt: "Reach the Office of the Woman Representative, Nandi County.",
      body: "Contact office Woman Representative Nandi County email phone address",
      kind: "page",
      kindLabel: "Page",
    },
  ];
  docs.push(...pages);

  // Programmes - one doc per programme with ALL text
  for (const p of programmes) {
    const figuresText = p.figures.map((f) => ("value" in f ? `${f.value} ${f.label}` : f.label) + ("note" in f && (f as { note?: string }).note ? ` ${(f as { note?: string }).note}` : "")).join(" ");
    const phasesText = p.phases.map((ph) => `${ph.name} ${ph.period} ${ph.quantity} ${ph.beneficiaries} ${ph.detail}`).join(" ");
    const coverageText = p.coverage.map((c) => c.area + " " + c.display).join(" ");
    const gapsText = p.gaps.map((g) => `${g.title} ${g.body} ${g.tag}`).join(" ");
    const partnersText = p.partners.map((pt) => `${pt.name} ${pt.role}`).join(" ");
    const sourcesText = p.sources.map((s) => `${s.label} ${s.publisher} ${s.date}`).join(" ");

    docs.push({
      id: `programme-${p.slug}`,
      title: p.name,
      href: `/record/${p.slug}`,
      excerpt: p.oneLine,
      body: [
        p.name, p.oneLine, p.started, p.ended ?? "", p.status,
        figuresText, phasesText, coverageText, gapsText, partnersText, sourcesText,
        p.distinctive?.title ?? "", p.distinctive?.body ?? "",
        p.coverageNote ?? "",
      ].join(" "),
      kind: "programme",
      kindLabel: "Programme",
    });
  }

  // Field notes / stories
  for (const s of fieldNotes) {
    docs.push({
      id: `story-${s.slug}`,
      title: s.title,
      href: `/stories/${s.slug}`,
      excerpt: s.lede,
      body: [s.title, s.programme, s.place, s.lede, s.body, s.openQuestion, s.source.label, s.source.publisher].join(" "),
      kind: "story",
      kindLabel: "Story",
    });
  }

  // Pillars
  for (const pl of pillars) {
    docs.push({
      id: `pillar-${slugify(pl.name)}`,
      title: pl.name,
      href: `/pillars#${slugify(pl.name)}`,
      excerpt: pl.body,
      body: [pl.name, pl.body, pl.detail, pl.already, pl.question, pl.source.publisher].join(" "),
      kind: "pillar",
      kindLabel: "Pillar",
    });
  }

  // Parliament items
  for (const item of parliament.items) {
    docs.push({
      id: `parliament-${slugify(item.title)}`,
      title: item.title,
      href: "/parliament",
      excerpt: item.body.slice(0, 140),
      body: [item.title, item.body, item.tag, item.year].join(" "),
      kind: "parliament",
      kindLabel: "Parliament",
    });
  }

  // Oversight: the committee work and the interventions
  docs.push({
    id: "oversight-sha",
    title: oversight.headline.title,
    href: "/parliament",
    excerpt: oversight.headline.body.slice(0, 140),
    body: [
      oversight.headline.title,
      oversight.headline.body,
      oversight.headline.body2,
      "oversight Social Health Authority SHA Duale Cabinet Secretary health committee hospitals reimbursements claims",
    ].join(" "),
    kind: "parliament",
    kindLabel: "Oversight",
  });

  for (const item of oversight.items) {
    docs.push({
      id: `oversight-${slugify(item.title)}`,
      title: item.title,
      href: "/parliament",
      excerpt: item.body.slice(0, 140),
      body: [item.title, item.body, item.year, "oversight"].join(" "),
      kind: "parliament",
      kindLabel: "Oversight",
    });
  }

  // Wards - searchable as places
  for (const w of wards) {
    docs.push({
      id: `ward-${slugify(w)}`,
      title: w,
      href: "/boso",
      excerpt: `Ward in Nandi County. BOSO reached all 30 wards`,
      body: `${w} ward Nandi BOSO constituency Kapsabet Tinderet`,
      kind: "ward",
      kindLabel: "Ward",
    });
  }

  return docs;
}

// Singleton
let _docs: SearchDoc[] | null = null;
let _fuse: Fuse<SearchDoc> | null = null;

export function getSearchDocs(): SearchDoc[] {
  if (!_docs) _docs = buildDocs();
  return _docs;
}

export function getFuse(): Fuse<SearchDoc> {
  if (_fuse) return _fuse;
  _fuse = new Fuse(getSearchDocs(), {
    includeScore: true,
    includeMatches: false,
    threshold: 0.38,
    ignoreLocation: true,
    minMatchCharLength: 2,
    useExtendedSearch: false,
    keys: [
      { name: "title", weight: 0.45 },
      { name: "excerpt", weight: 0.3 },
      { name: "body", weight: 0.18 },
      { name: "kindLabel", weight: 0.07 },
    ],
  });
  return _fuse;
}

export function searchDocs(query: string, limit = 8): SearchDoc[] {
  const q = query.trim();
  if (!q) return [];
  return getFuse().search(q, { limit }).map((r) => r.item);
}

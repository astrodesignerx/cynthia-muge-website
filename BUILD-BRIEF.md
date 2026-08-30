# cynthiamuge.com — Rebuild Brief

**Stack:** Next.js 16+ (App Router), pnpm, TypeScript, Tailwind v4. Dev on **port 3017**.
**Deliverable:** a working site that answers the strategic problem below, not a brochure.

---

## 1. The problem this site exists to solve

Her core political vulnerability, established across the research, is **not popularity — it
is verifiability.** Everything she has delivered is documented as inputs (things handed
out) and nothing as outcomes. A resident has published a detailed public challenge asking
for procurement records, supplier names, prices and beneficiary lists by ward. The current
site makes this worse: it opens on tournament registration and carries round unsourced
figures (`10+ programs`, `100,000+ lives impacted`, `300+ communities`, `5+ years active`)
plus a broken `/projects` link.

**Design consequence:** every number on this site carries a source, or is explicitly
marked as not yet measured. The site should feel like a **record**, not a poster. That
single decision drives the whole visual system.

### Non-negotiables

1. **No unsourced figures anywhere.** Each stat renders with its source. Where a figure is
   unmeasured, say so in the UI rather than estimating.
2. **Keep the sports registration.** It works and serves real people. Move it to
   `/boso` — do not delete it. It is currently the homepage; it becomes a section.
3. **Figures come from one data file**, not hard-coded in components, so the office can
   update without a developer. See §5.
4. **Bilingual-ready.** Copy in English, but the type and layout must accommodate Nandi
   and Swahili strings. Don't hard-code English into layout assumptions.
5. **Fast on a cheap Android phone over 3G.** Static-first, minimal JS, real images
   optimised. This is the actual delivery condition in Nandi.

---

## 2. Visual identity

### Palette — grounded in Nandi, not in party colours

| Token | Hex | Role | Why this colour |
|---|---|---|---|
| `murram` | `#A8442A` | Primary accent | The red laterite of Nandi's roads. Every voter sees it daily. Local, warm, earthy. |
| `murram-deep` | `#7E3220` | Pressed / hover | |
| `leaf` | `#2C6049` | Secondary | Coffee and tea leaf. Ties to Kahawa na Mama and the highland landscape. |
| `ink` | `#141A16` | Text | Near-black with a green bias, so it sits in the same family rather than reading as pure grey. |
| `soft` | `#4A5751` | Secondary text | |
| `faint` | `#7E8A84` | Meta, captions, sources | |
| `paper` | `#FFFFFF` | Ground | |
| `sunk` | `#EFF1ED` | Panels, table headers | |
| `rule` | `#DBDDD5` | Hairlines | |

**Deliberately avoided:**
- **UDA yellow.** Ties her to the party rather than her own record — and the party ticket
  is not the argument she is making. Her strength is a personal delivery record.
- **Pure political red or blue.** Generic, and red alone reads as opposition/danger.
- **Gradients, glass, glow.** Anything that looks like a startup deck undercuts "record".

Semantic colours are separate from the accent and are used only for evidence state:
`verified` uses `leaf`, `unmeasured` uses `#8A6410` (amber), never the murram accent.

### Typography

| Role | Face | Rationale |
|---|---|---|
| Display | **Instrument Serif** (400 + italic) | A serif signals *document, record, institution* — which is the site's whole thesis. It also differentiates from every competitor running bold sans campaign type. Used at 28px and above only. |
| Text / UI | **Manrope** (400/500/700/800) | Humanist geometric, excellent at small sizes on phones, wide language coverage for Swahili and Kalenjin diacritics. |
| Data / sources | **JetBrains Mono** (400/500) | Marks a citation as visually distinct from prose. When a figure carries a mono source line beneath it, the reader learns to expect provenance. This is information design doing real work, not decoration. |

Instrument Serif and Manrope are already used across the pitch deck, the work sheets and
the dossier — so the site is visibly the same system, which is itself the argument for
commissioning the identity work.

**Scale:** 12 / 14 / 16 / 18 / 21 / 26 / 34 / 46 / 64. Body 16–18px. Line length 62–70ch.

### The mark

Do **not** invent an elaborate logo. The mark is:

- **Wordmark:** `CYNTHIA MUGE` in Instrument Serif, with a 2px murram rule beneath.
- **Monogram:** `CM` in the same face, for favicon, avatars and small placements.
- **Nickname lockup:** `Cheptikonyol` in Instrument Serif italic, used as a secondary
  signature where the audience is local. (Translation given: *the bringer of gifts* /
  *the right posture* — both positive readings.)

It must survive being screenshotted and reposted by supporter pages at 32px. Simple beats
clever here, because the identity's job is consistency, not personality.

### Motion

Per house rules, nothing snaps. 120–250ms, standard easing, transform and opacity only.
Honour `prefers-reduced-motion`. Keep it minimal — this is a record, not an experience.

---

## 3. Information architecture

```
/                     Home — who she is, the record in numbers, latest
/record               THE CORE PAGE. All programmes, sourced.
/record/[slug]        One programme: figures, phases, wards, partners, gaps, sources
/about                Biography, education, political timeline
/boso                 Sports tournaments + registration (moved from homepage)
/boso/volleyball/rules
/boso/football/rules
/media                Speeches, video archive, press
/contact              Office contact, ward coordinators
```

`/projects` currently 404s — redirect it to `/record`.

### `/record/[slug]` page anatomy — the most important template

Each programme page renders, in this order:

1. **Header** — name, one-line description, status, last-updated date
2. **Headline figures** — each with a mono source line beneath it
3. **Phases table** — period, quantity, beneficiaries, detail
4. **Coverage** — by sub-county / ward, bar chart, counted values only
5. **What makes it distinctive** — the substantive argument (e.g. the spousal
   joint-registration charter for Kahawa na Mama)
6. **Partners** — named, with role
7. **What has not been measured** — dashed-border cards, amber tag. *This section is
   required and must not be removed.* It is what makes the page credible.
8. **How to check this** — numbered source list

A working reference implementation of this page already exists at
`programme-record-demo.html` in the repo root. Match its structure and honesty.

---

## 4. Content to migrate from the live site

Sourced from cynthiamuge.com, 29 Aug 2026.

### Biography (`/about`)
Born 1993, Kipsirichoi village, Kilibwoni Ward, Emgwen Constituency. Eldest of six.
Kapchemoiywo Primary (1998–2007) · Moi Girls Isinya (2008–2011) ·
BA Urban and Regional Planning, UoN (2012–2016) · MA Project Planning and Management,
UoN (2018–2020). Married to Mathew Rotich, two sons.

**2017** — Elected MCA, Kilibwoni Ward, at 24. Ran as an **independent**.
Chaired Sports, Youth and Social Welfare. Served on Trade and Investments, Appointments,
Liaison, Public Accounts.
**2022** — Woman Representative, Nandi County, UDA, **275,500 votes**.

> The 2017 independent run is the single most under-used fact about her. It is the direct
> rebuttal to the "political project" tag. Give it weight in the timeline, don't bury it.

### Programmes (`/empowerment` → `/record`)
| Programme | Current site copy | Notes |
|---|---|---|
| Mama na Kahawa | Coffee seedlings to women and PWDs, climate-smart livelihoods | Flagship. Full data available. |
| Water Projects | Boreholes at **Tulwo Girls High** and **Kabolebo Primary** | |
| Markets | **Kaiboi Market** construction site visit | |
| Boda Boda | Rider support | Add: shades at **Ndalat Centre** and **Kapkilel** |
| Education | Student support | This is **Elimu Ni Mwangaza** — name it properly |
| Healthcare | — | Add: **fully kitted ambulance, Kabyemit Dispensary, Mosop** |

**Delete the unsourced hero stats.** `100,000+ lives impacted` is worth less than
`650,000 seedlings to ~4,000 women across six sub-counties (Kenya News Agency, Jun 2025)`
precisely because the second can be checked.

### Verified figures to seed the data file

**Kahawa na Mama** — src: Kenya News Agency, 15 Jun 2025; MyGov
- Pilot 2023/24: 150,000 seedlings, 900 women, 63 self-help groups, Ruiru 11 + Batian
- Phase II from Jun 2025 (Maraba Primary, Aldai): 500,000 more; cumulative 650,000+, ~4,000 women
- Phase III 2026: 22,000 distributed at Koilot ACC, Ol'lessos Ward, Nandi Hills
- All six sub-counties. Nandi Hills leads with 1,000+ women.
- Partners: NGAAF, Agriculture and Food Authority, Nandi County Government, Baraka Agricultural College
- **Distinctive:** charter requiring joint registration of coffee bushes between spouses
- **Unmeasured:** survival rate (a "90%" figure circulating is a supporter's estimate, not a
  survey), cherry delivered and paid, joint registrations completed, market/processing capacity

**Elimu Ni Mwangaza** — src: supporter posts, needs office confirmation
- Full scholarships. Pioneer cohort entered Form One 2023, sitting KCSE 2026.
- 206 KCSE candidates dedicated. **Total appears as both 409 and 449 — must be resolved
  before publishing.** Render as `figure: null, status: "unconfirmed"` until the office confirms.

**BOSO Supercup** — src: Nandi Updates
- All 30 wards, 499 teams, 846 matches, 83 playing fields, 6 constituencies, three months
- KSh 2.7m ward-level prize money, men's and women's
- County grand finale December 2026

**County finance** — src: Controller of Budget FY2024/25 (use in a `/record` explainer)
- Total KSh 10.2bn, 98% absorption. Recurrent KSh 6.6bn (102% of budget).
  Development KSh 3.3bn (90% of budget).

---

## 5. Data model

All figures live in `content/` as typed data, never inline in JSX.

```ts
type Source = { label: string; publisher: string; date: string; url?: string }

type Figure = {
  value: number | string | null
  unit?: string
  label: string
  source?: Source            // required when value is present
  status?: 'verified' | 'unconfirmed' | 'unmeasured'
  note?: string              // shown when unconfirmed/unmeasured
}

type Programme = {
  slug: string
  name: string
  oneLine: string
  started: string
  status: string
  lastUpdated: string
  figures: Figure[]
  phases: Phase[]
  coverage: { area: string; value: number | null; note?: string }[]
  distinctive?: { title: string; body: string }
  partners: { name: string; role: string }[]
  gaps: { title: string; body: string; tag: 'unmeasured' | 'open question' }[]
  sources: Source[]
}
```

**Enforce it:** a figure with a `value` and no `source` should fail the build or render a
visible warning in dev. That constraint is the whole point of the site.

---

## 6. Build requirements

- `pnpm dev` runs on **port 3017** (`next dev -p 3017` in the script)
- Next.js 16+, App Router, TypeScript strict, Tailwind v4
- Static generation wherever possible; no client JS for content pages
- Semantic HTML, real headings, visible focus states, `prefers-reduced-motion` honoured
- Fonts via `next/font/google` — self-hosted, no layout shift
- `<title>` and OG tags per page; a real favicon from the `CM` monogram
- Lighthouse: aim 95+ on performance and accessibility
- **Light mode only.** Every colour explicitly painted. No dark-mode blocks.
- Images: use `next/image`, pull existing assets from `cynthiamuge.com/images/` and
  `/img/empowerment/` as placeholders, marked clearly in code as needing replacement with
  the campaign's own photography.

## 7. Definition of done

- [ ] `pnpm dev` serves on 3017 with no console errors
- [ ] Every rendered figure has a source line or an explicit unmeasured/unconfirmed tag
- [ ] `/record/kahawa-na-mama` matches the structure of `programme-record-demo.html`
- [ ] The "what has not been measured" section is present and populated
- [ ] Sports registration still reachable and working at `/boso`
- [ ] `/projects` redirects to `/record`
- [ ] Type scale, palette and mark applied consistently from a single tokens file
- [ ] Builds clean: `pnpm build` with no type errors
- [ ] README documents how the office updates a figure without touching code

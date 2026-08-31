# cynthiamuge.com

The record of Hon. Cynthia Jepkosgei Muge, Woman Representative for Nandi County.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3017
pnpm build    # production build
```

Next.js 16 · React 19 · Tailwind v4 · TypeScript strict · light mode only.

---

## The one rule

**A figure cannot be published without a source.** This is enforced in the type
system, not by discipline. In `lib/types.ts`, `Figure` is a discriminated union:

- `verified` — **requires** a `source`. TypeScript will not compile without one.
- `unconfirmed` — has **no `value` field at all**. An unconfirmed number cannot be
  rendered even by accident. Renders as a dash plus the reason.
- `unmeasured` — same. Renders as a dash plus what has not been counted.

This exists because the site's whole purpose is answering the charge that her
record cannot be checked. The previous site carried claims like
`100,000+ lives impacted`, which is worth less than
`650,000 seedlings to ~4,000 women (Kenya News Agency, June 2025)` precisely
because the second survives being checked.

---

## Updating a figure without touching a component

All content lives in **`content/programmes.ts`**. No component hard-codes a
statistic.

To change a number:

```ts
{
  status: "verified",
  value: "650,000+",                    // 1. the number
  label: "Certified seedlings distributed to date",
  source: {                              // 2. where it came from — required
    label: "Kahawa na Mama programme uplifts Nandi's women",
    publisher: "Kenya News Agency",
    date: "15 June 2025",
    url: "https://...",                  //    optional but preferred
  },
}
```

Then update `lastUpdated` on that programme.

**To publish a figure that is currently unconfirmed**, change its `status` to
`"verified"` and add both `value` and `source`. Until you do, it stays a dash.
That is intentional — see the open ward breakdown on `elimu-ni-mwangaza`. The
current total of 449 is published from the official page, while the older
sub-county breakdown still sums to 411 and remains clearly marked as incomplete.

**To record something nobody has counted**, add it to that programme's `gaps`.

---

## Structure

```
app/
  page.tsx                 Home
  record/page.tsx          All programmes + county finance explainer
  record/[slug]/page.tsx   THE core template — figures, phases, coverage,
                           partners, what has not been measured, sources
  stories/                 Field notes organised by person and place
  about/                   Biography, timeline, education
  boso/                    Tournament + football and volleyball registration
  media/                   Linked speech and video archive
  contact/
components/Figures.tsx     Figure, coverage, gap and source rendering
components/StoryCard.tsx   Person, place and proof field-note card
content/programmes.ts      ALL content and figures
content/stories.ts         Documented field notes and their sources
lib/types.ts               The evidence contract
```

`/projects`, `/empowerment`, and `/about/festival` redirect to their new
destinations. The old `/volleyball/rules`, `/football/rules`, and `/register/*`
routes redirect into `/boso` so links from existing posts continue to work.

Verified-page image candidates are staged in `public/img/facebook/`. Their
intended uses and publication checks are recorded in
`FACEBOOK-IMAGE-REGISTER.md`.

---

## Visual identity

Defined once in `app/globals.css` under `@theme`. Everything consumes those
tokens.

| Token | Hex | Role |
|---|---|---|
| `murram` | `#A8442A` | Primary accent — the red laterite of Nandi's roads |
| `leaf` | `#2C6049` | Secondary — coffee and tea leaf |
| `amber` | `#8A6410` | Semantic only: unmeasured / unconfirmed |
| `ink` | `#141A16` | Text, near-black with a green bias |

Deliberately **not** UDA yellow: party colour ties her to the ticket, and in a
UDA-dominant primary every rival shares it. Murram and leaf read as *Nandi*.

**Type:** Instrument Serif (display, 28px+) · Manrope (text and UI) ·
JetBrains Mono (figures and source lines). The mono on citations is doing real
work — when a number always carries a mono source beneath it, the reader learns
to expect provenance.

Full rationale in `BUILD-BRIEF.md`.

---

## Before this goes live

- [ ] Confirm the Elimu Ni Mwangaza ward breakdown and launch year
- [ ] Add real office contact details to `/contact`
- [ ] Replace placeholder imagery with the campaign's own photography
- [ ] Compile beneficiary counts per sub-county for the coverage charts
- [ ] Attach post context, rights, credits, consent, and alt text to staged Facebook images

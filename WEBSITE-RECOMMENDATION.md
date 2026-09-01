# Website Recommendation

**Project:** cynthiamuge.com
**Date:** 31 August 2026
**Scope:** Website structure, copy, content, visual elements, evidence handling, and implementation sequence.
**Deferred:** The wider campaign concept and campaign material will be developed after this website direction is approved.
**Facebook asset status:** 18 verified-page image candidates are now staged in `public/img/facebook/`.
**Tone status:** Warm-first copy pass implemented across the visible site; evidence states and source requirements remain unchanged.

## Executive Recommendation

Replace the current sports-first portal with a public record of Hon. Cynthia Jepkosgei Muge's work in Nandi County, while preserving BOSO registration as a working service.

The website should answer three questions quickly:

1. Who is Cynthia Muge?
2. What has the office done, and where?
3. What can a resident check for themselves?

The proposed content rule is **person, place, proof**. A story should connect a real person or group to a ward, a specific action, an evidence item, and an honest note about what is still unknown.

The current local Next.js application is the right foundation for this direction. It already has programme records, an evidence type model, legacy redirects, and the six-pillar structure. It should be refined and reconciled before it replaces the live site.

## What The Live Site Does Today

Audited at `https://cynthiamuge.com` on 31 August 2026.

| Route | Current state | Recommendation |
| --- | --- | --- |
| `/` | Two BOSO registration cards only | Make this the entry point to Cynthia, the record, the six pillars, and BOSO. |
| `/about` | Useful biography, but generic promotional language | Rewrite around place, education, the 2017 independent win, and the 2022 election. |
| `/about/festival` | Tournament overview with dated competition claims | Move into `/boso`, retain rules and registration, and update stage status as the tournament progresses. |
| `/empowerment` | Ten programme cards and unsourced headline claims | Redirect to `/record`; map every legacy programme to a sourced record or mark it as awaiting confirmation. |
| `/contact` | Social links only | Add office details, WhatsApp, email, phone, ward coordination, and media contact routes. |
| `/projects` | Returns 404 | Redirect permanently to `/record`. |
| `/volleyball/rules` | Rules page works; checkbox unlocks registration | Preserve the URL and redirect or embed the new registration flow. |
| `/football/rules` | Rules page works; heading uses a volleyball emoji and has a manager typo | Preserve the URL and correct the copy during migration. |
| `/register/volleyball` | Reachable form collecting team and player data | Preserve the service, add privacy and consent language, and confirm data handling with the office. |
| `/register/football` | Reachable form collecting team and player data | Preserve the service, add privacy and consent language, and correct the form copy. |
| `/download/mama-na-kahawa` | Two-page NGAAF application form | Keep as a primary document and explain what it proves and what it does not prove. |

The live site currently exposes no meaningful social-share description or Open Graph preview in the inspected pages. `sitemap.xml` also returns 404. These should be fixed during migration.

## Website Positioning

### Recommended public promise

> **For the women and young people of Nandi.**

> A record of the people, places, and work that have shaped her service.

This is the website welcome, not the campaign slogan. It introduces the people first and gives the evidence a supporting role.

### Existing language to preserve

- `Keeping The Promise Leadership & Excellence` remains a recognised identity line from the existing site.
- `#KeepingThePromise` can label delivery stories.
- `Re-igniting the Pride of Nandi` belongs on the future vision and campaign layer.
- `#FormNiMama` should not be forced into every record page. It is a campaign signature, not an evidence label.

### Voice rules

- Use short, direct sentences.
- Name the person, ward, institution, date, or document whenever it is known.
- Prefer “distributed”, “registered”, “funded”, “sat”, “visited”, and “submitted” over vague verbs such as “transformed” or “empowered”.
- Do not use “impact” unless the impact has been measured and sourced.
- Do not publish a rounded figure because it sounds impressive.
- Keep first-person beneficiary voices separate from office claims.
- Keep future intentions separate from completed work.
- Say “not yet measured” or “awaiting confirmation” without hiding the gap.

## Proposed Information Architecture

### Primary navigation

- About
- The record
- Stories from the wards
- Six pillars
- In Parliament
- BOSO Supercup
- Media
- Contact

### Routes

```text
/                         Home: identity, record preview, latest stories
/about                    Biography, education, political timeline
/record                   Six programmes and county-finance context
/record/[slug]            One sourced programme record
/stories                  Human stories organised by person and place
/stories/[slug]           One story with consent, source, and related record
/pillars                  2027 vision, clearly separated from delivered work
/parliament               Committee work, positions, and public questions
/boso                     Tournament overview and registration entry points
/boso/football            Football rules, stages, and registration
/boso/volleyball           Volleyball rules, stages, and registration
/media                    Linked video, speech, and press archive
/contact                  Office, WhatsApp, email, social, and ward routes
```

### Legacy URL protection

Keep redirects for:

- `/projects` to `/record`
- `/empowerment` to `/record`
- `/volleyball/rules` to `/boso/volleyball`
- `/football/rules` to `/boso/football`
- `/register/volleyball` to the new volleyball registration experience
- `/register/football` to the new football registration experience

Do not remove working registration links from old Facebook posts or search results.

## Homepage Plan

The homepage should move from “register for a tournament” to “understand the person and inspect the work”.

### 1. First viewport

**Eyebrow:** `Woman Representative, Nandi County`

**Headline:** `For the women and young people of Nandi.`

**Supporting copy:** `A record of the people, places, and work that have shaped her service.`

**Primary action:** `Explore the work`

**Secondary action:** `Meet the people`

Use one decisive real photograph, not a collage or a decorative cut-out. A person doing or receiving something is stronger than a podium image.

### 2. Start with a place

**Heading:** `Find the work near you.`

Show the six sub-counties and thirty wards as a navigable index. A ward can be listed before it has complete data, but the interface must say “record being compiled” rather than imply full coverage.

### 3. What the office has counted

Show three to four documented figures only. Each figure needs a quiet source line at the point of reading. Do not use the existing live claims:

- `10+ Programs`
- `100,000+ Lives Impacted`
- `300+ Communities`
- `5+ Years Active`

The homepage currently hard-codes statistics in `app/page.tsx:167-201`. Move these into the same typed content model as programme figures.

### 4. The record

Introduce the six programme records with varied image-led layouts rather than six identical cards. Every preview should show:

- Programme name
- One-line description
- One sourced headline figure, or a visible “not yet measured” state
- Last updated date
- Link to the full record

### 5. Stories from the wards

Show three human stories, each with a visible place stamp:

```text
Kilibwoni Ward · Emgwen Constituency
Kahawa na Mama
The story of [person], [specific action], and what the record shows next.
```

Do not publish a beneficiary name, face, income, school result, phone number, or household detail without specific consent.

### 6. The six pillars

Present the pillars as the future-facing vision, not as proof that the work is already complete. Use two labels:

- `On the record`
- `The next responsibility`

This prevents the current office record and the 2027 platform from becoming one undifferentiated claim.

### 7. The open record

Make unresolved information visible but calm:

> Some figures are still being checked. The record shows what is confirmed, what is unconfirmed, and what has not yet been measured.

Link to the open questions on each programme page.

### 8. Contact and follow-through

End with a practical action, not another slogan:

> Have a correction, document, or question about a programme in your ward?

Actions: `Contact the office` and `View the media archive`.

## Page Copy Recommendations

### About

Replace generic phrases such as “visionary leader”, “remarkable transformation”, and “humble village girl” with specific biography copy:

> Born in 1993 in Kipsirichoi village, Kilibwoni Ward, Emgwen Constituency, Cynthia Muge is the eldest of six. In 2017, at twenty-four, she won the Kilibwoni Ward seat as an independent. In 2022, she was elected Woman Representative for Nandi County.

Give the 2017 independent run visual weight. It is a strong piece of personal history and should not be buried in a timeline.

### The record

Use the page introduction:

> Six programmes. What each one reached. The sources behind the figures. The questions that remain open.

The existing record index in `app/record/page.tsx:24-35` should distinguish:

- Verified figures
- Unconfirmed figures
- Unmeasured items
- Open evidence gaps

### Programme records

Keep the current order in `app/record/[slug]/page.tsx`:

1. Header and status
2. Figures with source lines
3. Phases
4. Geographic coverage
5. What makes the programme distinctive
6. Partners
7. Still to be counted
8. Sources

Add a human story between the distinctive explanation and partners when a consented story exists. It should not be required for publication of the underlying record.

### Six pillars

Use:

> Six priorities for the next responsibility: roads, education, health, water, wealth creation, and governance.

Each pillar needs a clear split between:

- What is already documented
- What is proposed
- What still needs a baseline or county-level evidence

### Parliament

Retain the 2017 and 2022 timeline, committee work, and public positions. Add source lines to all year, vote, and count references. The existing summary figures in `app/parliament/page.tsx:127-140` should not bypass the evidence system.

### BOSO

Keep registration prominent. Reframe the page around the participants and the rules as well as the tournament totals:

> Thirty wards. Players, organisers, fields, fixtures, and rules that apply to everyone.

Show women’s and men’s participation, ward names, stages, prize structure, and the next scheduled round. Keep future dates visibly marked as planned.

### Media

Turn the current static list into a useful archive. The local research already contains eleven live-video IDs. Every item should have:

- Direct link
- Date
- Location, where known
- Duration
- Title
- Transcript or short description
- Captions or subtitles when available

Do not leave two recordings titled “Untitled” if the office can identify them.

### Contact

Required fields and actions:

- Office address
- Phone number
- Email address
- WhatsApp link
- Press contact
- Programme enquiry route
- BOSO registration route
- Ward coordinator information, if approved for publication

## Reusable Website Elements

### Source line

Every verified number gets a visible source line:

```text
Source: Kenya News Agency, 15 June 2025
```

Link to the source where possible. The current `SourceLine` component in `components/Figures.tsx:3-21` is a good base.

### Evidence state

Use three states only:

- `Verified`: value and source shown
- `Unconfirmed`: dash, explanation, and office question
- `Not measured`: dash and explanation of what has not been counted

The type contract in `lib/types.ts:17-41` should remain the governing rule.

### Ward stamp

Use a consistent small metadata block:

```text
WARD · CONSTITUENCY · DATE
```

This adapts the distinctive writing habit found in the verified Facebook posts into a useful website navigation and story device.

### Human story block

Each story should contain:

- Name or approved anonymous description
- Ward and constituency
- First-person quote, edited only for clarity
- What happened
- What can be checked
- What remains open
- Consent status in the editorial archive, not necessarily on the page

### Next update card

Use a restrained dashed-border treatment with amber only for information being gathered. Present the item as the next update, not as a failure or a challenge to the reader.

### Document viewer or download

Use primary documents deliberately: NGAAF forms, budget lines, registers, rules, and official statements. Add a plain-language explanation of the document's evidentiary limit.

## Evidence And Content Corrections Before Launch

The following must be reconciled before public promotion:

- Elimu Ni Mwangaza currently publishes 449 students, while its coverage breakdown still sums to 411. See `content/programmes.ts:268-327`.
- The site describes the scholarship launch year as 2023 while also marking the launch year unconfirmed. See `content/programmes.ts:271-305`.
- “Kahawa na Mama” and the office's `#MamaNaKahawa` spelling should be standardised after office confirmation.
- Coffee cherry delivery and payment are now narrower questions because the office says the first beneficiaries have begun harvesting. The remaining question is volume and price paid.
- Kabiemit Health Centre and Kabyemit Dispensary should be checked against the facility and vehicle markings before publication.
- Boda boda shade locations need one approved list. The research contains both earlier and later location sets.
- Every homepage, BOSO, parliamentary, and finance number must move into structured content with a source.

Do not use the current live `100,000+ lives impacted` language anywhere in the replacement site.

## Photography Plan

### Approved source pools

The current site images can be used as temporary placeholders, but the archive notes that many are low resolution. The Facebook harvest is the stronger source of current, local material.

The `phototab-*` images are approved for consideration and should not be excluded by filename. They are eligible for use after the rights and context check below.

Eighteen candidates have been copied into `public/img/facebook/` from the verified-page harvest. They cover the portrait, community engagement, women and youth groups, boda boda shades, coffee, education, dairy, Parliament, BOSO, and `phototab-*` categories. They are not yet referenced by a public route. The file-level register is `FACEBOOK-IMAGE-REGISTER.md`.

### First image shortlist

| Use | Candidate files |
| --- | --- |
| Community story | `we-had-a-fruitful-community-engagement-wit-1` through `-5` |
| Boda boda proof | `well-designed-bodaboda-shades-1` through `-4` |
| Women and youth groups | `baraka-112-women-group-and-chepkemel-youth-1` through `-5` |
| Coffee and seedlings | `i-m-pleased-to-report-that-22-000-coffee-s...` and the nursery images |
| Education | `the-service-to-commit-this-year-s-kcse-stu-1` through `-5` |
| Student evidence | `looking-at-these-compositions-by-two-grade-1` |
| Dairy | `milk-coolers-flagging-off-1` and `-2` |
| Parliament | `i-joined-the-president-h-e-william-samoei-...` and `karen-nairobi-city-county-kenya-*` |
| BOSO | `boso-supercup-2026-football-edition-*` and `boso-supercup-2026-ward-champions-*` |
| Portrait candidate | `i-am-not-a-small-girl-anymore-1-1367x2048.jpg`, pending identity and rights confirmation |
| Evidence graphics | `lifting-the-economic-footprint-of-a-county-1-1600x1573.jpg`, used as a source artifact, not as a current counted total |

The complete archive and contact sheets are documented in:

`C:\Users\Host\Documents\Hon. Cynthia Muge\images\facebook\_index.txt`

### Rights and context check

Before any image is shipped, record:

- Original verified-page post URL
- Post date and location
- Photographer or office ownership
- Permission to use on the website, print, social, and paid promotion
- Consent from identifiable adults
- Parent or guardian process for minors
- Extra care for funerals, patients, students, PWDs, and personal documents
- Required credit
- Approved crop and focal point

Public availability does not by itself grant reuse rights. The office should provide written authorization or the photographer's permission for campaign and website reuse.

### What is needed to source more verified-page photos

No Facebook password should be sent in chat. The sourcing workflow needs:

1. An already authenticated Chrome session on the verified page, accessible to the local OpenCLI reader.
2. The exact date range or posts to inspect.
3. Priority categories, such as portrait, ward engagement, coffee, education, health, dairy, BOSO, Parliament, or women and youth groups.
4. Permission from the office to download and republish the photographs.
5. Photographer ownership or a reuse confirmation where the office did not produce the images.
6. Original-resolution files where available. Facebook downloads may be compressed.
7. Post URLs or an office-provided export if the reader cannot expose the page's full media feed.
8. Names, locations, dates, and consent notes for identifiable people.

The authenticated OpenCLI profile read confirms the verified page identity but does not expose the full post media feed or original post URLs. The local archive has supplied the current 18 candidates. Fresh sourcing will require either a browser session that exposes post URLs or an office-provided export of original files and metadata. No other Facebook account should be used as a source.

## Technical Implementation Plan

### Phase 0: Truth, rights, and content freeze

- Confirm the 449 scholarship total and current ward breakdown.
- Confirm programme names, facility names, dates, and locations.
- Approve the contact details and social handles.
- Create an image rights and consent register.
- Decide which existing Facebook images are approved for publication.
- Review the 18 staged candidates and attach post context, rights, credits, and consent status.

### Phase 1: Content model

- Extend `content/programmes.ts` with human story references, source-backed phases, and source-backed coverage.
- Add a shared `content/stories.ts` model for person, place, quote, consent, evidence, and open questions.
- Move homepage, BOSO, Parliament, finance, and pillar figures out of JSX.
- Add a build-time validation script for numeric claims and missing sources.

### Phase 2: Route and copy migration

- Replace the live sports-only homepage with the proposed homepage sequence.
- Add `/stories` and `/stories/[slug]`.
- Keep `/boso` as the service route for sports registration.
- Preserve all legacy redirects, including the live `/register/*` endpoints.
- Rewrite metadata, titles, descriptions, canonical URLs, and social previews.

### Phase 3: Component and visual system

- Keep the existing type contract and source components.
- Add reusable ward stamps, story blocks, document links, source-backed metric blocks, and open-question cards.
- Use real photographs with consistent crop and caption rules.
- Resolve the visual conflict between the live blue/yellow portal and the local record system. The record system should lead; decorative gradients and unsupported glow effects should not.
- Keep motion purposeful, light, and disabled for reduced-motion users.

### Phase 4: Service and archive hardening

- Test both registration flows without publishing or exposing submitted personal data.
- Add privacy, consent, retention, and office-admin instructions to registration.
- Link all media items to their actual recordings.
- Add a working contact path and WhatsApp action.
- Add sitemap, robots, Open Graph, favicon, error, and not-found handling.

### Phase 5: Verification and handover

- Run `pnpm check:images`.
- Run `pnpm build`.
- Test desktop and low-width mobile layouts.
- Test keyboard navigation, focus states, screen-reader labels, captions, and reduced motion.
- Check every live legacy URL.
- Review every visible number against the claims register.
- Provide office instructions for updating a record and replacing an image.

## Definition Of Done

- The homepage explains Cynthia and the purpose of the site within seconds.
- The homepage welcomes the people of Nandi before introducing metrics or sources.
- A resident can find a programme or ward without knowing the website's internal terminology.
- Every visible number has a source or an explicit unresolved state.
- Every human story has consent and location metadata in the editorial register.
- Every published Facebook image has verified-page provenance, reuse permission, credit, and approved alt text.
- BOSO registration remains reachable from old and new links.
- `/projects` and `/empowerment` no longer 404.
- Contact information is actionable.
- Media entries are linked and identifiable.
- Phototab images can be used through an auditable rights process.
- The site works on a cheap Android phone and remains readable in low bandwidth conditions.
- The office can identify what is confirmed, what needs updating, and what has not been measured.

## Inputs Required From The Office

- Approved full name, title, and 2027 wording
- Confirmed phone, email, WhatsApp, office address, and press contact
- Confirmed programme figures, dates, ward lists, and partners
- Beneficiary and participant consent
- Image ownership and reuse permission
- Original photographs and video where available
- Approved social account URLs and handles
- A named person responsible for future factual updates

The campaign concept, flyer copy, poster system, social banners, and video message architecture should follow after this website plan is accepted and the factual and rights registers are in place.

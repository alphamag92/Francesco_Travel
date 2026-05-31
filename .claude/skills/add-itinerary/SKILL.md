---
name: add-itinerary
description: Add a new travel itinerary to Francesco Travels (Astro). Use when the user wants to add/create a new trip, itinerary, or destination page — creates a typed data module in src/data/itineraries and wires images so it auto-appears in the filter, landing and detail route.
---

# Add an itinerary to Francesco Travels

This project renders every itinerary from a single **typed TypeScript module** validated by Zod. There is **no CMS and no MDX** — one well-formed data file is the whole itinerary. Adding a `<slug>.ts` is automatically picked up (via `import.meta.glob` in `src/data/itineraries/index.ts`) by:

- the `/itinerari` filter page,
- the landing "in evidenza" grid (if `featured: true`),
- the detail route `/itinerari/<slug>` (`getStaticPaths`).

So you only ever create **images + one data file**. Nothing else to wire.

## Step 1 — Add the images

Create `src/assets/itineraries/<slug>/` and drop the images there (they are optimized at build by `astro:assets`, so commit the originals, large is fine):

- **Cover**: ≥ 1200px wide (used for cards + OG image).
- **Day feature images**: ≥ 1400px wide.
- Use one of the supported aspect ratios (string form, hyphenated): `21-9`, `16-9`, `3-2`, `4-3`, `3-4`, `1-1`, `4-5`, `2-3`. Pick the ratio that matches the photo's real crop.

> Never reference images from `public/` or the repo-root `images/` for an itinerary — they must live in `src/assets/**` and be imported, or `astro:assets` can't optimize them.

## Step 2 — Create `src/data/itineraries/<slug>.ts`

Import each image with a **relative** path and `export default defineItinerary({...})`. The schema is the contract — open `src/data/itineraries/_schema.ts` for the authoritative shape. Fields:

**Card / SEO / filter**
- `slug` — URL slug, `[a-z0-9-]+` (becomes `/itinerari/<slug>`).
- `title`, `eyebrow`, `summary` (1–2 sentence card blurb).
- `country`, `continent` — one of: `asia`, `europa`, `nord-america`, `centro-sud-america`, `oceania`, `africa`, `medio-oriente` (see `src/lib/taxonomy.ts`). Drives the continent filter.
- `durationDays`, `durationNights` — `durationDays` auto-derives the filter bucket (`<7` / `7–14` / `>14`).
- `season?`, `tags[]` (3–6 short tags shown on the card).
- `coverImage` (imported image), `coverAlt`.
- `featured` — `true` to surface on the landing page.
- `published` (free text, e.g. `'24 Mag 2026'`), `travelers`.

**Hero**
- `heroTitleHtml` — may contain `<em>…</em>` (terracotta accent) and `<br/>`.
- `heroEyebrows` — exactly two strings.
- `heroMeta` — exactly 4 cells `{ k, v, sub? }` (Durata / Rotta / Budget·persona / Visti).

**Route**
- `mapEmbedUrl` (Google My Maps iframe src), `mapEditUrl` (the "open in maps" link).
- `routeHeadlineHtml` (may contain `<em>`), `routeLede`.
- `legs[]` — `{ n, name, sub, days }` route-overview rows.

**Chapters → days**
- `chapters[]` — `{ id, label, chapterTag, coords?, headlineHtml, blurb, days[] }`. The `id` becomes the section anchor + side-nav target (e.g. `'chap-taipei'`).
- `days[]` — `{ dayNumber, label, location, title, images[], activities[], pois[], notes[] }`:
  - `dayNumber` is a **STRING** (`'01'`, or a combined range like `'01-02'`).
  - `images[]` — `{ src (imported), alt, aspectRatio, feature }`. A single full-bleed image is `feature: true`. For a 2-up media pair, output **both** images with `feature: false`.
  - `activities[]` — `{ when, what }`.
  - `pois[]` — `{ name, lat, lon }` (numbers); use `[]` if none.
  - `notes[]` — `{ text, source?, variant: 'jade' | 'terra' }`; use `[]` if none.

**Budget** (`budget`)
- `amount` (per-person EUR number), `currency` (default `'EUR'`).
- `columns` — `'eur'` (4-col) **or** `'twd-eur'` (5-col). Only use `'twd-eur'` if you actually have TWD figures; then each row also needs `twd`.
- `withFlightTotal?` (e.g. `'~ 1.630 €'`), `altTotal?` (`{ label, value }`), `excludes[]`.
- `rows[]` — `{ category, desc, twd?, eur, status, total }`. Set `total: true` only on the final total row.

**Logistics & footer**
- `logistics` — exactly 3 cards `{ k, v, body }`.
- `footerMark` — the closing serif mark.

### Minimal skeleton (copy & expand)

```ts
import { defineItinerary } from './_schema';
import cover from '../../assets/itineraries/<slug>/cover.jpg';
import d1 from '../../assets/itineraries/<slug>/day-01.jpg';

export default defineItinerary({
  slug: '<slug>',
  title: 'Titolo del viaggio',
  eyebrow: 'Kicker',
  summary: 'Una frase che invoglia, per la card.',
  country: 'Paese',
  continent: 'asia',
  durationDays: 10,
  durationNights: 9,
  season: 'Primavera',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  coverImage: cover,
  coverAlt: 'Descrizione della cover.',
  featured: false,
  published: 'Mese Anno',
  travelers: 2,

  heroTitleHtml: 'Titolo <em>accento</em><br/>su due righe.',
  heroEyebrows: ['№ 03 · Spec. di viaggio', 'Sottotitolo'],
  heroMeta: [
    { k: 'Durata', v: '10 giorni', sub: '9 notti' },
    { k: 'Rotta', v: 'Anello', sub: 'A · B · C' },
    { k: 'Budget · persona', v: '900 €', sub: 'esclusi voli' },
    { k: 'Visti', v: 'Esenti', sub: 'IT' },
  ],

  mapEmbedUrl: 'https://www.google.com/maps/d/embed?mid=XXXX',
  mapEditUrl: 'https://www.google.com/maps/d/edit?mid=XXXX',
  routeHeadlineHtml: 'Una rotta <em>memorabile</em>.',
  routeLede: 'Due righe sul senso del percorso.',
  legs: [{ n: '01', name: 'Tappa', sub: 'note', days: 'D1 — D3' }],

  chapters: [
    {
      id: 'chap-uno',
      label: 'Tappa Uno',
      chapterTag: 'Capitolo 01 · D1 — D2',
      coords: '00.00° N · 00.00° E',
      headlineHtml: 'Tappa uno, <em>l\'arrivo</em>.',
      blurb: 'Cosa si fa in questo capitolo.',
      days: [
        {
          dayNumber: '01',
          label: 'Arrivo',
          location: 'Città',
          title: 'Titolo della giornata.',
          images: [{ src: d1, alt: 'Descrizione.', aspectRatio: '21-9', feature: true }],
          activities: [{ when: 'Pomeriggio', what: 'Cosa succede.' }],
          pois: [],
          notes: [],
        },
      ],
    },
  ],

  budget: {
    amount: 900,
    currency: 'EUR',
    excludes: ['voli internazionali'],
    columns: 'eur',
    rows: [
      { category: 'Trasporti', desc: 'Treni e bus.', eur: '~ 150', status: 'Stima' },
      { category: 'Totale', desc: 'Per persona, a terra.', eur: '~ 900', status: 'Stima', total: true },
    ],
  },

  logistics: [
    { k: 'Visti', v: 'Esenti', body: 'Dettagli.' },
    { k: 'Trasporti', v: 'Mezzo principale', body: 'Dettagli.' },
    { k: 'Quando andare', v: 'Stagione', body: 'Dettagli.' },
  ],

  footerMark: 'Arrivederci.',
});
```

## Step 3 — Nothing else to wire

`index.ts` auto-discovers the module. It now appears in `/itinerari` (filter), the landing (if `featured`), and `/itinerari/<slug>`.

## Step 4 — Validate

```bash
npm run check    # astro check — 0 errors expected
npm run build    # full build; confirm the new images optimize and the page renders
npm run preview  # open http://localhost:4321/Francesco_Travel/itinerari and filter it
```

Look for: the card shows in the right continent + duration bucket; the detail page hero/route/days render; the side-nav anchors match each chapter `id`; the budget table shows the correct number of columns.

## Common mistakes

- **Hardcoding links** like `/itinerari/...` — you don't write internal links here at all; the route is generated. Anywhere else in the app, use `withBase()` from `~/lib/paths` (the site lives under the `/Francesco_Travel` base).
- **Passing images into a React island** — never import `astro:assets` or an `ImageMetadata` into a `.tsx`. Cards in the filter island receive pre-optimized URL strings built in `itinerari.astro`.
- **Wrong `aspectRatio` format** — it's `'21-9'`, not `'21/9'` or `'21:9'`.
- **Forgetting `coverAlt`** or alt text on day images (accessibility + SEO).
- **`dayNumber` as a number** — it must be a string (supports `'01-02'`).
- **Using `columns: 'twd-eur'` without `twd` values** on the rows — only pick that variant if you have the TWD figures.
- **Putting images in `public/`** instead of `src/assets/itineraries/<slug>/` — they won't be optimized and base-path handling differs.

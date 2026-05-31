# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Francesco Travels** — a static, Italian-language, premium **editorial travel-itinerary** site.

- **Stack:** Astro 5 + TypeScript, with exactly **two React islands**.
- **Content language:** Italian (all copy, UI labels, data).
- **Deploy target:** GitHub Pages (project page) — `https://alphamag92.github.io/Francesco_Travel`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Astro dev server |
| `npm run build` | `astro check && astro build` (typecheck + build) |
| `npm run build:fast` | `astro build` only (skip typecheck) |
| `npm run preview` | Serve the production build locally (under the `/Francesco_Travel/` base) |
| `npm run check` | `astro check` (typecheck only) |

- **Node:** 22 LTS — see `.nvmrc`.
- Do not commit without running `npm run check` first; the build runs `astro check`.

## Project structure

### `src/pages/`
| Path | Role |
| --- | --- |
| `index.astro` | Landing page |
| `itinerari.astro` | Filterable itinerary list — **hosts the `ItineraryFilter` island** |
| `itinerari/[slug].astro` | Itinerary detail page (`getStaticPaths`) |
| `analisi/index.astro` | Analysis hub |
| `analisi/italia-cina.astro` | Flight price dashboard — **hosts the `FlightDashboard` island** |
| `chi-sono.astro` | About page |
| `chatbot.astro` | Disabled placeholder (route resolves by direct URL only) |
| `404.astro` | Not-found page |

### `src/layouts/`
- **`BaseLayout.astro`** — html shell: fonts (Google Fonts: DM Sans, Newsreader, JetBrains Mono), GTM (`<Analytics>` / `<AnalyticsNoscript>`), `SiteHeader` / `SiteFooter`, **View Transitions** via `<ClientRouter>`, and `<Seo>`. Props include `header` / `footer` toggles (default `true`), `mainClass`, plus SEO props (`title`, `description`, `ogImage`, `ogImageAbsolute`, `type`, `jsonLd`, `noindex`).
- **`ItineraryLayout.astro`** — wraps `BaseLayout` with `header={false}` (itinerary pages provide their own topbar), loads `itinerary.css`, sets `type="article"` + `mainClass="itinerary-main"`, and runs the **sidenav scroll-spy** (bound to `astro:page-load`).

### `src/components/`
- **`site/`** — `SiteHeader`, `SiteFooter`, `Seo`, `Analytics`, `AnalyticsNoscript`.
- **`itinerary/`** — editorial detail components: `Media`, `ItineraryTopbar`, `ChapterSideNav`, `ItineraryHero`, `RouteMap`, `ChapterIntro`, `DayCard`, `BudgetTable`, `LogisticsCards`.
- **`cards/ItineraryCard.astro`** — server-rendered card (used on the landing).
- **`react/`** — the **ONLY two islands** + their parts:
  - `ItineraryFilter.tsx` (+ `Card.tsx`, `FilterControls.tsx`, `filter.css`)
  - `FlightDashboard.tsx` (+ `charts/*`, `dashboard.css`)

### `src/data/`
- **`itineraries/`** — typed TS modules (one `<slug>.ts` per trip), `_schema.ts` (Zod + `defineItinerary()`), and `index.ts` (auto-globs every `<slug>.ts`).
- **`analisi/`** — `italia-cina.ts` + `_schema.ts`.
- **`site.ts`** — `NAV`, `SITE`, `AUTHOR`, `PAGES`, `GTM_ID`.

### `src/lib/`
- **`paths.ts`** — `withBase()` (base-aware URLs) + `isExternal()`.
- **`taxonomy.ts`** — continents + duration buckets (shared by schema and the filter island).
- **`seo.ts`** — `canonicalUrl()`, `absoluteAsset()`, site constants (`SITE_NAME`, `SITE_LANG`, etc.).

### `src/styles/`
| File | Role |
| --- | --- |
| `tokens.css` | OKLCH palette + font stacks + metrics (design tokens) |
| `base.css` | Reset, type scale, buttons, global `.media` / aspect-ratios, skip link |
| `itinerary.css` | The editorial system — **loaded ONLY by `ItineraryLayout`** |
| `cards.css` | Card styles |

### Assets & static
- **`src/assets/itineraries/{taiwan,cina}/`** — optimized itinerary/day images (imported by data modules, rendered with `astro:assets`).
- **`src/assets/FRA.jpg`** — author photo.
- **`public/`** — `favicon.svg`, `robots.txt`, `.nojekyll`, and `og/` (social share images).
  - **TODO:** add `og/default.jpg`, `og/taiwan.jpg`, `og/cina.jpg`. Until they exist, OG/Twitter images fall back to the `og/default.jpg` path (the `Seo` default).
- **`backup/`** — archived pre-Astro static site (html/css/images). **NOT part of the build** — backup/reference only.

## Key conventions (and WHY)

1. **Base path — always use `withBase()`.**
   This is a GitHub **project** page, so `astro.config.mjs` sets `base: '/Francesco_Travel'` (and `site: 'https://alphamag92.github.io'`). Astro does **NOT** auto-prefix `<a href>` or `public/` asset references with `base`, so ALWAYS wrap them in `withBase('path')` (from `~/lib/paths`). `astro:assets` (`<Image>` / `getImage()`) **does** auto-prefix base. OG/canonical URLs must be **absolute** — build them with `new URL(withBase(p), Astro.site)` (or the helpers in `seo.ts`). If you move to a custom domain later, set `base: '/'` + `site: '<domain>'`.

2. **Itineraries are typed TS modules, not MDX.**
   Each lives in `src/data/itineraries/<slug>.ts` and is validated by Zod in `_schema.ts` via `defineItinerary()`. `index.ts` auto-discovers any `<slug>.ts` with a default export via `import.meta.glob`, so a new itinerary appears in the **filter**, the **landing**, and `/itinerari/<slug>` with **no other edits**.

3. **`dayNumber` is a STRING.** It supports combined days like `'01-02'` / `'14-15'`.

4. **Budget has two table variants** via `budget.columns`:
   - `'eur'` — 4-column (used by `cina`; pairs with `withFlightTotal`).
   - `'twd-eur'` — 5-column (used by `taiwan`; pairs with `altTotal`).

5. **Images live in `src/assets/**`** — imported by data modules, rendered with `astro:assets`. **NEVER pass an `ImageMetadata` into a React island.** Pre-optimize with `getImage()` in the `.astro` page and pass plain URL **strings** (see `itinerari.astro`).

6. **Only two islands:** `ItineraryFilter` (`client:load`) and `FlightDashboard` (`client:visible`). Recharts charts are **mount-guarded** (render only after mount) for SSR safety. `.tsx` files must **not** import `astro:assets` or Astro-coupled data.

7. **View Transitions (`<ClientRouter>`):** anything that must run on every navigation binds to the **`astro:page-load`** event — both the sidenav scroll-spy and the GTM SPA pageview do this.

8. **Analytics:** GTM `GTM-KC74LVP2` (head script in `Analytics.astro`, noscript iframe in `AnalyticsNoscript.astro`). A `spa_pageview` dataLayer event is pushed on `astro:page-load`.

9. **Taxonomy lives once** in `src/lib/taxonomy.ts` (shared by schema + filter). Continents in `CONTINENTS` / `CONTINENT_LABELS`. Duration buckets: `<7` → `lt7`, `7–14` → `7-14`, `>14` → `gt14` (labels in `BUCKET_LABELS`, short labels in `BUCKET_SHORT`).

10. **Design tokens in `tokens.css` (OKLCH).** Reuse the tokens + utility classes. Do **NOT** add Tailwind or a parallel palette.

11. **Chatbot is an intentional disabled placeholder.** Its `NAV` item in `src/data/site.ts` has `disabled: true` (rendered as a muted `<span aria-disabled>`); the `/chatbot` route still resolves by direct URL.

## Deployment

- GitHub Actions workflow: **`.github/workflows/deploy.yml`** (`withastro/action@v3` + `actions/deploy-pages@v4`), triggered on push to `main` (and `workflow_dispatch`).
- **One-time manual step:** GitHub repo → **Settings → Pages → Source = "GitHub Actions"**.
- `public/.nojekyll` keeps `_astro/` from being stripped by GitHub Pages' Jekyll processing (the `withastro/action` also writes one).

## Gotchas

- Itinerary pages embed a **Google My Maps `<iframe>`** — do **not** add a strict CSP that blocks `frame-src https://www.google.com`.
- Don't move itinerary images out of `src/assets` — it breaks `astro:assets` imports.

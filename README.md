# Francesco Travels

Itinerari di viaggio, raccontati come si deve — un sito editoriale statico, in italiano, con rotte curate giorno per giorno (rotta, budget, logistica).

## Stack

- **Astro 5** + **TypeScript** (sito statico)
- **React islands** (solo due: filtro itinerari + dashboard voli; Recharts)
- **GitHub Pages** (project page, base `/Francesco_Travel`)

## Sviluppo

Node 22 LTS (vedi `.nvmrc`).

```bash
npm install        # installa le dipendenze
npm run dev        # dev server con hot reload
npm run build      # astro check && astro build
npm run preview    # serve la build sotto il base /Francesco_Travel/
```

Utile anche `npm run check` per il solo typecheck.

## Struttura

- `src/pages/` — le pagine (`index`, `itinerari`, `itinerari/[slug]`, `analisi/*`, `chi-sono`, ecc.)
- `src/layouts/` — `BaseLayout` (shell) e `ItineraryLayout` (dettaglio itinerario)
- `src/components/` — `site/`, `itinerary/`, `cards/`, `react/` (le due island)
- `src/data/` — itinerari tipizzati (`itineraries/`), analisi, `site.ts`
- `src/lib/` — `paths.ts` (`withBase`), `taxonomy.ts`, `seo.ts`
- `src/styles/` — design tokens OKLCH + CSS di base/itinerario/card
- `src/assets/` — immagini ottimizzate (`astro:assets`)
- `public/` — `favicon.png`, `apple-touch-icon.png`, `robots.txt`, `.nojekyll`, `og/`
- `backup/` — vecchio sito statico, solo per riferimento (fuori dalla build)

Per i dettagli e le convenzioni del progetto vedi **[CLAUDE.md](./CLAUDE.md)**.

## Aggiungere un itinerario

Gli itinerari sono **moduli TypeScript tipizzati** (non MDX), validati da Zod. Si crea `src/data/itineraries/<slug>.ts` con `export default defineItinerary({ ... })`: `index.ts` lo scopre in automatico e l'itinerario compare nel filtro, nella landing (se `featured`) e su `/itinerari/<slug>` senza altre modifiche.

- Schema e campi: `src/data/itineraries/_schema.ts`.
- Procedura guidata: skill **`add-itinerary`** (`.claude/skills/add-itinerary/SKILL.md`).

## Deploy

Push su `main` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages.

Passaggio manuale **una tantum**: GitHub repo → **Settings → Pages → Source = "GitHub Actions"**.

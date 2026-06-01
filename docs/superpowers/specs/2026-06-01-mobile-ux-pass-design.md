# Pass UX mobile — design

- **Data:** 2026-06-01
- **Stato:** approvato (brainstorming) → pronto per il piano di implementazione
- **Obiettivo:** rendere impeccabile la UI/UX su dispositivi mobile, **senza modificare l'interfaccia desktop** e senza rompere nulla.

## Contesto

Diagnosi dal vivo (dev server, viewport emulati 320/375/390px, console pulita):
il sito ha già una base responsive solida (type fluido `clamp()`, griglie `auto-fit/auto-fill`,
breakpoint dedicati per il sistema editoriale itinerari, `ResponsiveContainer` per i grafici,
viewport meta corretto). Gli interventi sono **rifiniture sistematiche**, non una riscrittura.

Problemi misurati:
1. **Overflow orizzontale ≤ ~356px** su landing e lista itinerari: `scrollWidth 338 > clientWidth 320`.
   Causa: `cards.css` usa `minmax(320px, 1fr)`, più largo dell'area-contenuto (320 − 36 di gutter = 284px).
2. **Tap target a 29px** su chip filtro, tab dashboard, region button; ~24px sui link nav.
   Sotto la soglia comoda per il tocco (~44px Apple / 48px Material).
3. Manca `<meta name="theme-color">`; nessuno stato `:active` per il feedback al tocco.

## Vincoli e non-obiettivi

- **Desktop pixel-identico:** ogni regola va confinata a `@media (max-width: 640px)` o alla nuova logica del drawer.
- **Nessuna nuova dipendenza**; **nessuna nuova island** (il drawer è vanilla JS dentro `SiteHeader.astro`).
- Fuori scope: layout desktop, contenuti/copy, dati, architettura delle island, breakpoint tablet/landscape.

## Decisioni di design

### 1. Header → top-sheet drawer (mobile)

`src/components/site/SiteHeader.astro`. Si riusa **lo stesso `<ul>` di nav** (niente markup
duplicato; i link restano nel DOM per SEO). A ≤640px cambia solo la presentazione:

- Header su **una riga**: brand a sinistra, **bottone menu** a destra (area di tap 44×44px,
  icona hamburger ↔ chiusura con animazione).
- Al tap si apre un **top-sheet**: pannello full-width che **scende da sotto l'header**
  (`transform: translateY(-100%) → 0`, con `prefers-reduced-motion` rispettato), con **backdrop**
  che oscura/sfoca la porzione di pagina sotto l'header.
- Link impilati, righe **≥48px**, stile mono coerente con la nav attuale.
- **Accessibilità:** `aria-expanded` + `aria-controls` sul bottone; ruolo/landmark nav invariato;
  **focus trap** mentre è aperto; chiusura con `Esc`, tap sul backdrop, tap su un link;
  ritorno del focus al bottone alla chiusura; `-webkit-tap-highlight-color` neutralizzato.
- **Scroll-lock** del body all'apertura; rilascio alla chiusura **e** alla navigazione.
- **View Transitions:** inizializzazione su `astro:page-load` (come lo scroll-spy esistente);
  il drawer si richiude e lo scroll-lock si rilascia su `astro:before-swap`.
- **Trade-off (esplicito):** senza JS il bottone è inerte → su mobile si naviga dal footer.
  Coerente, perché il sito **già richiede JS** (`<ClientRouter>`, island del filtro `client:load`).
  La nav inline resta il default >640px e per i crawler.

### 2. Tap target ≥44px (solo mobile)

Aumento di padding/area entro `@media (max-width: 640px)` (desktop invariato):

- `src/styles/filter.css` — `.itin-chip`
- `src/components/react/dashboard.css` — `.dash-tab`, `.region-btn`
- `src/components/site/SiteFooter.astro` — `.fnav a`
- `src/styles/itinerary.css` — `.gmap-link`
- `src/pages/analisi/italia-cina.astro` — `.back-link`
- link del drawer (vedi §1)

### 3. Indurimento overflow griglie (tutte)

Pattern `minmax(min(100%, <X>), 1fr)` su ogni griglia card, così la traccia non supera mai
la larghezza disponibile. **Identico da `<X>` in su**, elimina l'overflow sotto:

- `src/styles/cards.css` — `.itin-grid` (320px) ← unico che si riproduce oggi
- `src/pages/index.astro` — `.pillars` (240px), `.teasers` (260px)
- `src/pages/analisi/index.astro` — `.analisi-grid` (280px)
- `src/components/react/dashboard.css` — `.kpi-grid` (200px), `.compare-grid` (240px), `.tips-grid` (260px)

### 4. Polish premium

- `src/layouts/BaseLayout.astro` — `<meta name="theme-color">` (approssimazione di `--bg`, da
  verificare nel preview; punto di partenza `#f6f4ee`).
- `src/styles/base.css` — stati **`:active`** per il feedback al tocco (chip, tab, bottoni, card):
  cambio sfondo/leggera scala. `:hover` resta per il desktop.

## File toccati (riepilogo)

`SiteHeader.astro`, `SiteFooter.astro`, `BaseLayout.astro`, `base.css`, `cards.css`, `filter.css`,
`dashboard.css`, `index.astro`, `analisi/index.astro`, `analisi/italia-cina.astro`.
(`itinerary.css` solo per `.gmap-link`.)

## Verifica (prima di dichiarare "fatto")

- Preview a **320 / 360 / 375 / 390px**: `scrollWidth === clientWidth` su **ogni** pagina
  (landing, itinerari, dettaglio taiwan+cina, analisi hub, dashboard, chi-sono, 404).
- Tap target misurati **≥44px** sui controlli elencati.
- Drawer: apri/chiudi, `Esc`, backdrop, tap-link, focus trap, ritorno focus, scroll-lock,
  chiusura alla navigazione, `prefers-reduced-motion`.
- **Regressione desktop @1280px:** screenshot di confronto sulle pagine chiave (devono restare identiche).
- `npm run check` (typecheck) verde; **console pulita**.

## Rischi

- **Drawer + View Transitions:** rischio di stato/scroll-lock residuo tra le navigazioni →
  mitigato dai binding `astro:page-load` / `astro:before-swap` e da test esplicito.
- **theme-color:** il valore è un'approssimazione di un colore OKLCH → si rifinisce a vista nel preview.

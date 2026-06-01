# Pass UX mobile — Implementation Plan

> **For agentic workers:** verifiche basate sul preview reale (niente framework di test in questo
> repo: solo `astro check`). Step con checkbox (`- [ ]`). I commit sono **batch finale** previa
> approvazione utente (regola operativa: commit solo su richiesta) — non committare per-task.

**Goal:** rendere impeccabile la UX mobile (drawer top-sheet, tap target ≥44px, zero overflow, polish) senza toccare il desktop.

**Architecture:** modifiche confinate a `@media (max-width: 640px)` e alla nuova logica del drawer; riuso dello stesso `<ul>` di nav (nessuna island nuova, nessuna dipendenza). Verifica nel dev server già attivo (serverId del preview) a 320/360/375/390px.

**Tech Stack:** Astro 5, CSS (token OKLCH), vanilla JS nel `<script>` del componente, Recharts invariato.

---

## Riferimento: comandi di verifica nel preview

Server dev già attivo su `:4321` (base `/Francesco_Travel/`). Helper usati negli step:

- **Overflow di una pagina:** `preview_eval` →
  `JSON.stringify({p:location.pathname, w:document.documentElement.scrollWidth, c:document.documentElement.clientWidth, over:document.documentElement.scrollWidth>document.documentElement.clientWidth})`
  Atteso dopo i fix: `over:false` a 320/360/375/390px.
- **Altezza tap target:** `Math.round(document.querySelector(SEL).getBoundingClientRect().height)` → atteso `≥44`.
- Navigazione: `window.location.href='/Francesco_Travel/<path>'`.

---

## Task 1 — Indurimento overflow di tutte le griglie

**Files:**
- Modify: `src/styles/cards.css:9` (`.itin-grid`)
- Modify: `src/pages/index.astro` (`.pillars`, `.teasers`)
- Modify: `src/pages/analisi/index.astro` (`.analisi-grid`)
- Modify: `src/components/react/dashboard.css` (`.kpi-grid`, `.compare-grid`, `.tips-grid`)

- [ ] **Step 1 — Verifica rossa (stato attuale).** Resize a 320px, naviga su `/Francesco_Travel/` e `/Francesco_Travel/itinerari`, esegui l'helper overflow. Atteso ORA: `over:true` (`w≈338 > c=320`).

- [ ] **Step 2 — Applica `min(100%, …)` a ogni griglia.** Cambiare ESATTAMENTE il primo argomento di `minmax`:

`src/styles/cards.css` (`.itin-grid`):
```css
grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
```
`src/pages/index.astro`:
```css
.pillars { grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); }
.teasers { grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); }
```
`src/pages/analisi/index.astro`:
```css
.analisi-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); }
```
`src/components/react/dashboard.css`:
```css
.kpi-grid     { grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); }
.compare-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); }
.tips-grid    { grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); }
```

- [ ] **Step 3 — Verifica verde.** A 320px ripeti l'helper overflow su `/`, `/itinerari`, `/analisi`, `/analisi/italia-cina`. Atteso: `over:false` ovunque. Screenshot landing a 320px per conferma visiva (card a tutta larghezza, nessun taglio).

---

## Task 2 — Tap target ≥44px (solo mobile)

**Files:**
- Modify: `src/styles/filter.css` (`.itin-chip`)
- Modify: `src/components/react/dashboard.css` (`.dash-tab`, `.region-btn`)
- Modify: `src/components/site/SiteFooter.astro` (`.fnav a`)
- Modify: `src/styles/itinerary.css` (`.gmap-link`)
- Modify: `src/pages/analisi/italia-cina.astro` (`.back-link`)

- [ ] **Step 1 — Verifica rossa.** A 375px su `/itinerari` misura `.itin-chip` height → atteso ORA ~29.

- [ ] **Step 2 — Aggiungi blocchi mobile.** In `src/styles/filter.css`, in fondo:
```css
@media (max-width: 640px) {
  .itin-chip { padding: 13px 18px; }
}
```
In `src/components/react/dashboard.css`, in fondo:
```css
@media (max-width: 640px) {
  .dash-tab,
  .region-btn { padding: 13px 18px; }
}
```
In `src/components/site/SiteFooter.astro`, dentro il `@media (max-width: 640px)` esistente, aggiungi:
```css
.fnav a { display: inline-flex; align-items: center; min-height: 44px; }
```
In `src/styles/itinerary.css`, dentro il blocco `@media (max-width: 640px)` (≈ riga 526 dove c'è già `.gmap-link`), accorpa:
```css
.route .map-slot .gmap-link { min-height: 40px; display: inline-flex; align-items: center; }
```
In `src/pages/analisi/italia-cina.astro`, in fondo allo `<style>`:
```css
@media (max-width: 640px) {
  .back-link { display: inline-flex; align-items: center; min-height: 44px; }
}
```

- [ ] **Step 3 — Verifica verde.** A 375px: `.itin-chip`, `.dash-tab` (su `/analisi/italia-cina`), `.region-btn` (tab Regioni), `.fnav a` → tutti `≥44`. `.gmap-link` ≥40. Screenshot `/itinerari` (chip più “pieni”, layout invariato).

---

## Task 3 — theme-color + stati `:active`

**Files:**
- Modify: `src/layouts/BaseLayout.astro` (head)
- Modify: `src/styles/base.css`

- [ ] **Step 1 — theme-color.** In `src/layouts/BaseLayout.astro`, subito dopo il meta viewport (riga 44):
```html
<meta name="theme-color" content="#f6f4ee" />
```

- [ ] **Step 2 — Feedback al tocco.** In `src/styles/base.css`, dopo il blocco `.btn` (≈ riga 128), aggiungi:
```css
/* tap feedback (touch non ha :hover) */
@media (hover: none) {
  .btn:active { background: var(--ink); color: var(--bg); }
  .btn-accent:active { background: var(--terra); border-color: var(--terra); }
}
/* rimuovi il flash grigio di default su touch (sostituito dai nostri :active) */
a, button, .btn, .itin-chip, .dash-tab, .region-btn { -webkit-tap-highlight-color: transparent; }
```

- [ ] **Step 3 — Verifica.** `astro check` deve restare verde; nessun errore console. (Lo stato `:active` si conferma visivamente nel passaggio finale su un tap simulato; non blocca.)

---

## Task 4 — Drawer top-sheet su mobile

**Files:**
- Modify: `src/components/site/SiteHeader.astro` (markup, `<style>`, nuovo `<script>`)

- [ ] **Step 1 — Verifica rossa (baseline).** A 375px su `/` screenshot "before" dell'header attuale (due righe, nav a scorrimento). Conserva come confronto.

- [ ] **Step 2 — Markup.** Sostituire il blocco `<header>…</header>` con:
```astro
<header class="site-header" data-header>
  <div class="page bar">
    <a class="brand" href={withBase('')} aria-label={`${SITE.name} — home`}>{SITE.name}</a>
    <button
      class="nav-toggle"
      type="button"
      aria-label="Apri il menu"
      aria-expanded="false"
      aria-controls="site-nav"
      data-nav-toggle
    >
      <span class="nav-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
    <nav class="nav" id="site-nav" aria-label="Navigazione principale" data-nav>
      <ul>
        {NAV.map((item) => (
          <li>
            {item.disabled ? (
              <span class="nav-link is-disabled" aria-disabled="true" title="In arrivo">
                {item.label}<i class="soon">soon</i>
              </span>
            ) : (
              <a
                class:list={['nav-link', { 'is-active': isActive(item.path) }]}
                href={withBase(item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
</header>
<div class="nav-backdrop" data-nav-backdrop></div>
```

- [ ] **Step 3 — CSS: sostituire il blocco `@media (max-width: 640px)` esistente** (righe ≈106-113) con la logica drawer, e aggiungere gli stili toggle/backdrop. Aggiungere PRIMA della media query:
```css
.nav-toggle { display: none; appearance: none; background: transparent; border: 0;
  width: 44px; height: 44px; align-items: center; justify-content: center; cursor: pointer; color: var(--ink); }
.nav-toggle:focus-visible { outline: 2px solid var(--terra); outline-offset: 3px; }
.nav-toggle__bars { position: relative; width: 22px; height: 14px; }
.nav-toggle__bars span { position: absolute; left: 0; width: 100%; height: 1.5px; background: currentColor;
  transition: transform .22s ease, opacity .15s ease; }
.nav-toggle__bars span:nth-child(1) { top: 0; }
.nav-toggle__bars span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.nav-toggle__bars span:nth-child(3) { bottom: 0; }
.site-header.is-nav-open .nav-toggle__bars span:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
.site-header.is-nav-open .nav-toggle__bars span:nth-child(2) { opacity: 0; }
.site-header.is-nav-open .nav-toggle__bars span:nth-child(3) { bottom: 50%; transform: translateY(50%) rotate(-45deg); }
.nav-backdrop { display: none; }
```
Nuova media query (sostituisce la vecchia):
```css
@media (max-width: 640px) {
  .nav-toggle { display: inline-flex; }
  .brand { font-size: 18px; }
  .nav {
    position: absolute; top: 100%; left: 0; right: 0;
    background: var(--bg); border-bottom: 1px solid var(--rule);
    box-shadow: 0 18px 40px color-mix(in oklab, var(--ink) 10%, transparent);
    transform: translateY(-12px); opacity: 0; visibility: hidden;
    transition: transform .22s ease, opacity .22s ease, visibility .22s;
  }
  .nav ul { flex-direction: column; gap: 0; padding: 6px var(--gutter) 14px; }
  .nav li { width: 100%; }
  .nav-link, .nav-link.is-disabled {
    display: flex; align-items: center; width: 100%; min-height: 52px;
    font-size: 13px; letter-spacing: 0.12em;
    border-top: 1px solid var(--rule-soft); padding: 6px 0;
  }
  .nav-link.is-active::after { display: none; }
  .soon { display: inline-block; }
  .site-header.is-nav-open .nav { transform: translateY(0); opacity: 1; visibility: visible; }
  .nav-backdrop { display: block; position: fixed; inset: 0; z-index: 55;
    background: color-mix(in oklab, var(--ink) 28%, transparent); backdrop-filter: blur(2px);
    opacity: 0; pointer-events: none; transition: opacity .22s ease; }
  .site-header.is-nav-open ~ .nav-backdrop { opacity: 1; pointer-events: auto; }
}
html.nav-open, body.nav-open { overflow: hidden; }
```

- [ ] **Step 4 — Script** (aggiungere in fondo al componente, fuori dal `<style>`):
```astro
<script>
  let els = null;
  const isOpen = () => !!els && els.header.classList.contains('is-nav-open');
  function openNav() {
    if (!els) return;
    els.header.classList.add('is-nav-open');
    els.toggle.setAttribute('aria-expanded', 'true');
    els.toggle.setAttribute('aria-label', 'Chiudi il menu');
    document.documentElement.classList.add('nav-open');
    const first = els.nav.querySelector('a, button');
    if (first) first.focus();
  }
  function closeNav(restoreFocus = true) {
    if (!isOpen()) return;
    els.header.classList.remove('is-nav-open');
    els.toggle.setAttribute('aria-expanded', 'false');
    els.toggle.setAttribute('aria-label', 'Apri il menu');
    document.documentElement.classList.remove('nav-open');
    if (restoreFocus) els.toggle.focus();
  }
  function initMobileNav() {
    const header = document.querySelector('[data-header]');
    const toggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-nav]');
    const backdrop = document.querySelector('[data-nav-backdrop]');
    if (!header || !toggle || !nav) { els = null; return; }
    els = { header, toggle, nav, backdrop };
    toggle.addEventListener('click', () => (isOpen() ? closeNav() : openNav()));
    if (backdrop) backdrop.addEventListener('click', () => closeNav());
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(false); });
  }
  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') { closeNav(); return; }
    if (e.key === 'Tab') {
      const f = [els.toggle, ...els.nav.querySelectorAll('a[href], button')]
        .filter((el) => el && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('astro:before-swap', () => {
    document.documentElement.classList.remove('nav-open');
    els = null;
  });
  document.addEventListener('astro:page-load', initMobileNav);
</script>
```

- [ ] **Step 5 — Verifica drawer.** A 375px su `/`:
  - screenshot header chiuso (una riga: brand + hamburger).
  - `preview_eval` click sul toggle → screenshot top-sheet aperto (link impilati, backdrop).
  - misura un `.nav-link` height → `≥48`.
  - `Escape`/click backdrop/click link → chiude (`is-nav-open` assente, `html.nav-open` assente).
  - naviga via link → nuova pagina, drawer chiuso, `document.documentElement.classList` senza `nav-open`.
  - overflow helper → `over:false`.

- [ ] **Step 6 — Verifica desktop invariato.** Resize a 1280px su `/`: `.nav-toggle` `display:none`, nav inline a destra, screenshot identico al pre-modifica.

---

## Task 5 — Sweep finale di verifica

- [ ] **Step 1 — Overflow su tutte le pagine** a 320/360/375/390px: `/`, `/itinerari`, `/itinerari/taiwan`, `/itinerari/cina`, `/analisi`, `/analisi/italia-cina`, `/chi-sono`, `/404` (via URL inesistente). Tutte `over:false`.
- [ ] **Step 2 — Tap target** ≥44px ricontrollati (Task 2 + nav-link drawer).
- [ ] **Step 3 — `prefers-reduced-motion`:** `preview_resize` con emulazione non copre motion; verifica che le transition usino durate brevi e che il blocco globale `prefers-reduced-motion` in `base.css` le annulli (già presente). Nessuna azione se ok.
- [ ] **Step 4 — Console** `error` vuota su ogni pagina; **`npm run check`** verde.
- [ ] **Step 5 — Regressione desktop @1280px:** screenshot di `/`, `/itinerari`, `/analisi/italia-cina`, `/itinerari/taiwan` → confronto: invariati.
- [ ] **Step 6 — Riepilogo all'utente** con screenshot before/after mobile e conferma desktop invariato. Commit SOLO dopo via libera dell'utente.

---

## Self-review (vs spec)

- **Copertura spec:** drawer top-sheet → Task 4 ✓ · tap target ≥44px → Task 2 ✓ · overflow griglie (tutte) → Task 1 ✓ · theme-color + `:active` → Task 3 ✓ · verifica multi-width + desktop + check → Task 5 ✓.
- **No placeholder:** ogni step ha codice/selettori/valori reali.
- **Coerenza:** classi/attributi (`data-header`, `data-nav-toggle`, `data-nav`, `data-nav-backdrop`, `is-nav-open`, `nav-open`) usati in modo identico tra markup, CSS e script.
- **Trade-off noto:** senza JS il toggle è inerte (nav dal footer) — accettato nello spec; il sito già richiede JS.

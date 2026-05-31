# backup — sito statico pre-Astro (archivio)

Questa cartella conserva il **sito statico originale** di Francesco Travels,
sostituito dalla ricostruzione in Astro 5 (vedi `../CLAUDE.md`).

- `html/` — le 19 pagine HTML originali (incluse `japan_10days.html` e
  `tommy_china_2025.html`, gli itinerari non più pubblicati, e il vecchio
  dashboard `analisi_cina.html` usato come riferimento per la versione React).
- `css/` — i fogli di stile originali: `style.css` (legacy) e `taiwan.css`
  (il sistema editoriale da cui derivano `src/styles/tokens.css`,
  `base.css` e `itinerary.css`).
- `images/` — le immagini non riutilizzate dal nuovo sito (continenti,
  varianti anime del Giappone, aeroporti, hero precedenti, ecc.).

**Nota:** questa cartella è solo un archivio. **Non** fa parte della build
Astro (che compila esclusivamente `src/pages` + `public`) e **non** viene
deployata. I riferimenti relativi (`images/...`, `css/...`) dentro questi
HTML puntano ai percorsi del vecchio progetto e quindi le pagine qui dentro
non si visualizzano più in modo autonomo: servono a preservare i contenuti.
Lo storico completo resta comunque in git.

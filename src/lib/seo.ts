import { withBase } from './paths';

export const SITE_NAME = 'Francesco Travels';
export const SITE_LOCALE = 'it_IT';
export const SITE_LANG = 'it';
export const SITE_DESCRIPTION =
  'Itinerari di viaggio curati nei dettagli: rotte, giorno per giorno, budget e logistica. Racconti editoriali di mete autentiche e fuori dai sentieri battuti.';

const FALLBACK_ORIGIN = 'https://alphamag92.github.io';

function origin(site: URL | undefined): string {
  return site ? site.origin : FALLBACK_ORIGIN;
}

// Canonical URL from an already-base-prefixed pathname (e.g. Astro.url.pathname).
export function canonicalUrl(pathname: string, site: URL | undefined): string {
  return new URL(pathname, origin(site)).href;
}

// Absolute URL for an asset stored in public/ (e.g. og images) — base-aware.
export function absoluteAsset(path: string, site: URL | undefined): string {
  return new URL(withBase(path), origin(site)).href;
}

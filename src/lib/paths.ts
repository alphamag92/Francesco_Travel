// Base-path-aware URL helper for GitHub Pages project sites.
// import.meta.env.BASE_URL is '/Francesco_Travel/' in this project.
// ALWAYS use withBase() for internal hrefs and public/ asset references —
// Astro does NOT auto-prefix <a href> or public/ paths with `base`.

const BASE = import.meta.env.BASE_URL;

export function withBase(path = ''): string {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const clean = String(path).replace(/^\/+/, '');
  return `${base}${clean}`.replace(/([^:])\/{2,}/g, '$1/');
}

// Internal anchors keep the hash but respect base for the path part.
export function isExternal(href: string): boolean {
  return /^([a-z]+:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

// Shared taxonomy: continents + duration buckets.
// Used by the itinerary schema (server) and the filter island (client),
// so keep this module free of Astro-only / image imports.

export const CONTINENTS = [
  'asia',
  'europa',
  'nord-america',
  'centro-sud-america',
  'oceania',
  'africa',
  'medio-oriente',
] as const;

export type Continent = (typeof CONTINENTS)[number];

export const CONTINENT_LABELS: Record<Continent, string> = {
  asia: 'Asia',
  europa: 'Europa',
  'nord-america': 'Nord America',
  'centro-sud-america': 'Centro e Sud America',
  oceania: 'Oceania',
  africa: 'Africa',
  'medio-oriente': 'Medio Oriente',
};

// ---- Duration buckets: < 7 / 7–14 / > 14 giorni ----

export const DURATION_BUCKETS = ['lt7', '7-14', 'gt14'] as const;
export type DurationBucket = (typeof DURATION_BUCKETS)[number];

export function durationBucket(days: number): DurationBucket {
  if (days < 7) return 'lt7';
  if (days <= 14) return '7-14';
  return 'gt14';
}

export const BUCKET_LABELS: Record<DurationBucket, string> = {
  lt7: 'Meno di 7 giorni',
  '7-14': '7–14 giorni',
  gt14: 'Più di 14 giorni',
};

// Short labels for compact filter chips.
export const BUCKET_SHORT: Record<DurationBucket, string> = {
  lt7: '< 7 gg',
  '7-14': '7–14 gg',
  gt14: '> 14 gg',
};

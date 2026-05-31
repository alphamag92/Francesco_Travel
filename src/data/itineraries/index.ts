import type { Itinerary } from './_schema';

// Auto-discover every itinerary module in this folder. Adding a new
// `<slug>.ts` that `export default defineItinerary({...})` is enough —
// the filter, the landing and the [slug] routes all pick it up.
const modules = import.meta.glob<{ default: Itinerary }>(
  ['./*.ts', '!./index.ts', '!./_schema.ts'],
  { eager: true },
);

export const itineraries: Itinerary[] = Object.values(modules)
  .map((m) => m.default)
  .filter((x): x is Itinerary => Boolean(x && x.slug))
  // newest first by publication label is unreliable (free text); sort by title for now.
  .sort((a, b) => a.title.localeCompare(b.title, 'it'));

export function getAllItineraries(): Itinerary[] {
  return itineraries;
}

export function getFeaturedItineraries(): Itinerary[] {
  const featured = itineraries.filter((i) => i.featured);
  return featured.length > 0 ? featured : itineraries;
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}

export type { Itinerary } from './_schema';
export { toCardBase, type ItineraryCardBase } from './_schema';

import { z } from 'astro/zod';
import type { ImageMetadata } from 'astro';
import { CONTINENTS, durationBucket, type DurationBucket } from '~/lib/taxonomy';

// Imported images (astro:assets) are ImageMetadata objects, not strings,
// so we validate their shape rather than using the content-collection image().
const imageMeta = z.custom<ImageMetadata>(
  (v) =>
    !!v &&
    typeof v === 'object' &&
    'src' in (v as object) &&
    'width' in (v as object) &&
    'height' in (v as object),
  { message: 'Expected an imported image (ImageMetadata) from src/assets/**' },
);

export const ASPECT_RATIOS = ['21-9', '16-9', '3-2', '4-3', '3-4', '1-1', '4-5', '2-3'] as const;
const aspectRatio = z.enum(ASPECT_RATIOS);

const imageRef = z.object({
  src: imageMeta,
  alt: z.string(),
  aspectRatio,
  /** feature image = full-bleed at top of a day; non-feature = part of a media-pair */
  feature: z.boolean().default(true),
});

const activity = z.object({
  when: z.string(),
  what: z.string(),
});

const poi = z.object({
  name: z.string(),
  lat: z.number(),
  lon: z.number(),
});

const note = z.object({
  text: z.string(),
  source: z.string().optional(),
  variant: z.enum(['jade', 'terra']).default('jade'),
});

const day = z.object({
  /** STRING because some days collapse (e.g. "01-02", "14-15") */
  dayNumber: z.string(),
  label: z.string(),
  location: z.string(),
  title: z.string(),
  images: z.array(imageRef).default([]),
  activities: z.array(activity).default([]),
  pois: z.array(poi).default([]),
  notes: z.array(note).default([]),
});

const chapter = z.object({
  id: z.string(),
  label: z.string(),
  chapterTag: z.string(),
  coords: z.string().optional(),
  headlineHtml: z.string(),
  blurb: z.string(),
  days: z.array(day).min(1),
});

const heroCell = z.object({
  k: z.string(),
  v: z.string(),
  sub: z.string().optional(),
});

const leg = z.object({
  n: z.string(),
  name: z.string(),
  sub: z.string(),
  days: z.string(),
});

const budgetRow = z.object({
  category: z.string(),
  desc: z.string(),
  twd: z.string().optional(),
  eur: z.string(),
  status: z.string(),
  total: z.boolean().default(false),
});

const logisticsCard = z.object({
  k: z.string(),
  v: z.string(),
  body: z.string(),
});

export const ItinerarySchema = z.object({
  // ---- card / filter / SEO ----
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  eyebrow: z.string(),
  summary: z.string(),
  country: z.string(),
  continent: z.enum(CONTINENTS),
  durationDays: z.number().int().positive(),
  durationNights: z.number().int().nonnegative(),
  season: z.string().optional(),
  tags: z.array(z.string()).default([]),
  coverImage: imageMeta,
  coverAlt: z.string(),
  featured: z.boolean().default(false),
  published: z.string(),
  travelers: z.number().int().positive().default(2),

  // ---- hero ----
  heroTitleHtml: z.string(),
  heroEyebrows: z.tuple([z.string(), z.string()]),
  heroMeta: z.array(heroCell).length(4),

  // ---- route ----
  mapEmbedUrl: z.string().url(),
  mapEditUrl: z.string().url(),
  routeHeadlineHtml: z.string(),
  routeLede: z.string(),
  legs: z.array(leg).min(1),

  // ---- content ----
  chapters: z.array(chapter).min(1),

  // ---- budget (two table variants) ----
  budget: z.object({
    amount: z.number(),
    currency: z.string().default('EUR'),
    altTotal: z.object({ label: z.string(), value: z.string() }).optional(),
    withFlightTotal: z.string().optional(),
    excludes: z.array(z.string()).default([]),
    columns: z.enum(['eur', 'twd-eur']),
    rows: z.array(budgetRow).min(1),
  }),

  // ---- logistics ----
  logistics: z.array(logisticsCard).length(3),
  footerMark: z.string(),
});

export type Itinerary = z.infer<typeof ItinerarySchema>;
export type ItineraryInput = z.input<typeof ItinerarySchema>;

/** Validate + normalize a single itinerary module. Throws on schema errors. */
export function defineItinerary(input: ItineraryInput): Itinerary {
  return ItinerarySchema.parse(input);
}

/** Serializable, image-free projection used by the client filter island. */
export interface ItineraryCardBase {
  slug: string;
  title: string;
  summary: string;
  country: string;
  continent: Itinerary['continent'];
  durationDays: number;
  durationNights: number;
  durationBucket: DurationBucket;
  tags: string[];
  featured: boolean;
}

export function toCardBase(it: Itinerary): ItineraryCardBase {
  return {
    slug: it.slug,
    title: it.title,
    summary: it.summary,
    country: it.country,
    continent: it.continent,
    durationDays: it.durationDays,
    durationNights: it.durationNights,
    durationBucket: durationBucket(it.durationDays),
    tags: it.tags,
    featured: it.featured,
  };
}

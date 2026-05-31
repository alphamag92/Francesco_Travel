import { z } from 'astro/zod';

// Typed model for the Italy–China flight-price dashboard.
// All values are plain strings/numbers (no images) so the whole object
// can be passed as props into the React dashboard island.

const kpi = z.object({
  label: z.string(),
  value: z.string(),
  note: z.string(),
});

const regionPrice = z.object({
  origin: z.string(),
  low: z.number(),
  high: z.number(),
});

const region = z.object({
  id: z.enum(['beijing', 'shanghai', 'pearl_river', 'southwest']),
  emoji: z.string(),
  shortLabel: z.string(),
  title: z.string(),
  description: z.string(),
  airports: z.string(),
  airlines: z.string(),
  timing: z.string(),
  prices: z.array(regionPrice).min(1),
});

export const FlightAnalysisSchema = z.object({
  title: z.string(),
  intro: z.string(),
  updated: z.string().optional(),
  kpis: z.array(kpi).length(4),
  directVsLayover: z.object({
    intro: z.string(),
    direct: z.object({ duration: z.string(), price: z.string() }),
    layover: z.object({ duration: z.string(), price: z.string() }),
  }),
  seasonal: z.object({
    months: z.array(z.string()).length(12),
    min: z.array(z.number()).length(12),
    max: z.array(z.number()).length(12),
  }),
  bookingTips: z.array(z.object({ title: z.string(), body: z.string() })).min(1),
  regions: z.array(region).length(4),
  airlines: z.array(z.object({ name: z.string(), score: z.number() })).min(1),
});

export type FlightAnalysis = z.infer<typeof FlightAnalysisSchema>;
export type FlightRegion = z.infer<typeof region>;

export function defineFlightAnalysis(input: z.input<typeof FlightAnalysisSchema>): FlightAnalysis {
  return FlightAnalysisSchema.parse(input);
}

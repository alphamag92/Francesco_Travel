// Client island: filters ALL itineraries by continent + duration bucket.
// No data fetching, no reload — receives a fully serialized, image-free
// `items` array (images pre-optimized server-side in itinerari.astro).

import { useMemo, useState } from 'react';
import {
  CONTINENT_LABELS,
  type Continent,
  type DurationBucket,
} from '~/lib/taxonomy';
import Card from './Card';
import FilterControls, { type ContinentOption } from './FilterControls';
import './filter.css';

export interface CardItem {
  slug: string;
  href: string;
  title: string;
  summary: string;
  continent: string;
  continentLabel: string;
  durationDays: number;
  durationLabel: string;
  durationBucket: DurationBucket;
  tags: string[];
  coverSrc: string;
  coverWidth: number;
  coverHeight: number;
  coverAlt: string;
}

export interface ItineraryFilterProps {
  items: CardItem[];
}

type ContinentFilter = 'all' | string;
type BucketFilter = 'all' | DurationBucket;

export default function ItineraryFilter({ items }: ItineraryFilterProps) {
  const [continent, setContinent] = useState<ContinentFilter>('all');
  const [bucket, setBucket] = useState<BucketFilter>('all');

  // Continent options derived from the items actually present, ordered by
  // the canonical taxonomy order (keys of CONTINENT_LABELS), labelled.
  const continentOptions = useMemo<ContinentOption[]>(() => {
    const present = new Set(items.map((it) => it.continent));
    return (Object.keys(CONTINENT_LABELS) as Continent[])
      .filter((c) => present.has(c))
      .map((c) => ({ value: c, label: CONTINENT_LABELS[c] }));
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter(
      (it) =>
        (continent === 'all' || it.continent === continent) &&
        (bucket === 'all' || it.durationBucket === bucket),
    );
  }, [items, continent, bucket]);

  const count = filtered.length;

  return (
    <div className="itin-filter">
      <FilterControls
        continents={continentOptions}
        continent={continent}
        bucket={bucket}
        onContinent={(v) => setContinent(v)}
        onBucket={(v) => setBucket(v as BucketFilter)}
      />

      <p className="itin-filter__count" role="status" aria-live="polite">
        {count} {count === 1 ? 'itinerario' : 'itinerari'}
      </p>

      {count > 0 ? (
        <div className="itin-grid">
          {filtered.map((it) => (
            <Card
              key={it.slug}
              href={it.href}
              title={it.title}
              summary={it.summary}
              continentLabel={it.continentLabel}
              durationLabel={it.durationLabel}
              coverSrc={it.coverSrc}
              coverWidth={it.coverWidth}
              coverHeight={it.coverHeight}
              coverAlt={it.coverAlt}
              tags={it.tags}
            />
          ))}
        </div>
      ) : (
        <p className="itin-filter__empty">Nessun itinerario con questi filtri.</p>
      )}
    </div>
  );
}

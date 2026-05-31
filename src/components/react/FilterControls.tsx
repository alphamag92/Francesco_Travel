// Controlled filter UI: a row of continent toggle buttons and a row of
// duration chips. Pure presentation — all state lives in the parent island.
// Plain TS imports only (taxonomy is Astro-free), no astro:assets.

import { DURATION_BUCKETS, BUCKET_LABELS, type DurationBucket } from '~/lib/taxonomy';

export interface ContinentOption {
  value: string;
  label: string;
}

export interface FilterControlsProps {
  continents: ContinentOption[];
  continent: string;
  bucket: string;
  onContinent: (v: string) => void;
  onBucket: (v: string) => void;
  /** optional per-value counts, keyed by continent value and bucket value */
  counts?: Record<string, number>;
}

export default function FilterControls({
  continents,
  continent,
  bucket,
  onContinent,
  onBucket,
  counts,
}: FilterControlsProps) {
  const continentItems: ContinentOption[] = [{ value: 'all', label: 'Tutti' }, ...continents];
  const bucketItems: { value: string; label: string }[] = [
    { value: 'all', label: 'Tutte' },
    ...DURATION_BUCKETS.map((b: DurationBucket) => ({ value: b, label: BUCKET_LABELS[b] })),
  ];

  return (
    <div className="itin-filter__toolbar">
      <div className="itin-filter__group" role="group" aria-label="Filtra per continente">
        <span className="itin-filter__legend">Continente</span>
        <div className="itin-filter__chips">
          {continentItems.map((opt) => {
            const active = continent === opt.value;
            const count = counts?.[opt.value];
            return (
              <button
                key={opt.value}
                type="button"
                className={`itin-chip itin-chip--continent${active ? ' is-active' : ''}`}
                aria-pressed={active}
                onClick={() => onContinent(opt.value)}
              >
                {opt.label}
                {typeof count === 'number' && <span className="itin-chip__count">{count}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="itin-filter__group" role="group" aria-label="Filtra per durata">
        <span className="itin-filter__legend">Durata</span>
        <div className="itin-filter__chips">
          {bucketItems.map((opt) => {
            const active = bucket === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`itin-chip itin-chip--duration${active ? ' is-active' : ''}`}
                aria-pressed={active}
                onClick={() => onBucket(opt.value)}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

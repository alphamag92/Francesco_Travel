// Client-side itinerary card. MUST mirror the server card
// (src/components/cards/ItineraryCard.astro) markup + classes so the
// React filter island renders pixel-identical cards.
// NO astro:assets here — images are pre-optimized in itinerari.astro and
// passed in as a plain `coverSrc` string.

export interface CardProps {
  href: string;
  title: string;
  summary: string;
  continentLabel: string;
  durationLabel: string;
  coverSrc: string;
  coverWidth: number;
  coverHeight: number;
  coverAlt: string;
  tags: string[];
}

export default function Card({
  href,
  title,
  summary,
  continentLabel,
  durationLabel,
  coverSrc,
  coverWidth,
  coverHeight,
  coverAlt,
  tags,
}: CardProps) {
  return (
    <a className="itin-card" href={href} aria-label={`${title} — ${durationLabel}`}>
      <div className="itin-card__media media ar-3-2">
        <img
          src={coverSrc}
          width={coverWidth}
          height={coverHeight}
          alt={coverAlt}
          loading="lazy"
        />
      </div>
      <div className="itin-card__body">
        <div className="itin-card__eyebrow">
          <span>{continentLabel}</span>
          <span className="dot">·</span>
          <span>{durationLabel}</span>
        </div>
        <h3 className="itin-card__title">{title}</h3>
        <p className="itin-card__summary">{summary}</p>
        {tags.length > 0 && (
          <div className="itin-card__tags">
            {tags.slice(0, 4).map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

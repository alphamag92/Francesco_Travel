// Interactive Italy–China flight-price dashboard island.
// Receives the fully serialized, image-free FlightAnalysis object as props.
// State only — no data fetching, no reload. Charts are SSR-safe (mount-guarded).

import { useState } from 'react';
import type { FlightAnalysis } from '~/data/analisi/_schema';
import SeasonalChart from './charts/SeasonalChart';
import RegionalChart from './charts/RegionalChart';
import AirlineChart from './charts/AirlineChart';
import './dashboard.css';

type Tab = 'overview' | 'seasonality' | 'regional' | 'airlines';

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Panoramica' },
  { id: 'seasonality', label: 'Stagionalità' },
  { id: 'regional', label: 'Regioni' },
  { id: 'airlines', label: 'Compagnie' },
];

export interface FlightDashboardProps {
  data: FlightAnalysis;
}

export default function FlightDashboard({ data }: FlightDashboardProps) {
  const [tab, setTab] = useState<Tab>('overview');
  const [regionId, setRegionId] = useState<string>(data.regions[0].id);

  const selectedRegion =
    data.regions.find((r) => r.id === regionId) ?? data.regions[0];

  return (
    <div className="dash">
      <div className="dash-tabs" role="tablist" aria-label="Sezioni dell'analisi">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`dash-tab-${t.id}`}
              aria-selected={active}
              aria-controls={`dash-panel-${t.id}`}
              className={`dash-tab${active ? ' is-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* ---- Overview ---- */}
      {tab === 'overview' && (
        <div
          className="dash-panel"
          role="tabpanel"
          id="dash-panel-overview"
          aria-labelledby="dash-tab-overview"
        >
          <ul className="kpi-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {data.kpis.map((kpi) => (
              <li className="kpi" key={kpi.label}>
                <span className="kpi__label">{kpi.label}</span>
                <span className="kpi__value">{kpi.value}</span>
                <span className="kpi__note">{kpi.note}</span>
              </li>
            ))}
          </ul>

          <div className="direct-vs-layover">
            <p className="direct-vs-layover__intro">{data.directVsLayover.intro}</p>
            <div className="compare-grid">
              <div className="compare-card compare-card--direct">
                <h3 className="compare-card__title">Diretto</h3>
                <div className="compare-card__rows">
                  <div className="compare-row">
                    <span className="compare-row__key">Durata</span>
                    <span className="compare-row__val">{data.directVsLayover.direct.duration}</span>
                  </div>
                  <div className="compare-row">
                    <span className="compare-row__key">Prezzo</span>
                    <span className="compare-row__val">{data.directVsLayover.direct.price}</span>
                  </div>
                </div>
              </div>
              <div className="compare-card compare-card--layover">
                <h3 className="compare-card__title">Con scalo</h3>
                <div className="compare-card__rows">
                  <div className="compare-row">
                    <span className="compare-row__key">Durata</span>
                    <span className="compare-row__val">{data.directVsLayover.layover.duration}</span>
                  </div>
                  <div className="compare-row">
                    <span className="compare-row__key">Prezzo</span>
                    <span className="compare-row__val">{data.directVsLayover.layover.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- Seasonality ---- */}
      {tab === 'seasonality' && (
        <div
          className="dash-panel"
          role="tabpanel"
          id="dash-panel-seasonality"
          aria-labelledby="dash-tab-seasonality"
        >
          <p className="dash-intro">
            Andamento dei prezzi minimi e massimi mese per mese, per individuare le finestre più
            convenienti.
          </p>
          <div className="chart-card">
            <p className="chart-card__title">Prezzi A/R per mese</p>
            <SeasonalChart {...data.seasonal} />
          </div>
          <ul className="tips-grid">
            {data.bookingTips.map((tip) => (
              <li className="tip" key={tip.title}>
                <h3 className="tip__title">{tip.title}</h3>
                <p className="tip__body">{tip.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ---- Regional ---- */}
      {tab === 'regional' && (
        <div
          className="dash-panel"
          role="tabpanel"
          id="dash-panel-regional"
          aria-labelledby="dash-tab-regional"
        >
          <div className="region-btns" role="group" aria-label="Seleziona una regione">
            {data.regions.map((r) => {
              const active = r.id === regionId;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`region-btn${active ? ' is-active' : ''}`}
                  aria-pressed={active}
                  onClick={() => setRegionId(r.id)}
                >
                  <span className="region-btn__emoji" aria-hidden="true">
                    {r.emoji}
                  </span>
                  {r.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="region-detail">
            <div>
              <h3 className="region-detail__title">{selectedRegion.title}</h3>
              <p className="region-detail__desc">{selectedRegion.description}</p>
              <div className="region-meta">
                <div className="region-meta__row">
                  <span className="region-meta__key">Aeroporti</span>
                  <span className="region-meta__val">{selectedRegion.airports}</span>
                </div>
                <div className="region-meta__row">
                  <span className="region-meta__key">Compagnie</span>
                  <span className="region-meta__val">{selectedRegion.airlines}</span>
                </div>
                <div className="region-meta__row">
                  <span className="region-meta__key">Quando andare</span>
                  <span className="region-meta__val">{selectedRegion.timing}</span>
                </div>
              </div>
            </div>
            <div className="chart-card">
              <p className="chart-card__title">Prezzi A/R per origine</p>
              <RegionalChart prices={selectedRegion.prices} />
            </div>
          </div>
        </div>
      )}

      {/* ---- Airlines ---- */}
      {tab === 'airlines' && (
        <div
          className="dash-panel"
          role="tabpanel"
          id="dash-panel-airlines"
          aria-labelledby="dash-tab-airlines"
        >
          <div className="chart-card">
            <p className="chart-card__title">Punteggio compagnie (su 10)</p>
            <AirlineChart airlines={data.airlines} />
          </div>
          <p className="chart-caption">
            Punteggi indicativi di gradimento per i principali vettori sulle rotte Italia–Cina. Il
            valore più alto è evidenziato.
          </p>
        </div>
      )}
    </div>
  );
}

// Seasonal price LineChart (min vs max across 12 months).
// SSR-safe: only renders the Recharts tree after mount, because
// ResponsiveContainer needs a real DOM width (Astro server-renders islands).

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const JADE = 'oklch(0.50 0.08 170)';
const TERRA = 'oklch(0.55 0.10 40)';
const INK_SOFT = 'oklch(0.42 0.012 60)';
const RULE = 'oklch(0.86 0.012 70)';
const CHART_H = 320;

const eur = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export interface SeasonalChartProps {
  months: string[];
  min: number[];
  max: number[];
}

export default function SeasonalChart({ months, min, max }: SeasonalChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ height: CHART_H }} aria-hidden="true" />;

  const rows = months.map((m, i) => ({ month: m, min: min[i], max: max[i] }));

  return (
    <div style={{ width: '100%', height: CHART_H }}>
      <ResponsiveContainer>
        <LineChart data={rows} margin={{ top: 12, right: 16, bottom: 4, left: 4 }}>
          <CartesianGrid stroke={RULE} strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
            tickFormatter={(v: number) => eur.format(v)}
            width={64}
          />
          <Tooltip
            formatter={(value, name) => [eur.format(Number(value)), name]}
            contentStyle={{
              fontSize: 12,
              borderColor: RULE,
              borderRadius: 6,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="min"
            name="Prezzo minimo"
            stroke={JADE}
            strokeWidth={2}
            dot={{ r: 2, fill: JADE }}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="max"
            name="Prezzo massimo"
            stroke={TERRA}
            strokeWidth={2}
            dot={{ r: 2, fill: TERRA }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

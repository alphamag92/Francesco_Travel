// Regional price BarChart (horizontal): low vs high per origin city.
// Re-renders reactively when the parent swaps the `prices` prop — Recharts
// is data-driven, so NO imperative chart API is used.
// SSR-safe: renders the chart only after mount (ResponsiveContainer needs
// a real DOM width, and Astro server-renders islands).

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
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

export interface RegionalChartProps {
  prices: { origin: string; low: number; high: number }[];
}

export default function RegionalChart({ prices }: RegionalChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ height: CHART_H }} aria-hidden="true" />;

  return (
    <div style={{ width: '100%', height: CHART_H }}>
      <ResponsiveContainer>
        <BarChart
          data={prices}
          layout="vertical"
          margin={{ top: 12, right: 16, bottom: 4, left: 8 }}
          barGap={4}
        >
          <CartesianGrid stroke={RULE} strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
            tickFormatter={(v: number) => eur.format(v)}
          />
          <YAxis
            type="category"
            dataKey="origin"
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
            width={120}
          />
          <Tooltip
            cursor={{ fill: 'oklch(0.94 0.012 75 / 0.5)' }}
            formatter={(value, name) => [eur.format(Number(value)), name]}
            contentStyle={{
              fontSize: 12,
              borderColor: RULE,
              borderRadius: 6,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="low" name="Prezzo minimo" fill={JADE} radius={[0, 3, 3, 0]} />
          <Bar dataKey="high" name="Prezzo massimo" fill={TERRA} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

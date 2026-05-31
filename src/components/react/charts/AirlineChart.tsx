// Airline rating BarChart (horizontal): score per airline, domain [6, 9].
// The single bar series is jade; the top-scoring airline is highlighted in
// terra via a per-bar <Cell>. Scores are NOT currency-formatted.
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
  Cell,
} from 'recharts';

const JADE = 'oklch(0.50 0.08 170)';
const TERRA = 'oklch(0.55 0.10 40)';
const INK_SOFT = 'oklch(0.42 0.012 60)';
const RULE = 'oklch(0.86 0.012 70)';
const CHART_H = 320;

export interface AirlineChartProps {
  airlines: { name: string; score: number }[];
}

export default function AirlineChart({ airlines }: AirlineChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ height: CHART_H }} aria-hidden="true" />;

  const topScore = airlines.reduce((max, a) => Math.max(max, a.score), -Infinity);

  return (
    <div style={{ width: '100%', height: CHART_H }}>
      <ResponsiveContainer>
        <BarChart
          data={airlines}
          layout="vertical"
          margin={{ top: 12, right: 24, bottom: 4, left: 8 }}
        >
          <CartesianGrid stroke={RULE} strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[6, 9]}
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: INK_SOFT, fontSize: 11 }}
            stroke={RULE}
            tickLine={false}
            width={120}
          />
          <Tooltip
            cursor={{ fill: 'oklch(0.94 0.012 75 / 0.5)' }}
            formatter={(value) => [String(value), 'Punteggio']}
            contentStyle={{
              fontSize: 12,
              borderColor: RULE,
              borderRadius: 6,
            }}
          />
          <Bar dataKey="score" name="Punteggio" fill={JADE} radius={[0, 3, 3, 0]}>
            {airlines.map((a) => (
              <Cell key={a.name} fill={a.score === topScore ? TERRA : JADE} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

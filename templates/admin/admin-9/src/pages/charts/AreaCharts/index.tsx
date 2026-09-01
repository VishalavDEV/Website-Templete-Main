import React from 'react';
import { AreaChart } from '../../../components/charts';

export default function AreaChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <AreaChart title="Basic Area Chart (Unique Visitors)" data={[4500, 6200, 3100, 9500, 5800, 8000, 11000]} />
      <AreaChart title="Filled Area (Conversion rates)" data={[1200, 2100, 1500, 4500, 3100, 3800, 5900]} />
    </div>
  );
}

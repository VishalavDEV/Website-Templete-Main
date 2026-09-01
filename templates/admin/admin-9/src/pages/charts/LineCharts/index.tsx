import React from 'react';
import { LineChart } from '../../../components/charts';

export default function LineChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <LineChart title="Basic Line Chart (Sessions)" data={[120, 250, 180, 490, 310, 520, 410]} />
      <LineChart title="Smooth Multi-Line (Sales trajectory)" data={[300, 450, 280, 690, 510, 720, 890]} />
    </div>
  );
}

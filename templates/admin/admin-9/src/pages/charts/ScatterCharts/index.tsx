import React from 'react';
import { ScatterChart, BubbleChart } from '../../../components/charts';

export default function ScatterChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ScatterChart title="User Activity Scatter Distribution" />
      <BubbleChart title="Workforce Workload Bubble Coordinates" />
    </div>
  );
}

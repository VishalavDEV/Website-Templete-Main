import React from 'react';
import { RadarChart } from '../../../components/charts';

export default function RadarChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <RadarChart title="Campaign Attributes web comparison" />
    </div>
  );
}

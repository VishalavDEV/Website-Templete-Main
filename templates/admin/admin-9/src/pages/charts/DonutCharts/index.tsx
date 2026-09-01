import React from 'react';
import { DonutChart } from '../../../components/charts';

export default function DonutChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <DonutChart title="Product Sales Distributions Shares" />
    </div>
  );
}

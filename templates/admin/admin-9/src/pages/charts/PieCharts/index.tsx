import React from 'react';
import { PieChart } from '../../../components/charts';

export default function PieChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PieChart title="Device Segmentation Ratio (Mobile/PC/Tablet)" />
    </div>
  );
}

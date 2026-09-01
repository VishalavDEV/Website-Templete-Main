import React from 'react';
import { ComposedChart } from '../../../components/charts';

export default function MixedChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ComposedChart title="Revenue Trajectory vs Target Pipelines" />
    </div>
  );
}

import React from 'react';
import { BarChart, ColumnChart } from '../../../components/charts';

export default function BarChartsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ColumnChart title="Vertical Column (Milestones accomplished)" data={[45, 80, 50, 95, 60, 85]} />
      <BarChart title="Horizontal Bar (Social share distributions)" data={[85, 45, 60, 30]} labels={['Search', 'Social', 'Email', 'Direct']} />
    </div>
  );
}

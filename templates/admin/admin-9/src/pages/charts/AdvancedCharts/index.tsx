import React from 'react';
import { FunnelChart, GaugeChart, Heatmap, Sparkline, ProgressChart } from '../../../components/charts';
import { Card } from '../../../components/ui/Card';

export default function AdvancedChartsShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FunnelChart title="Sales Conversion Pipeline Funnel" />
        <GaugeChart percent={82} title="Budget Progress Utilization" />
        <Heatmap title="Global Server Activity load matrix" />
        
        <Card title="Sparklines & Progress rings" subtitle="Compact widgets.">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">Traffic Sparklines:</span>
              <Sparkline data={[12, 15, 8, 24, 18, 30, 22]} />
            </div>
            <div className="border-t border-border/50 pt-3">
              <ProgressChart value={85} title="System UI completeness" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

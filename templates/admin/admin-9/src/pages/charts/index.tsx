/* src/pages/charts/index.tsx */
import React, { useState } from 'react';
import { PageHeader } from '../../components/common';
import LineChartsShowcase from './LineCharts';
import AreaChartsShowcase from './AreaCharts';
import BarChartsShowcase from './BarCharts';
import PieChartsShowcase from './PieCharts';
import DonutChartsShowcase from './DonutCharts';
import RadarChartsShowcase from './RadarCharts';
import ScatterChartsShowcase from './ScatterCharts';
import MixedChartsShowcase from './MixedCharts';
import AdvancedChartsShowcase from './AdvancedCharts';

type ChartSection = 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radar' | 'scatter' | 'mixed' | 'advanced';

export default function ChartsPage() {
  const [activeSection, setActiveSection] = useState<ChartSection>('line');

  const menuItems = [
    { key: 'line', label: 'Line Charts' },
    { key: 'area', label: 'Area Charts' },
    { key: 'bar', label: 'Bar & Column' },
    { key: 'pie', label: 'Pie Charts' },
    { key: 'donut', label: 'Donut Charts' },
    { key: 'radar', label: 'Radar Charts' },
    { key: 'scatter', label: 'Scatter & Bubble' },
    { key: 'mixed', label: 'Composed Mixed' },
    { key: 'advanced', label: 'Advanced & Gauges' }
  ] as const;

  const renderActiveShowcase = () => {
    switch (activeSection) {
      case 'line': return <LineChartsShowcase />;
      case 'area': return <AreaChartsShowcase />;
      case 'bar': return <BarChartsShowcase />;
      case 'pie': return <PieChartsShowcase />;
      case 'donut': return <DonutChartsShowcase />;
      case 'radar': return <RadarChartsShowcase />;
      case 'scatter': return <ScatterChartsShowcase />;
      case 'mixed': return <MixedChartsShowcase />;
      case 'advanced': return <AdvancedChartsShowcase />;
      default: return <LineChartsShowcase />;
    }
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Chart Showcase Gallery" 
        subtitle="A reference playground illustrating modular, lightweight SVG-based charting primitives." 
      />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left vertical sidebar */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit shrink-0">
          <span className="text-[10px] text-muted-foreground uppercase font-bold px-3 py-1 mb-1">Chart Categories</span>
          {menuItems.map((item) => (
            <button 
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === item.key ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right canvas preview workspace */}
        <div className="lg:col-span-3 bg-muted/5 border border-border/80 rounded-xl p-6 min-h-[400px]">
          <h2 className="text-sm font-extrabold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2.5">
            {menuItems.find(m => m.key === activeSection)?.label} Gallery
          </h2>
          <div className="animate-in fade-in duration-200">
            {renderActiveShowcase()}
          </div>
        </div>
      </div>
    </div>
  );
}

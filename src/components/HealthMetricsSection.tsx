import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Zap, 
  Wind, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { MetricReading } from '../types';

interface HealthMetricsSectionProps {
  metrics: MetricReading[];
  onOpenLogModal: (metricId?: string) => void;
}

export const HealthMetricsSection: React.FC<HealthMetricsSectionProps> = ({
  metrics,
  onOpenLogModal,
}) => {
  const [timeRange, setTimeRange] = useState<'today' | '7d' | '30d'>('7d');

  // Helper to render sparkline SVG
  const renderSparkline = (history: number[], color: string) => {
    if (!history || history.length === 0) return null;
    const min = Math.min(...history);
    const max = Math.max(...history);
    const range = max - min || 1;
    const width = 80;
    const height = 28;
    const points = history.map((val, idx) => {
      const x = (idx / (history.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={width} height={height} className="overflow-visible">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        {history.length > 0 && (
          <circle
            cx={width}
            cy={height - ((history[history.length - 1] - min) / range) * (height - 8) - 4}
            r="3"
            fill={color}
          />
        )}
      </svg>
    );
  };

  const getMetricTheme = (id: string) => {
    switch (id) {
      case 'glucose':
        return {
          unitColor: 'text-green-500',
          barColor: 'bg-green-400',
          barWidth: '75%',
          sparkColor: '#48BB78',
        };
      case 'hr':
        return {
          unitColor: 'text-blue-500',
          barColor: 'bg-blue-400',
          barWidth: '68%',
          sparkColor: '#4299E1',
        };
      case 'bp':
        return {
          unitColor: 'text-[#319795]',
          barColor: 'bg-[#4FD1C5]',
          barWidth: '55%',
          sparkColor: '#319795',
        };
      case 'spo2':
      default:
        return {
          unitColor: 'text-teal-500',
          barColor: 'bg-teal-400',
          barWidth: '92%',
          sparkColor: '#38B2AC',
        };
    }
  };

  return (
    <section id="health-summary-metrics-section" className="space-y-3 shrink-0">
      {/* Header with Title and Log CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-[#2D3748]">Biometric Vitals</h3>
          <span className="text-[11px] font-semibold text-[#2C5282] bg-[#EBF8FF] px-2 py-0.5 rounded-full border border-blue-100">
            Real-time Telemetry
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Time range selector */}
          <div className="flex bg-[#EDF2F7] p-0.5 rounded-lg text-xs font-semibold text-gray-600">
            <button
              onClick={() => setTimeRange('today')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                timeRange === 'today' ? 'bg-white text-[#2C5282] shadow-xs' : 'hover:text-gray-900'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeRange('7d')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                timeRange === '7d' ? 'bg-white text-[#2C5282] shadow-xs' : 'hover:text-gray-900'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeRange('30d')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                timeRange === '30d' ? 'bg-white text-[#2C5282] shadow-xs' : 'hover:text-gray-900'
              }`}
            >
              30 Days
            </button>
          </div>

          {/* Log Metric CTA */}
          <button
            onClick={() => onOpenLogModal()}
            id="log-new-reading-btn"
            className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-50 border border-gray-200 text-[#2D3748] rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-98"
          >
            <Plus className="w-3.5 h-3.5 text-[#319795]" />
            <span>Log</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards Grid matching High Density Theme */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        {metrics.map((metric) => {
          const theme = getMetricTheme(metric.id);

          return (
            <div
              key={metric.id}
              onClick={() => onOpenLogModal(metric.id)}
              className="bg-white p-4 rounded-2xl border border-blue-50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {metric.name}
                  </p>
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-[#319795] transition-colors flex items-center">
                    Log <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>

                <div className="flex items-baseline justify-between space-x-2 mt-1.5">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-[#2D3748] tracking-tight">
                      {metric.value}
                    </span>
                    <span className={`text-xs font-bold ${theme.unitColor}`}>
                      {metric.unit}
                    </span>
                  </div>
                  
                  {/* Sparkline */}
                  <div className="opacity-75 group-hover:opacity-100 transition-opacity">
                    {renderSparkline(metric.history, theme.sparkColor)}
                  </div>
                </div>
              </div>

              {/* Progress Indicator Bar matching Design HTML */}
              <div>
                <div className="w-full h-1.5 bg-gray-100 mt-3 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${theme.barColor} rounded-full transition-all duration-500`}
                    style={{ width: theme.barWidth }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 font-medium">
                  <span>Target: {metric.targetRange}</span>
                  <span className={metric.isPositive ? 'text-green-600 font-bold' : 'text-rose-500 font-bold'}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { MetricCardData } from '../types';
import { Sparkline } from './Sparkline';

interface MetricsCardsProps {
  metrics: MetricCardData[];
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-white rounded-2xl p-4.5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between relative transition-all duration-200 hover:shadow-md hover:border-gray-200/80 min-h-[110px]"
        >
          {/* Card Header Label */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-xs font-semibold text-gray-500">
              {metric.title}
            </span>
            {metric.hasInfo && (
              <div className="relative inline-flex items-center">
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip(metric.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === metric.id ? null : metric.id)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-hidden"
                  aria-label="More information"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
                {activeTooltip === metric.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-[11px] rounded-lg shadow-xl z-20 pointer-events-none animate-in fade-in">
                    {metric.infoTooltip || 'Metric calculations based on active cohort training data.'}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Metric Value */}
          <div className="flex items-baseline gap-1 my-auto">
            <span className="text-[26px] font-bold tracking-tight text-gray-900 leading-none">
              {metric.value}
            </span>
            {metric.secondaryValue && (
              <span className="text-base font-normal text-gray-400">
                {metric.secondaryValue}
              </span>
            )}
          </div>

          {/* Sparkline (if present) */}
          {metric.hasSparkline && metric.sparklineData && (
            <div className="mt-2.5 pt-1">
              <Sparkline data={metric.sparklineData} color="#3B82F6" className="w-full h-7" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

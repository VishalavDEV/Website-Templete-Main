import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import impactData from '../../data/impact.json';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 bg-warm-white border-y border-ink-border">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 — MEASURABLE IMPACT</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-mono text-ink-muted">
            <TrendingUp className="w-3.5 h-3.5 text-accent-coral" />
            <span>AGGREGATE CLIENT METRICS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 rounded-2xl border border-ink-border space-y-3 hover:border-accent-coral/40 transition-colors"
            >
              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-ink-primary flex items-baseline">
                {item.prefix && <span className="text-accent-coral">{item.prefix}</span>}
                <span>{item.value}</span>
                {item.suffix && <span className="text-accent-coral text-3xl sm:text-4xl">{item.suffix}</span>}
              </div>

              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary">
                {item.label}
              </h4>

              <p className="text-xs text-ink-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

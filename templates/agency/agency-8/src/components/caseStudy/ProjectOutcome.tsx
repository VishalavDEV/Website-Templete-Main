import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectOutcomeProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ProjectOutcome: React.FC<ProjectOutcomeProps> = ({ study, setCursorType }) => {
  const out = study.outcomes;

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              {out.headline}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#FAF9F6] tracking-tight uppercase leading-[0.95]">
            {out.statement}
          </h2>
        </div>

        {/* Dynamic Metric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {out.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] hover:border-white/20 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#888888]">IMPACT METRIC 0{idx + 1}</span>
                <TrendingUp className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
              </div>

              {/* Big Metric Display */}
              <div
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none"
                style={{ color: study.accent }}
              >
                {metric.value}
              </div>

              <div className="space-y-1 pt-2 border-t border-[#ffffff10]">
                <h3 className="font-display text-base sm:text-lg font-bold text-[#FAF9F6] uppercase tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  {metric.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small disclaimer notice */}
        <div className="text-center pt-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
            * Illustrative case study performance benchmarks based on aggregate telemetry across post-launch cycles.
          </p>
        </div>
      </div>
    </section>
  );
};

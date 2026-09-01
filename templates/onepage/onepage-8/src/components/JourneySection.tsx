import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { EXPERIENCE_DATA } from '../data/experience';
import { CursorState } from '../types';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface JourneySectionProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
}) => {
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);

  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="07"
        category="MILESTONES & TIMELINE"
        title="THE 3D JOURNEY"
        subtitle="Chronological traversal through research labs, machine learning deployments, and foundational academic achievements."
      />

      <div className="relative">
        {/* Central Vertical Glowing Neon Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

        <div className="space-y-12 md:space-y-20">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const isHovered = hoveredExpId === exp.id;

            return (
              <div
                key={exp.id}
                id={`journey-node-${exp.id}`}
                onMouseEnter={() => {
                  setHoveredExpId(exp.id);
                  onHoverSound();
                  setCursorState({ variant: 'interact', text: exp.year });
                }}
                onMouseLeave={() => {
                  setHoveredExpId(null);
                  setCursorState({ variant: 'default', text: '' });
                }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 pl-10 md:pl-0`}
              >
                {/* Year Marker on Central Timeline */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050811] border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10">
                  {exp.year.slice(2)}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div
                    className={`p-6 sm:p-8 rounded-2xl glass-panel-glow border transition-all duration-300 ${
                      isHovered
                        ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] -translate-y-1'
                        : 'border-slate-800'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
                        {exp.metricBadge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-slate-400 flex items-center space-x-2 mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.organization}</span>
                      <span className="text-slate-600">•</span>
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="mt-4 text-sm text-slate-300 font-body font-medium leading-relaxed">
                      {exp.highlight}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-slate-400 font-sans">
                      {exp.details.map((d, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

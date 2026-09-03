import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/timeline';
import {
  Building2,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Users,
  Award,
  Globe
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedTimelineId, setSelectedTimelineId] = useState(TIMELINE_DATA[TIMELINE_DATA.length - 1].id);

  const activeMilestone = TIMELINE_DATA.find(t => t.id === selectedTimelineId) || TIMELINE_DATA[TIMELINE_DATA.length - 1];

  return (
    <section id="about" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Fifteen Years of Engineering Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Built by Systems Architects.
          </h2>
          <p className="text-base text-slate-400">
            NEXORA was founded on the conviction that enterprise intelligence must be deterministic, mathematically rigorous, and sovereign.
          </p>
        </div>

        {/* Heritage Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-white font-display">
              15+
            </span>
            <p className="text-xs font-semibold text-slate-200">Years of Engineering</p>
            <p className="text-[11px] text-slate-400">Continuous platform evolution since 2011</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-indigo-400 font-display">
              420+
            </span>
            <p className="text-xs font-semibold text-slate-200">Enterprise Deployments</p>
            <p className="text-[11px] text-slate-400">Fortune 500 & Sovereign Cloud</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-emerald-400 font-display">
              99.999%
            </span>
            <p className="text-xs font-semibold text-slate-200">Guaranteed SLA</p>
            <p className="text-[11px] text-slate-400">High-availability distributed mesh</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-purple-400 font-display">
              $48M+
            </span>
            <p className="text-xs font-semibold text-slate-200">Run-Rate Scale</p>
            <p className="text-[11px] text-slate-400">Zero external debt or venture compromise</p>
          </div>
        </div>

        {/* Interactive Timeline Box */}
        <div className="rounded-2xl bg-[#0C0C12] border border-white/5 p-6 sm:p-8 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Evolution Timeline (2011 - 2026)</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Select any milestone to inspect</span>
          </div>

          {/* Timeline Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {TIMELINE_DATA.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTimelineId(t.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap ${
                  selectedTimelineId === t.id
                    ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-md shadow-indigo-950/20'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {t.year} — {t.title}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-indigo-400">MILESTONE {activeMilestone.year}</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">
                HISTORICAL RECORD
              </span>
            </div>
            <h4 className="text-xl font-bold font-display text-white">{activeMilestone.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {activeMilestone.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

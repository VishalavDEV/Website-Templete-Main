import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SOLUTIONS_DATA } from '../data/solutions';
import { SolutionItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Filter,
  Search,
  Zap
} from 'lucide-react';

const CATEGORIES = [
  'All Solutions',
  'Strategic Intelligence',
  'Enterprise Architecture',
  'Process Automation',
  'Data & Analytics',
  'AI Engineering',
  'Cyber Defense'
];

export const SolutionsSection: React.FC = () => {
  const { setActiveSolutionModal, setIsConsultationModalOpen } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSolutions = useMemo(() => {
    return SOLUTIONS_DATA.filter(sol => {
      const matchesCat =
        selectedCategory === 'All Solutions' || sol.category === selectedCategory;
      const matchesSearch =
        sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="solutions" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Transformation Practices</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Engineered for Sovereign Scale.
          </h2>
          <p className="text-base text-slate-400">
            End-to-end consulting, bespoke neural modeling, and multi-agent infrastructure customized for mission-critical enterprise environments.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search practices, stacks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#0A0A0E] border border-white/10 rounded-full focus:outline-none focus:border-indigo-500 text-slate-200 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map(sol => (
            <div
              key={sol.id}
              className="rounded-2xl bg-[#0C0C12] border border-white/5 p-6 flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-950/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {sol.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PRACTICE #{sol.id.slice(-2)}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{sol.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {sol.description}
                </p>

                {/* Highlight Metric Card */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{sol.metrics[0].label}</span>
                  <span className="text-base font-bold text-indigo-400 font-display">
                    {sol.metrics[0].value}
                  </span>
                </div>

                {/* Feature Bullet points */}
                <div className="space-y-1.5 pt-1">
                  {sol.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {sol.technologies.slice(0, 2).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveSolutionModal(sol)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Practice Consultation CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0C0C12] via-[#0A0A0E] to-[#141420] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Need a Customized Enterprise Architecture Assessment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Our Senior Managing Partners conduct bespoke readiness audits, data mesh blueprints, and sovereign security reviews.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 active:scale-95 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Request Practice Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

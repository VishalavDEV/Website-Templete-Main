import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROGRAM_TIMELINE } from '../data/programs';
import { Search, Filter, Clock, Award, Briefcase, ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

export default function Programs({ onOpenAdmissions }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Technology', 'AI & Data', 'Business', 'Design', 'Science'];
  const difficulties = ['All', 'Advanced', 'Intermediate', 'Creative Rigor'];

  const filteredPrograms = PROGRAM_TIMELINE.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || p.difficulty.includes(selectedDifficulty);
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Page Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC CATALOG 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Academic Programs & Degree Tracks.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Explore 500+ undergraduate, postgraduate, and executive research specializations. Designed in collaboration with global research chairs and industry pioneers.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-6 rounded-3xl glass-panel border border-white/10 mb-12 space-y-6 bg-slate-950/60">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs by subject, technology, or keyword (e.g. Quantum, AI, Neural, Economics)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-400"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 border-t border-white/5">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Domain:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-electric-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Rigor:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-xl text-xs text-slate-200 px-3 py-1.5 focus:outline-none"
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Programs Listing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl glass-panel border border-white/10 p-6 flex flex-col justify-between group hover:border-electric-500/50 transition-all bg-slate-950/50 hover:bg-slate-900/60"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-electric-500/20 text-electric-300 border border-electric-500/30 font-bold">
                    {prog.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-electric-400" />
                    {prog.duration.split(' ')[0]} {prog.duration.split(' ')[1]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                  {prog.description}
                </p>

                {/* Core subjects tag pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {prog.subjects.slice(0, 3).map((subj, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-[10px] font-mono text-slate-400 border border-white/5">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenAdmissions()}
                  className="px-4 py-2 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs"
                >
                  APPLY NOW
                </button>
                <button
                  onClick={() => navigate(`/programs/${prog.id}`)}
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-3xl p-8 space-y-3">
            <h3 className="text-xl font-bold text-white font-display">No matching programs found</h3>
            <p className="text-xs text-slate-400">Try adjusting your search query or domain filter.</p>
          </div>
        )}

      </div>
    </div>
  );
}

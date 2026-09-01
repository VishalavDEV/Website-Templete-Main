import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { lumoraData } from '../lumoraData';

export default function Portfolio() {
  const { portfolio } = lumoraData;
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  // Extract all unique tags
  const filterOptions = ['ALL', ...new Set(portfolio.map(item => item.tag))];

  // Filtered items list
  const filteredPortfolio = selectedFilter === 'ALL'
    ? portfolio
    : portfolio.filter(item => item.tag === selectedFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-20 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-20%] w-[60%] aspect-square rounded-full bg-purple-100/30 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square rounded-full bg-indigo-100/20 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <section className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
            STUDIO DEPLOYMENTS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-mono uppercase mb-6">
            ACTIVE LAUNCHES
          </h1>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            Explore MVPs co-built by our squads. Filter by tag to view specific SaaS, FinTech, and AI platforms.
          </p>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                selectedFilter === opt
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-100'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Filterable Portfolio Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="absolute top-4 left-4 text-[9px] font-mono font-bold bg-white text-slate-800 border border-slate-100 px-2.5 py-1 rounded shadow-sm uppercase">
                    {project.tag}
                  </span>

                  <span className="absolute top-4 right-4 text-[9px] font-mono font-bold bg-emerald-500 text-white px-2.5 py-1 rounded shadow-sm uppercase">
                    {project.raised}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold text-slate-900">{project.name}</h3>
                      <ArrowUpRight size={14} className="text-slate-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                    <span>KEY KPI METRIC:</span>
                    <span className="text-purple-600">{project.metrics}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.div>
  );
}

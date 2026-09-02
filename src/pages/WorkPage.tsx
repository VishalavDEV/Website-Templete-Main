import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, Filter, ArrowUpRight, Eye, X, ArrowRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projects } from '../data/projects';
import { audioService } from '../utils/audio';

interface WorkPageProps {
  onSelectProject: (slug: string) => void;
  onOpenLightbox: (imageUrl: string, caption?: string) => void;
  onStartProject: () => void;
}

const categories: ProjectCategory[] = ['ALL', 'BRANDING', 'DIGITAL', 'MOTION', 'PRODUCT'];

export function WorkPage({ onSelectProject, onOpenLightbox, onStartProject }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(p => {
    const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.servicesProvided.some(s => s.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Portfolio & Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Work that defines category standards.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
            Explore our archive of living brand systems, sub-second web platforms, 4K CGI launch films, and spatial computing environments.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#12141F] rounded-2xl border border-white/8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                    isActive
                      ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] px-2 py-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs font-mono focus:outline-none focus:border-violet-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 py-16 text-center bg-[#11131E] rounded-3xl border border-white/8 p-8"
              >
                <p className="text-base text-gray-300 font-medium">
                  No projects match your filter "{searchQuery || selectedCategory}".
                </p>
                <button
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-violet-500 transition-all"
                >
                  Reset All Filters
                </button>
              </motion.div>
            ) : (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative rounded-3xl overflow-hidden bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  {/* Image Container with Hover Zoom */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-black/50 cursor-pointer"
                    onClick={() => {
                      audioService.playClick();
                      onSelectProject(project.slug);
                    }}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11131E] via-transparent to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[11px] font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-violet-300 border border-white/10">
                        {project.category}
                      </span>
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Lightbox Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioService.playClick();
                        onOpenLightbox(project.heroImage, `${project.title} — ${project.summary}`);
                      }}
                      className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-gray-300 hover:text-white hover:bg-violet-600 transition-all flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100"
                      title="Quick View Lightbox"
                      aria-label="View Fullscreen"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Project Info Card Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-gray-400">{project.client}</span>
                        <div className="flex items-center gap-1 text-xs font-mono text-violet-400 group-hover:text-violet-300">
                          <span>Case Study</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                      <h3
                        onClick={() => {
                          audioService.playClick();
                          onSelectProject(project.slug);
                        }}
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Services Tags and Metrics */}
                    <div className="mt-6 pt-5 border-t border-white/6 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.servicesProvided.slice(0, 2).map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {project.results[0] && (
                        <div className="text-right">
                          <span className="font-mono text-xs font-bold text-emerald-400">
                            {project.results[0].value}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono block">
                            {project.results[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#141726] to-[#0D0F18] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you are launching a new frontier technology or transforming an iconic enterprise, let's talk.
          </p>
          <button
            onClick={() => {
              audioService.playClick();
              onStartProject();
            }}
            className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xl shadow-violet-600/30"
          >
            <span>Start a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

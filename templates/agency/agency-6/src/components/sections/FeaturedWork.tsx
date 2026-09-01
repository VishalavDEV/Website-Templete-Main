import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../data/mockData';
import { CategoryType, Project } from '../../types';
import { TiltCard } from '../common/3DTiltCard';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import { ArrowUpRight, Eye, Filter, Sparkles } from 'lucide-react';

interface FeaturedWorkProps {
  onCursorChange?: (text: string, variant: 'default' | 'hover') => void;
  limit?: number;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onCursorChange, limit }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const navigate = useNavigate();

  const categories: CategoryType[] = ['All', 'Branding', 'Digital', 'AI', 'Strategy', 'Product'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-28 sm:py-36 bg-[#090909] text-[#f8f7f4] relative overflow-hidden select-none">
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/4 opacity-5 pointer-events-none select-none z-0">
        <span className="text-[260px] sm:text-[380px] font-black leading-none text-white tracking-tighter">
          WORK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b-2 border-[#D1FF00]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#D1FF00] block mb-2">
                SELECTED ARCHIVE // CASE STUDIES
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tighter text-white">
                FEATURED WORK
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer border-2 ${
                    selectedCategory === cat
                      ? 'bg-[#D1FF00] text-[#090909] font-black border-[#D1FF00] shadow-xl scale-105'
                      : 'bg-[#141414] text-gray-300 hover:bg-[#D1FF00] hover:text-[#090909] border-white/10 hover:border-[#D1FF00]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12">
          {displayedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 150}>
              <TiltCard
                onClick={() => navigate(`/work/${project.id}`)}
                onMouseEnter={() => onCursorChange && onCursorChange('VIEW', 'hover')}
                onMouseLeave={() => onCursorChange && onCursorChange('', 'default')}
                className="group bg-[#111111] border-2 border-white/10 rounded-none overflow-hidden hover:border-[#D1FF00] transition-all duration-500 shadow-2xl"
              >
                {/* Project Image Box */}
                <div className="relative h-[360px] sm:h-[420px] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#090909] border border-[#D1FF00]/50 rounded-none font-mono text-[10px] font-black text-[#D1FF00] uppercase tracking-widest">
                      {project.category} // {project.year}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewProject(project);
                      }}
                      className="px-3.5 py-1.5 bg-[#090909] hover:bg-[#D1FF00] hover:text-[#090909] border border-white/20 rounded-none font-mono text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>PREVIEW</span>
                    </button>
                  </div>

                  {/* Overlay Action Button */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#D1FF00] text-[#090909] rounded-none border-2 border-[#090909] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-serif font-black uppercase tracking-tighter text-white group-hover:text-[#D1FF00] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                      {project.client}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-gray-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Metrics */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#090909] border border-white/15 rounded-none text-[10px] font-mono font-bold text-[#D1FF00]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Work Action */}
        <div className="pt-16 text-center">
          <button
            onClick={() => navigate('/work')}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#D1FF00] text-[#090909] hover:bg-white border-2 border-[#090909] rounded-none font-mono text-xs uppercase tracking-widest font-black transition-all duration-300 cursor-pointer shadow-2xl"
          >
            <span>VIEW COMPLETE ARCHIVE ({PROJECTS.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Project Preview Modal */}
      <Modal
        isOpen={!!previewProject}
        onClose={() => setPreviewProject(null)}
        title={previewProject ? `${previewProject.title} — Quick Overview` : ''}
      >
        {previewProject && (
          <div className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src={previewProject.heroImage}
                alt={previewProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-gray-300 border-y border-white/10 py-3">
              <div>CLIENT: <span className="text-white font-bold">{previewProject.client}</span></div>
              <div>CATEGORY: <span className="text-lime-400 font-bold">{previewProject.category}</span></div>
              <div>YEAR: <span className="text-white font-bold">{previewProject.year}</span></div>
              <div>INDUSTRY: <span className="text-white font-bold">{previewProject.industry}</span></div>
            </div>

            <p className="text-sm font-sans text-gray-300 leading-relaxed">
              {previewProject.description}
            </p>

            <div className="space-y-2">
              <span className="font-mono text-xs text-lime-400 uppercase font-bold">KEY RESULTS:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {previewProject.results.map((r, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                    <div className="text-lg font-serif font-bold text-white">{r.value}</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <button
                onClick={() => setPreviewProject(null)}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-mono text-xs uppercase cursor-pointer"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  const id = previewProject.id;
                  setPreviewProject(null);
                  navigate(`/work/${id}`);
                }}
                className="px-6 py-2.5 bg-lime-400 text-black rounded-full font-mono text-xs font-bold uppercase hover:bg-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>OPEN FULL CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

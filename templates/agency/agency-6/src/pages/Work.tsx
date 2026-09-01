import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PROJECTS } from '../data/mockData';
import { CategoryType, Project } from '../types';
import { TiltCard } from '../components/common/3DTiltCard';
import { Modal } from '../components/common/Modal';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowUpRight, Eye, Sparkles, Filter } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const Work: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('filter') as CategoryType) || 'All';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'newest'>('featured');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const navigate = useNavigate();

  const categories: CategoryType[] = ['All', 'Branding', 'Digital', 'AI', 'Strategy', 'Product'];

  const handleCategorySelect = (cat: CategoryType) => {
    setSelectedCategory(cat);
    setSearchParams({ filter: cat });
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'newest') {
      return parseInt(b.year) - parseInt(a.year);
    }
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block mb-3">
            PORTFOLIO // SELECTED WORK
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight leading-[0.95]">
            SELECTED CASE <br />
            <span className="text-lime-600 italic font-light">STUDIES</span> & PLATFORMS.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            Explore our archive of high-frequency trading portals, multi-agent AI ecosystems, luxury brand identities, and autonomous mobility cockpits.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter & Sort Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#121316] text-lime-400 font-bold shadow-md scale-105'
                    : 'bg-white text-[#121316] hover:bg-black/5 border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 font-mono text-xs uppercase text-[#626670]">
            <Filter className="w-4 h-4 text-lime-700" />
            <span>SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'featured' | 'newest')}
              className="px-3 py-1.5 bg-white border border-black/15 rounded-lg text-xs font-mono font-bold text-[#121316] focus:outline-none focus:border-black cursor-pointer"
            >
              <option value="featured">FEATURED FIRST</option>
              <option value="newest">NEWEST YEAR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sortedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 100}>
              <TiltCard
                onClick={() => navigate(`/work/${project.id}`)}
                className="group bg-[#121316] text-[#f8f7f4] border border-white/10 rounded-2xl overflow-hidden hover:border-lime-400 transition-all duration-500 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[380px] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full font-mono text-[10px] text-lime-400 uppercase tracking-widest">
                      {project.category} // {project.year}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewProject(project);
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-lime-400 hover:text-black backdrop-blur-md rounded-full font-mono text-[10px] text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>QUICK LOOK</span>
                    </button>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-serif font-black uppercase text-white group-hover:text-lime-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {project.client}
                    </span>
                  </div>

                  <p className="text-sm font-sans text-gray-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {project.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-lime-400"
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

      <CTASection />
    </div>
  );
};

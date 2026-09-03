import React, { useState, useMemo } from 'react';
import { CASE_STUDIES_DATA } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Sparkles, X } from 'lucide-react';

interface PortfolioSectionProps {
  onViewCaseStudy: (slug: string) => void;
  onOpenInquiry: () => void;
  featuredOnly?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onViewCaseStudy,
  onOpenInquiry,
  featuredOnly = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI', 'Web', 'Mobile', 'SaaS', 'Automation', 'E-commerce'];
  const industries = ['All', 'Healthcare', 'FinTech', 'Logistics', 'E-commerce', 'Manufacturing', 'SaaS'];
  const popularTechs = ['All', 'Python', 'React', 'PyTorch', 'Rust', 'Kafka', 'Next.js', 'PostgreSQL'];

  const filteredProjects = useMemo(() => {
    return CASE_STUDIES_DATA.filter((project) => {
      if (featuredOnly && !project.featured) return false;

      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }

      // Industry filter
      if (selectedIndustry !== 'All' && project.clientIndustry !== selectedIndustry) {
        return false;
      }

      // Technology filter
      if (selectedTech !== 'All' && !project.techStack.some(t => t.toLowerCase().includes(selectedTech.toLowerCase()))) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.shortDescription.toLowerCase().includes(query);
        const matchesClient = project.client.toLowerCase().includes(query);
        const matchesTech = project.techStack.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesClient && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedIndustry, selectedTech, searchQuery, featuredOnly]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedIndustry('All');
    setSelectedTech('All');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedIndustry !== 'All' || selectedTech !== 'All' || searchQuery !== '';

  return (
    <section id="portfolio-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Engineering Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
              Proven Impact Across Scaled Systems.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our documented architectural transformations across healthcare diagnostics, high-frequency trading terminals, global logistics dispatch, and headless retail.
            </p>
          </div>

          {!featuredOnly && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-600 font-medium">
                Showing {filteredProjects.length} of {CASE_STUDIES_DATA.length} Projects
              </span>
            </div>
          )}
        </div>

        {/* Filters & Search Controls (shown when not featured-only or when browsing) */}
        {!featuredOnly && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-10 space-y-4">
            {/* Search Bar & Industry select */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, client, or technology (e.g., PyTorch, Kafka, latency)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-blue-500 shadow-2xs cursor-pointer"
                >
                  <option value="All">All Industries</option>
                  {industries.filter(i => i !== 'All').map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>

                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-blue-500 shadow-2xs cursor-pointer"
                >
                  <option value="All">All Technologies</option>
                  {popularTechs.filter(t => t !== 'All').map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>

                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="px-3 py-2.5 text-xs text-rose-600 hover:text-rose-700 font-medium whitespace-nowrap cursor-pointer flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1 border-t border-slate-200/60">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewCaseStudy={onViewCaseStudy}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-sm font-semibold text-slate-900">No matching projects found</p>
            <p className="text-xs text-slate-500 mt-1">Try relaxing your search query or resetting category filters.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

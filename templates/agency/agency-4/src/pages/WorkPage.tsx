import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/ui/ProjectCard';
import { PROJECTS } from '../data/projects';
import { CtaSection } from '../components/sections/CtaSection';
import { Button } from '../components/ui/Button';

const CATEGORIES = ['All', 'Brand Identity', 'Digital Experience', 'Product Design', 'E-commerce', 'Creative Campaign'];

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredSpotlight = PROJECTS[0];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Complete Archive"
          title="Featured Work & Case Studies"
          subtitle="Explore our portfolio of brand identities, digital experiences, e-commerce flagships, and hardware products."
        />

        {/* Featured Spotlight Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white rounded-3xl border border-[#EAE6DF] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#1A1918]">
            <img
              src={featuredSpotlight.image}
              alt={featuredSpotlight.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#D96B43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {featuredSpotlight.category}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:pr-12 space-y-4">
            <div className="text-xs font-bold text-[#D96B43] uppercase tracking-widest">
              <span>Project Spotlight — {featuredSpotlight.year}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1A1918]">
              {featuredSpotlight.title}
            </h2>

            <p className="text-sm text-[#6B6863] leading-relaxed">
              {featuredSpotlight.summary}
            </p>

            <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-semibold">Client Partner</p>
                <p className="text-xs font-bold text-[#1A1918]">{featuredSpotlight.client}</p>
              </div>

              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                onClick={() => navigate(`/work/${featuredSpotlight.id}`)}
              >
                Read Case Study
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#EAE6DF] pb-6">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#1A1918] text-white shadow-sm'
                    : 'text-[#6B6863] hover:text-[#1A1918] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-white border border-[#EAE6DF] rounded-full py-2.5 pl-10 pr-4 text-xs text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20"
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  aspectRatio="landscape"
                  index={idx}
                />
              ))}
            </motion.div>
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#EAE6DF] my-12">
              <p className="text-lg font-bold font-display text-[#1A1918]">No matching projects found</p>
              <p className="text-xs text-[#6B6863] mt-1">Try adjusting your category filter or search keywords.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#D96B43] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>

      <CtaSection />
    </div>
  );
};

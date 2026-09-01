import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { PROJECTS } from '../../data/projects';

const CATEGORIES = ['All', 'Brand Identity', 'Digital Experience', 'Product Design', 'E-commerce', 'Creative Campaign'];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Selected Work"
            title="Projects crafted with intent and precision."
            subtitle="Explore our curated portfolio of digital flagships, brand systems, and physical product experiences."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              onClick={() => navigate('/work')}
            >
              View All Projects
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#EAE6DF]">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1A1918] text-white shadow-sm'
                    : 'text-[#6B6863] hover:text-[#1A1918] hover:bg-[#FAF8F5]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Balanced 2-Column Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
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
        </AnimatePresence>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center pt-12 border-t border-[#EAE6DF]">
          <p className="text-sm font-semibold text-[#6B6863] mb-4">
            Have a custom project requirement or proprietary NDA build?
          </p>
          <Button
            variant="terracotta-outline"
            size="md"
            icon={ArrowRight}
            onClick={() => navigate('/contact')}
          >
            Request Private Case Studies
          </Button>
        </div>

      </div>
    </section>
  );
};

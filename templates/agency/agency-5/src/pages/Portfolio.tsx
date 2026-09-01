import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { FinalCTA } from '../components/sections/FinalCTA';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Reveal } from '../components/ui/Reveal';

const categories = ['All', 'Branding', 'Web', 'App', 'Product', 'Experience'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { setCursorHover, resetCursor } = useCustomCursor();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Selected Portfolio' }]} />

        {/* Hero Title */}
        <Reveal direction="up">
          <div className="space-y-6">
            <Badge variant="accent">PROVEN RESULTS · 12 CASE STUDIES</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
              ENGINEERING THE NEXT GENERATION OF DIGITAL PRODUCTS.
            </h1>
            <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              Browse our complete portfolio of 12+ enterprise case studies across autonomous systems, spatial horology, and high-throughput fintech.
            </p>
          </div>
        </Reveal>

        {/* Real Working Category Filter Bar */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-4 border-b border-[var(--border-color)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[var(--accent-color)] text-[#0A0A0A] font-bold shadow-md'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--text-color)]'
                }`}
              >
                {cat} {cat === 'All' ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Filtered Portfolio Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  onMouseEnter={() => setCursorHover('EXPLORE CASE STUDY', project.coverImage)}
                  onMouseLeave={resetCursor}
                  className="group block space-y-4 rounded-3xl p-4 md:p-6 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
                    <ImageWithFallback
                      src={project.coverImage}
                      alt={project.title}
                      fallbackTitle={project.title}
                      fallbackCategory={project.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="accent">{project.category}</Badge>
                      <Badge variant="surface">{project.year}</Badge>
                    </div>

                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] group-hover:bg-[var(--accent-color)] text-[var(--text-color)] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-300 shadow-xl">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--secondary-color)]">
                      <span>CLIENT: {project.client}</span>
                      <span>{project.industry}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors font-display">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--secondary-color)] line-clamp-2 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-baseline gap-1 text-xs font-mono text-[var(--text-color)]">
                          <span className="font-bold text-[var(--accent-color)]">{m.value}</span>
                          <span className="text-[var(--secondary-color)]">({m.label})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <FinalCTA />
    </div>
  );
};

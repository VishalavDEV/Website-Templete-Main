import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useCustomCursor } from '../../hooks/useCustomCursor';
import { Reveal } from '../ui/Reveal';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const SelectedWork: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);
  const { setCursorHover, resetCursor } = useCustomCursor();

  return (
    <section className="py-24 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="03"
          badge="SELECTED WORK"
          title="FEATURED CASE STUDIES & DIGITAL EXPERIENCES."
          align="split"
          description="Explore how we helped market leaders engineer high-throughput web applications, spatial timepieces, and autonomous control UI."
        />

        {/* Editorial Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => {
            const isLarge = index % 3 === 0;
            return (
              <Reveal key={project.slug} direction="up" delay={index * 0.1} className={isLarge ? 'md:col-span-2' : ''}>
                <Link
                  to={`/portfolio/${project.slug}`}
                  onMouseEnter={() => setCursorHover('VIEW CASE STUDY', project.coverImage)}
                  onMouseLeave={resetCursor}
                  className="group block space-y-4 rounded-3xl p-4 md:p-6 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-500 h-full"
                >
                  {/* Image Card Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
                    <ImageWithFallback
                      src={project.coverImage}
                      alt={project.title}
                      fallbackTitle={project.title}
                      fallbackCategory={project.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2 z-10">
                      <Badge variant="accent">{project.category}</Badge>
                      <Badge variant="surface">{project.year}</Badge>
                    </div>

                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] group-hover:bg-[var(--accent-color)] text-[var(--text-color)] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-300 shadow-xl">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--secondary-color)]">
                      <span>CLIENT: {project.client}</span>
                      <span>{project.industry}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-200 font-display">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--secondary-color)] line-clamp-2 font-light">
                      {project.description}
                    </p>

                    {/* Metrics Badges */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="flex items-baseline gap-1 text-xs font-mono text-[var(--text-color)]">
                          <span className="font-bold text-[var(--accent-color)]">{m.value}</span>
                          <span className="text-[var(--secondary-color)]">({m.label})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View All Work Button */}
        <div className="text-center pt-8">
          <Button href="/portfolio" variant="primary" size="lg">
            View All 12+ Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

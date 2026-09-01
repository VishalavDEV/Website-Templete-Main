import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FinalCTA } from '../components/sections/FinalCTA';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { Reveal } from '../components/ui/Reveal';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export const PortfolioDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setCursorHover, resetCursor } = useCustomCursor();

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const prevProject = projects[projectIndex === 0 ? projects.length - 1 : projectIndex - 1];
  const nextProject = projects[projectIndex === projects.length - 1 ? 0 : projectIndex + 1];

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Work', href: '/portfolio' }, { label: project.title }]} />

        {/* Project Hero Header */}
        <Reveal direction="up">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="surface">CLIENT: {project.client}</Badge>
              <Badge variant="surface">YEAR: {project.year}</Badge>
              <Badge variant="outline">{project.industry}</Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display leading-none max-w-5xl">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              {project.tagline}
            </p>

            {/* Full-width Hero Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[var(--border-color)]">
              <ImageWithFallback src={project.coverImage} alt={project.title} fallbackTitle={project.title} fallbackCategory={project.category} className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>

        {/* Project Overview Metadata & Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-color)]">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">
              EXECUTIVE PROJECT SUMMARY
            </h2>
            <p className="text-base text-[var(--secondary-color)] leading-relaxed font-light">
              {project.description}
            </p>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-[var(--accent-color)] font-display block">
                    {m.value}
                  </span>
                  <span className="text-xs font-mono text-[var(--secondary-color)] uppercase block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              // Services & Scope
            </h3>
            <ul className="space-y-3">
              {project.services.map((svc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-bold text-[var(--text-color)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)]" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenge & Approach Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 md:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <span className="text-xs font-mono text-[var(--accent-color)] uppercase block">// 01 THE CHALLENGE</span>
            <h3 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">THE FRICTION POINT</h3>
            <p className="text-base text-[var(--secondary-color)] leading-relaxed font-light">{project.challenge}</p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <span className="text-xs font-mono text-[var(--accent-color)] uppercase block">// 02 OUR APPROACH</span>
            <h3 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">THE STUDIO SOLUTION</h3>
            <p className="text-base text-[var(--secondary-color)] leading-relaxed font-light">{project.approach}</p>
          </div>
        </div>

        {/* Result Statement */}
        <div className="p-8 md:p-14 rounded-3xl bg-[var(--surface-color)] border-2 border-[var(--accent-color)] space-y-4">
          <span className="text-xs font-mono text-[var(--accent-color)] uppercase block">// 03 MEASURABLE RESULT</span>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-[var(--text-color)] font-display">
            {project.result}
          </h3>
        </div>

        {/* Gallery Images */}
        <div className="space-y-8">
          <SectionHeading
            number="04"
            badge="GALLERY & INTERFACE SNAPSHOTS"
            title="VISUAL ASSETS & DESIGN SYSTEM TAPESTRY."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden border border-[var(--border-color)] aspect-[16/10]">
                <img src={img} alt={`${project.title} Gallery ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Project Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-[var(--border-color)]">
          <Link
            to={`/portfolio/${prevProject.slug}`}
            onMouseEnter={() => setCursorHover('PREVIOUS WORK', prevProject.coverImage)}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 group p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-[var(--accent-color)] group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[var(--secondary-color)] block">Previous Case Study</span>
              <span className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/portfolio/${nextProject.slug}`}
            onMouseEnter={() => setCursorHover('NEXT WORK', nextProject.coverImage)}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 group p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors w-full sm:w-auto text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-[var(--secondary-color)] block">Next Case Study</span>
              <span className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--accent-color)] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};

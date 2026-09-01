import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkles, Award, Quote, CheckCircle2 } from 'lucide-react';
import projectsData from '../data/projects.json';
import { Project } from '../types';
import { MagneticButton } from '../components/common/MagneticButton';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projects = projectsData as Project[];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <div className="glass-panel p-10 rounded-3xl border border-ink-border max-w-md space-y-4">
          <span className="text-xs font-mono uppercase text-accent-coral font-bold">404 ERROR</span>
          <h2 className="font-display text-3xl font-bold uppercase text-ink-primary">
            PROJECT NOT FOUND
          </h2>
          <p className="text-xs text-ink-secondary">
            The project case study you requested could not be located in our active archive.
          </p>
          <div className="pt-2">
            <MagneticButton variant="primary" size="sm" onClick={() => navigate('/work')}>
              RETURN TO WORK INDEX
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <article className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-20">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-ink-secondary hover:text-accent-coral transition-colors"
          data-cursor="LINK"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO SELECTED WORK</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-muted border-b border-ink-border pb-4">
          <span className="text-accent-coral font-bold">{project.number} — {project.category}</span>
          <div className="flex items-center gap-6">
            <span>CLIENT: <strong className="text-ink-primary">{project.client}</strong></span>
            <span>YEAR: <strong className="text-ink-primary">{project.year}</strong></span>
          </div>
        </div>

        <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-ink-primary leading-[0.95]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-2xl text-ink-secondary font-normal max-w-4xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Services Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-warm-white border border-ink-border text-ink-primary font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Massive Hero Visual */}
      <div className="overflow-hidden rounded-3xl border border-ink-border aspect-[16/9] sm:aspect-[2.2/1] bg-paper shadow-glass-elevated">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Narrative Section: Overview, Challenge, Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-ink-border space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold block">
              PROJECT METADATA
            </span>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-ink-muted block">DISCIPLINE</span>
                <span className="text-ink-primary font-semibold">{project.category}</span>
              </div>
              <div>
                <span className="text-ink-muted block">COLLABORATION PERIOD</span>
                <span className="text-ink-primary font-semibold">14 Weeks Sprint</span>
              </div>
              <div>
                <span className="text-ink-muted block">DEPLOYMENT</span>
                <span className="text-ink-primary font-semibold">Global Production</span>
              </div>
            </div>

            {project.awards && (
              <div className="pt-3 border-t border-ink-border space-y-2">
                <span className="text-[10px] font-mono uppercase text-ink-muted flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-accent-coral" />
                  RECOGNITIONS
                </span>
                <ul className="text-xs font-mono space-y-1 text-ink-primary">
                  {project.awards.map((a) => (
                    <li key={a} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold uppercase text-ink-primary">
              EXECUTIVE OVERVIEW
            </h3>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-ink-border">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-accent-coral font-bold block">
                01 / THE CHALLENGE
              </span>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-accent-lavender font-bold block text-ink-primary">
                02 / THE ARCHITECTURE
              </span>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Results */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ink-border space-y-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MEASURABLE OUTCOMES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {project.results.map((r, idx) => (
            <div key={idx} className="space-y-2">
              <span className="font-display text-4xl sm:text-5xl font-bold text-accent-coral">
                {r.value}
              </span>
              <h4 className="font-mono text-xs uppercase text-ink-primary font-bold">
                {r.label}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Image Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="space-y-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-ink-primary">
            VISUAL ARTIFACTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {project.galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-ink-border aspect-[4/3]">
                <img
                  src={img}
                  alt={`${project.title} artifact ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonial Quote */}
      {project.testimonial && (
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ink-border relative">
          <Quote className="w-10 h-10 text-accent-coral/20 absolute top-6 right-6" />
          <blockquote className="font-display text-xl sm:text-2xl font-bold text-ink-primary leading-snug max-w-3xl">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6 pt-4 border-t border-ink-border/60 text-xs font-mono text-ink-muted">
            <span className="font-bold text-ink-primary block">{project.testimonial.author}</span>
            <span>{project.testimonial.role}</span>
          </div>
        </div>
      )}

      {/* Related Projects */}
      <div className="space-y-8 pt-12 border-t border-ink-border">
        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-ink-primary">
          RELATED CASE STUDIES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {relatedProjects.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigate(`/work/${rel.id}`)}
              className="group glass-panel p-4 rounded-2xl border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-all"
            >
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-paper">
                <img
                  src={rel.heroImage}
                  alt={rel.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-accent-coral uppercase font-semibold">
                    {rel.category}
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <ArrowUpRight className="w-4 h-4 text-accent-coral" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="glass-panel-strong p-8 sm:p-14 rounded-3xl border border-ink-border text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
          READY TO CREATE YOUR BREAKTHROUGH?
        </h3>
        <p className="text-sm text-ink-secondary max-w-md mx-auto">
          We partner with ambitious teams to engineer iconic brand identities and digital experiences.
        </p>
        <MagneticButton variant="secondary" size="lg" onClick={() => navigate('/contact')}>
          START A PROJECT BRIEF
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </article>
  );
};

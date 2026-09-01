import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';
import { Service, Project } from '../types';
import { MagneticButton } from '../components/common/MagneticButton';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const services = servicesData as Service[];
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <div className="glass-panel p-10 rounded-3xl border border-ink-border max-w-md space-y-4">
          <span className="text-xs font-mono uppercase text-accent-coral font-bold">404 ERROR</span>
          <h2 className="font-display text-3xl font-bold uppercase text-ink-primary">
            SERVICE NOT FOUND
          </h2>
          <p className="text-xs text-ink-secondary">
            The capability module you requested could not be found.
          </p>
          <div className="pt-2">
            <MagneticButton variant="primary" size="sm" onClick={() => navigate('/services')}>
              RETURN TO SERVICES
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  // Find related featured projects
  const allProjects = projectsData as Project[];
  const relatedProjects = allProjects.filter((p) =>
    service.featuredProjects?.includes(p.id)
  );

  return (
    <article className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-20">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-ink-secondary hover:text-accent-coral transition-colors"
          data-cursor="LINK"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL SERVICES</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DISCIPLINE {service.number} / 06</span>
        </div>

        <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-ink-primary leading-[0.95]">
          {service.title}
        </h1>

        <p className="text-lg sm:text-2xl text-ink-secondary font-normal max-w-4xl leading-relaxed">
          {service.tagline}
        </p>
      </div>

      {/* Hero Visual */}
      <div className="overflow-hidden rounded-3xl border border-ink-border aspect-[16/9] sm:aspect-[2.2/1] bg-paper shadow-glass-elevated">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Narrative & Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-ink-primary">
            PHILOSOPHY & SCOPE
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            {service.fullDescription}
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Every deliverable we produce is tailored to live inside your daily team workflows, rather than gathering dust in archived decks.
          </p>
        </div>

        <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-ink-border space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-coral font-bold block">
            CORE CAPABILITIES
          </span>
          <div className="space-y-3">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-3 text-sm font-mono text-ink-primary">
                <CheckCircle2 className="w-4 h-4 text-accent-coral shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-ink-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              STANDARD DELIVERABLES:
            </span>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((d) => (
                <span
                  key={d}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-warm-white border border-ink-border text-ink-secondary"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phased Process */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>METHODOLOGY TIMELINE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
          HOW WE EXECUTE THIS DISCIPLINE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.process.map((p) => (
            <div key={p.phase} className="glass-panel p-6 rounded-2xl border border-ink-border space-y-3">
              <span className="text-xs font-mono text-accent-coral font-bold block">
                PHASE {p.phase}
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-ink-primary">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects in This Service */}
      {relatedProjects.length > 0 && (
        <div className="space-y-8 pt-8 border-t border-ink-border">
          <h2 className="font-display text-3xl font-bold uppercase text-ink-primary">
            APPLIED CASE STUDIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => navigate(`/work/${proj.id}`)}
                className="group glass-panel p-5 rounded-2xl border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-all"
              >
                <div className="overflow-hidden rounded-xl aspect-[16/10] bg-paper">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent-coral uppercase font-semibold">
                      {proj.category}
                    </span>
                    <h4 className="font-display text-xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                      {proj.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-accent-coral" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Discipline FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-ink-border">
          <h2 className="font-display text-2xl font-bold uppercase text-ink-primary">
            SPECIFIC INQUIRIES
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-ink-border space-y-2">
                <h4 className="font-display font-bold text-base sm:text-lg uppercase text-ink-primary">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="glass-panel-strong p-8 sm:p-14 rounded-3xl border border-ink-border text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
          LET&rsquo;S WORK TOGETHER
        </h3>
        <p className="text-sm text-ink-secondary max-w-md mx-auto">
          Ready to initiate a {service.title.toLowerCase()} sprint with our directors?
        </p>
        <MagneticButton variant="secondary" size="lg" onClick={() => navigate('/contact')}>
          START A PROJECT BRIEF
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </article>
  );
};

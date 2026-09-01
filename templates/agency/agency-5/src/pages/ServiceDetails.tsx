import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FinalCTA } from '../components/sections/FinalCTA';
import { CheckCircle } from 'lucide-react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setCursorHover, resetCursor } = useCustomCursor();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related projects for this service
  const relatedProjects = projects.filter(p =>
    p.services.some(s => s.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]))
  ).slice(0, 2);

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold text-[var(--accent-color)]">{service.number}</span>
              <Badge variant="accent">SERVICE SPECIFICATION</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display leading-none">
              {service.title}
            </h1>

            <p className="text-xl text-[var(--secondary-color)] leading-relaxed font-light">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap gap-8 pt-4 border-t border-[var(--border-color)]">
              {service.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-3xl font-extrabold text-[var(--accent-color)] font-display">{st.value}</span>
                  <p className="text-xs text-[var(--secondary-color)] font-mono uppercase">{st.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg">
                Book {service.title} Sprint →
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--border-color)]">
            <img src={service.hoverImage} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="space-y-8">
          <SectionHeading
            number="01"
            badge="SCOPE & DELIVERABLES"
            title="WHAT WE DELIVER IN THIS SPRINT."
            align="split"
            description="Concrete, verifiable technical and graphic outputs provided upon project sign-off."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-8">
          <SectionHeading
            number="02"
            badge="EXECUTION METHODOLOGY"
            title={`HOW WE APPROACH ${service.title}.`}
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.methodology.map((m, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
                <span className="font-mono text-xl font-bold text-[var(--accent-color)]">0{idx + 1}</span>
                <h3 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">{m.title}</h3>
                <p className="text-xs text-[var(--secondary-color)] leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">
              Related Case Studies for {service.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(project => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  onMouseEnter={() => setCursorHover('VIEW CASE STUDY', project.coverImage)}
                  onMouseLeave={resetCursor}
                  className="group block p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] uppercase font-display">{project.title}</h4>
                  <p className="text-xs text-[var(--secondary-color)] mt-1 font-mono">{project.client}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
};

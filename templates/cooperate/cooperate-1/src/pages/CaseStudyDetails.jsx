import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Layers, Terminal, Sparkles, Building, Calendar, Clock, Trophy } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { caseStudies } from '../data/caseStudies';
import './CaseStudyDetails.css';

export default function CaseStudyDetails() {
  const { slug } = useParams();

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const project = caseStudies[currentIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];
  const otherProjects = caseStudies.filter((cs) => cs.id !== project.id).slice(0, 2);

  return (
    <div className="case-study-details-page">
      {/* 1. Page Header */}
      <PageHeader
        tag={`${project.industry} • CASE STUDY`}
        title={project.title}
        subtitle={project.summary}
        breadcrumbs={[
          { label: 'Work', link: '/work' },
          { label: project.shortTitle }
        ]}
      />

      {/* 2. Hero Project Meta Banner */}
      <section className="cs-hero-banner-section">
        <div className="container">
          <div className="cs-meta-bar">
            <div className="meta-block">
              <span className="meta-block-lbl">CLIENT</span>
              <span className="meta-block-val">{project.client}</span>
            </div>
            <div className="meta-block-divider" />
            <div className="meta-block">
              <span className="meta-block-lbl">INDUSTRY</span>
              <span className="meta-block-val">{project.industry}</span>
            </div>
            <div className="meta-block-divider" />
            <div className="meta-block">
              <span className="meta-block-lbl">ENGAGEMENT DURATION</span>
              <span className="meta-block-val">{project.duration}</span>
            </div>
            <div className="meta-block-divider" />
            <div className="meta-block">
              <span className="meta-block-lbl">PRACTICE</span>
              <span className="meta-block-val">{project.serviceCategory}</span>
            </div>
          </div>

          <div className="cs-main-visual">
            <img src={project.heroImage} alt={project.title} className="cs-featured-img" />
            <div className="cs-visual-overlay" />
          </div>
        </div>
      </section>

      {/* 3. Narrative Breakdown (Challenge, Strategy, Solution) */}
      <section className="cs-narrative-section section">
        <div className="container">
          <div className="cs-narrative-grid">
            <div className="narrative-main-col">
              {/* Challenge */}
              <div className="narrative-block">
                <span className="narrative-tag">THE CHALLENGE</span>
                <h2 className="narrative-title">Navigating Technical Dead-Ends & Bottlenecks</h2>
                <p className="narrative-text">{project.challenge}</p>
              </div>

              {/* Strategy */}
              <div className="narrative-block">
                <span className="narrative-tag">THE STRATEGY</span>
                <h2 className="narrative-title">Architectural Roadmap & Migration Blueprint</h2>
                <p className="narrative-text">{project.strategy}</p>
              </div>

              {/* Solution */}
              <div className="narrative-block">
                <span className="narrative-tag">THE SOLUTION</span>
                <h2 className="narrative-title">Implementation & Enterprise Deployment</h2>
                <p className="narrative-text">{project.solution}</p>
              </div>

              {/* Technical Stack Architecture */}
              <div className="narrative-block tech-breakdown-block">
                <span className="narrative-tag">TECHNOLOGY ARCHITECTURE</span>
                <h3 className="tech-breakdown-title">Core Systems & Frameworks Utilized</h3>
                <div className="cs-technologies-tags">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="cs-gallery-section">
                  <span className="narrative-tag">SYSTEM INTERFACES & ARTIFACTS</span>
                  <div className="gallery-grid">
                    {project.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="gallery-item">
                        <img src={imgUrl} alt={`${project.title} visual artifact ${idx + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Key Impact Metrics & Client Quote */}
            <div className="narrative-side-col">
              {/* Highlight Metrics Box */}
              <div className="side-metric-panel">
                <div className="panel-badge-row">
                  <Trophy size={18} className="trophy-icon" />
                  <span className="panel-badge-txt">MEASURABLE RESULTS</span>
                </div>

                <div className="side-metrics-list">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="side-metric-row">
                      <span className="side-res-num">{res.metric}</span>
                      <span className="side-res-lbl">{res.label}</span>
                      {res.sub && <span className="side-res-sub">{res.sub}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial Box */}
              {project.testimonial && (
                <div className="side-quote-card">
                  <Quote size={28} className="side-quote-icon" />
                  <p className="side-quote-text">"{project.testimonial.quote}"</p>
                  <div className="side-quote-author">
                    <img src={project.testimonial.avatar} alt={project.testimonial.author} className="quote-avatar" />
                    <div>
                      <h5 className="quote-name">{project.testimonial.author}</h5>
                      <p className="quote-role">{project.testimonial.role}</p>
                      <p className="quote-co">{project.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Consultation trigger */}
              <div className="side-cta-box">
                <h4>Facing similar architectural constraints?</h4>
                <p>Schedule a confidential feasibility review with our lead partners.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Request Strategy Session</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Projects */}
      {otherProjects.length > 0 && (
        <section className="cs-related-section section section-alt">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">MORE CASE STUDIES</span>
              <h2 className="section-title">Explore Related Transformations</h2>
            </div>

            <div className="related-projects-grid">
              {otherProjects.map((op) => (
                <div key={op.id} className="related-proj-card">
                  <div className="related-proj-img-wrap">
                    <img src={op.heroImage} alt={op.title} className="related-proj-img" loading="lazy" />
                  </div>
                  <div className="related-proj-body">
                    <span className="badge badge-brand">{op.industry}</span>
                    <h3 className="related-proj-title">{op.title}</h3>
                    <p className="related-proj-summary">{op.summary}</p>
                    <Link to={`/work/${op.slug}`} className="btn-link">
                      <span>View Case Study</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Pagination Navigation */}
      <section className="cs-pagination-nav">
        <div className="container">
          <div className="cs-nav-grid">
            <Link to={`/work/${prevProject.slug}`} className="cs-nav-item prev">
              <span className="nav-dir"><ArrowLeft size={16} /> Previous Case Study</span>
              <span className="nav-title">{prevProject.shortTitle}</span>
            </Link>

            <Link to={`/work/${nextProject.slug}`} className="cs-nav-item next">
              <span className="nav-dir">Next Case Study <ArrowRight size={16} /></span>
              <span className="nav-title">{nextProject.shortTitle}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTA
        title="Transform your enterprise technology stack."
        description="Let's turn your next ambitious idea into a scalable, high-margin reality."
      />
    </div>
  );
}

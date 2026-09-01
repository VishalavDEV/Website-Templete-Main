import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import LogoCloud from '../components/LogoCloud';
import { caseStudies } from '../data/caseStudies';
import './CaseStudiesPage.css';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filterCategories = ['All', 'AI', 'Cloud', 'Software', 'Data', 'Digital'];

  const filteredProjects = caseStudies.filter((cs) => {
    if (activeFilter === 'All') return true;
    return cs.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="casestudies-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="PORTFOLIO & RESULTS"
        title="Engineering work that speaks for itself."
        subtitle="Explore detailed case studies on how NEXORA delivers high-throughput architectures, cognitive AI pipelines, and zero-downtime cloud migrations."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      {/* 2. Interactive Filter Tabs */}
      <section className="portfolio-section section">
        <div className="container">
          <div className="portfolio-filter-row">
            <div className="filter-pills-list">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-pill-btn ${activeFilter === cat ? 'filter-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="portfolio-count-tag">
              <span>Showing {filteredProjects.length} Case {filteredProjects.length === 1 ? 'Study' : 'Studies'}</span>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="portfolio-cards-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <Link to={`/work/${project.slug}`} className="portfolio-img-link">
                  <div className="portfolio-img-box">
                    <img src={project.heroImage} alt={project.title} className="portfolio-img" loading="lazy" />
                    <div className="portfolio-overlay" />
                    <div className="portfolio-floating-tags">
                      <span className="p-badge-ind">{project.industry}</span>
                      <span className="p-badge-cat">{project.category}</span>
                    </div>
                  </div>
                </Link>

                <div className="portfolio-card-content">
                  <div className="p-card-meta">
                    <span className="p-client">{project.client}</span>
                    <span className="p-dot">•</span>
                    <span className="p-duration">{project.duration}</span>
                  </div>

                  <h3 className="portfolio-card-title">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="portfolio-card-summary">{project.summary}</p>

                  {/* Highlight Metrics Grid */}
                  <div className="p-card-metrics">
                    {project.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="p-metric-item">
                        <span className="p-metric-num">{res.metric}</span>
                        <span className="p-metric-lbl">{res.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="p-tech-tags">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="p-tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="p-card-footer">
                    <Link to={`/work/${project.slug}`} className="btn-link">
                      <span>View Full Technical Breakdown</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <Stats />

      {/* 4. Logo Cloud */}
      <LogoCloud />

      {/* 5. CTA */}
      <CTA
        title="Ready to achieve similar measurable outcomes?"
        description="Connect with our practice leadership to evaluate your enterprise challenge."
      />
    </div>
  );
}

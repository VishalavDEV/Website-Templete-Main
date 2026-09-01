import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudies.css';

export default function CaseStudies({
  limit = 3,
  showHeader = true,
  title = "Work that speaks for itself.",
  subtitle = "Explore how we partner with forward-thinking enterprises to deliver transformative software, AI, and cloud architectures."
}) {
  const displayedCases = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="agency-casestudies-section section">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <span className="section-tag">03 / PROVEN IMPACT</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{subtitle}</p>
          </div>
        )}

        <div className="agency-casestudies-list">
          {displayedCases.map((cs, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div key={cs.id} className={`agency-case-item ${isReversed ? 'is-reversed' : ''}`}>
                {/* Visual Image Block */}
                <div className="agency-case-visual">
                  <Link to={`/work/${cs.slug}`} className="agency-case-img-link">
                    <img src={cs.heroImage} alt={cs.title} className="agency-case-img" loading="lazy" />
                    <div className="agency-img-overlay" />
                    <div className="agency-floating-meta">
                      <span className="agency-ind-pill">{cs.industry}</span>
                      <span className="agency-year-pill">{cs.year}</span>
                    </div>
                  </Link>
                </div>

                {/* Content Block */}
                <div className="agency-case-content">
                  <div className="agency-case-header">
                    <span className="agency-client-name">{cs.client}</span>
                  </div>

                  <h3 className="agency-case-title">
                    <Link to={`/work/${cs.slug}`}>{cs.title}</Link>
                  </h3>

                  <p className="agency-case-summary">{cs.summary}</p>

                  {/* Primary Highlight Metric */}
                  <div className="agency-highlight-metric-box">
                    <div className="agency-metric-number">{cs.results[0]?.metric}</div>
                    <div className="agency-metric-label">{cs.results[0]?.label}</div>
                  </div>

                  {/* Tech stack */}
                  <div className="agency-tech-pills">
                    {cs.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="agency-pill">{tech}</span>
                    ))}
                  </div>

                  <Link to={`/work/${cs.slug}`} className="btn-link agency-case-cta">
                    <span>View Full Case Study</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="agency-all-cases-cta">
            <Link to="/work" className="btn btn-secondary btn-lg">
              <span>Explore All Enterprise Case Studies</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

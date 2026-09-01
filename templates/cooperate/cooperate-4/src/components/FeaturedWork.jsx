import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

export const FeaturedWork = () => {
  // Show first 3 projects for the home page editorial flow
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            PORTFOLIO HIGHLIGHTS
          </div>
          <h2>Selected work.</h2>
          <p className="lead">
            A curated selection of mission-critical systems deployed for global
            industry leaders.
          </p>
        </div>

        <div className="projects-flow">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`project-editorial-card ${isEven ? "reverse" : ""}`}
              >
                {/* Media Image Wrap */}
                <div className="project-media-wrap">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay-badge">
                    {project.category}
                  </div>
                </div>

                {/* Project Details Content */}
                <div>
                  <div className="project-meta-row">
                    <span className="project-index">{project.number}</span>
                    <span className="project-industry-label">{project.industry}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  
                  <p style={{ color: "var(--accent-blue)", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                    {project.subtitle}
                  </p>

                  <p className="project-desc">{project.description}</p>

                  {/* High-Impact Metrics Strip */}
                  <div className="project-metrics-strip">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="metric-item-val">{m.value}</div>
                        <div className="metric-item-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                    {project.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link to="/work" className="btn-link-arrow">
                    <span>Read Full Case Study</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <Link to="/work" className="btn btn-secondary">
            <span>View All Enterprise Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

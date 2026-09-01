import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

export const VerticalProjectGallery = () => {
  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="mono-tag" style={{ marginBottom: "1rem" }}>
            <span className="mono-tag-accent">06 //</span> SELECTED WORK
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
            PORTFOLIO OF SYSTEM ARCHITECTURES.
          </h2>
        </div>

        {/* Vertical Gallery of Full-Bleed Projects */}
        <div>
          {projectsData.slice(0, 3).map((project, idx) => (
            <div key={project.id} className="vertical-project-item">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <span className="mono-tag mono-tag-accent">{project.number} // {project.industry}</span>
                  <h3 style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", marginTop: "0.5rem" }}>
                    {project.title.split(" ")[0]}
                  </h3>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "420px", textAlign: "right" }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Full-bleed Architectural Frame */}
              <div className="project-fullbleed-frame">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Bottom Metadata & Direct Action */}
              <div className="project-footer-meta">
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx}>[{tech}]</span>
                  ))}
                </div>

                <Link
                  to="/work"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-electric)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.88rem", letterSpacing: "0.15em" }}
                >
                  <span>VIEW PROJECT ARCHITECTURE</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

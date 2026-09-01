import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

export const ServicesRows = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  return (
    <section className="section-padding" style={{ background: "rgba(8, 10, 15, 0.95)" }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            ENTERPRISE CAPABILITIES
          </div>
          <h2>Capabilities built around outcomes.</h2>
          <p className="lead">
            We architect end-to-end digital capabilities designed to generate
            measurable EBITDA expansion, operational resilience, and competitive moat.
          </p>
        </div>

        <div className="services-rows-container">
          {servicesData.map((service) => {
            const isActive = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`service-row ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setActiveServiceId(service.id)}
              >
                <div className="service-row-main">
                  <div className="service-number">{service.number}</div>

                  <div className="service-title">{service.title}</div>

                  <div className="service-short-desc">
                    {service.shortDesc}
                  </div>

                  <div className="service-arrow-icon">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Expanded Capabilities Details on Hover / Active */}
                {isActive && (
                  <div className="service-expanded-drawer">
                    <div>
                      <h4 style={{ color: "#fff", marginBottom: "0.75rem" }}>
                        {service.tagline}
                      </h4>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: "1.7" }}>
                        {service.fullDesc}
                      </p>

                      <div className="service-tag-cloud">
                        {service.techStack.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ background: "rgba(10, 13, 20, 0.6)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-cyan)", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                        Core Deliverables
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                            <CheckCircle2 size={14} color="var(--accent-cyan)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                        <Link to="/services" className="btn-link-arrow" style={{ fontSize: "0.85rem" }}>
                          <span>Explore Deep Architecture</span>
                          <span className="arrow">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <Link to="/services" className="btn btn-outline-glow">
            <span>View Complete Capabilities Matrix</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

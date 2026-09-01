import React from "react";
import { servicesData } from "../data/servicesData";
import { ArrowUpRight } from "lucide-react";

export const ServicesPage = ({ onOpenContact }) => {
  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero Header */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            CAPABILITIES & SPECIALTIES
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Engineered for exponential scale and mission-critical reliability.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Our six core practices span every layer of the modern enterprise stack—from
            private foundational AI and distributed event brokers to multi-cloud
            topologies and zero-trust security postures.
          </p>
        </div>
      </section>

      {/* Deep-Dive Capabilities List */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "24px",
                  padding: "3rem",
                  boxShadow: "10px 10px 0 var(--bg-terracotta)"
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "3rem" }}>
                  {/* Left Column: Details */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.35rem", color: "var(--bg-terracotta)", fontWeight: "700" }}>
                        {service.number}
                      </span>
                      <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)" }}>
                        ENTERPRISE PRACTICE
                      </span>
                    </div>

                    <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                      {service.title}
                    </h2>

                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--bg-terracotta)", fontWeight: "600", marginBottom: "1.25rem" }}>
                      {service.tagline}
                    </p>

                    <p style={{ color: "var(--text-espresso-muted)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.05rem" }}>
                      {service.fullDesc}
                    </p>

                    <div style={{ marginBottom: "2rem" }}>
                      <div className="editorial-tag" style={{ color: "var(--text-espresso)", marginBottom: "0.75rem" }}>
                        KEY CAPABILITIES
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        {service.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.92rem", color: "var(--text-espresso)" }}>
                            <span style={{ color: "var(--bg-terracotta)", fontWeight: "bold" }}>✔</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginBottom: "0.5rem" }}>
                        CORE TECHNOLOGY STACK
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              padding: "4px 10px",
                              backgroundColor: "var(--bg-sand-dark)",
                              borderRadius: "6px",
                              color: "var(--text-espresso)"
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Outcomes & Action */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-espresso)",
                      color: "var(--text-cream)",
                      borderRadius: "18px",
                      padding: "2.25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "1.25rem" }}>
                        DELIVERABLES & BENCHMARKS
                      </div>

                      <div style={{ marginBottom: "2rem" }}>
                        <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.7rem" }}>
                          MEASURABLE OUTCOME
                        </div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#fff", fontWeight: "600", marginTop: "4px" }}>
                          {service.metrics}
                        </div>
                      </div>

                      <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.7rem", marginBottom: "0.75rem" }}>
                        ARCHITECTURE PACKAGE
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-cream-muted)" }}>
                            <span style={{ color: "var(--accent-chartreuse)" }}>→</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-cream-thin)" }}>
                      <button
                        className="pill-btn pill-btn-chartreuse"
                        style={{ width: "100%", justifyContent: "center" }}
                        onClick={onOpenContact}
                      >
                        <span>ENGAGE FOR {service.title}</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

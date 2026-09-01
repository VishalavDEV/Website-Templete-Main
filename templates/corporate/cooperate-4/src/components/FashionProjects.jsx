import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const FashionProjects = () => {
  const projects = [
    {
      num: "01",
      title: "NOVA INTELLIGENCE",
      meta: "AI / DATA / ENTERPRISE",
      desc: "An ultra-low latency intelligence grid uniting multi-modal clinical research data with real-time predictive patient cohort models across 14 global labs.",
      metrics: "36 hrs modeling speed (down from 14 weeks) · 4.2 TB/s throughput",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "02",
      title: "ORBIT DIGITAL",
      meta: "PRODUCT / CLOUD / EXPERIENCE",
      desc: "A headless distributed commerce infrastructure capable of orchestrating 120,000 flash-sale checkout transactions per minute with sub-80ms worldwide latency.",
      metrics: "120K peak orders/min · 48ms global edge latency · -42% cloud spend",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "03",
      title: "VERTEX CLOUD",
      meta: "FINTECH / INFRASTRUCTURE",
      desc: "A hybrid-sovereign financial cloud architecture processing $18B in daily settlement volume with deterministic microsecond order execution.",
      metrics: "$18B daily settlement · < 2s disaster failover · zero audit lag",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
          <div>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              SELECTED WORK
            </div>
            <h2 className="section-serif-heading">
              Case studies in scale.
            </h2>
          </div>

          <Link to="/work" className="pill-btn pill-btn-outline">
            <span>PORTFOLIO ARCHIVE</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Vertically Overlapping Fashion Editorial Stack */}
        <div className="editorial-projects-stack">
          {projects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;

            return (
              <div
                key={project.num}
                className={`editorial-project-row ${isAlternate ? "alternate" : ""}`}
              >
                {/* Asymmetric Framed Media */}
                <div className="project-asymmetric-frame">
                  <img src={project.img} alt={project.title} />
                </div>

                {/* Editorial Copy */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", color: "var(--bg-terracotta)", fontWeight: "700" }}>
                      {project.num}
                    </span>
                    <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)" }}>
                      {project.meta}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", marginBottom: "1.5rem", color: "var(--text-espresso)" }}>
                    {project.title}
                  </h3>

                  <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.1rem", lineHeight: "1.75", marginBottom: "1.5rem" }}>
                    {project.desc}
                  </p>

                  <div style={{ background: "rgba(30, 22, 17, 0.05)", padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border-espresso-thin)", marginBottom: "2rem" }}>
                    <div className="editorial-tag" style={{ color: "var(--text-espresso)", fontSize: "0.72rem" }}>
                      BENCHMARK OUTCOME
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: "600", color: "var(--text-espresso)", marginTop: "4px" }}>
                      {project.metrics}
                    </div>
                  </div>

                  <Link to="/work" className="pill-btn pill-btn-dark">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ArrowUpRight } from "lucide-react";

export const WorkPage = ({ onOpenContact }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "AI & Data Engineering", "Software Engineering & Cloud", "Cloud Infrastructure & Security", "AI & IoT Engineering"];

  const filteredProjects = selectedFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category === selectedFilter);

  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero Header */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            PROVEN TRACK RECORD
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Systems engineered for the world's most demanding enterprises.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Explore how we partnered with market leaders to replace monolithic bottlenecks
            with high-throughput distributed systems, autonomous AI pipelines, and sovereign clouds.
          </p>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(cat)}
                className={`pill-btn ${selectedFilter === cat ? "pill-btn-dark" : "pill-btn-outline"}`}
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.78rem" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Stack */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div className="editorial-projects-stack">
            {filteredProjects.map((project, idx) => {
              const isAlternate = idx % 2 === 1;

              return (
                <div
                  key={project.id}
                  className={`editorial-project-row ${isAlternate ? "alternate" : ""}`}
                >
                  <div className="project-asymmetric-frame">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", color: "var(--bg-terracotta)", fontWeight: "700" }}>
                        {project.number}
                      </span>
                      <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)" }}>
                        {project.industry} // {project.category}
                      </span>
                    </div>

                    <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", marginBottom: "1rem", color: "var(--text-espresso)" }}>
                      {project.title}
                    </h2>

                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--bg-terracotta)", fontWeight: "600", marginBottom: "1rem" }}>
                      {project.subtitle}
                    </p>

                    <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "1.25rem" }}>
                      {project.description}
                    </p>

                    <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.75rem" }}>
                      {project.fullStory}
                    </p>

                    {/* Benchmark Strip */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", background: "rgba(30, 22, 17, 0.04)", padding: "1.25rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border-espresso-thin)", marginBottom: "2rem" }}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: "700", color: "var(--text-espresso)" }}>
                            {m.value}
                          </div>
                          <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", fontSize: "0.65rem", marginTop: "2px" }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                      {project.technologies.map((t, tIdx) => (
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
                          {t}
                        </span>
                      ))}
                    </div>

                    <button className="pill-btn pill-btn-dark" onClick={onOpenContact}>
                      <span>INQUIRE ABOUT SIMILAR SYSTEM</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

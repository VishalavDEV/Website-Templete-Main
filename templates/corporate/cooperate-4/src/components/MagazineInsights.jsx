import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const MagazineInsights = () => {
  const articles = [
    {
      num: "01",
      title: "AI IS CHANGING HOW ENTERPRISES OPERATE",
      cat: "EXECUTIVE BRIEFING",
      date: "OCT 2025",
      time: "7 MIN READ",
      desc: "Why traditional workflows are being replaced by autonomous agentic loops with deterministic guardrails."
    },
    {
      num: "02",
      title: "THE FUTURE OF DIGITAL OPERATIONS",
      cat: "ARCHITECTURE",
      date: "NOV 2025",
      time: "9 MIN READ",
      desc: "Beyond screen scraping: building self-healing distributed pipelines with semantic awareness."
    },
    {
      num: "03",
      title: "WHY DATA SYSTEMS MATTER",
      cat: "DATA MESH",
      date: "DEC 2025",
      time: "6 MIN READ",
      desc: "The architecture behind Iceberg lakehouses uniting operational analytics with real-time ML feature stores."
    },
    {
      num: "04",
      title: "DESIGNING FOR PLANETARY SCALE",
      cat: "CLOUD INFRASTRUCTURE",
      date: "JAN 2026",
      time: "8 MIN READ",
      desc: "Active-active multi-region Kubernetes deployments and sovereign data residency across 24 global markets."
    }
  ];

  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <div className="mono-tag" style={{ marginBottom: "1rem" }}>
              <span className="mono-tag-accent">11 //</span> MAGAZINE
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              EXECUTIVE PERSPECTIVES.
            </h2>
          </div>

          <Link to="/insights" className="arch-btn arch-btn-outline" style={{ textDecoration: "none" }}>
            <span>All Briefings</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2-Column Large Magazine Index Grid */}
        <div className="magazine-index-grid">
          {articles.map((art) => (
            <Link
              to="/insights"
              key={art.num}
              className="magazine-article-item"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="mono-tag mono-tag-accent">{art.num} // {art.cat}</span>
                <span className="mono-tag" style={{ color: "var(--text-dim)" }}>{art.time}</span>
              </div>

              <h3 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", lineHeight: "1.15", color: "#ffffff", marginBottom: "1rem", transition: "color 0.3s ease" }}>
                {art.title}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                {art.desc}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-electric)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.15em" }}>
                <span>READ BRIEFING</span>
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

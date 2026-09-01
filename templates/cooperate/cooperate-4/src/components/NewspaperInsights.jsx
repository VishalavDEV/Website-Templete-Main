import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const NewspaperInsights = () => {
  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              RESEARCH & ESSAYS
            </div>
            <h2 className="section-serif-heading">
              THINKING AHEAD.
            </h2>
          </div>

          <Link to="/insights" className="pill-btn pill-btn-outline">
            <span>ALL ESSAYS</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Newspaper Layout Grid */}
        <div className="newspaper-insights-grid">
          {/* Large Lead Article */}
          <div className="newspaper-lead-article">
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              01 // EXECUTIVE ESSAY · 7 MIN READ
            </div>

            <h3 style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: "1.1", marginBottom: "1.5rem", color: "var(--text-espresso)" }}>
              THE FUTURE OF AI IN BUSINESS.
            </h3>

            <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              Why traditional deterministic software workflows are being superseded by autonomous
              agentic loops, and how enterprise boards can govern the transition without risking data sovereignty.
            </p>

            <div style={{ width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-espresso-thin)", marginBottom: "2rem" }}>
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                alt="AI in Business"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <Link to="/insights" className="pill-btn pill-btn-dark">
              <span>READ COMPLETE ESSAY</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Secondary Articles Stack */}
          <div className="newspaper-side-articles">
            <div className="newspaper-side-item">
              <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.75rem" }}>
                02 // DESIGN & ERGONOMICS · 5 MIN
              </div>

              <h4 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                DESIGNING TECHNOLOGY PEOPLE TRUST.
              </h4>

              <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                How consumer-grade ergonomics and ruthless simplification drive massive adoption in corporate environments.
              </p>

              <Link to="/insights" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--bg-espresso)", textDecoration: "none", fontWeight: "700" }}>
                READ ARTICLE →
              </Link>
            </div>

            <div className="newspaper-side-item">
              <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.75rem" }}>
                03 // DISTRIBUTED SYSTEMS · 8 MIN
              </div>

              <h4 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                BUILDING FOR PLANETARY SCALE.
              </h4>

              <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                Multi-region active-active Kubernetes clusters and sovereign data residency across 24 global markets.
              </p>

              <Link to="/insights" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--bg-espresso)", textDecoration: "none", fontWeight: "700" }}>
                READ ARTICLE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

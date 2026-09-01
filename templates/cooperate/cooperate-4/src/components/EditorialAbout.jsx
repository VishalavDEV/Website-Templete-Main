import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Zap } from "lucide-react";

export const EditorialAbout = () => {
  return (
    <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left: Asymmetric Editorial Typography */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-indicator"></span>
              01 — WHO WE ARE
            </div>

            <h2 className="about-statement">
              “Technology should not simply support a business.{" "}
              <span className="gradient-text">It should move it forward.</span>”
            </h2>

            <p className="about-body-text">
              KINESIS is a global digital systems and applied AI firm. We unite
              elite distributed systems engineers, machine learning researchers,
              and strategic consultants to build high-concurrency platforms,
              autonomous AI pipelines, and sovereign cloud backbones for
              market-defining enterprises.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Zap size={20} color="var(--accent-cyan)" style={{ marginTop: "3px" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: "600", color: "#fff", fontSize: "0.95rem" }}>
                    Velocity with Rigor
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
                    Accelerating release cadences without technical debt.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ShieldCheck size={20} color="var(--accent-blue)" style={{ marginTop: "3px" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: "600", color: "#fff", fontSize: "0.95rem" }}>
                    Zero-Tolerance Quality
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
                    Proven 99.999% uptime in multi-billion dollar environments.
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-link-arrow">
              <span>Read Our Full Operating Manifesto</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Right: High-End Visual with Floating Editorial Metric Pills */}
          <div className="about-visual-box">
            <div className="about-image-container">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="KINESIS Global Architecture & Modern Innovation"
              />
              <div className="about-image-overlay"></div>
            </div>

            {/* Asymmetric Floating Metrics */}
            <div className="about-floating-pills">
              <div className="metric-pill">
                <span className="metric-pill-num">12+ Years</span>
                <span className="metric-pill-label">Experience</span>
              </div>

              <div className="metric-pill">
                <span className="metric-pill-num">24 Countries</span>
                <span className="metric-pill-label">Reach</span>
              </div>

              <div className="metric-pill">
                <span className="metric-pill-num">04 Offices</span>
                <span className="metric-pill-label">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

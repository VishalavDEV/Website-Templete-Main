import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import { industriesData } from "../data/industriesData";

export const IndustriesMatrix = () => {
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0].id);
  const activeIndustry =
    industriesData.find((ind) => ind.id === activeIndustryId) || industriesData[0];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            SECTOR SPECIALIZATION
          </div>
          <h2>Transforming global enterprise industries.</h2>
          <p className="lead">
            Deep domain expertise engineered to navigate regulatory complexities
            and unlock massive operational moats.
          </p>
        </div>

        <div className="industries-matrix-container">
          {/* Left: Interactive Industry Tab Selectors */}
          <div className="industry-nav-list">
            {industriesData.map((ind) => {
              const isSelected = ind.id === activeIndustryId;

              return (
                <button
                  key={ind.id}
                  className={`industry-tab-btn ${isSelected ? "active" : ""}`}
                  onClick={() => setActiveIndustryId(ind.id)}
                  onMouseEnter={() => setActiveIndustryId(ind.id)}
                >
                  <div className="ind-title">{ind.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span className="ind-num">{ind.number}</span>
                    <ChevronRight
                      size={16}
                      color={isSelected ? "var(--accent-cyan)" : "var(--text-dim)"}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Selected Industry Deep-Dive Display */}
          <div className="industry-detail-display">
            {/* Background oversized watermark number */}
            <div className="ind-big-num">{activeIndustry.number}</div>

            <div>
              <div className="eyebrow" style={{ color: "var(--accent-blue)" }}>
                <span className="eyebrow-indicator" style={{ background: "var(--accent-blue)" }}></span>
                {activeIndustry.tagline}
              </div>

              <h3 style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)", marginBottom: "1rem", color: "#ffffff" }}>
                {activeIndustry.headline}
              </h3>

              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                {activeIndustry.description}
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.1em" }}>
                  Key Challenges Solved
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {activeIndustry.keyChallengesSolved.map((challenge, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stat & CTA */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.75rem", borderTop: "1px solid var(--border-subtle)", flexWrap: "wrap", gap: "1.5rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: "800", color: "var(--accent-cyan)", lineHeight: 1 }}>
                  {activeIndustry.stats.metric}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  {activeIndustry.stats.label}
                </div>
              </div>

              <Link to="/industries" className="btn btn-outline-glow">
                <span>View {activeIndustry.name} Blueprint</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

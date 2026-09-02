import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Radio, Shield, Globe } from "lucide-react";
import { industriesData } from "../data/industriesData";

export const CommandCenterIndustries = () => {
  const [activeId, setActiveId] = useState("finance");
  const current = industriesData.find((i) => i.id === activeId) || industriesData[0];

  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="mono-tag" style={{ marginBottom: "1rem" }}>
            <span className="mono-tag-accent">05 //</span> SECTOR SPECIALIZATION
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
            COMMAND CENTER FOR REGULATED ENTERPRISES.
          </h2>
        </div>

        <div className="command-center-grid">
          {/* Left: Interactive Radar & Industry Node Buttons */}
          <div className="command-hud-box">
            <div className="hud-radar-circle">
              <div className="hud-radar-sweep"></div>
              <div style={{ textAlign: "center", position: "relative", zIndex: 3 }}>
                <Activity size={32} color="var(--accent-electric)" style={{ margin: "0 auto 8px auto" }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent-electric)" }}>
                  GLOBAL SECTOR GRID
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: "800", color: "#fff", marginTop: "4px" }}>
                  {current.number} // {current.name.split(" ")[0]}
                </div>
              </div>
            </div>

            {/* Selector Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {industriesData.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  style={{
                    padding: "0.85rem 1rem",
                    background: activeId === ind.id ? "rgba(0, 240, 255, 0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${activeId === ind.id ? "var(--accent-electric)" : "var(--grid-line)"}`,
                    color: activeId === ind.id ? "var(--accent-electric)" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.3s ease"
                  }}
                >
                  {ind.number} {ind.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Selected Industry Deep-Dive */}
          <div>
            <div className="mono-tag" style={{ color: "var(--accent-electric)", marginBottom: "1rem" }}>
              [MISSION PARAMETERS] — {current.tagline}
            </div>

            <h3 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)", lineHeight: "1.1", marginBottom: "1.5rem" }}>
              {current.headline}
            </h3>

            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              {current.description}
            </p>

            <div style={{ display: "flex", gap: "3rem", borderTop: "1px solid var(--grid-line)", paddingTop: "2rem", marginBottom: "2.5rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Protected Enterprise Flow
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", marginTop: "4px" }}>
                  {current.stats.metric}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Target Compliance
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: "800", color: "var(--accent-electric)", marginTop: "4px" }}>
                  100% Deterministic
                </div>
              </div>
            </div>

            <Link to="/industries" className="arch-btn" style={{ textDecoration: "none" }}>
              <span>Access {current.name.split(" ")[0]} Architecture Blueprint</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

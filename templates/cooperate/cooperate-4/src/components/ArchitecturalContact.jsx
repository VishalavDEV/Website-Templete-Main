import React from "react";
import { ArrowUpRight } from "lucide-react";

export const ArchitecturalContact = ({ onOpenBrief }) => {
  return (
    <section className="screen-section" style={{ minHeight: "85vh" }}>
      <div className="editorial-container">
        <div className="mono-tag" style={{ marginBottom: "2rem" }}>
          <span className="mono-tag-accent">12 //</span> ENGAGEMENT
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>
          <h2 className="contact-hero-title">
            LET'S BUILD<br />
            SOMETHING<br />
            SIGNIFICANT.
          </h2>

          <button
            className="circle-btn"
            style={{ width: "120px", height: "120px", marginTop: "1rem" }}
            onClick={onOpenBrief}
            aria-label="Start a conversation"
          >
            <div style={{ textAlign: "center" }}>
              <ArrowUpRight size={32} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", marginTop: "4px" }}>
                INITIATE
              </div>
            </div>
          </button>
        </div>

        {/* Minimal Architectural Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", borderTop: "1px solid var(--grid-line)", paddingTop: "3rem" }}>
          <div>
            <div className="mono-tag" style={{ color: "var(--accent-electric)", marginBottom: "0.75rem" }}>
              EXECUTIVE DESK
            </div>
            <div style={{ color: "#ffffff", fontSize: "1.1rem" }}>
              advisory@kinesis-global.com
            </div>
            <div style={{ color: "var(--text-dim)", fontSize: "0.9rem", marginTop: "4px" }}>
              +1 (415) 890-2100
            </div>
          </div>

          <div>
            <div className="mono-tag" style={{ color: "var(--accent-electric)", marginBottom: "0.75rem" }}>
              GLOBAL HUBS
            </div>
            <div style={{ color: "#ffffff", fontSize: "1rem" }}>
              SAN FRANCISCO // LONDON
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              SINGAPORE // ZURICH
            </div>
          </div>

          <div>
            <div className="mono-tag" style={{ color: "var(--accent-electric)", marginBottom: "0.75rem" }}>
              GOVERNANCE
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }}>
              All enterprise briefings bound under mutual non-disclosure and ISO27001 protocols.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

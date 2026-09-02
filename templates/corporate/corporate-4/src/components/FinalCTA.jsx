import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = ({ onOpenContact }) => {
  return (
    <section className="final-cta-section">
      <div className="cta-bg-geometry"></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="eyebrow-indicator"></span>
          INITIATE COLLABORATION
        </div>

        <h2 className="cta-title">
          Have a complex problem <span className="gradient-text">worth solving?</span>
        </h2>

        <p className="cta-subtext">
          Let's build something exceptional together.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="btn btn-primary"
            onClick={onOpenContact}
            style={{ padding: "1.1rem 2.5rem", fontSize: "1.05rem" }}
          >
            <span>Start a Conversation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

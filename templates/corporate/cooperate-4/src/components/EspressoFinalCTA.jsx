import React from "react";
import { ArrowUpRight } from "lucide-react";

export const EspressoFinalCTA = ({ onOpenProjectModal }) => {
  return (
    <section className="editorial-section bg-espresso">
      <div className="editorial-wrap" style={{ textAlign: "center" }}>
        <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "2.5rem" }}>
          INITIATE COLLABORATION
        </div>

        <h2
          className="hero-serif-title"
          style={{
            color: "var(--text-cream)",
            maxWidth: "950px",
            margin: "0 auto 2.5rem auto",
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            lineHeight: "1.08"
          }}
        >
          LET'S MAKE SOMETHING MATTER.
        </h2>

        {/* Large Chartreuse Circular Action Button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="circle-cta-badge circle-cta-lg"
            onClick={onOpenProjectModal}
            aria-label="Talk to us"
          >
            <span>TALK TO US</span>
            <ArrowUpRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

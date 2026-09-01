import React from "react";
import { ArrowUpRight } from "lucide-react";

export const PosterHero = ({ onOpenProjectModal }) => {
  const scrollToExplore = () => {
    const nextSection = document.getElementById("intro-statement");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="editorial-hero-section bg-sand">
      <div className="editorial-wrap">
        <div className="hero-poster-grid">
          {/* Left: Editorial Headline & Actions */}
          <div>
            <div className="editorial-tag" style={{ marginBottom: "2rem", color: "var(--text-espresso-muted)" }}>
              INDEPENDENT TECHNOLOGY PARTNER · 2026
            </div>

            <h1 className="hero-serif-title" style={{ marginBottom: "2.5rem" }}>
              WE TURN COMPLEX IDEAS INTO{" "}
              <span className="highlight-chartreuse">REAL-WORLD IMPACT.</span>
            </h1>

            <p style={{ fontSize: "1.2rem", color: "var(--text-espresso-muted)", maxWidth: "560px", lineHeight: "1.75", marginBottom: "3rem" }}>
              We partner with visionary enterprises to architect intelligent software,
              autonomous data systems, and resilient platforms that change how industries operate.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
              <button className="pill-btn pill-btn-dark" onClick={onOpenProjectModal}>
                <span>START A PROJECT</span>
                <ArrowUpRight size={16} />
              </button>

              <button className="pill-btn pill-btn-outline" onClick={scrollToExplore}>
                <span>EXPLORE WORK</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Unconventional Asymmetric Layered Image Frame */}
          <div className="hero-asymmetric-visual">
            <div className="hero-main-frame">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern technology & human engineering"
              />
            </div>

            {/* Floating Tag */}
            <div className="hero-floating-tag">
              <div>[SYSTEMS ARCHITECTURE]</div>
              <div style={{ color: "#fff", fontWeight: "bold", fontSize: "0.95rem", marginTop: "2px" }}>
                HUMAN-CENTRIC · AI POWERED
              </div>
            </div>

            {/* Circular Explore CTA Badge */}
            <div
              style={{
                position: "absolute",
                top: "-25px",
                right: "-25px",
                zIndex: 15
              }}
            >
              <button
                className="circle-cta-badge"
                onClick={scrollToExplore}
                aria-label="Explore work"
              >
                <span>EXPLORE</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Scroll Wire */}
        <div className="hero-vertical-wire">
          <div className="hero-wire-bar"></div>
          <span className="hero-wire-label">SCROLL TO DISCOVER</span>
        </div>
      </div>
    </section>
  );
};

import React from "react";

export const DeepIntroStatement = () => {
  return (
    <section id="intro-statement" className="editorial-section bg-espresso">
      <div className="editorial-wrap">
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "left" }}>
          {/* Chartreuse Number Tag */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.5rem",
                color: "var(--accent-chartreuse)",
                fontWeight: "700"
              }}
            >
              01
            </span>
            <span className="editorial-tag" style={{ color: "var(--text-cream-dim)" }}>
              CORE THESIS // PHILOSOPHY
            </span>
          </div>

          {/* Statement Quote */}
          <h2 className="statement-serif-quote" style={{ color: "var(--text-cream)", marginBottom: "3.5rem" }}>
            “THE BEST TECHNOLOGY DISAPPEARS INTO THE EXPERIENCE.”
          </h2>

          <p
            style={{
              color: "var(--text-cream-muted)",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              maxWidth: "780px"
            }}
          >
            True digital transformation is not about accumulating complex tools. It is
            about engineering friction-free platforms, intuitive autonomous agents, and
            sovereign architectures that empower people to solve grand challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

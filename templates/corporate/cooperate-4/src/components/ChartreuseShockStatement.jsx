import React from "react";

export const ChartreuseShockStatement = () => {
  return (
    <section className="editorial-section bg-chartreuse">
      <div className="editorial-wrap" style={{ textAlign: "center" }}>
        <div className="editorial-tag" style={{ color: "var(--bg-espresso)", marginBottom: "2rem" }}>
          [OUR APPROACH]
        </div>

        <h2
          className="hero-serif-title"
          style={{
            color: "var(--text-espresso)",
            maxWidth: "980px",
            margin: "0 auto 1.5rem auto",
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: "1.15"
          }}
        >
          “BUILDING BETTER BUSINESS IS A DESIGN PROBLEM.”
        </h2>

        <p
          style={{
            color: "rgba(30, 22, 17, 0.75)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}
        >
          KINESIS GLOBAL PRINCIPLE · DETERMINISTIC SYSTEMS & ERGONOMIC CLARITY
        </p>
      </div>
    </section>
  );
};

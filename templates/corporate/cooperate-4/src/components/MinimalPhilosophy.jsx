import React from "react";

export const MinimalPhilosophy = () => {
  return (
    <section className="philosophy-section">
      <div className="editorial-container" style={{ maxWidth: "1100px" }}>
        <div className="mono-tag" style={{ marginBottom: "2rem" }}>
          <span className="mono-tag-accent">08 //</span> OPERATING PHILOSOPHY
        </div>

        <h2 className="editorial-statement" style={{ fontSize: "clamp(2.4rem, 5.2vw, 5.2rem)", lineHeight: "1.1" }}>
          “Technology is only valuable when it changes what is possible.”
        </h2>

        <p style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.88rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "3rem" }}>
          KINESIS SYSTEMS ARCHITECTURE // CORE MAXIM
        </p>
      </div>
    </section>
  );
};

import React from "react";

export const IntroStatement = () => {
  return (
    <section id="intro-section" className="screen-section intro-section">
      <div className="editorial-container">
        <div className="intro-grid">
          {/* Far Left Large Number */}
          <div className="intro-massive-num">01</div>

          {/* Center Main Statement */}
          <div>
            <div className="mono-tag" style={{ marginBottom: "1.5rem" }}>
              <span className="mono-tag-accent">01 //</span> THESIS
            </div>

            <h2 className="editorial-statement">
              “Complex problems deserve intelligent systems.”
            </h2>

            <p className="intro-text-body">
              The boundaries between software, autonomous intelligence, and physical
              operations have dissolved. We reject superficial technology band-aids.
              Instead, we construct enduring, deterministic digital foundations that
              redefine enterprise capability and multiply operational velocity.
            </p>
          </div>

          {/* Opposite Side Vertical Label */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="vertical-label">INTRODUCTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

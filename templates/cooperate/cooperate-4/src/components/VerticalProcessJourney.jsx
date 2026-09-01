import React, { useState } from "react";

export const VerticalProcessJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", title: "DISCOVER", summary: "Dissecting enterprise bottlenecks, legacy dependencies, and economic objectives." },
    { num: "02", title: "DEFINE", summary: "Architectural blueprinting, ROI milestones, and technical specification." },
    { num: "03", title: "DESIGN", summary: "High-density system ergonomics, distributed API contracts, and security models." },
    { num: "04", title: "BUILD", summary: "Sub-millisecond engineering, private AI model fine-tuning, and zero-defect QA." },
    { num: "05", title: "LAUNCH", summary: "Zero-downtime multi-region cutover, real-time observability telemetry, and governance." },
    { num: "06", title: "EVOLVE", summary: "Autonomous optimization, continuous capability scaling, and institutional knowledge transfer." }
  ];

  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ marginBottom: "4rem" }}>
          <div className="mono-tag" style={{ marginBottom: "1rem" }}>
            <span className="mono-tag-accent">09 //</span> METHODOLOGY
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
            A DISCIPLINED DELIVERY SPINE.
          </h2>
        </div>

        {/* Continuous Vertical Journey Track */}
        <div className="process-vertical-track">
          {steps.map((step, idx) => {
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.num}
                className="process-step-node"
                onMouseEnter={() => setActiveStep(idx)}
                style={{ cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: isHovered ? "var(--accent-electric)" : "var(--text-dim)", fontWeight: "700" }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: "1.8rem", color: isHovered ? "var(--accent-electric)" : "#fff", transition: "color 0.3s ease" }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "600px", lineHeight: "1.7" }}>
                  {step.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

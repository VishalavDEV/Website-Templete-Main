import React, { useState } from "react";

export const WarmProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", name: "DISCOVER", summary: "Dissecting enterprise friction, organizational dependencies, and economic objectives." },
    { num: "02", name: "DEFINE", summary: "Architectural blueprinting, ROI milestones, and technical specification." },
    { num: "03", name: "CREATE", summary: "High-density system ergonomics, design systems, and distributed API contracts." },
    { num: "04", name: "BUILD", summary: "Distributed systems engineering in Go/Rust, private AI fine-tuning, and zero-defect QA." },
    { num: "05", name: "LAUNCH", summary: "Zero-downtime multi-region rollout, real-time observability telemetry, and governance." }
  ];

  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            METHODOLOGY
          </div>
          <h2 className="section-serif-heading">
            A disciplined delivery journey.
          </h2>
        </div>

        {/* Horizontal Editorial Timeline */}
        <div className="process-timeline-horizontal">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.num}
                className={`process-timeline-step ${isActive ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="process-step-circle">
                  {step.num}
                </div>

                <h3 style={{ fontSize: "1.4rem", color: "var(--text-espresso)", marginBottom: "0.5rem" }}>
                  {step.name}
                </h3>

                <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.92rem", lineHeight: "1.6" }}>
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

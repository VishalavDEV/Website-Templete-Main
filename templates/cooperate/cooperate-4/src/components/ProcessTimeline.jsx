import React, { useState } from "react";
import { Search, Target, Compass, Code, TrendingUp } from "lucide-react";

export const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      name: "Discover",
      summary: "Understand the business.",
      icon: Search,
      details: "Comprehensive architectural audits, stakeholder alignment, and quantitative business case modeling."
    },
    {
      number: "02",
      name: "Define",
      summary: "Identify opportunities.",
      icon: Target,
      details: "Target-state architecture blueprinting, technical debt eradication plans, and ROI milestone definition."
    },
    {
      number: "03",
      name: "Design",
      summary: "Create the experience.",
      icon: Compass,
      details: "High-density UI/UX ergonomic prototyping, design systems, and API contract specifications."
    },
    {
      number: "04",
      name: "Build",
      summary: "Engineer the solution.",
      icon: Code,
      details: "Distributed systems engineering, private AI model fine-tuning, automated CI/CD gates, and rigorous QA."
    },
    {
      number: "05",
      name: "Scale",
      summary: "Optimize and grow.",
      icon: TrendingUp,
      details: "Multi-region rollouts, real-time telemetry observation, FinOps cost governance, and continuous iteration."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header center">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            PROVEN METHODOLOGY
          </div>
          <h2>A disciplined delivery lifecycle.</h2>
          <p className="lead">
            From initial executive discovery to planetary-scale deployment, our
            battle-tested engineering lifecycle guarantees predictability and speed.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="timeline-track">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = idx === activeStep;

            return (
              <div
                key={idx}
                className="timeline-step-card"
                onMouseEnter={() => setActiveStep(idx)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="step-node-bubble"
                  style={{
                    borderColor: isCurrent ? "var(--accent-cyan)" : "rgba(255,255,255,0.15)",
                    background: isCurrent ? "var(--accent-cyan)" : "#0c0e14",
                    color: isCurrent ? "#07080b" : "#ffffff"
                  }}
                >
                  <Icon size={24} />
                </div>

                <div className="step-name">
                  <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>
                    {step.number}
                  </span>
                  {step.name}
                </div>

                <div className="step-desc" style={{ fontWeight: "600", color: "#ffffff", marginBottom: "0.5rem" }}>
                  {step.summary}
                </div>

                <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", lineHeight: "1.5" }}>
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

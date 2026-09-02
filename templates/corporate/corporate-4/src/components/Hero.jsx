import React from "react";
import { ArrowRight, ArrowDown, Cpu, Globe2, Sparkles, Activity } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";
import { Link } from "react-router-dom";

export const Hero = ({ onOpenContact }) => {
  const scrollToExplore = () => {
    const el = document.getElementById("trust-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-indicator"></span>
              DIGITAL TRANSFORMATION / AI / TECHNOLOGY
            </div>

            <h1 className="hero-headline">
              We Build the{" "}
              <span className="gradient-text">Digital Systems</span>{" "}
              Behind Tomorrow's Businesses.
            </h1>

            <p className="hero-description">
              From intelligent automation to scalable digital platforms, we help
              ambitious organizations transform complex challenges into
              measurable growth.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onOpenContact}>
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>

              <button className="btn btn-secondary" onClick={scrollToExplore}>
                <span>Explore Our Work</span>
                <ArrowDown size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Neural Visualizer with Floating Badges */}
          <div className="hero-visual-wrapper">
            <div className="hero-canvas-container">
              {/* Interactive Node Matrix Canvas */}
              <ParticleCanvas interactive={true} density={50} />

              {/* Central Glowing Core HUD */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "1px dashed rgba(0, 242, 195, 0.4)",
                    animation: "spin 20s linear infinite",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(0,242,195,0.2) 0%, transparent 70%)",
                      border: "1px solid rgba(56, 189, 248, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Activity size={24} color="#00f2c3" />
                  </div>
                </div>
              </div>

              {/* Floating Information Panel 1 */}
              <div className="floating-panel panel-1">
                <div className="panel-header">
                  <Cpu size={14} color="#00f2c3" />
                  <span className="panel-title">AI & AUTOMATION</span>
                </div>
                <div className="panel-value">Intelligent Systems</div>
              </div>

              {/* Floating Information Panel 2 */}
              <div className="floating-panel panel-2">
                <div className="panel-header">
                  <Globe2 size={14} color="#38bdf8" />
                  <span className="panel-title">GLOBAL DELIVERY</span>
                </div>
                <div className="panel-value">Multi-market Expertise</div>
              </div>

              {/* Floating Information Panel 3 */}
              <div className="floating-panel panel-3">
                <div className="panel-header">
                  <span className="panel-icon-dot"></span>
                  <span className="panel-title">CLIENT SATISFACTION</span>
                </div>
                <div className="panel-stat-big">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

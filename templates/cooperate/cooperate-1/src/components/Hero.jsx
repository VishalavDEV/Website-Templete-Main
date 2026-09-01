import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Activity, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="luxury-hero-section">
      {/* Subtle Background Lighting & Tech Grid */}
      <div className="hero-bg-canvas">
        <div className="hero-radial-glow glow-1" />
        <div className="hero-radial-glow glow-2" />
        <div className="hero-fine-grid" />
        <div className="hero-faint-lines" />
      </div>

      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-editorial-col">
          {/* Eyebrow Tag */}
          <div className="hero-eyebrow">
            <span className="eyebrow-pip" />
            <span>NEXORA / DIGITAL TRANSFORMATION</span>
          </div>

          {/* Oversized Headline */}
          <h1 className="hero-headline">
            We build the <span className="text-gradient">technology</span> behind ambitious businesses.
          </h1>

          {/* Supporting Statement */}
          <p className="hero-paragraph">
            NEXORA partners with forward-thinking enterprises to engineer scalable digital platforms, deploy autonomous AI capabilities, and modernize mission-critical cloud infrastructure for measurable commercial impact.
          </p>

          {/* Refined Actions */}
          <div className="hero-actions-group">
            <Link to="/services" className="btn btn-primary btn-lg hero-cta-primary">
              <span>Explore Solutions</span>
              <ArrowUpRight size={18} className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg hero-cta-secondary">
              <span>Start a Conversation</span>
            </Link>
          </div>

          {/* Editorial Minimal Stats */}
          <div className="hero-editorial-stats">
            <div className="ed-stat-item">
              <span className="ed-stat-num">180+</span>
              <span className="ed-stat-lbl">Enterprise Deployments</span>
            </div>
            <div className="ed-stat-separator" />
            <div className="ed-stat-item">
              <span className="ed-stat-num">99.99%</span>
              <span className="ed-stat-lbl">Architecture SLA</span>
            </div>
            <div className="ed-stat-separator" />
            <div className="ed-stat-item">
              <span className="ed-stat-num">3.8x</span>
              <span className="ed-stat-lbl">Avg Velocity Surge</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Interactive 3D Digital Structure */}
        <div className="hero-visual-col">
          <div className="abstract-tech-structure">
            {/* Ambient Backing Core */}
            <div className="structure-core-glow" />

            {/* Orbit Rings & Geometric Symmetry */}
            <div className="orbit-ring ring-outer" />
            <div className="orbit-ring ring-middle" />
            <div className="orbit-ring ring-inner" />

            {/* Central Node Core */}
            <div className="central-geometric-nucleus">
              <div className="nucleus-inner">
                <Cpu size={36} className="nucleus-icon" />
              </div>
              <div className="nucleus-pulse" />
            </div>

            {/* Floating Metric Panel 1: AI Automation */}
            <div className="floating-telemetry-panel panel-1 animate-float">
              <div className="telemetry-head">
                <span className="telemetry-dot" />
                <span className="telemetry-label">AI AUTOMATION</span>
              </div>
              <div className="telemetry-metric">+42% efficiency</div>
              <div className="telemetry-bar">
                <div className="telemetry-bar-fill" style={{ width: '88%' }} />
              </div>
            </div>

            {/* Floating Metric Panel 2: Global Reach */}
            <div className="floating-telemetry-panel panel-2 animate-float" style={{ animationDelay: '2s' }}>
              <div className="telemetry-head">
                <Globe size={13} className="panel-icon-accent" />
                <span className="telemetry-label">GLOBAL REACH</span>
              </div>
              <div className="telemetry-metric">14 countries</div>
              <div className="telemetry-sub">Sub-20ms global edge</div>
            </div>

            {/* Floating Metric Panel 3: Active Systems */}
            <div className="floating-telemetry-panel panel-3 animate-float" style={{ animationDelay: '3.8s' }}>
              <div className="telemetry-head">
                <Zap size={13} className="panel-icon-accent" />
                <span className="telemetry-label">ACTIVE SYSTEMS</span>
              </div>
              <div className="telemetry-metric">128 nodes</div>
              <div className="telemetry-sub">Zero-trust verified</div>
            </div>

            {/* Connected Node Pips */}
            <div className="connected-node node-a" />
            <div className="connected-node node-b" />
            <div className="connected-node node-c" />
          </div>
        </div>
      </div>
    </section>
  );
}

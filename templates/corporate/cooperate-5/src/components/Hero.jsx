import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/corporateData';

export default function Hero() {
  return (
    <section className="hero-split-wrap">
      <div className="container">
        <div className="hero-split-grid">
          {/* Left Column: Hero Editorial Content */}
          <div className="hero-editorial-col">
            <div className="hero-editorial-badge">
              <span className="label-caps">ENTERPRISE TECHNOLOGY / GLOBAL DELIVERY</span>
            </div>

            <h1 className="hero-editorial-heading">
              Engineering the systems that power modern business.
            </h1>

            <p className="hero-editorial-desc">
              We combine technology, intelligence, and engineering to create resilient digital systems for organizations operating at scale.
            </p>

            <div className="hero-buttons-row">
              <Link to="/capabilities" className="btn-capsule btn-capsule-primary">
                <span>Explore Capabilities</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={13} />
                </div>
              </Link>

              <Link to="/contact" className="btn-capsule btn-capsule-outline">
                <span>Talk to Our Team</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Middle: Vertical Information Rail */}
          <div className="hero-vertical-rail">
            <span className="hero-rail-number">01</span>
            <div className="hero-rail-line"></div>
            <span className="hero-rail-scroll-txt">SCROLL TO DISCOVER</span>
          </div>

          {/* Right Column: Cinematic Architectural Image + Overlaid Telemetry */}
          <div className="hero-cinematic-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern Architectural Enterprise Systems"
                className="hero-editorial-img"
              />

              {/* Overlaid Telemetry Info */}
              <div className="hero-overlaid-telemetry">
                <div className="telemetry-col-item">
                  <div className="telemetry-col-label">SYSTEM HEALTH</div>
                  <div className="telemetry-col-val">{BRAND.systemAvailability}</div>
                </div>
                <div className="telemetry-col-item">
                  <div className="telemetry-col-label">ACTIVE NODES</div>
                  <div className="telemetry-col-val">{BRAND.activeNodes}</div>
                </div>
                <div className="telemetry-col-item">
                  <div className="telemetry-col-label">DATA PROCESSED</div>
                  <div className="telemetry-col-val">{BRAND.dataProcessed}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

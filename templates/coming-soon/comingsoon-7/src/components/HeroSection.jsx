import React from 'react';
import { ArrowRight, Play, Award, Zap, Activity, Wind, Sparkles } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection = ({ product, activeColorway, onSelectColorway, onExploreClick }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-glow-blob blob-1"></div>
        <div className="hero-glow-blob blob-2"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="hero-container">
        
        {/* Left Column: Typography, Value Proposition & CTA */}
        <div className="hero-content">
          
          <div className="hero-badge-row">
            <span className="badge-tag">
              <Sparkles size={13} /> {product.edition}
            </span>
            <span className="badge-pill-outline">World Athletics Certified</span>
          </div>

          <h1 className="hero-title">
            ENGINEERED TO <br />
            <span className="hero-title-gradient">OUTRUN GRAVITY.</span>
          </h1>

          <p className="hero-description">
            The next evolution in distance propulsion. Featuring dual-curved Carbon FlightPlate™ 3.0 technology 
            and supercritical nitrogen-infused foam delivering an unprecedented <strong>88.4% energy rebound</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-grid">
            <div className="hero-metric-item">
              <div className="metric-icon-wrap">
                <Wind size={18} />
              </div>
              <div>
                <div className="metric-number">185<span className="metric-unit">g</span></div>
                <div className="metric-label">Monofilament Upper</div>
              </div>
            </div>

            <div className="hero-metric-item">
              <div className="metric-icon-wrap">
                <Zap size={18} />
              </div>
              <div>
                <div className="metric-number">88.4<span className="metric-unit">%</span></div>
                <div className="metric-label">Elastic Energy Return</div>
              </div>
            </div>

            <div className="hero-metric-item">
              <div className="metric-icon-wrap">
                <Activity size={18} />
              </div>
              <div>
                <div className="metric-number">39.5<span className="metric-unit">mm</span></div>
                <div className="metric-label">Max Legal Stack</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#showcase" className="btn-primary" onClick={onExploreClick}>
              <span>Order Launch Edition</span>
              <ArrowRight size={18} />
            </a>

            <a href="#motion-lab" className="btn-secondary">
              <Play size={16} className="play-icon-fill" />
              <span>Watch Motion Demo</span>
            </a>
          </div>

          {/* Live Trust Endorsement */}
          <div className="hero-trust-row">
            <div className="avatar-group">
              <div className="avatar-circle">MV</div>
              <div className="avatar-circle">ER</div>
              <div className="avatar-circle">DC</div>
              <div className="avatar-circle">+1.2k</div>
            </div>
            <div className="trust-text">
              <div className="trust-stars">★★★★★ <span className="trust-score">4.94 / 5.0</span></div>
              <div className="trust-sub">Tested by 1,200+ elite marathoners worldwide</div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Showcase Card with Live Drop Countdown */}
        <div className="hero-visual-column">
          
          <div className="hero-shoe-card glass-panel">
            <div className="shoe-card-header">
              <div className="shoe-card-tag">NOW DROPPING</div>
              <div className="shoe-card-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                <span className="strike-price">${product.originalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img 
                src={activeColorway.heroImage} 
                alt={`${product.name} ${activeColorway.name}`}
                className="hero-shoe-img"
              />
              <div className="hero-shoe-reflection"></div>
            </div>

            {/* Quick Colorway Selector on Hero */}
            <div className="hero-color-selector">
              <span className="color-select-label">Select Colorway:</span>
              <div className="color-swatches">
                {product.colorways.map((cw) => (
                  <button
                    key={cw.id}
                    className={`color-swatch-btn ${activeColorway.id === cw.id ? 'active' : ''}`}
                    onClick={() => onSelectColorway(cw)}
                    title={cw.name}
                    style={{ '--swatch-color': cw.primaryHex }}
                  >
                    <span className="swatch-dot" style={{ backgroundColor: cw.primaryHex }}></span>
                    <span className="swatch-name">{cw.name.split('/')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prominently Embedded Countdown Timer */}
            <div className="hero-countdown-wrapper">
              <CountdownTimer targetDate={product.dropEndDate} stockPercentage={84} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

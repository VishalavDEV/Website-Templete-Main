import React, { useState, useEffect } from 'react';
import { ArrowRight, Bell, Zap, Shield, Flame, Gauge } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export default function HeroOverlay({ onExploreClick, onLaunchUpdatesClick }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 120,
    hours: 18,
    minutes: 42,
    seconds: 36
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  const handleCta1 = () => {
    audioEngine.playClick();
    if (onExploreClick) onExploreClick();
  };

  const handleCta2 = () => {
    audioEngine.playClick();
    if (onLaunchUpdatesClick) onLaunchUpdatesClick();
  };

  return (
    <div className="hero-overlay-content">
      {/* Top Pre-title Badge */}
      <div className="hero-badge-pill">
        <span className="badge-pulse-indicator" />
        <span className="badge-text">THE FUTURE OF RIDING</span>
        <span className="badge-edition">GEN-IV REBEL CHASSIS</span>
      </div>

      {/* Main Title Heading */}
      <div className="hero-title-wrapper">
        <h1 className="hero-main-title">
          <span className="title-gradient-glow">HTM 350 DUDE</span>
          <span className="title-sub-num"> // 2026</span>
        </h1>
        <div className="title-underline-glow" />
      </div>

      {/* Main Tagline */}
      <p className="hero-main-tagline">
        BUILT TO BREAK THE ORDINARY.
      </p>
      <p className="hero-sub-description">
        349cc high-compression LC4 motor producing 42 PS, ultra-lightweight tubular trellis geometry, inverted USD forks, and dynamic cornering ABS.
      </p>

      {/* Status & Launch Banner */}
      <div className="hero-status-row">
        <div className="status-tag">
          <span className="status-dot-blink" />
          <span className="status-text">COMING SOON</span>
        </div>
        <span className="status-separator">|</span>
        <div className="status-units">
          FLAGSHIP BOOKINGS <strong className="highlight-text">OPEN WORLDWIDE</strong>
        </div>
      </div>

      {/* Countdown Clock Display */}
      <div className="hero-countdown-container">
        <div className="countdown-grid">
          <div className="countdown-box">
            <span className="countdown-number">{formatNum(timeLeft.days)}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <span className="countdown-colon">:</span>

          <div className="countdown-box">
            <span className="countdown-number">{formatNum(timeLeft.hours)}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <span className="countdown-colon">:</span>

          <div className="countdown-box">
            <span className="countdown-number">{formatNum(timeLeft.minutes)}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <span className="countdown-colon">:</span>

          <div className="countdown-box highlight-sec">
            <span className="countdown-number glow-sec">{formatNum(timeLeft.seconds)}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hero-actions-row">
        <button 
          id="btn-discover-machine"
          className="btn-hero-primary" 
          onClick={handleCta1}
        >
          <span className="btn-shine" />
          <span className="btn-text">DISCOVER THE MACHINE</span>
          <ArrowRight className="btn-arrow-icon" size={18} />
        </button>

        <button 
          id="btn-get-launch-updates"
          className="btn-hero-secondary" 
          onClick={handleCta2}
        >
          <Bell className="btn-icon" size={17} />
          <span>GET LAUNCH UPDATES</span>
        </button>
      </div>

      {/* Quick Key Specs Mini Bar */}
      <div className="hero-quick-specs">
        <div className="quick-spec-item">
          <Zap size={14} className="spec-icon" />
          <div className="spec-meta">
            <span className="spec-val">42 PS / 36 Nm</span>
            <span className="spec-lbl">POWER & TORQUE</span>
          </div>
        </div>
        <div className="quick-spec-divider" />
        <div className="quick-spec-item">
          <Gauge size={14} className="spec-icon" />
          <div className="spec-meta">
            <span className="spec-val">168 KM/H</span>
            <span className="spec-lbl">TOP SPEED</span>
          </div>
        </div>
        <div className="quick-spec-divider" />
        <div className="quick-spec-item">
          <Shield size={14} className="spec-icon" />
          <div className="spec-meta">
            <span className="spec-val">158 KG</span>
            <span className="spec-lbl">WET WEIGHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

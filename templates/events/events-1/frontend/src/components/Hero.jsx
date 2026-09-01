import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Sparkles, CalendarDays } from 'lucide-react';
import Countdown from './Countdown';

export default function Hero({ onOpenRegisterModal }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-grid" />

      <div className="container hero-content">
        {/* Badge Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="badge">
            <Sparkles size={14} /> THE FUTURE OF INNOVATION
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-title">
          TECH INNOVATION <br />
          <span className="gradient-text">SUMMIT 2026</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Connect with industry leaders, discover emerging technologies, and experience the future of software, artificial intelligence, and cloud compute.
        </p>

        {/* Meta Strip */}
        <div className="hero-meta-strip">
          <div className="hero-meta-item">
            <Calendar size={18} />
            <span>September 20–22, 2026</span>
          </div>
          <div className="hero-meta-item">
            <MapPin size={18} />
            <span>Chennai Convention Centre, India</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <button
            onClick={() => onOpenRegisterModal()}
            className="btn btn-primary btn-lg"
          >
            REGISTER NOW <ArrowRight size={18} />
          </button>
          <Link to="/schedule" className="btn btn-outline btn-lg">
            <CalendarDays size={18} /> EXPLORE SCHEDULE
          </Link>
        </div>

        {/* Countdown Component */}
        <Countdown targetDate="2026-09-20T09:00:00" />
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, ArrowRight } from 'lucide-react';
import { tournamentData } from '../data/tournamentData';
import { Countdown } from './Countdown';
import { HeroParticles } from './HeroParticles';

export const Hero = () => {
  return (
    <section className="hero-section">
      {/* Stadium Background Image */}
      <div className="hero-video-wrapper">
        <img
          src="/images/arena-bg.jpg"
          alt="Thunder Arena Stadium Background"
          className="hero-background-img"
        />
        <div className="hero-bright-overlay" />
      </div>

      {/* Speed lines & Ember Particles Canvas */}
      <HeroParticles />

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-badge-container">
          <span className="badge-live-pulse" />
          <span className="font-sports" style={{ fontSize: '0.95rem', letterSpacing: '2px', color: '#ff4d00' }}>
            INTERNATIONAL BASKETBALL TOURNAMENT
          </span>
        </div>

        <h1 className="hero-event-name">
          {tournamentData.info.name.split(' ')[0]} <span>{tournamentData.info.name.split(' ')[1]}</span>
        </h1>

        <div className="hero-tagline">“THE COURT IS CALLING.”</div>

        <p className="hero-subtext">
          {tournamentData.info.subtitle} {tournamentData.info.tagline}
        </p>

        <div className="hero-meta-strip">
          <div className="hero-meta-item">
            <Calendar size={18} color="#ff4d00" />
            <span>{tournamentData.info.date}</span>
          </div>
          <div className="hero-meta-item">
            <MapPin size={18} color="#ff4d00" />
            <span>{tournamentData.info.venue}, {tournamentData.info.city}</span>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/registration" className="btn-primary">
            REGISTER NOW <ArrowRight size={18} />
          </Link>
          <Link to="/tickets" className="btn-secondary">
            BUY TICKETS <Ticket size={18} color="#ff4d00" />
          </Link>
          <Link to="/fixtures" className="btn-outline">
            VIEW FIXTURES
          </Link>
        </div>

        <Countdown />
      </div>
    </section>
  );
};

import React from 'react';
import { PastEvents } from '../components/PastEvents';
import { upcomingEvent } from '../data/events';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import '../styles/cards.css';

export const EventsPage = ({ onRegister, onNavigate }) => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Page Header */}
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">SUMMIT DIRECTORY</div>
          <h1 className="section-title">Events & Summits Catalog</h1>
          <p className="section-subtitle">
            Discover upcoming technology summits and browse completed event highlights from previous editions.
          </p>
        </div>
      </section>

      {/* Featured Upcoming Summit Card */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', color: '#ffffff' }}>
            Featured Upcoming Summit
          </h2>

          <div
            className="glass-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '36px',
              padding: '36px',
              alignItems: 'center'
            }}
          >
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '320px' }}>
              <img
                src={upcomingEvent.heroImage}
                alt={upcomingEvent.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="badge badge-purple" style={{ marginBottom: '12px' }}>
                UPCOMING LIVE SUMMIT
              </span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '6px' }}>{upcomingEvent.title}</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px' }}>
                {upcomingEvent.subtitle}
              </div>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} color="var(--accent-purple)" /> {upcomingEvent.dates}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="var(--accent-purple)" /> {upcomingEvent.city}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {upcomingEvent.description}
              </p>

              <button className="btn btn-primary" onClick={onRegister}>
                Register For Pass <ArrowRight size={16} className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events & Archive Section */}
      <PastEvents onOpenGallery={() => onNavigate('gallery')} />
    </div>
  );
};

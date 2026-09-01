import React from 'react';
import { weddingData } from '../data/weddingData';
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WeddingEvents() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* PAGE HEADER */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="section-label">SIX UNFORGETTABLE MOMENTS</span>
          <h1 className="serif-title">WEDDING EVENTS</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            We warmly invite you to join us across our multi-day wedding celebration in Chennai.
          </p>
        </div>

        {/* EVENT SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {weddingData.events.map((event, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={event.id} className="split-story-grid" style={{ alignItems: 'center' }}>
                {/* IMAGE */}
                <div className="story-image-wrap" style={{ order: isEven ? 1 : 2 }}>
                  <img src={event.image} alt={event.name} style={{ height: '440px' }} />
                </div>

                {/* DETAILS */}
                <div style={{ order: isEven ? 2 : 1 }}>
                  <span className="section-label">{event.tagline}</span>
                  <h2 className="serif-title" style={{ marginBottom: '1.2rem', fontSize: '2.5rem' }}>
                    {event.name}
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Calendar size={18} color="var(--accent)" />
                      <strong>Date:</strong> {event.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Clock size={18} color="var(--accent)" />
                      <strong>Time:</strong> {event.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <MapPin size={18} color="var(--accent)" />
                      <strong>Venue:</strong> {event.venue} ({event.address})
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Shirt size={18} color="var(--accent)" />
                      <strong>Dress Code:</strong> {event.dressCode}
                    </div>
                  </div>

                  <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                    {event.description}
                  </p>

                  <Link to="/rsvp" className="btn-primary">
                    RSVP FOR THIS EVENT
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

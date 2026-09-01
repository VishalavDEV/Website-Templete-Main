import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-img-wrap">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-img"
          loading="lazy"
        />
        <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(17, 24, 39, 0.85)', color: '#fff' }}>
          {event.category}
        </span>
      </div>

      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>

        <div className="event-card-meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={15} style={{ color: 'var(--primary)' }} />
            <span>{event.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={15} style={{ color: 'var(--primary)' }} />
            <span>{event.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Users size={15} style={{ color: 'var(--primary)' }} />
            <span>{event.attendees} Attendees</span>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {event.description}
        </p>

        <div className="event-card-footer">
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            {event.price}
          </span>
          <Link to={`/events/${event.id}`} className="btn btn-outline btn-sm">
            VIEW EVENT <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

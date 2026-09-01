import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image-wrap">
        <img src={event.image} alt={event.name} />
      </div>

      <div className="event-body">
        <span className="event-tagline">{event.tagline}</span>
        <h3 className="event-name">{event.name}</h3>

        <ul className="event-meta-list">
          <li className="event-meta-item">
            <Calendar size={15} color="var(--accent)" />
            <span>{event.date}</span>
          </li>
          <li className="event-meta-item">
            <Clock size={15} color="var(--accent)" />
            <span>{event.time}</span>
          </li>
          <li className="event-meta-item">
            <MapPin size={15} color="var(--accent)" />
            <span>{event.venue}</span>
          </li>
        </ul>

        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
          {event.description}
        </p>

        <Link to="/events" className="btn-secondary" style={{ width: '100%' }}>
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}

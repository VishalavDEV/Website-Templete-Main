import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-img-wrapper">
        <img src={event.image} alt={event.title} className="event-card-img" />
        <span className="event-card-badge">{event.genre}</span>
      </div>

      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>

        <div className="event-card-details">
          <div className="event-card-detail">
            <Calendar size={15} />
            <span>{event.date}</span>
          </div>
          <div className="event-card-detail">
            <Clock size={15} />
            <span>{event.time}</span>
          </div>
          <div className="event-card-detail">
            <MapPin size={15} />
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="event-card-desc">{event.description}</p>

        <div className="event-card-footer">
          <div className="event-price">
            ₹{event.price} <span style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>/ PASS</span>
          </div>
          <Link to="/tickets" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
            <Ticket size={14} /> BOOK PASS
          </Link>
        </div>
      </div>
    </div>
  );
}

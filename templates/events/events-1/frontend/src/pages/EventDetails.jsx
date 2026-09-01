import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, CheckCircle2, Ticket, ArrowLeft } from 'lucide-react';
import { eventsData } from '../data/events';

export default function EventDetails({ onOpenRegisterModal }) {
  const { id } = useParams();

  const eventObj = eventsData.find((e) => e.id === id) || eventsData[0];

  return (
    <div>
      <div className="page-header" style={{ textAlign: 'left', padding: '8rem 0 4rem 0' }}>
        <div className="container">
          <Link to="/events" className="btn btn-outline btn-sm" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> Back to Events
          </Link>
          <span className="badge" style={{ marginBottom: '0.75rem', display: 'block', width: 'fit-content' }}>
            {eventObj.category}
          </span>
          <h1 className="page-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            {eventObj.title}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} style={{ color: 'var(--primary)' }} />
              <span>{eventObj.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} style={{ color: 'var(--primary)' }} />
              <span>{eventObj.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} style={{ color: 'var(--primary)' }} />
              <span>{eventObj.attendees} Delegates</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left Main Content */}
            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '2.5rem' }}>
                <img
                  src={eventObj.image}
                  alt={eventObj.title}
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
                About <span className="gradient-text">{eventObj.title}</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {eventObj.description}
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                Event Highlights & Tracks
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                {eventObj.highlights?.map((h, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 800 }}>PASS STARTING AT</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0.5rem 0 1.5rem 0' }}>
                {eventObj.price}
              </div>

              <button
                onClick={() => onOpenRegisterModal()}
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                <Ticket size={18} /> REGISTER PASS NOW
              </button>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
                Instant confirmation • Digital badge QR output • Free 48h transfer policy
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

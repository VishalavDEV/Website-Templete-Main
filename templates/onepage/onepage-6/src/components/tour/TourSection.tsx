import React, { useState } from 'react';
import { EVENTS, type EventItem } from '../../data/events';
import { TicketModal } from './TicketModal';
import { Calendar, Ticket } from 'lucide-react';

export const TourSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section id="tour" className="section-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--accent-warm)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          <Calendar size={14} />
          <span>13 — LIVE PERFORMANCE FREQUENCIES</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            fontWeight: 400,
            color: 'var(--text-main)',
            lineHeight: 1.05,
            marginBottom: '3rem'
          }}
        >
          NEXT <br />
          <span style={{ fontStyle: 'italic', color: 'var(--wine)' }}>FREQUENCIES</span>
        </h2>

        {/* Events Table / Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {EVENTS.map((event) => {
            const isSoldOut = event.status === 'SOLD OUT';
            const isLimited = event.status === 'LIMITED';

            return (
              <div
                key={event.id}
                onClick={() => !isSoldOut && setSelectedEvent(event)}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '28px 32px',
                  backgroundColor: 'rgba(242, 238, 232, 0.6)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  transition: 'var(--transition-smooth)',
                  cursor: isSoldOut ? 'not-allowed' : 'pointer',
                  opacity: isSoldOut ? 0.6 : 1,
                  boxShadow: 'var(--shadow-subtle)'
                }}
                data-cursor={isSoldOut ? 'SOLD OUT' : 'BOOK TICKET'}
              >
                {/* Date & Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '2.2rem',
                      color: 'var(--accent-warm)',
                      lineHeight: 1,
                      minWidth: '80px'
                    }}
                  >
                    {event.date}
                  </span>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}
                    >
                      {event.city}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-grotesk)',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginTop: '2px'
                      }}
                    >
                      {event.venue} • {event.time}
                    </p>
                  </div>
                </div>

                {/* Status & CTA Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '12px' }}>
                  <span
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-grotesk)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      backgroundColor: isSoldOut
                        ? 'rgba(39, 35, 38, 0.15)'
                        : isLimited
                        ? 'rgba(215, 107, 74, 0.2)'
                        : 'rgba(232, 154, 131, 0.25)',
                      color: isSoldOut ? 'var(--text-muted)' : 'var(--accent-warm)'
                    }}
                  >
                    {event.status}
                  </span>

                  <button
                    disabled={isSoldOut}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isSoldOut) setSelectedEvent(event);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      backgroundColor: isSoldOut ? 'var(--text-muted)' : 'var(--bg-dark)',
                      color: 'var(--bg-light)',
                      fontFamily: 'var(--font-grotesk)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      borderRadius: '2px',
                      transition: 'var(--transition-smooth)'
                    }}
                    aria-label={`Reserve ticket for ${event.city}`}
                  >
                    <Ticket size={14} />
                    <span>{isSoldOut ? 'SOLD OUT' : 'RESERVE TICKET'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ticket Modal */}
      <TicketModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

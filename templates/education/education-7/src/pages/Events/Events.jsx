/**
 * Events — Event list/calendar cards.
 */
import { useState } from 'react';
import { events } from '../../data/content';
import { MapPin, Calendar, Tag, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import styles from './Events.module.css';

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: d.toLocaleDateString('en-GB', { month: 'short' }),
    year: d.getFullYear(),
    full: d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  };
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registered, setRegistered] = useState(false);

  return (
    <main id="main-content" className={styles.page}>
      {/* Interactive RSVP Modal */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(19, 34, 56, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '1.25rem',
            maxWidth: '480px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            textAlign: 'left',
          }}>
            {!registered ? (
              <>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1a2e5a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Event RSVP
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
                  {selectedEvent.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {selectedEvent.description}
                </p>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#334155' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Calendar size={15} color="#1a2e5a" /> {formatDate(selectedEvent.date).full}
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={15} color="#1a2e5a" /> {selectedEvent.location}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                  <Button variant="outline" size="sm" onClick={() => setSelectedEvent(null)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => setRegistered(true)}>
                    Confirm RSVP Seat
                  </Button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '48px', height: '48px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>RSVP Confirmed!</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Your seat for <strong>{selectedEvent.title}</strong> is reserved. A calendar invite has been dispatched.
                </p>
                <Button variant="primary" size="sm" onClick={() => { setSelectedEvent(null); setRegistered(false); }}>
                  Done
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className="section-title">Upcoming Events</h1>
          <p className="section-subtitle">Discover lectures, open days, networking evenings, and more.</p>
        </div>

        <ul className={styles.list}>
          {events.map(event => {
            const date = formatDate(event.date);
            return (
              <li key={event.id} className={styles.item}>
                {/* Date badge */}
                <div className={styles.dateBadge} aria-label={date.full}>
                  <span className={styles.dateDay}>{date.day}</span>
                  <span className={styles.dateMonth}>{date.month}</span>
                  <span className={styles.dateYear}>{date.year}</span>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <div className={styles.top}>
                    <h2 className={styles.title}>{event.title}</h2>
                    <span className={styles.categoryTag}>
                      <Tag size={11} aria-hidden="true" /> {event.category}
                    </span>
                  </div>
                  <p className={styles.desc}>{event.description}</p>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <MapPin size={13} aria-hidden="true" /> {event.location}
                    </span>
                    <span className={styles.metaItem}>
                      <Calendar size={13} aria-hidden="true" /> {date.full}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className={styles.registerBtn}
                  onClick={() => setSelectedEvent(event)}
                >
                  Register
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Events;

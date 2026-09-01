import React from 'react';
import { Check, Ticket } from 'lucide-react';

export const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div
      className="sports-card"
      style={{
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: ticket.badge ? '2px solid var(--orange)' : '1px solid var(--border)',
      }}
    >
      {ticket.badge && (
        <span className="badge-live" style={{ marginBottom: '16px', background: '#ff4d00', color: '#050505', fontWeight: 900 }}>
          {ticket.badge}
        </span>
      )}

      <h3 className="font-display" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
        {ticket.name}
      </h3>

      <div className="font-display" style={{ fontSize: '3.2rem', color: '#ff4d00', lineHeight: 1, marginBottom: '20px' }}>
        {ticket.price}
      </div>

      <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '24px' }}>
        {ticket.benefits.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--white)', marginBottom: '12px', textAlign: 'left' }}>
            <Check size={18} color="#ff4d00" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => onSelect(ticket)}
        className="btn-primary"
        style={{ width: '100%', marginTop: 'auto' }}
      >
        <Ticket size={18} /> BUY TICKETS NOW
      </button>
    </div>
  );
};

import React from 'react';
import { Calendar, MapPin, User, Ticket, QrCode, Download } from 'lucide-react';

export default function DigitalTicket({ registration, onDone, showToast }) {
  if (!registration) return null;

  return (
    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
      <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 184, 148, 0.15)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
        <Ticket size={32} />
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
        ✓ Registration <span className="gradient-text">Successful!</span>
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
        Your digital conference pass badge has been generated and saved locally.
      </p>

      {/* Pass Badge UI */}
      <div style={{ background: 'var(--bg-main)', border: '2px dashed var(--primary)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', marginBottom: '2rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 800 }}>PASS CATEGORY</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>{registration.ticketName}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>TICKET ID</div>
            <div style={{ fontFamily: 'monospace', fontWeight: 800, color: 'var(--primary)' }}>{registration.ticketId}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>ATTENDEE:</span> <br />
            <strong style={{ color: 'var(--text-main)' }}>{registration.fullName}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>ORGANIZATION:</span> <br />
            <strong style={{ color: 'var(--text-main)' }}>{registration.organization}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>TICKETS:</span> <br />
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{registration.quantity} Pass(es)</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>TOTAL PAID:</span> <br />
            <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>₹{registration.totalAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* QR Code Container */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <QrCode size={64} style={{ color: 'var(--text-main)' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)' }}>OFFICIAL DELEGATE QR</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Scan at Venue Entrance</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => {
            if (showToast) showToast('Pass downloaded to device.');
          }}
          className="btn btn-outline btn-sm"
        >
          <Download size={16} /> Download Badge
        </button>
        <button onClick={onDone} className="btn btn-primary btn-sm">
          Done
        </button>
      </div>
    </div>
  );
}

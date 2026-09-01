import React from 'react';
import { X, Bookmark, Trash2, Clock, MapPin } from 'lucide-react';

export default function MyScheduleDrawer({ isOpen, onClose, savedSessions = [], onRemoveSession }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(108, 92, 231, 0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bookmark size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>My Saved Schedule</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {savedSessions.length} session{savedSessions.length === 1 ? '' : 's'} saved to local storage
            </p>
          </div>
        </div>

        {savedSessions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            <Bookmark size={36} style={{ color: 'var(--text-dim)', margin: '0 auto 1rem auto' }} />
            <p style={{ fontSize: '1rem', fontWeight: 600 }}>Your saved schedule is empty.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Click "Add to My Schedule" on any session card to save it here!
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
            {savedSessions.map((session) => (
              <div key={session.id} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div>
                  <span className="badge" style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>{session.category}</span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.25rem 0' }}>{session.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', gap: '1rem' }}>
                    <span><Clock size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {session.time}</span>
                    <span><MapPin size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {session.room}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveSession(session.id)}
                  style={{ color: '#ef4444', padding: '0.35rem', borderRadius: 'var(--radius-sm)', transition: 'var(--transition-fast)' }}
                  title="Remove from My Schedule"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

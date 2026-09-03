import React from 'react';
import { X, Clock, MapPin, User, Bookmark, Check } from 'lucide-react';

export default function SessionModal({ session, isBookmarked, onToggleBookmark, onClose }) {
  if (!session) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <span className="badge" style={{ marginBottom: '1rem' }}>{session.category}</span>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
          {session.title}
        </h2>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600 }}>
            <Clock size={16} /> {session.time}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
            <MapPin size={16} /> {session.room}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
            <User size={16} /> {session.speaker}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
            Session Abstract
          </h4>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{session.description}</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => onToggleBookmark(session)}
            className={`btn ${isBookmarked ? 'btn-primary' : 'btn-outline'}`}
            style={{ flex: 1 }}
          >
            {isBookmarked ? (
              <>
                <Check size={18} /> IN MY SCHEDULE
              </>
            ) : (
              <>
                <Bookmark size={18} /> ADD TO MY SCHEDULE
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

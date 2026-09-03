import React from 'react';
import { Clock, MapPin, User, Bookmark, Check } from 'lucide-react';

export default function ScheduleCard({ session, isBookmarked, onToggleBookmark, onOpenSessionModal }) {
  return (
    <div className="schedule-item">
      {/* Time & Room */}
      <div className="schedule-time-col">
        <div className="session-time">
          <Clock size={16} /> {session.time}
        </div>
        <div className="session-room">
          <MapPin size={15} /> {session.room}
        </div>
      </div>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span className="badge" style={{ fontSize: '0.75rem' }}>{session.category}</span>
          <button
            onClick={() => onToggleBookmark(session)}
            className={`btn btn-sm ${isBookmarked ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
          >
            {isBookmarked ? (
              <>
                <Check size={14} /> SAVED TO MY SCHEDULE
              </>
            ) : (
              <>
                <Bookmark size={14} /> ADD TO MY SCHEDULE
              </>
            )}
          </button>
        </div>

        <h3
          className="session-title"
          style={{ cursor: 'pointer' }}
          onClick={() => onOpenSessionModal(session)}
        >
          {session.title}
        </h3>

        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          <User size={15} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
          <span>{session.speaker}</span> ({session.speakerRole})
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
          {session.description}
        </p>
      </div>
    </div>
  );
}

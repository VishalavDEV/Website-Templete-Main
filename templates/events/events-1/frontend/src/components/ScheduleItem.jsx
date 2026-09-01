import React, { useState } from 'react';
import { Clock, MapPin, User, Bookmark } from 'lucide-react';

export default function ScheduleItem({ session }) {
  const [bookmarked, setBookmarked] = useState(false);

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

      {/* Session Details */}
      <div className="schedule-content-col">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="session-category-pill">{session.category}</span>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            style={{
              color: bookmarked ? 'var(--accent-cyan)' : 'var(--text-dim)',
              transition: 'all 0.2s ease',
              padding: '0.25rem'
            }}
            title={bookmarked ? 'Remove Bookmark' : 'Bookmark Session'}
          >
            <Bookmark size={18} fill={bookmarked ? 'var(--accent-cyan)' : 'none'} />
          </button>
        </div>

        <h3 className="session-title">{session.title}</h3>

        <div className="session-speaker">
          <User size={15} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
          <span>{session.speaker}</span> ({session.speakerRole})
        </div>

        <p className="session-desc">{session.description}</p>
      </div>
    </div>
  );
}

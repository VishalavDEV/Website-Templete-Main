import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';
import ScheduleCard from './ScheduleCard';
import SessionModal from './SessionModal';

export default function ScheduleTabs({ savedSessionIds = [], onToggleBookmark }) {
  const [activeDayId, setActiveDayId] = useState(scheduleData[0].dayId);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSessionModal, setActiveSessionModal] = useState(null);

  const activeDayObj = scheduleData.find((d) => d.dayId === activeDayId) || scheduleData[0];
  const categories = ['All', 'Keynote', 'Technology', 'Workshop', 'Panel', 'Leadership', 'Business', 'Startup', 'Networking'];

  const filteredSessions = activeDayObj.sessions.filter((session) => {
    return selectedCategory === 'All' || session.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div>
      {/* Day Selector Tabs */}
      <div className="schedule-tabs-wrap">
        {scheduleData.map((day) => (
          <button
            key={day.dayId}
            onClick={() => setActiveDayId(day.dayId)}
            className={`schedule-day-tab ${activeDayId === day.dayId ? 'active' : ''}`}
          >
            <div className="day-tab-title">{day.dayName}</div>
            <div className="day-tab-date">{day.date}</div>
          </button>
        ))}
      </div>

      {/* Category Pills Filter */}
      <div className="event-category-pills" style={{ marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="schedule-list">
        {filteredSessions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            No sessions available for this day in category "{selectedCategory}".
          </div>
        ) : (
          filteredSessions.map((session) => {
            const isBookmarked = savedSessionIds.includes(session.id);
            return (
              <ScheduleCard
                key={session.id}
                session={session}
                isBookmarked={isBookmarked}
                onToggleBookmark={onToggleBookmark}
                onOpenSessionModal={(s) => setActiveSessionModal(s)}
              />
            );
          })
        )}
      </div>

      {/* Session Modal */}
      {activeSessionModal && (
        <SessionModal
          session={activeSessionModal}
          isBookmarked={savedSessionIds.includes(activeSessionModal.id)}
          onToggleBookmark={onToggleBookmark}
          onClose={() => setActiveSessionModal(null)}
        />
      )}
    </div>
  );
}

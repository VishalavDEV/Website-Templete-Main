import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';
import { MapPin, ChevronDown, ChevronUp, User } from 'lucide-react';
import '../styles/schedule.css';

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [expandedSession, setExpandedSession] = useState(null);

  const dayObj = scheduleData[activeDay];
  const categories = ['All', 'Keynotes', 'AI/ML', 'Cloud', 'Product & UX', 'Business'];

  const filteredSessions = dayObj.sessions.filter((session) => {
    if (categoryFilter === 'All') return true;
    return session.category.toLowerCase().includes(categoryFilter.toLowerCase());
  });

  const toggleExpand = (id) => {
    setExpandedSession(expandedSession === id ? null : id);
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">SUMMIT AGENDA</div>
          <h2 className="section-title">Multi-Day Interactive Schedule</h2>
          <p className="section-subtitle">
            Curate your personalized agenda across three days of keynotes, engineering sessions, and executive networking.
          </p>
        </div>

        {/* Day Tabs & Category Filter */}
        <div className="schedule-controls">
          <div className="day-tabs">
            <button
              className={`day-tab-btn ${activeDay === 'day1' ? 'active' : ''}`}
              onClick={() => { setActiveDay('day1'); setExpandedSession(null); }}
            >
              DAY 01 <span style={{ opacity: 0.7, fontSize: '0.8rem', marginLeft: '6px' }}>Aug 28</span>
            </button>
            <button
              className={`day-tab-btn ${activeDay === 'day2' ? 'active' : ''}`}
              onClick={() => { setActiveDay('day2'); setExpandedSession(null); }}
            >
              DAY 02 <span style={{ opacity: 0.7, fontSize: '0.8rem', marginLeft: '6px' }}>Aug 29</span>
            </button>
            <button
              className={`day-tab-btn ${activeDay === 'day3' ? 'active' : ''}`}
              onClick={() => { setActiveDay('day3'); setExpandedSession(null); }}
            >
              DAY 03 <span style={{ opacity: 0.7, fontSize: '0.8rem', marginLeft: '6px' }}>Aug 30</span>
            </button>
          </div>

          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${categoryFilter === cat ? 'active' : ''}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions List */}
        <div className="session-list">
          {filteredSessions.map((session) => {
            const isExpanded = expandedSession === session.id;
            return (
              <div
                key={session.id}
                className="glass-card session-card"
                onClick={() => toggleExpand(session.id)}
              >
                {/* Time & Room Column */}
                <div className="session-time-col">
                  <div className="session-time">{session.time}</div>
                  <div className="session-room">
                    <MapPin size={14} color="var(--accent-purple)" />
                    {session.room}
                  </div>
                  <span className="badge badge-purple" style={{ alignSelf: 'flex-start', marginTop: '6px' }}>
                    {session.type}
                  </span>
                </div>

                {/* Main Session Content */}
                <div className="session-content-col">
                  <div className="session-header-row">
                    <h3 className="session-title">{session.title}</h3>
                    {isExpanded ? <ChevronUp size={20} color="var(--accent-cyan)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </div>

                  <div className="session-speaker-info">
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(124,58,237,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <User size={16} />
                    </div>
                    <div>
                      <div className="session-speaker-name">{session.speaker}</div>
                      <div className="session-speaker-role">{session.role}</div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="session-description" onClick={(e) => e.stopPropagation()}>
                      <p>{session.description}</p>
                      <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                        <span className="badge badge-cyan">Track: {session.track}</span>
                        <span className="badge badge-amber">Category: {session.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

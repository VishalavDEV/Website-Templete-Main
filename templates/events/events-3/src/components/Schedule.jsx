import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';
import { Calendar, Clock, MapPin, Bookmark, BookmarkCheck, Mic, Wrench, Users, Terminal, Video } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');
  const [bookmarkedSessions, setBookmarkedSessions] = useState([]);
  const [filterType, setFilterType] = useState('All');

  const currentDayData = scheduleData[activeDay];

  const toggleBookmark = (id) => {
    setBookmarkedSessions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getSessionIcon = (type) => {
    switch (type) {
      case 'Keynote': return Mic;
      case 'Workshop': return Wrench;
      case 'Panel': return Users;
      case 'Hackathon': return Terminal;
      case 'Demo': return Video;
      default: return Clock;
    }
  };

  const sessionTypes = ['All', 'Keynote', 'Workshop', 'Panel', 'Hackathon', 'Demo'];

  const filteredEvents = currentDayData.events.filter((ev) => {
    if (filterType === 'All') return true;
    return ev.type === filterType;
  });

  return (
    <section id="schedule" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <div className="section-tag">
          <Calendar size={14} /> Comprehensive Agenda
        </div>
        <h2 className="section-title">
          Summit <span className="text-gradient">Schedule & Tracks</span>
        </h2>
        <p className="section-subtitle">
          Explore three days of intensive keynotes, hands-on cryogenic labs, spatial computing demos, and the $90,000 hackathon.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}
      >
        {[
          { key: 'day1', label: 'Day 1 • Nov 12', subtitle: 'Robotics & Quantum Core' },
          { key: 'day2', label: 'Day 2 • Nov 13', subtitle: 'Edge AI & XR Frontiers' },
          { key: 'day3', label: 'Day 3 • Nov 14', subtitle: 'Hackathon & Grand Finale' }
        ].map((tab) => {
          const isActive = activeDay === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveDay(tab.key)}
              style={{
                padding: '16px 28px',
                borderRadius: '16px',
                background: isActive ? 'var(--gradient-main)' : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid',
                borderColor: isActive ? 'transparent' : 'var(--glass-border)',
                color: isActive ? '#000' : 'var(--text-primary)',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem' }}>
                {tab.label}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isActive ? 'rgba(0,0,0,0.75)' : 'var(--text-muted)'
                }}
              >
                {tab.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Category Type Filter Pill Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '48px'
        }}
      >
        {sessionTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: filterType === type ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid',
              borderColor: filterType === type ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
              color: filterType === type ? 'var(--accent-cyan)' : 'var(--text-secondary)'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            No sessions match the selected filter.
          </div>
        ) : (
          filteredEvents.map((ev) => {
            const IconComp = getSessionIcon(ev.type);
            const isBookmarked = bookmarkedSessions.includes(ev.id);

            return (
              <div
                key={ev.id}
                className="glass-card"
                style={{
                  padding: '24px 30px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap'
                }}
              >
                {/* Time & Session Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: '240px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={22} color="#00f0ff" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--accent-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Clock size={14} /> {ev.time}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {ev.location}
                    </div>
                  </div>
                </div>

                {/* Session Main Info */}
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                      {ev.type}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-violet)', fontWeight: 600 }}>
                      {ev.track}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{ev.title}</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Presenter: <strong style={{ color: 'var(--text-primary)' }}>{ev.speaker}</strong>
                  </div>
                </div>

                {/* Bookmark Action */}
                <button
                  onClick={() => toggleBookmark(ev.id)}
                  title={isBookmarked ? 'Remove from My Schedule' : 'Add to My Schedule'}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: isBookmarked ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid',
                    borderColor: isBookmarked ? 'var(--accent-cyan)' : 'var(--glass-border)',
                    color: isBookmarked ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}
                >
                  {isBookmarked ? <BookmarkCheck size={18} color="#00f0ff" /> : <Bookmark size={18} />}
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

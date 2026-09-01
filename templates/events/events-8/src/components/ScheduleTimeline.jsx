import React, { useState } from 'react';
import { Clock, MapPin, Tag } from 'lucide-react';

const ScheduleTimeline = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'MAIN EVENT', 'WORKSHOP', 'MENTORING', 'FOOD', 'COMPETITION'];

  const scheduleEvents = [
    { time: '18:00', title: 'Check-in & Registration', desc: 'Welcome hackers! Collect your hacker badges, event t-shirt & mystery swag bags at the main desk.', category: 'MAIN EVENT', location: 'Main Entrance Hall' },
    { time: '19:00', title: 'Opening Ceremony', desc: 'Keynote address by Nexora Directors, announcement of rules & sponsor perks.', category: 'MAIN EVENT', location: 'Auditorium Alpha' },
    { time: '19:30', title: 'Team Formation Mixer', desc: 'Solo hackers match up with team captains based on complementary skills.', category: 'MAIN EVENT', location: 'Networking Zone' },
    { time: '19:30', title: 'Dinner Buffet', desc: 'Fuel up with gourmet dinner before coding begins.', category: 'FOOD', location: 'Cafeteria Deck' },
    { time: '20:00', title: 'Problem Statement Release', desc: 'All 8 track challenge details unlocked on the live hacker dashboard.', category: 'COMPETITION', location: 'Main Portal' },
    { time: '21:00', title: 'Coding Begins!', desc: 'The 24-hour countdown starts. High-speed Wi-Fi, desk monitors & git repos live.', category: 'MAIN EVENT', location: 'Innovation Labs 1-4' },
    { time: '23:00', title: 'Mentor Round 1', desc: 'Industry mentors circulate to review project architecture and provide feedback.', category: 'MENTORING', location: 'Workstation Desks' },
    { time: '00:00', title: 'Midnight Pizza Break', desc: 'Fresh hot pizza delivered to all hacking stations + retro synthwave DJ set.', category: 'FOOD', location: 'Recreation Lounge' },
    { time: '01:30', title: 'AI Workshop: Fine-tuning LLMs', desc: 'Hands-on session on fine-tuning open-source models with GPU acceleration.', category: 'WORKSHOP', location: 'Tech Lab Beta' },
    { time: '03:00', title: 'Cybersecurity Challenge: Midnight CTF', desc: 'Optional mini CTF side challenge for surprise bonus prize pool!', category: 'COMPETITION', location: 'Cyber Cell' },
    { time: '03:00', title: 'Midnight Coffee & Energy Station', desc: 'Unlimited espresso, cold brew, and energy drinks to power through the night.', category: 'FOOD', location: 'Beverage Bar' },
    { time: '06:00', title: 'Mentor Round 2', desc: 'Mid-way check-in with mentors. Code review and pitch refinement.', category: 'MENTORING', location: 'Workstation Desks' },
    { time: '08:00', title: 'Breakfast Break', desc: 'South Indian breakfast buffet & hot coffee to refresh early risers.', category: 'FOOD', location: 'Dining Hall' },
    { time: '10:00', title: 'Final Development Sprint', desc: '4 hours remaining. Finalize features, deploy to cloud & record demo videos.', category: 'MAIN EVENT', location: 'Innovation Labs' },
    { time: '14:00', title: 'Project Submission Deadline', desc: 'Hard stop for GitHub repository commits and Devpost/portal submissions.', category: 'COMPETITION', location: 'Online Portal' },
    { time: '15:00', title: 'Judging Begins', desc: 'Top teams present live demos in front of the judge panel.', category: 'COMPETITION', location: 'Judging Arenas A, B, C' },
    { time: '17:00', title: 'Results Compilation', desc: 'Judges finalize scores across technical complexity, innovation & UI.', category: 'MAIN EVENT', location: 'Jury Room' },
    { time: '18:00', title: 'Grand Prize Ceremony', desc: 'Awarding ₹5,00,000+ in cash, trophies, sponsor awards, and closing remarks.', category: 'MAIN EVENT', location: 'Grand Auditorium' }
  ];

  const filteredEvents = activeCategory === 'ALL'
    ? scheduleEvents
    : scheduleEvents.filter((ev) => ev.category === activeCategory);

  const displayedEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}
      >
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: activeCategory === cat ? '#00ff66' : 'rgba(10, 16, 12, 0.8)',
              color: activeCategory === cat ? '#000' : '#cbd5e1',
              border: `1px solid ${activeCategory === cat ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`,
              boxShadow: activeCategory === cat ? '0 0 15px rgba(0, 255, 102, 0.4)' : 'none'
            }}
            className="interactive"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline Vertical Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto',
          paddingLeft: '2rem'
        }}
      >
        {/* Central Vertical Glowing Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '11px',
            width: '2px',
            background: 'linear-gradient(180deg, #00ff66 0%, rgba(0, 255, 102, 0.2) 100%)',
            boxShadow: '0 0 8px #00ff66'
          }}
        />

        {displayedEvents.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              marginBottom: '2rem',
              paddingLeft: '1.5rem'
            }}
          >
            {/* Glowing Timeline Dot Marker */}
            <div
              style={{
                position: 'absolute',
                top: '6px',
                left: '-2rem',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#050505',
                border: '2px solid #00ff66',
                boxShadow: '0 0 10px #00ff66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00ff66' }} />
            </div>

            {/* Event Card Content */}
            <div
              className="cyber-card"
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'rgba(10, 16, 12, 0.85)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00ff66', fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '1rem' }}>
                  <Clock size={16} />
                  <span>{item.time}</span>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 255, 102, 0.1)',
                    border: '1px solid rgba(0, 255, 102, 0.3)',
                    color: '#00ff66'
                  }}
                >
                  <Tag size={10} style={{ marginRight: '4px', display: 'inline' }} />
                  {item.category}
                </div>
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>{item.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{item.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={14} color="#00ff66" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTimeline;

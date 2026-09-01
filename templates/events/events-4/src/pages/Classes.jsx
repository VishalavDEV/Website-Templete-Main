import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Classes = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const fullSchedule = {
    Monday: [
      { time: '06:00 AM', name: 'Strength Training', trainer: 'Arin Vale', diff: 'Hard' },
      { time: '07:30 AM', name: 'HIIT Burn', trainer: 'Kael Ryder', diff: 'Extreme' },
      { time: '06:00 PM', name: 'Bodybuilding Split', trainer: 'Ryan Cross', diff: 'Hard' },
      { time: '07:30 PM', name: 'Functional Circuit', trainer: 'Nova Reyes', diff: 'Medium' }
    ],
    Tuesday: [
      { time: '06:00 AM', name: 'Cardio Blast', trainer: 'Kael Ryder', diff: 'Medium' },
      { time: '07:00 AM', name: 'Mobility & Flow', trainer: 'Nova Reyes', diff: 'Light' },
      { time: '06:00 PM', name: 'Powerlifting Heavy', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '07:30 PM', name: 'Core Annihilation', trainer: 'Ryan Cross', diff: 'Hard' }
    ],
    Wednesday: [
      { time: '06:00 AM', name: 'Olympic Weightlifting', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '07:30 AM', name: 'Endurance Rush', trainer: 'Kael Ryder', diff: 'Hard' },
      { time: '06:00 PM', name: 'Metabolic Conditioning', trainer: 'Nova Reyes', diff: 'Hard' },
      { time: '07:30 PM', name: 'Hypertrophy Legs', trainer: 'Ryan Cross', diff: 'Extreme' }
    ],
    Thursday: [
      { time: '06:00 AM', name: 'Strongman Basics', trainer: 'Arin Vale', diff: 'Hard' },
      { time: '07:30 AM', name: 'Sprint & Agility', trainer: 'Kael Ryder', diff: 'Hard' },
      { time: '06:00 PM', name: 'Chest & Back Sculpt', trainer: 'Ryan Cross', diff: 'Hard' }
    ],
    Friday: [
      { time: '06:00 AM', name: 'Full Body Beast', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '07:30 AM', name: 'Tabata Burnout', trainer: 'Kael Ryder', diff: 'Extreme' },
      { time: '06:00 PM', name: 'Arms & Shoulders', trainer: 'Ryan Cross', diff: 'Medium' }
    ],
    Saturday: [
      { time: '08:00 AM', name: 'Iron Ascent Prep', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '10:00 AM', name: 'Endurance Circuit', trainer: 'Kael Ryder', diff: 'Hard' }
    ],
    Sunday: [
      { time: '09:00 AM', name: 'Active Recovery & Stretching', trainer: 'Nova Reyes', diff: 'Light' }
    ]
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="WEEKLY TIMETABLE" title="CLASSES SCHEDULE" />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              style={{
                padding: '0.6rem 1.2rem',
                background: selectedDay === day ? 'var(--color-yellow)' : 'var(--color-bg-card)',
                color: selectedDay === day ? '#000' : '#FFF',
                border: 'none',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '800',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {day.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid-2">
          {fullSchedule[selectedDay].map((item, idx) => (
            <div key={idx} className="diagonal-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ color: 'var(--color-yellow)', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {item.time}
                </span>
                <h3 style={{ color: '#FFF', fontSize: '1.4rem', margin: '0.3rem 0' }}>{item.name}</h3>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  COACH: <strong style={{ color: '#FFF' }}>{item.trainer}</strong>
                </div>
              </div>
              <Button to="/registration" variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                BOOK SLOT
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;

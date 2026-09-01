import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Schedule = () => {
  const timelineEvents = [
    { time: '08:00 AM', title: 'Registration & Check-In Opens', desc: 'Athlete badge pickup and weight-in verification.' },
    { time: '09:00 AM', title: 'Opening Ceremony & Briefing', desc: 'Welcome address by Head Coach Arin Vale and judge intro.' },
    { time: '09:30 AM', title: 'Athlete Warm-Up Session', desc: 'Guided mobility and barbell warm-up.' },
    { time: '10:00 AM', title: 'Strength Challenge (Power Lift)', desc: 'Max deadlift and bench press competition.' },
    { time: '12:00 PM', title: 'Endurance Challenge (Metabolic Burn)', desc: 'Sled pushes, kettlebell snatches, and row sprints.' },
    { time: '02:00 PM', title: 'Lunch Break & Sponsor Expo', desc: 'Athlete refueling and supplement sampling.' },
    { time: '03:00 PM', title: 'Final Challenge (Beast Circuit)', desc: 'Top 10 finalists battle through obstacle & strength rig.' },
    { time: '05:00 PM', title: 'Awards Ceremony', desc: 'Podium trophy presentation and cash prize distribution.' },
    { time: '06:00 PM', title: 'Closing Ceremony & Celebration', desc: 'Celebration, DJ set, and networking.' }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="EVENT DAY TIMELINE" title="IRON ASCENT 2026 SCHEDULE" />
        <div style={{ maxWidth: '800px', margin: '0 auto', borderLeft: '3px solid var(--color-yellow)', paddingLeft: '2rem' }}>
          {timelineEvents.map((e, idx) => (
            <div key={idx} style={{ marginBottom: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.65rem', top: '0', width: '18px', height: '18px', background: 'var(--color-yellow)', borderRadius: '50%' }} />
              <div style={{ color: 'var(--color-yellow)', fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold' }}>{e.time}</div>
              <h3 style={{ color: '#FFF', fontSize: '1.35rem', margin: '0.2rem 0 0.5rem' }}>{e.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

import React, { useState } from 'react';
import { SCHEDULE_DAYS } from '../data/schedule';
import { Clock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function ScheduleTimeline() {
  const [activeTab, setActiveTab] = useState('sunday');

  const currentDay = SCHEDULE_DAYS.find(day => day.id === activeTab) || SCHEDULE_DAYS[1];

  return (
    <section style={{
      background: 'linear-gradient(180deg, #15171B 0%, #090A0D 100%)',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            EVENT TIMELINE
          </div>
          <h2 className="section-title">RACE WEEKEND SCHEDULE</h2>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
            Plan your race weekend from Saturday Bib Expo to Sunday Podium Celebrations.
          </p>
        </div>

        {/* Day Switcher Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {SCHEDULE_DAYS.map(day => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className="glass-panel"
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                border: activeTab === day.id ? '2px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === day.id ? 'linear-gradient(135deg, rgba(233,43,43,0.2), rgba(255,107,44,0.2))' : 'rgba(21,23,27,0.6)',
                color: '#FFFFFF',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: activeTab === day.id ? 'var(--bright-orange)' : 'var(--soft-grey)', letterSpacing: '2px' }}>
                {day.id.toUpperCase()}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {day.date.split('—')[1]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Day Timeline List */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Central Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--marathon-red), var(--bright-orange), transparent)',
            zIndex: 1
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {currentDay.timeline.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  marginLeft: '48px',
                  padding: '24px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  borderLeft: '4px solid var(--bright-orange)'
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-37px',
                  top: '28px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--bright-orange)',
                  border: '3px solid #090A0D',
                  boxShadow: '0 0 10px var(--glow-orange)',
                  zIndex: 3
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--bright-orange)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    <Clock size={15} /> {item.time}
                  </span>

                  <span style={{
                    fontSize: '0.78rem',
                    color: 'var(--soft-grey)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <MapPin size={13} color="var(--marathon-red)" /> {item.location}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '6px' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

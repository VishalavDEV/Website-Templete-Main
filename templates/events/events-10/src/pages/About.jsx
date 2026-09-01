import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { Shield, Trophy, Target, Users, Calendar, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              THE <span>TOURNAMENT</span>
            </h1>
            <div className="section-subtitle">OVERVIEW, HISTORY & TOURNAMENT DIRECTORS</div>
          </div>

          {/* Overview */}
          <div className="sports-card" style={{ padding: '40px', marginBottom: '50px' }}>
            <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#ff4d00', marginBottom: '16px' }}>
              TOURNAMENT OVERVIEW
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--white)', lineHeight: 1.8, marginBottom: '20px' }}>
              <strong>{tournamentData.info.name}</strong> is South Asia’s premier international basketball championship event. Bringing together 16 elite franchises from across the globe, the tournament represents the pinnacle of athletic speed, tactical brilliance, and high-stakes competition.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--gray)', lineHeight: 1.8 }}>
              Held annually at the world-class Vortex Arena in Chennai, Tamil Nadu, India, the tournament follows official FIBA standards and features a ₹10,00,000+ total prize purse.
            </p>
          </div>

          {/* Objectives */}
          <div className="section-header">
            <h2 className="section-title">
              TOURNAMENT <span>OBJECTIVES</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {[
              { title: 'Promote Basketball', desc: 'Elevate international basketball standards across India and global leagues.' },
              { title: 'Discover Young Talent', desc: 'Provide a scouted platform for upcoming college & professional prospects.' },
              { title: 'Encourage Teamwork', desc: 'Foster intense sportsmanship and tactical discipline under intense pressure.' },
              { title: 'Develop Sports Culture', desc: 'Engage thousands of live stadium fans and millions of online stream viewers.' },
            ].map((obj, idx) => (
              <div key={idx} className="sports-card" style={{ padding: '30px', borderLeft: '4px solid var(--orange)' }}>
                <Target size={32} color="#ff4d00" style={{ marginBottom: '12px' }} />
                <h3 className="font-display" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{obj.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>{obj.desc}</p>
              </div>
            ))}
          </div>

          {/* Organizers */}
          <div className="section-header">
            <h2 className="section-title">
              TOURNAMENT <span>ORGANIZERS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { role: 'Tournament Director', name: 'Vikramaditya Sen' },
              { role: 'Event Manager', name: 'Ananya Deshmukh' },
              { role: 'Technical Director', name: 'S. Ranganathan' },
              { role: 'Head Referee', name: 'David Miller' },
              { role: 'Operations Manager', name: 'Karthik Raja' },
            ].map((org, i) => (
              <div key={i} className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
                <Users size={36} color="#ff4d00" style={{ marginBottom: '10px' }} />
                <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{org.name}</h3>
                <div className="font-sports" style={{ fontSize: '0.9rem', color: '#ff7518' }}>{org.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

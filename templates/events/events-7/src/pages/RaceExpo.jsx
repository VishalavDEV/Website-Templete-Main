import React from 'react';
import { EXPO_DETAILS } from '../data/expo';
import { Award, ShoppingBag, Utensils, Camera, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function RaceExpo() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>PRE-RACE CELEBRATION</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            THE RACE EXPO 2026
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Bib collection, running technology showcase, sponsor booths, masterclasses, and pasta carbo-loading party.
          </p>
        </div>

        {/* Venue Info Banner */}
        <div className="glass-panel" style={{
          padding: '30px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          borderLeft: '5px solid var(--marathon-red)'
        }}>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '2px' }}>
              EXPO VENUE & TIMINGS
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#FFF', fontWeight: 800, margin: '6px 0' }}>
              {EXPO_DETAILS.venue}
            </h3>
            <p style={{ color: 'var(--soft-grey)', fontSize: '0.9rem' }}>
              {EXPO_DETAILS.address}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--warm-white)', fontWeight: 800, fontSize: '1.1rem' }}>
              {EXPO_DETAILS.dates}
            </div>
            <div style={{ color: 'var(--bright-orange)', fontSize: '0.9rem', fontWeight: 700 }}>
              {EXPO_DETAILS.timings}
            </div>
          </div>
        </div>

        {/* Expo Highlights */}
        <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '32px' }}>
          EXPO HIGHLIGHTS & ZONES
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {EXPO_DETAILS.highlights.map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', borderTop: '3px solid var(--bright-orange)' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Expo Schedule Timeline */}
        <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '32px' }}>
          SATURDAY EXPO TIMELINE
        </h2>

        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {EXPO_DETAILS.expoSchedule.map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ color: 'var(--bright-orange)', fontWeight: 800, fontSize: '1rem', minWidth: '90px' }}>
                {item.time}
              </span>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                {item.event}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

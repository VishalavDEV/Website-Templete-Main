import React, { useState } from 'react';
import { TRAINING_PLANS } from '../data/training';
import { Compass, Activity, Apple, Zap, CheckCircle2 } from 'lucide-react';

export default function Training() {
  const [activePlan, setActivePlan] = useState('half');

  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>MARATHON PREPARATION</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            TRAINING & NUTRITION PLAN
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Structured 12-week schedules, pacing guidelines, recovery rules, and race-day fuel strategies.
          </p>
        </div>

        {/* Plan Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActivePlan('half')}
            style={{
              background: activePlan === 'half' ? 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))' : 'rgba(255,255,255,0.05)',
              border: activePlan === 'half' ? 'none' : '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              padding: '12px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '0.9rem'
            }}
          >
            21.1 KM HALF MARATHON (12 WEEKS)
          </button>
          <button
            onClick={() => setActivePlan('beginner')}
            style={{
              background: activePlan === 'beginner' ? 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))' : 'rgba(255,255,255,0.05)',
              border: activePlan === 'beginner' ? 'none' : '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              padding: '12px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '0.9rem'
            }}
          >
            5K / 10K BEGINNER PLAN (6 WEEKS)
          </button>
        </div>

        {/* Training Plan Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {(activePlan === 'half' ? TRAINING_PLANS.halfMarathon : TRAINING_PLANS.beginner5k).map((phase, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px', borderTop: '4px solid var(--bright-orange)' }}>
              <span style={{ color: 'var(--bright-orange)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
                {phase.week}
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, margin: '6px 0 12px 0' }}>
                {phase.phase}
              </h3>
              {phase.volume && (
                <div style={{ color: 'var(--marathon-red)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '10px' }}>
                  Target Volume: {phase.volume}
                </div>
              )}
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {phase.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Nutrition & Recovery Section */}
        <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '32px' }}>
          NUTRITION & RECOVERY GUIDELINES
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {TRAINING_PLANS.nutritionTips.map((tip, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--marathon-red)' }}>
              <Apple size={24} color="var(--bright-orange)" style={{ marginBottom: '12px' }} />
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px' }}>
                {tip.title}
              </h4>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

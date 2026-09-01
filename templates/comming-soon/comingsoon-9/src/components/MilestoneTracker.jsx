import React from 'react';
import { CheckCircle2, Circle, Flame, Sparkles, Activity, Clock } from 'lucide-react';

export default function MilestoneTracker({ currentPreset, lang = 'en', t }) {
  return (
    <div style={{ margin: '48px 0 64px 0', width: '100%' }}>
      {/* Container Panel */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'var(--bg-card)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Top Scarcity and Readiness Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-1)',
              marginBottom: '6px'
            }}>
              <Activity size={14} />
              <span>Production Pipeline</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}>
              {t.readinessStatus}: <span className="gradient-text">{currentPreset.readinessPercent}%</span>
            </h3>
          </div>

          {/* Scarcity Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div className="glass-pill" style={{
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: '#f59e0b',
              fontWeight: 600
            }}>
              <Flame size={14} style={{ color: '#f59e0b' }} />
              <span>{currentPreset.activeVisitors} {t.liveViewers}</span>
            </div>

            <div className="glass-pill" style={{
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: '#10b981',
              fontWeight: 600
            }}>
              <Sparkles size={14} style={{ color: '#10b981' }} />
              <span>{currentPreset.vipSpotsRemaining} {t.vipSpotsLeft}</span>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div style={{
          width: '100%',
          height: '10px',
          background: 'var(--bg-pill)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
          marginBottom: '32px',
          position: 'relative'
        }}>
          <div style={{
            width: `${currentPreset.readinessPercent}%`,
            height: '100%',
            background: 'var(--accent-gradient)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }} />
        </div>

        {/* Milestone Steps Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {currentPreset.milestones.map((m, idx) => {
            const isCompleted = m.status === 'completed';
            const isCurrent = m.status === 'current';

            return (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  background: isCurrent ? 'var(--bg-pill)' : 'transparent',
                  border: `1px solid ${isCurrent ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: isCompleted ? '#10b981' : isCurrent ? 'var(--accent-1)' : 'var(--text-muted)'
                  }}>
                    {m.phase} • {m.date}
                  </span>

                  {isCompleted ? (
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                  ) : isCurrent ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-1)' }} className="animate-radar" />
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-1)' }}>ACTIVE</span>
                    </div>
                  ) : (
                    <Clock size={15} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>

                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: isCurrent ? 'var(--text-primary)' : isCompleted ? 'var(--text-secondary)' : 'var(--text-muted)'
                }}>
                  {m.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

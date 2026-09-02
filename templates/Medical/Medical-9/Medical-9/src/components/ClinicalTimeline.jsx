import React, { useState } from 'react';
import { PATIENT_STORIES } from '../data/medicalData';
import { Heart, Activity, CheckCircle, ChevronRight, Quote, Clock, Award } from 'lucide-react';

export default function ClinicalTimeline() {
  const [activeStoryId, setActiveStoryId] = useState('story-1');

  const activeStory = PATIENT_STORIES.find((s) => s.id === activeStoryId) || PATIENT_STORIES[0];

  return (
    <section id="stories" style={{ padding: '5rem 0', background: 'rgba(241, 245, 249, 0.4)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Heart size={14} />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Clinical Timelines & <span className="gradient-text">Recovery Stories</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Real patient journeys highlighting diagnostic evaluation, micro-invasive procedures, 
            and rapid post-operative milestones.
          </p>
        </div>

        {/* Story Selector Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          {PATIENT_STORIES.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={activeStoryId === story.id ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              <span>{story.patientName}</span> — {story.treatment}
            </button>
          ))}
        </div>

        {/* Active Case Study Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left: Patient Visuals & Quote */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="glass-panel" style={{ padding: '2rem', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <img
                  src={activeStory.imageAfter}
                  alt={activeStory.patientName}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-md)' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(16, 185, 129, 0.9)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {activeStory.recoveryTime}
                </span>
              </div>

              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid var(--primary-cyan)', marginBottom: '1rem' }}>
                <Quote size={20} style={{ position: 'absolute', left: '6px', top: '0', color: 'var(--primary-cyan)', opacity: 0.5 }} />
                <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  "{activeStory.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.8125rem' }}>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>{activeStory.patientName}</div>
                  <div style={{ color: 'var(--text-muted)' }}>Condition: {activeStory.condition}</div>
                </div>
                <div style={{ fontWeight: '700', color: 'var(--accent-teal)' }}>
                  {activeStory.leadDoctor}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Step-by-Step Clinical Timeline */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} style={{ color: 'var(--primary-cyan)' }} />
                <span>Clinical Roadmap & Recovery Milestones</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                {activeStory.timeline.map((stepItem, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '70px',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      background: idx === 2 ? 'var(--primary-cyan)' : 'var(--bg-subtle)',
                      color: idx === 2 ? 'white' : 'var(--primary-cyan)',
                      fontWeight: '700',
                      fontSize: '0.78rem',
                      textAlign: 'center'
                    }}>
                      {stepItem.step}
                    </div>
                    <div style={{ flexGrow: 1, paddingTop: '2px' }}>
                      <div style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: '500' }}>
                        {stepItem.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

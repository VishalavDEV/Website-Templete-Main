import React, { useState } from 'react';
import { PARTICIPANT_STATS, PARTICIPANT_CATEGORIES, RUNNER_STORIES } from '../data/participants';
import ParticipantCard from '../components/ParticipantCard';
import { Users, Globe, MapPin, Heart, Sparkles } from 'lucide-react';

export default function Participants() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredStories = selectedCat === 'all' 
    ? RUNNER_STORIES 
    : RUNNER_STORIES.filter(s => s.category === selectedCat);

  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>RUNNER DASHBOARD</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            MEET THE RUNNERS.
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Thousands of stories, one shared finish line. Explore runner demographics and inspiring personal journeys.
          </p>
        </div>

        {/* Dashboard Statistics Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {[
            { label: "REGISTERED RUNNERS", value: PARTICIPANT_STATS.totalRegistered, icon: Users },
            { label: "CITIES REPRESENTED", value: PARTICIPANT_STATS.citiesCount, icon: MapPin },
            { label: "COUNTRIES", value: PARTICIPANT_STATS.countriesCount, icon: Globe },
            { label: "WOMEN RUNNERS", value: PARTICIPANT_STATS.womenPercentage, icon: Heart },
            { label: "MEN RUNNERS", value: PARTICIPANT_STATS.menPercentage, icon: Sparkles }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', textAlign: 'center', borderTop: '3px solid var(--marathon-red)' }}>
              <item.icon size={24} color="var(--bright-orange)" style={{ margin: '0 auto 10px auto' }} />
              <div className="font-display text-gradient-fire" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--soft-grey)', marginTop: '6px', letterSpacing: '1px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {PARTICIPANT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              style={{
                background: selectedCat === cat.id ? 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))' : 'rgba(255,255,255,0.05)',
                border: selectedCat === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.82rem'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredStories.map(story => (
            <ParticipantCard key={story.id} story={story} />
          ))}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { speakers } from '../data/speakers';
import { SpeakerCard } from './SpeakerCard';
import { SpeakerModal } from './SpeakerModal';
import { ArrowRight } from 'lucide-react';
import '../styles/cards.css';

export const Speakers = ({ onViewAll }) => {
  const [filter, setFilter] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const categories = ['All', 'Keynote', 'AI & Tech', 'Workshops', 'Business'];

  const filteredSpeakers = filter === 'All'
    ? speakers
    : speakers.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">SUMMIT SPEAKERS</div>
          <h2 className="section-title">Learn from Global Visionaries</h2>
          <p className="section-subtitle">
            Featuring pioneers leading artificial intelligence, distributed systems, quantum computing, and spatial interface engineering.
          </p>

          {/* Filter Pills */}
          <div className="filter-pills" style={{ marginTop: '24px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Speaker Cards Grid */}
        <div className="speaker-grid">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} onSelect={setSelectedSpeaker} />
          ))}
        </div>

        {/* View All Speakers CTA */}
        {onViewAll && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn btn-secondary" onClick={onViewAll}>
              View All Speakers <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Speaker Detail Modal */}
      {selectedSpeaker && (
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </section>
  );
};

import React, { useState } from 'react';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerFilter from '../components/SpeakerFilter';
import SpeakerModal from '../components/SpeakerModal';
import { speakersData } from '../data/speakers';

export default function Speakers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalSpeaker, setActiveModalSpeaker] = useState(null);

  const filteredSpeakers = speakersData.filter((sp) => {
    return selectedCategory === 'All' || sp.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">GLOBAL THOUGHT LEADERS</span>
          <h1 className="page-title">
            Keynote <span className="gradient-text">Speakers</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Meet our distinguished panel of CTOs, AI research directors, cloud engineers, and founders.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SpeakerFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="speakers-grid">
            {filteredSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onSelectSpeaker={(sp) => setActiveModalSpeaker(sp)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeModalSpeaker && (
        <SpeakerModal
          speaker={activeModalSpeaker}
          onClose={() => setActiveModalSpeaker(null)}
        />
      )}
    </div>
  );
}

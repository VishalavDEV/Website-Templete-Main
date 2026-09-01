import React, { useState } from 'react';
import { speakers } from '../data/speakers';
import { SpeakerCard } from '../components/SpeakerCard';
import { SpeakerModal } from '../components/SpeakerModal';
import { Search } from 'lucide-react';
import '../styles/cards.css';

export const SpeakersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const categories = ['All', 'Keynote', 'AI & Tech', 'Workshops', 'Business'];

  const filteredSpeakers = speakers.filter((sp) => {
    const matchSearch =
      sp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filter === 'All' || sp.category.toLowerCase().includes(filter.toLowerCase());
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">SUMMIT ROSTER</div>
          <h1 className="section-title">Keynote Speakers & Experts</h1>
          <p className="section-subtitle">
            Explore bios, session details, and published research from our world-class speaker faculty.
          </p>

          {/* Search & Category Filter */}
          <div style={{ maxWidth: '600px', margin: '30px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search speakers by name, company, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '44px', borderRadius: 'var(--radius-full)' }}
              />
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <div className="filter-pills" style={{ justifyContent: 'center' }}>
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
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="speaker-grid">
            {filteredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} onSelect={setSelectedSpeaker} />
            ))}
          </div>

          {filteredSpeakers.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No speakers matched your search criteria. Try adjusting your search term.
            </div>
          )}
        </div>
      </section>

      {selectedSpeaker && <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />}
    </div>
  );
};

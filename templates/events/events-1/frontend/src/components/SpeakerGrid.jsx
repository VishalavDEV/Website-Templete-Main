import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SpeakerCard from './SpeakerCard';
import SpeakerModal from './SpeakerModal';
import { speakersData } from '../data/speakers';

export default function SpeakerGrid({ limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalSpeaker, setActiveModalSpeaker] = useState(null);

  const categories = ['All', 'Technology', 'AI', 'Cloud', 'Business', 'Leadership'];

  const filteredSpeakers = speakersData.filter((speaker) => {
    const matchesCategory =
      selectedCategory === 'All' || speaker.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedSpeakers = limit ? filteredSpeakers.slice(0, limit) : filteredSpeakers;

  return (
    <div>
      {/* Category Pills & Search */}
      {!limit && (
        <>
          <div className="speaker-search-bar">
            <Search size={18} className="speaker-search-icon" />
            <input
              type="text"
              placeholder="Search speaker by name, company, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="speaker-search-input"
            />
          </div>

          <div className="speaker-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Grid */}
      {displayedSpeakers.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
          No speakers found matching your search criteria.
        </div>
      ) : (
        <div className="speakers-grid">
          {displayedSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              onSelectSpeaker={(sp) => setActiveModalSpeaker(sp)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {activeModalSpeaker && (
        <SpeakerModal
          speaker={activeModalSpeaker}
          onClose={() => setActiveModalSpeaker(null)}
        />
      )}
    </div>
  );
}

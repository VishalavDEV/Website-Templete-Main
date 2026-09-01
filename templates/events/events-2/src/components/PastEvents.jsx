import React, { useState } from 'react';
import { pastEvents } from '../data/events';
import { EventRecapModal } from './EventRecapModal';
import { Calendar, MapPin, Users, Play, Image as ImageIcon } from 'lucide-react';
import '../styles/cards.css';

export const PastEvents = ({ onOpenGallery }) => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeRecap, setActiveRecap] = useState(null);

  const years = ['All', '2025', '2024', '2023', '2022'];
  const categories = ['All', 'AI', 'Technology', 'Startup', 'Business'];

  const filteredEvents = pastEvents.filter((evt) => {
    const matchYear = selectedYear === 'All' || evt.year === selectedYear;
    const matchCategory = selectedCategory === 'All' || evt.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchYear && matchCategory;
  });

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">SUMMIT ARCHIVE</div>
          <h2 className="section-title">Previous Events & Highlights</h2>
          <p className="section-subtitle">
            Explore our rich legacy of global technology summits, keynotes, and past recap archives.
          </p>

          {/* Filters Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px', alignItems: 'center' }}>
            <div className="filter-pills">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '6px' }}>Year:</span>
              {years.map((y) => (
                <button
                  key={y}
                  className={`filter-pill ${selectedYear === y ? 'active' : ''}`}
                  onClick={() => setSelectedYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="filter-pills">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '6px' }}>Topic:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Past Events Grid */}
        <div className="archive-grid">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="glass-card archive-card">
              <div className="archive-card-image-wrapper">
                <img src={evt.image} alt={evt.title} className="archive-card-img" />
                <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                  <span className="badge badge-amber">{evt.year} EDITION</span>
                </div>
                <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                  <span className="badge badge-purple">{evt.category}</span>
                </div>
              </div>

              <div className="archive-card-content">
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{evt.title}</h3>

                <div style={{ display: 'flex', gap: '18px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="var(--accent-cyan)" /> {evt.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} color="var(--accent-purple)" /> {evt.location}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {evt.description}
                </p>

                {/* Event Quick Stats */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span><strong>{evt.attendees}</strong> Delegates</span>
                  <span>•</span>
                  <span><strong>{evt.speakers}</strong> Keynote Speakers</span>
                  <span>•</span>
                  <span><strong>{evt.sessions}</strong> Sessions</span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button className="btn btn-primary" style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem' }} onClick={() => setActiveRecap(evt)}>
                    <Play size={14} /> View Recap
                  </button>
                  <button className="btn btn-secondary" style={{ padding: '10px 16px', fontSize: '0.85rem' }} onClick={onOpenGallery}>
                    <ImageIcon size={14} /> View Gallery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Recap Modal */}
      {activeRecap && <EventRecapModal event={activeRecap} onClose={() => setActiveRecap(null)} />}
    </section>
  );
};

import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import { eventsData } from '../data/events';

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = eventsData.filter((evt) => {
    const matchesCat = selectedCategory === 'All' || evt.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">EVENT DIRECTORY</span>
          <h1 className="page-title">
            Discover Upcoming <span className="gradient-text">Events</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Find technology, AI, business, design, and startup summits happening globally.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search & Filter */}
          <EventFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Grid */}
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                No events found.
              </h3>
              <p style={{ fontSize: '0.95rem' }}>Try adjusting your search query or selected category filter.</p>
            </div>
          ) : (
            <div className="events-grid">
              {filteredEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

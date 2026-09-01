import React from 'react';

export default function SpeakerFilter({
  selectedCategory,
  onCategoryChange,
  categories = ['All', 'Technology', 'AI', 'Cloud', 'Business', 'Design', 'Startup', 'Leadership']
}) {
  return (
    <div className="event-category-pills" style={{ marginBottom: '2.5rem' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

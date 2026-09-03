import React from 'react';
import { Search } from 'lucide-react';

export default function EventFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories = ['All', 'Technology', 'AI', 'Business', 'Marketing', 'Design', 'Startup', 'Leadership']
}) {
  return (
    <div className="event-filter-bar">
      {/* Search Input */}
      <div className="event-search-wrap">
        <Search size={18} className="event-search-icon" />
        <input
          type="text"
          placeholder="Search events by name, category, or location..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="event-search-input"
        />
      </div>

      {/* Category Pills */}
      <div className="event-category-pills">
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
    </div>
  );
}

import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import Lightbox from './Lightbox';
import { Eye } from 'lucide-react';

export default function Gallery({ limit }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = [
    'ALL', 'COUPLE', 'PRE-WEDDING', 'ENGAGEMENT', 'FAMILY', 'HALDI', 'MEHENDI', 'SANGEET', 'WEDDING', 'RECEPTION'
  ];

  const filteredGallery = weddingData.gallery.filter(item => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  const displayList = limit ? filteredGallery.slice(0, limit) : filteredGallery;

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === 0 ? displayList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === displayList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* CATEGORY TABS */}
      {!limit && (
        <ul className="category-tabs">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <button
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* MASONRY GRID */}
      <div className="gallery-masonry-grid">
        {displayList.map((item, idx) => (
          <div 
            key={item.id} 
            className="gallery-card"
            onClick={() => setActiveImageIndex(idx)}
          >
            <img src={item.image} alt={item.title} className="gallery-card-image" loading="lazy" />
            <div className="gallery-view-icon">
              <Eye size={18} />
            </div>
            <div className="gallery-card-overlay">
              <h4 className="gallery-card-title">{item.title}</h4>
              <span className="gallery-card-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <Lightbox
          image={displayList[activeImageIndex]}
          onClose={() => setActiveImageIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'ambiance',
      spanClass: 'gallery-item-span-8',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      fullImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
      title: 'Main Hearth Dining Room',
      categoryLabel: 'Ambiance & Interior'
    },
    {
      id: 2,
      category: 'food',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      title: 'Wood-Fired Wild Prawns',
      categoryLabel: 'Culinary Creations'
    },
    {
      id: 3,
      category: 'kitchen',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85',
      title: 'The Glowing Hearth',
      categoryLabel: 'Kitchen & Fire'
    },
    {
      id: 4,
      category: 'food',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85',
      title: 'Oak-Smoked Duck Breast',
      categoryLabel: 'Culinary Creations'
    },
    {
      id: 5,
      category: 'drinks',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85',
      title: 'Biodynamic Reserve Cellar',
      categoryLabel: 'Cellar & Bar'
    },
    {
      id: 6,
      category: 'drinks',
      spanClass: 'gallery-item-span-6',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      fullImg: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=85',
      title: 'Flamed Rosemary Old Fashioned',
      categoryLabel: 'Cellar & Bar'
    },
    {
      id: 7,
      category: 'ambiance',
      spanClass: 'gallery-item-span-6',
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
      fullImg: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85',
      title: 'Terrace Garden Twilight',
      categoryLabel: 'Ambiance & Dining'
    },
    {
      id: 8,
      category: 'desserts',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=85',
      title: 'Smoked Olive Oil Torte',
      categoryLabel: 'Sweets & Pastry'
    },
    {
      id: 9,
      category: 'food',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=85',
      title: 'Charred Heirloom Burrata',
      categoryLabel: 'Culinary Creations'
    },
    {
      id: 10,
      category: 'kitchen',
      spanClass: 'gallery-item-span-4',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
      fullImg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
      title: 'Morning Mise En Place',
      categoryLabel: 'Kitchen & Fire'
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container-xl page-hero-content">
          <div className="eyebrow text-accent">THE VISUAL REPERTORY</div>
          <h1 className="page-hero-title">Atmosphere & Visual Artistry</h1>
          <p className="page-hero-subtitle">
            A photographic exploration of glowing hearths, heritage table settings, and seasonal plates.
          </p>
        </div>
      </section>

      {/* Gallery Section with Filters & Lightbox */}
      <section className="section-spacing bg-surface">
        <div className="container-xl">
          
          {/* Category Filter Pills */}
          <div className="menu-filter-nav">
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Photos</button>
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'ambiance' ? 'active' : ''}`} onClick={() => setActiveFilter('ambiance')}>Ambiance & Dining</button>
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'food' ? 'active' : ''}`} onClick={() => setActiveFilter('food')}>Culinary Creations</button>
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'kitchen' ? 'active' : ''}`} onClick={() => setActiveFilter('kitchen')}>Kitchen & Fire</button>
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'drinks' ? 'active' : ''}`} onClick={() => setActiveFilter('drinks')}>Cellar & Bar</button>
            <button type="button" className={`menu-filter-btn gallery-filter-btn ${activeFilter === 'desserts' ? 'active' : ''}`} onClick={() => setActiveFilter('desserts')}>Sweets & Pastry</button>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="gallery-grid">
            {galleryItems.map((item) => {
              const isVisible = activeFilter === 'all' || item.category === activeFilter;
              return (
                <div 
                  key={item.id} 
                  className={`gallery-item ${item.spanClass}`} 
                  data-category={item.category} 
                  data-full-img={item.fullImg}
                  style={{ display: isVisible ? 'block' : 'none' }}
                >
                  <img src={item.img} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <h4 className="gallery-item-title">{item.title}</h4>
                    <span className="gallery-item-category">{item.categoryLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Modal Component */}
      <GalleryLightbox />
    </>
  );
};

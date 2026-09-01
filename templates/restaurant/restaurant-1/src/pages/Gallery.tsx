import React, { useState } from 'react';
import LightboxModal, { LightboxImageItem } from '../components/LightboxModal';

const GALLERY_ITEMS: (LightboxImageItem & { colClass: string; category: string; title: string })[] = [
  {
    colClass: 'g-col-6',
    category: 'Culinary',
    title: 'Hearth-Smoked Wagyu Tenderloin',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    caption: 'Hearth-Smoked Wagyu Tenderloin with Charred Leek Emulsion',
  },
  {
    colClass: 'g-col-6',
    category: 'Interior',
    title: 'Main Dining Room & Hearth',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    caption: 'Main Dining Room with Exposed Brick & Hearth Warmth',
  },
  {
    colClass: 'g-col-4',
    category: 'Ambiance',
    title: 'Private Mezzanine Dining',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop',
    caption: 'Private Mezzanine Dining Salon',
  },
  {
    colClass: 'g-col-4',
    category: 'Kitchen Craft',
    title: 'Live Ember Plating',
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop',
    caption: 'Executive Chef Arjun Rao Live Plating',
  },
  {
    colClass: 'g-col-4',
    category: 'Pastry',
    title: 'Burnt Honey Semifreddo',
    src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1400&auto=format&fit=crop',
    caption: 'Burnt Honey Semifreddo with Smoked Fig Puree',
  },
  {
    colClass: 'g-col-4',
    category: 'Beverage',
    title: 'Cellar Reserve Wines',
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1400&auto=format&fit=crop',
    caption: 'Cellar Reserve Vintage Wines & Artisanal Cocktails',
  },
  {
    colClass: 'g-col-4',
    category: 'Seafood',
    title: 'Wild Herb Crusted Sea Bass',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
    caption: 'Wild Herb Crusted Black Sea Bass on Citrus Fennel',
  },
  {
    colClass: 'g-col-4',
    category: 'Artisanal',
    title: 'Charred Heirloom Burrata',
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop',
    caption: 'Charred Burrata with Warm Figs & Aged Balsamic',
  },
];

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Banner */}
      <section className="py-5 bg-primary-dark text-center" style={{ paddingTop: '8rem' }}>
        <div className="container py-5">
          <span className="eyebrow eyebrow-light">VISUAL ARCHIVE</span>
          <h1 className="display-3 font-heading text-cream mb-3">Atmosphere & Hearth Moments</h1>
          <p className="section-subtitle text-muted-light mx-auto" style={{ maxWidth: '650px' }}>
            A sensory collection capturing our live embers, table settings, and seasonal plates. Click any image to view in high resolution.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-py bg-cream">
        <div className="container">
          <div className="gallery-grid" id="fullGalleryGrid">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`gallery-item ${item.colClass}`}
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.src} alt={item.title} />
                <div className="gallery-item-overlay">
                  <span className="text-accent text-uppercase small fw-bold">{item.category}</span>
                  <h4 className="h6 text-cream font-heading mb-0 gallery-caption-text">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0))}
      />
    </>
  );
};

export default Gallery;

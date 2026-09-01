import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const photos = [
    {
      id: 1,
      title: 'Poster Dunk Action',
      category: 'MATCHES',
      url: '/images/gallery-dunk-real.jpg',
    },
    {
      id: 2,
      title: 'Group Standings & Points Table',
      category: 'STANDINGS',
      url: '/images/gallery-standings.svg',
    },
    {
      id: 3,
      title: 'Championship Trophy',
      category: 'CELEBRATIONS',
      url: '/images/gallery-trophy-real.jpg',
    },
    {
      id: 4,
      title: 'Vortex Arena Crowd',
      category: 'FANS',
      url: '/images/arena-bg.jpg',
    },
    {
      id: 5,
      title: 'Marcus Vance 3-Pointer',
      category: 'PLAYERS',
      url: '/images/marcus-3pointer-real.jpg',
    },
    {
      id: 6,
      title: 'Team Huddle & Strategy',
      category: 'TEAMS',
      url: '/images/gallery-huddle-real.jpg',
    },
  ];

  const categories = ['ALL', 'MATCHES', 'STANDINGS', 'CELEBRATIONS', 'PLAYERS', 'TEAMS', 'FANS'];

  const filteredPhotos = activeFilter === 'ALL' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Category Filters */}
      <div className="tab-group-container" style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`btn-secondary ${activeFilter === cat ? 'active' : ''}`}
            style={{
              borderColor: activeFilter === cat ? '#ff4d00' : 'var(--border)',
              color: activeFilter === cat ? '#ff7518' : 'var(--white)',
              padding: '8px 16px',
              fontSize: '0.85rem',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedImg(photo)}
            className="sports-card"
            style={{ height: '260px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/gallery-standings.svg';
              }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(0deg, rgba(5,5,5,0.9) 0%, transparent 60%)', opacity: 1, display: 'flex', alignItems: 'flex-end', padding: '20px' }} className="gallery-hover-overlay">
              <div>
                <span className="badge-live" style={{ background: '#ff4d00', color: '#050505', marginBottom: '6px' }}>{photo.category}</span>
                <h4 className="font-display" style={{ fontSize: '1.4rem', color: '#ffffff' }}>{photo.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImg && (
        <div className="modal-backdrop" onClick={() => setSelectedImg(null)}>
          <div className="modal-content-box" style={{ maxWidth: '900px', padding: '0', background: 'transparent', border: 'none' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" style={{ top: '-40px', right: '0', color: '#fff' }} onClick={() => setSelectedImg(null)}>
              <X size={32} />
            </button>
            <img
              src={selectedImg.url}
              alt={selectedImg.title}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px', border: '2px solid var(--orange)' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/gallery-standings.svg';
              }}
            />
            <div style={{ textCenter: 'center', marginTop: '14px', fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#ff7518', textAlign: 'center' }}>
              {selectedImg.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

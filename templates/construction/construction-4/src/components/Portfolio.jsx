import React, { useState, useEffect } from 'react';
import { Layers, MapPin, Maximize2, X } from 'lucide-react';

const fallbackProjects = [
  {
    id: 'p1',
    title: 'Villa Luminaria',
    category: 'COASTAL RESIDENCE',
    location: 'Mallorca, Spain',
    area: '9,200 sq ft',
    image: './assets/images/knack-hero-villa.jpg',
    description: 'A modernist cliffside sanctuary merging monolithic board-formed concrete with floor-to-ceiling motorized glazing and cantilevered infinity pool.',
    year: 2025
  },
  {
    id: 'p2',
    title: 'The Sky Pavilion',
    category: 'URBAN PENTHOUSE',
    location: 'Tribeca, New York',
    area: '6,800 sq ft',
    image: './assets/images/commercial.jpg',
    description: 'Triplex penthouse crafted with structural steel columns, double-height bookmatched Calacatta marble hearth, and glass-encased rooftop solarium.',
    year: 2024
  },
  {
    id: 'p3',
    title: 'Sunken Stone House',
    category: 'BESPOKE INTERIOR',
    location: 'Aspen, Colorado',
    area: '7,500 sq ft',
    image: './assets/images/interior.jpg',
    description: 'Subterranean alpine retreat featuring hand-chiseled slate walls, integrated hydronic heating, and custom rift-sawn white oak millwork.',
    year: 2025
  },
  {
    id: 'p4',
    title: 'Aethelgard Estate',
    category: 'CUSTOM RESIDENCE',
    location: 'Bel Air, California',
    area: '11,400 sq ft',
    image: './assets/images/residential.jpg',
    description: 'Organic modern compound featuring geometric courtyards, automated climate-controlled wine gallery, and panoramic canyon vistas.',
    year: 2026
  }
];

export default function Portfolio({ onOpenConsultModal }) {
  const [projects, setProjects] = useState(fallbackProjects);
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('API network response error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch((err) => {
        // Keep fallback data if backend is still starting up
      });
  }, []);

  const categories = ['ALL', 'COASTAL RESIDENCE', 'URBAN PENTHOUSE', 'BESPOKE INTERIOR', 'CUSTOM RESIDENCE'];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter((p) => p.category.toUpperCase() === filter);

  return (
    <section className="knack-section" id="portfolio">
      <div className="container">
        <div className="section-heading-center">
          <span className="k-tag">FEATURED RESIDENCES</span>
          <h2 className="k-title">Masterfully Crafted Landmarks</h2>
          <p className="k-desc">
            Explore our curated portfolio of bespoke residences engineered to redefine luxury architectural living.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid-3">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => setSelectedProject(item)}
            >
              <div className="p-img-box">
                <img src={item.image} alt={item.title} />
                <div className="p-overlay">
                  <span className="p-cat">{item.category}</span>
                  <h3 className="p-name">{item.title}</h3>
                  <p className="p-loc">{item.location} • {item.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="knack-modal-backdrop active" onClick={() => setSelectedProject(null)}>
          <div className="knack-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={18} />
            </button>
            <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '260px', marginBottom: '20px' }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <span className="k-tag">{selectedProject.category} • {selectedProject.year}</span>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p style={{ color: 'var(--gold-honey)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>
              📍 {selectedProject.location} — {selectedProject.area}
            </p>
            <p className="modal-sub" style={{ lineHeight: '1.7', marginBottom: '24px' }}>
              {selectedProject.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-honey-gold full-w"
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultModal();
                }}
              >
                Inquire About Similar Architecture →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, X, Calendar, MapPin, Tag } from 'lucide-react';

export default function Products({ products = [] }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const defaultProducts = [
    {
      id: 1,
      title: 'Valence Architectural Pavilion',
      category: 'Architecture',
      description: 'Avant-garde curvilinear steel and glass structure designed for modern urban expositions.',
      details: 'Commissioned for the International Expo, this pavilion utilizes ultra-lightweight structural steel trusses and solar-responsive smart glass. The interior provides 4,500 square meters of pillar-free exhibition space with integrated climate regulation systems.',
      location: 'Valencia, Spain',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Nordic Minimalist Tower',
      category: 'Engineering',
      description: 'Sustainable smart-energy commercial headquarters with integrated photovoltaic facade.',
      details: 'A 42-story commercial monolith engineered with recycled Scandinavian timber-composite structural cores, reducing embodied carbon by 58% compared to traditional concrete towers.',
      location: 'Stockholm, Sweden',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Cybernetic Kinetic Canopy',
      category: 'Hi-Tech',
      description: 'Adaptive kinetic shading system reacting dynamically to solar trajectory.',
      details: 'Over 1,200 micro-actuated aluminum panels powered by IoT sensors that adjust angle in real-time to optimize natural daylighting while mitigating thermal heat gain.',
      location: 'Singapore',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Helix Spatial Complex',
      category: 'Architecture',
      description: 'Double-helical pedestrian observatory bridge spanning metropolitan waterways.',
      details: 'Features a continuous double-helix steel lattice providing panoramic views of the skyline, complete with dynamic LED architectural illumination and seismic dampers.',
      location: 'Tokyo, Japan',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Metropolis Grid Matrix',
      category: 'Hi-Tech',
      description: 'Algorithmic urban logistics interface and telemetry control visualization.',
      details: 'A real-time 3D digital twin dashboard monitoring energy distribution, traffic flow, and structural health telemetry across 12 smart city sectors.',
      location: 'Berlin, Germany',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Zenith Monolith HQ',
      category: 'Engineering',
      description: 'Brutalist-inspired aerodynamic skyscraper engineered for supreme seismic resilience.',
      details: 'A 320-meter aerodynamic skyscraper engineered with tuned mass dampers and a high-performance wind-permeable exoskeleton.',
      location: 'Chicago, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const items = products && products.length > 0 ? products : defaultProducts;
  const categories = ['ALL', 'Architecture', 'Engineering', 'Hi-Tech'];

  const filtered = filter === 'ALL' ? items : items.filter((i) => i.category === filter);

  return (
    <section id="products" style={{
      padding: '120px 0',
      backgroundColor: '#0c0e12'
    }}>
      <div className="container">
        {/* Header with Filter Pills */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '56px'
        }}>
          <span className="section-tag">Showcase & Portfolio</span>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Architectural & Digital Creations
              </h2>
              <p className="section-subtitle">
                Explore a curation of high-tech physical monoliths and cutting-edge software solutions.
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  id={`filter-${cat.toLowerCase()}`}
                  style={{
                    padding: '8px 20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    backgroundColor: filter === cat ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                    color: filter === cat ? '#0c0e12' : 'rgba(255, 255, 255, 0.7)',
                    border: `1px solid ${filter === cat ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)'}`,
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '32px'
        }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border-dark)',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                cursor: 'pointer'
              }}
              className="product-card"
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(1.1)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s'
                  }}
                  className="product-img"
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(12, 14, 18, 0.8)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-display)'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(item);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    transition: 'var(--transition-smooth)',
                    padding: 0
                  }}
                >
                  View Case Study <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#13171f',
              border: '1px solid var(--border-dark)',
              borderRadius: '12px',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
            className="fade-in"
          >
            {/* Modal Image */}
            <div style={{ position: 'relative', height: '300px' }}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(12, 14, 18, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-dark)'
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{
                  backgroundColor: 'rgba(23, 190, 210, 0.15)',
                  color: 'var(--accent)',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {selectedProduct.category}
                </span>

                {selectedProduct.location && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <MapPin size={15} color="var(--accent)" /> {selectedProduct.location}
                  </span>
                )}

                {selectedProduct.year && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Calendar size={15} color="var(--accent)" /> {selectedProduct.year}
                  </span>
                )}
              </div>

              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '16px',
                fontFamily: 'var(--font-display)'
              }}>
                {selectedProduct.title}
              </h2>

              <p style={{
                color: '#cbd5e1',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '28px'
              }}>
                {selectedProduct.details || selectedProduct.description}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="btn-accent"
                  style={{ fontSize: '0.85rem' }}
                >
                  Consult on this Architecture
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn-outline"
                  style={{ fontSize: '0.85rem' }}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .product-card:hover {
          transform: translateY(-8px);
          border-color: rgba(23, 190, 210, 0.4);
          box-shadow: 0 16px 32px rgba(0,0,0,0.5);
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
          filter: grayscale(20%) contrast(1.15);
        }
      `}</style>
    </section>
  );
}
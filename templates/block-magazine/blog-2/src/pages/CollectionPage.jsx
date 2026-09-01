import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ExternalLink, Calendar, Compass, Grid, Layers, Sparkles } from 'lucide-react';
import { getCollection } from '../services/mockApi';
import DomeGallery from '../components/gallery/DomeGallery';
import ParticleText from '../components/typography/ParticleText';

export function CollectionPage() {
  const [items, setItems] = useState([]);
  const [viewMode, setViewMode] = useState('sphere'); // 'sphere' | 'grid'
  const [loading, setLoading] = useState(true);
  const [activeModalItem, setActiveModalItem] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const cols = await getCollection();
        setItems(cols);
      } catch (err) {
        console.error('Failed to load collection', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="collection-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Header Intro */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-label">VISUAL & MATERIAL ARCHIVE</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            The Collection of Discovery
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.25rem',
              color: 'var(--text-ink-secondary)',
              lineHeight: 1.55
            }}
          >
            A curated visual vault of laboratory apparatus, hand-blown vacuum tubes, illuminated cipher manuscripts, astronomical sextants, and field specimens that physically bore witness to scientific turning points.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <strong>{items.length}</strong> Archival Artifacts Documented
          </span>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setViewMode('sphere')}
              className={viewMode === 'sphere' ? 'btn-editorial-primary' : 'btn-editorial-secondary'}
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.85rem' }}
            >
              <Layers size={14} />
              <span>3D Spherical Dome</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'btn-editorial-primary' : 'btn-editorial-secondary'}
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.85rem' }}
            >
              <Grid size={14} />
              <span>Archival Grid View</span>
            </button>
          </div>
        </div>

        {/* Primary View Area */}
        {viewMode === 'sphere' ? (
          <div style={{ marginBottom: '4rem' }}>
            <DomeGallery items={items} />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '240px', backgroundColor: '#201c18' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(15%)' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: 'rgba(32, 28, 24, 0.85)',
                      color: 'var(--accent-amber)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="category-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
                    {item.type}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-ink)', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {item.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-warm-brown)', fontStyle: 'italic', marginBottom: '0.85rem' }}>
                      {item.provenance}
                    </p>
                    <Link
                      to={`/story/${item.relatedStoryId === 'art-1' ? 'the-accident-that-changed-the-cold' : 'the-woman-who-mapped-the-ocean-rift'}`}
                      className="btn-editorial-secondary"
                      style={{ width: '100%', fontSize: '0.75rem', padding: '0.45rem' }}
                    >
                      <span>Read Connected Story</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CollectionPage;

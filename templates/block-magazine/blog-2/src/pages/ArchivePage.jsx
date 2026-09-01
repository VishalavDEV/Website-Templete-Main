import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Calendar, History, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { getArchive, getArticles } from '../services/mockApi';
import GridScan from '../components/lab/GridScan';
import ParticleText from '../components/typography/ParticleText';
import ArticleCard from '../components/common/ArticleCard';

export function ArchivePage() {
  const [archiveVolumes, setArchiveVolumes] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [archs, arts] = await Promise.all([getArchive(), getArticles()]);
        setArchiveVolumes(archs);
        setArticles(arts);
        if (archs.length > 0) setSelectedVolume(archs[0]);
      } catch (err) {
        console.error('Failed to load archive', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="archive-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Intro */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-label">CHRONOLOGICAL VAULT</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            The Five-Century Archive
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.25rem',
              color: 'var(--text-ink-secondary)',
              lineHeight: 1.55
            }}
          >
            From the secret metallurgical furnaces of 16th-century Prague to the quantum detectors and ice-core drills of the modern era, explore science indexed across five hundred years.
          </p>
        </div>

        {/* The Archive Lab Instrument Station (GridScan) */}
        <div style={{ marginBottom: '4.5rem' }}>
          <GridScan
            archiveItems={archiveVolumes}
            onSelectVolume={(vol) => setSelectedVolume(vol)}
          />
        </div>

        {/* 10 Archival Volumes Catalog */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">VOLUME CATALOGUE</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', marginBottom: '2rem' }}>
            Historical Volumes & Eras
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {archiveVolumes.map((vol) => (
              <div
                key={vol.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-terracotta)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {vol.years}
                    </span>
                    <span className="category-badge" style={{ fontSize: '0.65rem' }}>
                      {vol.highlightTopic}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
                    {vol.volume}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-ink-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {vol.description}
                  </p>

                  <div>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                      Key Figures:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {vol.keyFigures.map((fig) => (
                        <span
                          key={fig}
                          style={{
                            fontSize: '0.72rem',
                            backgroundColor: 'rgba(32, 28, 24, 0.04)',
                            color: 'var(--text-ink)',
                            padding: '2px 6px',
                            borderRadius: '2px'
                          }}
                        >
                          {fig}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <strong>{vol.storyCount}</strong> Documented Records
                  </span>
                  <Link to="/stories" style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <span>Browse Records</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchivePage;

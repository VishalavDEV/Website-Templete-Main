import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, MapPin, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { getPhotoEssayBySlug } from '../../services/mockApi';

export default function PhotoEssay() {
  const { slug } = useParams();
  const [essay, setEssay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPhotoEssayBySlug(slug).then(data => {
      setEssay(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="atlas-container">
          <div className="atlas-skeleton" style={{ height: '500px', borderRadius: '16px' }} />
        </div>
      </div>
    );
  }

  if (!essay) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="atlas-container">
          <h2 style={{ color: 'var(--text-primary)' }}>Photo Essay Not Found</h2>
          <Link to="/photography" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
            Return to Photography
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="atlas-container" style={{ paddingBottom: '6rem' }}>
        <Link
          to="/photography"
          className="atlas-btn atlas-btn-secondary"
          style={{ marginBottom: '3rem', padding: '0.5rem 1rem', fontSize: '0.75rem' }}
        >
          <ArrowLeft size={14} />
          <span>All Photo Essays</span>
        </Link>

        {/* Essay Header */}
        <header style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 4rem' }}>
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Camera size={14} />
            <span>Photo Essay · {essay.location}</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            {essay.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 400, marginBottom: '2rem' }}>
            {essay.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.82rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Photography by {essay.photographer}</span>
            <span>·</span>
            <span>{essay.date}</span>
          </div>
        </header>

        {/* Hero Plate */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '5rem', boxShadow: '0 20px 60px rgba(80,60,40,0.15)', border: '1px solid var(--border-subtle)' }}>
          <img src={essay.heroImage} alt={essay.title} style={{ width: '100%', display: 'block', maxHeight: '750px', objectFit: 'cover' }} />
        </div>

        {/* Shot Sequences with Technical Specs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', maxWidth: '1100px', margin: '0 auto 6rem' }}>
          {essay.shots?.map((shot, i) => (
            <figure key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: '0 16px 40px rgba(80,60,40,0.1)' }}>
                <img src={shot.url} alt={shot.caption} style={{ width: '100%', display: 'block' }} loading="lazy" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', padding: '0.5rem 0.5rem 0' }}>
                <figcaption style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-primary)', maxWidth: '700px' }}>
                  {shot.caption}
                </figcaption>
                {shot.focalLength && (
                  <div style={{ display: 'flex', gap: '12px', fontSize: '0.72rem', color: 'var(--accent-ochre)', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em', fontWeight: 600 }}>
                    <span>{shot.focalLength}</span>
                    <span>{shot.aperture}</span>
                    <span>{shot.shutter}</span>
                    <span>ISO {shot.iso}</span>
                  </div>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

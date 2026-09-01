import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { getFieldNoteBySlug } from '../../services/mockApi';

export default function FieldNote() {
  const { slug } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getFieldNoteBySlug(slug).then(data => {
      setNote(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="atlas-container-editorial">
          <div className="atlas-skeleton" style={{ height: '300px' }} />
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="atlas-container">
          <h2 style={{ color: 'var(--text-primary)' }}>Field Note Not Found</h2>
          <Link to="/" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="atlas-container-editorial" style={{ paddingBottom: '6rem' }}>
        <Link
          to="/"
          className="atlas-btn atlas-btn-secondary"
          style={{ marginBottom: '3rem', padding: '0.5rem 1rem', fontSize: '0.75rem' }}
        >
          <ArrowLeft size={14} />
          <span>Back to Front Page</span>
        </Link>

        <article>
          <header style={{ marginBottom: '3rem' }}>
            <div className="atlas-section-eyebrow">
              <FileText size={14} />
              <span>Field Note · {note.categoryLabel || note.category}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {note.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 400 }}>
              {note.dek}
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Reported by {note.author}</span>
              <span>·</span>
              <span>{note.date}</span>
              <span>·</span>
              <span>{note.readTime}</span>
            </div>
          </header>

          <div style={{ borderRadius: '14px', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--border-subtle)', boxShadow: '0 16px 40px rgba(80,60,40,0.12)' }}>
            <img src={note.image} alt={note.title} style={{ width: '100%', display: 'block' }} />
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '2rem 2.5rem', marginBottom: '3rem', boxShadow: '0 10px 30px -10px rgba(80,60,40,0.06)', backdropFilter: 'blur(8px)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Key Field Observations
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {note.points?.map((pt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-primary)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                  <CheckCircle2 size={18} color="#c4892c" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

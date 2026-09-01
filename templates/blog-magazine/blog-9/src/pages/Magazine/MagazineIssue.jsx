import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, ArrowRight, Layers, FileText } from 'lucide-react';
import StoryCard from '../../components/StoryCard/StoryCard';
import { getIssueBySlug } from '../../services/mockApi';

export default function MagazineIssue() {
  const { slug } = useParams();
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIssueBySlug(slug).then(data => {
      setIssue(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ paddingTop: '10rem', minHeight: '80vh', textAlign: 'center' }}>
        <div className="atlas-container">
          <div className="atlas-skeleton" style={{ height: '400px', maxWidth: '800px', margin: '0 auto' }} />
        </div>
      </div>
    );
  }

  if (!issue) {
    return (
      <div style={{ paddingTop: '10rem', minHeight: '80vh', textAlign: 'center' }}>
        <div className="atlas-container">
          <h2 style={{ color: 'var(--text-primary)' }}>Issue Not Located</h2>
          <Link to="/magazine" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
            Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="atlas-container" style={{ paddingBottom: '6rem' }}>
        <Link
          to="/magazine"
          className="atlas-btn atlas-btn-secondary"
          style={{ marginBottom: '3rem', padding: '0.5rem 1rem', fontSize: '0.75rem' }}
        >
          <ArrowLeft size={14} />
          <span>Back to All Issues</span>
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '4rem', alignItems: 'flex-start', marginBottom: '5rem' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: '0 20px 60px rgba(80,60,40,0.12)' }}>
            <img src={issue.coverImage} alt={issue.title} style={{ width: '100%', display: 'block' }} />
          </div>

          <div>
            <div className="atlas-section-eyebrow">
              <Layers size={14} />
              <span>{issue.month} {issue.year} · {issue.number}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
              {issue.title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 400 }}>
              {issue.subtitle}
            </p>

            <div style={{ padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', marginBottom: '2.5rem', boxShadow: '0 10px 30px -10px rgba(80,60,40,0.06)', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-ochre)', marginBottom: '0.75rem' }}>
                Editor's Letter
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                {issue.editorialNote}
              </p>
            </div>
          </div>
        </div>

        {/* Stories in Issue */}
        <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
          <FileText size={14} />
          <span>Stories Inside This Edition ({issue.stories.length})</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {issue.stories.map((story, i) => (
            story.heroImage ? (
              <StoryCard key={story.id || i} story={story} />
            ) : (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px -10px rgba(80,60,40,0.06)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-ochre)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {story.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {story.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>By {story.author}</p>
                </div>
                <Link to={`/story/${story.slug}`} className="atlas-btn atlas-btn-secondary" style={{ marginTop: '1.5rem', width: 'fit-content' }}>
                  <span>Read Story</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

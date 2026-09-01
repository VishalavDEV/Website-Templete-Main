import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Compass, ArrowRight, BookMarked } from 'lucide-react';
import StoryCard from '../../components/StoryCard/StoryCard';
import { getBookmarkedArticles } from '../../services/mockApi';
import { useAppStore } from '../../store/appStore';
import './Saved.css';

export default function Saved() {
  const { bookmarks } = useAppStore();
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBookmarkedArticles().then(data => {
      setSavedArticles(data);
      setLoading(false);
    });
  }, [bookmarks]);

  return (
    <div className="saved-page">
      <div className="atlas-container">
        <header className="saved-hero">
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Bookmark size={14} color="#c4892c" />
            <span>Field Reading List</span>
          </div>
          <h1 className="atlas-section-title">Saved Dispatches</h1>
          <p className="atlas-section-subtitle" style={{ margin: '0 auto' }}>
            Your curated offline research collection. Bookmarked articles persist across your session.
          </p>
        </header>

        {savedArticles.length === 0 && !loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0 8rem' }}>
            <BookMarked size={48} color="#798294" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Your Reading List is Empty
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto' }}>
              Click the bookmark icon on any article or cover story to save it here for later field review.
            </p>
            <Link to="/explore" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
              <Compass size={16} />
              <span>Explore Dispatches</span>
            </Link>
          </div>
        ) : (
          <div className="saved-grid">
            {savedArticles.map(article => (
              <StoryCard key={article.id} story={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

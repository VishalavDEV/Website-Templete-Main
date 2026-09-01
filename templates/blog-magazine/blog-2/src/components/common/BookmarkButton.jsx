import React, { useState, useEffect } from 'react';
import { Bookmark, Check } from 'lucide-react';
import { toggleSaveStory, isStorySaved } from '../../services/mockApi';

export function BookmarkButton({ storyId, className = '', showLabel = false, size = 18 }) {
  const [saved, setSaved] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setSaved(isStorySaved(storyId));

    const handleSavedChange = (e) => {
      if (e.detail?.ids) {
        setSaved(e.detail.ids.includes(storyId));
      }
    };
    window.addEventListener('elemental_saved_change', handleSavedChange);
    return () => window.removeEventListener('elemental_saved_change', handleSavedChange);
  }, [storyId]);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimating(true);
    const result = await toggleSaveStory(storyId);
    if (result.success) {
      setSaved(result.saved);
    }
    setTimeout(() => setAnimating(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className={`bookmark-btn ${className}`}
      aria-label={saved ? 'Remove from saved stories' : 'Save story for later'}
      title={saved ? 'Remove from saved stories' : 'Save story for later'}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '6px',
        borderRadius: '50%',
        color: saved ? 'var(--accent-terracotta)' : 'var(--text-muted)',
        transition: 'var(--transition-editorial)',
        transform: animating ? 'scale(1.25)' : 'scale(1)'
      }}
    >
      <Bookmark
        size={size}
        fill={saved ? 'var(--accent-terracotta)' : 'none'}
        stroke={saved ? 'var(--accent-terracotta)' : 'currentColor'}
      />
      {showLabel && (
        <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {saved ? 'Saved' : 'Save Story'}
        </span>
      )}
    </button>
  );
}

export default BookmarkButton;

import { useState, useEffect } from 'react';
import { X, Bookmark, User, Crown, Bell, ExternalLink, Trash2, Mail, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { getBookmarks, removeBookmark } from '../lib/bookmarks';

export default function ProfileDrawer({ isOpen, onClose, onOpenSubscribe }) {
  const [profile, setProfile] = useState(mockStore.getUserProfile());
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const userProfile = mockStore.getUserProfile();
      setProfile(userProfile);

      const bookmarkIds = getBookmarks();
      const allArticles = await mockStore.getArticles();
      const matched = allArticles.filter(a => bookmarkIds.includes(a.id));
      setBookmarkedArticles(matched);
      setLoading(false);
    }
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRemoveBookmark = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = removeBookmark(id);
    setBookmarkedArticles(prev => prev.filter(a => a.id !== id));
  };

  const handleToggleNotification = () => {
    const updated = mockStore.updateUserProfile({ notifications: !profile.notifications });
    setProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      backgroundColor: 'rgba(16, 14, 24, 0.8)',
      backdropFilter: 'blur(12px)',
      display: 'flex', justifyContent: 'flex-end',
      animation: 'fadeIn 0.25s var(--ease-out-expo)'
    }}>
      {/* Backdrop click */}
      <div style={{ position: 'absolute', inset: 0 }} onClick={onClose} />

      {/* Drawer content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: '480px', height: '100vh',
        backgroundColor: 'var(--surface-color-solid)',
        borderLeft: '1px solid var(--border-color)',
        boxShadow: '-10px 0 50px rgba(0,0,0,0.8)',
        display: 'flex', flexDirection: 'column',
        animation: 'fadeInUp 0.35s var(--ease-out-expo)',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--border-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <User size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600 }}>
              Reader Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Profile"
            style={{
              padding: '0.4rem', borderRadius: '50%', color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            className="hover-text-cyan"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Card */}
        <div style={{ padding: '1.75rem', borderBottom: '1px solid var(--border-color)', background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.03), rgba(139, 92, 246, 0.03))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <img
              src={profile.avatar}
              alt={profile.name}
              style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-cyan)' }}
            />
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>{profile.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={12} /> {profile.email}
              </p>
            </div>
          </div>

          {/* Membership Badge & Upgrade */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: 'var(--surface-color)', padding: '0.85rem 1rem', borderRadius: '10px',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Crown size={16} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>{profile.tier}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Member since {profile.memberSince}</div>
              </div>
            </div>
            <button
              onClick={() => { onClose(); if (onOpenSubscribe) onOpenSubscribe(); }}
              className="btn-outline"
              style={{ fontSize: '0.7rem', padding: '0.35rem 0.75rem' }}
            >
              Change Tier
            </button>
          </div>
        </div>

        {/* Preferences Toggle */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bell size={16} style={{ color: 'var(--text-muted)' }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>Editorial Briefing Alerts</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Instant notifications for frontier model breakdowns</div>
              </div>
            </div>
            <button
              onClick={handleToggleNotification}
              style={{
                width: '42px', height: '24px', borderRadius: '12px',
                backgroundColor: profile.notifications ? 'var(--accent-cyan)' : 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                position: 'relative', transition: 'all 0.25s ease', cursor: 'pointer'
              }}
            >
              <div style={{
                width: '18px', height: '18px', borderRadius: '50%',
                backgroundColor: profile.notifications ? 'var(--bg-color)' : 'var(--text-muted)',
                position: 'absolute', top: '2px',
                left: profile.notifications ? '20px' : '2px',
                transition: 'all 0.25s ease'
              }} />
            </button>
          </div>
          {savedSuccess && (
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', marginTop: '0.5rem' }}>✓ Preference saved</p>
          )}
        </div>

        {/* Bookmarked / Saved Stories Section */}
        <div style={{ padding: '1.5rem 1.75rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bookmark size={16} style={{ color: 'var(--accent-cyan)' }} />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600 }}>
                Saved Articles ({bookmarkedArticles.length})
              </h4>
            </div>
          </div>

          {loading ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Loading saved stories...</p>
          ) : bookmarkedArticles.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '3rem 1rem', borderRadius: '10px',
              backgroundColor: 'var(--surface-color)', border: '1px dashed var(--border-color)'
            }}>
              <Bookmark size={28} style={{ color: 'var(--text-muted)', margin: '0 auto 0.75rem', opacity: 0.4 }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>No saved stories yet</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Click the bookmark icon on any article to save it for offline reading.</p>
              <Link to="/latest" onClick={onClose} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.4rem 0.85rem' }}>
                Browse Latest Stories
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {bookmarkedArticles.map(article => (
                <div
                  key={article.id}
                  style={{
                    backgroundColor: 'var(--surface-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px', padding: '0.85rem 1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="card"
                >
                  <Link
                    to={`/article/${article.slug}`}
                    onClick={onClose}
                    style={{ flex: 1, textDecoration: 'none' }}
                  >
                    <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {article.category}
                    </span>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                      {article.title}
                    </h5>
                  </Link>
                  <button
                    onClick={(e) => handleRemoveBookmark(article.id, e)}
                    aria-label="Remove bookmark"
                    style={{ padding: '0.4rem', color: 'var(--text-muted)', borderRadius: '4px' }}
                    className="hover-text-cyan"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div style={{ padding: '1.25rem 1.75rem', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--surface-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Future Intelligence v2.4</span>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'underline' }}
            >
              Reset Local Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

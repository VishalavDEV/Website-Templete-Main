import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Image, ShieldAlert, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MagneticButton from './MagneticButton';

const ReviewsSection = ({ productId, onReviewAdded }) => {
  const { token, isAuthenticated } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (err) {
      setError('Could not load reviews');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);

    if (rating < 1 || rating > 5) {
      setFormError('Please select a rating between 1 and 5 stars');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment, imageUrl })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit review');
      }

      setFormSuccess(true);
      setComment('');
      setImageUrl('');
      setRating(5);
      fetchReviews();
      if (onReviewAdded) onReviewAdded();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* Review Metrics Summary Panel */}
      <div
        className="glass-panel"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '3rem',
          padding: '2.5rem',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-premium)',
          alignItems: 'center'
        }}
        className="metrics-grid-responsive"
      >
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderRight: '1px solid var(--border-glass)', paddingRight: '2rem' }} className="metrics-col-responsive">
          <span style={{ fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>
            {getAverageRating()}
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem' }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={18}
                fill={s <= Math.round(getAverageRating()) ? 'var(--accent-gold)' : 'transparent'}
                color="var(--accent-gold)"
              />
            ))}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Based on {reviews.length} customer records
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>CUSTOMER ARCHIVE FEEDBACK</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Verify design alignment, product materials weight, and wear ergonomics directly from client feedback logs.
          </p>
        </div>
      </div>

      {/* Main content grid: Left reviews list, Right add review */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }} className="review-content-responsive">
        
        {/* Reviews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.5rem' }}>
            CLIENT REVIEWS ({reviews.length})
          </h3>

          {loading ? (
            <p style={{ color: 'var(--text-secondary)' }}>Retrieving reviews...</p>
          ) : reviews.length === 0 ? (
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={16} />
              <span>No feedback records logged for this product. Be the first to verify.</span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>
                        {rev.user.username}
                      </span>
                      <div style={{ display: 'flex', gap: '0.1rem' }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            size={12}
                            fill={s <= rev.rating ? 'var(--accent-gold)' : 'transparent'}
                            color="var(--accent-gold)"
                          />
                        ))}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {new Date(rev.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {rev.comment}
                  </p>

                  {rev.imageUrl && (
                    <div style={{ width: '100px', height: '100px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-glass)', marginTop: '0.5rem' }}>
                      <img src={rev.imageUrl} alt="Review attachment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Review Form */}
        <div style={{ height: 'fit-content' }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-premium)' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.5rem' }}>
              LOG A VERIFICATION
            </h3>

            {isAuthenticated ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {formError && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(255, 77, 77, 0.05)', border: '1px solid rgba(255, 77, 77, 0.1)', color: '#ff4d4d', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    <ShieldAlert size={16} />
                    <span>{formError}</span>
                  </div>
                )}

                {formSuccess && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.2)', color: '#4caf50', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    <Check size={16} />
                    <span>Feedback submitted successfully.</span>
                  </div>
                )}

                {/* Rating selection stars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>RATING SCORE:</span>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        style={{ cursor: 'pointer' }}
                      >
                        <Star
                          size={24}
                          fill={s <= rating ? 'var(--accent-gold)' : 'transparent'}
                          color="var(--accent-gold)"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment Textarea */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>COMMENT LOG:</span>
                  <textarea
                    placeholder="Describe material feel, wear weight, sizing accuracy, etc..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    className="premium-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Image URL Mock */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>MOCK ATTACHMENT URL:</span>
                  <div style={{ position: 'relative' }}>
                    <Image size={15} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      placeholder="https://example.com/photo.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="premium-input"
                      style={{ paddingLeft: '3rem' }}
                    />
                  </div>
                </div>

                <MagneticButton type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  SUBMIT SPEC LOG
                </MagneticButton>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  You must log in to submit a verification check for this product.
                </p>
                <Link to="/auth?redirect=" className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem', display: 'inline-flex' }}>
                  SIGN IN
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .metrics-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .metrics-col-responsive {
            border-right: none !important;
            border-bottom: 1px solid var(--border-glass) !important;
            padding-right: 0 !important;
            padding-bottom: 2rem !important;
          }
          .review-content-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewsSection;

import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, Filter, Plus, Sparkles } from 'lucide-react';

export const CustomerReviews = ({ product, activeColorway }) => {
  const [filterRating, setFilterRating] = useState('all');
  const [helpfulCounts, setHelpfulCounts] = useState({ 1: 42, 2: 29, 3: 18 });
  const [hasVoted, setHasVoted] = useState({});
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewForm, setNewReviewForm] = useState({ author: '', headline: '', comment: '', rating: 5 });
  const [reviewList, setReviewList] = useState(product.reviews);

  const handleHelpful = (id) => {
    if (hasVoted[id]) return;
    setHelpfulCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
    setHasVoted(prev => ({ ...prev, [id]: true }));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewForm.author || !newReviewForm.headline) return;
    const newEntry = {
      id: Date.now(),
      author: newReviewForm.author,
      role: 'Verified Road Runner',
      rating: Number(newReviewForm.rating),
      date: 'Just now',
      verified: true,
      headline: newReviewForm.headline,
      comment: newReviewForm.comment,
      fitRating: 'True to Size (10/10)',
      cushionRating: '5/5 Ultra-Responsive'
    };
    setReviewList([newEntry, ...reviewList]);
    setShowReviewModal(false);
    setNewReviewForm({ author: '', headline: '', comment: '', rating: 5 });
  };

  const filteredReviews = filterRating === 'all' 
    ? reviewList 
    : reviewList.filter(r => r.rating === Number(filterRating));

  return (
    <section id="reviews" className="customer-reviews-section">
      <div className="reviews-container">
        
        {/* Section Header */}
        <div className="reviews-header-block">
          <div className="reviews-title-col">
            <span className="badge-tag">
              <Star size={14} fill="currentColor" /> RUNNER REVIEWS & FIELD REPORTS
            </span>
            <h2 className="reviews-main-title">VERIFIED ATHLETE PERFORMANCE</h2>
          </div>

          <button 
            className="btn-secondary"
            onClick={() => setShowReviewModal(true)}
          >
            <Plus size={16} />
            <span>Submit Race Report</span>
          </button>
        </div>

        {/* Rating Summary Scorecard Grid */}
        <div className="rating-scorecard-grid glass-panel">
          
          {/* Overall Score */}
          <div className="scorecard-big-col">
            <div className="score-number font-display">{product.rating}</div>
            <div className="stars-row">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="star-gold">{s}</span>
              ))}
            </div>
            <div className="total-reviews-label font-mono">Based on {product.reviewCount} verified race logs</div>
            <div className="recommendation-badge">99% of runners recommend this shoe</div>
          </div>

          {/* Distribution Bars */}
          <div className="scorecard-bars-col">
            <div className="dist-row">
              <span className="dist-label">5 Stars</span>
              <div className="dist-track"><div className="dist-fill" style={{ width: '92%' }}></div></div>
              <span className="dist-pct font-mono">92%</span>
            </div>
            <div className="dist-row">
              <span className="dist-label">4 Stars</span>
              <div className="dist-track"><div className="dist-fill" style={{ width: '7%' }}></div></div>
              <span className="dist-pct font-mono">7%</span>
            </div>
            <div className="dist-row">
              <span className="dist-label">3 Stars</span>
              <div className="dist-track"><div className="dist-fill" style={{ width: '1%' }}></div></div>
              <span className="dist-pct font-mono">1%</span>
            </div>
            <div className="dist-row">
              <span className="dist-label">2 Stars</span>
              <div className="dist-track"><div className="dist-fill" style={{ width: '0%' }}></div></div>
              <span className="dist-pct font-mono">0%</span>
            </div>
          </div>

          {/* Fit & Cushion Gauges */}
          <div className="scorecard-gauges-col">
            <div className="gauge-item">
              <span className="gauge-name">Sizing & Fit:</span>
              <div className="gauge-meter">
                <span className="gauge-reading">True to Size (96%)</span>
              </div>
            </div>
            <div className="gauge-item">
              <span className="gauge-name">Energy Return / Responsiveness:</span>
              <div className="gauge-meter">
                <span className="gauge-reading">Max Spring (98%)</span>
              </div>
            </div>
            <div className="gauge-item">
              <span className="gauge-name">Wet Grip / Traction:</span>
              <div className="gauge-meter">
                <span className="gauge-reading">Ultra-Tack (95%)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Reviews Cards List */}
        <div className="reviews-cards-list">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card glass-card">
              
              <div className="review-card-top">
                <div className="reviewer-profile">
                  <div className="reviewer-avatar font-mono">
                    {rev.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="reviewer-name-row">
                      <span className="reviewer-name">{rev.author}</span>
                      {rev.verified && (
                        <span className="verified-pill">
                          <CheckCircle size={12} /> Verified Runner
                        </span>
                      )}
                    </div>
                    <span className="reviewer-role">{rev.role}</span>
                  </div>
                </div>

                <div className="review-meta-right">
                  <div className="review-stars font-mono">
                    {'★'.repeat(Math.floor(rev.rating))}
                  </div>
                  <span className="review-date font-mono">{rev.date}</span>
                </div>
              </div>

              <h4 className="review-headline">"{rev.headline}"</h4>
              <p className="review-body">{rev.comment}</p>

              {rev.userPhoto && (
                <div className="review-attached-photo">
                  <img src={rev.userPhoto} alt={`Race test by ${rev.author}`} />
                  <span className="photo-tag font-mono">Athlete Race Capture</span>
                </div>
              )}

              <div className="review-card-footer">
                <div className="review-tags">
                  <span className="review-spec-tag">Fit: {rev.fitRating}</span>
                  <span className="review-spec-tag">Cushion: {rev.cushionRating}</span>
                </div>

                <button 
                  className={`helpful-btn ${hasVoted[rev.id] ? 'voted' : ''}`}
                  onClick={() => handleHelpful(rev.id)}
                >
                  <ThumbsUp size={13} />
                  <span>Helpful ({helpfulCounts[rev.id] || 0})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Submit Review Modal */}
      {showReviewModal && (
        <div className="modal-backdrop" onClick={() => setShowReviewModal(false)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">SUBMIT RACE REPORT & REVIEW</h3>
              <button className="modal-close-btn" onClick={() => setShowReviewModal(false)}>✕</button>
            </div>

            <form onSubmit={handleAddReview} className="review-form">
              <div className="form-group">
                <label className="form-label">Your Name / Athlete Handle</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Jordan Mitchell"
                  value={newReviewForm.author}
                  onChange={(e) => setNewReviewForm({...newReviewForm, author: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Review Headline</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Broke my 10k PR by 48 seconds"
                  value={newReviewForm.headline}
                  onChange={(e) => setNewReviewForm({...newReviewForm, headline: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Performance Details & Experience</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Share details on responsiveness, fit, distance tested, and road conditions..."
                  value={newReviewForm.comment}
                  onChange={(e) => setNewReviewForm({...newReviewForm, comment: e.target.value})}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Overall Rating (1 - 5 Stars)</label>
                <select 
                  value={newReviewForm.rating}
                  onChange={(e) => setNewReviewForm({...newReviewForm, rating: Number(e.target.value)})}
                  className="form-select"
                >
                  <option value={5}>5 Stars - Elite Propulsion</option>
                  <option value={4}>4 Stars - Great Performance</option>
                  <option value={3}>3 Stars - Average</option>
                </select>
              </div>

              <button type="submit" className="btn-primary full-width-btn">
                <span>Publish Review</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

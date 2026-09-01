import React from 'react';
import { Users, Star, TrendingUp } from 'lucide-react';

export default function SocialProof({ count = 12450, variant = 'minimalist' }) {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
  ];

  return (
    <div className={`social-proof-strip social-proof-${variant}`}>
      <div className="avatar-cluster">
        {avatars.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Registered Attendee Avatar ${idx + 1}`}
            className="cluster-avatar"
            width="40"
            height="40"
            loading="lazy"
          />
        ))}
        <div className="avatar-more-badge">
          <span>+{(count % 1000) || 480}</span>
        </div>
      </div>

      <div className="proof-text-container">
        <div className="proof-rating-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="star-icon" fill="currentColor" />
          ))}
          <span className="rating-score">4.98 / 5.0 (2,400+ past reviews)</span>
        </div>
        <div className="proof-subtext">
          <TrendingUp size={14} className="trend-icon" />
          <span>
            Join <strong>{count.toLocaleString()}</strong> researchers, founders & delegates registered
          </span>
        </div>
      </div>
    </div>
  );
}

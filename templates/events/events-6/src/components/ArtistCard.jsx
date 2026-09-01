import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export default function ArtistCard({ artist, onSelect }) {
  return (
    <div className="artist-card">
      <img
        src={artist.image}
        alt={artist.name}
        className="artist-card-bg"
        loading="lazy"
      />
      <div className="artist-card-overlay" />

      <div className="artist-card-content">
        <span className="artist-genre-tag">{artist.genre}</span>
        <h3 className="artist-name">{artist.name}</h3>

        <div className="artist-meta">
          <div className="artist-meta-item">
            <Clock size={14} />
            <span>{artist.time}</span>
          </div>
          <div className="artist-meta-item">
            <MapPin size={14} />
            <span>{artist.stage}</span>
          </div>
        </div>

        <p className="artist-bio">{artist.bio}</p>

        <button
          className="btn-secondary artist-btn"
          onClick={() => onSelect && onSelect(artist)}
        >
          VIEW ARTIST <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

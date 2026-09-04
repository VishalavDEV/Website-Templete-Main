import React, { useState } from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export default function ArtistCard({ artist, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgUrl = artist.imageUrl || artist.image;

  return (
    <div className="artist-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] aspect-[3/4] flex flex-col justify-end transition-all duration-300 hover:border-[#FFC928] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(245,185,0,0.3)]">
      {/* Skeleton Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
          <span className="text-xs text-neutral-500 font-mono tracking-wider">LOADING...</span>
        </div>
      )}

      {/* Artist Photo */}
      <img
        src={imgUrl}
        alt={artist.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className={`artist-card-bg absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dynamic Gradient Overlays */}
      <div className="artist-card-overlay absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 group-hover:via-black/75" />

      {/* Card Content */}
      <div className="artist-card-content relative z-10 p-5 sm:p-6 flex flex-col">
        <span className="artist-genre-tag self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F5B900]/20 text-[#FFC928] border border-[#F5B900]/40 backdrop-blur-sm mb-2">
          {artist.genre}
        </span>

        <h3 className="artist-name font-['Syne',sans-serif] text-xl sm:text-2xl font-extrabold uppercase text-white tracking-wide mb-2 line-clamp-1">
          {artist.name}
        </h3>

        <div className="artist-meta flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-300 mb-3">
          <div className="artist-meta-item flex items-center gap-1.5">
            <Clock size={14} className="text-[#FFC928]" />
            <span>{artist.time}</span>
          </div>
          <span className="text-neutral-600">•</span>
          <div className="artist-meta-item flex items-center gap-1.5">
            <MapPin size={14} className="text-[#FFC928]" />
            <span className="truncate max-w-[140px]">{artist.stage}</span>
          </div>
        </div>

        <p className="artist-bio text-xs sm:text-sm text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
          {artist.bio}
        </p>

        <button
          className="btn-secondary artist-btn w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#F5B900]/40 bg-black/60 backdrop-blur-sm hover:bg-[#F5B900] hover:text-black hover:border-[#FFC928] transition-all flex items-center justify-center gap-2"
          onClick={() => onSelect && onSelect(artist)}
        >
          VIEW ARTIST <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

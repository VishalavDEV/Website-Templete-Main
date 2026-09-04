import React, { useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import Modal from '../components/Modal';
import { Clock, MapPin, Ticket, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artistsList } from '../data/festivalData';

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const genres = ['ALL', 'Indie Pop', 'Electronic', 'Alternative Soul', 'Hip-Hop Fusion', 'Dream Pop', 'Alternative Rock', 'Electronic Live', 'Acoustic / Indie'];

  const filteredArtists = activeFilter === 'ALL'
    ? artistsList
    : artistsList.filter(a => a.genre === activeFilter);

  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      {/* Page Header */}
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            MIDNIGHT ECHO 2026 LINEUP
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            THE ARTISTS
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            8 World-Class Acts. 3 Stages. 1 Unforgettable Night of Live Music, Energy, and Golden Lights.
          </p>

          {/* Genre Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {genres.map((g) => (
              <button
                key={g}
                className={`filter-btn px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === g
                    ? 'bg-[#F5B900] text-black shadow-[0_0_15px_rgba(245,185,0,0.5)] border border-[#FFC928]'
                    : 'bg-black/60 text-neutral-400 border border-neutral-800 hover:border-[#F5B900]/50 hover:text-white'
                }`}
                onClick={() => setActiveFilter(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} onSelect={setSelectedArtist} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <Modal onClose={() => setSelectedArtist(null)}>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#FFC928] shadow-[0_0_20px_rgba(255,201,40,0.4)] mb-4">
              <img
                src={selectedArtist.imageUrl || selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5B900]/20 text-[#FFC928] border border-[#F5B900]/40 mb-2">
              {selectedArtist.genre}
            </span>

            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide mb-3">
              {selectedArtist.name}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#FFC928] mb-6">
              <span className="flex items-center gap-1.5">
                <Clock size={16} /> {selectedArtist.time}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} /> {selectedArtist.stage}
              </span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              {selectedArtist.bio}
            </p>

            {selectedArtist.socials && (
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-8">
                <span>Spotify: <strong className="text-white">{selectedArtist.socials.spotify}</strong></span>
                <span>•</span>
                <span>Instagram: <strong className="text-[#FFC928]">{selectedArtist.socials.instagram}</strong></span>
              </div>
            )}

            <Link
              to="/tickets"
              className="btn-primary w-full py-3.5 px-6 rounded-full font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFC928] via-[#F5B900] to-[#D99800] hover:shadow-[0_0_25px_rgba(255,201,40,0.6)] flex items-center justify-center gap-2"
              onClick={() => setSelectedArtist(null)}
            >
              <Ticket size={18} /> GET PASS FOR THIS PERFORMANCE
            </Link>
          </div>
        </Modal>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import Modal from '../components/Modal';
import { Clock, MapPin, Ticket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const artistsList = [
    { id: 1, name: 'LYRA VOSS', genre: 'Indie Pop', time: '10:00 PM', stage: 'Main Stage', bio: 'Haunting vocals and soaring indie pop anthems that electrify stadium crowds with high energy choruses and golden spotlight aesthetics.', image: '/images/hero_performer.jpg' },
    { id: 2, name: 'KAEL NOVA', genre: 'Electronic', time: '12:00 AM', stage: 'Afterdark Stage', bio: 'Hypnotic synthesizer rhythms and heavy bass dropping live soundscapes that keep the crowd dancing until 2 AM.', image: '/images/dj_performer.jpg' },
    { id: 3, name: 'MIRA VALE', genre: 'Alternative Soul', time: '8:00 PM', stage: 'Main Stage', bio: 'Raw emotional depth blending soulful brass sections with ambient live beats and passionate vocal delivery.', image: '/images/hero_performer.jpg' },
    { id: 4, name: 'ZEN RAY', genre: 'Hip-Hop Fusion', time: '9:00 PM', stage: 'Main Stage', bio: 'High-octane rhyming over live drum breaks, electric basslines, and brass hooks.', image: '/images/hero_performer.jpg' },
    { id: 5, name: 'ARIA NOIR', genre: 'Dream Pop', time: '7:00 PM', stage: 'Echo Stage', bio: 'Ethereal soundscapes, lush reverbs, and angelic vocals that transport listeners into a dreamlike trance.', image: '/images/hero_performer.jpg' },
    { id: 6, name: 'THE SILVER ROOM', genre: 'Alternative Rock', time: '11:00 PM', stage: 'Main Stage', bio: 'Explosive guitar riffs, heavy drumming, and roaring anthemic energy that commands the arena.', image: '/images/hero_performer.jpg' },
    { id: 7, name: 'NOVA KAI', genre: 'Electronic Live', time: '1:00 AM', stage: 'Afterdark Stage', bio: 'Modular synth wizardry combined with live drum pad performances and interactive light beams.', image: '/images/dj_performer.jpg' },
    { id: 8, name: 'ELIO VANE', genre: 'Acoustic / Indie', time: '6:00 PM', stage: 'Echo Stage', bio: 'Intimate acoustic guitar melodies and heartfelt storytelling at golden hour.', image: '/images/hero_performer.jpg' },
  ];

  const genres = ['ALL', 'Indie Pop', 'Electronic', 'Alternative Soul', 'Hip-Hop Fusion', 'Dream Pop', 'Alternative Rock', 'Acoustic / Indie'];

  const filteredArtists = activeFilter === 'ALL'
    ? artistsList
    : artistsList.filter(a => a.genre === activeFilter);

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1E1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">MIDNIGHT ECHO 2026 LINEUP</span>
          <h1 className="section-title">THE ARTISTS</h1>
          <p className="section-desc">8 World-Class Acts. 3 Stages. 1 Unforgettable Night of Live Music.</p>

          {/* Filter Bar */}
          <div className="gallery-filter-bar" style={{ marginTop: '40px' }}>
            {genres.map(g => (
              <button
                key={g}
                className={`filter-btn ${activeFilter === g ? 'active' : ''}`}
                onClick={() => setActiveFilter(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} onSelect={setSelectedArtist} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <Modal onClose={() => setSelectedArtist(null)}>
          <span className="artist-genre-tag" style={{ marginBottom: '12px' }}>{selectedArtist.genre}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2.2rem', uppercase: 'true', marginBottom: '8px' }}>
            {selectedArtist.name}
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--gold-bright)', fontSize: '0.9rem', marginBottom: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {selectedArtist.time}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {selectedArtist.stage}</span>
          </div>

          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
            {selectedArtist.bio}
          </p>

          <Link to="/tickets" className="btn-primary" style={{ width: '100%' }}>
            <Ticket size={18} /> GET PASS FOR THIS PERFORMANCE
          </Link>
        </Modal>
      )}
    </div>
  );
}

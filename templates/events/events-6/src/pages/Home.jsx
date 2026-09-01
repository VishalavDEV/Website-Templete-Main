import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import ArtistCard from '../components/ArtistCard';
import EventCard from '../components/EventCard';
import TicketCard from '../components/TicketCard';
import ScheduleCard from '../components/ScheduleCard';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';
import Modal from '../components/Modal';
import { Sparkles, ArrowRight, Music, Users, Clock, Layers, Star, Ticket, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [selectedPass, setSelectedPass] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const featuredArtists = [
    { id: 1, name: 'LYRA VOSS', genre: 'Indie Pop', time: '10:00 PM', stage: 'Main Stage', bio: 'Haunting vocals and soaring indie pop anthems that electrify stadium crowds.', image: '/images/hero_performer.jpg' },
    { id: 2, name: 'KAEL NOVA', genre: 'Electronic', time: '12:00 AM', stage: 'Afterdark Stage', bio: 'Hypnotic synthesizer rhythms and heavy bass dropping live soundscapes.', image: '/images/dj_performer.jpg' },
    { id: 3, name: 'MIRA VALE', genre: 'Alternative Soul', time: '8:00 PM', stage: 'Main Stage', bio: 'Raw emotional depth blending soulful brass sections with ambient live beats.', image: '/images/hero_performer.jpg' },
  ];

  const eventsPreview = [
    { id: 1, title: 'MIDNIGHT ECHO', genre: 'MAIN CONCERT FESTIVAL', date: '24 Oct 2026', time: '6:00 PM - 2:00 AM', venue: 'Aurora Main Stage', description: 'The centerpiece live festival experience featuring pop, indie, and rock headliners.', price: 1499, image: '/images/hero_performer.jpg' },
    { id: 2, title: 'GOLDEN FREQUENCY', genre: 'ELECTRONIC & SYNTH', date: '24 Oct 2026', time: '11:00 PM - 2:00 AM', venue: 'Afterdark Stage', description: 'Immersive dark techno and synth-wave session with golden laser displays.', price: 1499, image: '/images/dj_performer.jpg' },
  ];

  const schedulePreview = [
    { time: '6:00 PM', title: 'Acoustic Sunset Warm-Up', artist: 'Elio Vane', stage: 'Echo Stage' },
    { time: '8:00 PM', title: 'Soulful Frequency Live', artist: 'Mira Vale', stage: 'Main Stage' },
    { time: '10:00 PM', title: 'Headline Pop Symphony', artist: 'Lyra Voss', stage: 'Main Stage' },
    { time: '12:00 AM', title: 'Midnight Electronic Echo', artist: 'Kael Nova', stage: 'Afterdark Stage' },
  ];

  const ticketPasses = [
    {
      id: 'general',
      name: 'GENERAL',
      price: 1499,
      features: ['Concert Entry', 'Main Stage Access', 'Echo Stage Access', 'Food Zone Access'],
      isPopular: false,
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 2999,
      features: ['Everything in General', 'Priority Fast-Track Entry', 'Premium Viewing Zone', 'Exclusive Festival Merch', 'Premium Lounge Access'],
      isPopular: false,
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 5999,
      features: ['VIP Fast-Track Entry', 'Front-Stage Access Zone', 'VIP Lounge Access', 'Artist Meet & Greet', 'Exclusive VIP Merch', 'Complimentary Refreshments'],
      isPopular: true,
      badge: 'MOST EXCLUSIVE',
    },
  ];

  const testimonials = [
    { quote: "Midnight Echo felt less like a concert and more like stepping into another world. The gold lights and acoustic depth blew me away!", author: "ARJUN K.", city: "Chennai" },
    { quote: "The energy when Lyra Voss took the main stage was unmatched. Easily the best live festival experience in India.", author: "PRIYA M.", city: "Bengaluru" },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div style={{ position: 'relative', zIndex: 5 }}>
      {/* 1. Hero */}
      <div id="hero">
        <Hero />
      </div>

      {/* 2. Countdown */}
      <Countdown />

      {/* 3. About Preview */}
      <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="about-hero-grid">
            <div className="fade-in-up">
              <span className="section-subtitle">MORE THAN MUSIC</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                ONE STAGE. ONE CROWD.<br />
                <span className="text-gold">ONE UNFORGETTABLE NIGHT.</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '24px' }}>
                “Velora Live creates immersive music experiences where artists and audiences connect through sound, light and unforgettable moments.”
              </p>
              <Link to="/about" className="btn-secondary">
                OUR STORY & VISION <ArrowRight size={18} />
              </Link>
            </div>

            <div className="why-live-container fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1.6rem', marginBottom: '20px' }}>
                WHY LIVE MUSIC?
              </h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '1rem', fontStyle: 'italic', marginBottom: '24px' }}>
                “Recorded music can be heard anywhere. Live music is experienced together.”
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="why-live-item">
                  <div className="why-live-icon">⚡</div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 700 }}>Crowd Energy & Vibrations</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Feel bass frequencies pulse through your chest alongside 15,000 music lovers.</p>
                  </div>
                </div>

                <div className="why-live-item">
                  <div className="why-live-icon">✨</div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 700 }}>Cinematic Stage Atmosphere</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Warm golden spotlights, state-of-the-art lasers, and immersive soundscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Event Statistics */}
      <section className="stats-banner" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">30+</div>
              <div className="stat-label">LIVE ARTISTS</div>
            </div>
            <div>
              <div className="stat-number">15K+</div>
              <div className="stat-label">ATTENDEES</div>
            </div>
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">HOURS OF MUSIC</div>
            </div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">STAGES</div>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">LIVE MOMENTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Artists */}
      <section id="artists" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE HEADLINERS</span>
            <h2 className="section-title">FEATURED ARTISTS</h2>
            <p className="section-desc">Experience electrifying performances from world-class indie, electronic, pop, and rock talents.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} onSelect={setSelectedArtist} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/artists" className="btn-primary">
              EXPLORE FULL LINEUP <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5b. Concert Events Preview */}
      <section id="events" className="section-padding" style={{ background: '#090909', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">CURATED MUSIC EXPERIENCES</span>
            <h2 className="section-title">CONCERT EVENTS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {eventsPreview.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/events" className="btn-secondary">
              EXPLORE ALL 5 EVENTS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Schedule Preview */}
      <section id="schedule" className="section-padding" style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TIMELINE OF SOUND</span>
            <h2 className="section-title">FESTIVAL SCHEDULE PREVIEW</h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
            {schedulePreview.map((item, idx) => (
              <ScheduleCard key={idx} item={item} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/schedule" className="btn-secondary">
              VIEW FULL SCHEDULE <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Three Stages */}
      <section id="stages" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">LOCATIONS OF SOUND</span>
            <h2 className="section-title">THREE ICONIC STAGES</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="story-card">
              <div className="story-card-icon"><Music /></div>
              <h3>MAIN STAGE</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                Capacity: 10,000+ Fans. Designed for monumental live pop and soul headliners with massive LED visual towers and golden laser displays.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Users /></div>
              <h3>ECHO STAGE</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                Capacity: 3,500 Fans. Intimate venue for independent singer-songwriters, acoustic showcases, and indie rock revelations.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Layers /></div>
              <h3>AFTERDARK STAGE</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                Capacity: 2,500 Fans. Dedicated electronic sanctuary featuring synth producers, deep house DJs, and late-night visual light shows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Velora Experience Preview */}
      <section id="experience" className="section-padding" style={{ background: 'linear-gradient(180deg, #090909 0%, #050505 100%)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">BEYOND THE MUSIC</span>
            <h2 className="section-title">THE VELORA EXPERIENCE</h2>
          </div>

          <div className="why-live-grid">
            {['LIVE MUSIC', 'LIGHT SHOW', 'DJ ZONE', 'FOOD VILLAGE', 'ART INSTALLATIONS', 'MERCHANDISE', 'PHOTO ZONE', 'VIP LOUNGE'].map((exp, idx) => (
              <div key={idx} className="venue-zone-box">
                <h4>{exp}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem' }}>Curated immersive zone designed for ultimate concert enjoyment.</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/experience" className="btn-primary">
              EXPLORE ALL EXPERIENCES <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Ticket Pricing Cards */}
      <section id="tickets" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SECURE YOUR SPOT</span>
            <h2 className="section-title">TICKET PASSES</h2>
            <p className="section-desc">Select your pass for Midnight Echo 2026. Passes are limited.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
            {ticketPasses.map((pass) => (
              <TicketCard key={pass.id} pass={pass} onSelect={setSelectedPass} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Gallery */}
      <section id="gallery" className="section-padding" style={{ background: '#080808', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">VISUAL MOMENTS</span>
            <h2 className="section-title">FESTIVAL GALLERY</h2>
          </div>
          <Gallery />
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ATTENDEE REVIEWS</span>
            <h2 className="section-title">WHAT FANS SAY</h2>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              <Star fill="var(--gold-bright)" size={20} />
              <Star fill="var(--gold-bright)" size={20} />
              <Star fill="var(--gold-bright)" size={20} />
              <Star fill="var(--gold-bright)" size={20} />
              <Star fill="var(--gold-bright)" size={20} />
            </div>
            <p className="testimonial-quote">"{testimonials[0].quote}"</p>
            <h4 className="testimonial-author">{testimonials[0].author}</h4>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>{testimonials[0].city}</span>
          </div>
        </div>
      </section>

      {/* 12. Newsletter */}
      <Newsletter />

      {/* 13. Final CTA / Contact */}
      <section id="contact" style={{ padding: '120px 0', background: 'radial-gradient(circle at center, #1B1607 0%, #050505 80%)', textAlign: 'center', borderTop: '1px solid var(--gold-bright)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <span className="section-subtitle">THE NIGHT IS CALLING</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#FFF', marginBottom: '20px' }}>
            READY TO HEAR THE NIGHT?
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 40px' }}>
            “The stage is ready. The lights are waiting. The only thing missing is you.”
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <Link to="/tickets" className="btn-primary" style={{ padding: '18px 44px', fontSize: '1.05rem' }}>
              <Ticket size={20} /> GET YOUR TICKETS
            </Link>
            <Link to="/artists" className="btn-secondary" style={{ padding: '18px 44px', fontSize: '1.05rem' }}>
              EXPLORE THE ARTISTS <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ticket Booking Interactive Modal */}
      {selectedPass && !bookingConfirmed && (
        <Modal onClose={() => setSelectedPass(null)}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1.8rem', marginBottom: '8px' }}>
            BOOK {selectedPass.name} PASS
          </h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Midnight Echo 2026 — Aurora Arena, Chennai
          </p>

          <form onSubmit={handleBookingSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>FULL NAME</label>
              <input type="text" required placeholder="e.g. Ananya Sharma" style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>EMAIL ADDRESS</label>
              <input type="email" required placeholder="ananya@example.com" style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>QUANTITY</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>{num} Pass{num > 1 ? 'es' : ''}</option>
                ))}
              </select>
            </div>

            <div style={{ padding: '16px', background: '#080808', borderRadius: '8px', border: '1px solid #222', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '6px' }}>
                <span>Subtotal ({quantity}x ₹{selectedPass.price.toLocaleString('en-IN')})</span>
                <span>₹{(selectedPass.price * quantity).toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-bright)', fontWeight: 900, fontSize: '1.2rem', paddingTop: '8px', borderTop: '1px solid #333' }}>
                <span>TOTAL</span>
                <span>₹{(selectedPass.price * quantity).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>
              CONFIRM & CONTINUE
            </button>
          </form>
        </Modal>
      )}

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <Modal onClose={() => setSelectedArtist(null)}>
          <span className="artist-genre-tag" style={{ marginBottom: '12px' }}>{selectedArtist.genre}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '12px' }}>
            {selectedArtist.name}
          </h2>

          <div style={{ borderRadius: '12px', overflow: 'hidden', border: 'var(--border-gold)', maxHeight: '40vh', margin: '0 auto 16px' }}>
            <img src={selectedArtist.image} alt={selectedArtist.name} style={{ width: '100%', maxHeight: '40vh', objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--gold-bright)', fontSize: '0.9rem', marginBottom: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {selectedArtist.time}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {selectedArtist.stage}</span>
          </div>

          <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
            {selectedArtist.bio}
          </p>

          <Link to="/tickets" className="btn-primary" style={{ width: '100%' }}>
            <Ticket size={18} /> GET PASS FOR THIS PERFORMANCE
          </Link>
        </Modal>
      )}

      {/* Booking Success Modal */}
      {bookingConfirmed && (
        <Modal onClose={() => { setBookingConfirmed(false); setSelectedPass(null); }}>
          <div className="modal-icon-success">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem', marginBottom: '12px' }}>
            BOOKING CONFIRMED!
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '24px' }}>
            “Your place at Midnight Echo 2026 has been reserved.”
          </p>
          <div style={{ padding: '14px', background: 'rgba(245, 185, 0, 0.1)', border: '1px solid var(--gold-primary)', borderRadius: '8px', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--gold-bright)' }}>
            Pass details and e-tickets sent to your registered email address.
          </div>
          <button className="btn-primary" onClick={() => { setBookingConfirmed(false); setSelectedPass(null); }}>
            GREAT, TAKE ME TO FESTIVAL
          </button>
        </Modal>
      )}
    </div>
  );
}

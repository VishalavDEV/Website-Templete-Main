import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, Award, Shield, Phone, Mail, ChevronRight, Check, Sparkles, Utensils, Compass } from 'lucide-react';

export default function App() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [activeModalSection, setActiveModalSection] = useState(null);

  const suites = [
    {
      id: 1,
      title: 'Ocean Cliff Sanctuary Villa',
      size: '2,400 sq ft',
      view: 'Panaromic Pacific Ocean',
      price: '$1,450',
      period: '/ night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      features: ['Private Infinity Plunge Pool', 'Personal Butler Service', 'Freestanding Marble Soaking Tub', 'Outdoor Fire Pit Deck']
    },
    {
      id: 2,
      title: 'Redwood Forest Wellness Suite',
      size: '1,850 sq ft',
      view: 'Ancient Redwood Grove',
      price: '$980',
      period: '/ night',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      features: ['Outdoor Cedar Sauna', 'Thermal Mineral Spa Access', 'Fireplace Sitting Salon', 'Organic Botanical Bar']
    },
    {
      id: 3,
      title: 'Clifftop Horizon Pavilion',
      size: '3,100 sq ft',
      view: '360° Coastline & Mountain',
      price: '$2,200',
      period: '/ night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      features: ['Helipad VIP Arrival', 'Private Chef Experience', 'Dual Sunset Observatories', 'Wine Cellar Collection']
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a', backgroundColor: '#f8fafc' }}>
      {/* Header Navigation */}
      <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', fontWeight: 800, fontSize: '18px' }}>
              A
            </div>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em', color: '#0f172a' }}>AURA HAVEN</span>
              <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#b45309', fontWeight: 600 }}>Resorts & Sanctuary</span>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: 500 }}>
            <a href="#villas" onClick={(e) => scrollToSection(e, 'villas')} style={{ color: '#475569', textDecoration: 'none', cursor: 'pointer' }}>Private Villas</a>
            <a href="#wellness" onClick={(e) => scrollToSection(e, 'wellness')} style={{ color: '#475569', textDecoration: 'none', cursor: 'pointer' }}>Thermal Spa</a>
            <a href="#dining" onClick={(e) => scrollToSection(e, 'dining')} style={{ color: '#475569', textDecoration: 'none', cursor: 'pointer' }}>Michelin Dining</a>
            <a href="#location" onClick={(e) => scrollToSection(e, 'location')} style={{ color: '#475569', textDecoration: 'none', cursor: 'pointer' }}>Big Sur Location</a>
          </nav>

          <a href="#reserve" onClick={(e) => scrollToSection(e, 'reserve')} style={{ padding: '10px 22px', backgroundColor: '#0f172a', color: '#ffffff', textDecoration: 'none', borderRadius: '99px', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}>
            Reserve Sanctuary
          </a>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.45)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '40px 24px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '99px', backgroundColor: 'rgba(217, 119, 6, 0.25)', border: '1px solid rgba(217, 119, 6, 0.5)', color: '#fef3c7', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>
            Big Sur Coast • California
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 700, lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            A Sanctuary of Refined Coastal Elegance
          </h1>
          <p style={{ fontSize: '18px', color: '#e2e8f0', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 300 }}>
            Immerse yourself in cliffside tranquility where ancient redwoods meet the Pacific. Experience bespoke luxury, private infinity plunge pools, and world-class spa rituals.
          </p>

          {/* Quick Availability Reservation Card */}
          <div id="reserve" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', color: '#0f172a', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', textAlign: 'left' }}>
            <form onSubmit={handleBooking} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>CHECK-IN DATE</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px 12px' }}>
                  <Calendar size={18} color="#b45309" style={{ marginRight: '8px' }} />
                  <input type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#0f172a' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>CHECK-OUT DATE</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px 12px' }}>
                  <Calendar size={18} color="#b45309" style={{ marginRight: '8px' }} />
                  <input type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#0f172a' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>GUESTS & SUITE</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px 12px' }}>
                  <Users size={18} color="#b45309" style={{ marginRight: '8px' }} />
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#0f172a', background: 'transparent' }}>
                    <option value="1">1 Guest (Single Villa)</option>
                    <option value="2">2 Guests (Couple Suite)</option>
                    <option value="4">4 Guests (Ocean Pavilion)</option>
                  </select>
                </div>
              </div>

              <button type="submit" style={{ padding: '14px 24px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}>
                Check Availability <ChevronRight size={16} />
              </button>
            </form>

            {bookingSuccess && (
              <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', color: '#166534', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={18} /> Dates confirmed! Your concierge reservation request has been processed.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Luxury Villas & Suites Section */}
      <section id="villas" style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#b45309' }}>ACCOMMODATIONS</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 700, margin: '12px 0 16px', color: '#0f172a' }}>Private Sanctuary Suites</h2>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.6 }}>
            Designed with floor-to-ceiling glass, native teakwood, and organic stone to harmonize effortlessly with the coastal cliffs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {suites.map((suite) => (
            <div key={suite.id} style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img src={suite.image} alt={suite.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '6px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: 600 }}>
                  {suite.view}
                </span>
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{suite.title}</h3>
                  <span style={{ fontSize: '13px', color: '#94a3b8', display: 'block', marginBottom: '16px' }}>{suite.size} • Private Terrace</span>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {suite.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={14} color="#b45309" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <div>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a' }}>{suite.price}</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{suite.period}</span>
                  </div>
                  <button onClick={() => setSelectedSuite(suite)} style={{ padding: '10px 18px', backgroundColor: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    View Villa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thermal Spa Section */}
      <section id="wellness" style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#d97706' }}>HOLISTIC RECOVERY</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 700, margin: '16px 0 24px', lineHeight: 1.2 }}>Thermal Mineral Spa & Cedar Saunas</h2>
            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              Restore body and spirit in natural thermal spring baths overlooking ocean mist. Our holistic spa treatments blend wild marine botanicals with ancient hydrotherapy rituals.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={() => setActiveModalSection('spa')} style={{ padding: '12px 24px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                Book Thermal Ritual
              </button>
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px' }}>
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" alt="Thermal Spa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Michelin Dining Section */}
      <section id="dining" style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px' }}>
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80" alt="Michelin Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#b45309' }}>GASTRONOMY</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 700, margin: '16px 0 24px', color: '#0f172a' }}>Oceanfront Michelin-Star Dining</h2>
            <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              Celebrated Chef Laurent Vasseur presents a multi-course culinary journey sourcing local wild-foraged ingredients, line-caught Pacific seafood, and estate wines.
            </p>
            <button onClick={() => setActiveModalSection('dining')} style={{ padding: '12px 24px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
              View Tasting Menu
            </button>
          </div>
        </div>
      </section>

      {/* Big Sur Location Section */}
      <section id="location" style={{ backgroundColor: '#f1f5f9', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#b45309' }}>SANCTUARY SETTING</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, margin: '16px 0', color: '#0f172a' }}>Big Sur Coastline, California</h2>
          <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Nestled on 40 secluded acres high above Highway 1, offering private helipad access and panoramic views of McWay Falls and Pacific sunsets.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', backgroundColor: '#ffffff', borderRadius: '99px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: 600 }}>
            <MapPin size={18} color="#b45309" /> Highway 1, Mile Marker 42.5, Big Sur, CA 93920
          </div>
        </div>
      </section>

      {/* Spa / Dining Modal */}
      {activeModalSection && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', maxWidth: '500px', width: '100%', padding: '32px', position: 'relative' }}>
            <button onClick={() => setActiveModalSection(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }}>×</button>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
              {activeModalSection === 'spa' ? 'Thermal Spa Ritual Booking' : 'Michelin Dining Reservation'}
            </h3>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeModalSection === 'spa' ? 'Experience private outdoor cedar baths, herbal sauna sessions, and hot stone massage.' : '7-Course Pacific tasting menu curated by Chef Laurent with sommelier wine pairing.'}
            </p>
            <button onClick={() => { setActiveModalSection(null); alert('Concierge inquiry sent!'); }} style={{ width: '100%', padding: '12px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
              Send Concierge Inquiry
            </button>
          </div>
        </div>
      )}

      {/* Villa Details Modal */}
      {selectedSuite && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', maxWidth: '600px', width: '100%', padding: '32px', position: 'relative' }}>
            <button onClick={() => setSelectedSuite(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }}>×</button>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{selectedSuite.title}</h3>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              Featuring cliffside panoramic ocean views, private heated infinity plunge pool, dedicated 24-hour butler service, and natural thermal bath amenities.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#b45309' }}>{selectedSuite.price} <span style={{ fontSize: '14px', color: '#64748b' }}>/ night</span></span>
              <button onClick={() => { setSelectedSuite(null); setBookingSuccess(true); }} style={{ padding: '12px 24px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                Confirm Suite Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 24px 30px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div>
            <span style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Playfair Display', serif", color: '#ffffff', display: 'block', marginBottom: '8px' }}>AURA HAVEN</span>
            <span style={{ fontSize: '13px', color: '#cbd5e1', display: 'block', maxWidth: '300px' }}>Highway 1, Big Sur Coastline, California 93920</span>
          </div>

          <div style={{ display: 'flex', gap: '48px', fontSize: '14px' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '12px' }}>Inquiries</h4>
              <p style={{ margin: 0, fontSize: '13px' }}>concierge@aurahaven.com</p>
              <p style={{ margin: '4px 0 0', fontSize: '13px' }}>+1 (800) 555-AURA</p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '24px', borderTop: '1px solid #1e293b', textAlign: 'center', fontSize: '12px', color: '#64748b' }}>
          © {new Date().getFullYear()} Aura Haven Resorts & Sanctuary. All rights reserved. Built with React & Vite.
        </div>
      </footer>
    </div>
  );
}

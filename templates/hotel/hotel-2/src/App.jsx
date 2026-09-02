import React, { useState } from 'react';
import { Compass, Calendar, Coffee, Wifi, MapPin, Star, ShieldCheck, ChevronRight, Check, X, Users } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState('Grand Horizon Villa ($850/night)');
  const [inquirySent, setInquirySent] = useState(false);

  const amenities = [
    { icon: Coffee, title: 'Artisanal Breakfast', desc: 'Farm-to-table organic breakfast served daily in the olive grove.' },
    { icon: Wifi, title: 'Ultra High-Speed Fiber', desc: 'Dedicated 1Gbps symmetrical Wi-Fi across all private suites.' },
    { icon: Compass, title: 'Curated Expeditions', desc: 'Guided yacht charters, private wine tasting, and coastal hikes.' }
  ];

  const rooms = [
    { id: 1, name: 'Grand Horizon Villa', price: '$850', cat: 'villa', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80' },
    { id: 2, name: 'Cliffside Sunset Suite', price: '$620', cat: 'suite', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80' },
    { id: 3, name: 'Garden Wellness Bungalow', price: '$490', cat: 'bungalow', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80' }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setIsModalOpen(false);
    }, 3500);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1e293b', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#0f172a', color: '#cbd5e1', padding: '10px 24px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>📍 Coastal Highway, Mediterranean Bay</span>
        <span>📞 Reservations: +1 (888) 900-AURA</span>
      </div>

      {/* Main Nav */}
      <header style={{ padding: '20px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, margin: 0 }}>LUMINA BOUTIQUE HOTEL</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '10px 20px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
        >
          Book Your Stay
        </button>
      </header>

      {/* Hero */}
      <section style={{ position: 'relative', height: '65vh', backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', maxWidth: '750px', padding: '0 20px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>Bespoke Coastal Luxury & Quiet Elegance</h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>Experience refined architecture, private plunge pools, and curated spa rituals in an idyllic coastal sanctuary.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '14px 28px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}
          >
            Reserve Your Villa Now
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', textAlign: 'center', marginBottom: '32px' }}>Luxury Suites & Villas</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {rooms.map((r) => (
            <div key={r.id} style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <img src={r.img} alt={r.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>{r.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#d97706' }}>{r.price} <span style={{ fontSize: '12px', color: '#64748b' }}>/ night</span></span>
                  <button onClick={() => { setSelectedRoom(`${r.name} (${r.price}/night)`); setIsModalOpen(true); }} style={{ padding: '8px 16px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    Select Suite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section style={{ maxWidth: '1200px', margin: '60px auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {amenities.map((a, i) => (
            <div key={i} style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <a.icon size={36} color="#0f172a" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{a.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.5 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', maxWidth: '500px', width: '100%', padding: '32px', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
              Book Your Stay
            </h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
              Lumina Boutique Hotel & Coastal Sanctuary
            </p>

            {inquirySent ? (
              <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', color: '#166534', textAlign: 'center' }}>
                <Check size={32} style={{ margin: '0 auto 8px', display: 'block' }} />
                <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700 }}>Reservation Request Received!</h4>
                <p style={{ margin: 0, fontSize: '13px' }}>Our concierge team will send confirmation details shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>SELECTED SUITE</label>
                  <select 
                    value={selectedRoom} 
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                  >
                    <option value="Grand Horizon Villa ($850/night)">Grand Horizon Villa ($850/night)</option>
                    <option value="Cliffside Sunset Suite ($620/night)">Cliffside Sunset Suite ($620/night)</option>
                    <option value="Garden Wellness Bungalow ($490/night)">Garden Wellness Bungalow ($490/night)</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>CHECK-IN</label>
                    <input 
                      type="date" 
                      required 
                      value={checkIn} 
                      onChange={(e) => setCheckIn(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>CHECK-OUT</label>
                    <input 
                      type="date" 
                      required 
                      value={checkOut} 
                      onChange={(e) => setCheckOut(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} 
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>GUESTS</label>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  style={{ padding: '12px 20px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', marginTop: '8px' }}
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

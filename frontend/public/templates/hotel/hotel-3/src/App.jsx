import React, { useState } from 'react';
import { Calendar, Users, MapPin, Award, Phone, Check, X, Compass, Coffee, Wifi, Star } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [activeTab, setActiveTab] = useState('villas');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const villas = [
    { id: 1, name: 'Oceanfront Infinity Villa', price: ',250', desc: 'Overlooking Amalfi cliffs with private heated infinity pool.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80' },
    { id: 2, name: 'Clifftop Presidential Suite', price: ',800', desc: 'Panorama ocean view, private butler, and outdoor Jacuzzi.', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80' },
    { id: 3, name: 'Mediterranean Sunset Suite', price: '', desc: 'Floor-to-ceiling glass terrace and private wine cellar.', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80' }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => { setBookedSuccess(false); setIsModalOpen(false); }, 3000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '20px 40px', backgroundColor: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(12px)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', margin: 0, color: '#fef3c7' }}>VILLA SERENA LUXURY RESORT</h1>
          <span style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.2em' }}>AMALFI COAST • ITALY</span>
        </div>
        <nav style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
          <button onClick={() => { setActiveTab('villas'); document.getElementById('villas-sec')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}>Villas</button>
          <button onClick={() => { setActiveTab('spa'); document.getElementById('spa-sec')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}>Thermal Spa</button>
          <button onClick={() => { setActiveTab('dining'); document.getElementById('dining-sec')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}>Gourmet Dining</button>
        </nav>
        <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px 22px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '99px', fontWeight: 600, cursor: 'pointer' }}>
          Reserve Villa
        </button>
      </header>

      <div style={{ position: 'relative', height: '70vh', backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.45)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px', maxWidth: '800px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, marginBottom: '16px' }}>Cliffside Sanctuary on the Amalfi Coast</h2>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6, marginBottom: '32px' }}>Private infinity plunge pools, cliffside dining, and Michelin-star Mediterranean culinary experiences.</p>
          <button onClick={() => setIsModalOpen(true)} style={{ padding: '14px 32px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
            Book Your Stay
          </button>
        </div>
      </div>

      <section id="villas-sec" style={{ maxWidth: '1240px', margin: '80px auto', padding: '0 24px' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>Clifftop Accommodations</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {villas.map((v) => (
            <div key={v.id} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
              <img src={v.img} alt={v.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px' }}>{v.name}</h4>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.5, marginBottom: '20px' }}>{v.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '22px', fontWeight: 800, color: '#d97706' }}>{v.price} <span style={{ fontSize: '12px', color: '#64748b' }}>/ night</span></span>
                  <button onClick={() => { setSelectedSuite(v); setIsModalOpen(true); }} style={{ padding: '10px 20px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    Reserve Suite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spa section */}
      <section id="spa-sec" style={{ backgroundColor: '#0f172a', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '16px' }}>Thermal Spa & Hydrotherapy</h3>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto 32px' }}>Relax with organic Mediterranean essential oils, heated sea salt pools, and cliffside massages.</p>
          <button onClick={() => setIsModalOpen(true)} style={{ padding: '12px 28px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Schedule Spa Treatment</button>
        </div>
      </section>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', maxWidth: '480px', width: '100%', padding: '32px', position: 'relative' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Villa Serena Booking</h3>
            {bookedSuccess ? (
              <div style={{ padding: '16px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '8px', textAlign: 'center' }}>
                <Check size={28} style={{ margin: '0 auto 8px', display: 'block' }} /> Reservation Request Received!
              </div>
            ) : (
              <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>SUITE SELECTION</label>
                  <select defaultValue={selectedSuite?.name} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', marginTop: '4px' }}>
                    <option value="Oceanfront Infinity Villa">Oceanfront Infinity Villa (,250/night)</option>
                    <option value="Clifftop Presidential Suite">Clifftop Presidential Suite (,800/night)</option>
                    <option value="Mediterranean Sunset Suite">Mediterranean Sunset Suite (/night)</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input type="date" required style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                  <input type="date" required style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                </div>
                <button type="submit" style={{ padding: '12px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, ShieldCheck, Check, X } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ padding: '24px 40px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#f59e0b', margin: 0 }}>STARLIGHT COASTAL VILLA</h1>
        <button onClick={() => setIsOpen(true)} style={{ padding: '10px 24px', backgroundColor: '#f59e0b', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Book Villa</button>
      </header>

      <section style={{ padding: '100px 24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px' }}>Exclusive Clifftop Ocean Villas</h2>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '32px' }}>Experience 360-degree ocean views, private infinity pools, and personal chef services.</p>
        <button onClick={() => setIsOpen(true)} style={{ padding: '14px 32px', backgroundColor: '#f59e0b', color: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>Reserve Your Stay</button>
      </section>

      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#1e293b', padding: '32px', borderRadius: '16px', maxWidth: '440px', width: '100%', position: 'relative' }}>
            <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '20px', cursor: 'pointer' }}>×</button>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Starlight Villa Reservation</h3>
            {success ? (
              <p style={{ color: '#4ade80' }}>✓ Reservation request sent successfully!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); setTimeout(() => { setSuccess(false); setIsOpen(false); }, 3000); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Full Name" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} />
                <input type="email" placeholder="Email Address" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} />
                <button type="submit" style={{ padding: '12px', backgroundColor: '#f59e0b', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}>Submit Request</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, ShieldCheck, Check, X, Phone, Mail } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ padding: '20px 40px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(15,23,42,0.95)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#38bdf8', margin: 0 }}>EVERGREEN ALPINE CHALET</h1>
        <button onClick={() => setIsOpen(true)} style={{ padding: '10px 24px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Reserve Alpine Chalet</button>
      </header>

      <section style={{ padding: '100px 24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Experience Modern Digital Excellence</h2>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '36px' }}>Interactive, fully functional React frontend platform featuring real-time booking, inquiry forms, and responsive design.</p>
        <button onClick={() => setIsOpen(true)} style={{ padding: '14px 36px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>Get Started Now</button>
      </section>

      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#1e293b', padding: '32px', borderRadius: '16px', maxWidth: '440px', width: '100%', position: 'relative', border: '1px solid #334155' }}>
            <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '20px', cursor: 'pointer' }}>×</button>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>EVERGREEN ALPINE CHALET Inquiry</h3>
            {success ? (
              <div style={{ padding: '16px', backgroundColor: '#064e3b', color: '#6ee7b7', borderRadius: '8px', textAlign: 'center' }}>
                <Check size={28} style={{ margin: '0 auto 8px', display: 'block' }} /> Inquiry Submitted Successfully!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); setTimeout(() => { setSuccess(false); setIsOpen(false); }, 3000); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input type="text" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff', fontSize: '14px' }} />
                <input type="email" placeholder="Your Email" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff', fontSize: '14px' }} />
                <button type="submit" style={{ padding: '12px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', marginTop: '8px' }}>Submit Request</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
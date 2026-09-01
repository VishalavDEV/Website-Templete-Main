import React, { useState } from 'react';
import TicketCard from '../components/TicketCard';
import Modal from '../components/Modal';
import FAQ from '../components/FAQ';
import { Ticket, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function Tickets() {
  const [selectedPass, setSelectedPass] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [confirmed, setConfirmed] = useState(false);

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

  const handlePassSelect = (pass) => {
    setSelectedPass(pass);
    setQuantity(1);
    setConfirmed(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setConfirmed(true);
    }
  };

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #201A05 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">SECURE YOUR PASS</span>
          <h1 className="section-title">MIDNIGHT ECHO TICKETS</h1>
          <p className="section-desc">Experience 24 October 2026 live at Aurora Sound Arena, Chennai. Passes are strictly limited.</p>
        </div>
      </section>

      {/* Ticket Cards Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
            {ticketPasses.map((pass) => (
              <TicketCard key={pass.id} pass={pass} onSelect={handlePassSelect} />
            ))}
          </div>

          <div style={{ marginTop: '50px', padding: '24px', background: '#0D0D0D', border: '1px solid #222', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck style={{ color: 'var(--gold-bright)' }} /> 100% Verified Official E-Tickets</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Sparkles style={{ color: 'var(--gold-bright)' }} /> Instant Digital Delivery</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Ticket style={{ color: 'var(--gold-bright)' }} /> Mobile Gate Scanner Entry</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: '#080808' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TICKET QUESTIONS</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Interactive Booking Modal */}
      {selectedPass && !confirmed && (
        <Modal onClose={() => setSelectedPass(null)}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1.8rem', marginBottom: '8px' }}>
            BOOK {selectedPass.name} PASS
          </h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Midnight Echo 2026 — Aurora Arena, Chennai
          </p>

          <form onSubmit={handleBookingSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>FULL NAME *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>EMAIL ADDRESS *</label>
              <input
                type="email"
                required
                placeholder="ananya@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px' }}>QUANTITY</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', padding: '12px', background: '#080808', border: '1px solid #333', color: '#FFF', borderRadius: '6px' }}
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
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
              CONTINUE TO RESERVATION
            </button>
          </form>
        </Modal>
      )}

      {/* Confirmation Modal */}
      {confirmed && (
        <Modal onClose={() => { setConfirmed(false); setSelectedPass(null); }}>
          <div className="modal-icon-success">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem', marginBottom: '12px' }}>
            BOOKING CONFIRMED
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '20px' }}>
            “Your place at Midnight Echo 2026 has been reserved.”
          </p>
          <div style={{ textAlign: 'left', background: '#080808', padding: '16px', borderRadius: '8px', border: '1px solid #333', fontSize: '0.88rem', color: 'var(--text-gray)', marginBottom: '24px' }}>
            <div><strong>Pass Holder:</strong> {formData.name}</div>
            <div><strong>Pass Type:</strong> {selectedPass?.name} ({quantity}x)</div>
            <div><strong>Total Paid:</strong> ₹{(selectedPass?.price * quantity).toLocaleString('en-IN')}</div>
            <div><strong>Venue:</strong> Aurora Sound Arena, Chennai</div>
          </div>
          <button className="btn-primary" onClick={() => { setConfirmed(false); setSelectedPass(null); }}>
            DONE
          </button>
        </Modal>
      )}
    </div>
  );
}

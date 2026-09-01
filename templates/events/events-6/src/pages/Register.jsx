import React, { useState } from 'react';
import Modal from '../components/Modal';
import { Ticket, CheckCircle2, UserCheck } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    genre: 'Indie Pop',
    ticketType: 'General (₹1,499)',
    quantity: '1',
    agreed: false,
  });

  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.agreed) {
      setRegistered(true);
    }
  };

  const handleClose = () => {
    setRegistered(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      city: '',
      genre: 'Indie Pop',
      ticketType: 'General (₹1,499)',
      quantity: '1',
      agreed: false,
    });
  };

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #201A05 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">EARLY BIRD FESTIVAL PASS</span>
          <h1 className="section-title">PRE-REGISTER FOR ECHO 2026</h1>
          <p className="section-desc">Reserve priority gate passes before public ticket release.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ background: 'var(--bg-card)', border: 'var(--border-gold-bright)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>PHONE NUMBER</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>AGE</label>
                  <input
                    type="number"
                    min="14"
                    max="99"
                    placeholder="22"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>CITY</label>
                  <input
                    type="text"
                    placeholder="Chennai / Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>FAVORITE GENRE</label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    style={{ width: '100%', padding: '12px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  >
                    <option value="Indie Pop">Indie Pop</option>
                    <option value="Electronic Synth">Electronic Synth</option>
                    <option value="Alternative Soul">Alternative Soul</option>
                    <option value="Alternative Rock">Alternative Rock</option>
                    <option value="Hip-Hop Fusion">Hip-Hop Fusion</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>TICKET TYPE</label>
                  <select
                    value={formData.ticketType}
                    onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                    style={{ width: '100%', padding: '12px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  >
                    <option value="General (₹1,499)">General (₹1,499)</option>
                    <option value="Premium (₹2,999)">Premium (₹2,999)</option>
                    <option value="VIP (₹5,999)">VIP Pass (₹5,999)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '6px', fontWeight: 700 }}>NUMBER OF TICKETS</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    style={{ width: '100%', padding: '12px', background: '#090909', border: '1px solid #333', borderRadius: '6px', color: '#FFF' }}
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <input
                  type="checkbox"
                  id="agreed"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  style={{ accentColor: 'var(--gold-bright)', width: '18px', height: '18px' }}
                />
                <label htmlFor="agreed" style={{ fontSize: '0.88rem', color: 'var(--text-gray)' }}>
                  I agree to the event terms and conditions for Midnight Echo 2026.
                </label>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>
                <UserCheck size={18} /> REGISTER NOW
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {registered && (
        <Modal onClose={handleClose}>
          <div className="modal-icon-success">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem', marginBottom: '12px' }}>
            REGISTRATION COMPLETE!
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '24px' }}>
            “Thank you for registering for Midnight Echo 2026.”
          </p>
          <div style={{ textAlign: 'left', background: '#090909', padding: '16px', borderRadius: '8px', border: '1px solid #333', fontSize: '0.88rem', color: 'var(--text-gray)', marginBottom: '24px' }}>
            <div><strong>Name:</strong> {formData.fullName}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Pass Type:</strong> {formData.ticketType}</div>
            <div><strong>Passes Requested:</strong> {formData.quantity}</div>
          </div>
          <button className="btn-primary" onClick={handleClose}>
            BACK TO HOMEPAGE
          </button>
        </Modal>
      )}
    </div>
  );
}

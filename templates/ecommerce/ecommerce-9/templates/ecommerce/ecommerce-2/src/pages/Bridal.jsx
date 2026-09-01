import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Heart, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Bridal() {
  const { products, showToast } = useContext(ShopContext);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', city: 'Mumbai Flagship' });
  const [isBooked, setIsBooked] = useState(false);

  const bridalProducts = products.filter((p) => p.category === 'Bridal' || p.collection === 'Bridal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and contact phone number.', 'error');
      return;
    }
    setIsBooked(true);
    showToast('Your private bridal consultation request has been received.');
  };

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#064E3B',
          color: '#FAF7F0'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=2000")',
            backgroundPosition: 'center 30%',
            backgroundSize: 'cover',
            opacity: 0.25
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: '600' }}>
            <Heart size={14} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} /> AURELIA BRIDAL ATELIER
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              color: '#FAF7F0'
            }}
          >
            FOR YOUR <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: '400' }}>FOREVER</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: '#D4DEC9',
              marginBottom: '2rem'
            }}
          >
            Fine emerald & gold jewellery designed for unforgettable beginnings.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="container-custom" style={{ paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
            HIGH BRIDAL CURATION
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', marginTop: '0.4rem', color: 'var(--emerald-deep)' }}>
            ENGAGEMENT RINGS & SETS
          </h2>
          <div className="gold-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
          {bridalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Appointment Form */}
      <section className="container-custom" style={{ paddingTop: '6rem' }}>
        <div
          style={{
            background: '#064E3B',
            color: '#FAF7F0',
            padding: '4rem 2.5rem',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div style={{ gridColumn: 'span 12' }} className="bridal-form-text">
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: '600' }}>
              PRIVATE CONCIERGE SERVICE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#FAF7F0', marginTop: '0.4rem', marginBottom: '1rem' }}>
              Book Your Private Bridal Appointment
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#D4DEC9', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Experience a private viewing suite with our master diamond specialist. Enjoy champagne, custom sizing, and bespoke design preview.
            </p>
          </div>

          <div style={{ gridColumn: 'span 12' }} className="bridal-form-box">
            {isBooked ? (
              <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--gold-primary)', padding: '2rem', textAlign: 'center' }}>
                <CheckCircle2 size={36} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#FAF7F0' }}>Appointment Request Received</h3>
                <p style={{ fontSize: '0.85rem', color: '#D4DEC9', marginTop: '0.5rem' }}>
                  Our senior bridal concierge will contact you within 4 hours to confirm your appointment date.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ padding: '0.9rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', color: 'var(--emerald-deep)', outline: 'none', fontWeight: '600' }}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ padding: '0.9rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', color: 'var(--emerald-deep)', outline: 'none', fontWeight: '600' }}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ padding: '0.9rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', color: 'var(--emerald-deep)', outline: 'none', fontWeight: '600' }}
                />
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{ padding: '0.9rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', color: 'var(--emerald-deep)', outline: 'none', fontWeight: '600' }}
                >
                  <option value="Mumbai Flagship">Mumbai Flagship Boutique</option>
                  <option value="New Delhi Atelier">New Delhi Private Suite</option>
                  <option value="Bengaluru Salon">Bengaluru Salon</option>
                  <option value="Virtual Consultation">Virtual Video Consultation</option>
                </select>

                <button type="submit" className="btn-gold-sweep" style={{ marginTop: '0.5rem' }}>
                  REQUEST VIP APPOINTMENT <ChevronRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .bridal-form-text { grid-column: span 6 !important; }
          .bridal-form-box { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { carBrands } from '../data/carBrandsData';
import BrandCarousel from '../components/BrandCarousel';
import { Link } from 'react-router-dom';
import { Car, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const Cars = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-blue" style={{ marginBottom: '16px' }}>
            <Car size={14} /> BRAND COMPATIBILITY & CARE
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            ENGINEERED CARE FOR EVERY MARQUE.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            We store factory color formulations and clearance specs for all luxury, sports, EV, and performance brands.
          </p>
        </div>
      </section>

      {/* Marquee Banner */}
      <BrandCarousel />

      {/* Brand Grid Section */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">LUXURY & PERFORMANCE MARQUES</span>
            <h2 className="section-title">FEATURED BRAND CARE PROTOCOLS</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {carBrands.map((b) => (
              <div key={b.id} className="glass-card" style={{ padding: '28px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.6rem',
                    fontWeight: '900',
                    color: '#f5f7f8'
                  }}>
                    {b.textLogo}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#7cff4f',
                    background: 'rgba(124, 255, 79, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '99px',
                    fontWeight: '700'
                  }}>
                    {b.country}
                  </span>
                </div>

                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  color: '#25bfff',
                  marginBottom: '12px'
                }}>
                  {b.badge}
                </div>

                <p style={{ color: '#b9c0c5', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.5' }}>
                  Customized pad softness, ceramic clearcoat bonding chemistry, and soft-touch interior steam protocols for {b.name} models.
                </p>

                <Link to="/booking" className="btn-outline-green" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '8px' }}>
                  Book {b.name} Care <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cars;

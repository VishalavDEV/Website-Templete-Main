import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, ShieldCheck, Award, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Banner in Deep Emerald */}
      <section
        style={{
          backgroundColor: '#064E3B',
          color: '#FAF7F0',
          padding: '5.5rem 1.5rem 4.5rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '600' }}>
          OUR HERITAGE & PHILOSOPHY
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
            fontWeight: '300',
            marginTop: '0.6rem',
            marginBottom: '1rem',
            color: '#FAF7F0'
          }}
        >
          Jewellery designed to become part of your story.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#D4DEC9', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7, fontWeight: '300' }}>
          Uniting centuries-old Indian goldsmith traditions with contemporary Scandinavian minimal elegance.
        </p>
      </section>

      {/* Story Narrative Section */}
      <section className="container-custom" style={{ paddingTop: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 12' }} className="about-text-col">
            <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
              THE FOUNDING VISION
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginTop: '0.4rem', marginBottom: '1.2rem', color: 'var(--emerald-deep)' }}>
              Crafting Legacy in Every Facet
            </h2>
            <div className="gold-divider-left" />

            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.4rem' }}>
              Founded in 2018, Aurelia emerged from a desire to create fine jewellery that resists ephemeral trends. We believe true luxury lies in restraint — the perfect weight of a solid gold band, the clean geometry of an emerald cut solitaire, the rich green glow of natural Zambian emeralds.
            </p>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every creation is conceived in our design studio and brought to life in our master atelier by artisans whose families have practiced goldsmithing for over three generations.
            </p>

            <div style={{ borderLeft: '2px solid var(--gold-primary)', paddingLeft: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--emerald-deep)', marginBottom: '2rem' }}>
              "We do not design for the season; we design heirlooms that will be passed down with love."
            </div>
          </div>

          <div style={{ gridColumn: 'span 12', position: 'relative' }} className="about-img-col">
            <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-lg)' }} className="img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000"
                alt="Aurelia Craftsmanship"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section style={{ backgroundColor: '#F5F0E6', marginTop: '6rem', padding: '6rem 0', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
              CORE PILLARS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginTop: '0.4rem', color: 'var(--emerald-deep)' }}>
              Our Atelier Promise
            </h2>
            <div className="gold-divider" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div style={{ background: '#FAF7F0', padding: '2.5rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
              <Gem size={32} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--emerald-deep)' }}>Ethical Sourcing</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                100% Kimberley Process compliant, conflict-free diamonds and ethically mined 18K solid gold and emeralds.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', padding: '2.5rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
              <Award size={32} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--emerald-deep)' }}>Master Hand-Setting</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Over 40 hours of microscopic precision setting per piece to guarantee supreme stone security.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', padding: '2.5rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
              <ShieldCheck size={32} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--emerald-deep)' }}>Lifetime Guarantee</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Complimentary annual cleaning, prong inspections, and certificate of authenticity with every purchase.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/shop" className="btn-emerald">
              EXPLORE OUR JEWELLERY <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .about-text-col { grid-column: span 6 !important; }
          .about-img-col { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
}

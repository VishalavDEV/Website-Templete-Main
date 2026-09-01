import React from 'react';
import { pricingPackages, addOnServices } from '../data/pricingData';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { PlusCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const Pricing = () => {
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
          <span className="section-label">TRANSPARENT PRICING</span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            CHOOSE YOUR LEVEL OF CARE.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Upfront tier packages designed for every vehicle maintenance routine—no hidden fees, no gimmicks.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
            marginBottom: '80px'
          }}>
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Add-on Services Table */}
          <div className="glass-card" style={{ padding: '40px 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
                <PlusCircle size={14} /> POPULAR UPGRADES
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', color: '#f5f7f8' }}>
                CUSTOM SERVICE ADD-ONS
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {addOnServices.map((addon, idx) => (
                <div key={idx} style={{
                  background: 'rgba(7, 9, 11, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#f5f7f8' }}>
                      {addon.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Duration: {addon.duration}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    color: '#7cff4f'
                  }}>
                    {addon.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQ />
    </div>
  );
};

export default Pricing;

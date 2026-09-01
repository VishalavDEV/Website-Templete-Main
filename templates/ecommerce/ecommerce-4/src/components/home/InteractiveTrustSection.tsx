import React from 'react';
import { Reveal } from '../animation/Reveal';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export const InteractiveTrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: Truck,
      title: 'FAST EXPRESS DELIVERY',
      desc: 'Complimentary doorstep shipping on orders above ₹3,500.'
    },
    {
      icon: ShieldCheck,
      title: 'GENUINE PRODUCTS',
      desc: '100% verified authentic goods from official partner brands.'
    },
    {
      icon: RotateCcw,
      title: 'EASY 30-DAY RETURNS',
      desc: 'Hassle-free doorstep pickup and instant refund processing.'
    },
    {
      icon: Headphones,
      title: '24/7 VIP SUPPORT',
      desc: 'Dedicated concierge assistance for all your orders.'
    }
  ];

  return (
    <section className="container">
      <Reveal>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '3.5rem 2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent-cobalt)', textTransform: 'uppercase' }}>
              THE NEXORA COMMITMENT
            </span>
            <h2 className="heading-md" style={{ marginTop: '0.2rem' }}>WHY SHOP WITH NEXORA?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {trustFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, borderColor: 'var(--accent-cobalt)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#FAF9F6'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-cobalt-light)',
                      color: 'var(--accent-cobalt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

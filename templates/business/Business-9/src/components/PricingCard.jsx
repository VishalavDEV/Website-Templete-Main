import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingCard({ plan }) {
  const { name, price, description, features, popular, btnText } = plan;
  const navigate = useNavigate();

  return (
    <motion.div
      className={`glass-card ${popular ? 'pulse-glow' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: popular ? 0.1 : 0 }}
      whileHover={{ y: -8, boxShadow: 'var(--glass-shadow-hover)' }}
      style={{
        padding: '2.5rem 2rem',
        background: popular ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.45)',
        border: popular ? '2.5px solid var(--primary)' : '1px solid var(--glass-border)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 'var(--border-radius-lg)',
        boxShadow: popular ? '0 10px 30px rgba(249, 115, 22, 0.15)' : 'var(--glass-shadow)'
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <span style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--primary-gradient)',
          color: '#FFF',
          fontFamily: 'var(--font-title)',
          fontSize: '0.78rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          padding: '0.4rem 1.25rem',
          borderRadius: '9999px',
          boxShadow: '0 4px 15px rgba(249, 115, 22, 0.35)',
          whiteSpace: 'nowrap'
        }}>
          Most Popular
        </span>
      )}

      {/* Plan Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          fontFamily: 'var(--font-title)',
          marginBottom: '0.5rem',
          color: popular ? 'var(--primary)' : 'var(--text-primary)'
        }}>
          {name}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          minHeight: '40px'
        }}>
          {description}
        </p>
        
        {/* Price Tag */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>$</span>
          <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-title)', lineHeight: 1 }}>{price}</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginLeft: '0.2rem' }}>/mo</span>
        </div>
      </div>

      <hr style={{ border: 'none', height: '1px', background: 'rgba(249, 115, 22, 0.1)', marginBottom: '2rem' }} />

      {/* Features List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flexGrow: 1 }}>
        {features.map((feature, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <div style={{
              background: popular ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.08)',
              color: 'var(--primary)',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px'
            }}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        className={`btn ${popular ? 'btn-primary' : 'btn-outline'}`}
        style={{ width: '100%', marginTop: 'auto' }}
        onClick={() => {
          navigate('/contact', { state: { planName: name } });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        whileTap={{ scale: 0.96 }}
      >
        {btnText} <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}

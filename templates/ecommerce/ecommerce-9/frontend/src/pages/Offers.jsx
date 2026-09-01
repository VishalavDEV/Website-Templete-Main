import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Percent, Flame, Calendar, Clock, Copy, Check } from 'lucide-react';
import { fetchOffers } from '../services/api';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(null);

  // Countdown timer values
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    async function loadOffers() {
      try {
        const data = await fetchOffers();
        setOffers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadOffers();
  }, []);

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset countdown
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const couponCodes = [
    { code: 'BLUEPOWER20', discount: '20% OFF', desc: 'Valid on all audio headphones', validUntil: '24 hours remaining' },
    { code: 'CYBERTV5000', discount: '₹5,000 OFF', desc: 'Valid on OLED Smart TVs', validUntil: '12 hours remaining' },
    { code: 'CORETECH10', discount: '10% OFF', desc: 'Site-wide telemetry coupon', validUntil: 'Limited time' }
  ];

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        {/* Header banner */}
        <div className="glass-panel" style={{
          padding: '40px',
          borderRadius: '16px',
          textAlign: 'center',
          border: '1.5px solid rgba(255, 0, 85, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 0, 85, 0.1)',
          background: 'linear-gradient(135deg, rgba(255, 0, 85, 0.05) 0%, rgba(11, 19, 43, 0.5) 100%)',
          marginBottom: '50px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Neon strip */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#ff0055', boxShadow: '0 0 10px #ff0055' }} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 0, 85, 0.15)',
                border: '1px solid #ff0055',
                color: '#ff0055',
                boxShadow: '0 0 10px rgba(255,0,85,0.4)'
              }}
            >
              <Flame size={24} />
            </motion.div>

            <h1 style={{ fontSize: '32px', color: '#fff', fontFamily: 'var(--font-tech)', textShadow: '0 0 10px rgba(255, 0, 85, 0.3)' }}>
              BLUE DEALS FLASH TERMINAL
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '600px' }}>
              Core database system showing heavy discounts on high-performance items. Limited telemetry window remaining.
            </p>

            {/* Countdown timers */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {[
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds }
              ].map((time, idx) => (
                <div key={idx} style={{
                  padding: '12px 20px',
                  background: 'rgba(3, 7, 18, 0.8)',
                  border: '1px solid rgba(255, 0, 85, 0.3)',
                  borderRadius: '8px',
                  minWidth: '80px',
                  boxShadow: '0 0 8px rgba(255,0,85,0.1)'
                }}>
                  <div style={{ fontSize: '24px', fontFamily: 'var(--font-tech)', color: '#ff0055', fontWeight: 'bold' }}>
                    {String(time.val).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '9px', color: '#64748b', marginTop: '4px', letterSpacing: '0.05em' }}>{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promo Codes grid */}
        <div style={{ marginBottom: '60px' }}>
          <h2 className="glow-text-cyan" style={{ fontSize: '20px', marginBottom: '25px', fontFamily: 'var(--font-tech)' }}>
            ACTIVE QUANTUM PROMO CODES
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {couponCodes.map((c, i) => (
              <div key={i} className="glass-panel" style={{
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--font-tech)', color: '#00f0ff' }}>
                    {c.discount}
                  </span>
                  <h4 style={{ fontSize: '13px', color: '#fff', marginTop: '4px', fontFamily: 'var(--font-tech)' }}>{c.code}</h4>
                  <p style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>{c.desc}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(c.code)}
                  style={{
                    background: copiedCode === c.code ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0, 240, 255, 0.05)',
                    border: copiedCode === c.code ? '1px solid #10b981' : '1px solid rgba(0, 240, 255, 0.2)',
                    borderRadius: '6px',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: copiedCode === c.code ? '#10b981' : '#00f0ff',
                    transition: 'all 0.3s'
                  }}
                >
                  {copiedCode === c.code ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Deals listings */}
        <div>
          <h2 className="glow-text-cyan" style={{ fontSize: '20px', marginBottom: '25px', fontFamily: 'var(--font-tech)' }}>
            DISCOUNTED SHOWROOM STOCK
          </h2>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '50px 0' }}>
              <div className="led-blinker" />
            </div>
          ) : (
            <div className="showroom-grid">
              {offers.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

      </div>
    </PageTransition>
  );
};

export default Offers;

import { useState } from 'react';
import { X, Check, Sparkles, Zap, Shield, Crown } from 'lucide-react';
import { mockStore } from '../lib/mockStore';

export default function SubscribeModal({ isOpen, onClose, onSubscribed }) {
  const [email, setEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState('Digital Pro');
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const tiers = [
    {
      name: 'Free Reader',
      price: '$0',
      period: 'forever',
      description: 'Access to public articles and weekly summary newsletter.',
      icon: Shield,
      features: ['Standard article access', 'Weekly digest email', 'Save up to 5 articles', 'Community comment access']
    },
    {
      name: 'Digital Pro',
      price: billingCycle === 'yearly' ? '$10' : '$14',
      period: 'per month',
      popular: true,
      description: 'Full editorial archives, monthly digital magazine issues, and model teardowns.',
      icon: Zap,
      features: [
        'Complete digital magazine issues (PDF + Web)',
        'Exclusive deep-dive model & tool teardowns',
        'Unlimited bookmarks & reading history syncing',
        'Early access to interactive stories & datasets',
        'Ad-free reading experience'
      ]
    },
    {
      name: 'Pioneer Fellow',
      price: billingCycle === 'yearly' ? '$25' : '$32',
      period: 'per month',
      description: 'For AI researchers, venture investors, and frontier builders.',
      icon: Crown,
      features: [
        'All Digital Pro features included',
        'Quarterly AI 100 private data export (CSV/JSON)',
        'Invitation to closed editorial briefings & AMAs',
        'Direct access to Future Intelligence research team',
        'Pioneer badge on community profile'
      ]
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await mockStore.subscribe(email || 'reader@futureintelligence.io', selectedTier);
      setLoading(false);
      setSuccess(true);
      if (onSubscribed) onSubscribed(res.profile);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Subscription failed. Please try again.');
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      backgroundColor: 'rgba(16, 14, 24, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.3s var(--ease-out-expo)'
    }}>
      <div style={{
        backgroundColor: 'var(--surface-color-solid)',
        border: '1px solid var(--border-strong)',
        borderRadius: '16px',
        maxWidth: '900px', width: '100%',
        maxHeight: '92vh', overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 50px var(--accent-cyan-glow)',
        padding: '2.5rem 2rem',
      }}>
        {/* Close button */}
        <button 
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            padding: '0.5rem', borderRadius: '50%', color: 'var(--text-muted)',
            backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          className="hover-text-cyan hover-border-cyan"
        >
          <X size={18} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }} className="animate-fade-in">
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              backgroundColor: 'rgba(0, 229, 255, 0.15)', border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem', boxShadow: '0 0 30px var(--accent-cyan-glow)'
            }}>
              <Check size={32} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Welcome to {selectedTier}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '450px', margin: '0 auto' }}>
              Your membership has been activated. All digital magazine issues, research dossiers, and bookmarks are now unlocked.
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge animate-pulse-glow" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
                <Sparkles size={12} style={{ marginRight: '0.35rem' }} /> Membership
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                Understand the Future of Intelligence
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                Join 85,000+ researchers, founders, and engineers reading our authoritative coverage.
              </p>

              {/* Billing Cycle Toggle */}
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                backgroundColor: 'var(--surface-color)', padding: '0.3rem',
                borderRadius: '8px', border: '1px solid var(--border-color)', gap: '0.25rem'
              }}>
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  style={{
                    padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                    backgroundColor: billingCycle === 'monthly' ? 'var(--text-primary)' : 'transparent',
                    color: billingCycle === 'monthly' ? 'var(--bg-color)' : 'var(--text-muted)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  style={{
                    padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                    backgroundColor: billingCycle === 'yearly' ? 'var(--accent-cyan)' : 'transparent',
                    color: billingCycle === 'yearly' ? 'var(--bg-color)' : 'var(--text-muted)',
                    transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.35rem'
                  }}
                >
                  Yearly <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.2)' }}>Save 20%</span>
                </button>
              </div>
            </div>

            {/* Tiers Grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem'
            }}>
              {tiers.map((tier) => {
                const Icon = tier.icon;
                const isSelected = selectedTier === tier.name;
                return (
                  <div
                    key={tier.name}
                    onClick={() => setSelectedTier(tier.name)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.04)' : 'var(--surface-color)',
                      border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                      borderRadius: '12px', padding: '1.5rem', cursor: 'pointer',
                      boxShadow: isSelected ? '0 0 25px var(--accent-cyan-glow)' : 'none',
                      transition: 'all 0.3s ease', position: 'relative', display: 'flex', flexDirection: 'column'
                    }}
                  >
                    {tier.popular && (
                      <span className="badge" style={{ position: 'absolute', top: '-10px', right: '12px', fontSize: '0.6rem' }}>
                        Most Popular
                      </span>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <Icon size={18} style={{ color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)' }} />
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>{tier.name}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{tier.price}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/{tier.period}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', minHeight: '38px', lineHeight: '1.5' }}>
                      {tier.description}
                    </p>
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {tier.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          <Check size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} style={{ maxWidth: '520px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email to activate..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: '1 1 280px',
                    padding: '0.85rem 1rem', fontSize: '0.9rem',
                    backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-strong)',
                    borderRadius: '8px', color: 'var(--text-primary)'
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-cyan"
                  style={{ flex: '1 1 auto', padding: '0.85rem 1.5rem', fontSize: '0.85rem' }}
                >
                  {loading ? 'Processing...' : `Join as ${selectedTier}`}
                </button>
              </div>
              {error && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

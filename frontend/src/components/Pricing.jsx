import React from 'react';
import { Check, Zap, Sparkles } from 'lucide-react';

export default function Pricing({ pricing = [], onSelectPlan }) {
  const defaultPricing = [
    {
      id: 1,
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Ideal for emerging agencies and boutique design studios.',
      features: ['Up to 5 Projects', 'Standard High-Tech UI Kit', 'Basic API Integration', 'Community Support', 'Free Updates'],
      isPopular: false,
      buttonText: 'Get Started'
    },
    {
      id: 2,
      name: 'Business',
      price: '$79',
      period: 'per month',
      description: 'Engineered for high-growth architectural firms and tech enterprises.',
      features: ['Unlimited Projects', 'Full Architectural UI Library', 'Dedicated Spring Boot API', 'Priority 24/7 Support', 'Custom Domain & CDN', 'Analytics Dashboard'],
      isPopular: true,
      buttonText: 'Choose Business'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$199',
      period: 'per month',
      description: 'Tailored for global conglomerates with custom infrastructure demands.',
      features: ['Custom Infrastructure', 'Dedicated Cloud Instances', 'SLA Guarantee 99.99%', 'Custom Microservices', 'White Glove Onboarding', 'Dedicated Tech Lead'],
      isPopular: false,
      buttonText: 'Contact Sales'
    }
  ];

  const plans = pricing && pricing.length > 0 ? pricing : defaultPricing;

  const handlePlanClick = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" style={{
      padding: '120px 0',
      backgroundColor: '#0c0e12',
      borderTop: '1px solid var(--border-dark)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>Flexible Plans</span>
          <h2 className="section-title">Transparent & Scalable Pricing</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose an architectural licensing model engineered to accelerate your organization’s digital footprint.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                backgroundColor: plan.isPopular ? 'rgba(23, 190, 210, 0.05)' : 'var(--bg-card)',
                borderRadius: '8px',
                padding: '40px 32px',
                border: plan.isPopular ? '2px solid var(--accent)' : '1px solid var(--border-dark)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'var(--transition-smooth)',
                boxShadow: plan.isPopular ? '0 12px 36px var(--accent-glow)' : 'none'
              }}
              className="pricing-card"
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--accent)',
                  color: '#0c0e12',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={12} /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)'
                }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px', minHeight: '42px' }}>
                  {plan.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '32px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                    {plan.price}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    /{plan.period || 'month'}
                  </span>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border-dark)',
                  paddingTop: '24px',
                  marginBottom: '32px'
                }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        <Check size={16} color="var(--accent)" strokeWidth={2.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePlanClick(plan)}
                className={plan.isPopular ? 'btn-accent' : 'btn-outline'}
                style={{ width: '100%', textAlign: 'center' }}
              >
                {plan.buttonText || 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
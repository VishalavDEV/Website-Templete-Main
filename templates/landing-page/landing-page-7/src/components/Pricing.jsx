import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const toggleBilling = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = [
    {
      name: 'Starter',
      desc: 'For individuals getting started on personal organization and basic documentation.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        '3 workspaces limit',
        'Basic AI priorities ranking',
        '5 tool integrations limit',
        '100MB file storage space',
        'Community forum support',
      ],
      recommended: false,
      cta: 'Start for free',
    },
    {
      name: 'Pro',
      desc: 'For professionals who want high-performance scheduling and deep AI recommendations.',
      priceMonthly: 12,
      priceYearly: 10,
      features: [
        'Unlimited workspaces',
        'Advanced contextual AI assistant',
        '30+ platform integrations',
        '10GB cloud storage space',
        'Team task sharing & boards',
        'Priority email support (2h)',
      ],
      recommended: true,
      cta: 'Upgrade to Pro',
    },
    {
      name: 'Team',
      desc: 'For growing teams that need cross-channel automation and custom AI profiles.',
      priceMonthly: 29,
      priceYearly: 24,
      features: [
        'Everything in Pro plan',
        'Shared custom AI agents config',
        'Dedicated automation pipelines',
        'Unlimited cloud storage',
        'SAML SSO & enterprise security',
        'Dedicated success manager support',
      ],
      recommended: false,
      cta: 'Contact sales',
    },
  ];

  return (
    <section className="section-padding pricing-section" id="pricing">
      <div className="glow-blur pricing-glow"></div>
      <div className="grid-bg"></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Pricing Plans</span>
          <h2 className="section-title">Simple pricing that scales with you.</h2>
          <p className="section-desc">
            No hidden contracts. Pick the package that aligns with your development velocity and team dimensions.
          </p>
        </div>

        {/* Monthly/Yearly Toggle Switch */}
        <div className="billing-toggle-container reveal">
          <span className={`billing-label ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
          <div
            className={`billing-switch ${billingCycle === 'yearly' ? 'yearly' : ''}`}
            onClick={toggleBilling}
            aria-label="Toggle billing cycle"
          >
            <div className="billing-switch-slider"></div>
          </div>
          <span className={`billing-label ${billingCycle === 'yearly' ? 'active' : ''}`}>Yearly</span>
          <span className="billing-discount-badge">Save 20%</span>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            
            return (
              <div
                key={idx}
                className={`glass-card pricing-card ${plan.recommended ? 'recommended' : ''} reveal`}
              >
                <div>
                  {plan.recommended && <div className="recommended-badge">Recommended</div>}
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                  
                  <div className="plan-price-wrapper">
                    <span className="plan-price">${price}</span>
                    <span className="plan-price-period">
                      / month {billingCycle === 'yearly' && price > 0 ? '(billed annually)' : ''}
                    </span>
                  </div>

                  <ul className="plan-features-list">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="plan-feature-item">
                        <Check size={14} className="plan-feature-icon" strokeWidth={3} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`btn plan-button ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

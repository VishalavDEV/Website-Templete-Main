import React, { useState } from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PricingPlansPage = () => {
  const { addToast } = useApp();
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const plans = [
    { name: 'Starter Developer', price: billingCycle === 'Monthly' ? '₹2,499' : '₹24,999', desc: 'Perfect for individual developers and small side projects.', features: ['Full React Source Code', 'Single License', 'Community Support', 'Basic Components'] },
    { name: 'Professional Team', price: billingCycle === 'Monthly' ? '₹7,499' : '₹74,999', desc: 'Ideal for small teams requiring full Spring Boot REST API & MySQL support.', popular: true, features: ['Up to 10 Developers', 'Spring Boot Backend APIs', 'MySQL Database Schemas', '7 Dashboards & 8 Apps', 'Priority Support'] },
    { name: 'Enterprise Unlimited', price: billingCycle === 'Monthly' ? '₹19,999' : '₹1,99,999', desc: 'Complete solution for high-scale enterprise applications.', features: ['Unlimited Developers', 'Full Commercial License', '24/7 Dedicated SLA', 'Custom Addons & Training'] }
  ];

  return (
    <div className="pricing-page" style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 900 }}>Transparent Flexible Pricing</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 4 }}>Choose the plan that fits your development & deployment needs.</p>
        
        <div style={{ display: 'inline-flex', background: 'var(--bg-subtle)', padding: 4, borderRadius: 8, marginTop: 16 }}>
          <button className={`btn btn-sm ${billingCycle === 'Monthly' ? 'btn-primary' : ''}`} onClick={() => setBillingCycle('Monthly')}>Monthly Billing</button>
          <button className={`btn btn-sm ${billingCycle === 'Annual' ? 'btn-primary' : ''}`} onClick={() => setBillingCycle('Annual')}>Annual Billing (Save 20%)</button>
        </div>
      </div>

      <div className="grid-12">
        {plans.map((p, idx) => (
          <div key={idx} className="col-4 glass-card" style={{ border: p.popular ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)', padding: 32, position: 'relative' }}>
            {p.popular && <span className="badge badge-primary" style={{ position: 'absolute', top: 16, right: 16 }}>MOST POPULAR</span>}
            <h3 style={{ fontSize: 20, fontWeight: 800 }}>{p.name}</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '8px 0 20px 0', minHeight: 40 }}>{p.desc}</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 20, color: 'var(--brand-primary)' }}>{p.price}<span style={{ fontSize: 14, color: 'var(--text-muted)' }}>/{billingCycle === 'Monthly' ? 'mo' : 'yr'}</span></h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {p.features.map((f, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                  <Check size={16} color="var(--brand-success)" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }} onClick={() => addToast(`Subscribed to ${p.name}`, 'success')}>
              Get Started Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

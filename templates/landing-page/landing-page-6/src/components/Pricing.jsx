import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function Pricing() {
  const [selectedFormat, setSelectedFormat] = useState('all');

  const plans = bookDetailsData.pricingPlans;
  const filteredPlans = selectedFormat === 'all' 
    ? plans 
    : plans.filter(p => p.id === selectedFormat);

  return (
    <section id="purchase" className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">ORDER ONLINE</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Choose Your Edition
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Select the perfect format to begin your journey into <em>The Echoes of Tomorrow</em>.
          </p>

          <div className="pricing-tabs reveal-on-scroll delay-3">
            <button 
              className={`pricing-tab-btn ${selectedFormat === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('all')}
            >
              All Formats
            </button>
            <button 
              className={`pricing-tab-btn ${selectedFormat === 'digital' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('digital')}
            >
              Digital
            </button>
            <button 
              className={`pricing-tab-btn ${selectedFormat === 'paperback' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('paperback')}
            >
              Paperback
            </button>
            <button 
              className={`pricing-tab-btn ${selectedFormat === 'collector' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('collector')}
            >
              Collector Edition
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {filteredPlans.map((plan, idx) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.isRecommended ? 'recommended' : ''} reveal-on-scroll delay-${idx + 1}`}
            >
              {plan.isRecommended && (
                <span className="pricing-card-badge">RECOMMENDED</span>
              )}

              <h3 className="pricing-card-name">{plan.name}</h3>
              <div className="pricing-card-price">{plan.price}</div>
              <div className="pricing-card-format">{plan.formatLabel}</div>

              <ul className="pricing-features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature-item">
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.isRecommended ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.ctaText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Button from './Button';

const PricingCard = ({ title, price, features = [], featured = false, buttonText = "REGISTER NOW", to = "/registration" }) => {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="pricing-card-badge">RECOMMENDED</div>}
      <h3 className="pricing-plan-name">{title}</h3>
      <div className="pricing-price">{price}</div>
      <ul className="pricing-features">
        {features.map((feat, idx) => (
          <li key={idx} className="pricing-feature-item">
            <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>
      <Button to={to} variant={featured ? 'primary' : 'outline'} style={{ width: '100%', padding: '0.85rem' }}>
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;

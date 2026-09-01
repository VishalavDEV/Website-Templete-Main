import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="EVENT & TICKETING PACKAGES" title="IRON ASCENT 2026 PRICING" />
        <div className="grid-3">
          <PricingCard title="EVENT ENTRY" price="₹799" features={['Official Event Participation', 'Custom Athlete T-shirt', 'Digital Certificate', 'Hydration & Energy Snacks']} buttonText="REGISTER NOW" to="/registration" />
          <PricingCard title="PRO ATHLETE" price="₹1,499" featured={true} features={['All Event Entry Benefits', 'Athlete Kit & Shaker', 'Biomechanical Assessment', 'Priority Warm-Up Access']} buttonText="REGISTER AS PRO" to="/registration" />
          <PricingCard title="ELITE VIP PASS" price="₹2,499" features={['Full Pro Athlete Kit', '1-on-1 Trainer Consultation', 'Custom Nutrition Guide', 'VIP Lounge Access']} buttonText="CLAIM VIP ACCESS" to="/registration" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

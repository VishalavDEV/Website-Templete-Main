import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';

const Membership = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="ARENA MEMBERSHIPS" title="VORTEX FORGE GYM PLANS" />
        <div className="grid-3">
          <PricingCard title="STARTER" price="₹999 / MO" features={['Standard Gym Access', 'Locker Access', 'Basic Assessment']} buttonText="JOIN STARTER" to="/registration" />
          <PricingCard title="FORGE PLAN" price="₹1,799 / MO" featured={true} features={['Full 24/7 Gym Access', 'Group Classes', 'Trainer Guidance', 'Event Discounts']} buttonText="JOIN FORGE" to="/registration" />
          <PricingCard title="ELITE ATHLETE" price="₹2,999 / MO" features={['24/7 Arena Access', 'Personal Trainer', 'Nutrition Plan', 'Recovery Lounge']} buttonText="JOIN ELITE VIP" to="/registration" />
        </div>
      </div>
    </div>
  );
};

export default Membership;

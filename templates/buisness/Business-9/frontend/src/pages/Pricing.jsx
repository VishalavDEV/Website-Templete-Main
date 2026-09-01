import PageTransition from '../animations/PageTransition';
import PricingCard from '../components/PricingCard';
import { DollarSign } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter Blueprint',
      price: '1,499',
      description: 'Ideal for early-stage startup founders looking to quickly define their MVP core and branding identity.',
      features: [
        'High-fidelity Figma UI/UX Design templates',
        'Single-page React landing setup',
        'Basic branding palette & style guides',
        'Standard search authority (SEO) setup',
        '2 weeks executive advisory check-ins'
      ],
      popular: false,
      btnText: 'Get Starter Blueprint'
    },
    {
      name: 'Professional Tier',
      price: '3,899',
      description: 'Perfect for growing companies needing custom web software, integrations, and automated pipelines.',
      features: [
        'Custom multi-page React application',
        'Secure Spring Boot Rest API integration',
        'Workflow automations & webhook setups',
        'Detailed conversion-rate optimization review',
        'Full brand redesign guidelines book',
        '4 weeks post-deployment bug support'
      ],
      popular: true,
      btnText: 'Get Professional Tier'
    },
    {
      name: 'Enterprise Scale',
      price: '8,499',
      description: 'Engineered for large organizations requiring migration audits, custom compilers, and heavy transactions.',
      features: [
        'Enterprise microservices architecture maps',
        'Java 21 high-concurrency compile optimization',
        'Custom real-time database BI reporting',
        'Dedicated secure Kubernetes cloud orchestration',
        'Full-scale employee process alignment training',
        '24/7 Priority support channel access'
      ],
      popular: false,
      btnText: 'Contact for Enterprise Scale'
    }
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge"><DollarSign size={14} /> Investment Tiers</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Transparent Plans For <span className="text-gradient">Your Scale</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Select a strategic advisory or software package that fits your business conversion metrics.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}>
            {plans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 700px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Building2, Globe, Sparkles, Workflow, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import PageTransition from '../animations/PageTransition';
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState('Startup Solutions');
  const navigate = useNavigate();

  const categories = [
    { name: 'Startup Solutions', icon: <Rocket size={18} /> },
    { name: 'Enterprise Solutions', icon: <Building2 size={18} /> },
    { name: 'Digital Solutions', icon: <Globe size={18} /> },
    { name: 'Marketing Solutions', icon: <Sparkles size={18} /> },
    { name: 'Automation Solutions', icon: <Workflow size={18} /> },
    { name: 'Analytics Solutions', icon: <BarChart3 size={18} /> }
  ];

  const solutionsContent = {
    'Startup Solutions': {
      title: 'Accelerate Your Path To Product-Market Fit',
      subtitle: 'Designed for early and growth-stage companies needing rapid speed-to-market.',
      description: 'We help startups define their Minimum Viable Product (MVP) core, build clean interactive prototypes, and design pitch materials. By setting up low-customer-acquisition-cost organic search pipelines, we help you secure your next round of funding with active user metrics.',
      icon: <Rocket size={40} />,
      benefits: [
        'Rapid MVP Scaffolding (4-6 weeks launch)',
        'Investor Pitch Decks & Interactive Mockups',
        'Conversion-optimized Onboarding Funnels',
        'Organic Customer Acquisition Strategies'
      ]
    },
    'Enterprise Solutions': {
      title: 'Scale Securely Without Operational Bottlenecks',
      subtitle: 'Tailored for large organizations needing legacy migrations and microservices.',
      description: 'Migrate obsolete server frameworks to virtual-thread Java setups and Docker environments. We audit communication sorting pipelines, replace manual email summaries with real-time status dashboards, and secure endpoint APIs to handle millions of transactions under high loads.',
      icon: <Building2 size={40} />,
      benefits: [
        'Java Virtual Thread compilations (low server cost)',
        'Legacy Migration & Database Re-architecting',
        'PCI-DSS Compliant Secure Transacting Gates',
        'Modular Kubernetes Cloud Orchestration'
      ]
    },
    'Digital Solutions': {
      title: 'Modern Software Engineered for High Usability',
      subtitle: 'Build responsive client portals and cloud SaaS dashboards.',
      description: 'We construct beautiful full-stack applications with high-fidelity frontend views and modular APIs. Combining Outfit-typography spacing, glassmorphic card patterns, and GPU-friendly animations, we create cloud applications that are easy and engaging to interact with.',
      icon: <Globe size={40} />,
      benefits: [
        'Responsive Web Application Design & Code',
        'Interactive Client Portals & Support Hubs',
        'SaaS Dashboard Layouts with High Utility',
        'Cross-platform React and React Native Views'
      ]
    },
    'Marketing Solutions': {
      title: 'Elevate Your Message as an Industry Leader',
      subtitle: 'Stand out from competitors through modern branding guidelines.',
      description: 'We establish modern color schemes, logo styles, copy frameworks, and LinkedIn ad assets that capture the attention of Gen Z enterprise buyers. We focus on conversion copywriting, authority content structures, and cohesive ad assets.',
      icon: <Sparkles size={40} />,
      benefits: [
        'Visual Identity Systems & Brand Guideline books',
        'B2B LinkedIn & Search Placement Ad Creatives',
        'High-Converting Landing Page Copywriting',
        'Search Authority (SEO) Content Blueprints'
      ]
    },
    'Automation Solutions': {
      title: 'Eliminate Repetitive Tasks and Redundant Emailing',
      subtitle: 'Automate business logic flow through webhooks and event triggers.',
      description: 'We connect checkout systems, support desk logs, and delivery notifications directly. By replacing obsolete manual logging loops with automated actions, your staff saves dozens of operating hours weekly, and errors are reduced to zero.',
      icon: <Workflow size={40} />,
      benefits: [
        'System Integrations & Webhook Orchestrations',
        'Trigger-based Email & SMS Customer Alerting',
        'Automated Support Ticket Sorting Pipelines',
        'Process Bottleneck Mapping & Flow Audits'
      ]
    },
    'Analytics Solutions': {
      title: 'Turn Raw Action Streams into Business Growth',
      subtitle: 'Harness database event metrics to predict customer retention.',
      description: 'We build database triggers, events logging networks, and Tableau/BI dashboards that compile user actions hourly. By isolating checkout bounce actions and visualizing retention trends, we help executives forecast revenue streams.',
      icon: <BarChart3 size={40} />,
      benefits: [
        'Real-time BI Dashboard & Reporting Engineering',
        'A/B Testing Framework Integration & Auditing',
        'Predictive Retention & Customer Value Models',
        'Structured Logging Pipelines & SQL Databases'
      ]
    }
  };

  const activeContent = solutionsContent[activeCategory];

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge"><Building2 size={14} /> Solutions Directory</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Custom Blueprints For <span className="text-gradient">Every Scale</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Select a business tier to explore how OranGrow can streamline operations and drive customer conversion.
            </p>
          </div>

          {/* Interactive Layout: Side Tabs and Dynamic Content */}
          <div className="solutions-layout" style={{
            display: 'grid',
            gridTemplateColumns: '0.8fr 1.2fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            
            {/* Left selector menu tabs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <motion.button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.2rem 1.5rem',
                      borderRadius: 'var(--border-radius-md)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--primary)' : 'var(--glass-border)',
                      background: isActive ? 'var(--primary-gradient)' : 'var(--glass-bg)',
                      color: isActive ? '#FFF' : 'var(--text-primary)',
                      fontFamily: 'var(--font-title)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 10px 20px rgba(249, 115, 22, 0.15)' : 'var(--glass-shadow)'
                    }}
                    whileHover={!isActive ? { x: 5, backgroundColor: 'rgba(255, 255, 255, 0.9)' } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div style={{ color: isActive ? '#FFF' : 'var(--primary)' }}>
                      {cat.icon}
                    </div>
                    {cat.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Right details content with animated transitions */}
            <div style={{ minHeight: '480px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card"
                  style={{
                    background: '#FFF',
                    padding: '3rem',
                    boxShadow: 'var(--glass-shadow-hover)',
                    borderRadius: 'var(--border-radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Floating Icon Indicator */}
                  <div style={{
                    background: 'rgba(249, 115, 22, 0.08)',
                    color: 'var(--primary)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {activeContent.icon}
                  </div>

                  {/* Titles */}
                  <h2 style={{
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-title)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2
                  }}>
                    {activeContent.title}
                  </h2>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    marginBottom: '1.5rem'
                  }}>
                    {activeContent.subtitle}
                  </p>

                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '2rem'
                  }}>
                    {activeContent.description}
                  </p>

                  {/* Deliverables checklist */}
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-title)' }}>Key Inclusions:</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem 2rem',
                    width: '100%',
                    marginBottom: '2.5rem'
                  }} className="benefits-grid">
                    {activeContent.benefits.map((benefit, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate('/contact', { state: { solutionTier: activeCategory } });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ width: '100%' }}
                  >
                    Select This Solutions Blueprint <ArrowRight size={16} />
                  </button>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .solutions-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}

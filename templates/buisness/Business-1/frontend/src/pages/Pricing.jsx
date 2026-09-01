import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly | yearly
  const [activeFaq, setActiveFaq] = useState(null);

  const plans = [
    {
      name: "Starter",
      desc: "For small teams and early-stage startups mapping initial workflows.",
      prices: { monthly: 99, yearly: 79 },
      features: [
        "Up to 3 active workflow sprints",
        "Basic API pipeline audits",
        "Community Slack & Email support",
        "No custom databases integration"
      ],
      popular: false,
      cta: "Start Diagnostic Sprint"
    },
    {
      name: "Professional",
      desc: "For scale-up teams requiring custom databases and code deployment.",
      prices: { monthly: 249, yearly: 199 },
      features: [
        "Up to 10 active workflow sprints",
        "Full CRM & Database integrations",
        "SOC2 security audit compliance",
        "Next-business-day developer support",
        "Custom metrics dashboard"
      ],
      popular: true,
      cta: "Unlock Scale Sprints"
    },
    {
      name: "Enterprise",
      desc: "For enterprise companies requiring dedicated technical teams.",
      prices: { monthly: 599, yearly: 479 },
      features: [
        "Unlimited workflow sprints",
        "Custom ML analytics pipelines",
        "Dedicated Engineering Lead",
        "24/7 priority pager support",
        "Full repository source code handovers"
      ],
      popular: false,
      cta: "Schedule Architecture Call"
    }
  ];

  const comparisons = [
    { feature: "Active Sprints", starter: "3 Sprints", professional: "10 Sprints", enterprise: "Unlimited" },
    { feature: "Database Syncs", starter: false, professional: true, enterprise: true },
    { feature: "Custom ML Models", starter: false, professional: false, enterprise: true },
    { feature: "Security Certification", starter: "Basic", professional: "SOC2 Compliance", enterprise: "SOC2 + HIPAA" },
    { feature: "Support SLA", starter: "48-Hour Email", professional: "Next-Day Direct", enterprise: "24/7 Dedicated" },
    { feature: "Repository Handovers", starter: false, professional: false, enterprise: true }
  ];

  const faqs = [
    { q: "Is there a minimum contract commitment?", a: "No. You can cancel, upgrade, or downgrade your plan cycle at the close of any billing month." },
    { q: "Do you offer a discount for yearly contracts?", a: "Yes, choosing annual billing saves you 20% compared to monthly contracts." },
    { q: "How do we receive our repository source code?", a: "For Enterprise plans, all code, Terraform scripts, and documentation are committed directly to your private GitHub organization." }
  ];

  return (
    <div className="pricing-page">
      {/* Background Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Header */}
      <section className="pricing-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">TRANSPARENT PLANS</span>
            <h1 className="large-headline">Flexible plans for <br /><span className="text-gradient">Every Stage of Growth</span></h1>
            
            {/* Toggle Billing Cycle */}
            <div className="billing-toggle-container">
              <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
              <button
                className={`billing-switch-btn ${billingCycle === 'yearly' ? 'yearly' : ''}`}
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                aria-label="Toggle billing cycle"
              >
                <span className="switch-knob"></span>
              </button>
              <span className={billingCycle === 'yearly' ? 'active' : ''}>
                Yearly <span className="discount-badge">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="pricing-grid-section section-padding">
        <div className="container pricing-cards-grid">
          {plans.map((p, idx) => (
            <motion.div
              className={`pricing-card glass-card ${p.popular ? 'popular' : ''}`}
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {p.popular && <span className="popular-ribbon">Most Popular</span>}
              <div className="pricing-card-header">
                <h3>{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{p.prices[billingCycle]}</span>
                  <span className="period">/mo</span>
                </div>
              </div>

              <div className="pricing-card-body">
                <h4>Includes:</h4>
                <ul className="plan-features-list">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <Check className="feature-check-icon" size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-footer">
                <button className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta-btn`}>
                  {p.cta} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="pricing-comparison-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Detailed Feature Comparison</h2>
            <p className="section-desc">Analyze capabilities across each strategy tier before drafting engagements.</p>
          </div>

          <div className="comparison-table-wrapper glass-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capabilities</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feat-name">{row.feature}</td>
                    <td>
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check size={18} className="feat-check" /> : <X size={18} className="feat-x" />
                      ) : row.starter}
                    </td>
                    <td>
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? <Check size={18} className="feat-check" /> : <X size={18} className="feat-x" />
                      ) : row.professional}
                    </td>
                    <td>
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check size={18} className="feat-check" /> : <X size={18} className="feat-x" />
                      ) : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Accordion */}
      <section className="pricing-faq-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Pricing Inquiries</h2>
            <p className="section-desc">Common pricing structure and contracting questions.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-accordion-card glass-card ${activeFaq === idx ? 'active' : ''}`}
                key={idx}
                onClick={() => setActiveFaq(prev => prev === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <HelpCircle className="faq-icon" size={20} />
                  <h3>{faq.q}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle answer">
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

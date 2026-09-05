import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Shield, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Sparkles, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly | yearly
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Immediate (Next 2 Weeks)',
    notes: ''
  });

  const handleOpenPlanModal = (plan) => {
    setSelectedPlan(plan);
    setBookingSubmitted(false);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handleGoToContact = (planName) => {
    setIsModalOpen(false);
    navigate('/contact', { state: { plan: planName, billing: billingCycle } });
  };

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
                <button
                  onClick={() => handleOpenPlanModal(p)}
                  className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'} pricing-cta-btn`}
                  aria-label={`Select ${p.name} Plan`}
                >
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

      {/* Interactive Sprint Booking Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <div className="pricing-modal-backdrop" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="pricing-modal-card glass-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!bookingSubmitted ? (
                <>
                  <div className="modal-header-section">
                    <div className="modal-plan-badge">
                      <Sparkles size={14} />
                      <span>{selectedPlan.name} Tier & Sprint Setup</span>
                    </div>
                    <h2>Initialize Your Engagement</h2>
                    <p className="modal-subtitle">
                      Confirm your {billingCycle} sprint scope for <strong>${selectedPlan.prices[billingCycle]}/month</strong>.
                    </p>
                  </div>

                  <div className="modal-plan-summary-box">
                    <div className="summary-left">
                      <h4>{selectedPlan.name} Plan</h4>
                      <p>{selectedPlan.desc}</p>
                      <div className="modal-features-pill-list">
                        {selectedPlan.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="feature-pill"><Check size={12} /> {f}</span>
                        ))}
                      </div>
                    </div>
                    <div className="summary-right">
                      <span className="summary-price">${selectedPlan.prices[billingCycle]}</span>
                      <span className="summary-period">per month ({billingCycle})</span>
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="modal-booking-form">
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="form-group">
                        <label>Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="form-row-2col">
                      <div className="form-group">
                        <label>Company / Organization</label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Global"
                          value={bookingForm.company}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, company: e.target.value }))}
                        />
                      </div>
                      <div className="form-group">
                        <label>Desired Timeline</label>
                        <select
                          value={bookingForm.timeline}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, timeline: e.target.value }))}
                        >
                          <option>Immediate (Next 2 Weeks)</option>
                          <option>Next Quarter (Q3/Q4)</option>
                          <option>Exploratory Architecture Review</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Sprint Goals / Specific Integrations</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your tech stack, databases, or growth targets..."
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}
                      />
                    </div>

                    <div className="modal-actions-row">
                      <button type="submit" className="btn btn-primary modal-submit-btn">
                        Confirm Sprint Reservation <Send size={16} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary modal-contact-btn"
                        onClick={() => handleGoToContact(selectedPlan.name)}
                      >
                        Detailed Consultation Form
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="modal-success-state text-center">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={54} color="#00ffaa" />
                  </div>
                  <h2>Sprint Reservation Received!</h2>
                  <p className="success-lead">
                    Thank you <strong>{bookingForm.name || 'Partner'}</strong>. Our Lead Solutions Architect has been assigned to your <strong>{selectedPlan.name}</strong> sprint onboarding.
                  </p>
                  <div className="success-details-card glass-card">
                    <div className="success-row">
                      <span><Clock size={16} /> Response SLA:</span>
                      <strong>Under 4 Business Hours</strong>
                    </div>
                    <div className="success-row">
                      <span><Calendar size={16} /> Timeline:</span>
                      <strong>{bookingForm.timeline}</strong>
                    </div>
                    <div className="success-row">
                      <span>Plan Selected:</span>
                      <strong>{selectedPlan.name} (${selectedPlan.prices[billingCycle]}/{billingCycle === 'yearly' ? 'yr' : 'mo'})</strong>
                    </div>
                  </div>
                  <div className="modal-actions-row" style={{ justifyContent: 'center' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Done & Return to Pricing
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

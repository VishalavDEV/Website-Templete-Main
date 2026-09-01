import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, Check, Sparkles } from 'lucide-react';
import './AboutSupport.css';

export const AboutSupport: React.FC = () => {
  // FAQ accordion toggler states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Contact Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000); // hide banner after 5s
    }, 1200);
  };

  const faqs = [
    { q: "How do the toy animations work?", a: "Every toy in our store is custom-built with interactive vector graphics (SVGs). When you hover over or click product cards, active JavaScript states trigger smooth CSS and Framer Motion spring transformations, making the toys spin, wave, rumble, or launch in real-time!" },
    { q: "What is the delivery estimate?", a: "We offer three shipping speeds: Standard Ground Toy-Transit (3-5 business days), Express Rocket Delivery (1-2 business days), and Same Day Magic Drop (delivered within 24 hours if ordered before 12 PM)." },
    { q: "What is your refund policy?", a: "If your toy doesn't bring enough magic, you can return it within 30 days for a full refund or exchange. The toy must remain in its original box with all assembly parts intact." },
    { q: "Can I customize the toy colors?", a: "Yes! Many of our toys, like the Hot Wheels Supercar and Funskool bouncing ball, come in multiple neon color themes. You can pick your preferred color badge directly on the product's details page." },
    { q: "Do you ship internationally?", a: "Currently, our toy couriers travel across all cities in the country. We are building larger cargo aircraft routes to deliver toy boxes worldwide soon!" }
  ];

  return (
    <div className="about-page app-container">
      <div className="stars-bg" />

      {/* Hero Intro */}
      <section className="about-hero">
        <h1 className="about-title">THE TOY WORKSHOP</h1>
        <p className="about-subtitle">How we build, pack, and transport magic directly to your doorstep.</p>
      </section>

      {/* Flowchart: How we bring toys to you */}
      <section className="workshop-flowchart-section glass-panel">
        <h2>HOW WE BRING TOYS TO YOU</h2>
        
        <div className="flowchart-track">
          <div className="flowchart-step" data-cursor="build">
            <div className="step-number-bubble">1</div>
            <span className="step-graphic">🏭</span>
            <h4>Toy Factory</h4>
            <p>Our engineers sketch and build premium interactive toys with built-in magic.</p>
          </div>

          <div className="flowchart-step" data-cursor="add-cart">
            <div className="step-number-bubble">2</div>
            <span className="step-graphic">📦</span>
            <h4>Toy Box packing</h4>
            <p>Your adopted squad is gathered, safety checked, and packed inside the box.</p>
          </div>

          <div className="flowchart-step" data-cursor="drive">
            <div className="step-number-bubble">3</div>
            <span className="step-graphic">🚐</span>
            <h4>Warehouse Cruisers</h4>
            <p>Delivery vans pick up boxes and route them to transit airport hubs.</p>
          </div>

          <div className="flowchart-step" data-cursor="play">
            <div className="step-number-bubble">4</div>
            <span className="step-graphic">✈️</span>
            <h4>Transit aircraft</h4>
            <p>Express cargo planes fly shipments overnight across long city distances.</p>
          </div>

          <div className="flowchart-step" data-cursor="steer">
            <div className="step-number-bubble">5</div>
            <span className="step-graphic">🏍️</span>
            <h4>Local courier</h4>
            <p>Motorcycle riders wiggle through city streets to make the final run.</p>
          </div>

          <div className="flowchart-step" data-cursor="collect">
            <div className="step-number-bubble">6</div>
            <span className="step-graphic">🏠</span>
            <h4>Play Begins!</h4>
            <p>The package reaches your hands and the toys awaken in their new home!</p>
          </div>
        </div>
      </section>

      {/* Grid: FAQ & Contact Form */}
      <div className="support-grid">
        {/* FAQs */}
        <section className="faq-section glass-panel">
          <div className="section-header-row">
            <HelpCircle className="section-icon text-accent" />
            <h3>Help Center & FAQ</h3>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-row ${isOpen ? 'open' : ''}`}>
                  <button className="faq-trigger-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section glass-panel">
          <div className="section-header-row">
            <Mail className="section-icon text-secondary" />
            <h3>Send a Message</h3>
          </div>

          {formSubmitted ? (
            <div className="contact-success-banner glass-panel">
              <Check size={28} className="success-check" />
              <h4>Message Sent!</h4>
              <p>Thank you! Our toy workshop master will review your message and write back soon.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="input-field">
                <label>Your Name</label>
                <input 
                  type="text" 
                  value={form.name} 
                  onChange={e => setForm({ ...form, name: e.target.value })} 
                  placeholder="e.g. Alex"
                  required
                />
              </div>

              <div className="input-field">
                <label>Email Address</label>
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={e => setForm({ ...form, email: e.target.value })} 
                  placeholder="e.g. alex@example.com"
                  required
                />
              </div>

              <div className="input-field">
                <label>Message Content</label>
                <textarea 
                  value={form.message} 
                  onChange={e => setForm({ ...form, message: e.target.value })} 
                  placeholder="Type your questions or feedback here..."
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="btn btn-secondary contact-submit-btn" disabled={submitting} data-cursor="play">
                {submitting ? 'SENDING...' : 'SEND MESSAGE'} <Send size={16} />
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

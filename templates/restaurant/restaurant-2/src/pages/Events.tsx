import React, { useState } from 'react';

export const Events: React.FC = () => {
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setInquiryLoading(true);
    setTimeout(() => {
      setInquiryLoading(false);
      setInquirySuccess(true);
      form.reset();
    }, 900);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container-xl page-hero-content">
          <div className="eyebrow text-accent">BESPOKE GATHERINGS</div>
          <h1 className="page-hero-title">Private Dining & Celebrations</h1>
          <p className="page-hero-subtitle">
            Intimate wine cellar suites, live-hearth Chef's table experiences, and alfresco terrace receptions.
          </p>
        </div>
      </section>

      {/* Event Spaces Grid */}
      <section className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow">DISTINCTIVE SPACES</div>
            <h2 className="section-title">Our Private Venues</h2>
            <p className="section-desc text-muted-custom">
              Each room offers a distinct architectural personality, dedicated culinary team, and bespoke wine pairings.
            </p>
          </div>

          <div className="row g-5 align-items-center mb-5 pb-5 border-bottom border-bone">
            <div className="col-lg-6">
              <div className="about-image-composition reveal-fade-right">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" alt="The Olive Cellar Suite" className="about-img-primary" loading="eager" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-3 reveal-fade-left">
                <span className="badge bg-accent text-white mb-2">Seated Capacity: 10 – 24 Guests</span>
                <h3 className="font-heading fs-2 text-primary-dark mb-3">The Olive Cellar Suite</h3>
                <p className="lead">
                  Surrounded by our 400-bottle reserve wine vault, this subterranean private dining room features reclaimed teak dining tables and customized acoustic lighting.
                </p>
                <ul className="list-unstyled text-muted-custom d-flex flex-column gap-2 mb-4">
                  <li><i className="bi bi-check2 text-accent me-2"></i> Dedicated private sommelier & waitstaff</li>
                  <li><i className="bi bi-check2 text-accent me-2"></i> Tailored 5-course or 7-course seasonal menu</li>
                  <li><i className="bi bi-check2 text-accent me-2"></i> Integrated AV & personalized background soundscape</li>
                </ul>
                <a href="#eventInquiryForm" className="btn-custom btn-primary-accent">Inquire for Cellar Suite</a>
              </div>
            </div>
          </div>

          <div className="row g-5 align-items-center mb-5 pb-5 border-bottom border-bone">
            <div className="col-lg-6 order-lg-2">
              <div className="about-image-composition reveal-fade-left">
                <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80" alt="Hearth Chef's Table" className="about-img-primary" loading="eager" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-3 reveal-fade-right">
                <span className="badge bg-accent text-white mb-2">Exclusivity: Up to 8 Guests</span>
                <h3 className="font-heading fs-2 text-primary-dark mb-3">The Hearth Chef's Counter</h3>
                <p className="lead">
                  An exhilarating culinary performance where guests sit directly at the live fire hearth. Chef Arjun prepares each dish before your eyes with storytelling behind every harvest.
                </p>
                <ul className="list-unstyled text-muted-custom d-flex flex-column gap-2 mb-4">
                  <li><i className="bi bi-check2 text-accent me-2"></i> 9-course interactive firecraft tasting</li>
                  <li><i className="bi bi-check2 text-accent me-2"></i> Rare vintage cellar pairings</li>
                  <li><i className="bi bi-check2 text-accent me-2"></i> Signed personalized menus and chef gift box</li>
                </ul>
                <a href="#eventInquiryForm" className="btn-custom btn-primary-accent">Book Chef's Counter</a>
              </div>
            </div>
          </div>

          {/* Celebration Packages Grid */}
          <div className="pt-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <div className="eyebrow center-eyebrow">EVENT PACKAGES</div>
              <h2 className="section-title">All-Inclusive Celebrations</h2>
              <p className="section-desc text-muted-custom">Transparent, beautifully organized hospitality tiers for effortless event planning.</p>
            </div>

            <div className="row g-4 mb-5 pb-5">
              <div className="col-lg-4">
                <div className="package-card">
                  <h4 className="package-title text-primary-dark">Intimate Soirée</h4>
                  <p className="text-center small text-muted-custom">Birthdays, milestones & small reunions</p>
                  <div className="package-price-wrap">
                    <div className="package-price">₹2,800</div>
                    <div className="package-price-period">Per Guest · 4 Courses</div>
                  </div>
                  <ul className="package-features-list">
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Welcome cocktail upon arrival</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> 4-course wood-fired dinner</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Handcrafted celebration dessert</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Personalized place cards</li>
                  </ul>
                  <a href="#eventInquiryForm" className="btn-custom btn-outline-dark-custom w-100">Select Soirée</a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="package-card featured-package">
                  <span className="package-badge">Premier Choice</span>
                  <h4 className="package-title">Executive Dining</h4>
                  <p className="text-center small opacity-75">Board dinners & client entertainment</p>
                  <div className="package-price-wrap">
                    <div className="package-price">₹3,900</div>
                    <div className="package-price-period">Per Guest · 6 Courses</div>
                  </div>
                  <ul className="package-features-list">
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Private room reservation included</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Sommelier wine pairing (3 glasses)</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> 6-course Chef signature tasting</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Digestif & artisan truffle service</li>
                  </ul>
                  <a href="#eventInquiryForm" className="btn-custom btn-primary-accent w-100">Book Executive</a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="package-card">
                  <h4 className="package-title text-primary-dark">Full Venue Buyout</h4>
                  <p className="text-center small text-muted-custom">Weddings, galas & luxury events</p>
                  <div className="package-price-wrap">
                    <div className="package-price">Custom</div>
                    <div className="package-price-period">Up to 120 Guests</div>
                  </div>
                  <ul className="package-features-list">
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Exclusive access to all rooms & garden</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Full culinary customization with Chef</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Open premium bar & mixologist team</li>
                    <li className="package-feature-item"><i className="bi bi-check2"></i> Valet & security personnel</li>
                  </ul>
                  <a href="#eventInquiryForm" className="btn-custom btn-outline-dark-custom w-100">Request Custom Quote</a>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Event Inquiry Form */}
          <div id="eventInquiryForm" className="p-4 p-lg-5 bg-surface-subtle rounded-4 border border-dark-subtle shadow-sm">
            <div className="text-center max-w-700 mx-auto mb-4">
              <div className="eyebrow center-eyebrow">EVENT CONCIERGE</div>
              <h3 className="font-heading text-primary fs-2">Inquire About Your Event</h3>
              <p className="text-muted-custom">Share your vision with our events coordinator and receive a detailed proposal within 24 hours.</p>
            </div>

            <form className="contact-form-interactive form-light" onSubmit={handleInquirySubmit}>
              {inquirySuccess && (
                <div className="form-feedback-alert show alert-success-custom mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-accent fs-4"></i>
                    <div>
                      <strong>Message Sent!</strong> Thank you for reaching out to Ember & Olive. Our hospitality team will reply within 24 hours.
                    </div>
                  </div>
                </div>
              )}
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label-custom">Your Name *</label>
                  <input type="text" className="form-control form-control-custom" required placeholder="Priya Sharma" />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Email Address *</label>
                  <input type="email" className="form-control form-control-custom" required placeholder="priya@company.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Phone Number *</label>
                  <input type="tel" className="form-control form-control-custom" required placeholder="+91 98765 43210" />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Event Type</label>
                  <select className="form-select form-select-custom" defaultValue="Private Dinner">
                    <option value="Private Dinner">Private Dinner / Birthday</option>
                    <option value="Corporate Dinner">Corporate Dinner / Board Meeting</option>
                    <option value="Anniversary">Anniversary Celebration</option>
                    <option value="Intimate Wedding">Intimate Wedding Reception</option>
                    <option value="Chef Table">Chef's Table Experience</option>
                    <option value="Full Buyout">Full Restaurant Buyout</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label-custom">Estimated Guests *</label>
                  <input type="number" min="4" max="150" className="form-control form-control-custom" required placeholder="16" />
                </div>
                <div className="col-md-4">
                  <label className="form-label-custom">Desired Date *</label>
                  <input type="date" className="form-control form-control-custom" required defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="col-md-4">
                  <label className="form-label-custom">Desired Venue Space</label>
                  <select className="form-select form-select-custom" defaultValue="Olive Cellar Suite">
                    <option value="Olive Cellar Suite">The Olive Cellar Suite (10-24 guests)</option>
                    <option value="Hearth Counter">The Hearth Counter (up to 8 guests)</option>
                    <option value="Terrace Garden">Terrace Garden Pergola (up to 60 guests)</option>
                    <option value="Full Buyout">Complete Venue Buyout</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label-custom">Event Details & Special Requests</label>
                  <textarea className="form-control form-control-custom" rows={3} placeholder="Tell us about the occasion, dietary preferences, wine pairing interests, or budget requirements..."></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn-custom btn-primary-accent px-5 py-3 fs-6" disabled={inquiryLoading}>
                    {inquiryLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span> Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-1"></i> Submit Event Inquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

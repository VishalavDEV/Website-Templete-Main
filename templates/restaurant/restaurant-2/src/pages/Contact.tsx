import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSuccess(true);
      form.reset();
    }, 900);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container-xl page-hero-content">
          <div className="eyebrow text-accent">GET IN TOUCH</div>
          <h1 className="page-hero-title">Contact & Visit Us</h1>
          <p className="page-hero-subtitle">
            We look forward to welcoming you around our hearth. Reach our reservations concierge or events team.
          </p>
        </div>
      </section>

      {/* Contact Details & Direct Form Section */}
      <section className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="row g-5 mb-5 pb-5 border-bottom border-bone">
            
            {/* Left: Quick Cards */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                
                <div className="contact-info-card">
                  <h3 className="font-heading fs-3 text-primary-dark mb-2">Hospitality Concierge</h3>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                    <div>
                      <h5 className="contact-info-title">Physical Address</h5>
                      <p className="contact-info-desc">28 Garden Avenue, Alwarpet<br />Chennai, Tamil Nadu, 600018</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="bi bi-telephone-fill"></i></div>
                    <div>
                      <h5 className="contact-info-title">Telephone Inquiries</h5>
                      <p className="contact-info-desc">
                        Direct: +91 98765 43210<br />
                        Events Concierge: +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="bi bi-envelope-fill"></i></div>
                    <div>
                      <h5 className="contact-info-title">Email Correspondence</h5>
                      <p className="contact-info-desc">
                        Table Bookings: hello@emberandolive.example<br />
                        Private Gatherings: events@emberandolive.example
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="bi bi-clock-fill"></i></div>
                    <div>
                      <h5 className="contact-info-title">Operating Schedule</h5>
                      <p className="contact-info-desc mb-1"><strong>Mon – Thu:</strong> 11:00 AM – 10:00 PM</p>
                      <p className="contact-info-desc mb-0"><strong>Fri – Sun:</strong> 11:00 AM – 11:30 PM</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right: Message Form */}
            <div className="col-lg-7">
              <div className="p-4 p-lg-5 bg-surface-subtle rounded-4 border border-dark-subtle shadow-sm">
                <h3 className="font-heading fs-3 text-primary mb-2">Send an Inquiry</h3>
                <p className="text-muted-custom mb-4">Have a special question, dietary question, or media inquiry? We respond within 24 hours.</p>
                
                <form className="contact-form-interactive form-light" onSubmit={handleContactSubmit}>
                  {contactSuccess && (
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
                      <input type="text" className="form-control form-control-custom" required placeholder="Siddharth Rao" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Email Address *</label>
                      <input type="email" className="form-control form-control-custom" required placeholder="siddharth@example.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Phone Number</label>
                      <input type="tel" className="form-control form-control-custom" placeholder="+91 98765 43210" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Subject / Topic</label>
                      <select className="form-select form-select-custom" defaultValue="General Inquiry">
                        <option value="General Inquiry">General Dining Inquiry</option>
                        <option value="Private Event">Private Dining & Event Booking</option>
                        <option value="Chef Table">Chef's Hearth Counter</option>
                        <option value="Dietary Question">Dietary & Allergy Details</option>
                        <option value="Press / Media">Press & Media Relations</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label-custom">Your Message *</label>
                      <textarea className="form-control form-control-custom" rows={4} required placeholder="How may our hospitality team assist you?"></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-custom btn-primary-accent w-100 py-3 fs-6" disabled={contactLoading}>
                        {contactLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span> Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-envelope-paper-fill me-1"></i> Send Message to Concierge
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Map & Directions Block */}
          <div className="row g-4 align-items-stretch mb-5 pb-5 border-bottom border-bone">
            <div className="col-lg-12">
              <div className="text-center max-w-700 mx-auto mb-4">
                <div className="eyebrow center-eyebrow">LOCATION & PARKING</div>
                <h3 className="section-title">Getting to Ember & Olive</h3>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="map-placeholder-box" style={{ minHeight: 420 }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9943360447385!2d80.2520!3d13.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzEyLjUiTiA4MMKwMTUnMDcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  title="Ember and Olive Map Location"
                  loading="lazy">
                </iframe>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-4 bg-surface-subtle rounded border border-dark-subtle h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="font-heading fs-4 text-primary mb-3">Arrival Guidelines</h4>
                  <div className="mb-3">
                    <strong className="d-block text-accent small text-uppercase letter-spacing-1 mb-1"><i className="bi bi-car-front me-1"></i> Valet Parking</strong>
                    <p className="small text-muted-custom mb-0">Complimentary valet parking is available directly in front of the restaurant porte-cochère.</p>
                  </div>
                  <div className="mb-3">
                    <strong className="d-block text-accent small text-uppercase letter-spacing-1 mb-1"><i className="bi bi-person-badge me-1"></i> Dress Code</strong>
                    <p className="small text-muted-custom mb-0">Smart casual. We kindly request no beachwear, athletic apparel, or flip-flops in the evening.</p>
                  </div>
                  <div>
                    <strong className="d-block text-accent small text-uppercase letter-spacing-1 mb-1"><i className="bi bi-balloon me-1"></i> Children & Families</strong>
                    <p className="small text-muted-custom mb-0">Well-behaved children of all ages are warmly welcomed. Highchairs available upon request.</p>
                  </div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-custom btn-outline-dark-custom w-100 mt-4">
                  <i className="bi bi-geo-alt me-2"></i>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div className="max-w-800 mx-auto pt-3">
            <div className="text-center mb-4">
              <div className="eyebrow center-eyebrow">HELPFUL INFORMATION</div>
              <h3 className="section-title">Frequently Asked Questions</h3>
            </div>

            <div className="accordion accordion-custom" id="faqAccordion">
              
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                    What is the reservation cancellation policy?
                  </button>
                </h2>
                <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    We kindly request cancellations or party size changes at least 6 hours in advance for standard dining tables, and 48 hours for Private Cellar bookings, so we may offer the table to waiting guests.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                    Can you accommodate severe food allergies and vegan diets?
                  </button>
                </h2>
                <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes, absolutely. Our culinary team accommodates vegetarian, vegan, celiac / gluten-free, dairy-free, and nut-free diets. Please note your allergies during table reservation so Chef Arjun can tailor your courses.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                    What is your corkage policy for personal wines?
                  </button>
                </h2>
                <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Guests may bring up to two 750ml bottles of wine not currently featured on our cellar list. The corkage fee is ₹1,500 per bottle, which includes custom decanting, stemware service, and sommelier pairing guidance.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                    Do you host private events, weddings, or corporate buyouts?
                  </button>
                </h2>
                <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes! We offer The Olive Cellar Suite (10-24 guests), The Terrace Pergola (up to 60 guests), and Full Venue Buyouts (up to 120 guests). Please visit our Events page or contact our Events Concierge directly.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

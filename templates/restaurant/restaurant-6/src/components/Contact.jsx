import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div>
          <span className="section-label"><span className="accent-line"></span>GET IN TOUCH</span>
          <h2 className="contact-title">COME FIND US.</h2>

          <div className="contact-info-list">
            <div className="contact-block">
              <h5>LOCATION</h5>
              <p>42 ECR Coastal Road<br />Kovalam, Chennai 603112<br />Tamil Nadu, India</p>
            </div>

            <div className="contact-block">
              <h5>HOURS</h5>
              <p>Lunch: 12:30 PM – 3:30 PM<br />Dinner: 7:00 PM – 11:30 PM<br />Closed Mondays</p>
            </div>

            <div className="contact-block">
              <h5>PHONE</h5>
              <p><a href="tel:+914487654321">+91 44 8765 4321</a></p>
            </div>

            <div className="contact-block">
              <h5>EMAIL</h5>
              <p><a href="mailto:reservations@lumierechennai.com">reservations@lumierechennai.com</a></p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=East+Coast+Road+Kovalam+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
            data-cursor="MAP"
          >
            <span>VIEW ON MAP</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="contact-img-wrapper">
          <img src="assets/images/story_portrait.jpg" alt="Exterior storefront glow of Lumière restaurant" />
        </div>
      </div>
    </section>
  );
}

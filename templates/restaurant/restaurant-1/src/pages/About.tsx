import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="intro-section" style={{ paddingTop: '12rem' }}>
        <span className="eyebrow-chapter">02 &bull; OUR HOUSE</span>
        <h1 className="font-heading display-2 mb-3">Rooted in Craft.<br />Driven by Season.</h1>
        <p className="intro-paragraph">
          Rooted in the ancient alchemy of wood, flame, and slow unhurried cooking, creating a sanctuary for gatherings and memorable feasts in Chennai.
        </p>
      </section>

      {/* Content Section */}
      <section className="the-house-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Dining Room"
                className="img-fluid rounded border border-secondary border-opacity-25"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="font-heading display-4 mb-3">Heirloom Fire Cooking</h2>
              <p className="fs-5 text-muted mb-4">
                Every dish is born from a deliberate tempo: embers glowing at dawn, heirloom stocks simmering for eighteen hours, and fresh coastal seafood kissed by searing flames.
              </p>
              <Link to="/contact#reservation" className="btn-ember-gold">Reserve Your Table</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

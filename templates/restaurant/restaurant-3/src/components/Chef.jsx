import React from 'react';

export default function Chef() {
  return (
    <section className="chef-section">
      <div className="chef-container">
        <div className="chef-img-wrapper">
          <img src="assets/images/chef.jpg" alt="Executive Chef Maya Fernandes" />
        </div>

        <div className="chef-info-panel">
          <span className="section-label"><span className="accent-line"></span>THE PERSON BEHIND THE PLATE</span>
          <h2 className="chef-name">MAYA FERNANDES</h2>
          <span className="chef-role">EXECUTIVE CHEF</span>
          <p className="chef-bio">
            Having trained across Marseille, San Sebastián, and coastal India, Chef Maya brings an unpretentious approach to sea-to-table cuisine. Her cooking relies on temperature, salt, and fire to unlock the purest essence of coastal seafood.
          </p>
          <blockquote className="chef-quote">
            "Food should taste of the place where it was born—unfiltered, bright, and unforgettable."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

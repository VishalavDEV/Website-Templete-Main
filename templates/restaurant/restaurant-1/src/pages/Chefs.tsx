import React from 'react';

export const Chefs: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="py-5 bg-primary-dark text-center" style={{ paddingTop: '8rem' }}>
        <div className="container py-5">
          <span className="eyebrow eyebrow-light">CULINARY ARTISANS</span>
          <h1 className="display-3 font-heading text-cream mb-3">The Kitchen Leadership</h1>
          <p className="section-subtitle text-muted-light mx-auto" style={{ maxWidth: '650px' }}>
            Driven by deep reverence for open fire chemistry, heirloom regional crops, and modern culinary precision.
          </p>
        </div>
      </section>

      {/* Executive Chef In-Depth Feature */}
      <section className="section-py bg-cream-light">
        <div className="container">
          <div className="chef-feature-box mb-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="chef-portrait-frame">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                    alt="Executive Chef Arjun Rao"
                  />
                  <div className="chef-badge">Executive Chef</div>
                </div>
              </div>
              <div className="col-lg-7">
                <span className="eyebrow">CULINARY VISIONARY</span>
                <h2 className="display-5 font-heading text-primary mb-1">Chef Arjun Rao</h2>
                <p className="text-accent fw-semibold mb-3">Two Decades of International & Heirloom Hearth Craft</p>
                <p className="text-muted-custom fs-6 mb-3">
                  Trained in Lyon and London before returning to his coastal roots in Tamil Nadu, Chef Arjun Rao merges classical culinary discipline with South India's ancestral fire cooking traditions.
                </p>
                <p className="text-muted-custom small mb-4">
                  "We avoid gas torches and shortcut chemical rubs. Everything we build relies upon seasoned wood logs, gentle embers, cold smoke chambers, and the natural sweetness of heirloom harvest produce."
                </p>
                <div className="p-3 bg-white rounded-3 border border-secondary border-opacity-10 mb-4">
                  <h4 className="h6 font-heading text-primary mb-1">Signature Dish Creation</h4>
                  <p className="text-muted-custom small mb-0">Hearth-Smoked 35-Day Ribeye with Bone Marrow Butter and Wild Herb Glaze.</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted-custom small fw-bold text-uppercase">Follow Chef Arjun:</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Brigade */}
          <h3 className="h3 font-heading text-primary mb-4 text-center">Senior Brigade</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-ember h-100 p-4 border-0 shadow-sm text-center">
                <h4 className="h5 font-heading text-primary mb-1">Elena Rostova</h4>
                <span className="text-accent small fw-bold text-uppercase mb-3 d-block">Head Pastry Chef</span>
                <p className="text-muted-custom small">Crafting desserts infused with wood-fire caramelization and local raw honeys.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-ember h-100 p-4 border-0 shadow-sm text-center">
                <h4 className="h5 font-heading text-primary mb-1">Marcus Vance</h4>
                <span className="text-accent small fw-bold text-uppercase mb-3 d-block">Master Sommelier</span>
                <p className="text-muted-custom small">Curating biodynamic cellar reserves to pair seamlessly with smoky hearth profiles.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-ember h-100 p-4 border-0 shadow-sm text-center">
                <h4 className="h5 font-heading text-primary mb-1">Kavita Sundaram</h4>
                <span className="text-accent small fw-bold text-uppercase mb-3 d-block">Sous Chef de Cuisine</span>
                <p className="text-muted-custom small">Leading daily butchery, heritage grain fermentations, and seasonal farm relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;

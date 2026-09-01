import React from 'react';

export const Menu: React.FC = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="intro-section" style={{ paddingTop: '12rem' }}>
        <span className="eyebrow-chapter">03 &bull; THE MENU</span>
        <h1 className="font-heading display-2 mb-3">Seasonal Offerings</h1>
        <p className="intro-paragraph">
          Every dish is born from a deliberate tempo: embers glowing at dawn, heirloom stocks simmering for eighteen hours, and fresh coastal harvests.
        </p>
      </section>

      {/* Menu Content Section */}
      <section className="dishes-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="dish-editorial-card">
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop"
                  alt="Charred Garlic Prawns"
                  className="dish-card-img"
                />
                <span className="eyebrow eyebrow-gold mb-1">STARTER</span>
                <div className="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 className="dish-card-title">CHARRED GARLIC PRAWNS</h3>
                  <span className="dish-card-price">₹680</span>
                </div>
                <p className="small text-muted mb-0">
                  Lemon wood-smoked butter, wild parsley oil, Himalayan pink salt, grilled sourdough
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="dish-editorial-card">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
                  alt="Slow-Ember Prime Ribeye"
                  className="dish-card-img"
                />
                <span className="eyebrow eyebrow-gold mb-1">MAIN</span>
                <div className="d-flex justify-content-between align-items-baseline mb-2">
                  <h3 className="dish-card-title">SLOW-EMBER PRIME RIBEYE</h3>
                  <span className="dish-card-price">₹1,450</span>
                </div>
                <p className="small text-muted mb-0">
                  Aged 35 days, smoked bone marrow butter, roasted shallots
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

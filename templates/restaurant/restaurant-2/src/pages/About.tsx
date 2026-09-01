import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container-xl page-hero-content">
          <div className="eyebrow text-accent">OUR HERITAGE</div>
          <h1 className="page-hero-title">The Story of Ember & Olive</h1>
          <p className="page-hero-subtitle">
            Born from a passion for ancestral firecraft, pristine seasonal harvests, and the timeless joy of shared meals.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section-spacing bg-surface">
        <div className="container-xl">
          <div className="row align-items-center g-4 g-lg-5 mb-5 pb-5 border-bottom border-bone">
            
            {/* Left Side: Editorial Image Composition */}
            <div className="col-lg-6">
              <div className="about-editorial-wrap reveal-right">
                
                <div className="about-main-img-box image-reveal">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85" alt="Restaurant Interior Hearth" className="about-img-primary" loading="eager" fetchPriority="high" />
                </div>
                
                <div className="about-secondary-img-box image-reveal image-reveal-left">
                  <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=650&q=85" alt="Live Flame Cooking" className="about-img-secondary" loading="eager" />
                </div>
                
                <div className="about-heritage-card scale-reveal">
                  <div className="heritage-year">2012</div>
                  <div className="heritage-divider"></div>
                  <div className="heritage-text">CRAFTED<br />HERITAGE</div>
                </div>

              </div>
            </div>

            {/* Right Side: Story Content */}
            <div className="col-lg-6">
              <div className="about-story-content ps-lg-3 reveal-left">
                <div className="eyebrow">OUR BEGINNINGS</div>
                <h2 className="section-title text-reveal">
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner">Where Smoke Meets</span>
                  </span>
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner">Seasonality</span>
                  </span>
                </h2>
                <p className="about-lead-paragraph">
                  Ember & Olive was founded in 2012 by Executive Chef Arjun Mehta with a distinct conviction: when cooking ingredients of exceptional provenance, the chef's duty is not to mask them, but to reveal their soul.
                </p>
                <p className="about-secondary-paragraph">
                  We built our custom brick and stone hearth right at the center of the dining room. Every morning, dried olive wood and pruned orchard logs are lit by hand. The radiant heat, gentle smoke, and slow-roasting coals imbue each cut of seafood, pasture-raised lamb, and heirloom root vegetable with an irreplaceable terroir.
                </p>
                <p className="about-secondary-paragraph">
                  Over the last decade, our dining room has blossomed into a beloved sanctuary for food lovers, wine collectors, and families celebrating their most cherished moments.
                </p>
              </div>
            </div>

          </div>

          {/* Sourcing & Farm Partners */}
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow">ETHICAL GASTRONOMY</div>
            <h2 className="section-title">Rooted in Our Land & Sea</h2>
            <p className="section-desc text-muted-custom">
              Over 85% of our daily produce, flour, cheeses, and seafood are sourced directly from trusted organic family farms and certified artisanal producers within 150 miles.
            </p>
          </div>

          <div className="row g-4 mb-5 pb-5 border-bottom border-bone">
            
            {/* Partner 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-surface-subtle rounded border border-dark-subtle h-100 reveal-fade-up">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="contact-info-icon"><i className="bi bi-tree-fill"></i></div>
                  <div>
                    <h4 className="font-heading fs-5 mb-0 text-primary">Valley View Organic Orchards</h4>
                    <small className="text-accent">Nilgiri Foothills · Produce Partner</small>
                  </div>
                </div>
                <p className="small text-muted-custom mb-0">
                  Supplying our heirloom tomatoes, wild mountain honey, aromatic Meyer lemons, and cold-pressed extra virgin olive oils harvested from century-old groves.
                </p>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-surface-subtle rounded border border-dark-subtle h-100 reveal-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="contact-info-icon"><i className="bi bi-water"></i></div>
                  <div>
                    <h4 className="font-heading fs-5 mb-0 text-primary">Coromandel Dayboat Catch</h4>
                    <small className="text-accent">Coastal Fishery Cooperative</small>
                  </div>
                </div>
                <p className="small text-muted-custom mb-0">
                  Line-caught wild sea bass, ocean tiger prawns, and dive-harvested scallops delivered directly to our kitchen within 6 hours of docking.
                </p>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="col-md-4">
              <div className="p-4 bg-surface-subtle rounded border border-dark-subtle h-100 reveal-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="contact-info-icon"><i className="bi bi-flower2"></i></div>
                  <div>
                    <h4 className="font-heading fs-5 mb-0 text-primary">Kodaikanal Artisan Dairy</h4>
                    <small className="text-accent">Pasture-Raised Buffalo & Sheep</small>
                  </div>
                </div>
                <p className="small text-muted-custom mb-0">
                  Crafting our daily buffalo mozzarella, aged mountain pecorino, and fresh ricotta used in our handmade agnolotti and savory starters.
                </p>
              </div>
            </div>

          </div>

          {/* Sustainability & Zero-Waste Ethos */}
          <div className="row align-items-center g-5 py-4">
            <div className="col-lg-6 order-lg-2">
              <div className="chef-portrait-wrap reveal-fade-left">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80" alt="Fresh Organic Produce" className="chef-portrait-img" style={{ aspectRatio: '16/11' }} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="reveal-fade-right">
                <div className="eyebrow">OUR PROMISE</div>
                <h2 className="section-title">Zero-Waste & Closed-Loop Kitchen</h2>
                <p className="mb-3 text-muted-custom">
                  We operate under a rigorous closed-loop culinary system. Organic kitchen trimmings are composted and returned to our partner farms as natural fertilizer. Whole animal butchery ensures every cut is honored through curing, braising, or bone reductions.
                </p>
                <ul className="list-unstyled d-flex flex-column gap-2 text-muted-custom mb-4">
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> 100% sustainably harvested olive & orchard wood for our hearth</li>
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> Single-use plastic completely eliminated across kitchen & cellar</li>
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> Seasonal menus updated bi-weekly to reflect immediate micro-harvests</li>
                </ul>
                <Link to="/menu" className="btn-custom btn-primary-accent">Explore Today's Menu</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

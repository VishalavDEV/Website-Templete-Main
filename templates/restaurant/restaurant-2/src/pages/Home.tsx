import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dish } from '../types';
import { SignatureDishModal } from '../components/SignatureDishModal';

export const Home: React.FC = () => {
  // Testimonial Carousel State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      stars: '★★★★★',
      quote: '"Ember & Olive represents the finest expression of wood-fired gastronomy in the country. The wild prawns and duck breast were sublime, accompanied by intuitive, heartfelt service."',
      author: 'Kavita Swaminathan',
      meta: 'Food Critic & Columnist · Chennai'
    },
    {
      stars: '★★★★★',
      quote: '"We hosted our 10th wedding anniversary in the Olive Cellar. From Chef Arjun\'s wine pairings to the candlelit ambiance, every moment was pure magic. Our guests are still raving."',
      author: 'Rohan & Ananya Roy',
      meta: 'Private Dining Guests · Bengaluru'
    },
    {
      stars: '★★★★★',
      quote: '"The depth of flavor they achieve through heritage olive wood coals is astonishing. You can taste the authenticity of the local farmers and the care in every single plate."',
      author: 'Marcus Sterling',
      meta: 'Gastronomy Enthusiast · London'
    },
    {
      stars: '★★★★★',
      quote: '"The Truffled Agnolotti and the Smoked Olive Oil Torte are culinary perfection. Ember & Olive has set an entirely new benchmark for artisan hospitality."',
      author: 'Deepika Pillai',
      meta: 'Culinary Explorer · Mumbai'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Menu Category Filter State
  const [activeCategory, setActiveCategory] = useState('all');

  // Selected Dish for Modal
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const openDishModal = (dish: Dish) => {
    setSelectedDish(dish);
    if ((window as any).bootstrap && (window as any).bootstrap.Modal) {
      const modalEl = document.getElementById('signatureDishModal');
      if (modalEl) {
        const bsModal = new (window as any).bootstrap.Modal(modalEl);
        bsModal.show();
      }
    }
  };

  // Reservation Form Handling
  const [resFormSuccess, setResFormSuccess] = useState<string | null>(null);
  const [resFormLoading, setResFormLoading] = useState(false);

  const handleReservationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const name = (formData.get('guest_name') as string) || 'Guest';
    const date = (formData.get('reservation_date') as string) || 'Today';
    const time = (formData.get('reservation_time') as string) || '7:30 PM';
    const guests = (formData.get('guests_count') as string) || '2';

    setResFormLoading(true);
    setTimeout(() => {
      setResFormLoading(false);
      setResFormSuccess(`Thank you, ${name}! Your reservation for ${guests} on ${date} at ${time} has been received. A confirmation has been sent to your email.`);
      form.reset();
    }, 1000);
  };

  const menuItems = [
    {
      id: 1,
      category: 'starters',
      dietary: 'vegetarian gluten-free',
      title: 'Ember Smoked Beets',
      price: '₹420',
      desc: 'Salt-baked golden and red beets, whipped goat curd, candied walnuts, aged sherry vinaigrette.',
      tags: ['Vegetarian', 'Gluten-Free'],
      badge: 'Starter',
      ingredients: 'Organic heirloom beets, Chevre goat cheese, California walnuts, wild microgreens.',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      category: 'seafood',
      dietary: 'signature gluten-free',
      title: 'Wood-Fired Prawns',
      price: '₹620',
      desc: 'Charred over glowing olive embers, garlic butter emulsion, burnt lemon, fresh garden herbs.',
      tags: ['Signature', 'Gluten-Free'],
      badge: 'Chef Signature',
      badgeClass: 'badge-signature',
      ingredients: 'Wild ocean tiger prawns, roasted garlic butter, oregano blossoms, cold-pressed olive oil.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      category: 'mains',
      dietary: 'signature',
      title: 'Slow-Braised Lamb Shank',
      price: '₹890',
      desc: '12-hour simmered in red wine bone reduction, creamy polenta, gremolata, glazed baby carrots.',
      tags: ['Slow Cooked', 'Farm Sourced'],
      badge: 'Main',
      ingredients: 'Free-range pasture lamb, Chianti wine reduction, stoneground yellow polenta, lemon zest.',
      img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      category: 'vegetarian',
      dietary: 'vegetarian',
      title: 'Truffled Ricotta Agnolotti',
      price: '₹580',
      desc: 'Hand-folded pasta filled with house buffalo ricotta, black winter truffle butter, toasted hazelnuts.',
      tags: ['Vegetarian', 'Artisan Pasta'],
      badge: 'Handmade',
      ingredients: 'Organic semolina pasta, buffalo ricotta, black truffle paste, sage brown butter, Parmigiano.',
      img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      category: 'seafood',
      dietary: 'gluten-free',
      title: 'Pan-Seared Salmon',
      price: '₹760',
      desc: 'Crispy skin salmon filet, charred broccolini, dill hollandaise, caper berry confit.',
      tags: ['Wild Harvest', 'Gluten-Free'],
      badge: 'Seafood',
      ingredients: 'Sustainable Atlantic salmon, organic broccolini, fresh dill, brown butter hollandaise.',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      category: 'desserts',
      dietary: 'vegetarian',
      title: 'Smoked Olive Oil Torte',
      price: '₹390',
      desc: '70% Valrhona dark chocolate cake, single-estate olive oil ganache, sea salt flakes, espresso gelato.',
      tags: ['Vegetarian', 'House Favorite'],
      badge: 'Signature Sweet',
      badgeClass: 'badge-signature',
      ingredients: 'Valrhona dark chocolate, cold-pressed Tuscan olive oil, Maldon sea salt, Madagascar vanilla gelato.',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      category: 'drinks',
      dietary: 'beverage',
      title: 'Ember Old Fashioned',
      price: '₹450',
      desc: 'Small-batch bourbon, flamed rosemary sprig, spiced orange bitters, charred cherry syrup.',
      tags: ['Handcrafted', 'Signature Bar'],
      badge: 'Cocktail',
      ingredients: 'Bourbon whiskey, Angostura bitters, flamed rosemary, brandied cherry, clear block ice.',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      category: 'starters',
      dietary: 'vegetarian',
      title: 'Wood-Fired Tartine',
      price: '₹360',
      desc: 'House sourdough bread charred on grill, whipped feta, confit baby tomatoes, pickled shallots.',
      tags: ['Vegetarian'],
      badge: 'Starter',
      ingredients: 'Wild yeast sourdough, organic sheep feta, confit cherry tomatoes, fresh oregano blossoms.',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      category: 'drinks',
      dietary: 'beverage',
      title: 'Tuscan Reserve Sangiovese',
      price: '₹650',
      desc: 'Notes of black cherry, leather, and dried violets with subtle oak spice and velvety tannins.',
      tags: ['Organic Vineyard', '2018 Vintage'],
      badge: 'Sommelier Pick',
      ingredients: 'Estate-grown Sangiovese grapes, aged 24 months in French oak barrels.',
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredMenuItems = menuItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      {/* 2. HERO SECTION */}
      <section id="hero" className="hero-section">
        <div className="container-xl hero-container">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Column: Text & CTAs & Compact Reservation */}
            <div className="col-lg-5 col-xl-5">
              <div className="hero-text-content">
                
                <div className="hero-eyebrow reveal-up">
                  <span className="hero-eyebrow-pill"><i className="bi bi-fire text-accent"></i> FROM FIRE TO TABLE</span>
                </div>

                <h1 className="hero-heading text-reveal">
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner">Gather Around</span>
                  </span>
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner"><em>Something Extraordinary</em></span>
                  </span>
                </h1>

                <p className="hero-description reveal-up">
                  Seasonal ingredients, thoughtful cooking and warm hospitality come together around every table.
                </p>

                {/* Buttons */}
                <div className="hero-cta-group reveal-up">
                  <Link to="/menu" className="btn-custom btn-hero-primary" id="heroMenuBtn">
                    <span>Explore Menu</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <a href="#reservation" className="btn-custom btn-hero-secondary" id="heroReserveBtn">
                    <span>Reserve a Table</span>
                  </a>
                </div>

                {/* Compact Glassmorphism Reservation Micro UI */}
                <div className="hero-reservation-bar reveal-up">
                  <form className="hero-res-form reservation-form-interactive" onSubmit={handleReservationSubmit}>
                    <div className="hero-res-field">
                      <label htmlFor="heroResDate"><i className="bi bi-calendar3"></i> Date</label>
                      <input type="date" id="heroResDate" name="reservation_date" className="hero-res-input" required defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="hero-res-divider"></div>
                    <div className="hero-res-field">
                      <label htmlFor="heroResTime"><i className="bi bi-clock"></i> Time</label>
                      <select id="heroResTime" name="reservation_time" className="hero-res-select" defaultValue="7:30 PM">
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                      </select>
                    </div>
                    <div className="hero-res-divider"></div>
                    <div className="hero-res-field">
                      <label htmlFor="heroResGuests"><i className="bi bi-people"></i> Guests</label>
                      <select id="heroResGuests" name="guests_count" className="hero-res-select" defaultValue="2">
                        <option value="1">1 Person</option>
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8+">8+ Guests</option>
                      </select>
                    </div>
                    <button type="submit" className="hero-res-submit-btn" aria-label="Check Availability">
                      <span>Check Availability</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>
                </div>

              </div>
            </div>

            {/* Right Column: Large Food Image Showcase */}
            <div className="col-lg-7 col-xl-7">
              <div className="hero-media-wrapper image-reveal">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=90" alt="Wood-Fired Hearth Cooking & Fresh Ingredients" className="hero-media-img" loading="eager" fetchPriority="high" />
                <div className="hero-media-overlay"></div>
                
                {/* Floating Artisan Badge Overlay */}
                <div className="hero-image-badge">
                  <div className="badge-icon"><i className="bi bi-fire"></i></div>
                  <div>
                    <div className="badge-title">Wood-Fired Hearth</div>
                    <div className="badge-sub">Daily Local Farm Sourced</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down to explore">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </a>
      </section>

      {/* 3. ABOUT / EDITORIAL STORY SECTION */}
      <section id="about" className="section-spacing bg-surface">
        <div className="container-xl">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Side: Editorial Image Composition */}
            <div className="col-lg-6">
              <div className="about-editorial-wrap reveal-right">
                
                <div className="about-main-img-box image-reveal">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85" alt="Ember and Olive Artisan Kitchen" className="about-img-primary" loading="eager" fetchPriority="high" />
                </div>
                
                <div className="about-secondary-img-box image-reveal image-reveal-left">
                  <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=650&q=85" alt="Wood-fired Charred Heirloom Dish" className="about-img-secondary" loading="eager" />
                </div>
                
                <div className="about-heritage-card scale-reveal">
                  <div className="heritage-year">2012</div>
                  <div className="heritage-divider"></div>
                  <div className="heritage-text">CRAFTED<br />HERITAGE</div>
                </div>

              </div>
            </div>

            {/* Right Side: Story Content & Typography */}
            <div className="col-lg-6">
              <div className="about-story-content ps-lg-3 reveal-left">
                
                <div className="eyebrow">OUR CULINARY ETHOS</div>
                <h2 className="section-title text-reveal">
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner">Rooted in Seasonality,</span>
                  </span>
                  <span className="text-reveal-mask">
                    <span className="text-reveal-inner">Fired by Passion</span>
                  </span>
                </h2>
                
                <p className="about-lead-paragraph">
                  At Ember & Olive, we believe that extraordinary food begins with an uncompromising reverence for the harvest and the transformative alchemy of fire.
                </p>
                
                <p className="about-secondary-paragraph">
                  Founded in 2012, our dining room was built on a simple philosophy: honor local organic farmers, butcher whole animals with craft, and let ancestral wood-fired techniques draw out the profound, natural flavors of each seasonal ingredient.
                </p>

                {/* Integrated Equal-Width Statistics Row */}
                <div className="about-stats-row stats-container-trigger stagger-container">
                  <div className="stat-item stagger-item">
                    <div className="stat-number" data-target="14" data-suffix="+">14+</div>
                    <div className="stat-label">Years of Craft</div>
                  </div>
                  <div className="stat-item stagger-item">
                    <div className="stat-number" data-target="32" data-suffix="">32</div>
                    <div className="stat-label">Signature Dishes</div>
                  </div>
                  <div className="stat-item stagger-item">
                    <div className="stat-number" data-target="20" data-suffix="+">20+</div>
                    <div className="stat-label">Local Growers</div>
                  </div>
                </div>

                {/* Chef Snippet */}
                <div className="d-flex flex-wrap align-items-center gap-4 pt-1">
                  <Link to="/about" className="btn-custom btn-dark-solid" id="aboutDiscoverStoryBtn">
                    <span>Discover Our Story</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <div className="d-flex align-items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=120&q=80" alt="Chef Arjun Mehta Portrait" className="rounded-circle" style={{ width: 48, height: 48, objectFit: 'cover', border: '2px solid var(--color-accent)' }} />
                    <div>
                      <h6 className="mb-0 font-heading text-primary-dark">Arjun Mehta</h6>
                      <small className="text-muted-custom">Executive Chef & Founder</small>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED SIGNATURE DISHES */}
      <section id="signature" className="section-spacing bg-surface-subtle border-top border-bottom border-bone">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-up">
            <div className="eyebrow center-eyebrow">CHEF'S SPOTLIGHT</div>
            <h2 className="section-title text-reveal">
              <span className="text-reveal-mask">
                <span className="text-reveal-inner">Signature Creations from the Hearth</span>
              </span>
            </h2>
            <p className="section-desc text-muted-custom">
              Iconic dishes shaped by open flame, coastal harvests, and time-honored slow reduction methods.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            
            {/* Large Primary Feature Dish */}
            <div className="col-lg-6">
              <div className="signature-hero-card reveal-fade-right">
                <div className="signature-hero-media">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80" alt="Wood-Fired Wild Prawns with Charred Lemon" className="signature-hero-img" />
                  <span className="menu-item-badge badge-signature">Chef's Masterpiece</span>
                </div>
                <div className="signature-hero-body">
                  <div className="d-flex justify-content-between align-items-baseline mb-2">
                    <h3 className="signature-hero-title mb-0">Wood-Fired Wild Prawns</h3>
                    <span className="signature-hero-price">₹620</span>
                  </div>
                  <p className="text-bone opacity-85 mb-3">
                    Jumbo ocean prawns seared over olive wood embers, basted in roasted garlic emulsion, cold-pressed olive oil, charred Meyer lemon, and fresh oregano blossoms.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-dark-subtle">
                    <span className="small text-accent"><i className="bi bi-droplet me-1"></i> Smoked Butter & Charred Herb Jus</span>
                    <button 
                      type="button" 
                      className="btn-text-link btn-discover-dish text-bone" 
                      onClick={() => openDishModal({
                        title: "Wood-Fired Wild Prawns",
                        price: "₹620",
                        desc: "Jumbo ocean prawns seared over olive wood embers, basted in roasted garlic emulsion, cold-pressed olive oil, charred Meyer lemon, and fresh oregano blossoms.",
                        ingredients: "Wild ocean prawns, Meyer lemon, garlic butter, fresh oregano, sea salt crystals, cold-pressed olive oil.",
                        pairing: "Vermentino di Sardegna or Crisp Sauvignon Blanc",
                        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                      })}
                    >
                      <span>Discover Dish</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Secondary Signature Dishes */}
            <div className="col-lg-6 d-flex flex-column gap-3">
              
              {/* Mini Card 1 */}
              <div className="signature-mini-card reveal-fade-left">
                <div className="signature-mini-img-wrap">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Slow-Smoked Duck Breast" className="signature-mini-img" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h4 className="signature-mini-title text-primary-dark">Oak-Smoked Duck Breast</h4>
                    <span className="signature-mini-price">₹790</span>
                  </div>
                  <p className="small text-muted-custom mb-2">Parsnip silk puree, spiced sour cherry reduction, roasted shallots, crispy thyme.</p>
                  <button 
                    type="button" 
                    className="btn-text-link p-0 border-0 bg-transparent btn-discover-dish" 
                    onClick={() => openDishModal({
                      title: "Oak-Smoked Duck Breast",
                      price: "₹790",
                      desc: "Aged duck breast smoked over French oak, paired with velvety parsnip puree and sweet-tart sour cherry glaze.",
                      ingredients: "Aged organic duck, sweet parsnips, tart Morello cherries, port wine, shallots, garden thyme.",
                      pairing: "Pinot Noir Burgundy or Reserve Syrah",
                      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                    })}
                  >
                    <span>Discover Dish <i className="bi bi-chevron-right small"></i></span>
                  </button>
                </div>
              </div>

              {/* Mini Card 2 */}
              <div className="signature-mini-card reveal-fade-left" style={{ animationDelay: '0.1s' }}>
                <div className="signature-mini-img-wrap">
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" alt="Charred Burrata with Heirloom Tomatoes" className="signature-mini-img" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h4 className="signature-mini-title text-primary-dark">Charred Artisan Burrata</h4>
                    <span className="signature-mini-price">₹480</span>
                  </div>
                  <p className="small text-muted-custom mb-2">Heritage heirloom tomatoes, balsamic pearls, cold-pressed olive drizzle, sourdough crisp.</p>
                  <button 
                    type="button" 
                    className="btn-text-link p-0 border-0 bg-transparent btn-discover-dish" 
                    onClick={() => openDishModal({
                      title: "Charred Artisan Burrata",
                      price: "₹480",
                      desc: "Fresh creamy burrata lightly torched, served over multicolor heritage tomatoes with aged Modena balsamic vinegar.",
                      ingredients: "Artisan artisanal burrata, heirloom tomatoes, aged balsamic 12-yr, fresh basil, sourdough wafers.",
                      pairing: "Prosecco Superiore or Dry Rosé",
                      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                    })}
                  >
                    <span>Discover Dish <i className="bi bi-chevron-right small"></i></span>
                  </button>
                </div>
              </div>

              {/* Mini Card 3 */}
              <div className="signature-mini-card reveal-fade-left" style={{ animationDelay: '0.2s' }}>
                <div className="signature-mini-img-wrap">
                  <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" alt="Roasted Wild Sea Bass" className="signature-mini-img" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h4 className="signature-mini-title text-primary-dark">Wood-Roasted Sea Bass</h4>
                    <span className="signature-mini-price">₹850</span>
                  </div>
                  <p className="small text-muted-custom mb-2">Crushed fingerling potatoes, saffron velouté, charred baby fennel, herb oil.</p>
                  <button 
                    type="button" 
                    className="btn-text-link p-0 border-0 bg-transparent btn-discover-dish" 
                    onClick={() => openDishModal({
                      title: "Wood-Roasted Sea Bass",
                      price: "₹850",
                      desc: "Line-caught sea bass roasted on cedar planks over glowing coals, finished with saffron cream and fennel.",
                      ingredients: "Fresh line-caught sea bass, saffron threads, baby fennel bulb, fingerling potatoes, chive oil.",
                      pairing: "Oaked Chardonnay or Chablis",
                      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                    })}
                  >
                    <span>Discover Dish <i className="bi bi-chevron-right small"></i></span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. FULL CATEGORIZED SEASONAL MENU */}
      <section id="menu" className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-4 reveal-fade-up">
            <div className="eyebrow center-eyebrow">OUR CULINARY REPERTOIRE</div>
            <h2 className="section-title">Seasonal Autumn / Winter Menu</h2>
            <p className="section-desc text-muted-custom">
              Carefully composed dishes combining ancient wood-fire traditions with contemporary coastal gastronomy.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="menu-filter-nav reveal-fade-up">
            <button type="button" className={`menu-filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Dishes</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'starters' ? 'active' : ''}`} onClick={() => setActiveCategory('starters')}>Starters</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'mains' ? 'active' : ''}`} onClick={() => setActiveCategory('mains')}>Mains</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'seafood' ? 'active' : ''}`} onClick={() => setActiveCategory('seafood')}>Seafood</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'vegetarian' ? 'active' : ''}`} onClick={() => setActiveCategory('vegetarian')}>Vegetarian</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'desserts' ? 'active' : ''}`} onClick={() => setActiveCategory('desserts')}>Desserts</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'drinks' ? 'active' : ''}`} onClick={() => setActiveCategory('drinks')}>Drinks & Wine</button>
          </div>

          {/* Menu Grid */}
          <div className="row g-4" id="menuItemsContainer">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 menu-item-wrapper" data-category={item.category} data-dietary={item.dietary}>
                <div className="menu-item-card">
                  <div className="menu-item-image-wrap">
                    <img src={item.img} alt={item.title} className="menu-item-img" />
                    <span className={`menu-item-badge ${item.badgeClass || ''}`}>{item.badge}</span>
                  </div>
                  <div className="menu-item-header">
                    <h3 className="menu-item-title">{item.title}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                  <div className="dietary-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="diet-tag">
                        {tag.includes('Vegetarian') && <i className="bi bi-flower1 me-1"></i>}
                        {tag.includes('Signature') && <i className="bi bi-award me-1"></i>}
                        {tag.includes('Handcrafted') && <i className="bi bi-cup-straw me-1"></i>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="menu-item-ingredients">{item.ingredients}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Full Menu Link */}
          <div className="text-center mt-5">
            <Link to="/menu" className="btn-custom btn-primary-accent px-5 py-3">
              <span>View Complete Dining & Wine Menu</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. EXECUTIVE CHEF & CULINARY MASTERS */}
      <section id="chef" className="section-spacing bg-surface-subtle border-top border-bone">
        <div className="container-xl">
          
          <div className="row align-items-center g-5 mb-5 pb-4">
            <div className="col-lg-5">
              <div className="chef-portrait-wrap reveal-fade-right">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=85" alt="Executive Chef Arjun Mehta" className="chef-portrait-img" />
                <div className="chef-badge-quote">
                  <p>"Fire is not merely heat; it is an ingredient. It brings humility, honesty, and depth to everything we prepare."</p>
                  <small className="text-accent">— Chef Arjun Mehta</small>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="ps-lg-4 reveal-fade-left">
                <div className="eyebrow">THE CULINARY VISION</div>
                <h2 className="section-title">Meet Executive Chef Arjun Mehta</h2>
                
                <p className="lead mb-3">
                  With over eighteen years of culinary exploration across coastal India, the Mediterranean, and wood-fired kitchens in Northern Europe, Chef Arjun brings a deeply evocative culinary voice to Ember & Olive.
                </p>

                <p className="mb-4">
                  Trained under Michelin-starred masters in San Sebastián and Lyon, he returned to establish Ember & Olive with a clear vision: eliminating culinary artifice to showcase pristine seasonal produce through primitive firecraft and modern restraint.
                </p>

                <div className="p-3 bg-surface-subtle rounded border border-dark-subtle mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-award-fill text-accent fs-3"></i>
                    <div>
                      <h6 className="mb-0 font-heading text-primary">Culinary Accolades & Philosophy</h6>
                      <p className="small text-muted-custom mb-0">Awarded Best Regional Tasting Menu 2024 · Advocate of Zero-Waste Kitchens</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <Link to="/about" className="btn-custom btn-dark-solid">
                    <span>Explore Culinary Story</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <div className="d-flex gap-2">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Chef Arjun Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Chef Arjun LinkedIn"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Culinary Team Grid */}
          <div className="row g-4 pt-4 border-top border-bone">
            <div className="col-12 text-center mb-2">
              <h3 className="font-heading fs-2">The Artisan Team</h3>
              <p className="text-muted-custom">The skilled professionals orchestrating every detail of your dining experience.</p>
            </div>

            <div className="col-md-4">
              <div className="team-member-card reveal-fade-up">
                <div className="team-member-img-wrap">
                  <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80" alt="Head Pastry Chef Maya Sen" className="team-member-img" />
                </div>
                <div className="team-member-body">
                  <h4 className="team-member-name text-primary-dark">Maya Sen</h4>
                  <div className="team-member-role">Head Pastry Chef</div>
                  <p className="small text-muted-custom">Specializing in botanical infusions, smoked honey caramels, and sourdough-based desserts.</p>
                  <div className="team-social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Maya Sen Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Maya Sen LinkedIn"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-member-card reveal-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="team-member-img-wrap">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Head Sommelier David Vance" className="team-member-img" />
                </div>
                <div className="team-member-body">
                  <h4 className="team-member-name text-primary-dark">David Vance</h4>
                  <div className="team-member-role">Head Sommelier & Cellar Master</div>
                  <p className="small text-muted-custom">Curating our 400-bottle cellar with a focus on low-intervention, biodynamic Mediterranean vineyards.</p>
                  <div className="team-social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="David Vance Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="David Vance LinkedIn"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-member-card reveal-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="team-member-img-wrap">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="General Manager Priya Raman" className="team-member-img" />
                </div>
                <div className="team-member-body">
                  <h4 className="team-member-name text-primary-dark">Priya Raman</h4>
                  <div className="team-member-role">General Manager & Guest Concierge</div>
                  <p className="small text-muted-custom">Ensuring seamless warmth, intuitive service, and bespoke dining coordination for all guests.</p>
                  <div className="team-social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Priya Raman Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label="Priya Raman LinkedIn"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. EVENTS & CELEBRATION PACKAGES */}
      <section id="events" className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow">EXCLUSIVE EXPERIENCES</div>
            <h2 className="section-title">Private Dining & Seasonal Gatherings</h2>
            <p className="section-desc text-muted-custom">
              From intimate celebratory dinners in our subterranean wine vault to multi-course Chef's table tastings.
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="event-card reveal-fade-up">
                <div className="event-card-media">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80" alt="The Olive Vault Private Dining Room" className="event-card-img" />
                  <span className="event-tag">Up to 24 Guests</span>
                </div>
                <div className="event-card-body">
                  <h3 className="event-card-title text-primary-dark">The Olive Cellar Suite</h3>
                  <div className="event-meta">
                    <span><i class="bi bi-door-open"></i> Private Dining Room</span>
                  </div>
                  <p className="text-muted-custom mb-4 flex-grow-1">
                    A secluded acoustic sanctuary wrapped in exposed reclaimed brick and reserve wine racks. Dedicated sommelier and custom 5-course menu.
                  </p>
                  <Link to="/events" className="btn-custom btn-outline-dark-custom w-100">
                    <span>Explore Room & Inquire</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="event-card reveal-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="event-card-media">
                  <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=80" alt="Chef Arjun Interactive Hearth Experience" className="event-card-img" />
                  <span className="event-tag">Only 8 Seats / Night</span>
                </div>
                <div className="event-card-body">
                  <h3 className="event-card-title text-primary-dark">The Hearth Chef's Table</h3>
                  <div className="event-meta">
                    <span><i class="bi bi-fire"></i> Live Fire Counter</span>
                  </div>
                  <p className="text-muted-custom mb-4 flex-grow-1">
                    An immersive 9-course journey seated directly at the hearth counter. Watch Chef Arjun curate each dish with paired estate vintage wines.
                  </p>
                  <Link to="/events" className="btn-custom btn-primary-accent w-100">
                    <span>Reserve Chef's Table</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="event-card reveal-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="event-card-media">
                  <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80" alt="Terrace Garden Celebrations" className="event-card-img" />
                  <span className="event-tag">Up to 60 Guests</span>
                </div>
                <div className="event-card-body">
                  <h3 className="event-card-title text-primary-dark">Terrace Garden Receptions</h3>
                  <div className="event-meta">
                    <span><i class="bi bi-brightness-high"></i> Open-Air Pergola</span>
                  </div>
                  <p className="text-muted-custom mb-4 flex-grow-1">
                    Surrounded by fragrant herb beds, olive trees, and string lights. Ideal for milestone birthdays, corporate dinners, and intimate weddings.
                  </p>
                  <Link to="/events" className="btn-custom btn-outline-dark-custom w-100">
                    <span>View Event Packages</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. EDITORIAL TESTIMONIALS CAROUSEL */}
      <section id="testimonials" className="testimonial-section-wrap section-spacing">
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow text-accent">WORDS FROM OUR GUESTS</div>
            <h2 className="section-title text-white">An Unforgettable Culinary Journey</h2>
          </div>

          <div className="testimonial-carousel-container">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className={`testimonial-slide ${idx === currentTestimonialIndex ? 'active' : ''}`}
                style={{ display: idx === currentTestimonialIndex ? 'block' : 'none' }}
              >
                <div className="testimonial-card-editorial">
                  <div className="testimonial-stars">{t.stars}</div>
                  <p className="testimonial-quote-text">{t.quote}</p>
                  <div className="testimonial-author-name">{t.author}</div>
                  <div className="testimonial-author-meta">{t.meta}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-nav-btns">
            <button 
              type="button" 
              className="testimonial-ctrl-btn testimonial-prev" 
              aria-label="Previous testimonial"
              onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonial-dot ${idx === currentTestimonialIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                />
              ))}
            </div>
            <button 
              type="button" 
              className="testimonial-ctrl-btn testimonial-next" 
              aria-label="Next testimonial"
              onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

        </div>
      </section>

      {/* 9. ASYMMETRIC MASONRY GALLERY */}
      <section id="gallery" className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow">ATMOSPHERE & CRAFT</div>
            <h2 className="section-title">Visual Glimpses of Ember & Olive</h2>
            <p className="section-desc text-muted-custom">
              Step inside our dining room, witness our open-hearth kitchen, and explore our cellar treasures.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item gallery-item-span-8 reveal-fade-up" data-full-img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" alt="Main Dining Room Ambiance" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">The Main Hearth Dining Room</h4>
                <span className="gallery-item-category">Atmosphere & Interior</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-4 reveal-fade-up" style={{ animationDelay: '0.1s' }} data-full-img="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" alt="Wood-Fired Wild Prawns Plating" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">Wood-Fired Prawns</h4>
                <span className="gallery-item-category">Culinary Masterpiece</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-4 reveal-fade-up" data-full-img="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80" alt="Chef Preparing Hearth Dishes" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">Firecraft in Motion</h4>
                <span className="gallery-item-category">Behind The Pass</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-4 reveal-fade-up" style={{ animationDelay: '0.1s' }} data-full-img="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" alt="Wine Cellar Tasting Selection" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">The Curated Cellar</h4>
                <span className="gallery-item-category">Sommelier Selection</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-4 reveal-fade-up" style={{ animationDelay: '0.2s' }} data-full-img="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" alt="Artisan Pastry and Sweets" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">Smoked Olive Oil Torte</h4>
                <span className="gallery-item-category">Artisan Pastry</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-6 reveal-fade-up" data-full-img="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="Botanical Cocktail Creation" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">Botanical Mixology</h4>
                <span className="gallery-item-category">Apothecary & Bar</span>
              </div>
            </div>

            <div className="gallery-item gallery-item-span-6 reveal-fade-up" style={{ animationDelay: '0.1s' }} data-full-img="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85">
              <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80" alt="Pergola Garden Evening Dining" className="gallery-img" />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">Terrace Garden Under Stars</h4>
                <span className="gallery-item-category">Outdoor Dining</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/gallery" className="btn-custom btn-dark-solid">
              <i className="bi bi-grid-3x3-gap me-1"></i>
              <span>View High-Resolution Gallery</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 10. RESERVATION SECTION */}
      <section id="reservation" className="reservation-section section-spacing">
        <div className="reservation-bg-art"></div>
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          
          <div className="row align-items-center g-5">
            
            <div className="col-lg-5">
              <div className="reveal-fade-right">
                <div className="eyebrow text-accent">TABLE BOOKINGS</div>
                <h2 className="section-title text-white">Your Table Is Waiting</h2>
                <p className="lead text-bone opacity-85 mb-4">
                  We look forward to hosting you for an evening of shared plates, artisanal hearth cooking, and world-class hospitality.
                </p>

                <div className="p-4 bg-dark-surface rounded border border-dark-subtle mb-4">
                  <h5 className="text-white font-heading mb-2"><i className="bi bi-info-circle text-accent me-2"></i> Reservation Notes</h5>
                  <p className="small text-bone opacity-75 mb-2">• Tables are held for 15 minutes past scheduled booking time.</p>
                  <p className="small text-bone opacity-75 mb-2">• For parties of 7 or more, please explore our Private Dining packages.</p>
                  <p className="small text-bone opacity-75 mb-0">• Corkage fee: ₹1,500 per 750ml bottle.</p>
                </div>

                <div className="d-flex align-items-center gap-3 text-bone opacity-80">
                  <div className="contact-info-icon"><i className="bi bi-telephone"></i></div>
                  <div>
                    <span className="small text-accent text-uppercase letter-spacing-1 d-block">Direct Concierge</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="reservation-card-wrap reveal-fade-left">
                
                {resFormSuccess && (
                  <div className="form-feedback-alert show alert-success-custom mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-accent fs-4"></i>
                      <div>{resFormSuccess}</div>
                    </div>
                  </div>
                )}

                <form className="reservation-form-interactive" id="homeReservationForm" onSubmit={handleReservationSubmit}>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="resName" className="form-label-custom">Full Name *</label>
                      <input type="text" className="form-control form-control-custom" id="resName" name="guest_name" placeholder="Arjun Sharma" required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="resEmail" className="form-label-custom">Email Address *</label>
                      <input type="email" className="form-control form-control-custom" id="resEmail" name="guest_email" placeholder="arjun@example.com" required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="resPhone" className="form-label-custom">Phone Number *</label>
                      <input type="tel" className="form-control form-control-custom" id="resPhone" name="guest_phone" placeholder="+91 98765 43210" required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="resGuests" className="form-label-custom">Number of Guests *</label>
                      <select className="form-select form-select-custom" id="resGuests" name="guests_count" required defaultValue="2 Guests">
                        <option value="1 Guest">1 Guest (Solo Dining)</option>
                        <option value="2 Guests">2 Guests (Couples Table)</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests (Standard Table)</option>
                        <option value="5 Guests">5 Guests</option>
                        <option value="6 Guests">6 Guests (Large Table)</option>
                        <option value="7+ Guests (Private Dining)">7+ Guests (Private Suite)</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="resDate" className="form-label-custom">Date *</label>
                      <input type="date" className="form-control form-control-custom" id="resDate" name="reservation_date" required defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="resTime" className="form-label-custom">Preferred Time *</label>
                      <select className="form-select form-select-custom" id="resTime" name="reservation_time" required defaultValue="07:30 PM">
                        <optgroup label="Lunch">
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                        </optgroup>
                        <optgroup label="Dinner">
                          <option value="06:30 PM">06:30 PM (Early Dinner)</option>
                          <option value="07:00 PM">07:00 PM</option>
                          <option value="07:30 PM">07:30 PM (Prime Dinner)</option>
                          <option value="08:00 PM">08:00 PM</option>
                          <option value="08:30 PM">08:30 PM</option>
                          <option value="09:00 PM">09:00 PM</option>
                          <option value="09:30 PM">09:30 PM (Late Seating)</option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="resSeating" className="form-label-custom">Seating Area Preference</label>
                      <select className="form-select form-select-custom" id="resSeating" name="seating_area">
                        <option value="Main Dining Room (Open Hearth)">Main Dining Room (Open Hearth View)</option>
                        <option value="Terrace Garden Pergola">Terrace Garden Pergola (Alfresco)</option>
                        <option value="Wine Cellar Vault">Wine Cellar Vault (Intimate & Quiet)</option>
                        <option value="Chef Hearth Counter">Chef Hearth Counter (Interactive)</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="resRequests" className="form-label-custom">Special Requests / Dietary Restrictions</label>
                      <textarea className="form-control form-control-custom" id="resRequests" name="special_requests" rows={3} placeholder="Dietary restrictions (e.g. gluten allergy, vegan), birthday anniversary notes, or accessibility needs..."></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-custom btn-primary-accent w-100 py-3 fs-6" id="submitReservationBtn" disabled={resFormLoading}>
                        {resFormLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span> Confirming Table...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-calendar2-check-fill me-2"></i>
                            <span>Request Reservation</span>
                          </>
                        )}
                      </button>
                      <p className="small text-center text-bone opacity-60 mt-3 mb-0">
                        <i className="bi bi-shield-check me-1"></i> Instant email confirmation sent immediately upon booking.
                      </p>
                    </div>

                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. LOCATION & OPENING HOURS */}
      <section id="contact" className="section-spacing bg-surface">
        <div className="container-xl">
          
          <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
            <div className="eyebrow center-eyebrow">VISIT EMBER & OLIVE</div>
            <h2 className="section-title">Location & Opening Hours</h2>
            <p className="section-desc text-muted-custom">
              Centrally situated in the quiet green enclave of Garden Avenue with complimentary valet parking.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="contact-info-card reveal-fade-right">
                
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                  <div>
                    <h4 className="contact-info-title">Our Address</h4>
                    <p className="contact-info-desc">28 Garden Avenue, Alwarpet<br />Chennai, Tamil Nadu, 600018</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-text-link small mt-1">Get Directions on Maps</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-telephone-fill"></i></div>
                  <div>
                    <h4 className="contact-info-title">Phone & Concierge</h4>
                    <p className="contact-info-desc">+91 98765 43210<br />+91 98765 43211 (Events & Private Dining)</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-envelope-fill"></i></div>
                  <div>
                    <h4 className="contact-info-title">Email Inquiries</h4>
                    <p className="contact-info-desc">hello@emberandolive.example<br />events@emberandolive.example</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="bi bi-clock-fill"></i></div>
                  <div>
                    <h4 className="contact-info-title">Service Hours</h4>
                    <p className="contact-info-desc mb-1"><strong>Monday – Thursday:</strong> 11:00 AM – 10:00 PM</p>
                    <p className="contact-info-desc mb-1"><strong>Friday – Sunday:</strong> 11:00 AM – 11:30 PM</p>
                    <small className="text-accent">Lunch Seating: 12:00 PM – 3:00 PM · Dinner Seating: 6:30 PM – 11:00 PM</small>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="map-placeholder-box reveal-fade-left">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9943360447385!2d80.2520!3d13.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzEyLjUiTiA4MMKwMTUnMDcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  title="Ember and Olive Restaurant Location Map"
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Dish Detail Modal */}
      <SignatureDishModal dish={selectedDish} />
    </>
  );
};

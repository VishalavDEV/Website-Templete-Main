import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InlineReservation from '../components/InlineReservation';
import LightboxModal, { LightboxImageItem } from '../components/LightboxModal';

const JOURNAL_ITEMS: LightboxImageItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    caption: 'Wood-fired Prime Ribeye at Ember House',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    caption: 'Ember House Main Dining Sanctuary',
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop',
    caption: 'Chef Arjun Rao at the Hearth',
  },
  {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1400&auto=format&fit=crop',
    caption: 'Ember House Biodynamic Wine Cellar',
  },
];

export const Home: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [stickyBg, setStickyBg] = useState('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop');
  const [stickyBgOpacity, setStickyBgOpacity] = useState('0.4');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const blocks = document.querySelectorAll('.exp-content-block');
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSrc = entry.target.getAttribute('data-bg');
            if (newSrc && newSrc !== stickyBg) {
              setStickyBgOpacity('0.1');
              setTimeout(() => {
                setStickyBg(newSrc);
                setStickyBgOpacity('0.4');
              }, 300);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    blocks.forEach((b) => observer.observe(b));

    return () => observer.disconnect();
  }, [stickyBg]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className={`hero-fullscreen ${isHeroLoaded ? 'loaded' : ''}`} id="hero">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
          alt="Hearth ribeye signature dish at Ember House"
          className="hero-bg-photo"
          fetchPriority="high"
        />
        <div className="hero-gradient-overlay"></div>

        <div className="hero-vertical-label">CHENNAI &bull; EST. 2012</div>

        <div className="hero-center-content">
          <h1 className="hero-title-giant">EMBER HOUSE</h1>
          <div className="hero-tagline-sub">"Food Worth Gathering For"</div>
        </div>

        <div className="hero-footer-left">SCROLL TO EXPLORE &darr;</div>
        <div className="hero-footer-right">
          <a href="#reservation" className="btn-ember-gold">Reserve</a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section" id="introduction">
        <span className="eyebrow-chapter">01 &bull; INTRODUCTION</span>
        <h2 className="intro-statement">
          "WE COOK WITH FIRE.<br />
          WE SERVE WITH INTENTION."
        </h2>
        <p className="intro-paragraph">
          An artisanal wood-fired sanctuary celebrating the slow alchemy of live embers, heritage grains, and unhurried coastal hospitality.
        </p>
      </section>

      {/* THE HOUSE */}
      <section className="the-house-section" id="the-house">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="magazine-collage">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Ember House Dining Room Interior"
                  className="magazine-img-main"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                  alt="Chef hands preparing ingredients"
                  className="magazine-img-sub"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <span className="eyebrow-chapter">02 &bull; THE HOUSE</span>
              <h2 className="font-heading display-4 mb-3">Built Around<br />the Table.</h2>
              <div className="divider-gold-left"></div>
              <p className="fs-5 text-muted mb-4">
                At Ember House, our hearth burns seasoned fruitwood to transform regional coastal seafood and heirloom harvests into evocative dining memories.
              </p>
              <div className="magazine-annotation">2012 &bull; EMBER HOUSE CHENNAI</div>
            </div>
          </div>
        </div>
      </section>

      {/* DISHES (THE MENU) */}
      <section className="dishes-section" id="dishes">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="eyebrow-chapter">03 &bull; THE MENU</span>
              <h2 className="font-heading display-4 mb-0">Seasonal Dishes</h2>
            </div>
            <div className="text-muted small">DRAG / SCROLL HORIZONTALLY &rarr;</div>
          </div>

          <div className="dishes-flex-container" id="dishesScrollContainer">
            {/* Dish 1 */}
            <div className="dish-editorial-card hover-cursor" data-cursor="EXPLORE">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop"
                alt="Charred Garlic Prawns"
                className="dish-card-img"
                loading="lazy"
              />
              <span className="eyebrow eyebrow-gold mb-1">STARTER</span>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h3 className="dish-card-title">CHARRED GARLIC PRAWNS</h3>
                <span className="dish-card-price">₹680</span>
              </div>
              <p className="small text-muted mb-0">Lemon wood-smoked butter, wild parsley oil, Himalayan pink salt, grilled sourdough</p>
            </div>

            {/* Dish 2 */}
            <div className="dish-editorial-card hover-cursor" data-cursor="EXPLORE">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop"
                alt="Smoked Heirloom Burrata"
                className="dish-card-img"
                loading="lazy"
              />
              <span className="eyebrow eyebrow-gold mb-1">STARTER</span>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h3 className="dish-card-title">SMOKED HEIRLOOM BURRATA</h3>
                <span className="dish-card-price">₹720</span>
              </div>
              <p className="small text-muted mb-0">Ember-roasted black figs, aged balsamic glaze, toasted pine nuts</p>
            </div>

            {/* Dish 3 */}
            <div className="dish-editorial-card hover-cursor" data-cursor="EXPLORE">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
                alt="Slow-Ember Prime Ribeye"
                className="dish-card-img"
                loading="lazy"
              />
              <span className="eyebrow eyebrow-gold mb-1">MAIN</span>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h3 className="dish-card-title">SLOW-EMBER PRIME RIBEYE</h3>
                <span className="dish-card-price">₹1,450</span>
              </div>
              <p className="small text-muted mb-0">Aged 35 days, smoked bone marrow butter, roasted shallots</p>
            </div>

            {/* Dish 4 */}
            <div className="dish-editorial-card hover-cursor" data-cursor="EXPLORE">
              <img
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop"
                alt="Coal-Grilled Sea Bass"
                className="dish-card-img"
                loading="lazy"
              />
              <span className="eyebrow eyebrow-gold mb-1">SEA</span>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h3 className="dish-card-title">COAL-GRILLED SEA BASS</h3>
                <span className="dish-card-price">₹1,180</span>
              </div>
              <p className="small text-muted mb-0">Saffron fennel broth, charred baby leeks, cold-pressed olive infusion</p>
            </div>

            {/* Dish 5 */}
            <div className="dish-editorial-card hover-cursor" data-cursor="EXPLORE">
              <img
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"
                alt="Dark Chocolate Tart"
                className="dish-card-img"
                loading="lazy"
              />
              <span className="eyebrow eyebrow-gold mb-1">DESSERT</span>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h3 className="dish-card-title">DARK CHOCOLATE TART</h3>
                <span className="dish-card-price">₹520</span>
              </div>
              <p className="small text-muted mb-0">70% Valrhona ganache, smoked salt caramel, burnt honey semifreddo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FIRE & KITCHEN */}
      <section className="fire-kitchen-section" id="fire-kitchen">
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop"
          alt="Chef working beside open hearth fire line"
          className="fire-bg-photo"
          loading="lazy"
        />
        <div className="container position-relative z-2">
          <span className="eyebrow-chapter">04 &bull; FIRE & KITCHEN</span>
          <h2 className="fire-statement-giant mb-4">
            FIRE<br />CHANGES<br />EVERYTHING.
          </h2>
          <p className="fs-5 text-white opacity-85" style={{ maxWidth: '500px' }}>
            When you understand how fruitwood smoke softens a dish, cooking turns into a living conversation between flame, wood, and harvest.
          </p>
        </div>
      </section>

      {/* PEOPLE / CHEF */}
      <section className="people-section" id="people">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
                alt="Chef Arjun Rao Portrait"
                className="chef-portrait-editorial"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <span className="eyebrow-chapter">05 &bull; THE PEOPLE</span>
              <h2 className="font-heading display-4 mb-1">Chef Arjun Rao</h2>
              <div className="text-muted small text-uppercase mb-3" style={{ letterSpacing: '0.2em' }}>Executive Chef</div>

              <div className="chef-quote-editorial">
                "Cooking is about knowing when to leave the ingredient alone."
              </div>

              <p className="text-muted mb-4">
                With 20+ years of culinary leadership across London, Lyon, and Chennai, Chef Arjun leads our wood hearth kitchen with unhurried reverence.
              </p>

              <Link to="/chefs" className="btn-link-ember">Chef's Philosophy &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="experiences-sticky-wrap" id="experiences">
        <img
          src={stickyBg}
          alt="Experiences Background"
          className="exp-sticky-bg"
          id="expStickyBg"
          style={{ opacity: stickyBgOpacity, transition: 'opacity 0.3s ease-in-out' }}
        />

        <div className="container">
          <div className="exp-content-block" data-bg="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop">
            <span className="eyebrow-chapter">06 &bull; EXPERIENCES &bull; 01</span>
            <h2 className="exp-title-giant">CHEF'S LIVE TABLE</h2>
            <p className="fs-5 text-white opacity-85" style={{ maxWidth: '540px' }}>An 8-course blind tasting menu hosted directly in front of our open wood hearth with cellar wine pairings.</p>
          </div>

          <div className="exp-content-block" data-bg="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop">
            <span className="eyebrow-chapter">06 &bull; EXPERIENCES &bull; 02</span>
            <h2 className="exp-title-giant">PRIVATE MEZZANINE</h2>
            <p className="fs-5 text-white opacity-85" style={{ maxWidth: '540px' }}>An exclusive private mezzanine accommodating up to 24 guests with bespoke menus and dedicated sommelier service.</p>
          </div>

          <div className="exp-content-block" data-bg="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop">
            <span className="eyebrow-chapter">06 &bull; EXPERIENCES &bull; 03</span>
            <h2 className="exp-title-giant">SEASONAL SUPPER</h2>
            <p className="fs-5 text-white opacity-85" style={{ maxWidth: '540px' }}>Celebrating micro-seasons across the Coromandel coast with rare biodynamic vintages and wild foraged ingredients.</p>
          </div>
        </div>
      </section>

      {/* VISUAL JOURNAL */}
      <section className="journal-strip-section" id="journal">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="eyebrow-chapter">07 &bull; VISUAL JOURNAL</span>
              <h2 className="font-heading display-4 mb-0">Atmosphere & Hearth</h2>
            </div>
            <div className="text-muted small">CLICK TO VIEW FULLSCREEN</div>
          </div>

          <div className="journal-strip-flex">
            {JOURNAL_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="journal-strip-item hover-cursor"
                data-cursor="VIEW"
                onClick={() => openLightbox(idx)}
              >
                <img src={item.src} alt={`Journal 0${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATIONS */}
      <InlineReservation />

      {/* FIND US */}
      <section className="find-us-section" id="contact">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
              alt="Ember House Chennai Dining Room"
              className="find-us-left-img"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 p-5 p-xl-6">
            <span className="eyebrow-chapter">09 &bull; FIND US</span>
            <h2 className="font-heading display-4 mb-4">EMBER HOUSE</h2>

            <div className="d-flex flex-column gap-4 fs-5">
              <div>
                <strong className="d-block text-uppercase small text-muted mb-1" style={{ letterSpacing: '0.2em' }}>Location</strong>
                27 Garden Street, Chennai, Tamil Nadu, 600004
              </div>
              <div>
                <strong className="d-block text-uppercase small text-muted mb-1" style={{ letterSpacing: '0.2em' }}>Hours</strong>
                Mon–Thu: 11:00 AM – 10:00 PM<br />
                Fri–Sun: 11:00 AM – 11:30 PM
              </div>
              <div>
                <strong className="d-block text-uppercase small text-muted mb-1" style={{ letterSpacing: '0.2em' }}>Inquiries & Bookings</strong>
                +91 98765 43210 &bull; hello@emberhouse.example
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={JOURNAL_ITEMS}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : JOURNAL_ITEMS.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < JOURNAL_ITEMS.length - 1 ? prev + 1 : 0))}
      />
    </>
  );
};

export default Home;

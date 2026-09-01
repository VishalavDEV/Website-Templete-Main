import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Moon, Sun, Menu, X, ChevronRight, ArrowRight, ArrowLeft,
  Wifi, Wind, Coffee, Tv, Bath, Waves, UtensilsCrossed,
  Sparkles, Clock, Phone, Mail, MapPin, Star,
  Users, Calendar, Globe, Send, Share2, Link2,
  ZoomIn, Award, Heart, Leaf, Check
} from 'lucide-react';
import './HotelTemplate.css';

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const ROOMS = [
  {
    id: 1,
    category: 'Signature Suite',
    name: 'Ocean Panorama Suite',
    image: '/hotel_suite.jpg',
    price: 620,
    badges: ['Sea View', 'King Bed'],
    amenities: [
      { icon: Wifi, label: 'Wi-Fi' },
      { icon: Wind, label: 'A/C' },
      { icon: Bath, label: 'Spa Bath' },
      { icon: Tv, label: 'Smart TV' },
    ],
    size: '78 m²',
    guests: 2,
  },
  {
    id: 2,
    category: 'Pool Villa',
    name: 'Private Infinity Villa',
    image: '/hotel_pool.jpg',
    price: 1200,
    badges: ['Private Pool', 'Garden View'],
    amenities: [
      { icon: Waves, label: 'Private Pool' },
      { icon: Wifi, label: 'Wi-Fi' },
      { icon: Coffee, label: 'Bar' },
      { icon: Wind, label: 'A/C' },
    ],
    size: '180 m²',
    guests: 4,
  },
  {
    id: 3,
    category: 'Deluxe Room',
    name: 'Tropical Garden Room',
    image: '/hotel_hero.jpg',
    price: 340,
    badges: ['Garden View', 'Twin Beds'],
    amenities: [
      { icon: Wifi, label: 'Wi-Fi' },
      { icon: Wind, label: 'A/C' },
      { icon: Coffee, label: 'Minibar' },
      { icon: Tv, label: 'TV' },
    ],
    size: '42 m²',
    guests: 2,
  },
];

const AMENITIES = [
  { icon: Waves,          name: 'Infinity Pool',       desc: 'An 80m infinity pool overlooking the Andaman Sea, open sunrise to midnight with poolside butler service.' },
  { icon: Sparkles,       name: 'Aura Spa & Wellness', desc: 'Award-winning spa with 12 treatment rooms, steam caves, and signature botanical rituals curated by master therapists.' },
  { icon: UtensilsCrossed,name: 'Fine Dining',         desc: 'Three world-class restaurants helmed by Michelin-starred chefs — each a unique culinary journey.' },
  { icon: Clock,          name: '24/7 Concierge',      desc: 'Our dedicated team is available around the clock to anticipate and fulfil every detail of your stay.' },
  { icon: Leaf,           name: 'Yoga & Mindfulness',  desc: 'Daily sunrise yoga on our clifftop pavilion with resident instructors and curated wellness retreats.' },
  { icon: Award,          name: 'Luxury Transfers',    desc: 'Seamless arrivals by private speedboat, helicopter, or chauffeured Bentley — your choice, our pleasure.' },
  { icon: Heart,          name: 'Romance Packages',    desc: 'Bespoke honeymoon and anniversary experiences: floating breakfasts, private beach dinners, and more.' },
  { icon: Coffee,         name: 'Sky Lounge Bar',      desc: 'An elevated rooftop lounge serving rare spirits, handcrafted cocktails, and tapas at sunset.' },
];

const OFFERS = [
  {
    id: 1,
    image: '/hotel_pool.jpg',
    discount: '35% OFF',
    title: 'Tropical Honeymoon Escape',
    desc: 'Sunset dinner for two, couples spa ritual & complimentary villa upgrade.',
    validity: 'Valid until Oct 31, 2026',
    hasCountdown: true,
    targetDate: new Date('2026-10-31T23:59:59'),
  },
  {
    id: 2,
    image: '/hotel_dining.jpg',
    discount: '20% OFF',
    title: 'Culinary Weekend Package',
    desc: 'Michelin tasting menu, cooking masterclass & wine pairing included.',
    validity: 'Valid until Sep 30, 2026',
    hasCountdown: false,
  },
  {
    id: 3,
    image: '/hotel_spa.jpg',
    discount: 'Complimentary',
    title: 'Wellness Retreat Offer',
    desc: 'Free spa credit up to $300 with a minimum 3-night stay.',
    validity: 'Year-round offer',
    hasCountdown: false,
  },
];

const GALLERY_ITEMS = [
  { id: 1, src: '/hotel_hero.jpg',   alt: 'Resort Overview',  category: 'Resort', cls: 'ht-g1' },
  { id: 2, src: '/hotel_suite.jpg',  alt: 'Ocean Suite',      category: 'Rooms',  cls: 'ht-g2' },
  { id: 3, src: '/hotel_pool.jpg',   alt: 'Pool Villa',       category: 'Pool',   cls: 'ht-g3' },
  { id: 4, src: '/hotel_spa.jpg',    alt: 'Spa Treatment',    category: 'Spa',    cls: 'ht-g4' },
  { id: 5, src: '/hotel_dining.jpg', alt: 'Fine Dining',      category: 'Dining', cls: 'ht-g5' },
  { id: 6, src: '/hotel_suite.jpg',  alt: 'Suite Interior',   category: 'Rooms',  cls: 'ht-g6' },
];

const REVIEWS = [
  {
    id: 1,
    stars: 5,
    text: 'Absolutely transformative. The staff anticipated every desire before we voiced it. The Ocean Suite exceeded every expectation — waking up to that view changed how I think about luxury.',
    name: 'Charlotte R.',
    location: 'London, United Kingdom',
    initials: 'CR',
    stay: 'Ocean Panorama Suite · June 2026',
  },
  {
    id: 2,
    stars: 5,
    text: 'We stayed for our 10th anniversary. The Honeymoon Package was curated to perfection — private beach dinner under stars, floating breakfast, and an unforgettable spa ritual. Nothing short of magic.',
    name: 'Marco & Sofia T.',
    location: 'Milan, Italy',
    initials: 'MT',
    stay: 'Private Infinity Villa · May 2026',
  },
  {
    id: 3,
    stars: 5,
    text: "The Private Villa is worth every penny. Having your own infinity pool with that ocean backdrop is indescribable. The concierge arranged everything flawlessly. We'll return every year.",
    name: 'James W.',
    location: 'New York, USA',
    initials: 'JW',
    stay: 'Private Infinity Villa · April 2026',
  },
  {
    id: 4,
    stars: 5,
    text: "From the complimentary welcome champagne to the private speedboat tour, every detail was immaculate. The spa's botanical ritual left me renewed. Truly five stars in every sense.",
    name: 'Priya S.',
    location: 'Mumbai, India',
    initials: 'PS',
    stay: 'Ocean Panorama Suite · March 2026',
  },
];

const NAV_LINKS = ['Home', 'Rooms', 'Amenities', 'Dining', 'Offers', 'Contact'];
const GALLERY_FILTERS = ['All', 'Rooms', 'Pool', 'Dining', 'Spa', 'Resort'];

/* ═══════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════ */

// Countdown hook
function useCountdown(targetDate) {
  const calc = useCallback(() => {
    const diff = Math.max(0, targetDate - new Date());
    return {
      days:  Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins:  Math.floor((diff % 3600000) / 60000),
      secs:  Math.floor((diff % 60000) / 1000),
    };
  }, [targetDate]);
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, [calc]);
  return time;
}

// Scroll-reveal hook — returns a ref; element animates in when it enters viewport
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ht-revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════
   GALLERY LIGHTBOX
═══════════════════════════════════════════ */
function HtLightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null) return null;
  const item = items[activeIndex];

  return (
    <div
      className="ht-lightbox"
      onClick={onClose}
      id="ht-lightbox-overlay"
    >
      <div className="ht-lightbox-inner" onClick={e => e.stopPropagation()}>
        <button id="ht-lightbox-close" className="ht-lightbox-close" onClick={onClose}>
          <X size={20} />
        </button>
        <button id="ht-lightbox-prev" className="ht-lightbox-arrow ht-lightbox-prev" onClick={onPrev}>
          <ArrowLeft size={22} />
        </button>
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="ht-lightbox-img"
        />
        <button id="ht-lightbox-next" className="ht-lightbox-arrow ht-lightbox-next" onClick={onNext}>
          <ArrowRight size={22} />
        </button>
        <div className="ht-lightbox-caption">
          <span>{item.alt}</span>
          <span className="ht-lightbox-counter">{activeIndex + 1} / {items.length}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
function HtNavbar({ isDark, onThemeToggle, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Spy on sections for active nav link
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(`ht-${l.toLowerCase()}`)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveLink(e.target.id.replace('ht-', ''));
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLink = (link) => {
    setActiveLink(link.toLowerCase());
    onNavClick(link.toLowerCase());
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className={`ht-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="ht-nav-logo">
          <div className="ht-nav-logo-icon">A</div>
          <span className="ht-nav-logo-text">Aura Resort</span>
        </div>

        <ul className="ht-nav-links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <span
                id={`ht-nav-${link.toLowerCase()}`}
                className={`ht-nav-link${activeLink === link.toLowerCase() ? ' active' : ''}`}
                onClick={() => handleLink(link)}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>

        <div className="ht-nav-actions">
          <button
            id="ht-theme-toggle"
            className="ht-theme-toggle"
            onClick={onThemeToggle}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            id="ht-nav-book-btn"
            className="ht-btn ht-btn-gold"
            onClick={() => onNavClick('booking')}
          >
            Book Now
          </button>
          <button
            id="ht-hamburger-btn"
            className="ht-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} color="var(--ht-text-primary)" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`ht-mobile-drawer${drawerOpen ? ' open' : ''}`} aria-modal="true" role="dialog">
        <div className="ht-drawer-overlay" onClick={() => setDrawerOpen(false)} />
        <div className="ht-drawer-panel">
          <button id="ht-drawer-close" className="ht-drawer-close" onClick={() => setDrawerOpen(false)}>
            <X size={16} />
          </button>
          <div className="ht-nav-logo" style={{ marginBottom: 28 }}>
            <div className="ht-nav-logo-icon">A</div>
            <span className="ht-nav-logo-text">Aura Resort</span>
          </div>
          {NAV_LINKS.map(link => (
            <div key={link} className="ht-drawer-link" onClick={() => handleLink(link)}>
              {link}
            </div>
          ))}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              className="ht-btn ht-btn-gold"
              style={{ width: '100%' }}
              onClick={() => { onNavClick('booking'); setDrawerOpen(false); }}
            >
              Book Now <ArrowRight size={14} />
            </button>
            <button
              className="ht-theme-toggle"
              style={{ width: '100%', borderRadius: 4, height: 42 }}
              onClick={onThemeToggle}
            >
              {isDark ? <><Sun size={15} /> Light Mode</> : <><Moon size={15} /> Dark Mode</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
function HtHero({ onBookNow }) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY * 0.35);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ht-home" className="ht-hero">
      <div
        className={`ht-hero-bg${loaded ? ' loaded' : ''}`}
        style={{ transform: `scale(1.08) translateY(${scrollY}px)` }}
      />
      <div className="ht-hero-overlay" />

      <div className="ht-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="ht-hero-content">
          <p className="ht-hero-eyebrow">
            Phuket, Thailand · Est. 2008
          </p>
          <h1 className="ht-hero-title">
            Luxury<br /><em>Redefined</em>
          </h1>
          <p className="ht-hero-desc">
            Where the Andaman Sea meets barefoot elegance. A sanctuary crafted for those who seek the extraordinary in every waking moment.
          </p>
          <div className="ht-hero-actions">
            <button
              id="ht-hero-book-btn"
              className="ht-btn ht-btn-gold"
              onClick={onBookNow}
            >
              Reserve Your Suite <ArrowRight size={16} />
            </button>
            <button
              id="ht-hero-explore-btn"
              className="ht-btn ht-btn-ghost"
              onClick={() => document.getElementById('ht-rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Floating award badge */}
      <div className="ht-hero-badge">
        <Star size={14} fill="currentColor" color="var(--ht-accent)" />
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ht-text-primary)' }}>
            World's Best
          </div>
          <div style={{ fontSize: '0.65rem', color: 'var(--ht-text-secondary)' }}>
            Luxury Resort 2026
          </div>
        </div>
      </div>

      <div
        className="ht-hero-scroll"
        onClick={() => document.getElementById('ht-booking')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="ht-hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BOOKING BAR
═══════════════════════════════════════════ */
function HtBookingBar({ bookingRef }) {
  const [checkIn,  setCheckIn]  = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests,   setGuests]   = useState(2);
  const [rooms,    setRooms]    = useState(1);

  const today = new Date().toISOString().split('T')[0];

  return (
    <section ref={bookingRef} id="ht-booking" className="ht-booking-bar">
      <div className="ht-booking-card">
        <div className="ht-booking-field">
          <div className="ht-booking-field-label">
            <Calendar size={10} style={{ display: 'inline', marginRight: 4 }} /> Check-In
          </div>
          <input
            id="ht-checkin-input"
            type="date"
            className="ht-booking-field-input"
            value={checkIn}
            min={today}
            onChange={e => setCheckIn(e.target.value)}
          />
        </div>

        <div className="ht-booking-field">
          <div className="ht-booking-field-label">
            <Calendar size={10} style={{ display: 'inline', marginRight: 4 }} /> Check-Out
          </div>
          <input
            id="ht-checkout-input"
            type="date"
            className="ht-booking-field-input"
            value={checkOut}
            min={checkIn || today}
            onChange={e => setCheckOut(e.target.value)}
          />
        </div>

        <div className="ht-booking-field">
          <div className="ht-booking-field-label">
            <Users size={10} style={{ display: 'inline', marginRight: 4 }} /> Guests & Rooms
          </div>
          <div className="ht-booking-guests">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.64rem', color: 'var(--ht-text-muted)', marginBottom: 5 }}>Guests</div>
              <div className="ht-guests-control">
                <button id="ht-guests-minus" className="ht-guest-btn" onClick={() => setGuests(g => Math.max(1, g - 1))}>−</button>
                <span className="ht-booking-field-value">{guests}</span>
                <button id="ht-guests-plus"  className="ht-guest-btn" onClick={() => setGuests(g => Math.min(20, g + 1))}>+</button>
              </div>
            </div>
            <div style={{ width: 1, background: 'var(--ht-border)', margin: '0 10px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.64rem', color: 'var(--ht-text-muted)', marginBottom: 5 }}>Rooms</div>
              <div className="ht-guests-control">
                <button id="ht-rooms-minus" className="ht-guest-btn" onClick={() => setRooms(r => Math.max(1, r - 1))}>−</button>
                <span className="ht-booking-field-value">{rooms}</span>
                <button id="ht-rooms-plus"  className="ht-guest-btn" onClick={() => setRooms(r => Math.min(10, r + 1))}>+</button>
              </div>
            </div>
          </div>
        </div>

        <button id="ht-check-availability-btn" className="ht-booking-submit">
          Check Availability <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ROOM CARD
═══════════════════════════════════════════ */
function HtRoomCard({ room, delay = 0 }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="ht-room-card ht-reveal"
      id={`ht-room-${room.id}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="ht-room-image-wrap">
        <img src={room.image} alt={room.name} loading="lazy" />
        <div className="ht-room-badges">
          {room.badges.map(b => (
            <span key={b} className="ht-badge ht-badge-gold">{b}</span>
          ))}
        </div>
        <div className="ht-room-overlay" />
        <button className="ht-btn ht-btn-gold ht-room-quick-book" style={{ fontSize: '0.78rem', padding: '10px 22px' }}>
          Quick Book
        </button>
      </div>

      <div className="ht-room-body">
        <div className="ht-room-category">{room.category}</div>
        <h3 className="ht-room-name">{room.name}</h3>
        <div className="ht-room-amenities">
          {room.amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="ht-room-amenity">
              <Icon size={12} color="var(--ht-accent)" />{label}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: '0.76rem', color: 'var(--ht-text-muted)', marginBottom: 4 }}>
          <span>⬛ {room.size}</span>
          <span>👤 Up to {room.guests} guests</span>
        </div>

        <div className="ht-room-footer">
          <div className="ht-room-price">
            <span className="ht-price-from">From</span>
            <span className="ht-price-amount">${room.price.toLocaleString()}</span>
            <span className="ht-price-night">/ night</span>
          </div>
          <div className="ht-room-actions">
            <button id={`ht-room-details-${room.id}`} className="ht-btn ht-btn-ghost"   style={{ fontSize: '0.77rem', padding: '10px 16px' }}>Details</button>
            <button id={`ht-room-book-${room.id}`}    className="ht-btn ht-btn-gold"    style={{ fontSize: '0.77rem', padding: '10px 16px' }}>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   OFFER CARD
═══════════════════════════════════════════ */
function HtOfferCard({ offer }) {
  const { days, hours, mins, secs } = useCountdown(offer.targetDate || new Date());

  return (
    <div className="ht-offer-card" id={`ht-offer-${offer.id}`}>
      <div className="ht-offer-image" style={{ backgroundImage: `url(${offer.image})` }} />
      <div className="ht-offer-gradient" />
      <div className="ht-offer-body">
        <div className="ht-offer-discount">{offer.discount}</div>
        {offer.hasCountdown && (
          <div className="ht-countdown">
            {[['days', days], ['hours', hours], ['mins', mins], ['secs', secs]].map(([label, val], i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="ht-countdown-sep">:</span>}
                <div className="ht-countdown-unit">
                  <span className="ht-countdown-num">{String(val).padStart(2, '0')}</span>
                  <span className="ht-countdown-label">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
        <h3 className="ht-offer-title">{offer.title}</h3>
        <p className="ht-offer-desc">{offer.desc}</p>
        <div className="ht-offer-meta">
          <span className="ht-offer-validity">{offer.validity}</span>
          <button id={`ht-offer-claim-${offer.id}`} className="ht-btn ht-btn-outline-gold" style={{ fontSize: '0.76rem', padding: '9px 16px' }}>
            Claim <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   GALLERY SECTION
═══════════════════════════════════════════ */
function HtGallery() {
  const [filter, setFilter]     = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const ref = useScrollReveal();

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === filter);

  const openLightbox  = (idx) => setLightbox(idx);
  const closeLightbox = ()    => setLightbox(null);
  const prevItem      = ()    => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextItem      = ()    => setLightbox(i => (i + 1) % filtered.length);

  return (
    <section id="ht-gallery" className="ht-section" style={{ background: 'var(--ht-bg-2)' }}>
      <div className="ht-container">
        <div ref={ref} className="ht-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="ht-label">Our Story in Images</div>
            <h2 className="ht-heading">A Visual <em>Journey</em></h2>
          </div>
          <button id="ht-gallery-view-all" className="ht-btn ht-btn-outline-gold" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>
            View All <ArrowRight size={13} />
          </button>
        </div>

        <div className="ht-gallery-filters">
          {GALLERY_FILTERS.map(f => (
            <button
              key={f}
              id={`ht-gallery-filter-${f.toLowerCase()}`}
              className={`ht-gallery-filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="ht-gallery-grid">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className={`ht-gallery-item ${item.cls}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="ht-gallery-item-overlay">
                <div className="ht-gallery-item-info">
                  <ZoomIn size={24} color="white" />
                  <span>{item.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HtLightbox
        items={filtered}
        activeIndex={lightbox}
        onClose={closeLightbox}
        onPrev={prevItem}
        onNext={nextItem}
      />
    </section>
  );
}

/* ═══════════════════════════════════════════
   REVIEWS — AUTO CAROUSEL
═══════════════════════════════════════════ */
function HtReviews() {
  const [active, setActive] = useState(0);
  const total  = REVIEWS.length;
  const ref    = useScrollReveal();

  // Auto-advance every 5s
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);

  const visible = [
    REVIEWS[active],
    REVIEWS[(active + 1) % total],
    REVIEWS[(active + 2) % total],
  ];

  return (
    <section id="ht-reviews" className="ht-section">
      <div className="ht-container">
        <div ref={ref} className="ht-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="ht-label">Guest Stories</div>
            <h2 className="ht-heading">Cherished <em>Memories</em></h2>
            <p className="ht-subheading">
              Over 4,800 five-star reviews from guests who've experienced the Aura way of living.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button id="ht-reviews-prev" className="ht-reviews-arrow" onClick={prev}><ArrowLeft size={18} /></button>
            <button id="ht-reviews-next" className="ht-reviews-arrow" onClick={next}><ArrowRight size={18} /></button>
          </div>
        </div>

        <div className="ht-reviews-slider">
          {visible.map((review, i) => (
            <div
              key={`${review.id}-${active}`}
              className={`ht-review-card ht-review-card-animate`}
              id={`ht-review-${review.id}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="ht-review-quote">"</div>
              <div className="ht-stars">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="ht-review-text">"{review.text}"</p>
              <div className="ht-review-author">
                <div className="ht-review-avatar">{review.initials}</div>
                <div>
                  <div className="ht-review-name">{review.name}</div>
                  <div className="ht-review-location">{review.location}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--ht-accent)', marginTop: 3, fontStyle: 'italic' }}>{review.stay}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ht-reviews-nav">
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              className={`ht-reviews-dot${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
              id={`ht-reviews-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   AMENITY CARD (isolated so hook is at component level)
═══════════════════════════════════════════ */
function HtAmenityCard({ amenity, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="ht-amenity-card ht-reveal"
      id={`ht-amenity-${amenity.name.toLowerCase().replace(/\s+/g, '-')}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="ht-amenity-icon"><amenity.icon size={22} /></div>
      <div>
        <div className="ht-amenity-name">{amenity.name}</div>
        <div className="ht-amenity-desc" style={{ marginTop: 8 }}>{amenity.desc}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════ */
function HtStats() {
  const stats = [
    { number: '16+',  label: 'Years of Excellence' },
    { number: '4,800+', label: 'Five-Star Reviews' },
    { number: '42',   label: 'Luxury Suites & Villas' },
    { number: '12',   label: 'Dining Experiences' },
  ];
  const ref = useScrollReveal();

  return (
    <div className="ht-stats-bar">
      <div className="ht-container">
        <div ref={ref} className="ht-stats-inner ht-reveal">
          {stats.map((s, i) => (
            <div key={i} className="ht-stat-item" id={`ht-stat-${i}`}>
              <div className="ht-stat-number">{s.number}</div>
              <div className="ht-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SPA SECTION
═══════════════════════════════════════════ */
function HtSpa() {
  const ref = useScrollReveal();
  const imgRef = useScrollReveal();

  return (
    <section id="ht-spa" className="ht-section" style={{ background: 'var(--ht-bg-2)' }}>
      <div className="ht-container">
        <div className="ht-dining-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div ref={ref} className="ht-reveal">
            <div className="ht-label">Spa & Wellness</div>
            <h2 className="ht-heading">Surrender to <em>Serenity</em></h2>
            <div className="ht-divider-line" />
            <p style={{ fontSize: '0.95rem', color: 'var(--ht-text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>
              The Aura Spa is a world unto itself — 3,200 sq ft of pure tranquillity. Twelve private treatment rooms, a crystal steam cave, and a signature collection of botanical rituals inspired by ancient Thai healing traditions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36 }}>
              {[
                'Signature Botanical Ritual',
                'Hot Stone & Bamboo Massage',
                'Couples Treatment Suite',
                'Detox Hydrotherapy Pool',
                'Ayurvedic Consultations',
                'Facial & Skin Therapies',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--ht-text-secondary)' }}>
                  <Check size={13} color="var(--ht-accent)" /> {item}
                </div>
              ))}
            </div>
            <button id="ht-spa-book-btn" className="ht-btn ht-btn-gold">
              Book a Treatment <ArrowRight size={16} />
            </button>
          </div>

          <div ref={imgRef} className="ht-reveal" style={{ position: 'relative' }}>
            <img
              src="/hotel_spa.jpg"
              alt="Aura Spa & Wellness"
              style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: 16, display: 'block' }}
            />
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: 28, right: 28,
              background: 'var(--ht-card)', border: '1px solid var(--ht-border)',
              borderRadius: 8, padding: '14px 18px', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="var(--ht-accent)" color="var(--ht-accent)" />)}
              </div>
              <div style={{ fontFamily: 'var(--ht-font-serif)', fontSize: '1rem', color: 'var(--ht-text-primary)' }}>
                Asia's Best Spa 2026
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--ht-text-secondary)', marginTop: 2 }}>
                Condé Nast Traveller
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function HtFooter() {
  const [email, setEmail]         = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const ref = useScrollReveal();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer id="ht-contact" className="ht-footer">
      <div className="ht-container">
        <div ref={ref} className="ht-footer-grid ht-reveal">
          {/* Brand */}
          <div className="ht-footer-brand">
            <div className="ht-footer-logo">
              <div className="ht-nav-logo-icon">A</div>
              <span className="ht-nav-logo-text">Aura Resort</span>
            </div>
            <p className="ht-footer-desc">
              A sanctuary of refined luxury on the shores of the Andaman Sea. Where every moment is crafted with intention, warmth, and artistry.
            </p>
            <div className="ht-contact-item"><MapPin size={13} /><span>118 Surin Beach Road, Phuket, 83110, Thailand</span></div>
            <div className="ht-contact-item"><Phone size={13} /><span>+66 76 123 456</span></div>
            <div className="ht-contact-item"><Mail size={13} /><span>reservations@auraresort.com</span></div>
            <div className="ht-footer-social">
              {[Globe, Share2, Send, Link2].map((Icon, i) => (
                <button key={i} className="ht-social-btn" id={`ht-social-${i}`}><Icon size={14} /></button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="ht-footer-col-title">Explore</div>
            <ul className="ht-footer-links">
              {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Pool & Beach', 'Events & Weddings', 'Photo Gallery'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Guest Services */}
          <div>
            <div className="ht-footer-col-title">Guest Services</div>
            <ul className="ht-footer-links">
              {['Check Availability', 'Cancellation Policy', 'Transfer Booking', 'Special Requests', 'FAQs', 'Contact Concierge'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="ht-footer-col-title">Stay in the Know</div>
            <p style={{ fontSize: '0.83rem', color: 'var(--ht-text-secondary)', marginBottom: 18, lineHeight: 1.65 }}>
              Subscribe for exclusive offers, curated packages, and luxury travel inspiration.
            </p>
            {subscribed ? (
              <div style={{ background: 'rgba(224,169,109,0.1)', border: '1px solid var(--ht-divider)', borderRadius: 4, padding: '14px 18px', fontSize: '0.85rem', color: 'var(--ht-accent)' }}>
                ✓ Thank you — you're on the list.
              </div>
            ) : (
              <form className="ht-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  id="ht-newsletter-email"
                  type="email"
                  className="ht-newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button id="ht-newsletter-submit" type="submit" className="ht-btn ht-btn-gold" style={{ width: '100%' }}>
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="ht-footer-bottom">
          <span>© {new Date().getFullYear()} Aura Resort & Spa. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Preferences'].map(l => (
              <a key={l} href="#" style={{ color: 'var(--ht-text-muted)', fontSize: '0.78rem' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MAIN TEMPLATE
═══════════════════════════════════════════ */
export default function HotelTemplate() {
  const [isDark, setIsDark] = useState(true);
  const bookingRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(`ht-${sectionId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Prevent parent page scroll styles from leaking
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  return (
    <div className={`ht-root${isDark ? '' : ' ht-light'}`}>
      <HtNavbar
        isDark={isDark}
        onThemeToggle={() => setIsDark(d => !d)}
        onNavClick={scrollToSection}
      />

      {/* Hero */}
      <HtHero onBookNow={() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })} />

      {/* Booking Bar */}
      <HtBookingBar bookingRef={bookingRef} />

      {/* Rooms */}
      <section id="ht-rooms" className="ht-section">
        <div className="ht-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 20, marginBottom: 0 }}>
            <div>
              <div className="ht-label">Rooms & Suites</div>
              <h2 className="ht-heading">Your Private <em>Haven</em></h2>
              <p className="ht-subheading">
                From intimate garden rooms to grand ocean villas — each sanctuary is a masterpiece of space, light, and curated elegance.
              </p>
            </div>
            <button id="ht-view-all-rooms" className="ht-btn ht-btn-outline-gold" style={{ fontSize: '0.8rem', alignSelf: 'flex-end', whiteSpace: 'nowrap' }}>
              All Rooms <ArrowRight size={14} />
            </button>
          </div>
          <div className="ht-rooms-grid">
            {ROOMS.map((room, i) => <HtRoomCard key={room.id} room={room} delay={i * 120} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <HtStats />

      {/* Amenities */}
      <section id="ht-amenities" className="ht-section" style={{ background: 'var(--ht-bg-2)' }}>
        <div className="ht-container">
          <div className="ht-label">Facilities & Services</div>
          <h2 className="ht-heading">Crafted for the <em>Exceptional</em></h2>
          <p className="ht-subheading">
            Every facility at Aura is an invitation to indulge — from our clifftop infinity pool to our world-renowned spa retreats.
          </p>
          <div className="ht-amenities-grid">
            {AMENITIES.map((a, i) => (
              <HtAmenityCard key={a.name} amenity={a} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="ht-dining" className="ht-section">
        <div className="ht-container">
          <div className="ht-dining-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
              <img
                src="/hotel_dining.jpg"
                alt="Fine Dining at Aura"
                style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', borderRadius: 16 }}
              />
              <div style={{
                position: 'absolute', bottom: 28, left: 28,
                background: 'var(--ht-card)', border: '1px solid var(--ht-border)',
                borderRadius: 8, padding: '16px 20px', backdropFilter: 'blur(10px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  {[1,2,3].map(i => <Star key={i} size={11} fill="var(--ht-accent)" color="var(--ht-accent)" />)}
                  <span style={{ fontSize: '0.68rem', color: 'var(--ht-accent)', letterSpacing: '0.06em' }}>Michelin Starred</span>
                </div>
                <div style={{ fontFamily: 'var(--ht-font-serif)', fontSize: '1.05rem', color: 'var(--ht-text-primary)' }}>Azure Fine Dining</div>
                <div style={{ fontSize: '0.73rem', color: 'var(--ht-text-secondary)', marginTop: 2 }}>Open daily · 6pm – 11pm</div>
              </div>
            </div>

            <div>
              <div className="ht-label">Fine Dining</div>
              <h2 className="ht-heading">A Symphony of <em>Flavours</em></h2>
              <div className="ht-divider-line" />
              <p style={{ fontSize: '0.95rem', color: 'var(--ht-text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>
                Our three signature restaurants represent a culinary journey — from fresh Thai seafood and charcoal-grilled delicacies to refined European cuisine with panoramic ocean views.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 36 }}>
                {[
                  { name: 'Azure', desc: 'European fine dining · Michelin starred · Ocean views' },
                  { name: 'Talad', desc: 'Authentic Thai cuisine · Open kitchen · Beachside terrace' },
                  { name: 'Ember & Stone', desc: 'Wood-fired grill · Craft cocktails · Rooftop setting' },
                ].map(r => (
                  <div key={r.name} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--ht-border)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ht-accent)', marginTop: 10, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--ht-font-serif)', fontSize: '1.1rem', color: 'var(--ht-text-primary)', marginBottom: 3 }}>{r.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--ht-text-secondary)' }}>{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button id="ht-dining-reserve-btn" className="ht-btn ht-btn-gold">
                Reserve a Table <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spa */}
      <HtSpa />

      {/* Offers */}
      <section id="ht-offers" className="ht-section">
        <div className="ht-container">
          <div className="ht-label">Special Offers</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <h2 className="ht-heading">Curated <em>Packages</em></h2>
            <button id="ht-all-offers-btn" className="ht-btn ht-btn-outline-gold" style={{ fontSize: '0.8rem' }}>
              All Offers <ArrowRight size={14} />
            </button>
          </div>
          <div className="ht-offers-grid">
            {OFFERS.map(offer => <HtOfferCard key={offer.id} offer={offer} />)}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <HtGallery />

      {/* Reviews */}
      <HtReviews />

      {/* Final CTA */}
      <section className="ht-cta-section">
        <div className="ht-cta-bg" />
        <div className="ht-cta-overlay" />
        <div className="ht-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="ht-label" style={{ justifyContent: 'center' }}>Begin Your Journey</div>
          <h2 className="ht-heading" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 20px', color: '#fff' }}>
            Your Dream Stay <em>Awaits</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 40, fontSize: '1rem', lineHeight: 1.7 }}>
            Reserve your sanctuary today and let our team craft<br />a stay that surpasses every imagination.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              id="ht-final-book-btn"
              className="ht-btn ht-btn-gold"
              style={{ padding: '16px 44px', fontSize: '0.95rem' }}
              onClick={() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Escape <ArrowRight size={16} />
            </button>
            <button
              id="ht-final-contact-btn"
              className="ht-btn"
              style={{ padding: '16px 44px', fontSize: '0.95rem', background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}
            >
              <Phone size={16} /> Speak with Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <HtFooter />
    </div>
  );
}

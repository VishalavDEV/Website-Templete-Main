import React, { useState } from 'react';
import './styles/casual.css';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export const menuData = {
  starters: [
    { id: 'c1', name: 'Medu Vada Platter', price: 140, desc: 'Crispy, deep-fried lentil donuts flavored with black pepper and ginger, served with fresh coconut chutney and hot sambar.', veg: true, tags: ['Jain-friendly', 'Vegan'], spice: 1, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/medu-vada-platter.png' },
    { id: 'c2', name: 'Chicken 65', price: 280, desc: 'Fiery, deep-fried chicken cubes marinated in ginger, garlic, red chillies and curry leaves.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/chicken-65.webp' }
  ],
  soups: [
    { id: 'c3', name: 'Spiced Tomato Rasam', price: 120, desc: 'A traditional tangy tomato broth infused with crushed black pepper, cumin seeds, garlic and fresh coriander.', veg: true, tags: ['Vegan', 'Gluten-free'], spice: 2, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/spiced-tomato-rasam.webp' },
    { id: 'c4', name: 'Mutton Bone Soup', price: 210, desc: 'Nutritious lamb bone broth simmered slow with Chettinad spices, black pepper, and curry leaves.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/mutton-bone-soup.png' }
  ],
  'main-course': [
    { id: 'c5', name: 'Chettinad Chicken Curry', price: 380, desc: 'Classic Tamil Nadu spicy curry made with fresh-ground coconut paste, fennel seeds, and roasted dry red chillies.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/chettinad-chicken-curry.png' },
    { id: 'c6', name: 'Malabar Fish Curry', price: 420, desc: 'Fish steaks slow cooked in a rich, tangy gravy of coconut milk, tamarind, and green chillies.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Fish', image: './images/restaurants/dakshin-veda/menu/malabar-fish-curry.png' }
  ],
  biryanis: [
    { id: 'c7', name: 'Seeraga Samba Mutton Biryani', price: 450, desc: 'Aromatic short-grain Seeraga Samba rice cooked with tender mutton chunks and traditional spices.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/seeraga-samba-mutton-biryani.webp' },
    { id: 'c8', name: 'Ambur Chicken Biryani', price: 390, desc: 'Samba rice layered with marinated chicken, cooked in authentic copper pots with mint leaves and local curd.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/ambur-chicken-biryani.webp' }
  ],
  vegetarian: [
    { id: 'c9', name: 'Ghee Roast Masala Dosa', price: 180, desc: 'Crispy paper-thin fermented rice crepe cooked with pure cow ghee, stuffed with seasoned potato mash.', veg: true, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/ghee-roast-masala-dosa.webp' },
    { id: 'c10', name: 'Steamed Podi Idli (4 Pcs)', price: 130, desc: 'Fluffy steamed rice cakes tossed in pure sesame oil and spiced gun powder (milagai podi).', veg: true, tags: ['Vegan', 'Jain-friendly'], spice: 2, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/steamed-podi-idli.png' }
  ],
  'non-vegetarian': [
    { id: 'c11', name: 'Madurai Mutton Chukka', price: 399, desc: 'Pan-fried tender lamb cubes tossed with dry spices, caramelized small shallots, and fresh curry leaves.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/madurai-mutton-chukka.png' },
    { id: 'c12', name: 'Kozhi Varutha Curry', price: 340, desc: 'Kerala-style chicken curry cooked with roasted coconut chunks, fennel, and aromatic spices.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: './images/restaurants/dakshin-veda/menu/kozhi-varutha-curry.png' }
  ],
  desserts: [
    { id: 'c13', name: 'Elaneer Payasam', price: 150, desc: 'A chilled sweet dessert made of fresh tender coconut pulp, coconut milk, and sweetened milk.', veg: true, tags: ['Gluten-free'], spice: 0, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/elaneer-payasam.png' },
    { id: 'c14', name: 'Semiya Payasam', price: 120, desc: 'Warm vermicelli pudding slow-cooked in cardamom milk, roasted cashew nuts and raisins.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Dairy, Gluten', image: './images/restaurants/dakshin-veda/menu/semiya-payasam.png' }
  ],
  beverages: [
    { id: 'c15', name: 'Madras Filter Coffee', price: 80, desc: 'Traditional South Indian coffee brewed in a brass filter, frothed with hot creamy milk.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/madras-filter-coffee.png' },
    { id: 'c16', name: 'Neer Mor (Spiced Buttermilk)', price: 90, desc: 'Refreshing churned yogurt drink seasoned with green chillies, ginger, mustard seeds and fresh coriander.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'Dairy', image: './images/restaurants/dakshin-veda/menu/neer-mor.png' }
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [orderCategory, setOrderCategory] = useState('starters');
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState('delivery'); // pickup or delivery
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCateringModal, setShowCateringModal] = useState(false);
  
  const [booking, setBooking] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'indoor', request: '' });
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', payment: 'upi' });
  const [cateringForm, setCateringForm] = useState({ name: '', email: '', phone: '', eventType: 'pongal', details: '' });

  const specialOffers = [
    { title: 'Pongal Festival Thali Special', offer: 'Festive Combo', desc: 'Indulge in our unlimited Pongal Special Thali featuring Sweet Pongal, Sambar, Vada, Appam, and Filter Coffee. Available during Pongal week!' },
    { title: 'Chennai Office Lunch Combo', offer: '20% OFF', desc: 'Order 2 Chettinad Chicken Curries or Podi Idlis and get a flat 20% discount. Valid Mon-Fri, 12:00 PM - 3:00 PM.' }
  ];

  // 2. State & Handlers
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Table Reserved! We look forward to hosting you, ${booking.name}, on ${booking.date} at ${booking.time} for ${booking.guests} guests (Seating preference: ${booking.preference.toUpperCase()}). Confirmation SMS sent to ${booking.phone}`);
    setBooking({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'indoor', request: '' });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your enquiry, ${cateringForm.name}. Our festival catering manager will contact you at ${cateringForm.phone} shortly.`);
    setCateringForm({ name: '', email: '', phone: '', eventType: 'pongal', details: '' });
    setShowCateringModal(false);
  };

  const updateCartQty = (id, change) => {
    const newQty = (cart[id] || 0) + change;
    if (newQty <= 0) {
      const updated = { ...cart };
      delete updated[id];
      setCart(updated);
    } else {
      setCart({ ...cart, [id]: newQty });
    }
  };

  const getCartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

  const getCartTotal = () => {
    let total = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      Object.values(menuData).forEach(catItems => {
        const match = catItems.find(item => item.id === id);
        if (match) total += match.price * qty;
      });
    });
    return total;
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed! Your ${orderType} order is confirmed for ${checkoutForm.name}. Total: â‚¹${getCartTotal()}. Payment via: ${checkoutForm.payment.toUpperCase()}`);
    setCart({});
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <div className="casual-dining-container" id="home">
      {/* 1. Header Navigation Bar */}
      <nav className="casual-navbar">
        <a href="#home" className="casual-nav-logo">Southern Ember</a>
        <ul className="casual-nav-links">
          <li><a href="#home" className="casual-nav-link">Home</a></li>
          <li><a href="#offers" className="casual-nav-link">Offers</a></li>
          <li><a href="#menu" className="casual-nav-link">Menu</a></li>
          <li><a href="#ordering" className="casual-nav-link">Order Online</a></li>
          <li><a href="#reservations" className="casual-nav-link">Book Table</a></li>
          <li><a href="#about" className="casual-nav-link">About</a></li>
          <li><a href="#catering" className="casual-nav-link">Catering</a></li>
          <li><a href="#contact" className="casual-nav-link">Location</a></li>
        </ul>
        <button className="casual-btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }} onClick={() => setIsCartOpen(true)}>
          ðŸ›’ Cart ({getCartCount()})
        </button>
      </nav>

      {/* 1. Home / Hero Section */}
      <section className="casual-hero" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1600&q=80') no-repeat center center", backgroundSize: 'cover' }}>
        <div className="casual-hero-content">
          <ScrollReveal animation="fade-in-down">
            <span style={{ fontSize: '0.95rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#ffedd5', display: 'block', marginBottom: '15px', fontWeight: 600 }}>
              Glow of South Indian Spices
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={150}>
            <h1 className="casual-font-serif" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '20px', lineHeight: 1.2 }}>
              Southern Ember
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={300}>
            <p style={{ fontSize: '1.05rem', color: '#ffedd5', marginBottom: '35px', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 35px auto' }}>
              We blend heirloom Chennai recipes with contemporary execution. Explore crispy Ghee Roast Dosas, claypot idlis, Chettinad chicken, and fresh filter coffee. Open Daily 11:30 AM - 10:30 PM.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={450}>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#menu" className="casual-btn-primary" style={{ textDecoration: 'none' }}>View Menu</a>
              <a href="#reservations" className="casual-btn-outline" style={{ textDecoration: 'none' }}>Book a Table</a>
              <a href="#ordering" className="casual-btn-primary" style={{ textDecoration: 'none', background: '#ffe4e6', color: '#be123c' }}>Order Online</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Special Offers Section */}
      <section className="casual-section-padding" id="offers" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Spiced Offers & Festivals</h2>
          <p className="casual-section-subtitle">Exquisite combo meals and festival promotions curated for you.</p>
        </ScrollReveal>
        <div className="casual-offers-grid">
          {specialOffers.map((o, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150}>
              <div className="casual-offer-card">
                <span className="casual-offer-badge" style={{ background: '#15803d' }}>{o.offer}</span>
                <h3 className="casual-font-serif" style={{ fontSize: '1.4rem', color: '#3e2723', marginBottom: '10px' }}>{o.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#78716c', margin: 0, lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Menu Section (8 Categories) */}
      <section className="casual-section-padding" id="menu" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">The Southern Menu</h2>
          <p className="casual-section-subtitle">Browse through our authentic South Indian dishes prepared freshly by our culinary team.</p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="casual-menu-category-tabs">
            {Object.keys(menuData).map(catKey => (
              <button
                key={catKey}
                className={`casual-menu-category-btn ${activeCategory === catKey ? 'active' : ''}`}
                onClick={() => setActiveCategory(catKey)}
                style={{ textTransform: 'capitalize' }}
              >
                {catKey.replace('-', ' ')}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="casual-menu-grid">
          {menuData[activeCategory].map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-in-up" delay={idx * 100}>
              <div className="casual-menu-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="casual-menu-img" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "./images/restaurants/fallback-food.webp";
                  }}
                />
                <div className="casual-menu-info">
                  <div className="casual-menu-header">
                    <span className="casual-menu-name">{item.name}</span>
                    <span className="casual-menu-price">â‚¹{item.price}</span>
                  </div>
                  <p className="casual-menu-desc">{item.desc}</p>
                  <div className="casual-item-meta">
                    <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                      {item.veg ? 'ðŸŸ¢ Veg' : 'ðŸ”´ Non-Veg'}
                    </span>
                    {item.spice > 0 && (
                      <span className="casual-spice-badge">
                        {'ðŸŒ¶ï¸'.repeat(item.spice)}
                      </span>
                    )}
                    {item.tags && item.tags.map(t => (
                      <span key={t} className="casual-tag-badge" style={{ marginLeft: '5px', fontSize: '0.7rem', color: '#15803d', background: '#f0fdf4', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="casual-allergen-info">Allergens: {item.allergens}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. Online Ordering Section */}
      <section className="casual-section-padding" id="ordering" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Order Online</h2>
          <p className="casual-section-subtitle">Select pickup or delivery and add fresh South Indian delicacies straight to your cart.</p>
        </ScrollReveal>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
              <div className="casual-order-toggle">
                <button className={`casual-order-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`} onClick={() => setOrderType('delivery')}>Delivery</button>
                <button className={`casual-order-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`} onClick={() => setOrderType('pickup')}>Pickup</button>
              </div>
              <div style={{ textTransform: 'capitalize', fontWeight: 700, color: '#3e2723' }}>
                Active Category:
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  style={{ marginLeft: '10px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #d6d3d1' }}
                >
                  {Object.keys(menuData).map(c => <option key={c} value={c}>{c.replace('-', ' ')}</option>)}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="casual-menu-grid">
            {menuData[orderCategory].map((item, idx) => (
              <ScrollReveal key={item.id} animation="fade-in-up" delay={idx * 100}>
                <div className="casual-menu-item" style={{ background: 'white' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="casual-menu-img" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "./images/restaurants/fallback-food.webp";
                    }}
                  />
                  <div className="casual-menu-info">
                    <div className="casual-menu-header">
                      <span className="casual-menu-name">{item.name}</span>
                      <span className="casual-menu-price">â‚¹{item.price}</span>
                    </div>
                    <p className="casual-menu-desc" style={{ marginBottom: '15px' }}>{item.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                        {item.veg ? 'ðŸŸ¢ Veg' : 'ðŸ”´ Non-Veg'}
                      </span>
                      {cart[item.id] ? (
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button className="casual-btn-primary" style={{ padding: '4px 10px' }} onClick={() => updateCartQty(item.id, -1)}>-</button>
                          <span style={{ fontWeight: 700 }}>{cart[item.id]}</span>
                          <button className="casual-btn-primary" style={{ padding: '4px 10px' }} onClick={() => updateCartQty(item.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="casual-btn-primary" style={{ padding: '6px 16px', fontSize: '0.8rem' }} onClick={() => updateCartQty(item.id, 1)}>
                          Add to Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reservations Section */}
      <section className="casual-section-padding" id="reservations" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Reserve a Seating</h2>
          <p className="casual-section-subtitle">Secure your dining spot. We welcome bookings for small and large parties.</p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="casual-booking-split">
            <div className="casual-booking-info-box" style={{ background: '#fdfbf7', border: '1px solid rgba(194,65,12,0.1)' }}>
              <h3 className="casual-font-serif" style={{ fontSize: '1.6rem', color: '#3e2723', marginBottom: '15px' }}>Weekly Dining Schedule</h3>
              <p style={{ fontSize: '0.9rem', color: '#78716c', lineHeight: 1.6, marginBottom: '25px' }}>
                Join us for freshly ground South Indian spices. Online reservations are active 24/7. Walk-ins are accommodated based on seating status.
              </p>
              <div className="casual-hours-item" style={{ borderBottom: '1px solid rgba(194,65,12,0.1)' }}>
                <span>Monday - Friday</span>
                <span>11:30 AM - 10:30 PM</span>
              </div>
              <div className="casual-hours-item">
                <span>Saturday - Sunday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="casual-booking-box" style={{ background: '#fdfbf7', padding: '30px' }}>
              <div className="casual-form-grid">
                <div className="casual-form-group">
                  <span className="casual-form-label">Full Name</span>
                  <input type="text" required className="casual-form-control" value={booking.name} onChange={(e) => setBooking({...booking, name: e.target.value})} placeholder="Ananya Iyer" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Mobile Number</span>
                  <input type="tel" required className="casual-form-control" value={booking.phone} onChange={(e) => setBooking({...booking, phone: e.target.value})} placeholder="+91 98765 43210" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Email Address</span>
                  <input type="email" required className="casual-form-control" value={booking.email} onChange={(e) => setBooking({...booking, email: e.target.value})} placeholder="ananya@example.com" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Select Date</span>
                  <input type="date" required className="casual-form-control" value={booking.date} onChange={(e) => setBooking({...booking, date: e.target.value})} />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Seating Hour</span>
                  <select required className="casual-form-control" value={booking.time} onChange={(e) => setBooking({...booking, time: e.target.value})}>
                    <option value="">Choose Time</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Seating Preference</span>
                  <select className="casual-form-control" value={booking.preference} onChange={(e) => setBooking({...booking, preference: e.target.value})}>
                    <option value="indoor">Indoor Dining Room</option>
                    <option value="garden">Traditional Open Garden</option>
                  </select>
                </div>
                <div className="casual-form-group" style={{ gridColumn: 'span 2' }}>
                  <span className="casual-form-label">Guests Count</span>
                  <select className="casual-form-control" value={booking.guests} onChange={(e) => setBooking({...booking, guests: e.target.value})}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="casual-btn-primary" style={{ width: '100%' }}>Book Seating Table</button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. About Us Section */}
      <section className="casual-section-padding" id="about" style={{ background: '#fdfbf7' }}>
        <div className="casual-about-split">
          <ScrollReveal animation="fade-in-left">
            <img src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80" alt="Authentic South Indian Curry Plating" className="casual-about-img" />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={150}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#c2410c', fontWeight: 700, textTransform: 'uppercase', tracking: '1px', display: 'block', marginBottom: '10px' }}>
                Bistro Philosophy
              </span>
              <h2 className="casual-font-serif" style={{ fontSize: '2.5rem', color: '#3e2723', margin: '0 0 20px 0', fontWeight: 800 }}>
                Soil to South Indian Griddle
              </h2>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#78716c', marginBottom: '15px' }}>
                Southern Ember was founded in Chennai with a simple vision: serving premium, organic South Indian culinary art sourced from local farmers.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#78716c' }}>
                Our kitchen eliminates processed oils, utilizing pure cold-pressed coconut oil, hand-churned cow ghee, and fresh organic curry leaves. We believe that good cooking starts with local heritage and soil integrity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Culinary Team Section */}
      <section className="casual-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">The Kitchen Crew</h2>
          <p className="casual-section-subtitle">The creative minds crafting your seasonal South Indian plates.</p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in" delay={100}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=350&q=80" alt="Chef Meenakshi Iyer" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', marginBottom: '15px' }} />
              <h3 className="casual-font-serif" style={{ fontSize: '1.25rem', color: '#3e2723' }}>Chef Meenakshi Iyer</h3>
              <span style={{ fontSize: '0.8rem', color: '#c2410c', fontWeight: 700, textTransform: 'uppercase' }}>Executive Chef & Founder</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={250}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=350&q=80" alt="Chef Elena Dev" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', marginBottom: '15px' }} />
              <h3 className="casual-font-serif" style={{ fontSize: '1.25rem', color: '#3e2723' }}>Chef Elena Dev</h3>
              <span style={{ fontSize: '0.8rem', color: '#c2410c', fontWeight: 700, textTransform: 'uppercase' }}>Pastry & Dessert Creator</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Events & Catering Section */}
      <section className="casual-section-padding" id="catering" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Pongal & Private Events Catering</h2>
          <p className="casual-section-subtitle">We manage Pongal feasts, corporate events, and wedding catering requests in Chennai.</p>
        </ScrollReveal>

        <div className="casual-timeline">
          <ScrollReveal animation="fade-in-up">
            <div className="casual-timeline-item">
              <div className="casual-timeline-img-wrapper">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" alt="Wedding Event" className="casual-timeline-img" />
              </div>
              <div className="casual-timeline-content">
                <h3 className="casual-font-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Weddings & Receptions</h3>
                <p style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Full-service South Indian style catering on banana leaves or copper buffet setups. We customize menus for weddings, receptions, and family events.
                </p>
                <button className="casual-btn-primary" onClick={() => setShowCateringModal(true)}>Enquire Now</button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={150}>
            <div className="casual-timeline-item reverse">
              <div className="casual-timeline-img-wrapper">
                <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80" alt="Corporate Luncheon" className="casual-timeline-img" />
              </div>
              <div className="casual-timeline-content">
                <h3 className="casual-font-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Corporate Office Luncheons</h3>
                <p style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Hygienic South Indian meal boxes and mini-tiffin platters delivered hot directly to your office boardrooms in Chennai.
                </p>
                <button className="casual-btn-primary" onClick={() => setShowCateringModal(true)}>Enquire Now</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Reviews / Testimonials Section */}
      <section className="casual-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Testimonials</h2>
          <p className="casual-section-subtitle">Read feedback from our dining guests.</p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="casual-testimonial-card" style={{ background: '#fdfbf7', border: '1px solid rgba(194,65,12,0.1)' }}>
            <span style={{ fontSize: '1.25rem', color: '#f59e0b', display: 'block', marginBottom: '10px' }}>â­â­â­â­â­</span>
            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: '#3e2723', marginBottom: '15px' }}>
              "The Ghee Roast Dosa and Madras Filter Coffee were absolutely spectacular. The aroma of pure ghee and fresh coconut chutney transports you to food heaven."
            </p>
            <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#c2410c' }}>- Priya Nair</strong>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Gallery Section */}
      <section className="casual-section-padding" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Southern Moments</h2>
          <p className="casual-section-subtitle">Take a visual stroll through our dishes, kitchen layout, and event nights.</p>
        </ScrollReveal>

        <div className="casual-gallery-mosaic">
          <div className="casual-gallery-item-mosaic casual-gallery-tall">
            <img src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80" alt="Medu Vada" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80" alt="Golden Dosa" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" alt="Fluffy Idlis" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" alt="Madras Coffee Pour" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" alt="Chicken 65 Frying" />
          </div>
        </div>
      </section>

      {/* 11. Social Media Section */}
      <section className="casual-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Social Instagram Wall</h2>
          <p className="casual-section-subtitle">Follow us @DakshinVeda on Instagram for daily spice updates.</p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', maxWidth: '1000px', margin: '0 auto' }}>
          {['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=300&q=80'].map((url, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', height: '180px' }}>
                <img src={url} alt="Insta Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 12. Location / Contact Section */}
      <section className="casual-section-padding" id="contact" style={{ background: '#fdfbf7', borderTop: '1px solid #e2e8f0' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="casual-section-title casual-font-serif">Find Southern Ember</h2>
        </ScrollReveal>
        <div className="casual-contact-grid">
          <ScrollReveal animation="fade-in-left">
            <div className="casual-contact-info">
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#3e2723' }}>Restaurant Address</h4>
                <p style={{ fontSize: '0.9rem', color: '#78716c', margin: 0 }}>101 Temple Road, Adyar, Chennai, Tamil Nadu 600020</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#3e2723' }}>Phone Support</h4>
                <p style={{ fontSize: '0.9rem', color: '#78716c', margin: 0 }}>
                  <a href="tel:+914424900000" style={{ color: '#c2410c', textDecoration: 'none', fontWeight: 700 }}>+91 44 2490 0000</a> (Click to Call)
                </p>
                <a href="https://wa.me/914424900000" target="_blank" rel="noopener noreferrer" className="casual-whatsapp-btn" style={{ background: '#15803d', display: 'inline-flex', padding: '6px 12px', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '0.8rem', marginTop: '10px', fontWeight: 600 }}>
                  ðŸ’¬ WhatsApp Live Chat
                </a>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#3e2723' }}>Contact Email</h4>
                <p style={{ fontSize: '0.9rem', color: '#78716c', margin: 0 }}>
                  <a href="mailto:contact@dakshinveda.example" style={{ color: '#c2410c', textDecoration: 'none' }}>contact@dakshinveda.example</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={150}>
            <div style={{ height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <iframe
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.634125745163!2d80.24151767484242!3d13.058988987264624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526644f77c3cd1%3A0x6001ab9bf8e718b5!2sNungambakkam%20High%20Rd%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1652393282110!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Online Ordering Drawer */}
      <div className={`casual-cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="casual-cart-header">
          <span>Active Order Basket</span>
          <button style={{ background: 'transparent', border: 'none', color: '#c2410c', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsCartOpen(false)}>Ã—</button>
        </div>
        <div className="casual-cart-body">
          {getCartCount() === 0 ? (
            <p style={{ textAlign: 'center', color: '#78716c', marginTop: '40px' }}>Your basket is currently empty.</p>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              let matchItem = null;
              Object.values(menuData).forEach(cat => {
                const found = cat.find(i => i.id === id);
                if (found) matchItem = found;
              });
              return matchItem ? (
                <div key={id} className="casual-cart-item" style={{ borderBottom: '1px solid #f5f5f4', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h5 style={{ margin: 0, fontWeight: 700, color: '#3e2723' }}>{matchItem.name}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#c2410c' }}>â‚¹{matchItem.price}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="casual-btn-primary" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, -1)}>-</button>
                    <span>{qty}</span>
                    <button className="casual-btn-primary" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, 1)}>+</button>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="casual-cart-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', color: '#3e2723' }}>
            <span>Total Value:</span>
            <span>â‚¹{getCartTotal()}</span>
          </div>
          <button className="casual-btn-primary" style={{ width: '100%' }} disabled={getCartCount() === 0} onClick={() => setShowCheckout(true)}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Checkout details Modal */}
      {showCheckout && (
        <div className="casual-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
          <div className="casual-modal-content" style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '90%', maxWidth: '500px', position: 'relative' }}>
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#c2410c' }} onClick={() => setShowCheckout(false)}>Ã—</button>
            <h3 className="casual-font-serif" style={{ fontSize: '1.6rem', color: '#3e2723', marginBottom: '20px' }}>Secure Checkout</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="casual-form-group">
                  <span className="casual-form-label">Full Name</span>
                  <input type="text" required className="casual-form-control" value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} placeholder="Ananya Iyer" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Mobile Number</span>
                  <input type="text" required className="casual-form-control" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})} placeholder="+91 98765 43210" />
                </div>
                {orderType === 'delivery' && (
                  <div className="casual-form-group">
                    <span className="casual-form-label">Delivery Address</span>
                    <input type="text" required className="casual-form-control" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="Enter flat/street in Chennai" />
                  </div>
                )}
                <div className="casual-form-group">
                  <span className="casual-form-label">Payment Method</span>
                  <select className="casual-form-control" value={checkoutForm.payment} onChange={(e) => setCheckoutForm({...checkoutForm, payment: e.target.value})}>
                    <option value="upi">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="card">Credit / Debit Card</option>
                    <option value="netbanking">Net Banking</option>
                    <option value="restaurant">Pay at Restaurant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="casual-btn-primary" style={{ width: '100%' }}>Confirm Order (â‚¹{getCartTotal()})</button>
            </form>
          </div>
        </div>
      )}

      {/* Catering Modal */}
      {showCateringModal && (
        <div className="casual-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
          <div className="casual-modal-content" style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '90%', maxWidth: '500px', position: 'relative' }}>
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#c2410c' }} onClick={() => setShowCateringModal(false)}>Ã—</button>
            <h3 className="casual-font-serif" style={{ fontSize: '1.6rem', color: '#3e2723', marginBottom: '20px' }}>Festival Catering Enquiry</h3>
            <form onSubmit={handleCateringSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="casual-form-group">
                  <span className="casual-form-label">Contact Name</span>
                  <input type="text" required className="casual-form-control" value={cateringForm.name} onChange={(e) => setCateringForm({...cateringForm, name: e.target.value})} placeholder="Priya Nair" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Email Address</span>
                  <input type="email" required className="casual-form-control" value={cateringForm.email} onChange={(e) => setCateringForm({...cateringForm, email: e.target.value})} placeholder="priya@example.com" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Mobile Number</span>
                  <input type="text" required className="casual-form-control" value={cateringForm.phone} onChange={(e) => setCateringForm({...cateringForm, phone: e.target.value})} placeholder="+91 98765 43210" />
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Catering Event</span>
                  <select className="casual-form-control" value={cateringForm.eventType} onChange={(e) => setCateringForm({...cateringForm, eventType: e.target.value})}>
                    <option value="pongal">Traditional Pongal Feast</option>
                    <option value="diwali">Diwali Corporate Party</option>
                    <option value="wedding">Wedding / Family Function</option>
                  </select>
                </div>
                <div className="casual-form-group">
                  <span className="casual-form-label">Event Details</span>
                  <textarea rows="3" className="casual-form-control" value={cateringForm.details} onChange={(e) => setCateringForm({...cateringForm, details: e.target.value})} placeholder="Guest count, date, setup preference..."></textarea>
                </div>
              </div>
              <button type="submit" className="casual-btn-primary" style={{ width: '100%' }}>Submit Catering Request</button>
            </form>
          </div>
        </div>
      )}

      {/* 12. Footer Section */}
      <Footer
        restaurantName="Southern Ember"
        tagline="Authentic South Indian culinary art, Chennai heritage recipes, and frothed filter coffee."
        themeColor="#c2410c"
        dark={true}
      />
    </div>
  );
}


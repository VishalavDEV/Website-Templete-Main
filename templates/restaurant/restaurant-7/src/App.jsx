import React, { useState } from 'react';
import './styles/fine.css';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export const menuData = {
  starters: [
    { id: 'fd1', name: 'Truffle Paneer Tikka', price: 340, desc: 'Organic cottage cheese skewers glazed with black truffle extract and charred inside claypot ovens.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'Dairy', image: './images/restaurants/kesar-courtyard/menu/truffle-paneer-tikka.webp' },
    { id: 'fd2', name: 'Deconstructed Chaat Spheres', price: 260, desc: 'Crispy potato skin nests filled with spiced chickpeas, sweet curd snow, and spherified tamarind gastrique.', veg: true, tags: ['None'], spice: 1, allergens: 'Dairy, Gluten', image: './images/restaurants/kesar-courtyard/menu/deconstructed-chaat-spheres.webp' }
  ],
  soups: [
    { id: 'fd3', name: 'Mushroom Galangal Shorba', price: 180, desc: 'A modern clear broth of wild mushrooms, galangal, lemongrass, and Indian forest herbs.', veg: true, tags: ['Vegan', 'Gluten-free'], spice: 2, allergens: 'None', image: './images/restaurants/kesar-courtyard/menu/mushroom-galangal-shorba.png' },
    { id: 'fd4', name: 'Saffron Lobsters Shorba', price: 280, desc: 'Creamy reduction of Maine lobster broth infused with Kashmiri saffron and cardamoms.', veg: false, tags: ['Gluten-free'], spice: 1, allergens: 'Shellfish, Dairy', image: './images/restaurants/kesar-courtyard/menu/saffron-lobster-shorba.png' }
  ],
  'main-course': [
    { id: 'fd5', name: 'Indian-Spiced Angus Ribeye', price: 799, desc: 'Pan-seared premium ribeye steak dry-rubbed with native Indian garam masala spices, parsnip mash, and curry jus.', veg: false, tags: ['None'], spice: 2, allergens: 'None', image: './images/restaurants/kesar-courtyard/menu/indian-spiced-angus-ribeye.png' },
    { id: 'fd6', name: 'Atelier Masala Prawns', price: 620, desc: 'Jumbo prawns pan-roasted with gun powder masala, served over coconut cilantro couscous.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Shellfish', image: './images/restaurants/kesar-courtyard/menu/atelier-masala-prawns.png' }
  ],
  biryanis: [
    { id: 'fd7', name: 'Truffle Wild Mushroom Biryani', price: 499, desc: 'Aged basmati rice slow cooked in iron vessels with porcini mushrooms, truffles, and gold leaves.', veg: true, tags: ['Jain-friendly', 'Gluten-free'], spice: 1, allergens: 'Dairy', image: './images/restaurants/kesar-courtyard/menu/truffle-wild-mushroom-biryani.png' },
    { id: 'fd8', name: 'Slow-Smoked Lamb Biryani', price: 599, desc: 'Rosewater and cardamom-spiced basmati rice layered with 24-hour slow-smoked lamb leg chunks.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: './images/restaurants/kesar-courtyard/menu/slow-smoked-lamb-biryani.png' }
  ],
  vegetarian: [
    { id: 'fd9', name: 'Smoked Yellow Dal Atelier', price: 340, desc: 'Creamy split yellow lentils tempered with ghee, dry red chillies, and applewood smoke.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 2, allergens: 'Dairy', image: './images/restaurants/kesar-courtyard/menu/smoked-yellow-dal-atelier.png' },
    { id: 'fd10', name: 'Cranberry Malai Kofta', price: 420, desc: 'Cottage cheese croquettes stuffed with dried cranberries, served in creamy cashew-saffron gravy.', veg: true, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy, Nuts', image: './images/restaurants/kesar-courtyard/menu/cranberry-malai-kofta.png' }
  ],
  'non-vegetarian': [
    { id: 'fd11', name: 'Tandoori Duck Confit', price: 680, desc: 'French duck leg slow-cooked in tandoor oven with spiced honey glaze.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: './images/restaurants/kesar-courtyard/menu/tandoori-duck-confit.png' },
    { id: 'fd12', name: 'Wagyu Seekh Kebab', price: 750, desc: 'Minced Wagyu beef spiced with royal mace, garlic, and cardamom, flame-grilled on metal skewers.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: './images/restaurants/kesar-courtyard/menu/wagyu-seekh-kebab.png' }
  ],
  desserts: [
    { id: 'fd13', name: 'Saffron Rose Cheesecake', price: 280, desc: 'Eggless baked cream cheese infused with saffron threads, served over almond crust with rose petals.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Dairy, Nuts, Gluten', image: './images/restaurants/kesar-courtyard/menu/saffron-rose-cheesecake.png' },
    { id: 'fd14', name: 'Dark Chocolate Chili Dome', price: 260, desc: '70% cocoa chocolate dome melted with spicy cinnamon caramel sauce over hazelnut praline.', veg: true, tags: ['None'], spice: 1, allergens: 'Dairy, Nuts', image: './images/restaurants/kesar-courtyard/menu/dark-chocolate-chili-dome.png' }
  ],
  beverages: [
    { id: 'fd15', name: 'Botanical Masala Mocktail', price: 160, desc: 'Fresh pressed green apples, ginger juice, mint, sparkling soda, finished with black salt rim.', veg: true, tags: ['Vegan', 'Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'None', image: './images/restaurants/kesar-courtyard/menu/botanical-masala-mocktail.png' },
    { id: 'fd16', name: 'Saffron Almond Milkshake', price: 180, desc: 'Chilled organic almond milk blended with Kashmiri saffron, cardamoms, and raw honey.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Nuts', image: './images/restaurants/kesar-courtyard/menu/saffron-almond-milkshake.png' }
  ]
};

export default function FineDining() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [orderCategory, setOrderCategory] = useState('starters');
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState('delivery'); // pickup or delivery
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCateringModal, setShowCateringModal] = useState(false);

  const [booking, setBooking] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'chefs-counter', request: '' });
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', payment: 'upi' });
  const [cateringForm, setCateringForm] = useState({ name: '', email: '', phone: '', eventType: 'diwali', details: '' });

  const specialOffers = [
    { title: 'The Sommelier Gastronomy Pairing', offer: 'Exclusive Pairing', desc: 'Order any 2 Indian Fusion Main Courses and receive two complimentary Botanical Masala Mocktails.' },
    { title: 'Atelier Saffron Tasting Menu', offer: 'Gourmet Flight', desc: 'Indulge in our 5-course signature fusion flight including Truffle Paneer Tikka, Saffron Shorba, and Saffron Cheesecake. ₹1999 pp.' }
  ];

  // 2. Handlers
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Gastronomy Table Secured! Reservation confirmed for ${booking.name} on ${booking.date} at ${booking.time} for ${booking.guests} guests (Seating preference: ${booking.preference.toUpperCase()}). Confirmation SMS sent to ${booking.phone}`);
    setBooking({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'chefs-counter', request: '' });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Logged! Our modern gastronomy events team will contact you at ${cateringForm.phone} shortly.`);
    setCateringForm({ name: '', email: '', phone: '', eventType: 'diwali', details: '' });
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
      Object.values(menuData).forEach(cat => {
        const item = cat.find(i => i.id === id);
        if (item) total += item.price * qty;
      });
    });
    return total;
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert(`Gastronomy Feast Ordered! Your fusion plates are prepared for ${checkoutForm.name}. Total: ₹${getCartTotal()}. Paid via: ${checkoutForm.payment.toUpperCase()}`);
    setCart({});
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fine-dining-container" id="home">
      {/* 1. Header Navigation Bar */}
      <nav className="fine-navbar">
        <a href="#home" className="fine-nav-logo">Masala Atelier</a>
        <ul className="fine-nav-links">
          <li><a href="#home" className="fine-nav-link">Home</a></li>
          <li><a href="#offers" className="fine-nav-link">Offers</a></li>
          <li><a href="#menu" className="fine-nav-link">Menu</a></li>
          <li><a href="#ordering" className="fine-nav-link">Order Online</a></li>
          <li><a href="#reservations" className="fine-nav-link">Book Seat</a></li>
          <li><a href="#about" className="fine-nav-link">About</a></li>
          <li><a href="#catering" className="fine-nav-link">Catering</a></li>
          <li><a href="#contact" className="fine-nav-link">Location</a></li>
        </ul>
        <button className="fine-btn-gold" style={{ padding: '6px 16px', fontSize: '0.8rem' }} onClick={() => setIsCartOpen(true)}>
          🛒 Cart ({getCartCount()})
        </button>
      </nav>

      {/* 1. Home Section */}
      <section className="fine-hero">
        <div className="fine-hero-overlay">
          <ScrollReveal animation="fade-in-down">
            <span className="fine-font-serif fine-gold-text" style={{ fontSize: '1.25rem', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
              Masala Atelier
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <h1 className="fine-font-serif fine-hero-title">
              Contemporary <span className="fine-gold-text">Fine Dining</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="zoom-in" delay={400}>
            <div className="fine-section-divider"></div>
            <p style={{ fontSize: '0.95rem', fontWeight: 400, marginBottom: '35px', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '2px', color: '#666', maxWidth: '600px', margin: '0 auto 35px auto' }}>
              A contemporary Indian fine dining experience in Mumbai. Open Daily 6:30 PM - 11:30 PM.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={600}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#menu" className="fine-btn-gold" style={{ textDecoration: 'none' }}>Gastronomy Menu</a>
              <a href="#reservations" className="fine-btn-outline" style={{ textDecoration: 'none' }}>Book Counter</a>
              <a href="#ordering" className="fine-btn-gold" style={{ textDecoration: 'none', background: 'white', color: '#1c1c1c', borderColor: '#1c1c1c' }}>Order Online</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Special Offers Section */}
      <section className="fine-section-padding" id="offers" style={{ background: '#fdfdfd' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Exquisite Gastronomy Sets</span>
            <h2 className="fine-font-serif fine-section-title">Atelier Fusion Offers</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="fine-menu-category-tabs" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {specialOffers.map((o, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150}>
              <div style={{ border: '1px solid #e5e5e0', padding: '30px', background: 'white', borderRadius: '4px' }}>
                <span style={{ fontSize: '0.75rem', color: '#d45b27', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>{o.offer}</span>
                <h3 className="fine-font-serif" style={{ fontSize: '1.5rem', color: '#1c1c1c', marginBottom: '15px' }}>{o.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: 1.7 }}>{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Menu Section (8 Categories) */}
      <section className="fine-section-padding" id="menu" style={{ background: 'white', borderTop: '1px solid #e5e5e0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Sensory Selection</span>
            <h2 className="fine-font-serif fine-section-title">The Fusion Menu</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="fine-menu-category-tabs">
            {Object.keys(menuData).map(cat => (
              <button
                key={cat}
                className={`fine-menu-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{ textTransform: 'capitalize' }}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="fine-menu-list">
          {menuData[activeCategory].map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-in-up" delay={index * 120}>
              <div className="fine-menu-item" style={{ display: 'flex', gap: '20px', padding: '15px 0' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="fine-menu-img" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/restaurants/fallback-food.webp";
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div className="fine-menu-row">
                    <span className="fine-font-serif fine-menu-name">{item.name}</span>
                    <span className="fine-menu-line"></span>
                    <span className="fine-menu-price">₹{item.price}</span>
                  </div>
                  <p className="fine-menu-desc">{item.desc}</p>
                  <div className="fine-item-meta" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                      {item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                    </span>
                    {item.spice > 0 && (
                      <span className="fine-spice-badge">
                        {'🌶️'.repeat(item.spice)}
                      </span>
                    )}
                    {item.tags && item.tags.map(t => <span key={t} style={{ color: '#d45b27', fontSize: '0.72rem', fontWeight: 600 }}>• {t}</span>)}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '5px' }}>Allergens: {item.allergens}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. Online Ordering Section */}
      <section className="fine-section-padding" id="ordering" style={{ background: '#faf9f6', borderTop: '1px solid #e5e5e0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <h2 className="fine-font-serif fine-section-title">Online Fusion Order</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
              <div className="casual-order-toggle">
                <button className={`casual-order-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`} onClick={() => setOrderType('delivery')}>Delivery</button>
                <button className={`casual-order-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`} onClick={() => setOrderType('pickup')}>Pickup</button>
              </div>
              <div style={{ fontWeight: 700, color: '#1c1c1c' }}>
                Course:
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  style={{ marginLeft: '10px', padding: '6px 12px', background: 'white', border: '1px solid #e5e5e0' }}
                >
                  {Object.keys(menuData).map(c => <option key={c} value={c}>{c.replace('-', ' ')}</option>)}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="fine-menu-list">
            {menuData[orderCategory].map((item, index) => (
              <ScrollReveal key={item.id} animation="fade-in-up" delay={index * 100}>
                <div className="fine-menu-item" style={{ background: 'white', padding: '20px', borderRadius: '4px', border: '1px solid #e5e5e0', display: 'flex', gap: '20px' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="fine-menu-img" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "./images/restaurants/fallback-food.webp";
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div className="fine-menu-row">
                        <span className="fine-font-serif fine-menu-name">{item.name}</span>
                        <span className="fine-menu-line"></span>
                        <span className="fine-menu-price" style={{ color: '#d45b27' }}>₹{item.price}</span>
                      </div>
                      <p className="fine-menu-desc" style={{ marginBottom: '15px' }}>{item.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                        {item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                      </span>
                      {cart[item.id] ? (
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button className="fine-btn-gold" style={{ padding: '2px 10px' }} onClick={() => updateCartQty(item.id, -1)}>-</button>
                          <span style={{ fontWeight: 700 }}>{cart[item.id]}</span>
                          <button className="fine-btn-gold" style={{ padding: '2px 10px' }} onClick={() => updateCartQty(item.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="fine-btn-gold" style={{ padding: '6px 16px', fontSize: '0.75rem' }} onClick={() => updateCartQty(item.id, 1)}>
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
      <section className="fine-section-padding" style={{ background: 'white' }} id="reservations">
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Gastronomy Counter</span>
            <h2 className="fine-font-serif fine-section-title">Table Reservations</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="fine-modal-content" style={{ margin: '0 auto', width: '100%', maxWidth: '600px', border: '1px solid #e5e5e0' }}>
            <h3 className="fine-font-serif" style={{ textAlign: 'center', color: '#1c1c1c', fontSize: '1.5rem', marginBottom: '30px' }}>Atelier Gastronomy Request</h3>
            
            <form onSubmit={handleBookingSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Full Name</span>
                  <input type="text" required placeholder="Jane Doe" className="fastfood-form-control" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Mobile Number</span>
                  <input type="tel" required placeholder="+91 97890 12345" className="fastfood-form-control" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Email Address</span>
                  <input type="email" required placeholder="jane@example.com" className="fastfood-form-control" value={booking.email} onChange={(e) => setBooking({ ...booking, email: e.target.value })} />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Preferred Date</span>
                  <input type="date" required className="fastfood-form-control" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Banquet Time</span>
                  <select required className="fastfood-form-control" value={booking.time} onChange={(e) => setBooking({ ...booking, time: e.target.value })}>
                    <option value="">Select Time</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                  </select>
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Seating Preference</span>
                  <select className="fastfood-form-control" value={booking.preference} onChange={(e) => setBooking({ ...booking, preference: e.target.value })}>
                    <option value="chefs-counter">Gastronomy Chef Counter</option>
                    <option value="indoor">Window Side Table</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d45b27' }}>Guests</span>
                  <select className="fastfood-form-control" value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: e.target.value })}>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="fine-btn-gold" style={{ width: '100%' }}>
                SUBMIT RESERVATION REQUEST
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. About Us Section */}
      <section className="fine-section-padding" id="about" style={{ background: '#faf9f6' }}>
        <div className="casual-about-split">
          <ScrollReveal animation="fade-in-left">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Exquisite Indian Plating" className="casual-about-img" />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={150}>
            <div>
              <span className="fine-section-subtitle">Exquisite Heritage</span>
              <h2 className="fine-font-serif fine-section-title" style={{ textAlign: 'left', marginTop: '10px' }}>
                Deconstructed Indian Gastronomy
              </h2>
              <div className="fine-section-divider" style={{ margin: '15px 0 25px 0' }}></div>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#666', marginBottom: '20px' }}>
                Masala Atelier is Mumbai's premier destination for contemporary Indian dining. Founded by creative culinary artists, our kitchen specializes in food spherifications, deconstructed chaats, and local wood-smoke flavor infusions.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#666' }}>
                We combine organic spices with premium international ingredients like black truffles and Wagyu beef to deliver an unparalleled dining journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Culinary Team Section */}
      <section className="fine-section-padding" id="chefs" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Culinary Artists</span>
            <h2 className="fine-font-serif fine-section-title">The Gastronomy Masters</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', maxWidth: '1050px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-in-left" delay={100}>
            <div style={{ borderLeft: '2px solid #d45b27', paddingLeft: '30px', background: 'rgba(0,0,0,0.01)', padding: '30px', borderRadius: '4px' }}>
              <img
                src="./images/restaurants/kesar-courtyard/chef-rohan.png"
                alt="Chef Rohan Deshmukh"
                style={{ width: '100%', height: '300px', objectFit: 'cover', border: '1px solid #e5e5e0', marginBottom: '20px' }}
              />
              <span className="fine-gold-text" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Creative Director & Head Chef</span>
              <h3 className="fine-font-serif" style={{ fontSize: '1.8rem', color: '#1c1c1c', margin: '5px 0 15px 0' }}>Chef Rohan Deshmukh</h3>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                "Gastronomy is a storytelling medium. We take classic comfort tastes from Mumbai's streets and present them in deconstructed visual layers."
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={200}>
            <div style={{ borderLeft: '2px solid #d45b27', paddingLeft: '30px', background: 'rgba(0,0,0,0.01)', padding: '30px', borderRadius: '4px' }}>
              <img
                src="./images/restaurants/kesar-courtyard/chef-nikhil.png"
                alt="Chef Nikhil Sen"
                style={{ width: '100%', height: '300px', objectFit: 'cover', border: '1px solid #e5e5e0', marginBottom: '20px' }}
              />
              <span className="fine-gold-text" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Pastry Artist</span>
              <h3 className="fine-font-serif" style={{ fontSize: '1.8rem', color: '#1c1c1c', margin: '5px 0 15px 0' }}>Chef Nikhil Sen</h3>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                "Blending sweet textures with savory spices—like cardamom and saffron—leads to memorable desserts that close the dining experience with surprise."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Events & Catering Section */}
      <section className="fine-section-padding" id="catering" style={{ background: '#faf9f6' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Exquisite Moments</span>
            <h2 className="fine-font-serif fine-section-title">Fusion Catering & Private Dinners</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="fine-menu-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ScrollReveal animation="fade-in-up">
            <div style={{ background: 'white', border: '1px solid #e5e5e0', padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <h3 className="fine-font-serif" style={{ fontSize: '1.4rem', color: '#1c1c1c', margin: '0 0 10px 0' }}>Diwali Gastronomy Dinners</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>An exclusive custom menu setup with spherified starters, truffle mains, and saffron desserts for private celebrations.</p>
              </div>
              <button className="fine-btn-gold" onClick={() => setShowCateringModal(true)}>Enquire Now</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Reviews / Testimonials Section */}
      <section className="fine-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Guest Commentary</span>
            <h2 className="fine-font-serif fine-section-title">Atelier Reviews</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', background: '#faf9f6', border: '1px solid #e5e5e0', padding: '40px' }}>
            <span style={{ fontSize: '1.25rem', color: '#d45b27', display: 'block', marginBottom: '15px' }}>⭐⭐⭐⭐⭐</span>
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1.05rem', lineHeight: 1.8 }}>
              "The Truffle Paneer Tikka and deconstructed chaat were pure culinary wizardry. Savoring molecular Indian flavors in Bandra West is a memorable journey."
            </p>
            <strong style={{ display: 'block', marginTop: '20px', color: '#d45b27', letterSpacing: '1px' }}>- Sneha Reddy</strong>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Gallery Section */}
      <section className="fine-section-padding" style={{ background: '#faf9f6' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Visual Delights</span>
            <h2 className="fine-font-serif fine-section-title">The Atelier Gallery</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="casual-gallery-mosaic">
          <div className="casual-gallery-item-mosaic casual-gallery-tall">
            <img src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80" alt="Plated starter" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=500&q=80" alt="Biryani plating" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" alt="Rose Cheesecake" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" alt="Gastronomy cocktail" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80" alt="Atelier dining interior" />
          </div>
        </div>
      </section>

      {/* 11. Social Media Section */}
      <section className="fine-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Instagram Wall</span>
            <h2 className="fine-font-serif fine-section-title">The Social Feed</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80'].map((url, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ border: '1px solid #e5e5e0', padding: '10px', background: '#faf9f6', overflow: 'hidden', height: '190px' }}>
                <img src={url} alt="Social Feed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. Location / Contact Section */}
      <section className="fine-section-padding" id="contact" style={{ background: '#faf9f6', borderTop: '1px solid #e5e5e0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="fine-section-header">
            <span className="fine-section-subtitle">Locate Us</span>
            <h2 className="fine-font-serif fine-section-title">The Courtyard Location</h2>
            <div className="fine-section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="casual-contact-grid">
          <ScrollReveal animation="fade-in-left">
            <div className="casual-contact-info">
              <div>
                <h4 className="fine-font-serif fine-gold-text" style={{ fontSize: '1.25rem', margin: '0 0 5px 0' }}>Colaba Courtyard Address</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>72 Galleria Walk, Colaba, Mumbai, Maharashtra 400001</p>
              </div>
              <div>
                <h4 className="fine-font-serif fine-gold-text" style={{ fontSize: '1.25rem', margin: '0 0 5px 0' }}>Concierge Hotline</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', margin: '0 0 10px 0' }}>
                  <a href="tel:+912266100000" style={{ color: '#1c1c1c', fontWeight: 600, textDecoration: 'none' }}>+91 22 6610 0000</a>
                </p>
                <a href="https://wa.me/912266100000" target="_blank" rel="noopener noreferrer" className="fine-whatsapp-btn">
                  💬 Concierge WhatsApp Chat
                </a>
              </div>
              <div>
                <h4 className="fine-font-serif fine-gold-text" style={{ fontSize: '1.25rem', margin: '0 0 5px 0' }}>Emails</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>
                  <a href="mailto:dining@kesarcourtyard.example" style={{ color: '#d45b27', textDecoration: 'none' }}>dining@kesarcourtyard.example</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={150}>
            <div style={{ height: '300px', border: '1px solid #e5e5e0' }}>
              <iframe
                title="Masala Atelier Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.472144342202!2d72.82580761508226!3d19.043588982419075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93bf8e718b5%3A0x2a98f5a6b0c2a71c!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652393302110!5m2!1sen!2sin"
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
      <div className={`fine-cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="fine-cart-header">
          <span>Atelier Basket</span>
          <button style={{ background: 'transparent', border: 'none', color: '#d45b27', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        <div className="fine-cart-body">
          {getCartCount() === 0 ? (
            <p style={{ textAlign: 'center', color: '#64748b', marginTop: '40px' }}>Your basket is empty.</p>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              let matchItem = null;
              Object.values(menuData).forEach(cat => {
                const found = cat.find(i => i.id === id);
                if (found) matchItem = found;
              });
              return matchItem ? (
                <div key={id} className="fine-cart-item">
                  <div>
                    <h5 style={{ margin: 0, fontWeight: 700, color: '#1c1c1c' }}>{matchItem.name}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#d45b27' }}>₹{matchItem.price}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="fine-btn-gold" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, -1)}>-</button>
                    <span style={{ color: '#1c1c1c' }}>{qty}</span>
                    <button className="fine-btn-gold" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, 1)}>+</button>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="fine-cart-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', color: '#d45b27' }}>
            <span>Total Value:</span>
            <span>₹{getCartTotal()}</span>
          </div>
          <button className="fine-btn-gold" style={{ width: '100%' }} disabled={getCartCount() === 0} onClick={() => setShowCheckout(true)}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

      {/* Checkout details Modal */}
      {showCheckout && (
        <div className="fine-modal-overlay">
          <div className="fine-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#d45b27' }} onClick={() => setShowCheckout(false)}>×</button>
            <h3 className="fine-font-serif fine-gold-text" style={{ fontSize: '1.6rem', marginBottom: '20px' }}>SECURE CHECKOUT</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fine-form-group">
                  <span>Full Name</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} placeholder="Rohan Mehta" />
                </div>
                <div className="fine-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})} placeholder="+91 97890 12345" />
                </div>
                {orderType === 'delivery' && (
                  <div className="fine-form-group">
                    <span>Delivery Address</span>
                    <input type="text" required className="fastfood-form-control" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="Enter flat/street in Bandra West" />
                  </div>
                )}
                <div className="fine-form-group">
                  <span>Payment Method</span>
                  <select className="fastfood-form-control" value={checkoutForm.payment} onChange={(e) => setCheckoutForm({...checkoutForm, payment: e.target.value})}>
                    <option value="upi">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="card">Credit / Debit Card</option>
                    <option value="banking">Net Banking</option>
                    <option value="restaurant">Pay at Restaurant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="fine-btn-gold" style={{ width: '100%' }}>CONFIRM ORDER (₹{getCartTotal()})</button>
            </form>
          </div>
        </div>
      )}

      {/* Catering Modal */}
      {showCateringModal && (
        <div className="fine-modal-overlay">
          <div className="fine-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#d45b27' }} onClick={() => setShowCateringModal(false)}>×</button>
            <h3 className="fine-font-serif fine-gold-text" style={{ fontSize: '1.6rem', marginBottom: '20px' }}>GASTRONOMY EVENT ENQUIRY</h3>
            <form onSubmit={handleCateringSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fine-form-group">
                  <span>Contact Name</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.name} onChange={(e) => setCateringForm({...cateringForm, name: e.target.value})} placeholder="Rohan Mehta" />
                </div>
                <div className="fine-form-group">
                  <span>Email Address</span>
                  <input type="email" required className="fastfood-form-control" value={cateringForm.email} onChange={(e) => setCateringForm({...cateringForm, email: e.target.value})} placeholder="rohan@example.com" />
                </div>
                <div className="fine-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.phone} onChange={(e) => setCateringForm({...cateringForm, phone: e.target.value})} placeholder="+91 97890 12345" />
                </div>
                <div className="fine-form-group">
                  <span>Banquet Theme</span>
                  <select className="fastfood-form-control" value={cateringForm.eventType} onChange={(e) => setCateringForm({...cateringForm, eventType: e.target.value})}>
                    <option value="diwali">Diwali Royal Buffet</option>
                    <option value="wedding">Imperial Wedding Reception</option>
                    <option value="corporate">Gala Corporate Banquet</option>
                  </select>
                </div>
                <div className="fine-form-group">
                  <span>Special Details</span>
                  <textarea rows="3" className="fastfood-form-control" value={cateringForm.details} onChange={(e) => setCateringForm({...cateringForm, details: e.target.value})} placeholder="Describe setup details, seating requests..."></textarea>
                </div>
              </div>
              <button type="submit" className="fine-btn-gold" style={{ width: '100%' }}>SUBMIT ENQUIRY GALA</button>
            </form>
          </div>
        </div>
      )}

      {/* 12. Footer Section */}
      <Footer
        restaurantName="Masala Atelier"
        tagline="Contemporary Indian fine dining, elegant food plating, and luxury experiences."
        themeColor="#d45b27"
        dark={true}
      />
    </div>
  );
}

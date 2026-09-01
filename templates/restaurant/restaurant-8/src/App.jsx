import React, { useState } from 'react';
import './styles/seafood.css';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export const menuData = {
  starters: [
    { id: 's1', name: 'Rajasthani Mirchi Vada', price: 140, desc: 'Large mild green chillies stuffed with spiced potato mash, batter fried in gram flour, served with tamarind chutney.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 3, allergens: 'None', image: './images/restaurants/marwar-rasoi/menu/rajasthani-mirchi-vada.png' },
    { id: 's2', name: 'Pyaz Ki Kachori (2 Pcs)', price: 120, desc: 'Crispy, flaky puff pastry shells filled with a spicy onion, garlic, fennel seed mixture, served hot.', veg: true, tags: ['Vegan'], spice: 2, allergens: 'Gluten', image: './images/restaurants/marwar-rasoi/menu/pyaz-ki-kachori.png' }
  ],
  soups: [
    { id: 's3', name: 'Traditional Kadi Shorba', price: 110, desc: 'A rich warm soup made of churned yogurt broth tempered with mustard seeds, curry leaves, and cumin.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'Dairy', image: './images/restaurants/marwar-rasoi/menu/traditional-kadi-shorba.png' },
    { id: 's4', name: 'Shahi Mutton Shorba', price: 190, desc: 'Clarified baby lamb bone soup slow cooked with ginger, garlic, cloves, and mint petals.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: './images/restaurants/marwar-rasoi/menu/shahi-mutton-shorba.png' }
  ],
  'main-course': [
    { id: 's5', name: 'Royal Rajasthani Thali', price: 599, desc: 'A massive heritage platter of Dal, Baati, Churma, Gatte Ki Sabzi, Ker Sangri, Bajra Roti, and Lassi.', veg: true, tags: ['Jain-friendly'], spice: 2, allergens: 'Dairy, Gluten', image: './images/restaurants/marwar-rasoi/menu/royal-rajasthani-thali.png' },
    { id: 's6', name: 'Jaipuri Laal Maas', price: 490, desc: 'Traditional wood-fired fiery mutton curry cooked with Mathania red chillies, mustard oil, and yogurt.', veg: false, tags: ['Gluten-free'], spice: 4, allergens: 'Dairy', image: './images/restaurants/marwar-rasoi/menu/jaipuri-laal-maas.png' }
  ],
  biryanis: [
    { id: 's7', name: 'Jodhpuri Kabuli Biryani', price: 380, desc: 'Fragrant basmati rice layered with yogurt-fried bread crust, potatoes, beans, saffron, and nuts.', veg: true, tags: ['Jain-friendly', 'Gluten-free'], spice: 1, allergens: 'Dairy, Nuts, Gluten', image: './images/restaurants/marwar-rasoi/menu/jodhpuri-kabuli-biryani.png' },
    { id: 's8', name: 'Royal Lamb Dum Biryani', price: 480, desc: 'Aromatic long grain rice cooked under low dough steam pressure with ghee, baby lamb, and saffron.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: './images/restaurants/marwar-rasoi/menu/royal-lamb-dum-biryani.png' }
  ],
  vegetarian: [
    { id: 's9', name: 'Dal Baati Churma Platter', price: 340, desc: 'Three round baked Baatis served with spiced mixed lentils, pure hot cow ghee, and sweet crumbled wheat Churma.', veg: true, tags: ['None'], spice: 2, allergens: 'Dairy, Gluten', image: './images/restaurants/marwar-rasoi/menu/dal-baati-churma-platter.png' },
    { id: 's10', name: 'Ker Sangri Paneer', price: 380, desc: 'Dried desert berries (Ker) and beans (Sangri) cooked in spicy mustard oil with cottage cheese cubes.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 2, allergens: 'Dairy', image: './images/restaurants/marwar-rasoi/menu/ker-sangri-paneer.png' }
  ],
  'non-vegetarian': [
    { id: 's11', name: 'Safed Maas (White Curry)', price: 460, desc: 'Tender baby goat cubes cooked in a mild white gravy of cashew nuts, poppy seeds, yogurt, and cardamom.', veg: false, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy, Nuts', image: './images/restaurants/marwar-rasoi/menu/safed-maas.png' },
    { id: 's12', name: 'Tandoori Smoked Chicken Kebab', price: 390, desc: 'Tender chicken breast chunks marinated in mustard oil, Rajasthan spices, roasted in clay ovens.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Dairy', image: './images/restaurants/marwar-rasoi/menu/tandoori-smoked-chicken-kebab.png' }
  ],
  desserts: [
    { id: 's13', name: 'Jaipuri Mawa Ghewar', price: 160, desc: 'Traditional disc-shaped sweet cake soaked in saffron cardamom sugar syrup, topped with thick condensed mawa cream.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Dairy, Gluten', image: './images/restaurants/marwar-rasoi/menu/jaipuri-mawa-ghewar.png' },
    { id: 's14', name: 'Hot Golden Jalebi (2 Pcs)', price: 90, desc: 'Crispy batter swirls deep-fried, soaked in hot saffron cardamom sugar syrup.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Gluten', image: './images/restaurants/marwar-rasoi/menu/hot-golden-jalebi.png' }
  ],
  beverages: [
    { id: 's15', name: 'Kesar Badam Milkshake', price: 140, desc: 'Creamy milk blended with almonds, pistachios, saffron threads, cardamoms, served chilled.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Dairy, Nuts', image: './images/restaurants/marwar-rasoi/menu/kesar-badam-milkshake.png' },
    { id: 's16', name: 'Jaipuri Kulhad Sweet Lassi', price: 110, desc: 'Thick, sweet yogurt whipped with saffron syrup, served in traditional clay pots (kulhad) with thick milk malai.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Dairy, Nuts', image: './images/restaurants/marwar-rasoi/menu/jaipuri-kulhad-sweet-lassi.png' }
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [orderCategory, setOrderCategory] = useState('starters');
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState('pickup'); // pickup/delivery
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCateringModal, setShowCateringModal] = useState(false);

  const [booking, setBooking] = useState({ name: '', phone: '', email: '', date: '', slot: '', guests: '2', preference: 'palace-court', request: '' });
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', payment: 'upi' });
  const [cateringForm, setCateringForm] = useState({ name: '', email: '', phone: '', eventType: 'teej', details: '' });

  const specialOffers = [
    { title: 'Teej Festival Royal Thali combo', offer: 'Free Lassi', desc: 'Order any two Royal Rajasthani Thalis or Laal Maas portions and receive two Kulhad Sweet Lassis free! Valid daily.' },
    { title: 'Jaipur Heritage Booking Discount', offer: '10% OFF', desc: 'Submit a seat request online and receive a flat 10% discount coupon valid on total billing. Book experience today.' }
  ];

  // 2. Event/Order Handlers
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Palace Seat Secured! Seating confirmed for ${booking.name} on ${booking.date} at slot: ${booking.slot} for ${booking.guests} guests. Preference: ${booking.preference.toUpperCase()}. Details sent to ${booking.phone}`);
    setBooking({ name: '', phone: '', email: '', date: '', slot: '', guests: '2', preference: 'palace-court', request: '' });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Logged! Our Rajasthani heritage banquet team will contact you at ${cateringForm.phone} shortly.`);
    setCateringForm({ name: '', email: '', phone: '', eventType: 'teej', details: '' });
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
    alert(`Royal Order Confirmed! Heritage plates are dispatching for ${checkoutForm.name}. Total: â‚¹${getCartTotal()}. Paid via: ${checkoutForm.payment.toUpperCase()}`);
    setCart({});
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <div className="seafood-container" id="home">
      {/* 1. Header Navigation Bar */}
      <nav className="casual-navbar" style={{ background: '#7c1524', borderBottom: '1px solid rgba(212,175,55,0.3)' }}>
        <a href="#home" className="seafood-font-accent" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '1.6rem' }}>Rang Mahal</a>
        <ul className="casual-nav-links">
          <li><a href="#home" className="seafood-nav-link">Home</a></li>
          <li><a href="#offers" className="seafood-nav-link">Offers</a></li>
          <li><a href="#menu" className="seafood-nav-link">Menu</a></li>
          <li><a href="#ordering" className="seafood-nav-link">Order Online</a></li>
          <li><a href="#booking" className="seafood-nav-link">Book Seat</a></li>
          <li><a href="#about" className="seafood-nav-link">About</a></li>
          <li><a href="#catering" className="seafood-nav-link">Catering</a></li>
          <li><a href="#contact" className="seafood-nav-link">Location</a></li>
        </ul>
        <button className="seafood-btn-accent" style={{ padding: '8px 18px', fontSize: '0.85rem' }} onClick={() => setIsCartOpen(true)}>
          ðŸ›’ Cart ({getCartCount()})
        </button>
      </nav>

      {/* 1. Home Section */}
      <section className="seafood-hero">
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-hero-content">
            <div className="seafood-badge">Heritage Royal Dining</div>
            <h1 className="seafood-font-accent seafood-hero-title">
              Rang Mahal
            </h1>
            <p style={{ fontSize: '1.05rem', marginBottom: '35px', opacity: 0.9 }}>
              Experience regal hospitality in Jaipur, Rajasthan, India. Savor wood-fired Dal Baati Churma, spicy Laal Maas, Ker Sangri, and sweet Kesar Ghewar. Open Daily 12:30 PM - 11:00 PM.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#menu" className="seafood-btn-accent" style={{ textDecoration: 'none' }}>Heritage Menu</a>
              <a href="#booking" className="seafood-btn-outline" style={{ textDecoration: 'none' }}>Book Seat</a>
              <a href="#ordering" className="seafood-btn-accent" style={{ textDecoration: 'none', background: '#ffe4e6', color: '#be123c' }}>Order Online</a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 9. Special Offers Section */}
      <section className="seafood-section-padding" id="offers" style={{ background: '#fcfaf2' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Palace Specials</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Traditional festive specials updated today.</p>
          </div>
        </ScrollReveal>

        <div className="seafood-menu-grid">
          {specialOffers.map((o, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150}>
              <div className="seafood-menu-card" style={{ background: 'white' }}>
                <span style={{ fontSize: '0.8rem', color: '#7c1524', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                  {o.offer}
                </span>
                <h3 className="seafood-font-accent" style={{ fontSize: '1.4rem', color: '#3f2a1d', marginBottom: '10px' }}>{o.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#6c5445', margin: 0, lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Menu Section (8 Categories) */}
      <section className="seafood-section-padding" id="menu" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Royal Feasts</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="seafood-menu-category-tabs">
            {Object.keys(menuData).map(cat => (
              <button
                key={cat}
                className={`seafood-menu-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{ textTransform: 'capitalize' }}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="seafood-menu-grid">
          {menuData[activeCategory].map((item, index) => (
            <ScrollReveal key={item.id} animation="zoom-in" delay={index * 120}>
              <div className="seafood-menu-card" style={{ display: 'flex', gap: '16px', padding: '16px' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="seafood-menu-img" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "./images/restaurants/fallback-food.webp";
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div className="seafood-menu-header">
                    <span className="seafood-font-accent seafood-menu-name">{item.name}</span>
                    <span className="seafood-menu-price">â‚¹{item.price}</span>
                  </div>
                  <p className="seafood-menu-desc">{item.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                      {item.veg ? 'ðŸŸ¢ Veg' : 'ðŸ”´ Non-Veg'}
                    </span>
                    {item.spice > 0 && <span>{'ðŸŒ¶ï¸'.repeat(item.spice)}</span>}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span>Allergens: {item.allergens}</span>
                    {item.tags && item.tags.map(t => <span key={t} style={{ color: '#7c1524', fontWeight: 600 }}>â€¢ {t}</span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. Online Ordering Section */}
      <section className="seafood-section-padding" id="ordering" style={{ background: '#faf6f0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Palace Delivery & Takeaway</h2>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', flexWrap: 'wrap', gap: '15px' }}>
              <div className="casual-order-toggle">
                <button className={`casual-order-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`} onClick={() => setOrderType('delivery')}>Delivery</button>
                <button className={`casual-order-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`} onClick={() => setOrderType('pickup')}>Pickup</button>
              </div>
              <div style={{ fontWeight: 700, color: '#3f2a1d', fontFamily: 'Cinzel' }}>
                Course:
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  style={{ marginLeft: '10px', padding: '8px 16px', borderRadius: '4px', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  {Object.keys(menuData).map(c => <option key={c} value={c}>{c.replace('-', ' ')}</option>)}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="seafood-menu-grid">
            {menuData[orderCategory].map((item, index) => (
              <ScrollReveal key={item.id} animation="zoom-in" delay={index * 100}>
                <div className="seafood-menu-card" style={{ background: 'white', display: 'flex', gap: '16px', padding: '16px' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="seafood-menu-img" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "./images/restaurants/fallback-food.webp";
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div className="seafood-menu-header">
                        <span className="seafood-font-accent seafood-menu-name">{item.name}</span>
                        <span className="seafood-menu-price" style={{ color: '#7c1524' }}>â‚¹{item.price}</span>
                      </div>
                      <p className="seafood-menu-desc" style={{ marginBottom: '15px' }}>{item.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                        {item.veg ? 'ðŸŸ¢ Veg' : 'ðŸ”´ Non-Veg'}
                      </span>
                      {cart[item.id] ? (
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button className="seafood-btn-accent" style={{ padding: '4px 10px' }} onClick={() => updateCartQty(item.id, -1)}>-</button>
                          <span style={{ fontWeight: 700 }}>{cart[item.id]}</span>
                          <button className="seafood-btn-accent" style={{ padding: '4px 10px' }} onClick={() => updateCartQty(item.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="seafood-btn-accent" style={{ padding: '6px 16px', fontSize: '0.8rem' }} onClick={() => updateCartQty(item.id, 1)}>
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
      <section className="seafood-section-padding" style={{ backgroundColor: '#2d1b11' }} id="booking">
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header" style={{ color: 'white' }}>
            <h2 className="seafood-font-accent seafood-section-title" style={{ color: '#d4af37' }}>Reserve Royal Seat</h2>
            <p style={{ color: '#a79083', fontSize: '0.9rem' }}>Book your dining slot overlooking the palace courtyard.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="seafood-boarding-pass">
            <div className="seafood-boarding-stub" style={{ background: '#7c1524', borderRightColor: '#d4af37' }}>
              <div className="seafood-boarding-stub-logo">RANG MAHAL</div>
              <p style={{ fontSize: '0.75rem', color: '#e5c158', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '15px', lineHeight: 1.5 }}>
                Jaipur Palace <br />
                Heritage Dining
              </p>
              <div style={{ marginTop: '30px', border: '1px solid #d4af37', padding: '10px 15px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, color: '#d4af37' }}>
                GATE 1A
              </div>
            </div>

            <div className="seafood-boarding-form-body" style={{ background: '#faf6f0' }}>
              <form onSubmit={handleBookingSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Guest Name</label>
                    <input type="text" required placeholder="Arjun Sharma" className="seafood-form-control" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Mobile Number</label>
                    <input type="tel" required placeholder="+91 95678 23410" className="seafood-form-control" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Email Address</label>
                    <input type="email" required placeholder="arjun@example.com" className="seafood-form-control" value={booking.email} onChange={(e) => setBooking({ ...booking, email: e.target.value })} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Date of Banquet</label>
                    <input type="date" required className="seafood-form-control" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Court Slots</label>
                    <select required className="seafood-form-control" value={booking.slot} onChange={(e) => setBooking({ ...booking, slot: e.target.value })}>
                      <option value="">Select Slot</option>
                      <option value="Lunch (1:00 PM)">Royal Lunch (1:00 PM)</option>
                      <option value="Dinner (7:30 PM)">Imperial Dinner (7:30 PM)</option>
                      <option value="Late (9:30 PM)">Late Palace Night (9:30 PM)</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Seating Preference</label>
                    <select className="seafood-form-control" value={booking.preference} onChange={(e) => setBooking({ ...booking, preference: e.target.value })}>
                      <option value="palace-court">Palace Court-Yard</option>
                      <option value="indoor">Indoor Royal Gallery</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: 'span 2' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c1524' }}>Guests Count</label>
                    <select className="seafood-form-control" value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: e.target.value })}>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="seafood-btn-accent" style={{ width: '100%', padding: '14px 0' }}>
                  CONFIRM PALACE SEATING PASS
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. About Us Section */}
      <section className="seafood-section-padding" id="about" style={{ background: 'white' }}>
        <div className="seafood-about-grid">
          <ScrollReveal animation="fade-in-left">
            <div>
              <span style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 700, textTransform: 'uppercase', tracking: '1px', display: 'block', marginBottom: '10px' }}>
                Palace Heritage
              </span>
              <h2 className="seafood-font-accent" style={{ fontSize: '2.5rem', color: '#7c1524', margin: '0 0 20px 0', textTransform: 'uppercase' }}>
                Rajasthani Culinary Legacy
              </h2>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#6c5445', marginBottom: '20px' }}>
                Rang Mahal is designed after the grand palace architecture of Jaipur. We serve premium Rajasthani recipes that date back to Rajput court banquets.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#6c5445' }}>
                Our signature Dal Baati Churma is baked inside charcoal ovens and drenched in warm cow ghee. We source Ker Sangri berries directly from the desert districts.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={150}>
            <div>
              <img src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80" alt="Rajasthani Thali elements" className="seafood-about-img" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Culinary Team Section */}
      <section className="seafood-section-padding" id="chefs" style={{ background: '#faf6f0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">The Royal Kitchen Masters</h2>
          </div>
        </ScrollReveal>

        <div className="seafood-wave-chefs">
          <ScrollReveal animation="fade-in-left" delay={100}>
            <div className="seafood-wave-chef-card" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <img src="./images/restaurants/marwar-rasoi/chef-bheem.jpg" alt="Chef Bheem Singh" className="seafood-wave-chef-img" />
              <h3 className="seafood-font-accent" style={{ fontSize: '1.4rem', color: '#7c1524', margin: '0 0 5px 0' }}>Chef Bheem Singh</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d4af37', textTransform: 'uppercase' }}>Executive Heritage Chef</span>
              <p style={{ fontSize: '0.85rem', color: '#6c5445', lineHeight: 1.5, marginTop: '10px' }}>
                Bheem Singh brings three decades of heritage Rajasthani cooking knowledge directly from the royal families' kitchen lineages.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={250}>
            <div className="seafood-wave-chef-card" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <img src="./images/restaurants/marwar-rasoi/chef-elena.png" alt="Chef Elena Singh" className="seafood-wave-chef-img" />
              <h3 className="seafood-font-accent" style={{ fontSize: '1.4rem', color: '#7c1524', margin: '0 0 5px 0' }}>Chef Elena Singh</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d4af37', textTransform: 'uppercase' }}>Master Sweet Maker</span>
              <p style={{ fontSize: '0.85rem', color: '#6c5445', lineHeight: 1.5, marginTop: '10px' }}>
                Elena curates our traditional Indian sweets like Kesar Ghewar and hot syrup Jalebis using heritage methods.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Events & Catering Section */}
      <section className="seafood-section-padding" id="catering" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Palace Catering & Festivals</h2>
            <p style={{ color: '#6c5445', fontSize: '0.9rem' }}>Traditional Teej festivals and corporate royal banquets.</p>
          </div>
        </ScrollReveal>
        
        <div className="seafood-banners-list">
          <ScrollReveal animation="fade-in-up">
            <div className="seafood-banner-card" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80" alt="Teej Fest" className="seafood-banner-img" />
              <div className="seafood-banner-overlay">
                <span className="seafood-banner-date">TEEJ FESTIVAL SPECIAL</span>
                <h3 className="seafood-banner-title">Grand Teej Heritage Feasts</h3>
                <p className="seafood-banner-desc" style={{ marginBottom: '15px' }}>Enjoy traditional sweets like Ghewar, Rajasthani folk dances, and local string puppet acts inside our palace garden.</p>
                <button className="seafood-btn-accent" onClick={() => setShowCateringModal(true)} style={{ width: 'fit-content' }}>Enquire Now</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Reviews / Testimonials Section */}
      <section className="seafood-section-padding" style={{ background: '#faf6f0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Heritage Reviews</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '4px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>â­â­â­â­â­</span>
            <p style={{ fontStyle: 'italic', color: '#3f2a1d', fontSize: '1.05rem', lineHeight: 1.6 }}>
              "The Dal Baati Churma was pure heaven. Rich cow ghee, smoky charcoal bake, and matching chilled lassi inside clay cups."
            </p>
            <strong style={{ display: 'block', marginTop: '15px', color: '#7c1524' }}>- SNEHA REDDY</strong>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Gallery Section */}
      <section className="seafood-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">The Palace Gallery</h2>
          </div>
        </ScrollReveal>

        <div className="seafood-wave-gallery">
          {['https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80'].map((url, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100}>
              <div className="seafood-wave-item" style={{ borderRadius: '4px', border: '1px solid rgba(212,175,55,0.2)' }}>
                <img src={url} alt="Gallery item" className="seafood-wave-img" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 11. Social Media Section */}
      <section className="seafood-section-padding" style={{ background: '#faf6f0' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Palace Social Wall</h2>
            <p style={{ color: '#6c5445', fontSize: '0.9rem' }}>Follow @RangMahal on Instagram for heritage dining stories.</p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
          {['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80'].map((url, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ border: '1px solid #d4af37', borderRadius: '4px', overflow: 'hidden', height: '180px' }}>
                <img src={url} alt="Insta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. Location / Contact Section */}
      <section className="seafood-section-padding" id="contact" style={{ background: 'white', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <ScrollReveal animation="fade-in-up">
          <div className="seafood-section-header">
            <h2 className="seafood-font-accent seafood-section-title">Palace Location</h2>
          </div>
        </ScrollReveal>

        <div className="seafood-contact-grid">
          <ScrollReveal animation="fade-in-left">
            <div className="seafood-contact-info">
              <div>
                <h4 className="seafood-font-accent" style={{ fontSize: '1.2rem', color: '#7c1524', margin: '0 0 5px 0' }}>Jaipur Palace Address</h4>
                <p style={{ fontSize: '0.95rem', color: '#6c5445', margin: 0 }}>8 Palace Road, Jaipur, Rajasthan 302001</p>
              </div>
              <div>
                <h4 className="seafood-font-accent" style={{ fontSize: '1.2rem', color: '#7c1524', margin: '0 0 5px 0' }}>Concierge Hotline</h4>
                <p style={{ fontSize: '0.95rem', color: '#6c5445', margin: '0 0 10px 0' }}>
                  <a href="tel:+911412620000" style={{ color: '#d4af37', fontWeight: 700, textDecoration: 'none' }}>+91 141 262 0000</a> (Click to Call)
                </p>
                <a href="https://wa.me/911412620000" target="_blank" rel="noopener noreferrer" className="seafood-whatsapp-btn">
                  ðŸ’¬ Concierge WhatsApp Chat
                </a>
              </div>
              <div>
                <h4 className="seafood-font-accent" style={{ fontSize: '1.2rem', color: '#7c1524', margin: '0 0 5px 0' }}>Palace Email</h4>
                <p style={{ fontSize: '0.95rem', color: '#6c5445', margin: 0 }}>
                  <a href="mailto:reservations@marwarrasoi.example" style={{ color: '#d4af37', textDecoration: 'none' }}>reservations@marwarrasoi.example</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={150}>
            <div className="seafood-map-container" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <iframe
                title="Rang Mahal Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.876110487202!2d75.815167!3d26.9262095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1f1166a9df%3A0xe54d31481e4b33b7!2sCity%20Palace%2C%20Jaipur%2C%20Rajasthan%20302002!5e0!3m2!1sen!2sus!4v1652393322100!5m2!1sen!2sus"
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
      <div className={`seafood-cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="seafood-cart-header">
          <span>Active Palace Order</span>
          <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsCartOpen(false)}>Ã—</button>
        </div>
        <div className="seafood-cart-body">
          {getCartCount() === 0 ? (
            <p style={{ textAlign: 'center', color: '#6c5445', marginTop: '40px' }}>Your basket is empty.</p>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              let matchItem = null;
              Object.values(menuData).forEach(cat => {
                const found = cat.find(i => i.id === id);
                if (found) matchItem = found;
              });
              return matchItem ? (
                <div key={id} className="seafood-cart-item">
                  <div>
                    <h5 style={{ margin: 0, fontWeight: 700, color: '#3f2a1d' }}>{matchItem.name}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#7c1524' }}>â‚¹{matchItem.price}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="seafood-btn-accent" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, -1)}>-</button>
                    <span>{qty}</span>
                    <button className="seafood-btn-accent" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, 1)}>+</button>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="seafood-cart-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', color: '#7c1524' }}>
            <span>Total Value:</span>
            <span>â‚¹{getCartTotal()}</span>
          </div>
          <button className="seafood-btn-accent" style={{ width: '100%' }} disabled={getCartCount() === 0} onClick={() => setShowCheckout(true)}>
            Checkout Palace Order
          </button>
        </div>
      </div>

      {/* Checkout details Modal */}
      {showCheckout && (
        <div className="seafood-modal-overlay">
          <div className="seafood-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setShowCheckout(false)}>Ã—</button>
            <h3 className="seafood-font-accent" style={{ fontSize: '1.6rem', color: '#7c1524', marginBottom: '20px' }}>PALACE CHECKOUT</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="seafood-form-group">
                  <span>Full Name</span>
                  <input type="text" required className="seafood-form-control" value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} placeholder="Arjun Sharma" />
                </div>
                <div className="seafood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="seafood-form-control" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})} placeholder="+91 95678 23410" />
                </div>
                {orderType === 'delivery' && (
                  <div className="seafood-form-group">
                    <span>Delivery Address</span>
                    <input type="text" required className="seafood-form-control" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="Enter street address in Jaipur" />
                  </div>
                )}
                <div className="seafood-form-group">
                  <span>Payment Selection</span>
                  <select className="seafood-form-control" value={checkoutForm.payment} onChange={(e) => setCheckoutForm({...checkoutForm, payment: e.target.value})}>
                    <option value="upi">UPI (GPay / PhonePe / BHIM)</option>
                    <option value="card">Credit / Debit Card</option>
                    <option value="banking">Net Banking</option>
                    <option value="restaurant">Pay at Restaurant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="seafood-btn-accent" style={{ width: '100%' }}>Confirm Palace Order (â‚¹{getCartTotal()})</button>
            </form>
          </div>
        </div>
      )}

      {/* Catering Modal */}
      {showCateringModal && (
        <div className="seafood-modal-overlay">
          <div className="seafood-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setShowCateringModal(false)}>Ã—</button>
            <h3 className="seafood-font-accent" style={{ fontSize: '1.6rem', color: '#7c1524', marginBottom: '20px' }}>PALACE FESTIVITY ENQUIRY</h3>
            <form onSubmit={handleCateringSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="seafood-form-group">
                  <span>Contact Name</span>
                  <input type="text" required className="seafood-form-control" value={cateringForm.name} onChange={(e) => setCateringForm({...cateringForm, name: e.target.value})} placeholder="Sneha Reddy" />
                </div>
                <div className="seafood-form-group">
                  <span>Email Address</span>
                  <input type="email" required className="seafood-form-control" value={cateringForm.email} onChange={(e) => setCateringForm({...cateringForm, email: e.target.value})} placeholder="sneha@example.com" />
                </div>
                <div className="seafood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="seafood-form-control" value={cateringForm.phone} onChange={(e) => setCateringForm({...cateringForm, phone: e.target.value})} placeholder="+91 95678 23410" />
                </div>
                <div className="seafood-form-group">
                  <span>Palace Celebration</span>
                  <select className="seafood-form-control" value={cateringForm.eventType} onChange={(e) => setCateringForm({...cateringForm, eventType: e.target.value})}>
                    <option value="teej">Teej Heritage Festival</option>
                    <option value="wedding">Royal Heritage Wedding</option>
                    <option value="corporate">Gala Corporate Banquet</option>
                  </select>
                </div>
                <div className="seafood-form-group">
                  <span>Banquet Details</span>
                  <textarea rows="3" className="seafood-form-control" value={cateringForm.details} onChange={(e) => setCateringForm({...cateringForm, details: e.target.value})} placeholder="Guest count, date, setup preference..."></textarea>
                </div>
              </div>
              <button type="submit" className="seafood-btn-accent" style={{ width: '100%' }}>Submit Palace Request</button>
            </form>
          </div>
        </div>
      )}

      {/* 12. Footer Section */}
      <Footer
        restaurantName="Rang Mahal"
        tagline="Traditional Rajasthani heritage dining, palace-inspired details, and premium hospitality."
        themeColor="#7c1524"
        dark={true}
      />
    </div>
  );
}


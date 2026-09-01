import React, { useState } from 'react';
import './styles/cafe.css';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export const menuData = {
  starters: [
    { id: 'ca1', name: 'Karimeen Fish Fry', price: 290, desc: 'Pearl spot fish marinated in fiery ginger, garlic, red chillies, and lemon juice, pan-fried to crisp perfection.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Fish', image: '/images/restaurants/samudra-spices/menu/karimeen-fish-fry.png' },
    { id: 'ca2', name: 'Konkan Rava Prawns', price: 320, desc: 'Plump tiger prawns coated in spiced semolina, shallow-fried with curry leaves and green chillies.', veg: false, tags: ['None'], spice: 2, allergens: 'Shellfish, Gluten', image: '/images/restaurants/samudra-spices/menu/konkan-rava-prawns.png' }
  ],
  soups: [
    { id: 'ca3', name: 'Malabar Crab Soup', price: 190, desc: 'Chowder style crab soup cooked with fresh coconut milk, black pepper, and curry leaves.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Shellfish, Dairy', image: '/images/restaurants/samudra-spices/menu/malabar-crab-soup.png' },
    { id: 'ca4', name: 'Tangy Kokum Broth', price: 110, desc: 'Warm clear broth of kokum berries, green chillies, ginger, and fresh coriander.', veg: true, tags: ['Vegan', 'Jain-friendly', 'Gluten-free'], spice: 2, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/tangy-kokum-broth.png' }
  ],
  'main-course': [
    { id: 'ca5', name: 'Kerala Fish Curry', price: 440, desc: 'Kingfish steaks simmered in a red-hot coconut gravy flavored with kudampuli (gamboge) and curry leaves.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Fish', image: '/images/restaurants/samudra-spices/menu/kerala-fish-curry.png' },
    { id: 'ca6', name: 'Coastal Prawn Masala', price: 460, desc: 'Juicy prawns sautéed in dry toasted coconut, small onions, garlic, and fresh green chillies.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Shellfish', image: '/images/restaurants/samudra-spices/menu/coastal-prawn-masala.png' }
  ],
  biryanis: [
    { id: 'ca7', name: 'Malabar Prawn Biryani', price: 480, desc: 'Fragrant short-grain Khaima rice layered with spiced prawns, ghee, saffron, fried onions, and mint.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy, Shellfish', image: '/images/restaurants/samudra-spices/menu/malabar-prawn-biryani.png' },
    { id: 'ca8', name: 'Kochi Seafood Biryani', price: 520, desc: 'Steamed rice cooked with fish chunks, calamari, prawns, and unique coastal ground dry spices.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Fish, Shellfish, Dairy', image: '/images/restaurants/samudra-spices/menu/kochi-seafood-biryani.png' }
  ],
  vegetarian: [
    { id: 'ca9', name: 'Malabar Vegetable Korma', price: 290, desc: 'Fresh garden peas, carrots, and potatoes simmered in a mildly spiced, cashew-coconut milk gravy.', veg: true, tags: ['Vegan', 'Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'Nuts', image: '/images/restaurants/samudra-spices/menu/malabar-vegetable-korma.png' },
    { id: 'ca10', name: 'Avial Kerala Style', price: 280, desc: 'Thick mixture of coastal vegetables, curd, and grated coconut seasoned with pure coconut oil.', veg: true, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy', image: '/images/restaurants/samudra-spices/menu/avial-kerala-style.png' }
  ],
  'non-vegetarian': [
    { id: 'ca11', name: 'Mangalorean Chicken Sukka', price: 380, desc: 'Dry chicken dish cooked with dry roasted spices, grated coconut, garlic, and fresh curry leaves.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/mangalorean-chicken-sukka.png' },
    { id: 'ca12', name: 'Kochi Duck Roast (Mapas)', price: 420, desc: 'Tender duck portions slow-cooked in thick second-press coconut milk with cardamoms and green chillies.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/kochi-duck-roast.png' }
  ],
  desserts: [
    { id: 'ca13', name: 'Ada Pradhaman (Payasam)', price: 140, desc: 'Traditional Kerala sweet pudding made of flat rice flakes, dark jaggery, coconut milk, and ghee.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Dairy', image: '/images/restaurants/samudra-spices/menu/ada-pradhaman.png' },
    { id: 'ca14', name: 'Tender Coconut Jelly (China Grass)', price: 120, desc: 'Chilled agar-agar pudding set with fresh tender coconut water and coconut pulp chunks.', veg: true, tags: ['Vegan', 'Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/tender-coconut-jelly.png' }
  ],
  beverages: [
    { id: 'ca15', name: 'Fresh Tender Coconut Water', price: 80, desc: 'Sweet, chilled coconut water tapped straight from organic Kerala coconuts.', veg: true, tags: ['Vegan', 'Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/fresh-tender-coconut-water.png' },
    { id: 'ca16', name: 'Spiced Ginger Mint Limeade', price: 90, desc: 'Pressed lime juice blended with fresh ginger extract, garden mint leaves, and sugar syrup.', veg: true, tags: ['Vegan', 'Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'None', image: '/images/restaurants/samudra-spices/menu/spiced-ginger-mint-limeade.png' }
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [orderCategory, setOrderCategory] = useState('starters');
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState('pickup'); // pickup or delivery
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCateringModal, setShowCateringModal] = useState(false);

  const [booking, setBooking] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'pier-deck', request: '' });
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', payment: 'upi' });
  const [cateringForm, setCateringForm] = useState({ name: '', email: '', phone: '', eventType: 'onam', details: '' });

  const specialOffers = [
    { title: 'Onam Sadya Grand Feast', offer: 'Unlimited Buffet', desc: 'Indulge in our 24-item traditional Onam Sadya served on pure banana leaves. Available during Onam week. ₹599 pp.' },
    { title: 'Harbour Sunset Happy Hours', offer: 'Free Soda', desc: 'Order any 2 Coastal Main Courses or Seafood Biryanis and get two Spiced Limeades completely free! Valid daily 4 PM - 7 PM.' }
  ];

  // 2. State & Submit Handlers
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Deck Seating Secured! Table reserved for ${booking.name} on ${booking.date} at ${booking.time} for ${booking.guests} guests. Seating: ${booking.preference.toUpperCase()}. Confirmation SMS sent to ${booking.phone}`);
    setBooking({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'pier-deck', request: '' });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Logged! Our Kochi beach catering team will contact you at ${cateringForm.phone} shortly.`);
    setCateringForm({ name: '', email: '', phone: '', eventType: 'onam', details: '' });
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
    alert(`Coastal Feast Confirmed! Your order is departures for ${checkoutForm.name}. Total billed: ₹${getCartTotal()}. Payment: ${checkoutForm.payment.toUpperCase()}`);
    setCart({});
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <div className="cafe-container" id="home">
      {/* 1. Header Navigation Bar */}
      <nav className="casual-navbar" style={{ background: '#115e59', borderBottom: '1px solid rgba(153,246,228,0.2)' }}>
        <a href="#home" className="cafe-font-fancy" style={{ color: '#99f6e4', textDecoration: 'none', fontSize: '1.6rem' }}>Konkan Coast</a>
        <ul className="casual-nav-links">
          <li><a href="#home" className="cafe-nav-link">Home</a></li>
          <li><a href="#offers" className="cafe-nav-link">Offers</a></li>
          <li><a href="#menu" className="cafe-nav-link">Menu</a></li>
          <li><a href="#ordering" className="cafe-nav-link">Order Online</a></li>
          <li><a href="#booking" className="cafe-nav-link">Book Deck</a></li>
          <li><a href="#about" className="cafe-nav-link">About</a></li>
          <li><a href="#catering" className="cafe-nav-link">Catering</a></li>
          <li><a href="#contact" className="cafe-nav-link">Location</a></li>
        </ul>
        <button className="cafe-btn-teal" style={{ padding: '8px 18px', fontSize: '0.85rem', background: '#99f6e4', color: '#115e59' }} onClick={() => setIsCartOpen(true)}>
          🛒 Cart ({getCartCount()})
        </button>
      </nav>

      {/* 1. Home / Hero Section */}
      <section className="cafe-hero">
        <div>
          <ScrollReveal animation="fade-in-down">
            <span className="cafe-hero-tagline">Fresh Coastal Indian Seafood</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={150}>
            <h1 className="cafe-font-fancy cafe-hero-title">
              Konkan Coast
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={300}>
            <p style={{ fontSize: '1.05rem', color: '#5c6c60', marginBottom: '35px', lineHeight: 1.7 }}>
              Dine on our open harbor pier deck in Kochi, Kerala. Savor spicy Karimeen fish fry, Malabar crab soup, coconut prawn curries, and fresh appams. Open Daily 12:00 PM - 10:30 PM.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={450}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#menu" className="cafe-btn-teal" style={{ textDecoration: 'none' }}>Net Menu</a>
              <a href="#booking" className="cafe-btn-orange" style={{ textDecoration: 'none' }}>Book Pier Seat</a>
              <a href="#ordering" className="cafe-btn-teal" style={{ textDecoration: 'none', background: '#e0f2fe', color: '#0369a1' }}>Order Online</a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in-left" delay={300}>
          <div className="cafe-hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80"
              alt="Konkan fish curry setup"
              className="cafe-hero-img"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 9. Special Offers Section */}
      <section className="cafe-section-padding" id="offers" style={{ background: '#f5ebe0' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Coastal Promotions</h2>
          <p className="cafe-section-subtitle">Fresh Kerala catch promotions and traditional Onam sadya details.</p>
        </ScrollReveal>
        <div className="cafe-board-grid">
          {specialOffers.map((o, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150}>
              <div className="cafe-board-card" style={{ background: 'white' }}>
                <span style={{ fontSize: '0.8rem', color: '#115e59', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                  {o.offer}
                </span>
                <h3 className="cafe-font-fancy" style={{ fontSize: '1.4rem', color: '#2c3a30', marginBottom: '12px' }}>{o.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#5c6c60', margin: 0, lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Menu Section (8 Categories) */}
      <section className="cafe-section-padding" id="menu" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">The Coastal Net</h2>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="cafe-menu-category-tabs">
            {Object.keys(menuData).map(c => (
              <button
                key={c}
                className={`cafe-menu-category-btn ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setActiveCategory(c)}
                style={{ textTransform: 'capitalize' }}
              >
                {c.replace('-', ' ')}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="cafe-board-grid">
          {menuData[activeCategory].map((item, idx) => (
            <ScrollReveal key={item.id} animation="zoom-in" delay={idx * 100}>
              <div className="cafe-board-card" style={{ display: 'flex', gap: '16px', padding: '16px' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cafe-board-img" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/restaurants/fallback-food.webp";
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div className="cafe-board-header">
                    <span className="cafe-board-name cafe-font-fancy">{item.name}</span>
                    <span className="cafe-board-price">₹{item.price}</span>
                  </div>
                  <p className="cafe-board-desc">{item.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                      {item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                    </span>
                    {item.spice > 0 && <span>{'🌶️'.repeat(item.spice)}</span>}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span>Allergens: {item.allergens}</span>
                    {item.tags && item.tags.map(t => <span key={t} style={{ color: '#115e59', fontWeight: 600 }}>• {t}</span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. Online Ordering Section */}
      <section className="cafe-section-padding" id="ordering" style={{ background: '#faf7f2' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Coastal Online Ordering</h2>
        </ScrollReveal>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', flexWrap: 'wrap', gap: '15px' }}>
              <div className="casual-order-toggle">
                <button className={`casual-order-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`} onClick={() => setOrderType('delivery')}>Delivery</button>
                <button className={`casual-order-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`} onClick={() => setOrderType('pickup')}>Pickup</button>
              </div>
              <div style={{ fontWeight: 700, color: '#115e59', fontFamily: 'Playfair Display' }}>
                Course:
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  style={{ marginLeft: '10px', padding: '8px 16px', border: '1px solid rgba(17,94,89,0.3)', background: 'white' }}
                >
                  {Object.keys(menuData).map(c => <option key={c} value={c}>{c.replace('-', ' ')}</option>)}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="cafe-board-grid">
            {menuData[orderCategory].map((item, idx) => (
              <ScrollReveal key={item.id} animation="zoom-in" delay={idx * 100}>
                <div className="cafe-board-card" style={{ background: 'white', display: 'flex', gap: '16px', padding: '16px' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cafe-board-img" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/restaurants/fallback-food.webp";
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div className="cafe-board-header">
                        <span className="cafe-board-name cafe-font-fancy">{item.name}</span>
                        <span className="cafe-board-price" style={{ color: '#115e59' }}>₹{item.price}</span>
                      </div>
                      <p className="cafe-board-desc" style={{ marginBottom: '15px' }}>{item.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>
                        {item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                      </span>
                      {cart[item.id] ? (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <button className="cafe-btn-teal" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(item.id, -1)}>-</button>
                          <span style={{ fontWeight: 700 }}>{cart[item.id]}</span>
                          <button className="cafe-btn-teal" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(item.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="cafe-btn-teal" style={{ padding: '6px 16px', fontSize: '0.75rem' }} onClick={() => updateCartQty(item.id, 1)}>
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
      <section className="cafe-section-padding" id="booking" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Book Harbour Deck Seating</h2>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="cafe-modal-content" style={{ margin: '0 auto', border: '1px solid rgba(17,94,89,0.3)', width: '100%', maxWidth: '600px' }}>
            <h3 className="cafe-font-fancy" style={{ textAlign: 'center', color: '#115e59', fontSize: '1.5rem', marginBottom: '25px' }}>Table Reservation Pass</h3>
            <form onSubmit={handleBookingSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Full Name</span>
                  <input type="text" required className="fastfood-form-control" value={booking.name} onChange={(e) => setBooking({...booking, name: e.target.value})} placeholder="Ananya Iyer" />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Mobile Number</span>
                  <input type="tel" required className="fastfood-form-control" value={booking.phone} onChange={(e) => setBooking({...booking, phone: e.target.value})} placeholder="+91 93456 78120" />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Email Address</span>
                  <input type="email" required className="fastfood-form-control" value={booking.email} onChange={(e) => setBooking({...booking, email: e.target.value})} placeholder="ananya@example.com" />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Select Date</span>
                  <input type="date" required className="fastfood-form-control" value={booking.date} onChange={(e) => setBooking({...booking, date: e.target.value})} />
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Banquet Time</span>
                  <select required className="fastfood-form-control" value={booking.time} onChange={(e) => setBooking({...booking, time: e.target.value})}>
                    <option value="">Select Time</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
                <div className="fastfood-form-group">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Seating Preference</span>
                  <select className="fastfood-form-control" value={booking.preference} onChange={(e) => setBooking({...booking, preference: e.target.value})}>
                    <option value="pier-deck">Pier-Side Harbour Deck</option>
                    <option value="indoor">Indoor Coconut Wood Nook</option>
                  </select>
                </div>
                <div className="fastfood-form-group" style={{ gridColumn: 'span 2' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115e59' }}>Guests</span>
                  <select className="fastfood-form-control" value={booking.guests} onChange={(e) => setBooking({...booking, guests: e.target.value})}>
                    <option value="2">2 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="6">6 Passengers</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="cafe-btn-teal" style={{ width: '100%' }}>Book Seating Table</button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. About Us Section */}
      <section className="cafe-section-padding" id="about" style={{ background: '#faf7f2' }}>
        <div className="casual-about-split">
          <ScrollReveal animation="fade-in-left">
            <div>
              <span className="cafe-hero-tagline">Exquisite Coastal Tradition</span>
              <h2 className="cafe-font-fancy" style={{ fontSize: '2.5rem', color: '#115e59', margin: '0 0 20px 0' }}>
                Net-to-Plate Kerala Seafood
              </h2>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#5c6c60', marginBottom: '15px' }}>
                Konkan Coast was established in Kochi along the beautiful harbor pier. We partner directly with local Kerala fishermen who deliver fresh red snappers, crabs, and prawns to our dock every morning.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#5c6c60' }}>
                Our kitchen utilizes only cold-pressed coconut oil, fresh grated coconuts, and sour kokum berries to create authentic coastal profiles.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-right" delay={150}>
            <img src="https://images.unsplash.com/photo-1559715745-e1b34a256f3f?auto=format&fit=crop&w=800&q=80" alt="Kerala Coastal dining interior" className="casual-about-img" />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Culinary Team Section */}
      <section className="cafe-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">The Galley Chefs</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in" delay={100}>
            <div style={{ textAlign: 'center' }}>
              <img src="/images/restaurants/samudra-spices/chef-kuriakose.png" alt="Chef Kuriakose Joseph" style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(17,94,89,0.2)', marginBottom: '15px' }} />
              <h3 className="cafe-font-fancy" style={{ fontSize: '1.25rem', color: '#115e59' }}>Chef Kuriakose Joseph</h3>
              <span style={{ fontSize: '0.8rem', color: '#115e59', fontWeight: 700, textTransform: 'uppercase' }}>Executive Chef & Founder</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={250}>
            <div style={{ textAlign: 'center' }}>
              <img src="/images/restaurants/samudra-spices/chef-elena.png" alt="Chef Elena Nair" style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(17,94,89,0.2)', marginBottom: '15px' }} />
              <h3 className="cafe-font-fancy" style={{ fontSize: '1.25rem', color: '#115e59' }}>Chef Elena Nair</h3>
              <span style={{ fontSize: '0.8rem', color: '#115e59', fontWeight: 700, textTransform: 'uppercase' }}>Pastry & Drink Sommelier</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Events & Catering Section */}
      <section className="cafe-section-padding" id="catering" style={{ background: '#faf7f2' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Pier Festivities & Catering</h2>
        </ScrollReveal>
        <div className="casual-timeline">
          <ScrollReveal animation="fade-in-up">
            <div className="casual-timeline-item">
              <div className="casual-timeline-img-wrapper">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" alt="Onam Sadya Catering" className="casual-timeline-img" />
              </div>
              <div className="casual-timeline-content">
                <h3 className="cafe-font-fancy" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Traditional Onam Sadya Banquets</h3>
                <p style={{ color: '#5c6c60', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Celebrate the harvest with an authentic 24-item Onam Sadya served on pure banana leaves. We arrange traditional setups, floral pookalams, and sommelier services for private banquets.
                </p>
                <button className="cafe-btn-teal" onClick={() => setShowCateringModal(true)}>Enquire Now</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Reviews / Testimonials Section */}
      <section className="cafe-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Salty Reviews</h2>
        </ScrollReveal>
        <ScrollReveal animation="zoom-in">
          <div className="casual-testimonial-card" style={{ background: '#faf7f2', border: '1px solid rgba(17,94,89,0.2)' }}>
            <span style={{ fontSize: '1.25rem', color: '#115e59', display: 'block', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</span>
            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: '#2c3a30', marginBottom: '15px' }}>
              "The Karimeen Fish Fry and Malabar Prawn Biryani were absolutely mouth-watering. Savoring fresh prawns while watching the Kochi sunset from the deck is pure bliss."
            </p>
            <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#115e59' }}>- Priya Nair</strong>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Gallery Section */}
      <section className="cafe-section-padding" style={{ background: '#faf7f2' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Coastal Moments</h2>
        </ScrollReveal>
        <div className="casual-gallery-mosaic">
          <div className="casual-gallery-item-mosaic casual-gallery-tall">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" alt="Karimeen Fry" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" alt="Fish Curry" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=80" alt="Prawn Masala" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" alt="Coconut drink" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1559715745-e1b34a256f3f?auto=format&fit=crop&w=500&q=80" alt="Kochi harbour sunset" />
          </div>
        </div>
      </section>

      {/* 11. Social Media Section */}
      <section className="cafe-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Social Feed</h2>
          <p style={{ textAlign: 'center', color: '#64748b' }}>Follow us @KonkanCoast on Instagram for daily catch updates.</p>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', maxWidth: '1000px', margin: '0 auto' }}>
          {['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=300&q=80'].map((url, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', height: '180px', border: '1px solid rgba(17,94,89,0.2)' }}>
                <img src={url} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 12. Location / Contact Section */}
      <section className="cafe-section-padding" id="contact" style={{ background: '#faf7f2', borderTop: '1px solid rgba(17,94,89,0.2)' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="cafe-section-title cafe-font-fancy">Harbour Location</h2>
        </ScrollReveal>
        <div className="casual-contact-grid">
          <ScrollReveal animation="fade-in-left">
            <div className="casual-contact-info">
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#115e59', fontFamily: 'Playfair Display' }}>Harbor Pier Address</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c6c60', margin: 0 }}>12 Marina Drive, Kochi, Kerala 682031</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#115e59', fontFamily: 'Playfair Display' }}>Pier Support</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c6c60', margin: 0 }}>
                  <a href="tel:+914842350000" style={{ color: '#115e59', textDecoration: 'none', fontWeight: 700 }}>+91 484 235 0000</a>
                </p>
                <a href="https://wa.me/914842350000" target="_blank" rel="noopener noreferrer" className="cafe-whatsapp-btn" style={{ marginTop: '10px' }}>
                  💬 WhatsApp Live Chat
                </a>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#115e59', fontFamily: 'Playfair Display' }}>Direct Email</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c6c60', margin: 0 }}>
                  <a href="mailto:info@samudraspices.example" style={{ color: '#115e59', textDecoration: 'none' }}>info@samudraspices.example</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={150}>
            <div style={{ height: '300px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(17,94,89,0.2)' }}>
              <iframe
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5638101235123!2d76.27351631508226!3d9.970591582419075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d69335f9%3A0x2a98f5a6b0c2a71c!2sMarine%20Drive%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1652393302110!5m2!1sen!2sin"
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
      <div className={`cafe-cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cafe-cart-header">
          <span>Active Net Basket</span>
          <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        <div className="cafe-cart-body">
          {getCartCount() === 0 ? (
            <p style={{ textAlign: 'center', color: '#5c6c60', marginTop: '40px' }}>Your net basket is empty.</p>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              let matchItem = null;
              Object.values(menuData).forEach(cat => {
                const found = cat.find(i => i.id === id);
                if (found) matchItem = found;
              });
              return matchItem ? (
                <div key={id} className="cafe-cart-item">
                  <div>
                    <h5 style={{ margin: 0, fontWeight: 700, color: '#2c3a30' }}>{matchItem.name}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#115e59' }}>₹{matchItem.price}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="cafe-btn-teal" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, -1)}>-</button>
                    <span>{qty}</span>
                    <button className="cafe-btn-teal" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, 1)}>+</button>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="cafe-cart-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', color: '#115e59' }}>
            <span>Total Value:</span>
            <span>₹{getCartTotal()}</span>
          </div>
          <button className="cafe-btn-teal" style={{ width: '100%' }} disabled={getCartCount() === 0} onClick={() => setShowCheckout(true)}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Checkout details Modal */}
      {showCheckout && (
        <div className="cafe-modal-overlay">
          <div className="cafe-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#115e59' }} onClick={() => setShowCheckout(false)}>×</button>
            <h3 className="cafe-font-fancy" style={{ fontSize: '1.6rem', color: '#115e59', marginBottom: '20px' }}>Checkout Order</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fastfood-form-group">
                  <span>Full Name</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} placeholder="Ananya Iyer" />
                </div>
                <div className="fastfood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})} placeholder="+91 93456 78120" />
                </div>
                {orderType === 'delivery' && (
                  <div className="fastfood-form-group">
                    <span>Delivery Address</span>
                    <input type="text" required className="fastfood-form-control" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="Enter street in Marine Drive" />
                  </div>
                )}
                <div className="fastfood-form-group">
                  <span>Payment Method</span>
                  <select className="fastfood-form-control" value={checkoutForm.payment} onChange={(e) => setCheckoutForm({...checkoutForm, payment: e.target.value})}>
                    <option value="upi">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="card">Credit / Debit Card</option>
                    <option value="banking">Net Banking</option>
                    <option value="restaurant">Pay at Restaurant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="cafe-btn-teal" style={{ width: '100%' }}>Confirm Order (₹{getCartTotal()})</button>
            </form>
          </div>
        </div>
      )}

      {/* Catering Modal */}
      {showCateringModal && (
        <div className="cafe-modal-overlay">
          <div className="cafe-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#115e59' }} onClick={() => setShowCateringModal(false)}>×</button>
            <h3 className="cafe-font-fancy" style={{ fontSize: '1.6rem', color: '#115e59', marginBottom: '20px' }}>Pier Catering Enquiry</h3>
            <form onSubmit={handleCateringSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fastfood-form-group">
                  <span>Contact Name</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.name} onChange={(e) => setCateringForm({...cateringForm, name: e.target.value})} placeholder="Priya Nair" />
                </div>
                <div className="fastfood-form-group">
                  <span>Email Address</span>
                  <input type="email" required className="fastfood-form-control" value={cateringForm.email} onChange={(e) => setCateringForm({...cateringForm, email: e.target.value})} placeholder="priya@example.com" />
                </div>
                <div className="fastfood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.phone} onChange={(e) => setCateringForm({...cateringForm, phone: e.target.value})} placeholder="+91 93456 78120" />
                </div>
                <div className="fastfood-form-group">
                  <span>Catering Event</span>
                  <select className="fastfood-form-control" value={cateringForm.eventType} onChange={(e) => setCateringForm({...cateringForm, eventType: e.target.value})}>
                    <option value="onam">Onam Sadya Festival</option>
                    <option value="wedding">Beach Reception / wedding</option>
                    <option value="corporate">Gala Corporate Luncheon</option>
                  </select>
                </div>
                <div className="fastfood-form-group">
                  <span>Event Details</span>
                  <textarea rows="3" className="fastfood-form-control" value={cateringForm.details} onChange={(e) => setCateringForm({...cateringForm, details: e.target.value})} placeholder="Guest details, preferences..."></textarea>
                </div>
              </div>
              <button type="submit" className="cafe-btn-teal" style={{ width: '100%' }}>Submit Harbour Request</button>
            </form>
          </div>
        </div>
      )}

      {/* 12. Footer Section */}
      <Footer
        restaurantName="Konkan Coast"
        tagline="Fresh Kerala coastal seafood, coconut-infused recipes, and beautiful sea-view dining."
        themeColor="#115e59"
        dark={true}
      />
    </div>
  );
}


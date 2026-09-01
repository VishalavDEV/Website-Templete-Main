import React, { useState } from 'react';
import './styles/fastfood.css';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export const menuData = {
  starters: [
    { id: 'f1', name: 'Angara Paneer Tikka', price: 290, desc: 'Fresh cottage cheese cubes marinated in spiced yogurt, smoked mustard oil, cooked in traditional clay ovens.', veg: true, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/angara-paneer-tikka.webp' },
    { id: 'f2', name: 'Murgh Malai Kebab', price: 340, desc: 'Tender chicken breast chunks marinated in rich cream, cheese, cardamom, and white pepper, charred in tandoor.', veg: false, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/murgh-malai-kebab.webp' }
  ],
  soups: [
    { id: 'f3', name: 'Shahi Tamatar Shorba', price: 140, desc: 'A rich spiced tomato soup flavored with roasted cumin, fresh cream and crunchy herb croutons.', veg: true, tags: ['Jain-friendly'], spice: 1, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/shahi-tamatar-shorba.webp' },
    { id: 'f4', name: 'Mughlai Murgh Shorba', price: 190, desc: 'Classic double-strength chicken broth cooked slow with whole cardamoms, almonds and saffron strands.', veg: false, tags: ['Gluten-free'], spice: 1, allergens: 'Nuts', image: 'images/restaurants/aangan-ember/menu/mughlai-murgh-shorba.png' }
  ],
  'main-course': [
    { id: 'f5', name: 'Royal Butter Chicken (Murgh Makhani)', price: 460, desc: 'Tandoori chicken pieces simmered in a velvety, rich tomato gravy loaded with fresh butter and dried fenugreek leaves.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy, Nuts', image: 'images/restaurants/aangan-ember/menu/royal-butter-chicken.webp' },
    { id: 'f6', name: 'Kashmiri Mutton Rogan Josh', price: 540, desc: 'Slow-cooked baby lamb leg portions in an authentic aromatic red gravy flavored with Kashmiri maval petals and ginger.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: 'images/restaurants/aangan-ember/menu/kashmiri-mutton-rogan-josh.png' }
  ],
  biryanis: [
    { id: 'f7', name: 'Deccani Murgh Dum Biryani', price: 420, desc: 'Basmati rice cooked in layers with marinated spiced chicken, whole spices, saffron, and fresh mint on low heat.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/deccani-murgh-dum-biryani.webp' },
    { id: 'f8', name: 'Shahi Subz Biryani', price: 360, desc: 'Fragrant long-grain rice layered with seasonal cauliflower, green peas, carrots, saffron and caramelized onions.', veg: true, tags: ['Jain-friendly', 'Gluten-free'], spice: 2, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/shahi-subz-biryani.png' }
  ],
  vegetarian: [
    { id: 'f9', name: 'Dal Makhani (Lalla Mussa)', price: 320, desc: 'Black lentils slow-cooked overnight on charcoal embers with butter, fresh cream, tomato puree, and fenugreek.', veg: true, tags: ['Gluten-free'], spice: 1, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/dal-makhani.png' },
    { id: 'f10', name: 'Shahi Kadhai Paneer', price: 380, desc: 'Cottage cheese chunks tossed in spicy dry coriander seed and red pepper gravy cooked in heavy iron kadhai.', veg: true, tags: ['Gluten-free'], spice: 2, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/shahi-kadhai-paneer.webp' }
  ],
  'non-vegetarian': [
    { id: 'f11', name: 'Tandoori Murgh (Half)', price: 350, desc: 'Classic bone-in spring chicken marinated in yogurt spice blends, roasted on iron skewers inside charcoal clay oven.', veg: false, tags: ['Gluten-free'], spice: 3, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/tandoori-murgh.png' },
    { id: 'f12', name: 'Awadhi Seekh Kebab (Mutton)', price: 440, desc: 'Mincemeat spiced with cardamoms, ginger, garlic, skewered and charred to melting tenderness.', veg: false, tags: ['Gluten-free'], spice: 2, allergens: 'None', image: 'images/restaurants/aangan-ember/menu/awadhi-seekh-kebab.png' }
  ],
  desserts: [
    { id: 'f13', name: 'Kesari Gulab Jamun (2 Pcs)', price: 130, desc: 'Warm golden milk solids dumplings stuffed with cardamom and saffron, soaked in sweet rosewater syrup.', veg: true, tags: ['Jain-friendly'], spice: 0, allergens: 'Dairy, Gluten', image: 'images/restaurants/aangan-ember/menu/kesari-gulab-jamun.png' },
    { id: 'f14', name: 'Royal Kesar Rasmalai', price: 160, desc: 'Chilled cottage cheese discs soaked in saffron-infused sweetened thickened milk, topped with pistachios.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Dairy, Nuts', image: 'images/restaurants/aangan-ember/menu/royal-kesar-rasmalai.png' }
  ],
  beverages: [
    { id: 'f15', name: 'Peshawari Sweet Lassi', price: 120, desc: 'Thick, creamy churned yogurt drink sweetened with sugar, topped with thick milk malai and almond slivers.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 0, allergens: 'Dairy, Nuts', image: 'images/restaurants/aangan-ember/menu/peshawari-sweet-lassi.png' },
    { id: 'f16', name: 'Masala Shahi Chaas', price: 90, desc: 'Chilled salted buttermilk spiced with roasted cumin, green chillies, mint and fresh ginger juice.', veg: true, tags: ['Gluten-free', 'Jain-friendly'], spice: 1, allergens: 'Dairy', image: 'images/restaurants/aangan-ember/menu/masala-shahi-chaas.png' }
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [orderCategory, setOrderCategory] = useState('starters');
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState('delivery'); // pickup/delivery
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCateringModal, setShowCateringModal] = useState(false);

  const [booking, setBooking] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'royal-court', request: '' });
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', payment: 'upi' });
  const [cateringForm, setCateringForm] = useState({ name: '', email: '', phone: '', eventType: 'diwali', details: '' });

  const specialOffers = [
    { title: 'TANDOORI PLATTER PAIRING', offer: 'FREE LASSI', desc: 'Order any Royal Kebab Platter or Biryani Combo and receive two glasses of Peshawari Sweet Lassi completely FREE! Valid daily.' },
    { title: 'DIWALI FESTIVAL BANQUETS', offer: '15% DISCOUNT', desc: 'Book corporate Diwali dinner platters or catering setups and receive a flat 15% discount. Contact Maître D’.' }
  ];

  // 2. Booking, Catering & Order Handlers
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Royal Seat Confirmed! Table reservation secured for ${booking.name} on ${booking.date} at ${booking.time} for ${booking.guests} guests. Preference: ${booking.preference.toUpperCase()}. Confirmation details sent to ${booking.phone}`);
    setBooking({ name: '', phone: '', email: '', date: '', time: '', guests: '2', preference: 'royal-court', request: '' });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Submitted! Our Royal banquets coordinator will contact you at ${cateringForm.phone} to finalize the arrangements.`);
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
    alert(`Royal Feast Dispatched! Your order is confirmed for ${checkoutForm.name}. Total billed: ₹${getCartTotal()}. Payment via: ${checkoutForm.payment.toUpperCase()}`);
    setCart({});
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fastfood-container" id="home">
      {/* 1. Header Navigation Bar */}
      <nav className="casual-navbar" style={{ background: '#221511', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <a href="#home" className="fastfood-font-impact" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '1.6rem' }}>The Royal Tandoor</a>
        <ul className="casual-nav-links">
          <li><a href="#home" className="fastfood-nav-link">Home</a></li>
          <li><a href="#offers" className="fastfood-nav-link">Offers</a></li>
          <li><a href="#menu" className="fastfood-nav-link">Menu</a></li>
          <li><a href="#ordering" className="fastfood-nav-link">Order Online</a></li>
          <li><a href="#booking" className="fastfood-nav-link">Book Seat</a></li>
          <li><a href="#about" className="fastfood-nav-link">About</a></li>
          <li><a href="#catering" className="fastfood-nav-link">Catering</a></li>
          <li><a href="#contact" className="fastfood-nav-link">Location</a></li>
        </ul>
        <button className="fastfood-btn-red" style={{ padding: '8px 18px', fontSize: '0.8rem' }} onClick={() => setIsCartOpen(true)}>
          🛒 Cart ({getCartCount()})
        </button>
      </nav>

      {/* 1. Home / Hero Section */}
      <section className="fastfood-hero">
        <div className="fastfood-hero-grid">
          <div>
            <ScrollReveal animation="fade-in-down">
              <span className="fastfood-hero-badge">Luxury North Indian & Mughlai</span>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={150}>
              <h1 className="fastfood-font-impact fastfood-hero-title">
                The Royal Tandoor
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="zoom-in" delay={300}>
              <p style={{ fontSize: '1.05rem', color: '#fcfaf2', marginBottom: '35px', lineHeight: 1.7, opacity: 0.9 }}>
                Experience elite royal hospitality in Bengaluru. Indulge in classic butter chicken, smoky claypot seekh kebabs, rich dal makhani, and tandoori garlic naan cooked in high charcoal heat. Open Daily 12:30 PM - 11:30 PM.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={450}>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="#menu" className="fastfood-btn-red" style={{ textDecoration: 'none' }}>Royal Menu</a>
                <a href="#booking" className="fastfood-btn-yellow" style={{ textDecoration: 'none' }}>Book Seat</a>
                <a href="#ordering" className="fastfood-btn-red" style={{ textDecoration: 'none', background: 'white', color: '#221511', borderColor: 'white' }}>Order Online</a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-in-left" delay={300}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1585938338392-50a59970d2ee?auto=format&fit=crop&w=500&q=80"
                alt="Tandoori chicken setup"
                style={{ width: '100%', borderRadius: '4px', border: '1.5px solid #d4af37', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Special Offers Section */}
      <section className="fastfood-section-padding" id="offers" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Regal Promotions</h2>
        </ScrollReveal>
        <div className="fastfood-menu-grid">
          {specialOffers.map((o, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150}>
              <div className="fastfood-card" style={{ padding: '30px', background: 'white' }}>
                <span style={{ fontSize: '0.8rem', color: '#6b1124', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                  {o.offer}
                </span>
                <h3 className="fastfood-font-impact" style={{ fontSize: '1.4rem', color: '#221511', marginBottom: '12px' }}>{o.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#5c4e48', margin: 0, lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Menu Section (8 Categories) */}
      <section className="fastfood-section-padding" id="menu" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">The Tandoori Feast</h2>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="fastfood-menu-category-tabs">
            {Object.keys(menuData).map(c => (
              <button
                key={c}
                className={`fastfood-menu-category-btn ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setActiveCategory(c)}
                style={{ textTransform: 'capitalize' }}
              >
                {c.replace('-', ' ')}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="fastfood-menu-grid">
          {menuData[activeCategory].map((item, idx) => (
            <ScrollReveal key={item.id} animation="zoom-in" delay={idx * 100}>
              <div className="fastfood-card">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="fastfood-card-img" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "images/restaurants/fallback-food.webp";
                  }}
                />
                <div className="fastfood-card-body">
                  <div>
                    <h3 className="fastfood-card-title">{item.name}</h3>
                    <p className="fastfood-card-desc">{item.desc}</p>
                  </div>
                  <div className="fastfood-card-footer">
                    <span style={{ fontWeight: 800, color: '#6b1124', fontSize: '1.25rem' }}>₹{item.price}</span>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      <span className={`casual-veg-badge ${item.veg ? 'veg' : 'non-veg'}`} style={{ border: 'none', background: 'transparent' }}>
                        {item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                      </span>
                      {item.spice > 0 && <span>{'🌶️'.repeat(item.spice)}</span>}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span>Allergens: {item.allergens}</span>
                    {item.tags && item.tags.map(t => <span key={t} style={{ color: '#15803d', fontWeight: 600 }}>• {t}</span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. Online Ordering Section */}
      <section className="fastfood-section-padding" id="ordering" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Regal Online Takeaway</h2>
        </ScrollReveal>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
              <div className="casual-order-toggle">
                <button className={`casual-order-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`} onClick={() => setOrderType('delivery')}>Delivery</button>
                <button className={`casual-order-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`} onClick={() => setOrderType('pickup')}>Pickup</button>
              </div>
              <div style={{ fontWeight: 700, color: '#221511', fontFamily: 'Cinzel' }}>
                Course:
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  style={{ marginLeft: '10px', padding: '8px 16px', border: '1px solid rgba(212,175,55,0.3)', background: 'white' }}
                >
                  {Object.keys(menuData).map(c => <option key={c} value={c}>{c.replace('-', ' ')}</option>)}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="fastfood-menu-grid">
            {menuData[orderCategory].map((item, idx) => (
              <ScrollReveal key={item.id} animation="zoom-in" delay={idx * 100}>
                <div className="fastfood-card" style={{ background: 'white' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="fastfood-card-img" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "images/restaurants/fallback-food.webp";
                    }}
                  />
                  <div className="fastfood-card-body">
                    <div>
                      <h3 className="fastfood-card-title">{item.name}</h3>
                      <p className="fastfood-card-desc" style={{ marginBottom: '15px' }}>{item.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: '#6b1124', fontSize: '1.2rem' }}>₹{item.price}</span>
                      {cart[item.id] ? (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <button className="fastfood-btn-red" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(item.id, -1)}>-</button>
                          <span style={{ fontWeight: 700 }}>{cart[item.id]}</span>
                          <button className="fastfood-btn-red" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(item.id, 1)}>+</button>
                        </div>
                      ) : (
                        <button className="fastfood-btn-red" style={{ padding: '6px 16px', fontSize: '0.75rem' }} onClick={() => updateCartQty(item.id, 1)}>
                          Add to Feast
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
      <section className="fastfood-section-padding" id="booking" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Royal Table Reservations</h2>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="fastfood-booking-ticket">
            <div className="fastfood-ticket-stub">
              <div className="fastfood-font-impact" style={{ fontSize: '1.25rem', letterSpacing: '1px' }}>ROYAL COURT</div>
              <p style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '15px' }}>
                New Delhi <br />
                Mughlai Dining
              </p>
              <div style={{ border: '1px solid #d4af37', padding: '8px 12px', fontSize: '0.75rem', fontWeight: 700, color: '#d4af37', marginTop: '20px' }}>
                SEAT PASS
              </div>
            </div>

            <div className="fastfood-ticket-body">
              <form onSubmit={handleBookingSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Full Name</span>
                    <input type="text" required className="fastfood-form-control" value={booking.name} onChange={(e) => setBooking({...booking, name: e.target.value})} placeholder="Arjun Sharma" />
                  </div>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Mobile Number</span>
                    <input type="tel" required className="fastfood-form-control" value={booking.phone} onChange={(e) => setBooking({...booking, phone: e.target.value})} placeholder="+91 91234 56789" />
                  </div>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Date of Banquet</span>
                    <input type="date" required className="fastfood-form-control" value={booking.date} onChange={(e) => setBooking({...booking, date: e.target.value})} />
                  </div>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Banquet Time</span>
                    <select required className="fastfood-form-control" value={booking.time} onChange={(e) => setBooking({...booking, time: e.target.value})}>
                      <option value="">Select Time</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                    </select>
                  </div>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Seating Preference</span>
                    <select className="fastfood-form-control" value={booking.preference} onChange={(e) => setBooking({...booking, preference: e.target.value})}>
                      <option value="royal-court">Royal Court Room</option>
                      <option value="indoor">Private Saloon</option>
                    </select>
                  </div>
                  <div className="fastfood-form-group">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b1124' }}>Guest Seekers</span>
                    <select className="fastfood-form-control" value={booking.guests} onChange={(e) => setBooking({...booking, guests: e.target.value})}>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="fastfood-btn-red" style={{ width: '100%' }}>CONFIRM RESERVATION</button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. About Us Section */}
      <section className="fastfood-section-padding" id="about" style={{ background: '#fdfbf7' }}>
        <div className="casual-about-split">
          <ScrollReveal animation="fade-in-left">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Regal Mughlai grill kitchen preparation" className="casual-about-img" />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-right" delay={150}>
            <div>
              <span className="fastfood-font-impact" style={{ color: '#d4af37', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>
                Our Regal Heritage
              </span>
              <h2 className="fastfood-font-impact" style={{ fontSize: '2.5rem', color: '#221511', margin: '0 0 20px 0' }}>
                Imperial Mughlai Masterpieces
              </h2>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#5c4e48', marginBottom: '15px' }}>
                The Royal Tandoor has preserved the ancient culinary lineages of imperial kitchens. We cook slow and char skewered meats in heavy clay ovens fueled by wood coals.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '0.95rem', color: '#5c4e48' }}>
                Every spice blend is hand-pounded inside our own spice cellars. Our butter chicken utilizes pure cream and organic butter, and our saffron biryanis capture genuine aroma notes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Culinary Team Section */}
      <section className="fastfood-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">The Royal Chefs</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="zoom-in" delay={100}>
            <div style={{ textAlign: 'center' }}>
              <img src="images/restaurants/aangan-ember/chef-arjun.png" alt="Chef Arjun Mehta" style={{ width: '100%', height: '340px', objectFit: 'cover', border: '1.5px solid #d4af37', marginBottom: '15px' }} />
              <h3 className="fastfood-font-impact" style={{ fontSize: '1.25rem', color: '#221511' }}>Chef Arjun Mehta</h3>
              <span style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Executive Chef & Tandoor Master</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={250}>
            <div style={{ textAlign: 'center' }}>
              <img src="images/restaurants/aangan-ember/chef-elena.png" alt="Chef Elena Dev" style={{ width: '100%', height: '340px', objectFit: 'cover', border: '1.5px solid #d4af37', marginBottom: '15px' }} />
              <h3 className="fastfood-font-impact" style={{ fontSize: '1.25rem', color: '#221511' }}>Chef Elena Dev</h3>
              <span style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Pastry Creator</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Events & Catering Section */}
      <section className="fastfood-section-padding" id="catering" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Regal Catering & Banquets</h2>
        </ScrollReveal>

        <div className="casual-timeline">
          <ScrollReveal animation="fade-in-up">
            <div className="casual-timeline-item">
              <div className="casual-timeline-img-wrapper">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" alt="Corporate event" className="casual-timeline-img" style={{ border: '1px solid #d4af37' }} />
              </div>
              <div className="casual-timeline-content">
                <h3 className="fastfood-font-impact" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Royal Corporate Dinners</h3>
                <p style={{ color: '#5c4e48', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Banquet buffet setups serving hot tandoori kebabs, slow-simmered dal makhani, and freshly frothed sweet lassi at your corporate diwali functions.
                </p>
                <button className="fastfood-btn-red" onClick={() => setShowCateringModal(true)}>Enquire Now</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Reviews / Testimonials Section */}
      <section className="fastfood-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Royal Reviews</h2>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in">
          <div className="casual-testimonial-card" style={{ background: '#fdfbf7', border: '1px solid #d4af37' }}>
            <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>⭐⭐⭐⭐★</span>
            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: '#221511', marginBottom: '15px' }}>
              "The Butter Chicken is pure poetry. Smoked flavors from the tandoor blended in the creamiest tomato gravy. An authentic Mughlai experience in Delhi."
            </p>
            <strong className="fastfood-font-impact" style={{ fontSize: '0.85rem', color: '#6b1124' }}>- Arjun Sharma</strong>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Gallery Section */}
      <section className="fastfood-section-padding" style={{ background: '#fdfbf7' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">The Royal Gallery</h2>
        </ScrollReveal>

        <div className="casual-gallery-mosaic">
          <div className="casual-gallery-item-mosaic casual-gallery-tall">
            <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80" alt="Paneer Tikka" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" alt="Butter Chicken" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" alt="Rasmalai" />
          </div>
          <div className="casual-gallery-item-mosaic">
            <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" alt="Lassi pour" />
          </div>
          <div className="casual-gallery-item-mosaic casual-gallery-wide">
            <img src="https://images.unsplash.com/photo-1585938338392-50a59970d2ee?auto=format&fit=crop&w=500&q=80" alt="Royal interior" />
          </div>
        </div>
      </section>

      {/* 11. Social Media Section */}
      <section className="fastfood-section-padding" style={{ background: 'white' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Follow the Tandoor</h2>
          <p style={{ textAlign: 'center', color: '#5c4e48' }}>Follow us @AanganEmber on Instagram for daily kitchen showcases.</p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', maxWidth: '1000px', margin: '0 auto' }}>
          {['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=300&q=80'].map((url, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', height: '180px', border: '1px solid #d4af37' }}>
                <img src={url} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 12. Location / Contact Section */}
      <section className="fastfood-section-padding" id="contact" style={{ background: '#fdfbf7', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <ScrollReveal animation="fade-in-up">
          <h2 className="fastfood-section-title fastfood-font-impact">Imperial Court Location</h2>
        </ScrollReveal>
        <div className="casual-contact-grid">
          <ScrollReveal animation="fade-in-left">
            <div className="casual-contact-info">
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#221511', fontFamily: 'Cinzel' }}>Restaurant Estate Address</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c4e48', margin: 0 }}>45 Heritage Lane, Indiranagar, Bengaluru, Karnataka 560038</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#221511', fontFamily: 'Cinzel' }}>Maître D’ Hotlines</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c4e48', margin: 0 }}>
                  <a href="tel:+918049600000" style={{ color: '#6b1124', textDecoration: 'none', fontWeight: 700 }}>+91 80 4960 0000</a>
                </p>
                <a href="https://wa.me/918049600000" target="_blank" rel="noopener noreferrer" className="fastfood-whatsapp-btn" style={{ marginTop: '10px' }}>
                  💬 WhatsApp Live Chat
                </a>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0', color: '#221511', fontFamily: 'Cinzel' }}>Direct Email</h4>
                <p style={{ fontSize: '0.9rem', color: '#5c4e48', margin: 0 }}>
                  <a href="mailto:hello@aanganember.example" style={{ color: '#6b1124', textDecoration: 'none' }}>hello@aanganember.example</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={150}>
            <div style={{ height: '300px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #d4af37' }}>
              <iframe
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961623861214!2d77.21672101508226!3d28.629910582419075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b69335f9%3A0x2a98f5a6b0c2a71c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1652393302110!5m2!1sen!2sin"
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
      <div className={`fastfood-cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="fastfood-cart-header">
          <span>Active Royal Order</span>
          <button style={{ background: 'transparent', border: 'none', color: '#d4af37', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        <div className="fastfood-cart-body">
          {getCartCount() === 0 ? (
            <p style={{ textAlign: 'center', color: '#5c4e48', marginTop: '40px' }}>Your selection is empty.</p>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              let matchItem = null;
              Object.values(menuData).forEach(cat => {
                const found = cat.find(i => i.id === id);
                if (found) matchItem = found;
              });
              return matchItem ? (
                <div key={id} className="fastfood-cart-item">
                  <div>
                    <h5 style={{ margin: 0, fontWeight: 700, color: '#221511' }}>{matchItem.name}</h5>
                    <span style={{ fontSize: '0.85rem', color: '#6b1124' }}>₹{matchItem.price}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="fastfood-btn-red" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, -1)}>-</button>
                    <span>{qty}</span>
                    <button className="fastfood-btn-red" style={{ padding: '2px 8px' }} onClick={() => updateCartQty(id, 1)}>+</button>
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="fastfood-cart-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', marginBottom: '15px', color: '#221511' }}>
            <span>Basket Value:</span>
            <span>₹{getCartTotal()}</span>
          </div>
          <button className="fastfood-btn-red" style={{ width: '100%' }} disabled={getCartCount() === 0} onClick={() => setShowCheckout(true)}>
            Checkout Royal Order
          </button>
        </div>
      </div>

      {/* Checkout details Modal */}
      {showCheckout && (
        <div className="fastfood-modal-overlay">
          <div className="fastfood-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b1124' }} onClick={() => setShowCheckout(false)}>×</button>
            <h3 className="fastfood-font-impact" style={{ fontSize: '1.5rem', color: '#221511', marginBottom: '20px' }}>Royal Checkout</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fastfood-form-group">
                  <span>Full Name</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} placeholder="Arjun Sharma" />
                </div>
                <div className="fastfood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})} placeholder="+91 91234 56789" />
                </div>
                {orderType === 'delivery' && (
                  <div className="fastfood-form-group">
                    <span>Delivery Address</span>
                    <input type="text" required className="fastfood-form-control" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="Enter street in Connaught Place" />
                  </div>
                )}
                <div className="fastfood-form-group">
                  <span>Payment Selection</span>
                  <select className="fastfood-form-control" value={checkoutForm.payment} onChange={(e) => setCheckoutForm({...checkoutForm, payment: e.target.value})}>
                    <option value="upi">UPI (GPay / PhonePe / BHIM)</option>
                    <option value="card">Prestige Credit Card</option>
                    <option value="banking">Net Banking</option>
                    <option value="restaurant">Pay at Restaurant</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="fastfood-btn-red" style={{ width: '100%' }}>Confirm Order (₹{getCartTotal()})</button>
            </form>
          </div>
        </div>
      )}

      {/* Catering Modal */}
      {showCateringModal && (
        <div className="fastfood-modal-overlay">
          <div className="fastfood-modal-content">
            <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b1124' }} onClick={() => setShowCateringModal(false)}>×</button>
            <h3 className="fastfood-font-impact" style={{ fontSize: '1.5rem', color: '#221511', marginBottom: '20px' }}>Royal Catering Enquiry</h3>
            <form onSubmit={handleCateringSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div className="fastfood-form-group">
                  <span>Contact Name</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.name} onChange={(e) => setCateringForm({...cateringForm, name: e.target.value})} placeholder="Meera Kapoor" />
                </div>
                <div className="fastfood-form-group">
                  <span>Email Address</span>
                  <input type="email" required className="fastfood-form-control" value={cateringForm.email} onChange={(e) => setCateringForm({...cateringForm, email: e.target.value})} placeholder="meera@example.com" />
                </div>
                <div className="fastfood-form-group">
                  <span>Mobile Number</span>
                  <input type="text" required className="fastfood-form-control" value={cateringForm.phone} onChange={(e) => setCateringForm({...cateringForm, phone: e.target.value})} placeholder="+91 91234 56789" />
                </div>
                <div className="fastfood-form-group">
                  <span>Celebration Event</span>
                  <select className="fastfood-form-control" value={cateringForm.eventType} onChange={(e) => setCateringForm({...cateringForm, eventType: e.target.value})}>
                    <option value="diwali">Diwali Royal Buffet</option>
                    <option value="wedding">Imperial Wedding Reception</option>
                    <option value="corporate">Gala Corporate Banquet</option>
                  </select>
                </div>
                <div className="fastfood-form-group">
                  <span>Event Details</span>
                  <textarea rows="3" className="fastfood-form-control" value={cateringForm.details} onChange={(e) => setCateringForm({...cateringForm, details: e.target.value})} placeholder="Guest details, preference..."></textarea>
                </div>
              </div>
              <button type="submit" className="fastfood-btn-red" style={{ width: '100%' }}>Submit Royal Request</button>
            </form>
          </div>
        </div>
      )}

      {/* 12. Footer Section */}
      <Footer
        restaurantName="The Royal Tandoor"
        tagline="Imperial Mughlai culinary masterpieces, coal clay-oven skewers, and premium hospitality."
        themeColor="#6b1124"
        dark={true}
      />
    </div>
  );
}


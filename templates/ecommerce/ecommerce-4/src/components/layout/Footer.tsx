import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShieldCheck, Truck, RotateCcw, Headphones, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useShop();

  return (
    <footer style={{ backgroundColor: '#161616', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '3rem', borderTop: '1px solid var(--border-dark)' }}>
      <div className="container">
        {/* Trust Badges Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            paddingBottom: '3rem',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Truck size={24} color="var(--accent-amber)" />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>EXPRESS SHIPPING</div>
              <div style={{ fontSize: '0.75rem', color: '#9E9E9E' }}>Complimentary above ₹999</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <RotateCcw size={24} color="var(--accent-amber)" />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>EASY 30-DAY RETURNS</div>
              <div style={{ fontSize: '0.75rem', color: '#9E9E9E' }}>Hassle-free doorstep pickup</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={24} color="var(--accent-amber)" />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>100% GENUINE GUARANTEE</div>
              <div style={{ fontSize: '0.75rem', color: '#9E9E9E' }}>Verified partner brands</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Headphones size={24} color="var(--accent-amber)" />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>24/7 VIP SUPPORT</div>
              <div style={{ fontSize: '0.75rem', color: '#9E9E9E' }}>Concierge order assistance</div>
            </div>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              ORVANA
            </div>
            <p style={{ fontSize: '0.85rem', color: '#9E9E9E', maxWidth: '320px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              EVERYTHING WORTH DISCOVERING. Premium digital department store bringing together curated technology, fashion, home, and living essentials.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--accent-amber)', fontWeight: 800 }}>
              <Globe size={16} /> INDIA / ₹ INR
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '1rem', textTransform: 'uppercase' }}>
              SHOP
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#9E9E9E' }}>
              <button onClick={() => navigate('/shop')} style={{ textAlign: 'left', color: 'inherit' }}>All Products</button>
              <button onClick={() => navigate('/new')} style={{ textAlign: 'left', color: 'inherit' }}>New Arrivals</button>
              <button onClick={() => navigate('/deals')} style={{ textAlign: 'left', color: 'inherit' }}>The Daily Drop Deals</button>
              <button onClick={() => navigate('/brands')} style={{ textAlign: 'left', color: 'inherit' }}>Partner Brands</button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '1rem', textTransform: 'uppercase' }}>
              CATEGORIES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#9E9E9E' }}>
              <button onClick={() => navigate('/electronics')} style={{ textAlign: 'left', color: 'inherit' }}>Electronics</button>
              <button onClick={() => navigate('/fashion')} style={{ textAlign: 'left', color: 'inherit' }}>Fashion</button>
              <button onClick={() => navigate('/home')} style={{ textAlign: 'left', color: 'inherit' }}>Home & Living</button>
              <button onClick={() => navigate('/beauty')} style={{ textAlign: 'left', color: 'inherit' }}>Beauty</button>
              <button onClick={() => navigate('/sports')} style={{ textAlign: 'left', color: 'inherit' }}>Sports & Fitness</button>
              <button onClick={() => navigate('/kids')} style={{ textAlign: 'left', color: 'inherit' }}>Toys & Kids</button>
              <button onClick={() => navigate('/travel')} style={{ textAlign: 'left', color: 'inherit' }}>Travel</button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '1rem', textTransform: 'uppercase' }}>
              CUSTOMER SUPPORT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#9E9E9E' }}>
              <button onClick={() => navigate('/help')} style={{ textAlign: 'left', color: 'inherit' }}>Help Center</button>
              <button onClick={() => navigate('/account')} style={{ textAlign: 'left', color: 'inherit' }}>Track Your Order</button>
              <button onClick={() => navigate('/help')} style={{ textAlign: 'left', color: 'inherit' }}>Shipping & Delivery</button>
              <button onClick={() => navigate('/help')} style={{ textAlign: 'left', color: 'inherit' }}>Returns & Refunds</button>
              <button onClick={() => navigate('/help')} style={{ textAlign: 'left', color: 'inherit' }}>Contact Us</button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: '#707070'
          }}
        >
          <div>© 2026 ORVANA MARKETPLACE. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

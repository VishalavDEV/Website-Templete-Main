import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { User, Package, MapPin, Settings, ArrowRight } from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { orders, navigate } = useShop();
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            ORVANA ACCOUNT PORTAL
          </span>
          <h1 className="heading-xl">MY ACCOUNT</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {/* Left Menu */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', padding: '1rem', height: 'fit-content' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Aarav Sharma</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>aarav.sharma@example.com</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <button
                onClick={() => setActiveTab('orders')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'orders' ? 'var(--bg-primary)' : 'transparent',
                  color: activeTab === 'orders' ? 'var(--accent-blue)' : 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textAlign: 'left'
                }}
              >
                <Package size={18} /> Order History ({orders.length})
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'addresses' ? 'var(--bg-primary)' : 'transparent',
                  color: activeTab === 'addresses' ? 'var(--accent-blue)' : 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textAlign: 'left'
                }}
              >
                <MapPin size={18} /> Saved Addresses
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'profile' ? 'var(--bg-primary)' : 'transparent',
                  color: activeTab === 'profile' ? 'var(--accent-blue)' : 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textAlign: 'left'
                }}
              >
                <Settings size={18} /> Profile Settings
              </button>
            </div>
          </div>

          {/* Right Main Box */}
          <div style={{ gridColumn: 'span 2', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            {activeTab === 'orders' && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>ORDER HISTORY</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {orders.map((o) => (
                    <div key={o.id} style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                        <div>
                          <strong>Order #{o.id}</strong> • {o.date}
                        </div>
                        <div style={{ color: '#15803D', fontWeight: 800 }}>{o.status}</div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                        {o.items.map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                            <img src={item.product.images[0]} alt="" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>{item.product.name}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Qty: {item.quantity} | ₹{item.price.toLocaleString('en-IN')}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '1rem', fontWeight: 900 }}>Total: ₹{o.total.toLocaleString('en-IN')}</div>
                        <button onClick={() => navigate('/shop')} className="btn btn-outline" style={{ padding: '0.45rem 0.9rem', fontSize: '0.78rem' }}>
                          BUY AGAIN
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>SAVED ADDRESSES</h3>
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem', backgroundColor: 'var(--bg-primary)' }}>
                  <div style={{ fontWeight: 800, marginBottom: '0.3rem' }}>Default Home Address</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Aarav Sharma<br />
                    42 MG Road, Indiranagar<br />
                    Bengaluru, Karnataka - 560038<br />
                    Phone: +91 98765 43210
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>PROFILE SETTINGS</h3>
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '420px' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>FULL NAME</label>
                    <input type="text" defaultValue="Aarav Sharma" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>EMAIL ADDRESS</label>
                    <input type="email" defaultValue="aarav.sharma@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }} />
                  </div>
                  <button type="submit" className="btn btn-accent" style={{ width: 'fit-content' }}>SAVE CHANGES</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

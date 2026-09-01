import React, { useState, useEffect } from 'react';
import { useToyCart } from '../context/ToyCartContext';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { useNavigate, Link } from 'react-router-dom';
import { User, Package, Heart, Bell, Settings, MapPin, LogOut, ShieldAlert } from 'lucide-react';
import './UserProfile.css';

export const UserProfile: React.FC = () => {
  const { wishlist } = useToyCart();
  const navigate = useNavigate();

  // Tab navigation states
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'toys' | 'addresses' | 'notifications' | 'settings'>('profile');

  // Mascot animation state
  const [mascotState, setMascotState] = useState<'idle' | 'hover' | 'click' | 'cart'>('idle');

  // Wave the mascot on page load
  useEffect(() => {
    setMascotState('click');
    const timer = setTimeout(() => setMascotState('idle'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMascotTickle = () => {
    setMascotState('click');
    setTimeout(() => setMascotState('idle'), 1800);
  };

  // Mock Orders list
  const mockOrders = [
    { id: 'TYW-987654', date: '2026-08-19 21:00', total: 44.99, status: 'SHIPPED' },
    { id: 'TYW-112233', date: '2026-07-15 14:32', total: 19.99, status: 'DELIVERED' }
  ];

  return (
    <div className="user-profile-page app-container">
      <div className="stars-bg" />

      <div className="profile-header">
        <h1 className="profile-title">TOY CADET DASHBOARD</h1>
        <p className="profile-subtitle">Review credentials, check orders, or customize settings.</p>
      </div>

      <div className="profile-layout-grid">
        {/* Sidebar Nav (Left Column) */}
        <aside className="profile-sidebar glass-panel">
          {/* Animated Waving Mascot */}
          <div className="mascot-container" onClick={handleMascotTickle} title="Tickle the mascot!">
            <ToyRenderer type="robot" state={mascotState} />
            <div className="mascot-bubble">Click me!</div>
          </div>

          <div className="profile-badge-row">
            <span className="profile-level-badge">⭐ Toy Cadet</span>
          </div>

          <nav className="profile-nav-links">
            <button className={`profile-tab-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
              <User size={18} /> My Profile
            </button>
            <button className={`profile-tab-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
              <Package size={18} /> My Orders
            </button>
            <button className={`profile-tab-btn ${activeTab === 'toys' ? 'active' : ''}`} onClick={() => setActiveTab('toys')}>
              <Heart size={18} /> My Toys ({wishlist.length})
            </button>
            <button className={`profile-tab-btn ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => setActiveTab('addresses')}>
              <MapPin size={18} /> Addresses
            </button>
            <button className={`profile-tab-btn ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>
              <Bell size={18} /> Notifications
            </button>
            <button className={`profile-tab-btn ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
              <Settings size={18} /> Settings
            </button>
          </nav>

          <button className="profile-logout-btn" onClick={() => navigate('/')}>
            <LogOut size={16} /> Sign Out
          </button>
        </aside>

        {/* Tab Detail Panel (Right Column) */}
        <main className="profile-detail-panel glass-panel">
          {activeTab === 'profile' && (
            <div className="profile-tab-content">
              <h3>Cadet Credentials</h3>
              <div className="credential-details">
                <div className="credential-row">
                  <span>Full Name:</span>
                  <span>Toy Cadet Alpha</span>
                </div>
                <div className="credential-row">
                  <span>Email:</span>
                  <span>cadet.alpha@toyworld.com</span>
                </div>
                <div className="credential-row">
                  <span>Joined On:</span>
                  <span>August 19, 2026</span>
                </div>
                <div className="credential-row">
                  <span>Reputation points:</span>
                  <span className="rep-points">⭐ 450 Points</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="profile-tab-content">
              <h3>Order History</h3>
              <div className="orders-history-list">
                {mockOrders.map(order => (
                  <div key={order.id} className="history-order-row">
                    <div className="order-meta">
                      <span className="order-id">{order.id}</span>
                      <span className="order-date">{order.date}</span>
                    </div>
                    <div className="order-pricing-status">
                      <span className="order-amount">₹{order.total.toFixed(2)}</span>
                      <span className={`order-status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                    </div>
                    <button className="btn btn-outline track-shortcut-btn" onClick={() => navigate(`/tracking/${order.id}`)}>
                      Track Order
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'toys' && (
            <div className="profile-tab-content">
              <h3>Adopted Toy Squad</h3>
              <p className="tab-desc">Quick overview of favorited toys. Visit My Toy Collection page for detailed management.</p>
              
              <div className="squad-quick-grid">
                {wishlist.length === 0 ? (
                  <div className="squad-empty-hint">
                    <p>No playmates favorited yet. Let's go adopt some!</p>
                    <Link to="/shop" className="btn btn-primary">Go to shop</Link>
                  </div>
                ) : (
                  wishlist.map(toy => (
                    <Link key={toy.id} to={`/product/${toy.id}`} className="squad-quick-card glass-panel">
                      <div className="squad-toy-stage">
                        <ToyRenderer type={toy.animationType} state="hover" />
                      </div>
                      <span>{toy.name}</span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="profile-tab-content">
              <h3>Saved Destinations</h3>
              <div className="addresses-list">
                <div className="address-box glass-panel">
                  <h4>Default Home Address</h4>
                  <p>John Doe</p>
                  <p>123 Play Lane, Toy City</p>
                  <p>Stateville, 10001</p>
                  <p>Phone: +1 555-0199</p>
                  <span className="address-tag">DEFAULT</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="profile-tab-content">
              <h3>Toy Shop Alerts</h3>
              <div className="notifications-list">
                <div className="notification-row glass-panel">
                  <div className="notif-header">
                    <span className="notif-title">🚀 Nerf Rockets Restocked!</span>
                    <span className="notif-time">2 hours ago</span>
                  </div>
                  <p>The space cadet rocket launcher toys are back in stock. Launch one today!</p>
                </div>

                <div className="notification-row glass-panel">
                  <div className="notif-header">
                    <span className="notif-title">🎉 Season Sale Code: TOYWORLD20</span>
                    <span className="notif-time">Yesterday</span>
                  </div>
                  <p>Apply coupon code 'TOYWORLD20' at the checkout to get flat 20% discount on all checkout baskets!</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="profile-tab-content">
              <h3>Playground Settings</h3>
              <div className="settings-controls">
                <div className="settings-row">
                  <div className="settings-meta">
                    <h4>Sound Effects Hooks</h4>
                    <p>Load subtle chime hooks ready on key toy triggers.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="settings-toggle" />
                </div>

                <div className="settings-row">
                  <div className="settings-meta">
                    <h4>Desktop Custom Cursor</h4>
                    <p>Toggles custom toy labels overlay on cursor hover.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="settings-toggle" />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

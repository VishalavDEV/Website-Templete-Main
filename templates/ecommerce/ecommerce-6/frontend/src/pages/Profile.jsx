import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, ClipboardList, ShieldCheck, Plus, Trash2, ShieldAlert, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import OrderTracker from '../components/OrderTracker';
import MagneticButton from '../components/MagneticButton';

const Profile = () => {
  const { token, logout, authHeaders } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile'); // profile, addresses, orders
  
  // Loading & Data States
  const [profileData, setProfileData] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states - Profile update
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profileMessage, setProfileMessage] = useState({ text: '', isError: false });

  // Form states - Address add
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [addrFullName, setAddrFullName] = useState('');
  const [addrLine, setAddrLine] = useState('');
  const [addrCity, setAddrCity] = useState('');
  const [addrZip, setAddrZip] = useState('');
  const [addrPhone, setAddrPhone] = useState('');
  const [addrDefault, setAddrDefault] = useState(false);
  const [addressMessage, setAddressMessage] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/auth');
      return;
    }
    loadAllData();
  }, [token]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      await Promise.all([fetchProfile(), fetchAddresses(), fetchOrders()]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    const res = await fetch('http://localhost:5000/api/profile', { headers: authHeaders() });
    if (res.ok) {
      const data = await res.json();
      setProfileData(data);
      setEmail(data.email);
    }
  };

  const fetchAddresses = async () => {
    const res = await fetch('http://localhost:5000/api/profile/addresses', { headers: authHeaders() });
    if (res.ok) {
      const data = await res.json();
      setAddresses(data);
    }
  };

  const fetchOrders = async () => {
    const res = await fetch('http://localhost:5000/api/orders', { headers: authHeaders() });
    if (res.ok) {
      const data = await res.json();
      setOrders(data);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMessage({ text: '', isError: false });
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify({ email, oldPassword, newPassword })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      
      setProfileMessage({ text: 'Credentials updated successfully.', isError: false });
      setOldPassword('');
      setNewPassword('');
      fetchProfile();
    } catch (err) {
      setProfileMessage({ text: err.message, isError: true });
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    setAddressMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/profile/addresses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify({
          fullName: addrFullName,
          addressLine: addrLine,
          city: addrCity,
          zipCode: addrZip,
          phone: addrPhone,
          isDefault: addrDefault
        })
      });
      if (!res.ok) throw new Error('Failed to save address');
      
      setAddrFullName('');
      setAddrLine('');
      setAddrCity('');
      setAddrZip('');
      setAddrPhone('');
      setAddrDefault(false);
      setShowAddAddress(false);
      fetchAddresses();
    } catch (err) {
      setAddressMessage(err.message);
    }
  };

  const handleDeleteAddress = async (id) => {
    if (confirm('Delete this address?')) {
      const res = await fetch(`http://localhost:5000/api/profile/addresses/${id}`, {
        method: 'DELETE',
        headers: authHeaders()
      });
      if (res.ok) fetchAddresses();
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    if (confirm(`Are you sure you want to update order status to ${newStatus}?`)) {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status?status=${newStatus}`, {
        method: 'PUT',
        headers: authHeaders()
      });
      if (res.ok) fetchOrders();
    }
  };

  const handleInvoiceDownload = (order) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>AURA - Invoice #${order.id}</title>
          <style>
            body { font-family: monospace; padding: 40px; color: #111; background: #faf9f6; line-height: 1.6; }
            .header { border-bottom: 2px solid #111; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; }
            .title { font-size: 24px; font-weight: bold; }
            .details { margin-bottom: 40px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background: #eee; font-weight: bold; }
            .total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">AURA ARCHIVE INVOICE</div>
            <div>Order ID: #${order.id}</div>
          </div>
          <div class="details">
            <p><strong>DATE:</strong> ${new Date(order.orderDate).toLocaleString()}</p>
            <p><strong>CLIENT:</strong> ${profileData?.username.toUpperCase()}</p>
            <p><strong>SHIPPING ADDRESS:</strong> ${order.shippingAddress}</p>
            <p><strong>STATUS:</strong> ${order.status}</p>
            <p><strong>TRACKING CODE:</strong> ${order.trackingNumber}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>ITEM DESCRIPTION</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              ${order.orderItems.map(item => `
                <tr>
                  <td>${item.product.name}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.price.toLocaleString('en-IN')}</td>
                  <td>₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="total">
            <p>Subtotal: ₹${(order.totalAmount - order.taxAmount - order.shippingCharge + order.discountAmount).toLocaleString('en-IN')}</p>
            <p>Discount: -₹${order.discountAmount.toLocaleString('en-IN')}</p>
            <p>GST (18%): ₹${order.taxAmount.toLocaleString('en-IN')}</p>
            <p>Shipping Charge: ${order.shippingCharge === 0 ? 'FREE' : `₹${order.shippingCharge.toLocaleString('en-IN')}`}</p>
            <p><strong>TOTAL AMOUNT PAID: ₹${order.totalAmount.toLocaleString('en-IN')}</strong></p>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading profile spec sheet...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 5% 80px 5%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Dynamic Profile Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }} className="profile-grid-responsive">
        
        {/* Sidebar Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: 'fit-content' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem 1.5rem',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-premium)'
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#000000', display: 'flex', alignItems: 'center', justifyContext: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              {profileData?.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>{profileData?.username}</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{profileData?.email}</span>
            </div>
          </div>

          <div className="glass-panel" style={{ borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-premium)' }}>
            {[
              { id: 'profile', label: 'Account Profile', icon: User },
              { id: 'addresses', label: 'Address Book', icon: MapPin },
              { id: 'orders', label: 'Order History', icon: ClipboardList }
            ].map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.2rem 1.5rem',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--bg-secondary)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--accent-gold)' : '3px solid transparent',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <Icon size={16} /> {t.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                logout();
                navigate('/auth');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.2rem 1.5rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#ff4d4d',
                cursor: 'pointer',
                borderLeft: '3px solid transparent'
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab contents */}
        <div style={{ minHeight: '500px' }}>
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Profile updating */}
            {activeTab === 'profile' && (
              <motion.div key="profile-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>ACCOUNT INFORMATION</h2>
                
                <form onSubmit={handleProfileSubmit} className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', boxShadow: 'var(--shadow-premium)' }}>
                  {profileMessage.text && (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: profileMessage.isError ? 'rgba(255, 77, 77, 0.05)' : 'rgba(76, 175, 80, 0.08)', border: profileMessage.isError ? '1px solid rgba(255, 77, 77, 0.1)' : '1px solid rgba(76, 175, 80, 0.2)', color: profileMessage.isError ? '#ff4d4d' : '#4caf50', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                      <ShieldAlert size={16} />
                      <span>{profileMessage.text}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>EMAIL</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="premium-input" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>OLD PASSWORD</span>
                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="premium-input" placeholder="••••••••" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>NEW PASSWORD</span>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="premium-input" placeholder="••••••••" />
                  </div>

                  <MagneticButton type="submit" className="btn-primary" style={{ width: 'fit-content', marginTop: '1rem' }}>
                    SAVE CHANGES
                  </MagneticButton>
                </form>
              </motion.div>
            )}

            {/* Tab 2: Address book CRUD */}
            {activeTab === 'addresses' && (
              <motion.div key="addresses-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>ADDRESS BOOK</h2>
                  <button onClick={() => setShowAddAddress(!showAddAddress)} className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Plus size={16} /> ADD ADDRESS
                  </button>
                </div>

                {/* Add Address Form overlay */}
                {showAddAddress && (
                  <form onSubmit={handleAddAddress} className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '600px', boxShadow: 'var(--shadow-premium)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.5rem' }}>NEW SHIPMENT ADDRESS</h3>
                    
                    <input type="text" placeholder="Full Name" value={addrFullName} onChange={(e) => setAddrFullName(e.target.value)} required className="premium-input" />
                    <input type="text" placeholder="Street Address" value={addrLine} onChange={(e) => setAddrLine(e.target.value)} required className="premium-input" />
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <input type="text" placeholder="City" value={addrCity} onChange={(e) => setAddrCity(e.target.value)} required className="premium-input" />
                      <input type="text" placeholder="Pincode" value={addrZip} onChange={(e) => setAddrZip(e.target.value)} required className="premium-input" />
                    </div>

                    <input type="text" placeholder="Phone Contact" value={addrPhone} onChange={(e) => setAddrPhone(e.target.value)} className="premium-input" />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" id="default-addr" checked={addrDefault} onChange={(e) => setAddrDefault(e.target.checked)} />
                      <label htmlFor="default-addr" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Set as default address</label>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                      <MagneticButton type="submit" className="btn-primary">SAVE</MagneticButton>
                      <button type="button" onClick={() => setShowAddAddress(false)} className="btn-secondary">CANCEL</button>
                    </div>
                  </form>
                )}

                {/* Addresses lists */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="addresses-grid-responsive">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px', position: 'relative', border: addr.isDefault ? '1px solid var(--accent-gold)' : '1px solid var(--border-glass)' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{addr.fullName}</h4>
                          {addr.isDefault && <span style={{ fontSize: '0.65rem', background: 'var(--accent-gold)', color: '#000000', padding: '2px 6px', borderRadius: '2px', fontWeight: '700' }}>DEFAULT</span>}
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {addr.addressLine} <br />
                          {addr.city}, Pincode: {addr.zipCode} <br />
                          Phone: {addr.phone || 'N/A'}
                        </p>
                      </div>
                      <button onClick={() => handleDeleteAddress(addr.id)} style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'var(--text-muted)', marginTop: '1rem' }} className="remove-hover">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  {addresses.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No addresses saved. Log shipping coordinates above.</p>}
                </div>
              </motion.div>
            )}

            {/* Tab 3: Detailed Order History */}
            {activeTab === 'orders' && (
              <motion.div key="orders-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>TRANSACTION LOG</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {orders.map((ord) => (
                    <div key={ord.id} className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-premium)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {/* Top Order details */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>ORDER #{ord.id}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Plotted on {new Date(ord.orderDate).toLocaleString()}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <button onClick={() => handleInvoiceDownload(ord)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                            <FileText size={16} /> INVOICE
                          </button>
                          <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                            ₹{ord.totalAmount.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Items loop */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {ord.orderItems.map((item) => (
                          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{item.product.name} (QTY: {item.quantity})</span>
                            <span style={{ color: 'var(--text-secondary)' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>

                      {/* Order tracking nodes */}
                      <OrderTracker status={ord.status} trackingNumber={ord.trackingNumber} />

                      {/* Client actions: Cancel or Return */}
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                        {ord.status === 'PENDING' && (
                          <button onClick={() => handleUpdateOrderStatus(ord.id, 'CANCELLED')} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', color: '#ff4d4d', borderColor: '#ff4d4d' }}>
                            CANCEL SPEC
                          </button>
                        )}
                        {ord.status === 'DELIVERED' && (
                          <button onClick={() => handleUpdateOrderStatus(ord.id, 'RETURN_REQUESTED')} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                            REQUEST ARCHIVE RETURN
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {orders.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No archived transactions logged.</p>}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .profile-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .addresses-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;

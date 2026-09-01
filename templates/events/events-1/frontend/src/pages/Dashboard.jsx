import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Download, CreditCard, Key, History, Trash2, ShieldCheck, ArrowRight, ExternalLink, Edit3, ShoppingBag } from 'lucide-react';

export default function Dashboard({ user, cart, removeFromCart, clearCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'downloads';
  const navigate = useNavigate();

  // Data states
  const [orders, setOrders] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [projects, setProjects] = useState([]);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeOrderId, setActiveOrderId] = useState(null);
  
  // License validation form states
  const [validateKeyInput, setValidateKeyInput] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth?redirect=/dashboard');
      return;
    }

    // Load data based on tab
    if (activeTab === 'downloads') {
      api.getMyLicenses().then(setLicenses).catch(err => console.error(err));
    } else if (activeTab === 'licenses') {
      api.getMyLicenses().then(setLicenses).catch(err => console.error(err));
    } else if (activeTab === 'history') {
      api.getMyDownloadsHistory().then(setDownloads).catch(err => console.error(err));
    } else if (activeTab === 'projects') {
      api.getMyProjects().then(setProjects).catch(err => console.error(err));
    } else if (activeTab === 'orders') {
      api.getMyOrders().then(setOrders).catch(err => console.error(err));
    }
  }, [activeTab, user, navigate]);

  const handleTabChange = (tabName) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tabName);
    setSearchParams(params);
  };

  // Checkout process
  const handleInitiateCheckout = () => {
    setCheckoutLoading(true);
    const templateIds = cart.map(t => t.id);
    api.createOrder(templateIds)
      .then(order => {
        setCheckoutLoading(false);
        setActiveOrderId(order.id);
        setShowPaymentModal(true);
      })
      .catch(err => {
        setCheckoutLoading(false);
        alert(err.message || 'Failed to place order.');
      });
  };

  const handleConfirmPayment = () => {
    if (!activeOrderId) return;
    setCheckoutLoading(true);
    api.confirmPayment(activeOrderId)
      .then(() => {
        setCheckoutLoading(false);
        setShowPaymentModal(false);
        clearCart();
        alert('Payment successful! Your premium template licenses have been generated.');
        handleTabChange('downloads');
      })
      .catch(err => {
        setCheckoutLoading(false);
        alert(err.message || 'Payment confirmation failed.');
      });
  };

  // Secure download trigger
  const handleDownloadFile = (templateId) => {
    api.getDownloadToken(templateId)
      .then(res => {
        window.location.href = res.downloadUrl;
      })
      .catch(err => {
        alert(err.message || 'Failed to authorize download.');
      });
  };

  // License Validation handler
  const handleValidateLicense = (e) => {
    e.preventDefault();
    if (!validateKeyInput.trim()) return;
    
    api.validateLicense(validateKeyInput.trim())
      .then(res => {
        setValidationResult(res);
      })
      .catch(err => {
        setValidationResult({ valid: false, message: err.message || 'Invalid key query.' });
      });
  };

  // Export builder project as ZIP directly from dashboard
  const handleExportProject = (projectId) => {
    api.exportProject(projectId)
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `custom_layout_project_${projectId}.zip`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(err => {
        alert('Failed to compile and export custom layout project.');
      });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '30px 0', animation: 'fadeIn 0.5s ease-out' }}>
      <div style={{ marginBottom: 35, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: 5 }}>User Dashboard</h1>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back, <strong style={{ color: 'var(--secondary-color)' }}>{user?.name}</strong>. Manage your licenses and template builder archives.</p>
        </div>
        <div style={{
          padding: '6px 16px',
          borderRadius: 99,
          background: 'rgba(0,102,255,0.08)',
          color: 'var(--primary-color)',
          fontSize: '0.8rem',
          fontWeight: 700
        }}>
          Role: {user?.role === 'ROLE_ADMIN' ? 'Site Administrator' : 'Developer Client'}
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Sidebar Nav */}
        <aside className="glass-panel" style={{ padding: 18, background: 'white', alignSelf: 'start', borderRadius: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button
              onClick={() => handleTabChange('downloads')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'downloads' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'downloads' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Download size={18} /> Downloads
            </button>
            <button
              onClick={() => handleTabChange('licenses')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'licenses' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'licenses' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Key size={18} /> License Keys
            </button>
            <button
              onClick={() => handleTabChange('projects')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'projects' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'projects' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Edit3 size={18} /> Saved Projects
            </button>
            <button
              onClick={() => handleTabChange('history')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'history' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'history' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <History size={18} /> Download Logs
            </button>
            <button
              onClick={() => handleTabChange('orders')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'orders' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'orders' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <ShoppingBag size={18} /> Orders History
            </button>
            <button
              onClick={() => handleTabChange('cart')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'cart' ? 'var(--primary-gradient)' : 'none',
                color: activeTab === 'cart' ? 'white' : 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CreditCard size={18} /> Checkout Cart
              </span>
              {cart.length > 0 && (
                <span style={{
                  background: activeTab === 'cart' ? 'white' : 'var(--primary-color)',
                  color: activeTab === 'cart' ? 'var(--primary-color)' : 'white',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: 99
                }}>
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </aside>

        {/* Content Pane */}
        <section className="glass-panel" style={{ padding: 30, background: 'white', borderRadius: 16 }}>
          {/* 1. DOWNLOADS TAB */}
          {activeTab === 'downloads' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 20 }}>My Available Templates</h3>
              {licenses.length > 0 ? (
                <div style={{ display: 'grid', gap: 18 }}>
                  {licenses.map(lic => (
                    <div key={lic.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 20,
                      borderRadius: 12,
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc'
                    }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase' }}>
                          {lic.template.category.name}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '4px 0' }}>{lic.template.name}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          License: <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: 4 }}>{lic.licenseKey}</code>
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <Link to={`/templates/${lic.template.slug}`} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                          View Product
                        </Link>
                        <button
                          onClick={() => handleDownloadFile(lic.template.id)}
                          className="btn btn-primary"
                          style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                        >
                          <Download size={14} /> Download ZIP
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '50px 0', border: '1px dashed #cbd5e1', borderRadius: 12 }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 15 }}>You have not downloaded or purchased any templates yet.</p>
                  <Link to="/templates" className="btn btn-primary">Browse Marketplace</Link>
                </div>
              )}
            </div>
          )}

          {/* 2. LICENSES TAB */}
          {activeTab === 'licenses' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 10 }}>Active Licenses</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 25 }}>Review active commercial licenses associated with your projects.</p>

              {licenses.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 40, fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '2px solid #e2e8f0', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '10px 0' }}>Template</th>
                      <th>License Type</th>
                      <th>Key Code</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {licenses.map(lic => (
                      <tr key={lic.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '14px 0', fontWeight: 600 }}>{lic.template.name}</td>
                        <td>{lic.licenseType}</td>
                        <td><code style={{ background: '#f8fafc', padding: '4px 8px', borderRadius: 4 }}>{lic.licenseKey}</code></td>
                        <td>
                          <span style={{
                            padding: '3px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600,
                            background: lic.status === 'ACTIVE' ? '#ecfdf5' : '#fee2e2',
                            color: lic.status === 'ACTIVE' ? '#10b981' : '#ef4444'
                          }}>
                            {lic.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* License validation checker tool */}
              <div className="glass-panel" style={{ padding: 25, borderRadius: 12, background: '#f8fafc' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShieldCheck size={18} color="var(--primary-color)" /> License Key Verification Tool
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 15 }}>Validate if a copy-pasted license key code is registered and active in our database system.</p>
                <form onSubmit={handleValidateLicense} style={{ display: 'flex', gap: 10 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="TS-LIC-XXXX-XXXX..."
                    value={validateKeyInput}
                    onChange={(e) => setValidateKeyInput(e.target.value)}
                    style={{ background: 'white' }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ borderRadius: 8, whiteSpace: 'nowrap' }}>
                    Verify Key
                  </button>
                </form>

                {validationResult && (
                  <div style={{
                    marginTop: 20,
                    padding: 16,
                    borderRadius: 8,
                    fontSize: '0.85rem',
                    background: validationResult.valid ? '#ecfdf5' : '#fee2e2',
                    border: validationResult.valid ? '1px solid #a7f3d0' : '1px solid #fca5a5',
                    color: validationResult.valid ? '#065f46' : '#991b1b'
                  }}>
                    <strong style={{ display: 'block', marginBottom: 5 }}>Result: {validationResult.valid ? 'Active Registered License Key' : 'Invalid Query'}</strong>
                    {validationResult.valid ? (
                      <div>
                        <p>Template: {validationResult.templateName}</p>
                        <p>License Holder: {validationResult.userName}</p>
                        <p>License Type: {validationResult.licenseType}</p>
                        <p>Expiration: {validationResult.expiryDate}</p>
                      </div>
                    ) : (
                      <p>{validationResult.message}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. DOWNLOAD LOGS TAB */}
          {activeTab === 'history' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 20 }}>Downloads Activity Log</h3>
              {downloads.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {downloads.map(dl => (
                    <div key={dl.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      fontSize: '0.85rem'
                    }}>
                      <div>
                        <strong>{dl.template.name}</strong>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>IP Address: {dl.ipAddress || 'unknown'}</p>
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {new Date(dl.downloadedAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '30px 0' }}>No downloads registered in history.</p>
              )}
            </div>
          )}

          {/* 4. ORDERS HISTORY */}
          {activeTab === 'orders' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 20 }}>Orders & Invoices</h3>
              {orders.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {orders.map(ord => (
                    <div key={ord.id} style={{
                      padding: 20,
                      borderRadius: 12,
                      border: '1px solid #e2e8f0',
                      fontSize: '0.85rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, borderBottom: '1px solid #f1f5f9', paddingBottom: 10 }}>
                        <div>
                          <strong>Order #{ord.id}</strong>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Date: {new Date(ord.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{
                            padding: '3px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600,
                            background: ord.paymentStatus === 'COMPLETED' ? '#ecfdf5' : '#fff7ed',
                            color: ord.paymentStatus === 'COMPLETED' ? '#10b981' : '#ea580c'
                          }}>
                            {ord.paymentStatus}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 15 }}>
                        {ord.items.map(item => (
                          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{item.template.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                        <span>Total Price</span>
                        <span>${ord.totalAmount.toFixed(2)}</span>
                      </div>
                      {ord.paymentStatus === 'PENDING' && (
                        <button
                          onClick={() => { setActiveOrderId(ord.id); setShowPaymentModal(true); }}
                          className="btn btn-primary animate-fade-in"
                          style={{ marginTop: 15, padding: '6px 14px', fontSize: '0.8rem', borderRadius: 6 }}
                        >
                          Complete Payment
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '30px 0' }}>No purchase invoices found.</p>
              )}
            </div>
          )}

          {/* 5. SAVED PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 20 }}>Builder Saves</h3>
              {projects.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
                  {projects.map(proj => (
                    <div key={proj.id} style={{
                      padding: 18,
                      borderRadius: 12,
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <div style={{ flex: 1, marginBottom: 15 }}>
                        <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{proj.projectName}</h4>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          Saved: {new Date(proj.updatedAt).toLocaleString()}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <Link
                          to={`/builder?project=${proj.id}`}
                          className="btn btn-secondary"
                          style={{ flex: 1, padding: '6px 0', fontSize: '0.75rem', borderRadius: 6 }}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleExportProject(proj.id)}
                          className="btn btn-primary"
                          style={{ flex: 1, padding: '6px 0', fontSize: '0.75rem', borderRadius: 6 }}
                        >
                          Export ZIP
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 15 }}>No saved layout designs.</p>
                  <Link to="/builder" className="btn btn-primary">Create Layout Design</Link>
                </div>
              )}
            </div>
          )}

          {/* 6. SHOPPING CART TAB */}
          {activeTab === 'cart' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 20 }}>Shopping Cart</h3>
              {cart.length > 0 ? (
                <div>
                  <div style={{ display: 'grid', gap: 15, marginBottom: 30 }}>
                    {cart.map(item => (
                      <div key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        borderRadius: 10,
                        border: '1px solid #cbd5e1'
                      }}>
                        <div>
                          <h4 style={{ fontWeight: 700 }}>{item.name}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.category.name}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                          <strong style={{ fontSize: '1.1rem' }}>${item.price.toFixed(2)}</strong>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    borderTop: '2px solid #e2e8f0',
                    paddingTop: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 30
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Subtotal</span>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>${cartTotal.toFixed(2)}</h3>
                    </div>
                    <button
                      onClick={handleInitiateCheckout}
                      disabled={checkoutLoading}
                      className="btn btn-primary"
                      style={{ padding: '12px 28px', fontSize: '0.95rem' }}
                    >
                      {checkoutLoading ? 'Processing Checkout...' : 'Secure Checkout'} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>Your shopping cart is empty.</p>
                  <Link to="/templates" className="btn btn-primary">Browse Premium Templates</Link>
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Checkout Mock Payment Modal */}
      {showPaymentModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div className="glass-panel animate-fade-in" style={{
            maxWidth: 440,
            width: '100%',
            padding: 30,
            background: 'white',
            borderRadius: 16
          }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: 10 }}>Secure Payment Simulation</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20 }}>
              Simulating the secure credit card checkout gateway integration for Order #{activeOrderId}.
            </p>

            <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, marginBottom: 20, fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span>Subtotal Amount</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>Amount Due</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 25 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Cardholder Name</label>
                <input type="text" className="form-control" defaultValue={user?.name} />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Credit Card Number</label>
                <input type="text" className="form-control" placeholder="4111 2222 3333 4444" defaultValue="4111 2222 3333 4444" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 15 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Expiration Date</label>
                  <input type="text" className="form-control" placeholder="MM/YY" defaultValue="12/28" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">CVV</label>
                  <input type="text" className="form-control" placeholder="123" defaultValue="123" />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="btn btn-secondary"
                style={{ flex: 1, borderRadius: 8, padding: '10px 0' }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPayment}
                disabled={checkoutLoading}
                className="btn btn-primary"
                style={{ flex: 1, borderRadius: 8, padding: '10px 0' }}
              >
                {checkoutLoading ? 'Verifying Card...' : 'Pay & Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ShoppingCart, User as UserIcon, LogOut, Layout, Settings, Compass, HelpCircle, Bell, Heart } from 'lucide-react';
import { api } from './services/api';
import Home from './pages/Home';
import Templates from './pages/Templates';
import TemplateDetails from './pages/TemplateDetails';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import HotelTemplate from './pages/HotelTemplate';
import PhotographyCatalog from './pages/PhotographyCatalog';
import WeddingTemplate from './pages/WeddingTemplate';
import SnapfolioTemplate from './pages/SnapfolioTemplate';
import PhotoTemplate from './pages/PhotoTemplate';
import FineArtTemplate from './pages/FineArtTemplate';
import CinematicWedding from './pages/CinematicWedding';
import KairoPhotography from './pages/KairoPhotography';
import ISteadyGimbal from './pages/ISteadyGimbal';
import DevicePreviewWrapper from './components/DevicePreviewWrapper';
import MegaMenu from './components/MegaMenu';

// Portfolio templates
import ArchitecturePortfolio from './pages/ArchitecturePortfolio';
import PersonalPortfolio from './pages/PersonalPortfolio';
import CreativePortfolio from './pages/CreativePortfolio';
import MinimalPortfolio from './pages/MinimalPortfolio';
import MultipagePortfolio from './pages/MultipagePortfolio';
import AgencyPortfolio from './pages/AgencyPortfolio';
import GradientPortfolio from './pages/GradientPortfolio';
import EditorialPortfolio from './pages/EditorialPortfolio';
import PhotographyPortfolio from './pages/PhotographyPortfolio';
import CreativeMultipagePortfolio from './pages/CreativeMultipagePortfolio';


function Header({ cartCount, user, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/templates?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      margin: 0,
      padding: '16px 40px',
      borderRadius: 0,
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="TechnoSprint Templates Logo" style={{ height: '32px' }} />
        </Link>

        {/* Global Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search templates, e.g. 'SaaS landing page'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '10px 18px',
              width: '320px',
              borderRadius: '99px',
              border: '1px solid #e2e8f0',
              fontSize: '0.85rem',
              outline: 'none',
              background: '#f8fafc'
            }}
          />
          <button type="submit" style={{ display: 'none' }} />
        </form>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div className="nav-item-templates">
          <Link to="/templates" style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: location.pathname === '/templates' ? 'var(--primary-color)' : 'var(--text-muted)',
            borderBottom: location.pathname === '/templates' ? '2px solid var(--primary-color)' : 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '6px 0'
          }}>
            Templates <span style={{ fontSize: '0.75rem' }}>▼</span>
          </Link>
          <MegaMenu />
        </div>
        <Link to="/templates" style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          padding: '6px 0'
        }}>
          Premium
        </Link>
        <Link to="/templates" style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          padding: '6px 0'
        }}>
          Support
        </Link>
        <Link to="/templates" style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          padding: '6px 0'
        }}>
          Contact
        </Link>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Wishlist Heart Icon */}
        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', color: '#64748b', transition: 'var(--transition)' }} title="Wishlist">
          <Heart size={20} />
        </Link>

        {/* Notification Bell Icon */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#64748b', cursor: 'pointer', transition: 'var(--transition)' }} title="Notifications">
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: -2,
            right: -2,
            background: '#ef4444',
            width: 8,
            height: 8,
            borderRadius: '50%',
            border: '1.5px solid #fff'
          }}></span>
        </div>

        {user ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'var(--primary-color)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span>{user.name.split(' ')[0]}</span>
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: 8,
                width: 220,
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                padding: '8px 0',
                zIndex: 100
              }}>
                <div style={{ padding: '8px 16px', borderBottom: '1px solid #e2e8f0', marginBottom: 4 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>{user.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-color)', marginTop: 4 }}>
                    Role: {user.role}
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  onClick={() => setDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    textDecoration: 'none'
                  }}
                >
                  <Layout size={16} /> My Dashboard
                </Link>

                {user.role === 'ADMIN' && (
                  <Link
                    to="/admin"
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 16px',
                      fontSize: '0.85rem',
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                  >
                    <Settings size={16} /> Admin Panel
                  </Link>
                )}

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onLogout();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    color: '#ef4444',
                    background: 'none',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderTop: '1px solid #e2e8f0',
                    marginTop: 4
                  }}
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/auth" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              textDecoration: 'none',
              padding: '8px 14px'
            }}>
              Sign In
            </Link>
            <Link to="/auth" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              background: 'var(--primary-color)',
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)'
            }}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#0f172a',
      color: '#cbd5e1',
      padding: '60px 40px 30px',
      marginTop: 'auto',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{
        maxWidth: 1300,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40,
        marginBottom: 60
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <img src="/logo.jpg" alt="Logo" style={{ height: '35px', borderRadius: '4px' }} />
          </div>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: 20 }}>
            Professional website template marketplace. Modern, responsive, and easy to deploy templates for developers and businesses.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: 16 }}>Template Categories</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
            <li><Link to="/templates?category=admin" style={{ color: '#94a3b8' }}>Admin & Dashboards</Link></li>
            <li><Link to="/templates?category=medical" style={{ color: '#94a3b8' }}>Medical & Health</Link></li>
            <li><Link to="/templates?category=block-magazine" style={{ color: '#94a3b8' }}>Block magazine</Link></li>
            <li><Link to="/templates?category=comming-soon" style={{ color: '#94a3b8' }}>Comming soon</Link></li>
            <li><Link to="/templates?category=travels" style={{ color: '#94a3b8' }}>Travel & Tourism</Link></li>
            <li><Link to="/templates?category=hotel" style={{ color: '#94a3b8' }}>Hotel & Lodging</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: 16 }}>More Categories</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
            <li><Link to="/templates?category=events" style={{ color: '#94a3b8' }}>Events & Conferences</Link></li>
            <li><Link to="/templates/photography" style={{ color: '#94a3b8' }}>Photography Portfolio</Link></li>
            <li><Link to="/templates?category=construction" style={{ color: '#94a3b8' }}>Construction & Real Estate</Link></li>
            <li><Link to="/templates?category=education" style={{ color: '#94a3b8' }}>Education & LMS</Link></li>
            <li><Link to="/templates?category=restaurant" style={{ color: '#94a3b8' }}>Restaurant & Food</Link></li>
            <li><Link to="/templates?category=ecommerce" style={{ color: '#94a3b8' }}>Ecommerce & Retail</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: 16 }}>Platform</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
            <li><Link to="/builder" style={{ color: '#94a3b8' }}>Template Builder</Link></li>
            <li><Link to="/dashboard" style={{ color: '#94a3b8' }}>User Dashboard</Link></li>
            <li><Link to="/auth" style={{ color: '#94a3b8' }}>Create Account</Link></li>
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: 1300,
        margin: '0 auto',
        paddingTop: 30,
        borderTop: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        flexWrap: 'wrap',
        gap: 20,
        fontSize: '0.8rem',
        color: '#94a3b8'
      }}>
        <span>&copy; {new Date().getFullYear()} TechnoSprint Templates. All Rights Reserved.</span>
        <span>Built with React + Spring Boot + MySQL + PHP contact forms.</span>
      </div>
    </footer>
  );
}

function AppRoutes({ user, cart, addToCart, removeFromCart, clearCart, handleLogin, handleLogout }) {
  const location = useLocation();
  const isTemplateRoute = 
    location.pathname === '/hotel-template' ||
    location.pathname.startsWith('/templates/photography/photography-') ||
    location.pathname.startsWith('/templates/portfolio/portfolio-');

  // Full-screen template routes
  if (isTemplateRoute) {
    return (
      <Routes>
        <Route path="/hotel-template" element={<DevicePreviewWrapper><HotelTemplate /></DevicePreviewWrapper>} />

        {/* Photography templates */}
        <Route path="/templates/photography/photography-1" element={<DevicePreviewWrapper><SnapfolioTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-1/index.html" element={<DevicePreviewWrapper><SnapfolioTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-2" element={<DevicePreviewWrapper><PhotoTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-2/index.html" element={<DevicePreviewWrapper><PhotoTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-3" element={<DevicePreviewWrapper><WeddingTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-3/index.html" element={<DevicePreviewWrapper><WeddingTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-4" element={<DevicePreviewWrapper><CinematicWedding /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-4/index.html" element={<DevicePreviewWrapper><CinematicWedding /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-4/:subpage" element={<DevicePreviewWrapper><CinematicWedding /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-5" element={<DevicePreviewWrapper><FineArtTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-5/index.html" element={<DevicePreviewWrapper><FineArtTemplate /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-6" element={<DevicePreviewWrapper><KairoPhotography /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-6/index.html" element={<DevicePreviewWrapper><KairoPhotography /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-7" element={<DevicePreviewWrapper><ISteadyGimbal /></DevicePreviewWrapper>} />
        <Route path="/templates/photography/photography-7/index.html" element={<DevicePreviewWrapper><ISteadyGimbal /></DevicePreviewWrapper>} />

        {/* Portfolio templates */}
        <Route path="/templates/portfolio/portfolio-1" element={<DevicePreviewWrapper><ArchitecturePortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-1/index.html" element={<DevicePreviewWrapper><ArchitecturePortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-2" element={<DevicePreviewWrapper><PersonalPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-2/index.html" element={<DevicePreviewWrapper><PersonalPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-3" element={<DevicePreviewWrapper><CreativePortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-3/index.html" element={<DevicePreviewWrapper><CreativePortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-4" element={<DevicePreviewWrapper><MinimalPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-4/index.html" element={<DevicePreviewWrapper><MinimalPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-5/*" element={<DevicePreviewWrapper><MultipagePortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-6/*" element={<DevicePreviewWrapper><AgencyPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-7" element={<DevicePreviewWrapper><GradientPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-7/index.html" element={<DevicePreviewWrapper><GradientPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-8" element={<DevicePreviewWrapper><EditorialPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-8/index.html" element={<DevicePreviewWrapper><EditorialPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-9/*" element={<DevicePreviewWrapper><PhotographyPortfolio /></DevicePreviewWrapper>} />
        <Route path="/templates/portfolio/portfolio-10/*" element={<DevicePreviewWrapper><CreativeMultipagePortfolio /></DevicePreviewWrapper>} />
      </Routes>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header cartCount={cart.length} user={user} onLogout={handleLogout} />
      
      <main style={{ flex: 1, maxWidth: 1300, width: '100%', margin: '0 auto', padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:categorySlug" element={<Templates />} />
          <Route path="/templates/photography" element={<PhotographyCatalog />} />
          <Route path="/templates/:slug" element={<TemplateDetails addToCart={addToCart} cart={cart} />} />
          <Route path="/dashboard" element={<Dashboard user={user} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/builder" element={<Builder user={user} />} />
          <Route path="/admin" element={<Admin user={user} />} />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

function MainApp() {
  const [user, setUser] = useState(api.getCurrentUser());
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUser(api.getCurrentUser());
    const savedCart = localStorage.getItem('ts_cart');
    if (savedCart) {
      try { setCart(JSON.parse(savedCart)); } catch (e) { setCart([]); }
    }
  }, []);

  const handleLogin = (userInfo) => setUser(userInfo);

  const handleLogout = () => {
    api.logout().then(() => {
      setUser(null);
      window.location.href = '/';
    });
  };

  const addToCart = (template) => {
    if (cart.find(item => item.id === template.id)) { alert('Template is already in your cart!'); return; }
    const updatedCart = [...cart, template];
    setCart(updatedCart);
    localStorage.setItem('ts_cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (templateId) => {
    const updatedCart = cart.filter(item => item.id !== templateId);
    setCart(updatedCart);
    localStorage.setItem('ts_cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('ts_cart');
  };

  return (
    <Router>
      <AppRoutes
        user={user}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
}

export default MainApp;

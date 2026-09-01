import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { ArrowRight, Star, ArrowUpRight, Flame, Shield, Zap, Sparkles } from 'lucide-react';
import TemplateCard from '../components/TemplateCard';

const categoryThemes = {
  travels: {
    accent: '#0284c7',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    cardBorder: 'rgba(2, 132, 199, 0.18)',
    cardHoverBorder: 'rgba(2, 132, 199, 0.45)',
    badgeColor: '#0284c7',
    badgeBg: '#f0f9ff'
  },
  ecommerce: {
    accent: '#ec4899',
    background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
    cardBorder: 'rgba(236, 72, 153, 0.18)',
    cardHoverBorder: 'rgba(236, 72, 153, 0.45)',
    badgeColor: '#ec4899',
    badgeBg: '#fdf2f8'
  },
  medical: {
    accent: '#0d9488',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ccfbf1 100%)',
    cardBorder: 'rgba(13, 148, 136, 0.18)',
    cardHoverBorder: 'rgba(13, 148, 136, 0.45)',
    badgeColor: '#0d9488',
    badgeBg: '#f0fdf4'
  },
  photography: {
    accent: '#8b5cf6',
    background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    cardBorder: 'rgba(139, 92, 246, 0.18)',
    cardHoverBorder: 'rgba(139, 92, 246, 0.45)',
    badgeColor: '#8b5cf6',
    badgeBg: '#faf5ff'
  },
  hotel: {
    accent: '#d97706',
    background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    cardBorder: 'rgba(217, 119, 6, 0.18)',
    cardHoverBorder: 'rgba(217, 119, 6, 0.45)',
    badgeColor: '#d97706',
    badgeBg: '#fffbeb'
  },
  default: {
    accent: '#0066ff',
    background: '#f8fafc',
    cardBorder: '#e2e8f0',
    cardHoverBorder: 'rgba(0, 102, 255, 0.35)',
    badgeColor: '#1d4ed8',
    badgeBg: '#eff6ff'
  }
};

const renderCategoryAnimation = (categorySlug) => {
  if (categorySlug === 'travels') {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden'
      }}>
        {/* Airplane drift */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '-50px',
          animation: 'planeCruise 8s linear infinite',
          fontSize: '24px'
        }}>✈️</div>
        {/* Cloud drift */}
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '110%',
          animation: 'cloudDrift 14s linear infinite',
          opacity: 0.35,
          fontSize: '32px'
        }}>☁️</div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '110%',
          animation: 'cloudDrift 19s linear infinite',
          animationDelay: '-5s',
          opacity: 0.25,
          fontSize: '24px'
        }}>☁️</div>
      </div>
    );
  }
  if (categorySlug === 'ecommerce') {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden'
      }}>
        {/* Floating shopping cart */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '-40px',
          animation: 'cartSlide 6s ease-in-out infinite',
          fontSize: '22px'
        }}>🛒</div>
        {/* Sparkly discounts */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          animation: 'sparkleRotate 3s linear infinite',
          fontSize: '20px'
        }}>🏷️</div>
      </div>
    );
  }
  if (categorySlug === 'medical') {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden'
      }}>
        {/* Pulsing heart */}
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          animation: 'pulseScale 2s ease-in-out infinite',
          fontSize: '24px'
        }}>❤️</div>
        {/* Healthcare cross */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          animation: 'pulseScale 2s ease-in-out infinite',
          animationDelay: '1s',
          fontSize: '22px'
        }}>🏥</div>
      </div>
    );
  }
  if (categorySlug === 'photography') {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden'
      }}>
        {/* Rotating aperture */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          animation: 'rotateAperture 4s linear infinite',
          fontSize: '22px'
        }}>📷</div>
        {/* Flash bulb glow */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '60px',
          height: '60px',
          background: 'rgba(139, 92, 246, 0.08)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          animation: 'flashGlow 4s infinite'
        }} />
      </div>
    );
  }
  return null;
};

export default function Home({ addToCart, cart }) {
  const [templates, setTemplates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    // Load categories
    api.getCategories().then(setCategories).catch(err => console.error(err));
    // Load templates
    api.getTemplates().then(setTemplates).catch(err => console.error(err));
  }, []);

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
  };

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(t => t.category.slug === activeCategory);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: 50,
        padding: '60px 0',
        minHeight: '520px'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: '99px',
            background: 'rgba(0, 102, 255, 0.08)',
            color: 'var(--primary-color)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: 20
          }}>
            <Flame size={14} /> 175+ Premium Templates
          </div>
          <h1 style={{
            fontSize: '3.6rem',
            lineHeight: '1.15',
            fontWeight: 800,
            marginBottom: 20,
            letterSpacing: '-1.5px'
          }}>
            Find the perfect <br />
            template for your <br />
            next <span className="gradient-text">big idea</span>
          </h1>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: 35,
            maxWidth: 480
          }}>
            Premium HTML, CSS, React, and Bootstrap templates crafted for modern businesses, developers, and online creators. Fully responsive and ready to launch.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/templates" className="btn btn-primary">
              Explore Templates <ArrowRight size={18} />
            </Link>
            <Link to="/builder" className="btn btn-secondary">
              Try Template Builder
            </Link>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginTop: 45,
            borderTop: '1px solid #e2e8f0',
            paddingTop: 30
          }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>125k+</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active Developers</p>
            </div>
            <div style={{ width: 1, height: 30, background: '#e2e8f0' }}></div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>4.9/5</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                User Rating <Star size={12} fill="#ffcc00" color="#ffcc00" />
              </p>
            </div>
          </div>
        </div>

        {/* Hero Banner Visual mock */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(255,255,255,0) 70%)',
            zIndex: -1,
            filter: 'blur(20px)'
          }}></div>
          
          <div style={{
            width: '100%',
            maxWidth: '460px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 102, 255, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f1f5f9',
            overflow: 'hidden',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 102, 255, 0.15), 0 4px 10px rgba(0, 0, 0, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ background: '#0f172a', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#eab308' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }}></span>
              <span style={{ color: '#64748b', fontSize: '0.75rem', marginLeft: 10, fontFamily: 'monospace' }}>preview-saas-dashboard.html</span>
            </div>
            <div style={{ padding: 24, background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ width: 120, height: 16, background: '#e2e8f0', borderRadius: 4 }}></div>
                <div style={{ width: 50, height: 16, background: '#0066ff', borderRadius: 4 }}></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 15 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ height: 60, background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 8 }}>
                    <div style={{ width: 25, height: 8, background: '#e2e8f0', marginBottom: 6 }}></div>
                    <div style={{ width: '80%', height: 14, background: '#38bdf8', borderRadius: 2 }}></div>
                  </div>
                  <div style={{ height: 90, background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 8 }}>
                    <div style={{ width: 40, height: 8, background: '#e2e8f0', marginBottom: 6 }}></div>
                    <div style={{ width: '100%', height: 10, background: '#f1f5f9', marginBottom: 4 }}></div>
                    <div style={{ width: '90%', height: 10, background: '#f1f5f9' }}></div>
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 15, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: '40%', height: 10, background: '#64748b', marginBottom: 12 }}></div>
                    <div style={{ width: '90%', height: 24, background: '#0066ff', borderRadius: 4, marginBottom: 10 }}></div>
                    <div style={{ width: '70%', height: 8, background: '#e2e8f0' }}></div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                    <div style={{ width: '50%', height: 30, background: '#f1f5f9', borderRadius: 6 }}></div>
                    <div style={{ width: '50%', height: 30, background: '#0f172a', borderRadius: 6 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories filter bar */}
      <section style={{ margin: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Featured Templates</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Filter through our hand-crafted web templates catalog</p>
          </div>
          <Link to="/templates" style={{
            fontSize: '0.9rem',
            color: 'var(--primary-color)',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}>
            View All <ArrowUpRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 10 }}>
          <button
            onClick={() => handleCategoryClick('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '99px',
              border: activeCategory === 'all' ? '1px solid var(--primary-color)' : '1px solid #e2e8f0',
              background: activeCategory === 'all' ? 'var(--primary-color)' : 'white',
              color: activeCategory === 'all' ? 'white' : 'var(--text-main)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'var(--transition)'
            }}
          >
            All Templates
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              style={{
                padding: '8px 18px',
                borderRadius: '99px',
                border: activeCategory === cat.slug ? '1px solid var(--primary-color)' : '1px solid #e2e8f0',
                background: activeCategory === cat.slug ? 'var(--primary-color)' : 'white',
                color: activeCategory === cat.slug ? 'white' : 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'var(--transition)'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Responsive Template Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '28px',
        margin: '30px auto 60px auto',
        width: '100%'
      }}>
        {filteredTemplates.map(template => (
          <TemplateCard
            key={template.id}
            template={template}
          />
        ))}
      </div>

      {/* Feature list / How it works */}
      <section className="glass-panel" style={{ padding: 50, borderRadius: '24px', margin: '80px 0 60px 0', background: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 10 }}>The TechnoSprint Advantage</h2>
          <p style={{ color: 'var(--text-muted)' }}>Professional, modern website templates tailored for production environments.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 30 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,102,255,0.08)',
              display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--primary-color)',
              margin: '0 auto 15px auto', fontSize: '1.5rem', fontWeight: 'bold'
            }}>
              <Zap size={22} style={{ margin: 'auto' }} />
            </div>
            <h4 style={{ marginBottom: 10 }}>Rapid Launch</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bootstrap pages and themes completely structured and styled. Import, customize, and deploy.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,102,255,0.08)',
              display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--primary-color)',
              margin: '0 auto 15px auto', fontSize: '1.5rem', fontWeight: 'bold'
            }}>
              <Sparkles size={22} style={{ margin: 'auto' }} />
            </div>
            <h4 style={{ marginBottom: 10 }}>Visual Customizer</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Use our interactive online template builder to customize elements and layouts in real-time.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,102,255,0.08)',
              display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--primary-color)',
              margin: '0 auto 15px auto', fontSize: '1.5rem', fontWeight: 'bold'
            }}>
              <Shield size={22} style={{ margin: 'auto' }} />
            </div>
            <h4 style={{ marginBottom: 10 }}>Instant Live Demos</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Experience templates interactively directly inside your browser. No setups required to preview our designs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

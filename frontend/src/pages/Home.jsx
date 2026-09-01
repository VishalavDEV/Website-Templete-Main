import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { ArrowRight, Star, ArrowUpRight, Flame, Shield, Zap, Sparkles } from 'lucide-react';

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

      {/* Vertical Stack of Large Horizontal Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        maxWidth: '1000px',
        margin: '30px auto 60px auto'
      }}>
        {filteredTemplates.map(template => {
          const categorySlug = template.category.slug;
          const theme = categoryThemes[categorySlug] || categoryThemes.default;
          return (
            <div
              key={template.id}
              style={{
                backgroundColor: '#ffffff',
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: '24px',
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
                width: '100%',
                transition: 'all 0.3s ease-in-out',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.cardHoverBorder;
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.cardBorder;
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.03)';
              }}
            >
              {/* Left Section: Responsive Multi-Device CSS Mockup */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/11',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.background,
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #f1f5f9',
                boxSizing: 'border-box',
                padding: '24px'
              }}>
                {/* Category-specific animation overlay */}
                {renderCategoryAnimation(categorySlug)}

                {/* 1. Laptop Mockup Frame */}
                <div style={{
                  position: 'relative',
                  width: '72%',
                  aspectRatio: '16/10',
                  background: '#0f172a',
                  borderRadius: '8px 8px 0 0',
                  border: '4px solid #1e293b',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  zIndex: 1,
                  transform: 'translateX(-8%)',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={template.previewImage} 
                      alt={`${template.name} Desktop Preview`} 
                      style={{ 
                        width: '100%', 
                        height: '112%', 
                        objectFit: 'cover', 
                        objectPosition: 'top',
                        marginTop: '-12%' 
                      }} 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                  {/* Keyboard Base thin border */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#64748b'
                  }} />
                </div>

                {/* 2. Tablet Mockup Frame (overlaid on the right side) */}
                <div style={{
                  position: 'absolute',
                  right: '18%',
                  bottom: '18%',
                  width: '24%',
                  aspectRatio: '3/4',
                  background: '#0f172a',
                  border: '4px solid #0f172a',
                  borderRadius: '10px',
                  boxShadow: '0 15px 25px rgba(0,0,0,0.18)',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxSizing: 'border-box'
                }}>
                  {/* Camera sensor dot */}
                  <div style={{
                    position: 'absolute',
                    top: '3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#334155',
                    zIndex: 10
                  }} />
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <img 
                      src={template.previewImage} 
                      alt={`${template.name} Tablet Preview`} 
                      style={{ 
                        width: '100%', 
                        height: '112%', 
                        objectFit: 'cover', 
                        objectPosition: 'top',
                        marginTop: '-12%' 
                      }} 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                </div>

                {/* 3. Mobile Mockup Frame (overlaid in front) */}
                <div style={{
                  position: 'absolute',
                  right: '6%',
                  bottom: '12%',
                  width: '15%',
                  aspectRatio: '9/19',
                  background: '#090d16',
                  border: '3px solid #090d16',
                  borderRadius: '12px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.22)',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxSizing: 'border-box'
                }}>
                  {/* Speaker pill notch */}
                  <div style={{
                    position: 'absolute',
                    top: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '3px',
                    borderRadius: '99px',
                    background: '#1e293b',
                    zIndex: 10
                  }} />
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <img 
                      src={template.previewImage} 
                      alt={`${template.name} Mobile Preview`} 
                      style={{ 
                        width: '100%', 
                        height: '112%', 
                        objectFit: 'cover', 
                        objectPosition: 'top',
                        marginTop: '-12%' 
                      }} 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Section: Information & Action */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* 1. Small feature/category badges at the top */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '99px',
                    backgroundColor: theme.badgeBg,
                    color: theme.badgeColor,
                    fontSize: '10px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {template.category.name}
                  </span>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '99px',
                    backgroundColor: template.templateType === 'FREE' ? 'rgba(34, 197, 94, 0.08)' : 'rgba(234, 179, 8, 0.08)',
                    color: template.templateType === 'FREE' ? '#22c55e' : '#ca8a04',
                    fontSize: '10px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {template.templateType === 'FREE' ? 'Free' : 'Premium'}
                  </span>
                </div>

                {/* 2. Template Name & details link */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    margin: 0,
                    fontFamily: 'var(--font-title)',
                    lineHeight: '1.25'
                  }}>
                    <Link 
                      to={`/templates/${template.slug}`} 
                      style={{ color: '#0f172a', transition: 'color 0.2s', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = theme.accent}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}
                    >
                      {template.name}
                    </Link>
                  </h3>
                  
                  {/* Updated metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                    <i className="fa-regular fa-clock" style={{ fontSize: '0.85rem' }}></i>
                    <span>Updated recently</span>
                  </div>

                  {/* Display Technologies, Page Count and Features */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    alignItems: 'center',
                    marginTop: '6px',
                    padding: '8px 0',
                    borderTop: '1px solid #f1f5f9',
                    borderBottom: '1px solid #f1f5f9'
                  }}>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      <strong>Pages:</strong> {template.pagesCount || 1}
                    </div>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      <strong>Stack:</strong> {template.bootstrapVersion}
                    </div>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      <strong>Downloads:</strong> {template.downloadsCount}
                    </div>
                  </div>

                  {/* 4. Short Description of the Template */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    margin: '6px 0 0 0',
                    fontWeight: 400
                  }}>
                    {template.description}
                  </p>
                </div>

                {/* 5. Live Demo Button */}
                <div style={{ marginTop: '10px' }}>
                  <a
                    href={template.demoUrl}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '12px 24px',
                      backgroundColor: theme.accent,
                      color: 'white',
                      borderRadius: '99px',
                      border: 'none',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                      boxShadow: `0 4px 12px ${theme.accent}40`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'none';
                    }}
                  >
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                  </a>
                </div>

              </div>
            </div>
          );
        })}
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

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { ArrowRight, Star, Sparkles, Search, Bookmark, X, SlidersHorizontal, ArrowUpRight, Check, Eye } from 'lucide-react';

export default function Home({ addToCart, cart }) {
  const [allTemplates, setAllTemplates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [savedSlugs, setSavedSlugs] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      api.getCategories().catch(() => []),
      api.getTemplates().catch(() => [])
    ]).then(([cats, tpls]) => {
      setCategories(cats);
      setAllTemplates(tpls);
      setLoading(false);
    });
  }, []);

  const toggleSave = (slug, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedSlugs(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  // Category matching helper
  const matchesCategory = (template, targetCat) => {
    if (!targetCat || targetCat === 'all') return true;
    if (!template.category) return false;
    const tSlug = (template.category.slug || '').toLowerCase().trim();
    const tName = (template.category.name || '').toLowerCase().trim();
    const target = targetCat.toLowerCase().trim();

    return tSlug === target || tName === target ||
      ((target === 'coming-soon' || target === 'coming-soon') && (tSlug === 'coming-soon' || tSlug === 'coming-soon')) ||
      ((target === 'business' || target === 'buisness') && (tSlug === 'business' || tSlug === 'buisness')) ||
      ((target === 'corporate' || target === 'cooperate') && (tSlug === 'corporate' || tSlug === 'cooperate')) ||
      ((target === 'blog-magazine' || target === 'block-magazine') && (tSlug === 'blog-magazine' || tSlug === 'block-magazine'));
  };

  // Filter and sort templates for the home page showcase
  const filteredAndSortedTemplates = useMemo(() => {
    let result = [...allTemplates];

    // 1. Category filter
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(t => matchesCategory(t, activeCategory));
    }

    // 2. Search filter (multi-word, partial-word, case-insensitive)
    if (searchQuery && searchQuery.trim()) {
      const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      result = result.filter(t => {
        const searchable = [
          t.name || '',
          t.description || '',
          t.category?.name || '',
          t.category?.slug || '',
          t.bootstrapVersion || '',
          ...(Array.isArray(t.tags) ? t.tags : [])
        ].join(' ').toLowerCase();
        return terms.every(term => searchable.includes(term));
      });
    }

    // 3. Sort
    result.sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.downloadsCount || 0) - (a.downloadsCount || 0);
      } else if (sortBy === 'newest') {
        return (b.id || 0) - (a.id || 0);
      } else if (sortBy === 'name-asc') {
        return (a.name || '').localeCompare(b.name || '');
      } else if (sortBy === 'name-desc') {
        return (b.name || '').localeCompare(a.name || '');
      }
      return 0;
    });

    return result;
  }, [allTemplates, activeCategory, searchQuery, sortBy]);

  // Clean title helper (e.g. "BizConsult — Enterprise Advisory" -> "BizConsult")
  const getShortTitle = (name) => {
    if (!name) return 'Template';
    const clean = name.replace(/^[—\s-]+|[—\s-]+$/g, '');
    const parts = clean.split(/[—|–-]/);
    if (parts.length > 1 && parts[0].trim().length >= 3) {
      return parts[0].trim();
    }
    return name.length > 22 ? name.substring(0, 22) + '...' : name;
  };

  // Rating helper for template cards
  const getRating = (id) => {
    const num = ((id || 1) % 4) * 0.1;
    return (4.7 + num).toFixed(1);
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* ────────────────── 1. Hero Section ────────────────── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        alignItems: 'center',
        gap: 40,
        padding: '50px 0 60px 0',
        minHeight: '520px'
      }}>
        
        {/* Left Column: Hero Copy & Actions */}
        <div>
          {/* Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 14px',
            borderRadius: '99px',
            background: 'rgba(0, 102, 255, 0.08)',
            color: '#0066ff',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: 20,
            border: '1px solid rgba(0, 102, 255, 0.15)'
          }}>
            <Sparkles size={13} /> 175+ Curated Templates
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            lineHeight: '1.14',
            fontWeight: 800,
            marginBottom: 20,
            letterSpacing: '-1.5px',
            color: '#0f172a',
            fontFamily: 'var(--font-title)'
          }}>
            Find the perfect <br />
            template for your <br />
            next <span className="gradient-text">big idea.</span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.96rem',
            lineHeight: '1.65',
            marginBottom: 32,
            maxWidth: 460
          }}>
            Modern HTML, CSS, React, and Bootstrap templates crafted for businesses, developers, and online creators. Fully responsive and ready to launch.
          </p>

          <div style={{ display: 'flex', gap: 14, marginBottom: 42, flexWrap: 'wrap' }}>
            <Link to="/templates" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 26px',
              borderRadius: '8px',
              background: '#0066ff',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(0, 102, 255, 0.28)',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}>
              Explore Templates <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => {
                const el = document.getElementById('featured-templates-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: '8px',
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              Browse Categories
            </button>
          </div>

          {/* 3 Stat Cards Row */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'rgba(0, 102, 255, 0.1)',
                color: '#0066ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>
                ⚡
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>125K+</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>Active Developers</div>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>
                ★
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 4 }}>
                  4.9/5 <Star size={12} fill="#ffcc00" color="#ffcc00" />
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>User Rating</div>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'rgba(139, 92, 246, 0.1)',
                color: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>
                ✦
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Quality Templates</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>Curated & Ready</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Layered 3D Browser Showcase */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 0'
        }}>
          {/* Ambient Blue Radial Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '460px',
            height: '460px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.14) 0%, rgba(255, 255, 255, 0) 70%)',
            zIndex: 0,
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }} />

          {/* Layered Showcase Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            height: '360px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Background Left Card (Dark Agency Layout) */}
            <div style={{
              position: 'absolute',
              left: '0px',
              top: '25px',
              width: '260px',
              height: '300px',
              background: '#090d16',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 35px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              transform: 'rotate(-5deg) scale(0.92)',
              opacity: 0.9,
              zIndex: 1,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: 5, marginBottom: 16 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>Build something amazing</div>
                <p style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>Next-generation agency & portfolio systems built for maximum speed.</p>
              </div>
              <div style={{
                height: '110px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                border: '1px solid rgba(255,255,255,0.06)'
              }} />
            </div>

            {/* Background Right Card (Light SaaS Layout) */}
            <div style={{
              position: 'absolute',
              right: '0px',
              top: '30px',
              width: '260px',
              height: '290px',
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 35px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transform: 'rotate(6deg) scale(0.92)',
              opacity: 0.92,
              zIndex: 1,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: 5, marginBottom: 16 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Grow your business with our solutions</div>
                <p style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.4 }}>Modular SaaS dashboards with analytics and multi-tenant metrics.</p>
              </div>
              <div style={{
                height: '100px',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #f1f5f9'
              }} />
            </div>

            {/* Center Foreground Card: Photography Studio Showcase */}
            <div style={{
              position: 'relative',
              width: '340px',
              height: '330px',
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 25px 50px rgba(0, 102, 255, 0.16), 0 4px 12px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease'
            }}>
              {/* Browser Window Bar */}
              <div style={{
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#eab308' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{
                  marginLeft: 10,
                  fontSize: '0.7rem',
                  color: '#64748b',
                  background: '#ffffff',
                  padding: '2px 10px',
                  borderRadius: '4px',
                  border: '1px solid #e2e8f0',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  snapfolio-minimal.dev
                </span>
              </div>

              {/* Browser Content */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Photo Studio
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 6px 0', lineHeight: 1.25 }}>
                  Capturing Moments, <br />Creating Stories
                </div>
                <p style={{ fontSize: '0.68rem', color: '#64748b', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                  Award-winning visual studio in New York City.
                </p>

                {/* Miniature Gallery Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, flex: 1 }}>
                  <img
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=300&q=80"
                    alt="Gallery item 1"
                    style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                    alt="Gallery item 2"
                    style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80"
                    alt="Gallery item 3"
                    style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ────────────────── 2. Featured Templates Section ────────────────── */}
      <section id="featured-templates-section" style={{ margin: '40px 0 80px 0' }}>
        
        {/* Section Header & Right-Aligned Control Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: '1px solid #e2e8f0'
        }}>
          {/* Title & Subtitle on Left */}
          <div>
            <h2 style={{
              fontSize: '1.9rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: 4,
              letterSpacing: '-0.5px'
            }}>
              Featured Templates
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
              Discover hand-picked templates for your next project
            </p>
          </div>

          {/* Controls Bar on Right (Search, Category, Sort, and Count) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              
              {/* Search Box */}
              <div style={{ position: 'relative', width: '210px' }}>
                <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '8px 28px 8px 34px',
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.82rem',
                    outline: 'none',
                    background: '#ffffff',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94a3b8',
                      padding: 0
                    }}
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Category Dropdown */}
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  background: '#ffffff',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">≡ All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  background: '#ffffff',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">▾ Most Popular</option>
                <option value="newest">▾ Newest Releases</option>
                <option value="name-asc">▾ Name: A to Z</option>
                <option value="name-desc">▾ Name: Z to A</option>
              </select>
            </div>

            {/* Dynamic matching templates count */}
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Showing <strong>{filteredAndSortedTemplates.length}</strong> matching templates
            </span>
          </div>
        </div>

        {/* 5-Column Template Cards Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>Loading templates...</div>
        ) : filteredAndSortedTemplates.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 20,
            marginBottom: 40
          }}>
            {filteredAndSortedTemplates.map(template => {
              const shortTitle = getShortTitle(template.name);
              const rating = getRating(template.id);
              const isSaved = savedSlugs.has(template.slug);
              const categoryName = template.category?.name || 'Template';
              const catSlug = (template.category?.slug || 'agency').toLowerCase();
              let demoUrl = template.demoUrl || `/templates/${catSlug}/${template.slug}/index.html`;
              if (!demoUrl.endsWith('/index.html') && !demoUrl.includes('.html')) {
                demoUrl = demoUrl.endsWith('/') ? `${demoUrl}index.html` : `${demoUrl}/index.html`;
              }

              return (
                <div
                  key={`${template.id}-${template.slug}`}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.25s ease-in-out',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.08)';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.03)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* Thumbnail Image Link */}
                  <a
                    href={demoUrl}
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/10',
                      background: '#0f172a',
                      overflow: 'hidden',
                      display: 'block'
                    }}
                  >
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'transform 0.3s ease'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
                      }}
                    />

                    {/* Bookmark Button overlay */}
                    <button
                      onClick={(e) => toggleSave(template.slug, e)}
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        width: 28,
                        height: 28,
                        borderRadius: '6px',
                        background: isSaved ? '#0066ff' : 'rgba(255, 255, 255, 0.9)',
                        color: isSaved ? '#ffffff' : '#64748b',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        transition: 'all 0.15s'
                      }}
                      title={isSaved ? 'Saved' : 'Save template'}
                    >
                      <Bookmark size={14} fill={isSaved ? 'currentColor' : 'none'} />
                    </button>
                  </a>

                  {/* Card Details */}
                  <div style={{
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                    gap: 12
                  }}>
                    <div>
                      {/* Title Link */}
                      <a
                        href={demoUrl}
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          marginBottom: 4,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                          textDecoration: 'none'
                        }}
                        title={template.name}
                      >
                        {shortTitle}
                      </a>

                      {/* Category & Rating */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        color: '#64748b'
                      }}>
                        <span style={{ fontWeight: 500 }}>{categoryName}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontWeight: 700, color: '#0f172a' }}>
                          <Star size={12} fill="#ffcc00" color="#ffcc00" /> {rating}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                      marginTop: 2
                    }}>
                      <a
                        href={demoUrl}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 4,
                          padding: '7px 10px',
                          borderRadius: '6px',
                          background: '#f1f5f9',
                          color: '#0f172a',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
                      >
                        Preview
                      </a>

                      <a
                        href={demoUrl}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 4,
                          padding: '7px 10px',
                          borderRadius: '6px',
                          background: '#0066ff',
                          color: '#ffffff',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          boxShadow: '0 2px 6px rgba(0, 102, 255, 0.2)',
                          transition: 'all 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#0052cc'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#0066ff'}
                      >
                        Live Demo
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px dashed #cbd5e1',
            margin: '20px 0 40px 0'
          }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
              No templates found
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 16 }}>
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background: '#0066ff',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Templates Centered Button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/templates"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 24px',
              borderRadius: '99px',
              background: '#ffffff',
              color: '#0066ff',
              border: '1px solid #bfdbfe',
              fontSize: '0.86rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 2px 6px rgba(0, 102, 255, 0.06)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eff6ff';
              e.currentTarget.style.borderColor = '#93c5fd';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.borderColor = '#bfdbfe';
            }}
          >
            View All Templates <ArrowRight size={14} />
          </Link>
        </div>

      </section>

    </div>
  );
}

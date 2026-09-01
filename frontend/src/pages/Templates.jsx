import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Search, SlidersHorizontal } from 'lucide-react';

const CATEGORY_META = {
  admin: {
    icon: '📊',
    title: 'Admin Templates',
    subtitle: 'Discover high-performance admin dashboards, dark/light analytical layouts, modular charts, and role-based management portals.'
  },
  medical: {
    icon: '🩺',
    title: 'Medical & Healthcare Templates',
    subtitle: 'Explore clean, clinical healthcare web templates designed for hospitals, clinics, doctor appointments, and medical practices.'
  },
  'block-magazine': {
    icon: '📰',
    title: 'Block Magazine Templates',
    subtitle: 'Discover modern editorial magazine, news portal, tech blog, and multi-category publication layouts.'
  },
  'comming-soon': {
    icon: '⏳',
    title: 'Coming Soon Templates',
    subtitle: 'Explore sleek countdown timers, product launch teasers, newsletter capture, and animated coming soon pages.'
  },
  travels: {
    icon: '✈️',
    title: 'Travel & Tourism Templates',
    subtitle: 'Explore immersive travel agency, tour booking, destination guide, and holiday resort templates with modern interactive maps.'
  },
  hotel: {
    icon: '🏨',
    title: 'Hotel & Lodging Templates',
    subtitle: 'Discover luxury hotel, boutique resort, spa retreat, and hospitality booking templates with responsive booking inquiries.'
  },
  events: {
    icon: '🎟️',
    title: 'Events & Conferences Templates',
    subtitle: 'Explore conference schedules, speaker profiles, ticketing landing pages, and corporate event templates.'
  },
  photography: {
    icon: '📷',
    title: 'Photography Templates',
    subtitle: 'Discover isolated, production-ready, dark minimalist layouts tailored for visual storytellers, freelance portfolios, and photography studios.'
  },
  construction: {
    icon: '🏗️',
    title: 'Construction & Architecture Templates',
    subtitle: 'Explore heavy-duty architectural, civil engineering, contractor, and real estate construction templates.'
  },
  education: {
    icon: '🎓',
    title: 'Education & LMS Templates',
    subtitle: 'Discover online learning platforms, course catalogs, university portals, and academy landing pages.'
  },
  restaurant: {
    icon: '🍽️',
    title: 'Restaurant & Food Templates',
    subtitle: 'Discover mouth-watering restaurant menus, chef showcases, table reservations, and culinary landing pages.'
  },
  ecommerce: {
    icon: '🛍️',
    title: 'Ecommerce & Retail Templates',
    subtitle: 'Explore modern online storefronts, retail catalogs, checkout flows, and product showcase templates.'
  },
  buisness: {
    icon: '💼',
    title: 'Business & Corporate Templates',
    subtitle: 'Explore corporate enterprise, financial advisory, consulting, and business landing pages.'
  },
  agency: {
    icon: '🚀',
    title: 'Agency & Studio Templates',
    subtitle: 'Discover cutting-edge digital agency, creative studio, and marketing portfolio templates with dynamic animations.'
  },
  portfolio: {
    icon: '🎨',
    title: 'Portfolio Templates',
    subtitle: 'Discover personal portfolios, developer showcases, visual designer resumes, and creative project galleries.'
  },
  personal: {
    icon: '👤',
    title: 'Personal & Resume Templates',
    subtitle: 'Discover sleek resume portfolios, personal branding pages, and interactive bio showcases.'
  },
  'real-estate': {
    icon: '🏡',
    title: 'Real Estate Templates',
    subtitle: 'Explore property listings, luxury villa showcases, broker portals, and real estate agency layouts.'
  },
  resume: {
    icon: '📄',
    title: 'Resume & CV Templates',
    subtitle: 'Explore modern curriculum vitae layouts, career milestones, skill bars, and contact cards.'
  },
  transportation: {
    icon: '🚚',
    title: 'Transportation & Logistics Templates',
    subtitle: 'Explore freight forwarding, cargo fleet, logistics management, and delivery service templates.'
  },
  onepage: {
    icon: '📄',
    title: 'One Page Templates',
    subtitle: 'Discover sleek single-page landing layouts, smooth scroll sections, and high-conversion hero blocks.'
  },
  'landing-page': {
    icon: '🎯',
    title: 'Landing Page Templates',
    subtitle: 'Discover high-converting product showcases, app downloads, SaaS marketing, and startup landing pages.'
  },
  cooperate: {
    icon: '🏢',
    title: 'Corporate Templates',
    subtitle: 'Explore enterprise corporate portals, investor relations, consulting firms, and business profiles.'
  },
  all: {
    icon: '📁',
    title: 'Browse Website Templates',
    subtitle: 'Discover modern, responsive layouts for your next business, dashboard or creative project.'
  }
};

export default function Templates() {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  
  // States for filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(categorySlug || searchParams.get('category') || 'all');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCategory(categorySlug || searchParams.get('category') || 'all');
    setSelectedType(searchParams.get('type') || 'all');
  }, [searchParams, categorySlug]);

  useEffect(() => {
    api.getCategories().then(setCategories).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const filterParams = {};
    if (selectedCategory !== 'all') filterParams.category = selectedCategory;
    if (selectedType !== 'all') filterParams.type = selectedType;
    if (searchQuery) filterParams.search = searchQuery;

    api.getTemplates(filterParams)
      .then(setTemplates)
      .catch(err => console.error(err));
  }, [selectedCategory, selectedType, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set('search', e.target.value);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    if (slug !== 'all') {
      navigate(`/templates/${slug}`);
    } else {
      navigate(`/templates`);
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    const params = new URLSearchParams(searchParams);
    if (type !== 'all') {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    setSearchParams(params);
  };

  // Sorting
  const sortedTemplates = [...templates].sort((a, b) => {
    if (sortBy === 'popular') {
      return (b.downloadsCount || 0) - (a.downloadsCount || 0);
    } else if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    return 0;
  });

  const matchedCatObj = categories.find(c => c.slug === selectedCategory);
  const currentCategorySlug = selectedCategory;
  const currentMeta = CATEGORY_META[currentCategorySlug] || {
    icon: '📁',
    title: matchedCatObj ? `${matchedCatObj.name} Templates` : 'Website Templates',
    subtitle: 'Discover modern, production-ready, responsive layouts tailored for modern businesses and creators.'
  };

  const headerBadgeText = selectedCategory === 'all' 
    ? 'All Categories' 
    : `Category: ${matchedCatObj ? matchedCatObj.name : selectedCategory} Templates`;

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', padding: '30px 0', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Uniform Category Header */}
      <div style={{ marginBottom: 35 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '99px',
          backgroundColor: 'rgba(84, 78, 232, 0.08)',
          color: '#544ee8',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '12px',
          letterSpacing: '0.5px'
        }}>
          {currentMeta.icon} {headerBadgeText}
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px', color: '#0f172a' }}>
          {currentMeta.title}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
          {currentMeta.subtitle}
        </p>
      </div>

      <div>
        {/* Controls Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 35,
          background: 'white',
          padding: '16px 24px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            {/* Filter Toggle Button */}
            <button 
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: showFilterPanel ? 'var(--primary-color)' : 'white',
                color: showFilterPanel ? 'white' : 'var(--text-main)',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
              title="Toggle Filters Dropdown"
            >
              <SlidersHorizontal size={20} />
            </button>

            <div style={{ position: 'relative', width: '280px' }}>
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  padding: '10px 16px 10px 42px',
                  width: '100%',
                  borderRadius: '99px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  outline: 'none',
                  background: '#f8fafc'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing <strong>{sortedTemplates.length}</strong> matching templates
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  outline: 'none',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Releases</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Collapsible Dropdown Filter Panel */}
        {showFilterPanel && (
          <div style={{
            padding: '24px',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            marginBottom: 30,
            animation: 'fadeIn 0.2s ease-out',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '3fr 1fr',
              gap: 40,
              flexWrap: 'wrap'
            }}>
              {/* Categories Grid */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 15, color: '#0f172a' }}>Categories</h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: 10
                }}>
                  <button
                    onClick={() => handleCategorySelect('all')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: selectedCategory === 'all' ? '1px solid var(--primary-color)' : '1px solid #e2e8f0',
                      background: selectedCategory === 'all' ? 'var(--primary-color)' : '#f8fafc',
                      color: selectedCategory === 'all' ? 'white' : 'var(--text-main)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s'
                    }}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.slug)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '8px',
                        border: selectedCategory === cat.slug ? '1px solid var(--primary-color)' : '1px solid #e2e8f0',
                        background: selectedCategory === cat.slug ? 'var(--primary-color)' : '#f8fafc',
                        color: selectedCategory === cat.slug ? 'white' : 'var(--text-main)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={cat.name}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* License Settings */}
              <div style={{ borderLeft: '1px solid #f1f5f9', paddingLeft: 30 }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 15, color: '#0f172a' }}>License Type</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', cursor: 'pointer', fontWeight: 500 }}>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'all'}
                      onChange={() => handleTypeSelect('all')}
                      style={{ accentColor: 'var(--primary-color)' }}
                    />
                    All Licenses
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', cursor: 'pointer', fontWeight: 500 }}>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'FREE'}
                      onChange={() => handleTypeSelect('FREE')}
                      style={{ accentColor: 'var(--primary-color)' }}
                    />
                    Free Download
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', cursor: 'pointer', fontWeight: 500 }}>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'PREMIUM'}
                      onChange={() => handleTypeSelect('PREMIUM')}
                      style={{ accentColor: 'var(--primary-color)' }}
                    />
                    Premium Templates
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Uniform Vertical Stack of Template Cards matching Screenshot */}
        {sortedTemplates.length > 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            width: '100%'
          }}>
            {sortedTemplates.map(template => {
              const tags = template.tags || [
                template.category?.name || 'FEATURED',
                'RESPONSIVE LAYOUT',
                template.templateType === 'FREE' ? 'FREE DOWNLOAD' : 'PREMIUM'
              ];

              return (
                <div
                  key={template.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
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
                    e.currentTarget.style.borderColor = 'rgba(84, 78, 232, 0.2)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.03)';
                  }}
                >
                  {/* Left Column: Responsive Multi-Device CSS Mockup */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/11',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8fafc',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #f1f5f9',
                    boxSizing: 'border-box',
                    padding: '24px'
                  }}>
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
                            e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
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
                            e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
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
                            e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Title, Metadata, Description & Pill Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    
                    {/* Badges / Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {tags.map((tag, idx) => (
                        <span key={idx} style={{
                          padding: '4px 10px',
                          borderRadius: '99px',
                          backgroundColor: '#eff6ff',
                          color: '#1d4ed8',
                          fontSize: '10px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>{tag}</span>
                      ))}
                    </div>

                    {/* Typography */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <h3 style={{
                        fontSize: '1.6rem',
                        fontWeight: '800',
                        color: '#0f172a',
                        margin: 0,
                        fontFamily: 'var(--font-title)',
                        lineHeight: '1.25'
                      }}>
                        <a 
                          href={template.demoUrl || `/templates/${template.slug}`} 
                          style={{ color: '#0f172a', transition: 'color 0.2s', textDecoration: 'none' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#0066ff'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}
                        >
                          {template.name}
                        </a>
                      </h3>
                      
                      {/* Updated metadata */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                        <i className="fa-regular fa-clock" style={{ fontSize: '0.85rem' }}></i>
                        <span>Updated recently</span>
                      </div>

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

                    {/* Action Buttons */}
                    <div style={{
                      marginTop: '10px'
                    }}>
                      <a 
                        href={template.demoUrl || `/templates/${template.slug}`} 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '12px 24px',
                          backgroundColor: '#1e40af',
                          color: 'white',
                          borderRadius: '99px',
                          border: 'none',
                          fontWeight: '600',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#1e40af';
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
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'white',
            borderRadius: 16,
            border: '1px dashed #cbd5e1'
          }}>
            <h3 style={{ marginBottom: 10 }}>No Templates Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try modifying your filter settings or search query keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}

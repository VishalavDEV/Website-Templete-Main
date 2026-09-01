import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Search, SlidersHorizontal } from 'lucide-react';
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
    // Sync state if search params or route params change
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCategory(categorySlug || searchParams.get('category') || 'all');
    setSelectedType(searchParams.get('type') || 'all');
  }, [searchParams, categorySlug]);

  useEffect(() => {
    // Fetch categories
    api.getCategories().then(setCategories).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    // Fetch filtered templates
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

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', padding: '30px 0' }}>
      <div style={{ marginBottom: 35 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>Browse Website Templates</h1>
        <p style={{ color: 'var(--text-muted)' }}>Discover modern, responsive layouts for your next business, dashboard or creative project.</p>
      </div>

      <div>
        {/* Controls Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 25,
          background: 'white',
          padding: '16px 24px',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
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
          <div className="glass-panel" style={{
            padding: '24px',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            marginBottom: 30,
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <div className="filter-panel-layout" style={{
              display: 'grid',
              gridTemplateColumns: '3fr 1fr',
              gap: 40,
              flexWrap: 'wrap'
            }}>
              {/* Categories Grid */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 15, color: 'var(--secondary-color)' }}>Categories</h4>
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
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 15, color: 'var(--secondary-color)' }}>License Type</h4>
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

        {/* Modern Responsive Multi-Column Template Grid */}
        {sortedTemplates.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
            width: '100%'
          }}>
            {sortedTemplates.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
              />
            ))}
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

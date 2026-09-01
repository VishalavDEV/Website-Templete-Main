import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Templates() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [templates, setTemplates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  
  // States for filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    // Sync state if search params change
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedType(searchParams.get('type') || 'all');
  }, [searchParams]);

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
    const params = new URLSearchParams(searchParams);
    if (slug !== 'all') {
      params.set('category', slug);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
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

        {/* Grid */}
        {sortedTemplates.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: 24
          }}>
            {sortedTemplates.map(template => (
              <div
                key={template.id}
                className="glass-panel"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'white'
                }}
              >
                <div style={{ position: 'relative', height: 180, overflow: 'hidden', background: '#f1f5f9' }}>
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    padding: '3px 10px',
                    borderRadius: '99px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: template.templateType === 'FREE' ? '#22c55e' : 'var(--primary-color)',
                    color: 'white'
                  }}>
                    {template.templateType === 'FREE' ? 'Free' : `$${template.price.toFixed(2)}`}
                  </span>
                </div>

                <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', marginBottom: 4 }}>
                    {template.category.name}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>
                    <Link to={`/templates/${template.slug}`} style={{ color: 'var(--secondary-color)' }}>
                      {template.name}
                    </Link>
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    flex: 1,
                    marginBottom: 15,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {template.description}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: 12 }}>
                    <span>{template.pagesCount} Pages</span>
                    <span>{(template.downloadsCount / 1000).toFixed(1)}k DLs</span>
                  </div>

                  <Link
                    to={`/templates/${template.slug}`}
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '8px 0', fontSize: '0.8rem', borderRadius: 8 }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
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

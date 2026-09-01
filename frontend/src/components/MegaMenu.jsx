import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Activity, BookOpen, Clock, Plane, Hotel,
  Calendar, Camera, HardHat, GraduationCap, Utensils, ShoppingBag,
  Briefcase, Layers, Sparkles, Building2, Workflow, FolderOpen,
  Home, FileText, Truck, User, ArrowRight, Grid
} from 'lucide-react';

const categories = [
  // Column 1 (8 items)
  [
    { name: 'Admin', slug: 'admin', icon: LayoutDashboard, color: '#3b82f6', bg: '#eff6ff' },
    { name: 'Medical', slug: 'medical', icon: Activity, color: '#0d9488', bg: '#f0fdf4' },
    { name: 'Block Magazine', slug: 'block-magazine', icon: BookOpen, color: '#6366f1', bg: '#eef2ff' },
    { name: 'Coming Soon', slug: 'comming-soon', icon: Clock, color: '#f59e0b', bg: '#fffbeb' },
    { name: 'Travels', slug: 'travels', icon: Plane, color: '#0284c7', bg: '#f0f9ff' },
    { name: 'Hotel', slug: 'hotel', icon: Hotel, color: '#d97706', bg: '#fffbeb' },
    { name: 'Real Estate', slug: 'real-estate', icon: Home, color: '#10b981', bg: '#ecfdf5' },
    { name: 'Personal', slug: 'personal', icon: User, color: '#8b5cf6', bg: '#faf5ff' },
  ],
  // Column 2 (7 items)
  [
    { name: 'Events', slug: 'events', icon: Calendar, color: '#ec4899', bg: '#fdf2f8' },
    { name: 'Photography', slug: 'photography', icon: Camera, color: '#8b5cf6', bg: '#faf5ff' },
    { name: 'Construction', slug: 'construction', icon: HardHat, color: '#ea580c', bg: '#fff7ed' },
    { name: 'Education', slug: 'education', icon: GraduationCap, color: '#2563eb', bg: '#eff6ff' },
    { name: 'Restaurant', slug: 'restaurant', icon: Utensils, color: '#e11d48', bg: '#fff1f2' },
    { name: 'Ecommerce', slug: 'ecommerce', icon: ShoppingBag, color: '#db2777', bg: '#fdf2f8' },
    { name: 'Resume', slug: 'resume', icon: FileText, color: '#059669', bg: '#ecfdf5' },
  ],
  // Column 3 (7 items)
  [
    { name: 'Business', slug: 'buisness', icon: Briefcase, color: '#1e40af', bg: '#eff6ff' },
    { name: 'One Page', slug: 'onepage', icon: Layers, color: '#7c3aed', bg: '#f5f3ff' },
    { name: 'Landing Page', slug: 'landing-page', icon: Sparkles, color: '#d97706', bg: '#fffbeb' },
    { name: 'Corporate', slug: 'cooperate', icon: Building2, color: '#0284c7', bg: '#f0f9ff' },
    { name: 'Agency', slug: 'agency', icon: Workflow, color: '#4f46e5', bg: '#eef2ff' },
    { name: 'Portfolio', slug: 'portfolio', icon: FolderOpen, color: '#e11d48', bg: '#fff1f2' },
    { name: 'Transportation', slug: 'transportation', icon: Truck, color: '#475569', bg: '#f1f5f9' },
  ]
];

export default function MegaMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleCategoryClick = (slug, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClose) onClose();
    navigate(`/templates/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAllClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClose) onClose();
    navigate('/templates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`mega-menu-container ${isOpen ? 'is-open' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Header of Dropdown */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '14px',
        marginBottom: '16px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: 'rgba(0, 102, 255, 0.1)',
            color: '#0066ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Grid size={16} />
          </div>
          <span style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a' }}>
            Explore All 22 Categories
          </span>
        </div>

        <button
          onClick={handleAllClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: 'none',
            color: '#0066ff',
            fontSize: '0.84rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
        >
          View All Templates <ArrowRight size={14} />
        </button>
      </div>

      {/* 3-Column Grid */}
      <div className="mega-menu-grid">
        {categories.map((column, colIdx) => (
          <div key={colIdx} className="mega-menu-column">
            {column.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.slug}
                  onClick={(e) => handleCategoryClick(cat.slug, e)}
                  className="mega-menu-item"
                  type="button"
                >
                  <span className="mega-menu-item-content">
                    <span 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: cat.bg,
                        color: cat.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.15s ease'
                      }}
                      className="menu-icon-box"
                    >
                      <Icon size={18} />
                    </span>
                    <span className="menu-text" style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                      {cat.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Dropdown Bottom Banner */}
      <div style={{
        marginTop: '16px',
        padding: '10px 16px',
        borderRadius: '10px',
        background: '#f8fafc',
        border: '1px solid #f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.78rem',
        color: '#64748b'
      }}>
        <span>⚡ Production-ready layouts with live demo & modern clean code.</span>
        <span style={{ fontWeight: 600, color: '#0066ff' }}>215+ Templates</span>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Activity, BookOpen, Clock, Plane, Hotel,
  Calendar, Camera, HardHat, GraduationCap, Utensils, ShoppingBag,
  Briefcase, Layers, Sparkles, Building2, Workflow, FolderOpen,
  ArrowRight
} from 'lucide-react';

const categories = [
  // Column 1
  [
    { name: 'Admin', slug: 'admin', icon: LayoutDashboard },
    { name: 'Medical', slug: 'medical', icon: Activity },
    { name: 'Block magazine', slug: 'block-magazine', icon: BookOpen },
    { name: 'Comming soon', slug: 'comming-soon', icon: Clock, isSoon: true },
    { name: 'Travels', slug: 'travels', icon: Plane },
    { name: 'Hotel', slug: 'hotel', icon: Hotel },
  ],
  // Column 2
  [
    { name: 'Events', slug: 'events', icon: Calendar },
    { name: 'Photography', slug: 'photography', icon: Camera },
    { name: 'Construction', slug: 'construction', icon: HardHat },
    { name: 'Education', slug: 'education', icon: GraduationCap },
    { name: 'Restaurant', slug: 'restaurant', icon: Utensils },
    { name: 'Ecommerce', slug: 'ecommerce', icon: ShoppingBag },
  ],
  // Column 3
  [
    { name: 'Business', slug: 'buisness', icon: Briefcase }, // mapped to buisness
    { name: 'onepage', slug: 'onepage', icon: Layers },
    { name: 'landing page', slug: 'landing-page', icon: Sparkles },
    { name: 'cooperate', slug: 'cooperate', icon: Building2 },
    { name: 'agency', slug: 'agency', icon: Workflow },
    { name: 'portfolio', slug: 'portfolio', icon: FolderOpen },
  ]
];

export default function MegaMenu({ onClose }) {
  return (
    <div className="mega-menu-container">
      <div className="mega-menu-grid">
        {categories.map((column, colIdx) => (
          <div key={colIdx} className="mega-menu-column">
            {column.map((cat) => {
              const Icon = cat.icon;
              if (cat.isSoon) {
                return (
                  <div key={cat.slug} className="mega-menu-item soon-item">
                    <span className="mega-menu-item-content">
                      <Icon className="menu-icon" size={16} />
                      <span className="menu-text">{cat.name}</span>
                      <span className="soon-badge">SOON</span>
                    </span>
                  </div>
                );
              }
              return (
                <Link
                  key={cat.slug}
                  to={`/templates/${cat.slug}`}
                  onClick={onClose}
                  className="mega-menu-item"
                >
                  <span className="mega-menu-item-content">
                    <ArrowRight className="menu-arrow" size={14} />
                    <Icon className="menu-icon" size={16} />
                    <span className="menu-text">{cat.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

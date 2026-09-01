import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Activity, BookOpen, Clock, Plane, Hotel,
  Calendar, Camera, HardHat, GraduationCap, Utensils, ShoppingBag,
  Briefcase, Layers, Sparkles, Building2, Workflow, FolderOpen,
  Home, FileText, Truck, User
} from 'lucide-react';

const categories = [
  // Column 1 (8 items)
  [
    { name: 'Admin', slug: 'admin', icon: LayoutDashboard },
    { name: 'Medical', slug: 'medical', icon: Activity },
    { name: 'Block Magazine', slug: 'blog-magazine', icon: BookOpen },
    { name: 'Coming Soon', slug: 'coming-soon', icon: Clock },
    { name: 'Travels', slug: 'travels', icon: Plane },
    { name: 'Hotel', slug: 'hotel', icon: Hotel },
    { name: 'Real Estate', slug: 'real-estate', icon: Home },
    { name: 'Personal', slug: 'personal', icon: User },
  ],
  // Column 2 (7 items)
  [
    { name: 'Events', slug: 'events', icon: Calendar },
    { name: 'Photography', slug: 'photography', icon: Camera },
    { name: 'Construction', slug: 'construction', icon: HardHat },
    { name: 'Education', slug: 'education', icon: GraduationCap },
    { name: 'Restaurant', slug: 'restaurant', icon: Utensils },
    { name: 'Ecommerce', slug: 'ecommerce', icon: ShoppingBag },
    { name: 'Resume', slug: 'resume', icon: FileText },
  ],
  // Column 3 (7 items)
  [
    { name: 'Business', slug: 'business', icon: Briefcase },
    { name: 'One Page', slug: 'onepage', icon: Layers },
    { name: 'Landing Page', slug: 'landing-page', icon: Sparkles },
    { name: 'Corporate', slug: 'corporate', icon: Building2 },
    { name: 'Agency', slug: 'agency', icon: Workflow },
    { name: 'Portfolio', slug: 'portfolio', icon: FolderOpen },
    { name: 'Transportation', slug: 'transportation', icon: Truck },
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
              return (
                <Link
                  key={cat.slug}
                  to={`/templates/${cat.slug}`}
                  onClick={onClose}
                  className="mega-menu-item"
                >
                  <span className="mega-menu-item-content">
                    <Icon className="menu-icon" size={17} />
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

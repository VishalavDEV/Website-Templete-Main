import React from 'react';
import { 
  Home, AppWindow, Component, FormInput, Table, BarChart2, Smile, Users, ShieldCheck, FileText, ChevronRight, X 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Sidebar.css';

export const SidebarIconStrip = () => {
  const { activeCategory, navigateTo, sidebarCollapsed, setSidebarCollapsed, mobileMenuOpen, setMobileMenuOpen } = useApp();

  const categories = [
    { id: 'dashboards', label: 'Dashboards', icon: Home, defaultPage: 'overview' },
    { id: 'apps', label: 'Apps', icon: AppWindow, defaultPage: 'chat' },
    { id: 'forms', label: 'Forms', icon: FormInput, defaultPage: 'forms' },
    { id: 'tables', label: 'Tables', icon: Table, defaultPage: 'tables' },
    { id: 'charts', label: 'Charts', icon: BarChart2, defaultPage: 'charts' },
    { id: 'icons', label: 'Icons', icon: Smile, defaultPage: 'icons' },
    { id: 'users', label: 'Users', icon: Users, defaultPage: 'user-list' },
    { id: 'auth', label: 'Auth', icon: ShieldCheck, defaultPage: 'login' },
    { id: 'pages', label: 'Pages', icon: FileText, defaultPage: 'invoice' }
  ];

  return (
    <aside className={`sidebar-icon-strip ${mobileMenuOpen ? 'mobile-visible' : ''}`}>
      <div className="brand-logo" title="TS Smart Admin">
        <div className="logo-badge">TS</div>
      </div>

        <nav className="icon-nav">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`icon-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  navigateTo(cat.id, cat.defaultPage);
                  // On small screens, keep navigation smooth
                }}
                title={cat.label}
              >
                <Icon size={20} />
                <span className="icon-label">{cat.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          className="collapse-toggle-btn"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? "Expand Panel" : "Collapse Panel"}
        >
          <ChevronRight size={18} className={sidebarCollapsed ? '' : 'rotated'} />
        </button>
      </aside>
  );
};

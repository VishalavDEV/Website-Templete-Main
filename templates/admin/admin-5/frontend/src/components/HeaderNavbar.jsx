import React, { useState } from 'react';
import { 
  Sun, Moon, Bell, Search, Plus, User, Settings, LogOut, CheckCheck, Menu, X, CheckSquare, LifeBuoy, Mail,
  Grid, LayoutDashboard, Kanban, MessageSquare, UserCheck, Folder, Calendar
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';
import './Header.css';

export const HeaderNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { 
    notifications, markNotificationRead, clearAllNotifications,
    searchQuery, setSearchQuery, navigateTo, setActiveModal,
    mobileMenuOpen, setMobileMenuOpen, addToast
  } = useApp();

  const [showQuickAccess, setShowQuickAccess] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const quickAccessItems = [
    { label: 'Dashboard', icon: LayoutDashboard, category: 'dashboards', page: 'overview', color: '#6366f1' },
    { label: 'Kanban', icon: Kanban, category: 'apps', page: 'kanban', color: '#10b981' },
    { label: 'Messages', icon: MessageSquare, category: 'apps', page: 'chat', color: '#06b6d4' },
    { label: 'Email', icon: Mail, category: 'apps', page: 'email', color: '#f59e0b' },
    { label: 'Contacts', icon: UserCheck, category: 'apps', page: 'contacts', color: '#ef4444' },
    { label: 'Files', icon: Folder, category: 'apps', page: 'files', color: '#8b5cf6' },
    { label: 'Calendar', icon: Calendar, category: 'apps', page: 'calendar', color: '#ec4899' },
    { label: 'Settings', icon: Settings, category: 'users', page: 'settings', color: '#64748b' }
  ];

  return (
    <header className="header-navbar">
      <div className="header-left">
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Quick Access Grid Menu */}
        <div className="dropdown-wrapper">
          <button 
            className="btn-icon" 
            onClick={() => setShowQuickAccess(!showQuickAccess)}
            title="Quick Access"
          >
            <Grid size={20} />
          </button>

          {showQuickAccess && (
            <div className="dropdown-menu quick-access-grid-menu" style={{ width: 280, padding: 16 }}>
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: 8, marginBottom: 12 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700 }}>Quick Access Shortcuts</h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {quickAccessItems.map((qa, idx) => {
                  const Icon = qa.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        navigateTo(qa.category, qa.page);
                        setShowQuickAccess(false);
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6,
                        padding: 8,
                        borderRadius: 8,
                        background: 'var(--bg-subtle)',
                        fontSize: 11,
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ padding: 6, borderRadius: 6, background: qa.color, color: '#ffffff' }}>
                        <Icon size={16} />
                      </div>
                      <span>{qa.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Global Search Bar */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-shortcut">/</span>
        </div>
      </div>

      <div className="header-right">
        {/* Quick Action Add Dropdown */}
        <div className="dropdown-wrapper">
          <button 
            className="btn btn-primary btn-sm quick-action-btn"
            onClick={() => setShowQuickActions(!showQuickActions)}
          >
            <Plus size={16} />
            <span>Create</span>
          </button>

          {showQuickActions && (
            <div className="dropdown-menu quick-actions-menu">
              <button onClick={() => { setActiveModal('task'); setShowQuickActions(false); }}>
                <CheckSquare size={16} />
                <span>New Task Card</span>
              </button>
              <button onClick={() => { setActiveModal('ticket'); setShowQuickActions(false); }}>
                <LifeBuoy size={16} />
                <span>New Support Ticket</span>
              </button>
              <button onClick={() => { setActiveModal('mail'); setShowQuickActions(false); }}>
                <Mail size={16} />
                <span>Compose Email</span>
              </button>
            </div>
          )}
        </div>

        {/* Dark/Light Theme Switcher Toggle */}
        <button 
          className="btn-icon theme-toggle-btn"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notification Bell Icon & Dropdown */}
        <div className="dropdown-wrapper">
          <button 
            className="btn-icon bell-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-dot">{unreadCount}</span>}
          </button>

          {showNotifications && (
            <div className="dropdown-menu notification-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                {notifications.length > 0 && (
                  <button className="text-btn" onClick={clearAllNotifications}>
                    Clear All
                  </button>
                )}
              </div>
              <div className="notification-list">
                {notifications.length === 0 ? (
                  <div className="empty-notifications" style={{ padding: 16, textAlign: 'center', color: 'var(--text-muted)' }}>No new notifications</div>
                ) : (
                  notifications.map(n => (
                    <div 
                      key={n.id} 
                      className={`notification-item ${!n.read ? 'unread' : ''}`}
                      onClick={() => markNotificationRead(n.id)}
                    >
                      <div className={`notif-indicator ${n.type}`} />
                      <div className="notif-content">
                        <h5>{n.title}</h5>
                        <p>{n.message}</p>
                        <span className="notif-time">{n.time}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div style={{ padding: 10, borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                <button className="text-btn" onClick={() => { navigateTo('users', 'notifications-page'); setShowNotifications(false); }}>
                  View all notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar Menu */}
        <div className="dropdown-wrapper">
          <button 
            className="user-profile-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <img 
              src="/assets/avatar_alex.jpg" 
              alt="Alex Morgan" 
              className="avatar-img"
            />
            <div className="user-info-text">
              <span className="user-name">Alex Morgan</span>
              <span className="user-role">Administrator</span>
            </div>
          </button>

          {showUserMenu && (
            <div className="dropdown-menu user-dropdown">
              <div className="user-dropdown-header">
                <strong>Alex Morgan</strong>
                <p>alex.morgan@tssmartadmin.io</p>
              </div>
              <div className="dropdown-divider" />
              <button onClick={() => { navigateTo('users', 'user-profile'); setShowUserMenu(false); }}>
                <User size={16} />
                <span>My Profile</span>
              </button>
              <button onClick={() => { navigateTo('users', 'settings'); setShowUserMenu(false); }}>
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button onClick={() => { navigateTo('users', 'activity-log'); setShowUserMenu(false); }}>
                <CheckCheck size={16} />
                <span>Activity Log</span>
              </button>
              <div className="dropdown-divider" />
              <button onClick={() => { 
                addToast('Signed out successfully', 'info');
                navigateTo('auth', 'login');
                setShowUserMenu(false); 
              }} className="text-danger">
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

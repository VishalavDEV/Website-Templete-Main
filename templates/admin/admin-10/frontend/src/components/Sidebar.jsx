import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/users', label: 'Users', icon: Users },
  { path: '/products', label: 'Products', icon: ShoppingBag },
  { path: '/orders', label: 'Orders', icon: ShoppingCart },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/messages', label: 'Messages', icon: MessageSquare, badgeKey: 'messages' },
  { path: '/notifications', label: 'Notifications', icon: Bell, badgeKey: 'notifications' },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/settings', label: 'Settings', icon: Settings },
  { path: '/help', label: 'Help & Support', icon: HelpCircle },
];

export default function Sidebar({ isOpen, toggleSidebar, badges = {} }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sidebarVariants = {
    open: { width: 'var(--sidebar-width)', transition: { duration: 0.35, ease: 'easeInOut' } },
    collapsed: { width: 'var(--sidebar-collapsed-width)', transition: { duration: 0.35, ease: 'easeInOut' } }
  };

  return (
    <motion.aside
      className="glass-panel"
      initial={isOpen ? "open" : "collapsed"}
      animate={isOpen ? "open" : "collapsed"}
      variants={sidebarVariants}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        height: '100vh',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid var(--border-color)',
        backgroundColor: 'rgba(250, 247, 239, 0.92)', // --bg-sidebar
      }}
    >
      {/* Sidebar Header / Logo */}
      <div style={{
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isOpen ? 'space-between' : 'center',
        padding: '0 20px',
        borderBottom: '1px solid var(--border-color)',
      }}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#E5A93B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#FAF8F2',
            }}>
              A
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)', letterSpacing: '0.5px' }}>
              AMELIA<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </motion.div>
        )}

        {!isOpen && (
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#E5A93B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#FAF8F2',
            cursor: 'pointer'
          }}>
            A
          </div>
        )}

        {isOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              borderRadius: '6px',
            }}
            className="sidebar-toggle-btn"
          >
            <ChevronLeft size={18} />
          </button>
        )}
      </div>

      {/* Navigation List */}
      <nav style={{ flexGrow: 1, padding: '20px 10px', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto', overflowX: 'hidden' }}>
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const badgeCount = item.badgeKey ? badges[item.badgeKey] : 0;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isOpen ? 'flex-start' : 'center',
                padding: '12px 14px',
                borderRadius: 'var(--border-radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-main)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active / Hover sliding background */}
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'var(--primary)',
                        borderRadius: 'var(--border-radius-sm)',
                        zIndex: -1,
                        opacity: 0.9,
                        boxShadow: '0 4px 10px rgba(240, 211, 107, 0.2)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {!isActive && hoveredIndex === idx && (
                    <motion.div
                      layoutId="hoverIndicator"
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(244, 239, 224, 0.6)',
                        borderRadius: 'var(--border-radius-sm)',
                        zIndex: -2,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', zIndex: 2 }}>
                    <Icon
                      size={20}
                      style={{
                        color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                        strokeWidth: isActive ? 2.2 : 1.8
                      }}
                    />
                  </div>

                  {/* Label */}
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        marginLeft: '14px',
                        fontSize: '0.925rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                        zIndex: 2,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}

                  {/* Badges */}
                  {badgeCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        position: isOpen ? 'absolute' : 'absolute',
                        right: isOpen ? '14px' : '6px',
                        top: isOpen ? '50%' : '6px',
                        transform: isOpen ? 'translateY(-50%)' : 'none',
                        backgroundColor: 'var(--accent)',
                        color: 'var(--text-main)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: '10px',
                        lineHeight: 1,
                        zIndex: 3,
                        boxShadow: '0 2px 5px rgba(229,169,59,0.2)',
                      }}
                    >
                      {badgeCount}
                    </motion.span>
                  )}

                  {/* Collapsed Menu Tooltips */}
                  {!isOpen && hoveredIndex === idx && (
                    <div style={{
                      position: 'absolute',
                      left: '84px',
                      backgroundColor: 'var(--text-main)',
                      color: 'var(--bg-primary)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      pointerEvents: 'none',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                      zIndex: 999,
                    }}>
                      {item.label}
                    </div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div style={{
        padding: '20px',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isOpen ? 'flex-start' : 'center',
      }}>
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            <ChevronRight size={16} />
          </button>
        )}

        {isOpen && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: 'var(--text-main)'
            }}>
              AV
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Amelia Vance</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Platform Admin</span>
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
}

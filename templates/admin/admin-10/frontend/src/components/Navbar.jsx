import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  Search,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';

export default function Navbar({
  toggleSidebar,
  sidebarOpen,
  notificationCount = 0,
  messageCount = 0,
  recentNotifications = [],
  recentConversations = [],
  onMarkNotificationRead,
  onClearNotifications
}) {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) + '  |  ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        webkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Left side: Toggle button and search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexGrow: 1 }}>
        <button
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-primary)',
            transition: 'background-color 0.2s',
          }}
        >
          <Menu size={20} />
        </button>

        {/* Global Search Bar */}
        <div style={{ position: 'relative', width: '280px' }} className="nav-search-container">
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }}
          />
          <input
            type="text"
            placeholder="Search platform settings, users..."
            style={{
              width: '100%',
              padding: '10px 16px 10px 38px',
              border: '1.5px solid var(--border-color)',
              borderRadius: '24px',
              backgroundColor: 'var(--bg-primary)',
              fontSize: '0.85rem',
              outline: 'none',
              transition: 'all 0.3s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.backgroundColor = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-color)';
              e.target.style.backgroundColor = 'var(--bg-primary)';
            }}
          />
        </div>
      </div>

      {/* Right side: Clock, shortcuts, and profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        {/* Current Time Clock (Desktop Only) */}
        <span
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            backgroundColor: 'var(--accent-light)',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
          }}
          className="navbar-clock"
        >
          {formatDateTime(time)}
        </span>

        {/* Message dropdown shortcut */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setShowMessages(!showMessages);
              setShowNotifications(false);
              setShowProfileMenu(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              position: 'relative',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: showMessages ? 'var(--primary)' : 'transparent',
              transition: 'background-color 0.2s',
            }}
          >
            <MessageSquare size={20} />
            {messageCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--text-main)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                }}
              >
                {messageCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {showMessages && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: 'absolute',
                  right: 0,
                  marginTop: '12px',
                  width: '320px',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'white',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '16px',
                  zIndex: 200,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>Recent Messages</h4>
                  <Link to="/messages" onClick={() => setShowMessages(false)} style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
                    View all
                  </Link>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '240px', overflowY: 'auto' }}>
                  {recentConversations.length === 0 ? (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', padding: '15px 0' }}>No active messages</p>
                  ) : (
                    recentConversations.slice(0, 3).map((conv) => (
                      <div
                        key={conv.chatId}
                        onClick={() => {
                          setShowMessages(false);
                          navigate(`/messages?chatId=${conv.chatId}`);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          borderBottom: '1px solid #FAF8F2'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600,
                          fontSize: '0.85rem'
                        }}>
                          {conv.avatar}
                        </div>
                        <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{conv.senderName}</span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{conv.timestamp}</span>
                          </div>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {conv.lastMessage}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notifications dropdown shortcut */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowMessages(false);
              setShowProfileMenu(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              position: 'relative',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: showNotifications ? 'var(--primary)' : 'transparent',
              transition: 'background-color 0.2s',
            }}
          >
            <Bell size={20} />
            {notificationCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--text-main)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                }}
              >
                {notificationCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: 'absolute',
                  right: 0,
                  marginTop: '12px',
                  width: '320px',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'white',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '16px',
                  zIndex: 200,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>Notifications</h4>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {notificationCount > 0 && (
                      <button
                        onClick={onClearNotifications}
                        style={{ background: 'none', border: 'none', fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Clear all
                      </button>
                    )}
                    <Link to="/notifications" onClick={() => setShowNotifications(false)} style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
                      View all
                    </Link>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '240px', overflowY: 'auto' }}>
                  {recentNotifications.length === 0 ? (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', padding: '15px 0' }}>No notifications</p>
                  ) : (
                    recentNotifications.slice(0, 4).map((notif) => (
                      <div
                        key={notif.id}
                        onClick={() => {
                          onMarkNotificationRead(notif.id);
                          setShowNotifications(false);
                          navigate('/notifications');
                        }}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          backgroundColor: notif.read ? 'transparent' : 'var(--accent-light)',
                          borderLeft: notif.read ? '3px solid transparent' : '3px solid var(--accent)',
                          borderBottom: '1px solid #FAF8F2',
                          transition: 'background-color 0.2s',
                        }}
                      >
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '4px', fontWeight: notif.read ? 500 : 600 }}>
                          {notif.message}
                        </p>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{notif.timestamp}</span>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile menu */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
              setShowMessages(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px',
              borderRadius: '24px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '0.82rem',
              color: 'var(--text-main)'
            }}>
              AV
            </div>
            <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
          </button>

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: 'absolute',
                  right: 0,
                  marginTop: '12px',
                  width: '200px',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'white',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '8px',
                  zIndex: 200,
                }}
              >
                <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-color)', marginBottom: '6px' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Amelia Vance</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>amelia@example.com</p>
                </div>
                
                <button
                  onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-primary)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <Settings size={16} />
                  Settings
                </button>

                <button
                  onClick={() => { setShowProfileMenu(false); navigate('/help'); }}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-primary)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <ChevronDown size={16} style={{ transform: 'rotate(90deg)' }} />
                  Help Desk
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

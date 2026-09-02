import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import api from './utils/api';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Help from './pages/Help';

export default function App() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Badge indicators counts
  const [badges, setBadges] = useState({ messages: 0, notifications: 0 });
  const [recentNotifications, setRecentNotifications] = useState([]);
  const [recentConversations, setRecentConversations] = useState([]);

  // Fetch count counts on load and updates
  useEffect(() => {
    if (!showLoader) {
      fetchBadgeCounts();
    }
  }, [showLoader]);

  const fetchBadgeCounts = async () => {
    try {
      // 1. Fetch notifications
      const notifRes = await api.get('/notifications');
      const unreadNotifs = notifRes.data.filter(n => !n.read);
      
      // 2. Fetch conversations
      const convRes = await api.get('/messages/conversations');
      const unreadMsgsCount = convRes.data.reduce((acc, c) => acc + (c.unreadCount || 0), 0);

      setBadges({
        messages: unreadMsgsCount,
        notifications: unreadNotifs.length
      });

      setRecentNotifications(notifRes.data);
      setRecentConversations(convRes.data);
    } catch (err) {
      console.error('Failed to sync badge indicators:', err);
    }
  };

  const handleMarkNotificationRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`);
      fetchBadgeCounts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearNotifications = async () => {
    try {
      await api.delete('/notifications/clear');
      fetchBadgeCounts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {showLoader ? (
          <LoadingScreen key="loader" onFinished={() => setShowLoader(false)} />
        ) : (
          <motion.div
            key="app-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex' }}
          >
            {/* Animated Glow Background Decors */}
            <div className="bg-glow-circle bg-glow-1" />
            <div className="bg-glow-circle bg-glow-2" />

            {/* Sidebar Navigation */}
            <Sidebar
              isOpen={sidebarOpen}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              badges={badges}
            />

            {/* Main Content Area */}
            <div className={`main-content ${sidebarOpen ? '' : 'collapsed'}`}>
              <Navbar
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
                notificationCount={badges.notifications}
                messageCount={badges.messages}
                recentNotifications={recentNotifications}
                recentConversations={recentConversations}
                onMarkNotificationRead={handleMarkNotificationRead}
                onClearNotifications={handleClearNotifications}
              />

              {/* Page body content wrapper */}
              <main className="content-body" style={{ zIndex: 1 }}>
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Dashboard triggerUpdateBadges={fetchBadgeCounts} />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders triggerUpdateBadges={fetchBadgeCounts} />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/messages" element={<Messages triggerUpdateBadges={fetchBadgeCounts} />} />
                    <Route path="/notifications" element={<Notifications triggerUpdateBadges={fetchBadgeCounts} />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/help" element={<Help />} />
                  </Routes>
                </AnimatePresence>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

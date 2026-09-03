import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Cpu, Folder, MapPin, GraduationCap, Trophy, ShieldCheck, 
  FileText, MessageSquare, Globe, Settings, Sparkles, Activity, Code, Star
} from 'lucide-react';

import DesktopIcon from './DesktopIcon';
import ApplicationWindow from './ApplicationWindow';
import AboutApp from './AboutApp';
import SkillsApp from './SkillsApp';
import FileExplorer from './FileExplorer';
import JourneyApp from './JourneyApp';
import EducationApp from './EducationApp';
import AchievementApp from './AchievementApp';
import CertificateViewer from './CertificateViewer';
import ResumeViewer from './ResumeViewer';
import MessengerApp from './MessengerApp';
import MiniBrowser from './MiniBrowser';
import SettingsApp from './SettingsApp';
import EasterEgg from './EasterEgg';

import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Search from './Search';
import Notification from './Notification';

export default function Desktop({ data, theme, accentColor, onThemeChange, onAccentChange, onRestartBoot }) {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [maximizedWindows, setMaximizedWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(100);
  const [windowZIndexes, setWindowZIndexes] = useState({});

  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Default App Definitions
  const apps = [
    { id: 'about', title: 'ABOUT.EXE', icon: <User size={22} color="#2563EB" />, badge: 'PROFILE' },
    { id: 'skills', title: 'SKILLS.EXE', icon: <Cpu size={22} color="#F97316" />, badge: '15+ TECH' },
    { id: 'projects', title: 'PROJECTS.EXE', icon: <Folder size={22} color="#2563EB" />, badge: '12+ PROJ' },
    { id: 'journey', title: 'JOURNEY.APP', icon: <MapPin size={22} color="#10B981" /> },
    { id: 'education', title: 'EDUCATION.APP', icon: <GraduationCap size={22} color="#8B5CF6" /> },
    { id: 'achievements', title: 'ACHIEVEMENTS.APP', icon: <Trophy size={22} color="#F97316" />, badge: '10+ AWARDS' },
    { id: 'certificates', title: 'CERTIFICATES.EXE', icon: <ShieldCheck size={22} color="#10B981" /> },
    { id: 'resume', title: 'RESUME.PDF', icon: <FileText size={22} color="#EF4444" />, badge: 'PDF' },
    { id: 'messenger', title: 'MESSENGER.EXE', icon: <MessageSquare size={22} color="#2563EB" /> },
    { id: 'browser', title: 'MY WEB', icon: <Globe size={22} color="#0EA5E9" /> },
    { id: 'settings', title: 'SETTINGS.EXE', icon: <Settings size={22} color="#64748B" /> },
    { id: 'easteregg', title: 'SECRET.EXE', icon: <Sparkles size={22} color="#F97316" />, badge: 'BONUS' }
  ];

  // Welcome Notification on Boot
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification('System Ready', 'Welcome to VISHAL OS Portfolio v3.0! Double-click icons to explore.');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const addNotification = (title, message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, title, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4500);
  };

  const handleOpenApp = (id) => {
    if (id === 'easteregg') {
      setIsEasterEggOpen(true);
      return;
    }

    const appDef = apps.find(a => a.id === id);
    if (!appDef) return;

    if (!openWindows.some(w => w.id === id)) {
      setOpenWindows(prev => [...prev, appDef]);
    }

    setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    focusWindow(id);
  };

  const focusWindow = (id) => {
    setActiveWindowId(id);
    setWindowZIndexes(prev => ({ ...prev, [id]: nextZIndex + 1 }));
    setNextZIndex(prev => prev + 1);
  };

  const handleCloseWindow = (id) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    setMaximizedWindows(prev => prev.filter(wId => wId !== id));
  };

  const handleMinimizeWindow = (id) => {
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => [...prev, id]);
    }
  };

  const handleMaximizeWindow = (id) => {
    if (maximizedWindows.includes(id)) {
      setMaximizedWindows(prev => prev.filter(wId => wId !== id));
    } else {
      setMaximizedWindows(prev => [...prev, id]);
    }
  };

  const handleTaskbarWindowClick = (id) => {
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => prev.filter(wId => wId !== id));
      focusWindow(id);
    } else if (activeWindowId === id) {
      handleMinimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const renderAppWindowContent = (id) => {
    switch (id) {
      case 'about': return <AboutApp profileData={data.profile} />;
      case 'skills': return <SkillsApp skillsData={data.skills} />;
      case 'projects': return <FileExplorer projectsData={data.projects} />;
      case 'journey': return <JourneyApp journeyData={data.experience} />;
      case 'education': return <EducationApp educationData={data.education} />;
      case 'achievements': return <AchievementApp achievementsData={data.achievements} />;
      case 'certificates': return <CertificateViewer certsData={data.certifications} />;
      case 'resume': return <ResumeViewer profile={data.profile} skills={data.skills} projects={data.projects} experience={data.experience} education={data.education} certs={data.certifications} onClose={() => handleCloseWindow('resume')} />;
      case 'messenger': return <MessengerApp />;
      case 'browser': return <MiniBrowser />;
      case 'settings': return <SettingsApp theme={theme} accentColor={accentColor} onThemeChange={onThemeChange} onAccentChange={onAccentChange} />;
      default: return null;
    }
  };

  return (
    <div className="desktop-container" onClick={() => setIsStartOpen(false)}>
      {/* Background Animated Wallpaper */}
      <div className="os-wallpaper" />

      {/* Floating Particles / Abstract Canvas Glows */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none'
      }} className="pulse-glow" />

      {/* Desktop Widgets Container (Top Right Overlay) */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 5,
        pointerEvents: 'auto'
      }}>
        {/* Profile Status Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card"
          style={{ width: '220px', padding: '14px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Activity size={14} color="#10B981" />
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>STATUS WIDGET</span>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>Vishal Sharma</div>
          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>🟢 Currently Building Ideas</span>
        </motion.div>

        {/* Quick Stats Grid Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
          style={{ width: '220px', padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', textAlign: 'center' }}
        >
          <div style={{ backgroundColor: 'var(--soft-gray)', padding: '8px', borderRadius: '8px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--royal-blue)' }}>12+</div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Projects</div>
          </div>
          <div style={{ backgroundColor: 'var(--soft-gray)', padding: '8px', borderRadius: '8px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--bright-orange)' }}>15+</div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Tech Stack</div>
          </div>
        </motion.div>
      </div>

      {/* Main Desktop Icons Grid Workspace */}
      <div className="desktop-workspace">
        {apps.map(app => (
          <DesktopIcon
            key={app.id}
            id={app.id}
            label={app.title}
            icon={app.icon}
            badge={app.badge}
            onOpen={handleOpenApp}
          />
        ))}
      </div>

      {/* Render Open Application Windows */}
      {openWindows.map(app => (
        <ApplicationWindow
          key={app.id}
          id={app.id}
          title={app.title}
          icon={app.icon}
          isOpen={true}
          isMinimized={minimizedWindows.includes(app.id)}
          isMaximized={maximizedWindows.includes(app.id)}
          zIndex={windowZIndexes[app.id] || 100}
          onFocus={focusWindow}
          onClose={handleCloseWindow}
          onMinimize={handleMinimizeWindow}
          onMaximize={handleMaximizeWindow}
        >
          {renderAppWindowContent(app.id)}
        </ApplicationWindow>
      ))}

      {/* Start Menu Popup */}
      <AnimatePresence>
        {isStartOpen && (
          <StartMenu
            apps={apps}
            onOpenApp={handleOpenApp}
            onClose={() => setIsStartOpen(false)}
            onRestartBoot={onRestartBoot}
          />
        )}
      </AnimatePresence>

      {/* Search System Panel */}
      <Search
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allData={data}
        onSelectResult={(type, item) => {
          if (type === 'projects') handleOpenApp('projects');
          if (type === 'skills') handleOpenApp('skills');
        }}
      />

      {/* Toast Notification System */}
      <Notification
        notifications={notifications}
        onClose={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
      />

      {/* Easter Egg Secret Modal */}
      <AnimatePresence>
        {isEasterEggOpen && (
          <EasterEgg onClose={() => setIsEasterEggOpen(false)} />
        )}
      </AnimatePresence>

      {/* Bottom Taskbar */}
      <Taskbar
        openWindows={openWindows}
        activeWindowId={activeWindowId}
        minimizedWindows={minimizedWindows}
        onWindowClick={handleTaskbarWindowClick}
        onToggleStartMenu={(e) => { e.stopPropagation(); setIsStartOpen(prev => !prev); }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onRestartBoot={onRestartBoot}
      />
    </div>
  );
}

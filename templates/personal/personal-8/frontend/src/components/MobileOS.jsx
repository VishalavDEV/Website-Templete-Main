import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Cpu, Folder, MapPin, GraduationCap, Trophy, ShieldCheck, 
  FileText, MessageSquare, Globe, Settings, Wifi, Battery, ChevronLeft, Sparkles, X
} from 'lucide-react';

import AboutApp from './AboutApp';
import SkillsApp from './SkillsApp';
import FileExplorer from './FileExplorer';
import JourneyApp from './JourneyApp';
import EducationApp from './EducationApp';
import AchievementApp from './AchievementApp';
import CertificateViewer from './CertificateViewer';
import ResumeViewer from './ResumeViewer';
import MessengerApp from './MessengerApp';
import SettingsApp from './SettingsApp';
import MiniBrowser from './MiniBrowser';

export default function MobileOS({ data, theme, accentColor, onThemeChange, onAccentChange, onRestartBoot }) {
  const [activeApp, setActiveApp] = useState(null);

  const apps = [
    { id: 'about', title: 'ABOUT.EXE', icon: <User size={24} color="#2563EB" /> },
    { id: 'skills', title: 'SKILLS.EXE', icon: <Cpu size={24} color="#F97316" /> },
    { id: 'projects', title: 'PROJECTS.EXE', icon: <Folder size={24} color="#2563EB" /> },
    { id: 'journey', title: 'JOURNEY.APP', icon: <MapPin size={24} color="#10B981" /> },
    { id: 'education', title: 'EDUCATION.APP', icon: <GraduationCap size={24} color="#8B5CF6" /> },
    { id: 'achievements', title: 'ACHIEVEMENTS', icon: <Trophy size={24} color="#F97316" /> },
    { id: 'certificates', title: 'CERTIFICATES', icon: <ShieldCheck size={24} color="#10B981" /> },
    { id: 'resume', title: 'RESUME.PDF', icon: <FileText size={24} color="#EF4444" /> },
    { id: 'messenger', title: 'MESSENGER', icon: <MessageSquare size={24} color="#2563EB" /> },
    { id: 'browser', title: 'MY WEB', icon: <Globe size={24} color="#0EA5E9" /> },
    { id: 'settings', title: 'SETTINGS', icon: <Settings size={24} color="#64748B" /> }
  ];

  const renderAppContent = (id) => {
    switch (id) {
      case 'about': return <AboutApp profileData={data.profile} />;
      case 'skills': return <SkillsApp skillsData={data.skills} />;
      case 'projects': return <FileExplorer projectsData={data.projects} />;
      case 'journey': return <JourneyApp journeyData={data.experience} />;
      case 'education': return <EducationApp educationData={data.education} />;
      case 'achievements': return <AchievementApp achievementsData={data.achievements} />;
      case 'certificates': return <CertificateViewer certsData={data.certifications} />;
      case 'resume': return <ResumeViewer profile={data.profile} skills={data.skills} projects={data.projects} experience={data.experience} education={data.education} certs={data.certifications} onClose={() => setActiveApp(null)} />;
      case 'messenger': return <MessengerApp />;
      case 'browser': return <MiniBrowser />;
      case 'settings': return <SettingsApp theme={theme} accentColor={accentColor} onThemeChange={onThemeChange} onAccentChange={onAccentChange} />;
      default: return null;
    }
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-main)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }}>
      {/* Smartphone Top Status Bar */}
      <div style={{
        height: '40px',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '12px',
        fontWeight: 700,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)'
      }}>
        <span>9:41 AM</span>
        <span style={{ color: 'var(--royal-blue)', fontWeight: 800 }}>VISHAL OS MOBILE</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Wifi size={14} />
          <Battery size={16} color="#10B981" />
        </div>
      </div>

      {/* Main Smartphone Home Screen */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {/* Profile Card Banner Widget */}
        <div className="glass-card" style={{ padding: '18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: 'var(--royal-blue)',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            VS
          </div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800 }}>Vishal Sharma</h2>
            <p style={{ fontSize: '12px', color: 'var(--accent-secondary)', fontWeight: 600 }}>
              Full Stack & AI Engineer
            </p>
            <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
              🟢 AVAILABLE FOR NEW IDEAS
            </span>
          </div>
        </div>

        {/* Mobile App Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px 10px'
        }}>
          {apps.map(app => (
            <motion.div
              key={app.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveApp(app.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-glass)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '6px'
              }}>
                {app.icon}
              </div>
              <span style={{ fontSize: '10px', fontWeight: 700, textAlign: 'center' }}>
                {app.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Phone Dock */}
      <div style={{
        height: '70px',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 20px'
      }}>
        <button onClick={() => setActiveApp('messenger')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <MessageSquare size={24} color="#2563EB" />
        </button>
        <button onClick={() => setActiveApp('projects')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <Folder size={24} color="#F97316" />
        </button>
        <button onClick={() => setActiveApp('skills')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <Cpu size={24} color="#10B981" />
        </button>
        <button onClick={() => setActiveApp('resume')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FileText size={24} color="#EF4444" />
        </button>
      </div>

      {/* Full-Screen Mobile App Modal Overlay */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-primary)',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* App Top Header Bar */}
            <div style={{
              height: '50px',
              padding: '0 16px',
              borderBottom: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <button
                onClick={() => setActiveApp(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--royal-blue)',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} /> Back
              </button>

              <span style={{ fontWeight: 800, fontSize: '14px' }}>
                {apps.find(a => a.id === activeApp)?.title}
              </span>

              <button onClick={() => setActiveApp(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            {/* App Scrollable Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
              {renderAppContent(activeApp)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

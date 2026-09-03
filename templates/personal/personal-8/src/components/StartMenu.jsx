import React from 'react';
import { motion } from 'framer-motion';
import { Power, User, Search, Monitor, Shield, Sparkles } from 'lucide-react';

export default function StartMenu({ apps, onOpenApp, onClose, onRestartBoot }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute',
        bottom: '60px',
        left: '12px',
        width: '360px',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-window)',
        zIndex: 9999,
        overflow: 'hidden',
        padding: '20px'
      }}
    >
      {/* User Header Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'var(--royal-blue)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '16px'
        }}>
          VS
        </div>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Vishal Sharma</h3>
          <span style={{ fontSize: '11px', color: 'var(--accent-secondary)', fontWeight: 600 }}>
            Full Stack & AI Engineer
          </span>
        </div>
      </div>

      {/* Applications Grid */}
      <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
        INSTALLED APPLICATIONS
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        maxHeight: '300px',
        overflowY: 'auto'
      }}>
        {apps.map(app => (
          <button
            key={app.id}
            onClick={() => { onOpenApp(app.id); onClose(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid transparent',
              backgroundColor: 'var(--soft-gray)',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s ease'
            }}
          >
            {app.icon}
            <span>{app.title}</span>
          </button>
        ))}
      </div>

      {/* System Power Bar Footer */}
      <div style={{
        marginTop: '16px',
        paddingTop: '14px',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          VISHAL OS v3.0
        </span>

        <button
          onClick={onRestartBoot}
          className="accent-btn"
          style={{ padding: '6px 12px', fontSize: '11px' }}
        >
          <Power size={14} /> Restart OS
        </button>
      </div>
    </motion.div>
  );
}

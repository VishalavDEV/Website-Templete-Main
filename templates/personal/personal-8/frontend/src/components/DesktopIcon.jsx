import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DesktopIcon({ id, label, icon, badge, onOpen }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsSelected(false);
    onOpen(id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        width: '90px',
        height: '96px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.2)' : 'transparent',
        border: isSelected ? '1px solid rgba(37, 99, 235, 0.5)' : '1px solid transparent',
        padding: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative',
        transition: 'background-color 0.15s ease'
      }}
    >
      {/* Icon Container with Glass Glow */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '14px',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 8px 20px rgba(15, 23, 42, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '6px',
        position: 'relative'
      }}>
        {icon}
        {badge && (
          <span style={{
            position: 'absolute',
            top: -4,
            right: -4,
            backgroundColor: '#F97316',
            color: '#FFFFFF',
            fontSize: '9px',
            fontWeight: 800,
            padding: '2px 5px',
            borderRadius: '99px',
            boxShadow: '0 2px 6px rgba(249,115,22,0.4)'
          }}>
            {badge}
          </span>
        )}
      </div>

      {/* Icon Label */}
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        color: 'var(--text-main)',
        textAlign: 'center',
        lineHeight: '1.2',
        textShadow: '0 1px 2px rgba(255,255,255,0.8)',
        maxWidth: '85px',
        wordBreak: 'break-word'
      }}>
        {label}
      </span>
    </motion.div>
  );
}

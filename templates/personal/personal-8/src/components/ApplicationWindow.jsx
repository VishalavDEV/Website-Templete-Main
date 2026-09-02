import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Square, Copy, X } from 'lucide-react';

export default function ApplicationWindow({
  id,
  title,
  icon,
  children,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
  onMaximize
}) {
  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      drag={!isMaximized}
      dragMomentum={false}
      onMouseDown={() => onFocus(id)}
      className="os-window"
      style={{
        zIndex: zIndex,
        top: isMaximized ? '0' : '60px',
        left: isMaximized ? '0' : '120px',
        width: isMaximized ? '100vw' : '820px',
        height: isMaximized ? 'calc(100vh - 54px)' : '580px',
        maxWidth: isMaximized ? '100vw' : '92vw',
        maxHeight: isMaximized ? 'calc(100vh - 54px)' : '85vh',
        borderRadius: isMaximized ? '0px' : '14px',
        transition: 'width 0.25s ease, height 0.25s ease, top 0.25s ease, left 0.25s ease'
      }}
    >
      {/* Window Header */}
      <div className="os-window-header" onDoubleClick={() => onMaximize(id)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="os-window-controls">
            <button className="control-btn btn-close" title="Close Window" onClick={(e) => { e.stopPropagation(); onClose(id); }}>
              <X size={9} color="#7F1D1D" />
            </button>
            <button className="control-btn btn-minimize" title="Minimize Window" onClick={(e) => { e.stopPropagation(); onMinimize(id); }}>
              <Minus size={9} color="#78350F" />
            </button>
            <button className="control-btn btn-maximize" title="Maximize Window" onClick={(e) => { e.stopPropagation(); onMaximize(id); }}>
              {isMaximized ? <Copy size={8} color="#064E3B" /> : <Square size={8} color="#064E3B" />}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
            {icon}
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.3px' }}>
              {title}
            </span>
          </div>
        </div>

        <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          PID: #{id.toUpperCase()}
        </div>
      </div>

      {/* Window Body Content */}
      <div className="os-window-body">
        {children}
      </div>
    </motion.div>
  );
}

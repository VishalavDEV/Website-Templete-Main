import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      id: 'tv',
      name: 'Smart TVs',
      desc: 'Immersive OLED displays',
      path: '/category/tv',
      color: '#00f0ff',
      renderIcon: (hovered) => (
        <svg viewBox="0 0 80 60" style={{ width: '80px', height: '60px' }}>
          <rect x="5" y="5" width="70" height="42" rx="4" fill="#0b1329" stroke={hovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
          <rect x="8" y="8" width="64" height="36" fill={hovered ? 'rgba(0, 240, 255, 0.2)' : 'rgba(0, 240, 255, 0.05)'} style={{ transition: 'all 0.3s' }} />
          <line x1="30" y1="47" x2="50" y2="47" stroke={hovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'} strokeWidth="2" />
          <line x1="40" y1="47" x2="40" y2="55" stroke={hovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'} strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'mobiles',
      name: 'Smartphones',
      desc: 'Next-gen cyber devices',
      path: '/category/mobiles',
      color: '#00f5ff',
      renderIcon: (hovered) => (
        <motion.div
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '50px', height: '80px' }}
        >
          <svg viewBox="0 0 50 80" style={{ width: '100%', height: '100%' }}>
            <rect x="5" y="5" width="40" height="70" rx="6" fill="#0b1329" stroke={hovered ? '#00f5ff' : 'rgba(0, 245, 255, 0.4)'} strokeWidth="2" />
            <circle cx="25" cy="68" r="3" fill={hovered ? '#00f5ff' : 'rgba(0, 245, 255, 0.4)'} />
          </svg>
        </motion.div>
      )
    },
    {
      id: 'laptops',
      name: 'Laptops',
      desc: 'Extreme compute stations',
      path: '/category/laptops',
      color: '#0066ff',
      renderIcon: (hovered) => (
        <svg viewBox="0 0 100 60" style={{ width: '100px', height: '60px' }}>
          {/* Lid opening effect */}
          <motion.path
            d={hovered ? "M 15 40 L 18 5 L 82 5 L 85 40 Z" : "M 15 40 L 25 15 L 75 15 L 85 40 Z"}
            fill="#0b1329"
            stroke={hovered ? '#00f0ff' : 'rgba(0, 102, 255, 0.4)'}
            strokeWidth="2"
            transition={{ duration: 0.3 }}
          />
          <path d="M 5 40 L 95 40 L 90 48 L 10 48 Z" fill="#1e293b" stroke={hovered ? '#00f0ff' : 'rgba(0, 102, 255, 0.4)'} strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'audio',
      name: 'Audio',
      desc: 'Immersive spatial sound',
      path: '/category/audio',
      color: '#00f0ff',
      renderIcon: (hovered) => (
        <div style={{ position: 'relative', width: '80px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {hovered && (
            <motion.div
              style={{
                position: 'absolute',
                border: '2px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                zIndex: 0
              }}
              animate={{ scale: [0.8, 1.4], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeOut' }}
            />
          )}
          <motion.svg
            viewBox="0 0 80 60"
            style={{ width: '80px', height: '60px', zIndex: 1 }}
            animate={{ rotate: hovered ? [0, -10, 10, 0] : 0 }}
            transition={{ repeat: hovered ? Infinity : 0, duration: 0.5 }}
          >
            <path d="M 25 40 A 15 15 0 0 1 55 40" fill="none" stroke={hovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'} strokeWidth="3" />
            <rect x="20" y="32" width="8" height="15" rx="2" fill="#0b1329" stroke="#00f0ff" strokeWidth="1.5" />
            <rect x="52" y="32" width="8" height="15" rx="2" fill="#0b1329" stroke="#00f0ff" strokeWidth="1.5" />
          </motion.svg>
        </div>
      )
    },
    {
      id: 'cameras',
      name: 'Cameras',
      desc: 'Optics and action capture',
      path: '/category/cameras',
      color: '#cbd5e1',
      renderIcon: (hovered) => (
        <svg viewBox="0 0 80 60" style={{ width: '80px', height: '60px' }}>
          <rect x="15" y="15" width="50" height="35" rx="4" fill="#0b1329" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 35 15 L 38 8 L 48 8 L 51 15 Z" fill="#0b1329" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Zoom lens circle */}
          <motion.circle
            cx="40"
            cy="32"
            r="12"
            fill="#1e293b"
            stroke="#00f0ff"
            strokeWidth="2"
            animate={{ scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <circle cx="40" cy="32" r="5" fill="rgba(0, 240, 255, 0.5)" />
        </svg>
      )
    },
    {
      id: 'smart-watches',
      name: 'Wearables',
      desc: 'Biometric telemetry track',
      path: '/category/smart-watches',
      color: '#00f5ff',
      renderIcon: (hovered) => (
        <motion.div
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '60px', height: '60px' }}
        >
          <svg viewBox="0 0 60 60" style={{ width: '100%', height: '100%' }}>
            <rect x="24" y="5" width="12" height="50" rx="3" fill="#0b1329" stroke="rgba(0,245,255,0.4)" />
            <circle cx="30" cy="30" r="16" fill="#1e293b" stroke={hovered ? '#00f5ff' : 'rgba(0, 245, 255, 0.6)'} strokeWidth="2" />
            <circle cx="30" cy="30" r="11" fill="rgba(0, 245, 255, 0.15)" />
            <line x1="30" y1="30" x2="30" y2="22" stroke="#00f5ff" strokeWidth="1.5" />
            <line x1="30" y1="30" x2="36" y2="30" stroke="#00f5ff" strokeWidth="1" />
          </svg>
        </motion.div>
      )
    },
    {
      id: 'gaming',
      name: 'Gaming',
      desc: 'Quantum interactive consoles',
      path: '/category/gaming',
      color: '#00f0ff',
      renderIcon: (hovered) => (
        <svg viewBox="0 0 80 60" style={{ width: '80px', height: '60px' }}>
          <path d="M 15 15 C 30 10, 50 10, 65 15 C 75 25, 70 52, 60 52 C 55 52, 50 42, 40 42 C 30 42, 25 52, 20 52 C 10 52, 5 25, 15 15 Z" fill="#0b1329" stroke={hovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)'} strokeWidth="2" />
          {/* LED lights that pulse on hover */}
          <motion.circle
            cx="40"
            cy="20"
            r={hovered ? 2.5 : 1.5}
            fill="#00f0ff"
            animate={hovered ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.6 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          {/* Left joystick */}
          <circle cx="25" cy="28" r="4.5" fill="#0066ff" />
          {/* Action buttons */}
          <circle cx="55" cy="28" r="4.5" fill="#00f0ff" />
        </svg>
      )
    },
    {
      id: 'appliances',
      name: 'Appliances',
      desc: 'Autonomous home helpers',
      path: '/category/appliances',
      color: '#0066ff',
      renderIcon: (hovered) => (
        <svg viewBox="0 0 80 60" style={{ width: '80px', height: '60px' }}>
          <rect x="22" y="10" width="36" height="42" rx="4" fill="#0b1329" stroke={hovered ? '#00f0ff' : 'rgba(0, 102, 255, 0.4)'} strokeWidth="2" />
          {/* Glowing display indicator */}
          <rect x="28" y="16" width="24" height="8" rx="1" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
          {hovered && (
            <motion.circle
              cx="40"
              cy="20"
              r="2"
              fill="#00f0ff"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
          <circle cx="40" cy="38" r="7" fill="rgba(0, 240, 255, 0.1)" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <h2 className="glow-text-cyan" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-tech)' }}>
        EXPLORE THE BLUE COLLECTION
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {categories.map((cat, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <Link
              key={cat.id}
              to={cat.path}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ textDecoration: 'none' }}
            >
              <div className="glass-panel hologram-effect" style={{
                padding: '30px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                borderColor: isHovered ? cat.color : 'rgba(0, 240, 255, 0.15)',
                boxShadow: isHovered ? `0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 15px ${cat.color}33` : 'none',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Pod light glow on top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  backgroundColor: isHovered ? cat.color : 'rgba(0, 240, 255, 0.2)',
                  boxShadow: isHovered ? `0 0 10px ${cat.color}` : 'none',
                  borderRadius: '0 0 4px 4px',
                  transition: 'all 0.3s'
                }} />

                {/* Pod display icon stand */}
                <div style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  background: 'rgba(3, 7, 18, 0.6)',
                  border: isHovered ? `1px solid ${cat.color}` : '1px solid rgba(0, 240, 255, 0.1)',
                  boxShadow: isHovered ? `inset 0 0 15px ${cat.color}22` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  {cat.renderIcon(isHovered)}
                </div>

                <div>
                  <h3 style={{
                    fontSize: '16px',
                    color: '#fff',
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.05em',
                    textShadow: isHovered ? `0 0 8px ${cat.color}66` : 'none'
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    marginTop: '5px'
                  }}>
                    {cat.desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryShowcase;

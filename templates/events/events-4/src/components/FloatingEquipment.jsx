import React from 'react';

export const DumbbellIcon = ({ size = 60, color = "#FFE600", style }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={style}>
    <path d="M12 20H18V44H12V20Z" fill={color} opacity="0.8" />
    <path d="M6 24H12V40H6V24Z" fill={color} opacity="0.6" />
    <path d="M18 30H46V34H18V30Z" fill={color} />
    <path d="M46 20H52V44H46V20Z" fill={color} opacity="0.8" />
    <path d="M52 24H58V40H52V24Z" fill={color} opacity="0.6" />
  </svg>
);

export const BarbellIcon = ({ size = 120, color = "#8A2BE2", style }) => (
  <svg width={size} height={size / 2} viewBox="0 0 120 40" fill="none" style={style}>
    <rect x="0" y="18" width="120" height="4" fill={color} />
    <rect x="15" y="6" width="6" height="28" fill={color} opacity="0.9" />
    <rect x="23" y="10" width="6" height="20" fill={color} opacity="0.8" />
    <rect x="91" y="10" width="6" height="20" fill={color} opacity="0.8" />
    <rect x="99" y="6" width="6" height="28" fill={color} opacity="0.9" />
  </svg>
);

export const WeightPlateIcon = ({ size = 80, color = "#FFE600", style }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style}>
    <circle cx="40" cy="40" r="38" stroke={color} strokeWidth="4" opacity="0.7" />
    <circle cx="40" cy="40" r="28" stroke={color} strokeWidth="2" opacity="0.5" />
    <circle cx="40" cy="40" r="10" fill={color} opacity="0.9" />
    <circle cx="40" cy="40" r="5" fill="#08080A" />
    <line x1="40" y1="2" x2="40" y2="12" stroke={color} strokeWidth="3" />
    <line x1="40" y1="68" x2="40" y2="78" stroke={color} strokeWidth="3" />
    <line x1="2" y1="40" x2="12" y2="40" stroke={color} strokeWidth="3" />
    <line x1="68" y1="40" x2="78" y2="40" stroke={color} strokeWidth="3" />
  </svg>
);

export const KettlebellIcon = ({ size = 60, color = "#8A2BE2", style }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={style}>
    <path d="M22 12C22 7.58 25.58 4 30 4H34C38.42 4 42 7.58 42 12V20H22V12Z" stroke={color} strokeWidth="4" fill="none" opacity="0.8"/>
    <circle cx="32" cy="38" r="20" fill={color} opacity="0.85" />
    <circle cx="32" cy="38" r="6" fill="#08080A" />
  </svg>
);

const FloatingEquipment = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      <DumbbellIcon size={70} color="#FFE600" style={{ position: 'absolute', top: '15%', left: '4%', opacity: 0.15, animation: 'floatSlow 7s ease-in-out infinite' }} />
      <DumbbellIcon size={50} color="#8A2BE2" style={{ position: 'absolute', top: '65%', right: '5%', opacity: 0.2, animation: 'floatReverse 8s ease-in-out infinite' }} />
      <BarbellIcon size={140} color="#FFE600" style={{ position: 'absolute', top: '45%', left: '-30px', opacity: 0.12, animation: 'moveHorizontal 10s ease-in-out infinite' }} />
      <BarbellIcon size={160} color="#8A2BE2" style={{ position: 'absolute', top: '80%', right: '-40px', opacity: 0.15, animation: 'moveHorizontal 12s ease-in-out infinite' }} />
      <WeightPlateIcon size={100} color="#FFE600" style={{ position: 'absolute', top: '25%', right: '8%', opacity: 0.12, animation: 'rotatePlate 30s linear infinite' }} />
      <WeightPlateIcon size={120} color="#8A2BE2" style={{ position: 'absolute', top: '75%', left: '8%', opacity: 0.15, animation: 'rotatePlate 25s linear infinite' }} />
      <KettlebellIcon size={70} color="#FFE600" style={{ position: 'absolute', top: '85%', left: '45%', opacity: 0.15, animation: 'floatSlow 9s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', left: '20%', width: 8, height: 8, background: '#FFE600', borderRadius: '50%', opacity: 0.4, animation: 'particleFade 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '60%', left: '75%', width: 12, height: 12, background: '#8A2BE2', transform: 'rotate(45deg)', opacity: 0.5, animation: 'particleFade 5s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '10%', right: '30%', width: 6, height: 6, background: '#FFE600', borderRadius: '50%', opacity: 0.6, animation: 'particleFade 3.5s ease-in-out infinite' }} />
    </div>
  );
};

export default FloatingEquipment;

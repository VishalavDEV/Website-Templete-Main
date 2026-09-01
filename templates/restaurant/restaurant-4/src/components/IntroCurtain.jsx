import React, { useEffect, useState } from 'react';

export default function IntroCurtain() {
  const [curtainStyle, setCurtainStyle] = useState({});
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Initial hero & fixed frame state setup
    const heroImg = document.querySelector('.hero-bg-img');
    const heroTitle = document.querySelector('.hero-title');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroDivider = document.querySelector('.hero-divider');
    const heroMeta = document.querySelector('.hero-meta');
    const fixedFrame = document.querySelector('.fixed-frame');

    if (heroImg) heroImg.style.transform = 'scale(1.25)';
    if (heroTitle) {
      heroTitle.style.opacity = '0';
      heroTitle.style.transform = 'scale(0.85) translateY(30px)';
    }
    if (heroTagline) heroTagline.style.opacity = '0';
    if (heroDivider) heroDivider.style.height = '0px';
    if (heroMeta) heroMeta.style.opacity = '0';
    if (fixedFrame) fixedFrame.style.opacity = '0';

    // Step 1: Slide up curtain
    const t1 = setTimeout(() => {
      setCurtainStyle({
        transform: 'translateY(-100%)',
        transition: 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)'
      });
    }, 1000);

    // Step 2: Remove curtain from DOM render
    const t2 = setTimeout(() => {
      setHidden(true);
    }, 2200);

    // Step 3: Reveal hero image & title
    const t3 = setTimeout(() => {
      if (heroImg) {
        heroImg.style.transform = 'scale(1)';
        heroImg.style.filter = 'grayscale(100%) contrast(1.15) brightness(0.45)';
      }
      if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'scale(1) translateY(0)';
        heroTitle.style.transition = 'opacity 1.2s var(--ease-out-expo), transform 1.2s var(--ease-out-expo)';
      }
    }, 1600);

    // Step 4: Fade in tagline, divider, frame
    const t4 = setTimeout(() => {
      if (heroTagline) {
        heroTagline.style.opacity = '1';
        heroTagline.style.transition = 'opacity 0.8s ease';
      }
      if (heroDivider) {
        heroDivider.style.height = '50px';
        heroDivider.style.transition = 'height 0.8s var(--ease-out-expo)';
      }
      if (heroMeta) {
        heroMeta.style.opacity = '1';
        heroMeta.style.transition = 'opacity 0.8s ease';
      }
      if (fixedFrame) {
        fixedFrame.style.opacity = '1';
        fixedFrame.style.transition = 'opacity 0.8s ease';
      }
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="intro-curtain" style={curtainStyle}>
      <div className="curtain-logo">CHENNAI</div>
      <div className="curtain-sub">GARDEN RESTAURANT</div>
    </div>
  );
}

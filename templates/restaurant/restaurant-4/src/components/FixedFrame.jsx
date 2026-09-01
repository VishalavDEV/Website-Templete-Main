import React, { useEffect, useState } from 'react';

export default function FixedFrame() {
  const [liveCounterText, setLiveCounterText] = useState('01 // 12');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
      const totalSections = String(sections.length).padStart(2, '0');
      setLiveCounterText(`01 // ${totalSections}`);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Array.from(sections).indexOf(entry.target) + 1;
              if (index > 0) {
                setLiveCounterText(`${String(index).padStart(2, '0')} // ${totalSections}`);
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((sec) => observer.observe(sec));

      return () => {
        sections.forEach((sec) => observer.unobserve(sec));
      };
    }
  }, []);

  return (
    <div className="fixed-frame">
      <div className="frame-top">
        <a href="#hero" className="brand-logo">CHENNAI</a>
        <div className="nav-controls"></div>
      </div>
      <div className="frame-bottom">
        <div className="hours-tag">
          CHENNAI, INDIA <span>TUE &mdash; SUN / 12:00 &mdash; 23:30</span>
        </div>
        <div className="scroll-counter-wrapper">
          <span className="scroll-indicator">SCROLL</span>
          <span className="section-live-counter" id="live-counter">
            {liveCounterText}
          </span>
        </div>
      </div>
    </div>
  );
}

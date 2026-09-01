import React, { useEffect, useRef } from 'react';

export default function SignatureSection() {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && circleRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Calculate section scroll progress through viewport (0 to 1)
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Subtle controlled rotation: 0° to 25° total across section
        const rotationDegree = clampedProgress * 25;
        circleRef.current.style.transform = `rotate(${rotationDegree.toFixed(2)}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="signature"
      className="signature-section-circular"
      style={{ padding: 'var(--section-gap) var(--site-padding)' }}
    >
      <div className="container">
        <span className="house-meta-tag">SIGNATURE DISH &bull; 2026</span>
        <h2 className="signature-title-main">THE BOTANICAL HEARTH</h2>
        <div className="signature-circle-wrapper" data-cursor="VIEW">
          <img
            src="assets/images/signature.jpg"
            alt="The Botanical Hearth Signature Dish"
            className="signature-circle-photo"
            ref={circleRef}
          />
        </div>
        <div className="signature-details-wrap">
          <div className="signature-ingredients-accent">Charred Roots &bull; Foraged Herbs &bull; Citrus Emulsion</div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-forest)', marginBottom: '1rem' }}>
            &#8377;1,250
          </div>
          <p className="signature-chef-note">
            &ldquo;Our signature dish represents the harmony between earth and ember—slow-cooked roots glazed in garden herbal reduction and finished at table-side.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}


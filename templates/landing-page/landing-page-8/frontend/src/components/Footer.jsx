import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Behance', href: 'https://behance.net' }
  ];

  const footerNav = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Studio', href: '#studio' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      style={{
        backgroundColor: 'var(--text-primary)', // Keeping it black like ContactCTA
        color: 'var(--bg-color)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        {/* Main Row */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingBottom: '5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Logo & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a 
              href="#" 
              style={{
                fontFamily: 'var(--font-headings)',
                fontWeight: 800,
                fontSize: '2rem',
                letterSpacing: '-0.03em',
                color: '#FFFFFF'
              }}
            >
              VANTA<span style={{ color: 'var(--accent-color)' }}>.</span>
            </a>
            <p style={{ color: 'rgba(245, 243, 239, 0.5)', fontSize: '0.9rem', maxWidth: '300px' }}>
              We partner with ambitious companies to build brands people remember.
            </p>
          </div>

          {/* Links columns */}
          <div style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap' }} className="footer-links-container">
            
            {/* Sitemap Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent-color)', textTransform: 'uppercase' }}>EXPLORE</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerNav.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    style={{ fontSize: '0.95rem', color: 'rgba(245, 243, 239, 0.7)' }}
                    onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(245, 243, 239, 0.7)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Socials Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent-color)', textTransform: 'uppercase' }}>CONNECT</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.95rem', color: 'rgba(245, 243, 239, 0.7)' }}
                    onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(245, 243, 239, 0.7)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Row */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.85rem',
            color: 'rgba(245, 243, 239, 0.4)'
          }}
        >
          <span>© {currentYear} Vanta Studio. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-links-container {
            gap: 4rem !important;
            width: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
}

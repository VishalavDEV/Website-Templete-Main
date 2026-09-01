import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer({
  restaurantName = 'Gourmet Bistro',
  tagline = 'Fresh ingredients, delicious meals, and cozy vibes.',
  phone = '+1 (555) 019-2834',
  email = 'info@gourmetbistro.com',
  address = '123 Culinary Ave, Foodville, NY 10001',
  hours = [
    { days: 'Mon - Thu', time: '11:00 AM - 10:00 PM' },
    { days: 'Fri - Sat', time: '11:00 AM - 11:00 PM' },
    { days: 'Sunday', time: '10:00 AM - 9:00 PM' }
  ],
  themeColor = '#0066ff',
  dark = false,
  style = {}
}) {
  const textColor = dark ? '#cbd5e1' : '#475569';
  const headingColor = dark ? '#ffffff' : '#0f172a';
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#e2e8f0';

  return (
    <footer
      style={{
        background: dark ? '#0b0f19' : '#f8fafc',
        color: textColor,
        padding: '60px 40px 30px 40px',
        borderTop: `1px solid ${borderColor}`,
        fontSize: '0.9rem',
        ...style
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}
      >
        {/* Info Column */}
        <div>
          <h3 style={{ color: headingColor, fontSize: '1.4rem', fontWeight: 800, margin: '0 0 12px 0' }}>
            {restaurantName}
          </h3>
          <p style={{ lineHeight: '1.6', marginBottom: '20px', color: dark ? '#94a3b8' : '#64748b' }}>
            {tagline}
          </p>
          <SocialIcons color={dark ? '#94a3b8' : '#475569'} />
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{ color: headingColor, fontSize: '1.05rem', fontWeight: 700, margin: '0 0 16px 0', borderBottom: `2px solid ${themeColor}`, display: 'inline-block', paddingBottom: '4px' }}>
            Contact Us
          </h4>
          <p style={{ margin: '0 0 10px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <strong>Phone:</strong>
            <a href={`tel:${phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{phone}</a>
          </p>
          <p style={{ margin: '0 0 10px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <strong>Email:</strong>
            <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
          </p>
          <p style={{ margin: '0 0 10px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <strong>Address:</strong>
            <span>{address}</span>
          </p>
        </div>

        {/* Hours Column */}
        <div>
          <h4 style={{ color: headingColor, fontSize: '1.05rem', fontWeight: 700, margin: '0 0 16px 0', borderBottom: `2px solid ${themeColor}`, display: 'inline-block', paddingBottom: '4px' }}>
            Opening Hours
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {hours.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <span style={{ fontWeight: 600 }}>{item.days}:</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '20px',
          borderTop: `1px solid ${borderColor}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          fontSize: '0.8rem',
          color: dark ? '#64748b' : '#94a3b8'
        }}
      >
        <span>&copy; {new Date().getFullYear()} {restaurantName}. All Rights Reserved.</span>
        <span>Built for the Restaurant Module.</span>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';

const faqItems = [
  {
    q: 'Who can participate in Iron Ascent 2026?',
    a: 'Iron Ascent is open to fitness enthusiasts, amateur athletes, powerlifters, bodybuilders, and anyone aged 16+ who wants to test their physical boundaries.'
  },
  {
    q: 'Is prior fitness experience required?',
    a: 'Not necessarily! We offer categories ranging from ROOKIE RISE (beginner-friendly) to ATHLETE ASCENT (pro performance level).'
  },
  {
    q: 'What should I bring on event day?',
    a: 'Bring your official registration digital ticket, valid government ID proof, proper athletic footwear, gym attire, personal lifting belt/straps, and a reusable water bottle.'
  },
  {
    q: 'Is there an age limit?',
    a: 'The minimum age for participation is 16 years (with parental consent for under-18s). There is no upper age limit as long as you are medically fit.'
  },
  {
    q: 'Can beginners participate?',
    a: 'Yes! The Rookie Rise category is specifically structured for beginners to experience competitive fitness challenges safely under expert supervision.'
  },
  {
    q: 'What does the registration fee include?',
    a: 'Registration includes official athlete entry, event T-shirt, finisher digital certificate, refreshment kit, live leaderboard entry, and medical support on site.'
  },
  {
    q: 'Can I cancel or transfer my registration?',
    a: 'Registrations are non-refundable, but ticket transfers to another participant are permitted up to 7 days prior to event date through our support team.'
  },
  {
    q: 'Is personal training available at Vortex Forge Gym?',
    a: 'Yes! We offer 1-on-1 personal coaching with certified strength coaches and bodybuilding specialists tailored to your specific fitness goals.'
  },
  {
    q: 'What are the gym operating hours?',
    a: 'Mon – Fri: 5:00 AM – 11:00 PM | Saturday: 6:00 AM – 10:00 PM | Sunday: 7:00 AM – 8:00 PM.'
  },
  {
    q: 'Do you provide personalized nutrition plans?',
    a: 'Yes, our certified sports nutritionists construct custom meal plans for fat loss, hypertrophy, contest prep, and endurance performance.'
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
      {faqItems.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: 'var(--color-bg-card)',
              border: `1px solid ${isOpen ? 'var(--color-yellow)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => toggleIndex(idx)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                background: 'none',
                border: 'none',
                color: isOpen ? 'var(--color-yellow)' : '#FFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1.05rem',
                fontWeight: '700',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                letterSpacing: '0.5px'
              }}
            >
              <span>{item.q}</span>
              <span style={{
                fontSize: '1.4rem',
                color: 'var(--color-yellow)',
                transform: isOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.3s'
              }}>
                +
              </span>
            </button>

            {isOpen && (
              <div style={{
                padding: '0 1.5rem 1.25rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '1rem'
              }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;

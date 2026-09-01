import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

const FAQAccordion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const faqItems = [
    {
      q: 'Who can participate?',
      a: 'NEXORA AFTERDARK is open to all university and college students enrolled in technology, engineering, data science, design, cybersecurity, robotics, or related disciplines.'
    },
    {
      q: 'What is the team size?',
      a: 'Teams must consist of 2 to 4 members. You can register as an existing team or join solo and find teammates during the Team Formation Mixer.'
    },
    {
      q: 'Can beginners participate?',
      a: 'Yes! We encourage beginners. Mentors and technical workshops will be available throughout the night to guide you through project development.'
    },
    {
      q: 'What should I bring?',
      a: 'Bring your laptop, charger, extension cord, college ID card, personal water bottle, and any hardware components (microcontrollers, sensors) needed for your hack.'
    },
    {
      q: 'Will food and drinks be provided?',
      a: 'Yes, 100% free! We provide dinner, midnight hot pizza, midnight coffee/energy drink station, breakfast, and lunch, plus continuous snacks.'
    },
    {
      q: 'Is high-speed Wi-Fi available?',
      a: 'Yes, Nexora Innovation Lab is equipped with dedicated gigabit Wi-Fi and ethernet ports for all 500+ hacker workstations.'
    },
    {
      q: 'Are sleeping areas available?',
      a: 'Yes, designated quiet resting zones equipped with beanbags, sleeping mats, and charging docks are available for hackers needing power naps.'
    },
    {
      q: 'Can we use AI tools like ChatGPT or Copilot?',
      a: 'Yes! AI tools and LLMs are permitted. However, your project must demonstrate original engineering, custom prompts/APIs, and clean architecture.'
    },
    {
      q: 'Can we use existing code?',
      a: 'You may use open-source libraries, frameworks, and APIs. However, all core application code, features, and commits must be written during the 24-hour event.'
    },
    {
      q: 'What technologies can we use?',
      a: 'Any tech stack! React, Python, Flutter, Rust, C++, PyTorch, Solidity, Node.js, WebAssembly, Docker, Arduino, ROS, or any tech of your choice.'
    },
    {
      q: 'What are the judging criteria?',
      a: 'Projects are evaluated on: Technical Complexity (30%), Originality & Innovation (25%), Practical Impact (25%), and Pitch & UI/UX Demo (20%).'
    },
    {
      q: 'How do I submit my project?',
      a: 'Submissions are completed via the Nexora Hacker Portal. You will submit your GitHub repo link, 2-minute demo video link, and architecture slides before 14:00.'
    },
    {
      q: 'What happens if I miss the submission deadline?',
      a: 'Late submissions will not be evaluated for main cash prizes. Make sure to lock your commits and record demo videos at least 30 minutes before 14:00.'
    },
    {
      q: 'How are prizes distributed?',
      a: 'Cash prizes are transferred directly to team bank accounts within 5 business days after the event. Physical trophies and swag are awarded on stage.'
    }
  ];

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
        <Search size={18} color="#00ff66" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search FAQ questions (e.g. food, Wi-Fi, AI tools)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="cyber-input"
          style={{ paddingLeft: '2.75rem' }}
        />
      </div>

      {/* Accordion Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '850px', margin: '0 auto' }}>
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '0',
                backgroundColor: 'rgba(10, 16, 12, 0.85)',
                border: `1px solid ${isOpen ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`,
                transition: 'all 0.25s ease'
              }}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <HelpCircle size={18} color="#00ff66" />
                  <span>{faq.q}</span>
                </div>
                <ChevronDown
                  size={18}
                  color="#00ff66"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease'
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 1.5rem 1.25rem 3.25rem',
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '1rem'
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;

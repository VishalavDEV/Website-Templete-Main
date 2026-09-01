import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import MentorCard from '../components/MentorCard';
import { Search } from 'lucide-react';

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('ALL');

  const mentorsList = [
    {
      id: 1,
      name: 'Dr. Aris Thorne',
      title: 'Principal AI Scientist',
      company: 'Nexora AI Labs',
      initials: 'AT',
      expertise: ['AI/ML', 'LLMs', 'PyTorch'],
      experience: '12+ Yrs Exp',
      availableTime: '20:00 - 04:00'
    },
    {
      id: 2,
      name: 'Maya Lin',
      title: 'Head of Cybersecurity',
      company: 'ZeroTrust Security',
      initials: 'ML',
      expertise: ['Cybersecurity', 'Rust', 'PenTesting'],
      experience: '9+ Yrs Exp',
      availableTime: '22:00 - 06:00'
    },
    {
      id: 3,
      name: 'Vikram Sethi',
      title: 'VP of Engineering',
      company: 'CloudGrid Systems',
      initials: 'VS',
      expertise: ['Cloud Computing', 'DevOps', 'Kubernetes'],
      experience: '14+ Yrs Exp',
      availableTime: '00:00 - 08:00'
    },
    {
      id: 4,
      name: 'Elena Rostova',
      title: 'Lead Product Designer',
      company: 'Aura Studio',
      initials: 'ER',
      expertise: ['Product Design', 'UI/UX', 'Figma'],
      experience: '8+ Yrs Exp',
      availableTime: '21:00 - 05:00'
    },
    {
      id: 5,
      name: 'Karan Malhotra',
      title: 'Startup Incubator Partner',
      company: 'VentureX Capital',
      initials: 'KM',
      expertise: ['Startup', 'Pitching', 'FinTech'],
      experience: '11+ Yrs Exp',
      availableTime: '23:00 - 07:00'
    },
    {
      id: 6,
      name: 'Sophia Chen',
      title: 'Staff Web Architect',
      company: 'Vercel Ecosystems',
      initials: 'SC',
      expertise: ['Web Development', 'React', 'TypeScript'],
      experience: '10+ Yrs Exp',
      availableTime: '19:00 - 03:00'
    },
    {
      id: 7,
      name: 'David Miller',
      title: 'Mobile Systems Lead',
      company: 'Flutter Core',
      initials: 'DM',
      expertise: ['Mobile Development', 'Flutter', 'iOS'],
      experience: '7+ Yrs Exp',
      availableTime: '01:00 - 09:00'
    },
    {
      id: 8,
      name: 'Rajesh Nair',
      title: 'Robotics & Embedded Lead',
      company: 'RoboTech Labs',
      initials: 'RN',
      expertise: ['Robotics', 'C++', 'IoT'],
      experience: '13+ Yrs Exp',
      availableTime: '20:00 - 04:00'
    }
  ];

  const expertiseOptions = [
    'ALL',
    'AI/ML',
    'Cloud Computing',
    'Cybersecurity',
    'Product Design',
    'Startup',
    'Web Development',
    'Mobile Development',
    'Robotics'
  ];

  const filteredMentors = mentorsList.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExpertise = selectedExpertise === 'ALL' || m.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● 1-ON-1 GUIDANCE</div>
          <GlitchText text="EVENT MENTORS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Meet our roster of 30+ industry architects, engineers, designers, and VCs guiding teams through the night.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Search & Filter */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              <Search size={18} color="#00ff66" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search mentors by name, company, or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="cyber-input"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {expertiseOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedExpertise(opt)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    backgroundColor: selectedExpertise === opt ? '#00ff66' : 'rgba(10, 16, 12, 0.8)',
                    color: selectedExpertise === opt ? '#000' : '#cbd5e1',
                    border: `1px solid ${selectedExpertise === opt ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;

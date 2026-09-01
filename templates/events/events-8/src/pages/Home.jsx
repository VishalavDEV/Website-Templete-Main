import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import GlitchText from '../components/GlitchText';
import Countdown from '../components/Countdown';
import Stats from '../components/Stats';
import ScheduleTimeline from '../components/ScheduleTimeline';
import ChallengeCard from '../components/ChallengeCard';
import MentorCard from '../components/MentorCard';
import PrizeCard from '../components/PrizeCard';
import SponsorGrid from '../components/SponsorGrid';
import FAQAccordion from '../components/FAQAccordion';
import FoodTimeline from '../components/FoodTimeline';
import LeaderboardTable from '../components/LeaderboardTable';
import WorkshopCard from '../components/WorkshopCard';

import {
  MapPin, Calendar, Users, Zap, Terminal, ArrowRight, Shield, Cpu, Code,
  Flame, Globe, Sparkles, Award, Utensils, Compass, CheckCircle2, Navigation, Wifi, Car
} from 'lucide-react';

const Home = () => {
  const sampleChallenges = [
    {
      id: 1,
      title: 'Autonomous LLM Agent Workflows',
      category: 'AI & MACHINE LEARNING',
      difficulty: 'HARD',
      prize: '₹75,000',
      participants: 34,
      description: 'Build multi-agent decision pipelines for complex enterprise operations using open-source models.',
      tags: ['PyTorch', 'LangChain', 'Python', 'VectorDB']
    },
    {
      id: 2,
      title: 'Zero-Trust Cyber Authentication',
      category: 'CYBERSECURITY',
      difficulty: 'HARD',
      prize: '₹60,000',
      participants: 28,
      description: 'Develop biometric or cryptographic zero-knowledge proof auth systems for web applications.',
      tags: ['Rust', 'ZK-Proofs', 'WebAssembly', 'Crypto']
    },
    {
      id: 3,
      title: 'Decentralized Micro-Payments',
      category: 'FINTECH',
      difficulty: 'MEDIUM',
      prize: '₹50,000',
      participants: 41,
      description: 'Create ultra-fast sub-cent payment routing APIs for real-time digital creator subscriptions.',
      tags: ['Node.js', 'Solana', 'React', 'Web3']
    }
  ];

  const sampleMentors = [
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
      expertise: ['Cloud', 'DevOps', 'Kubernetes'],
      experience: '14+ Yrs Exp',
      availableTime: '00:00 - 08:00'
    }
  ];

  const sampleWorkshops = [
    {
      id: 1,
      title: 'AI Crash Course: Fine-tuning Open Models',
      time: '01:30 - 02:30',
      duration: '60 Mins',
      level: 'INTERMEDIATE',
      speaker: 'Dr. Aris Thorne',
      role: 'Principal AI Scientist, Nexora AI',
      description: 'Hands-on session on fine-tuning open-source LLMs using LoRA adapters and GPU acceleration.'
    },
    {
      id: 2,
      title: 'Build High-Performance Apps with React',
      time: '21:30 - 22:30',
      duration: '60 Mins',
      level: 'BEGINNER / INT',
      speaker: 'Sophia Chen',
      role: 'Staff Web Architect, Vercel',
      description: 'Master state optimization, custom hooks, WebSockets, and modern UI component architectures.'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'calc(var(--nav-height) + 2rem)',
          paddingBottom: '4rem',
          overflow: 'hidden'
        }}
      >
        <HeroVideo />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="badge-tag float-anim">
            <Terminal size={14} /> 24-HOUR OVERNIGHT STUDENT HACKATHON
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <GlitchText
              text="NEXORA"
              tag="h1"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '1' }}
            />
            <br />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.8rem, 5vw, 3.8rem)',
                fontWeight: '900',
                color: '#00ff66',
                letterSpacing: '6px',
                textShadow: '0 0 20px #00ff66'
              }}
            >
              AFTERDARK
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '2px'
            }}
          >
            “24 HOURS. ONE NIGHT. INFINITE POSSIBILITIES.”
          </h2>

          <p
            style={{
              maxWidth: '750px',
              margin: '0 auto 2.5rem auto',
              color: '#cbd5e1',
              fontSize: '1.05rem',
              lineHeight: '1.7'
            }}
          >
            A high-energy overnight hackathon where student developers, designers, innovators, and problem-solvers come together to build the future inside a crowded futuristic computer laboratory.
          </p>

          {/* Action Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}
          >
            <Link to="/register" className="btn btn-primary interactive pulse-glow" style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}>
              <Zap size={18} /> REGISTER YOUR TEAM
            </Link>
            <Link to="/about" className="btn btn-outline interactive" style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}>
              EXPLORE HACKATHON <ArrowRight size={18} />
            </Link>
          </div>

          {/* Event Info Bar */}
          <div
            style={{
              display: 'inline-flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              backgroundColor: 'rgba(10, 16, 12, 0.85)',
              border: '1px solid rgba(0, 255, 102, 0.3)',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0, 255, 102, 0.2)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: '#ffffff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="#00ff66" />
              <span>18–19 OCT 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="#00ff66" />
              <span>NEXORA INNOVATION LAB</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={16} color="#00ff66" />
              <span>CHENNAI, INDIA</span>
            </div>
          </div>

          {/* Countdown Component */}
          <Countdown />
        </div>
      </section>

      {/* 2. EVENT STATS SECTION */}
      <section className="section-padding cyber-grid-bg" style={{ position: 'relative' }}>
        <div className="container">
          <Stats />
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● OVERNIGHT EXPERIENCE</div>
            <h2 className="section-title text-gradient">WHERE IDEAS STAY AWAKE ALL NIGHT</h2>
            <p className="section-subtitle">
              NEXORA AFTERDARK is crafted for student hackers who thrive when the rest of the world is asleep.
            </p>
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="cyber-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem' }}>INTENSE OVERNIGHT CODING ATMOSPHERE</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Picture 500+ students inside a crowded high-tech computer laboratory at midnight. Glowing monitors, mechanical keyboards clicking, mentors guiding teams, unlimited hot espresso, and retro synthwave music playing in the background.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#00ff66' }}>
                <div>✔ 24 Hours of Non-stop Rapid Prototyping</div>
                <div>✔ 1-on-1 Guidance from 30+ Industry Tech Leaders</div>
                <div>✔ Free Gourmet Food, Midnight Pizza & Coffee Station</div>
                <div>✔ ₹5,00,000+ Cash Prize Pool & Startup Incubator Pitches</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { title: 'BUILD', desc: 'Transform raw ideas into working software & hardware prototypes.', icon: Code },
                { title: 'LEARN', desc: 'Master AI fine-tuning, Rust, cloud deployment & security.', icon: Cpu },
                { title: 'INNOVATE', desc: 'Solve real-world challenges across 8 cutting-edge tracks.', icon: Sparkles },
                { title: 'NETWORK', desc: 'Connect with top tech companies, VCs & fellow hackers.', icon: Users }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="cyber-card" style={{ padding: '1.5rem', backgroundColor: 'rgba(10, 16, 12, 0.8)' }}>
                    <IconComp size={24} color="#00ff66" style={{ marginBottom: '0.75rem' }} />
                    <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.35rem' }}>{item.title}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHEDULE TIMELINE SECTION */}
      <section id="schedule" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● OVERNIGHT TIMELINE</div>
            <h2 className="section-title text-gradient">EVENT SCHEDULE</h2>
            <p className="section-subtitle">From check-in to grand finale prize announcements.</p>
          </div>

          <ScheduleTimeline limit={6} />

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/schedule" className="btn btn-outline interactive">
              VIEW FULL 24-HOUR TIMELINE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CHALLENGES TRACKS SECTION */}
      <section id="challenges" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● HACKATHON TRACKS</div>
            <h2 className="section-title text-gradient">8 INNOVATION DOMAINS</h2>
            <p className="section-subtitle">Choose your battleground and build solutions that matter.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {sampleChallenges.map((ch) => (
              <ChallengeCard key={ch.id} challenge={ch} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/challenges" className="btn btn-outline interactive">
              EXPLORE ALL 8 CHALLENGE TRACKS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TEAMS SECTION */}
      <section id="teams" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● HACKER RECRUITMENT</div>
            <h2 className="section-title text-gradient">TEAMS & TEAMMATES</h2>
            <p className="section-subtitle">Form your 2-4 hacker squad or search open teams recruiting your skills.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/teams" className="btn btn-primary interactive pulse-glow" style={{ padding: '0.9rem 2.2rem' }}>
              <Users size={18} /> OPEN TEAM FINDER & CREATION SUITE
            </Link>
          </div>
        </div>
      </section>

      {/* 7. MENTORS SECTION */}
      <section id="mentors" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● EXPERT GUIDANCE</div>
            <h2 className="section-title text-gradient">OVERNIGHT MENTORS</h2>
            <p className="section-subtitle">Industry experts walking the floor to review your code and architecture.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {sampleMentors.map((men) => (
              <MentorCard key={men.id} mentor={men} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/mentors" className="btn btn-outline interactive">
              MEET ALL 30+ MENTORS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PRIZES SECTION */}
      <section id="prizes" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● REWARDS & BOUNTIES</div>
            <h2 className="section-title text-gradient">₹5,00,000+ PRIZE POOL</h2>
            <p className="section-subtitle">Compete for cash rewards, trophies, incubator entries, and developer swag.</p>
          </div>

          <PrizeCard />
        </div>
      </section>

      {/* 9. LEADERBOARD SECTION */}
      <section id="leaderboard" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● LIVE RANKINGS</div>
            <h2 className="section-title text-gradient">LIVE LEADERBOARD PREVIEW</h2>
            <p className="section-subtitle">Track team evaluation standings and top 3 podium leaders.</p>
          </div>

          <LeaderboardTable />
        </div>
      </section>

      {/* 10. WORKSHOPS SECTION */}
      <section id="workshops" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● TECHNICAL SESSIONS</div>
            <h2 className="section-title text-gradient">OVERNIGHT WORKSHOPS</h2>
            <p className="section-subtitle">Master AI fine-tuning, cybersecurity protocols, and pitch decks during the night.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {sampleWorkshops.map((ws) => (
              <WorkshopCard key={ws.id} workshop={ws} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/workshops" className="btn btn-outline interactive">
              VIEW ALL 8 TECHNICAL WORKSHOPS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FOOD & BREAKS SECTION */}
      <section id="food" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● 100% FREE REFRESHMENTS</div>
            <h2 className="section-title text-gradient">FOOD & OVERNIGHT BREAKS</h2>
            <p className="section-subtitle">Midnight hot pizza, 24/7 espresso bar, gourmet dinner, breakfast, and energy drinks.</p>
          </div>

          <FoodTimeline />
        </div>
      </section>

      {/* 12. VENUE SECTION */}
      <section id="venue" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● HACKATHON CAMPUS</div>
            <h2 className="section-title text-gradient">NEXORA INNOVATION LAB</h2>
            <p className="section-subtitle">Chennai, India — 30,000 sq ft state-of-the-art campus built for 24-hour hacking.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/venue" className="btn btn-outline interactive">
              EXPLORE VENUE MAP & CAMPUS ZONES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. RULES SECTION */}
      <section id="rules" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="title-container">
            <div className="badge-tag">● GOVERNANCE</div>
            <h2 className="section-title text-gradient">HACKATHON RULES & CODE OF CONDUCT</h2>
            <p className="section-subtitle">2-4 member teams, original code, AI tool usage policies, and submission deadlines.</p>
          </div>

          <Link to="/rules" className="btn btn-outline interactive">
            READ FULL RULES & CODE OF CONDUCT <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 14. SPONSORS SECTION */}
      <section id="sponsors" className="section-padding cyber-grid-bg">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● POWERED BY</div>
            <h2 className="section-title text-gradient">OUR SPONSORS & PARTNERS</h2>
            <p className="section-subtitle">Backed by global technology leaders and open-source ecosystems.</p>
          </div>

          <SponsorGrid />
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section id="faq" className="section-padding" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● FREQUENTLY ASKED</div>
            <h2 className="section-title text-gradient">GOT QUESTIONS?</h2>
            <p className="section-subtitle">Everything you need to know before stepping into NEXORA AFTERDARK.</p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section id="contact" className="section-padding cyber-grid-bg" style={{ borderTop: '1px solid rgba(0, 255, 102, 0.3)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag float-anim">● LIMITED 500 SLOTS AVAILABLE</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
            READY TO CODE THROUGH THE NIGHT?
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto', color: '#94a3b8', fontSize: '1.1rem' }}>
            Assemble your team of 2-4 hackers, grab your laptops, and prepare for 24 hours of pure creation at Nexora Innovation Lab.
          </p>

          <Link to="/register" className="btn btn-primary interactive pulse-glow" style={{ padding: '1.1rem 2.8rem', fontSize: '1.1rem' }}>
            <Zap size={20} /> REGISTER YOUR TEAM NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

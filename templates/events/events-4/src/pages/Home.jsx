import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Countdown from '../components/Countdown';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import EquipmentCard from '../components/EquipmentCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import LeaderboardTable from '../components/LeaderboardTable';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const programs = [
    {
      title: 'POWER FORGE',
      category: 'Strength Training',
      duration: '12 WEEKS',
      difficulty: 'HIGH INTENSITY',
      coach: 'Arin Vale',
      desc: 'Master powerlifting fundamentals (Squat, Bench, Deadlift) with progressive overload protocols engineered for maximum mechanical tension.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'ASCENT SHRED',
      category: 'Fat Loss & Conditioning',
      duration: '8 WEEKS',
      difficulty: 'MAX BURN',
      coach: 'Kael Ryder',
      desc: 'High-octane metabolic conditioning combining sprint intervals, kettlebell circuits, and sled pushes for total fat oxidation.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'MUSCLE ARCHITECT',
      category: 'Bodybuilding',
      duration: '16 WEEKS',
      difficulty: 'ADVANCED',
      coach: 'Ryan Cross',
      desc: 'Hypertrophy-focused training split designed to build symmetrical lean muscle volume with precise angular tension control.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const trainers = [
    {
      name: 'ARIN VALE',
      role: 'Head Strength Coach',
      exp: '12 Yrs',
      spec: 'Powerlifting & Strongman',
      bio: 'Former national powerlifting champion specializing in raw strength hypertrophy and biomechanical kinetic tuning.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'KAEL RYDER',
      role: 'Performance Coach',
      exp: '9 Yrs',
      spec: 'HIIT & Athletics',
      bio: 'Expert in sports speed conditioning, metabolic rate escalation, and endurance energy distribution.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'NOVA REYES',
      role: 'Functional Fitness Coach',
      exp: '7 Yrs',
      spec: 'Calisthenics & Mobility',
      bio: 'Specialist in joint longevity, core strength, dynamic kinetic stability, and injury prevention.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'RYAN CROSS',
      role: 'Bodybuilding Coach',
      exp: '11 Yrs',
      spec: 'Contest Prep & Sculpting',
      bio: 'IFBB certified prep strategist helping athletes carve elite muscle separation and stage presence.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const equipmentPreview = [
    { name: 'Olympic Barbell', category: 'Strength', desc: 'IPF/IWF certified 20kg chrome barbell with 215,000 PSI tensile strength.', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { name: 'Power Rack', category: 'Strength', desc: 'Heavy 3x3 11-gauge steel cage with laser-cut numbers and spotter arms.', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80' },
    { name: 'Urethane Dumbbell Set', category: 'Free Weights', desc: 'Ergonomic knurled dumbbells ranging from 2.5kg up to 100kg.', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80' }
  ];

  const classSchedule = {
    Monday: [
      { time: '06:00 AM', name: 'Strength Training', trainer: 'Arin Vale', diff: 'Hard' },
      { time: '07:30 AM', name: 'HIIT Burn', trainer: 'Kael Ryder', diff: 'Extreme' },
      { time: '06:00 PM', name: 'Bodybuilding Split', trainer: 'Ryan Cross', diff: 'Hard' },
      { time: '07:30 PM', name: 'Functional Circuit', trainer: 'Nova Reyes', diff: 'Medium' }
    ],
    Tuesday: [
      { time: '06:00 AM', name: 'Cardio Blast', trainer: 'Kael Ryder', diff: 'Medium' },
      { time: '07:00 AM', name: 'Mobility & Flow', trainer: 'Nova Reyes', diff: 'Light' },
      { time: '06:00 PM', name: 'Powerlifting Heavy', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '07:30 PM', name: 'Core Annihilation', trainer: 'Ryan Cross', diff: 'Hard' }
    ],
    Wednesday: [
      { time: '06:00 AM', name: 'Olympic Weightlifting', trainer: 'Arin Vale', diff: 'Extreme' },
      { time: '07:30 AM', name: 'Endurance Rush', trainer: 'Kael Ryder', diff: 'Hard' },
      { time: '06:00 PM', name: 'Metabolic Conditioning', trainer: 'Nova Reyes', diff: 'Hard' },
      { time: '07:30 PM', name: 'Hypertrophy Legs', trainer: 'Ryan Cross', diff: 'Extreme' }
    ]
  };

  return (
    <div>
      {/* 1. HERO */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">⚡ VORTEX FORGE ARENA PRESENTS</div>
            <h1 className="hero-title">
              IRON ASCENT <span className="highlight">2026</span>
            </h1>
            <div className="hero-subtitle">
              THE ULTIMATE STRENGTH & FITNESS CHALLENGE
            </div>
            <p className="hero-description">
              "Push beyond your limits, challenge your strength, and become the strongest version of yourself. Enter the forge where champions are born."
            </p>

            <div className="hero-cta-group">
              <Button to="/registration" variant="primary">REGISTER FOR EVENT</Button>
              <Button to="/gym" variant="outline">EXPLORE GYM</Button>
            </div>

            <div className="event-floating-card">
              <div className="event-card-date">OCT<br />18</div>
              <div className="event-card-details">
                <h4>IRON ASCENT 2026</h4>
                <p>OCTOBER 18, 2026 • VORTEX FORGE ARENA</p>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-glow-purple" />
            <div className="hero-diagonal-yellow" />
            <div className="hero-diagonal-black" />
            <div className="hero-athlete-img-container">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                alt="Muscular Athlete"
                className="hero-athlete-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COUNTDOWN */}
      <section id="countdown" className="section-padding" style={{ background: 'var(--color-bg-dark)', borderTop: '2px solid var(--color-yellow)' }}>
        <div className="container">
          <Countdown targetDate="2026-10-18T09:00:00" />
        </div>
      </section>

      {/* 3. ABOUT */}
      <section id="about" className="section-padding">
        <div className="container">
          <SectionTitle subheading="WHO WE ARE" title="BUILT FOR THOSE WHO REFUSE TO QUIT" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-yellow)', marginBottom: '1rem' }}>
                FORGING ELITE ATHLETES SINCE 2016
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Vortex Forge Fitness is a high-performance biomechanical battleground. Founded with a single mission — to eliminate mediocrity and cultivate relentless human strength, discipline, and endurance.
              </p>
              <Button to="/about" variant="purple">DISCOVER OUR STORY</Button>
            </div>

            <div className="diagonal-card" style={{ padding: '2rem', background: 'var(--color-bg-card)' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-yellow)', paddingBottom: '0.5rem' }}>
                OUR CORE PHILOSOPHIES
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'UNCOMPROMISING DISCIPLINE', text: 'Consistency over motivation. Results earned daily.' },
                  { title: 'SCIENTIFIC PERIODIZATION', text: 'Every rep calculated for optimal kinetic adaptation.' },
                  { title: 'BROTHERHOOD & COMMUNITY', text: 'Iron sharpens iron. Elevating each other.' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <div style={{ color: 'var(--color-yellow)', fontWeight: '800', fontSize: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                      ⚡ {item.title}
                    </div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="diagonal-bg-yellow">
        <div className="container" style={{ transform: 'skewY(4deg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '10+', label: 'Years of Experience' },
              { num: '25+', label: 'Professional Trainers' },
              { num: '2,500+', label: 'Active Members' },
              { num: '50+', label: 'Weekly Classes' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3.5rem', fontWeight: '900', color: '#08080A', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: '800', color: '#08080A', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS */}
      <section id="programs" className="section-padding" style={{ background: 'var(--color-bg-dark)', paddingTop: '8rem' }}>
        <div className="container">
          <SectionTitle subheading="TRAINING BLUEPRINTS" title="FEATURED FITNESS PROGRAMS" />
          <div className="grid-3">
            {programs.map((prog, idx) => (
              <ProgramCard key={idx} {...prog} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/programs" variant="primary">VIEW ALL PROGRAMS</Button>
          </div>
        </div>
      </section>

      {/* 5. CLASSES SCHEDULE */}
      <section id="classes" className="section-padding">
        <div className="container">
          <SectionTitle subheading="WEEKLY SCHEDULE" title="GROUP TRAINING CLASSES" />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {['Monday', 'Tuesday', 'Wednesday'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: '0.75rem 2rem',
                  background: activeDay === day ? 'var(--color-yellow)' : 'var(--color-bg-card)',
                  color: activeDay === day ? '#000' : '#FFF',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                {day.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {classSchedule[activeDay].map((c, idx) => (
              <div key={idx} className="diagonal-card" style={{ padding: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--color-yellow)', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {c.time}
                  </div>
                  <h4 style={{ color: '#FFF', fontSize: '1.25rem', marginTop: '0.2rem' }}>{c.name}</h4>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                    COACH: {c.trainer}
                  </div>
                </div>
                <div>
                  <Button to="/classes" variant="outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
                    BOOK CLASS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EQUIPMENT SHOWCASE */}
      <section id="equipment" className="section-padding" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="container">
          <SectionTitle subheading="ENGINEERED PRECISION" title="EQUIPMENT SHOWCASE" />
          <div className="grid-3">
            {equipmentPreview.map((item, idx) => (
              <EquipmentCard key={idx} {...item} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/equipment" variant="outline">EXPLORE ALL EQUIPMENT</Button>
          </div>
        </div>
      </section>

      {/* 7. TRAINERS */}
      <section id="trainers" className="section-padding">
        <div className="container">
          <SectionTitle subheading="MASTER COACHES" title="MEET OUR EXPERT TRAINERS" />
          <div className="grid-4">
            {trainers.map((t, idx) => (
              <TrainerCard key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. IRON ASCENT EVENT HIGHLIGHT (Placed RIGHT BEFORE Pricing) */}
      <section id="event" className="section-padding" style={{ background: 'var(--color-bg-dark)', borderTop: '2px solid var(--color-yellow)' }}>
        <div className="container">
          <SectionTitle subheading="THE MAIN CHAMPIONSHIP" title="IRON ASCENT 2026 EVENT" />

          <div style={{
            background: 'linear-gradient(135deg, rgba(22,22,31,0.95) 0%, rgba(10,10,14,0.95) 100%)',
            border: '2px solid var(--color-yellow)',
            padding: '3rem',
            marginBottom: '3rem',
            position: 'relative',
            clipPath: 'polygon(0 0, 97% 0, 100% 5%, 100% 100%, 3% 100%, 0 95%)'
          }}>
            <div className="subheading">OCTOBER 18, 2026 • ANNUAL CHAMPIONSHIP</div>
            <h2 className="heading-huge" style={{ color: 'var(--color-yellow)', marginBottom: '1rem' }}>
              IRON ASCENT 2026
            </h2>
            <p style={{ color: '#FFF', fontSize: '1.15rem', maxWidth: '750px', lineHeight: '1.7', marginBottom: '2rem' }}>
              A high-energy fitness challenge designed to test maximum strength, muscular endurance, discipline, and mental determination. Compete against top athletes across 5 category divisions for cash prizes and the championship crown.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Button to="/registration" variant="primary">REGISTER NOW FOR IRON ASCENT</Button>
              <Button to="/event" variant="outline">EXPLORE EVENT DETAILS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING & MEMBERSHIP (Placed RIGHT AFTER Event) */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <SectionTitle subheading="INVEST IN YOURSELF" title="EVENT ENTRY & GYM MEMBERSHIP" />
          <div className="grid-3">
            <PricingCard
              title="EVENT ENTRY"
              price="₹799"
              features={['Event participation', 'Official Athlete T-shirt', 'Digital Certificate', 'Hydration & Refreshments']}
              buttonText="REGISTER FOR EVENT"
              to="/registration"
            />
            <PricingCard
              title="FORGE MEMBERSHIP"
              price="₹1,799 / MO"
              featured={true}
              features={['Full Arena Gym Access', 'All Group Fitness Classes', 'Biweekly Assessment', 'Trainer Guidance']}
              buttonText="JOIN THE GYM"
              to="/registration"
            />
            <PricingCard
              title="ELITE ATHLETE VIP"
              price="₹2,499"
              features={['Full Event Athlete Kit', 'VIP Lounge & Priority Access', '1-on-1 Personal Trainer Consult', 'Custom Nutrition Plan']}
              buttonText="CLAIM VIP PASS"
              to="/registration"
            />
          </div>
        </div>
      </section>

      {/* 10. LEADERBOARD */}
      <section id="leaderboard" className="section-padding" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="container">
          <SectionTitle subheading="LIVE STANDINGS" title="IRON ASCENT LEADERBOARD" />
          <LeaderboardTable limit={5} />
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="section-padding">
        <div className="container">
          <SectionTitle subheading="GOT QUESTIONS?" title="FREQUENTLY ASKED QUESTIONS" />
          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="diagonal-bg-yellow" style={{ margin: '4rem 0' }}>
        <div className="container" style={{ transform: 'skewY(4deg)', textAlign: 'center' }}>
          <div className="subheading" style={{ justifyContent: 'center', color: '#000' }}>NO EXCUSES • ONLY RESULTS</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#08080A', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, marginBottom: '1rem' }}>
            ARE YOU READY TO ASCEND?
          </h2>
          <p style={{ color: '#1A1A24', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: 600 }}>
            "Your strongest version is waiting. Step into the forge and prove what you are capable of."
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/membership" variant="purple" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              JOIN VORTEX FORGE
            </Button>
            <Button to="/registration" variant="primary" style={{ background: '#08080A', color: '#FFE600', padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              REGISTER FOR IRON ASCENT
            </Button>
          </div>
        </div>
      </section>

      {/* 12. CONTACT */}
      <section id="contact" className="section-padding">
        <div className="container">
          <SectionTitle subheading="REACH OUT" title="LOCATION & CONTACT" />
          <div className="grid-2">
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-yellow)', marginBottom: '1.5rem' }}>
                VORTEX FORGE FITNESS ARENA
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                <div><strong style={{ color: '#FFF' }}>📍 ADDRESS:</strong><br />Sector 18, Sports City Complex</div>
                <div><strong style={{ color: '#FFF' }}>📞 PHONE:</strong><br />+91 98765 43210</div>
                <div><strong style={{ color: '#FFF' }}>✉ EMAIL:</strong><br />hello@vortexforgefitness.com</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

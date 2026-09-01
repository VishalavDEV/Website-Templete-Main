import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Award, Shield, Cpu, Droplets, Stethoscope, Car, Bus, Users, AlertTriangle, ArrowRight } from 'lucide-react';

const RACE_CARDS = [
  { title: "Bib Collection", desc: "Mandatory collection at Race Expo on Saturday, 14 Nov (10 AM - 7 PM). Bring photo ID and confirmation email.", icon: Award },
  { title: "Timing Chip", desc: "Official RFID timing chip integrated into your race bib. Real-time split tracking at 5K, 10K, 15K, and finish.", icon: Cpu },
  { title: "Hydration Stations", desc: "Hydration points located every 1.5 km with water, electrolyte drinks, orange slices, and cooling mist showers.", icon: Droplets },
  { title: "Medical Support", desc: "18 medical stations along the course, mobile bike doctors, fully equipped ambulances, and field hospital at finish.", icon: Stethoscope },
  { title: "Baggage Deposit", desc: "Secure bag drop at Marina Gateway starting 4:30 AM. Transported to Vayora Stadium finish area for pick-up.", icon: Shield },
  { title: "Parking Facilities", desc: "Designated participant parking at Island Grounds & Chepauk Stadium with free shuttle transfers to start gate.", icon: Car },
  { title: "Public Transportation", desc: "Special early morning Metro & EMU train services operational from 4:00 AM across all major Chennai lines.", icon: Bus },
  { title: "Restrooms & Facilities", desc: "Toilet blocks available at start holding area, finish stadium, and at every 3 km mark along the course.", icon: Users },
  { title: "Emergency Support", desc: "24/7 emergency control room hotline: +91 90000 78901. Emergency response bikes patrolling the course continuously.", icon: AlertTriangle },
  { title: "Finisher Medal & Certificate", desc: "Custom high-relief metal finisher medal handed past the finish line along with downloadable digital certificate.", icon: Award }
];

export default function RaceInfo() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Hero Banner */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>ESSENTIAL RUNNER GUIDE</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
            EVERYTHING YOU NEED TO KNOW BEFORE YOU RUN.
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Key timings, venue details, race regulations, and support services for Vayora Runfest 2026.
          </p>
        </div>

        {/* Quick Meta Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {[
            { label: "MAIN RACE", value: "21.1 KM Half", icon: Award },
            { label: "START POINT", value: "Marina Gateway", icon: MapPin },
            { label: "FINISH POINT", value: "Vayora Stadium", icon: MapPin },
            { label: "REPORTING TIME", value: "5:00 AM IST", icon: Clock },
            { label: "RACE START", value: "6:00 AM IST", icon: Clock },
            { label: "CUT-OFF TIME", value: "3 Hours 30 Mins", icon: Clock }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '20px', textAlign: 'center', borderTop: '3px solid var(--bright-orange)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--soft-grey)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFFFFF', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* 10 Information Cards */}
        <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '36px' }}>
          FACILITIES & RUNNER SERVICES
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {RACE_CARDS.map((card, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px', borderLeft: '4px solid var(--marathon-red)' }}>
              <card.icon size={28} color="var(--bright-orange)" style={{ marginBottom: '14px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/register" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
            REGISTER FOR YOUR RACE <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}

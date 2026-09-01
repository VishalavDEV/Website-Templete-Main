import React, { useState } from 'react';
import { ShieldAlert, Users, Heart, Camera, Droplets, Award, CheckCircle2 } from 'lucide-react';

const VOLUNTEER_ROLES = [
  { title: "Hydration & Water Station", desc: "Hand out water cups, electrolyte drinks, and cheer runners at key course intervals.", icon: Droplets },
  { title: "Runner Support & Baggage", desc: "Assist runners with baggage drop/pick-up and post-race refreshment boxes.", icon: Users },
  { title: "Medical Assistance Squad", desc: "Support first-aid doctors, ice stations, and mobile response teams.", icon: Heart },
  { title: "Registration & Bib Expo Desk", desc: "Greet participants, verify IDs, and distribute race bibs during Expo day.", icon: Award },
  { title: "Route & Course Support", desc: "Guide runners at turnarounds, monitor safety zones, and assist traffic control.", icon: ShieldAlert },
  { title: "Crowd & Cheering Crew", desc: "Lead cheer squads, operate noise makers, and keep spectator energy high.", icon: Heart },
  { title: "Media & Photography Crew", desc: "Assist official photographers, social media live team, and video crew.", icon: Camera },
  { title: "Finish Line Team", desc: "Present finisher medals, hold finish ribbons, and celebrate victorious athletes.", icon: Award }
];

export default function Volunteers() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Hydration & Water Station',
    tshirtSize: 'M'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>VOLUNTEER FORCE</div>
          <h1 className="font-display text-gradient-fire" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            BE PART OF THE ENERGY.
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Over 2,000 volunteers power Vayora Runfest. Join the crew, earn official volunteer certification, and experience the race from the front lines.
          </p>
        </div>

        {/* Volunteer Roles Grid */}
        <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '32px' }}>
          VOLUNTEER ROLES
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {VOLUNTEER_ROLES.map((role, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', borderTop: '3px solid var(--marathon-red)' }}>
              <role.icon size={26} color="var(--bright-orange)" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                {role.title}
              </h3>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Volunteer Application Form */}
        <div className="glass-panel" style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 32px' }}>
          <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '24px' }}>
            VOLUNTEER APPLICATION FORM
          </h3>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Preferred Volunteer Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(9,10,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#FFF', outline: 'none' }}
                >
                  {VOLUNTEER_ROLES.map((r, i) => (
                    <option key={i} value={r.title}>{r.title}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '16px', marginTop: '10px' }}>
                BECOME A VOLUNTEER
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle2 size={48} color="var(--bright-orange)" style={{ margin: '0 auto 16px auto' }} />
              <h4 style={{ color: '#FFF', fontSize: '1.5rem', fontWeight: 800 }}>APPLICATION RECEIVED!</h4>
              <p style={{ color: 'var(--soft-grey)', marginTop: '8px' }}>
                Thank you <strong>{formData.name}</strong>! Our Volunteer Coordinator will contact you via email with orientation schedule details.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

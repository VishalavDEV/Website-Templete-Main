import * as Icons from 'lucide-react';
import { contentData } from '../data/content';

/**
 * About Page Component
 * Renders the mission/vision, statistical counters, core values, and faculty grids.
 */
export default function About() {
  const { about, institution } = contentData;

  return (
    <div className="about-page fade-in">
      {/* Page Header banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-gold">Who We Are</span>
          <h1>About {institution.name}</h1>
          <p className="banner-sub">Dedicated to academic rigor, practical excellence, and nurturing entrepreneurial leaders.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section-padding">
        <div className="container grid-2">
          <div className="card mission-card">
            <div className="card-icon-container bg-primary-light text-white">
              <Icons.Target size={28} />
            </div>
            <h2>Our Mission</h2>
            <p>{about.mission}</p>
          </div>
          <div className="card vision-card">
            <div className="card-icon-container bg-primary-light text-white">
              <Icons.Eye size={28} />
            </div>
            <h2>Our Vision</h2>
            <p>{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section section-padding">
        <div className="container">
          <div className="grid-4 stats-grid">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="stat-card card text-center">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>These guiding pillars shape our curriculum, teaching pedagogy, and campus culture.</p>
          </div>
          <div className="grid-3 values-grid">
            {about.values.map((value, idx) => (
              <div key={idx} className="card value-card">
                <div className="value-num">0{idx + 1}</div>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="faculty-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Meet Our Leadership</span>
            <h2>Our Distinguished Faculty</h2>
            <p>Learn from industry executives, academic researchers, and visionary consultants.</p>
          </div>
          <div className="grid-3 faculty-grid">
            {about.faculty.map((member, idx) => (
              <div key={idx} className="card faculty-card text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="faculty-avatar"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"; // fallback
                  }}
                />
                <h3>{member.name}</h3>
                <p className="faculty-title">{member.title}</p>
                <p className="faculty-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

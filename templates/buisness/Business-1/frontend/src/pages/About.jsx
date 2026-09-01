import { motion } from 'framer-motion';
import { Target, Compass, Award, Calendar, Zap, Shield, Users, ArrowUpRight } from 'lucide-react';
import './About.css';

export default function About() {
  const milestones = [
    { year: "2022", title: "Company Inception", desc: "ABC Business was founded by three cloud architecture engineers looking to simplify corporate API configurations." },
    { year: "2023", title: "Seed Funding Round", desc: "Raised $4.5M in seed funding to expand the development of our workflow automation middleware." },
    { year: "2024", title: "Enterprise Growth Spurt", desc: "Partnered with ten major retail networks to restructure inventory pipelines, achieving +150% efficiency yields." },
    { year: "2025", title: "Going Global", desc: "Established regional consulting nodes in London and Singapore, growing our active advisory workforce to 60+." },
    { year: "2026", title: "State of the Art AI Release", desc: "Launched our proprietary predictive marketing classification algorithms, raising client ROIs across campaign platforms." }
  ];

  const values = [
    { icon: <Zap size={24} />, title: "Velocity", desc: "We prioritize execution and concrete operational builds over lengthy strategy slides." },
    { icon: <Shield size={24} />, title: "Precision Security", desc: "Security is non-negotiable. Every database connector and microservice we build meets security standards." },
    { icon: <Users size={24} />, title: "Shared Trust", desc: "We operate transparently. All source code is transferred directly to client repositories upon contract close." }
  ];

  return (
    <div className="about-page">
      {/* Glow Background Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Header Banner */}
      <section className="about-header-section section-padding">
        <div className="container">
          <motion.div 
            className="about-header-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">OUR PROFILE</span>
            <h1 className="large-headline">We Build the Tools <br />That <span className="text-gradient">Power Future Scaling</span></h1>
            <p className="lead-paragraph">
              ABC Business is an integration-focused consulting firm that blends modern software engineering, workflow automation, and predictive data analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview & Intro */}
      <section className="about-intro-section section-padding">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>Transforming Corporate Architectures Since 2022</h2>
            <p>
              Traditional business consulting is broken. Companies are often left with static documentation slides and no concrete scripts to execute the changes. At ABC Business, we operate differently.
            </p>
            <p>
              We run diagnostic audits on your legacy servers, create functional API connections, design scalable mobile portals, and configure custom automation triggers. We don't just advise; we engineer your growth.
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <h4>60+</h4>
                <p>Global Staff</p>
              </div>
              <div className="stat-box">
                <h4>200+</h4>
                <p>Projects Finished</p>
              </div>
              <div className="stat-box">
                <h4>$40M+</h4>
                <p>Client Funding Unlocked</p>
              </div>
            </div>
          </div>
          <div className="intro-card-box">
            <div className="mission-card glass-card">
              <Target className="card-icon" size={32} />
              <h3>Our Mission</h3>
              <p>To eliminate operational latency by building unified, secure, and auto-scaling digital systems for growing enterprises.</p>
            </div>
            <div className="vision-card glass-card">
              <Compass className="card-icon" size={32} />
              <h3>Our Vision</h3>
              <p>To become the leading software development and B2B strategy engineering template for scale-up companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">How We Work</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc">Our values dictate how we design code, coordinate strategies, and engage with client networks.</p>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => (
              <motion.div 
                className="value-card glass-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="value-icon-box">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Milestone Section */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR JOURNEY</span>
            <h2 className="section-title">Timeline of Achievements</h2>
            <p className="section-desc">Explore the milestones that have defined our engineering growth and corporate track record.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-axis"></div>
            {milestones.map((m, idx) => (
              <motion.div
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-content glass-card">
                  <div className="timeline-badge">
                    <Calendar size={14} />
                    <span>{m.year}</span>
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-node"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase Banner */}
      <section className="achievements-section section-padding">
        <div className="container text-center">
          <div className="achievements-banner glass-card">
            <Award className="award-icon" size={48} />
            <h2>Industry Standards Recognition</h2>
            <p>We are recognized as certified partners across global Cloud and Cybersecurity frameworks.</p>
            <div className="badge-grid">
              <div className="achievement-badge"><ArrowUpRight size={16} /> AWS Advanced Partner</div>
              <div className="achievement-badge"><ArrowUpRight size={16} /> Certified SOC2 Engineer</div>
              <div className="achievement-badge"><ArrowUpRight size={16} /> Spring Enterprise Developer</div>
              <div className="achievement-badge"><ArrowUpRight size={16} /> Google Cloud Integrator</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

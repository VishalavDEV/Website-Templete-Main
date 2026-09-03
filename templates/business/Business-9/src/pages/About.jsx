import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Flame, Users2, Medal, Zap, Star } from 'lucide-react';
import PageTransition from '../animations/PageTransition';

export default function About() {
  
  const whyChooseUsData = [
    { title: "Innovation", icon: <Zap size={22} />, desc: "We constantly research new technology trends to keep your business ahead of competitors." },
    { title: "Professional Team", icon: <Users2 size={22} />, desc: "Our advisors are seasoned executives, senior application developers, and brand directors." },
    { title: "Customer Focus", icon: <Target size={22} />, desc: "We map out your direct business bottlenecks rather than forcing generic strategies." },
    { title: "Quality", icon: <Medal size={22} />, desc: "From pixel-perfect frontends to multi-threaded backends, we deliver zero-compromise builds." },
    { title: "Reliability", icon: <ShieldCheck size={22} />, desc: "We respect milestones, sign NDA terms, and communicate progress via real-time dashboards." },
    { title: "Growth", icon: <Flame size={22} />, desc: "Every line of code and branding asset we produce is engineered to drive customer conversion." }
  ];

  const journeyTimeline = [
    { year: "2016", title: "Founded", desc: "OranGrow started as a 3-person strategy firm in California, providing local conversion auditing." },
    { year: "2019", title: "First Major Project", desc: "Delivered a full digital workflow migration for a national supply logistics firm with 500+ staff." },
    { year: "2021", title: "Business Expansion", desc: "Added custom cloud-native tech solutions and app development departments to support clients end-to-end." },
    { year: "2023", title: "Global Reach", desc: "Opened partnerships in Europe and APAC, growing our team to 45 senior advisors and engineers." },
    { year: "2026", title: "Future Vision", desc: "Pioneering interactive analytics platforms and custom cloud compilers utilizing Java virtual threads." }
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        
        {/* WHO WE ARE */}
        <section className="container" style={{ marginBottom: '6rem' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left intro text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge"><Users2 size={14} /> Who We Are</span>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1.5rem' }}>
                We Are Catalysts For <span className="text-gradient">Business Growth</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                At OranGrow, we build custom business strategies and technology applications designed to scale. We combine quantitative business intelligence (checkout rates, acquisition costs) with qualitative visual designs (glassmorphism UI, typography guidelines) to build memorable experiences.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our cross-functional teams operate at the intersection of business strategy and software engineering, allowing us to build scalable portals and deploy APIs in weeks rather than quarters.
              </p>
            </motion.div>

            {/* Right illustration / image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{
                position: 'relative',
                borderRadius: 'var(--border-radius-xl)',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '4/3',
                boxShadow: 'var(--glass-shadow-hover)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team brainstorming" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(249, 115, 22, 0.4) 0%, transparent 100%)'
                }} />
              </div>
            </motion.div>

          </div>
        </section>

        {/* MISSION & VISION */}
        <section style={{ background: 'rgba(255, 237, 213, 0.25)', padding: '5rem 0', marginBottom: '6rem', borderTop: '1px solid rgba(249,115,22,0.06)', borderBottom: '1px solid rgba(249,115,22,0.06)' }}>
          <div className="container">
            <div className="grid-2">
              
              {/* Mission Card */}
              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ background: '#FFF' }}
              >
                <div style={{
                  background: 'rgba(249, 115, 22, 0.08)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem'
                }}>
                  <Target size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-title)' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  To bridge the gap between complex engineering pipelines and organic brand messages. We empower ambitious startups and corporate enterprises with scalable platforms that drive quantifiable market expansion.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                style={{ background: '#FFF' }}
              >
                <div style={{
                  background: 'rgba(249, 115, 22, 0.08)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem'
                }}>
                  <Eye size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-title)' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  To establish OranGrow as the gold-standard global design and engineering agency, recognized for building custom glassmorphism web software that sets new conversion benchmarks.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="container" style={{ marginBottom: '8rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><Star size={14} /> Value Proposition</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)' }}>
              Why Ambitious Businesses <span className="text-gradient">Choose OranGrow</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '580px', marginInline: 'auto' }}>
              We don't use copy-paste templates or basic architectures. Everything is engineered custom for your business metrics.
            </p>
          </div>

          <div className="grid-3">
            {whyChooseUsData.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, borderColor: 'var(--primary)' }}
                style={{ padding: '2rem 1.5rem', background: 'rgba(255, 255, 255, 0.45)' }}
              >
                <div style={{
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </section>

        {/* OUR JOURNEY TIMELINE */}
        <section className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)' }}>
              Our Chronological <span className="text-gradient">Journey</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              A brief timeline of milestones and highlights that shaped OranGrow.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="timeline-container">
            <div className="timeline-line" />
            
            {journeyTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-node" />
                <div className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

      </div>
    </PageTransition>
  );
}

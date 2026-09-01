import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Briefcase, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Stats from '../components/Stats';
import PageTransition from '../animations/PageTransition';

export default function Home() {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stagger wrapper for hero elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <PageTransition>
      <div style={{ position: 'relative' }}>
        
        {/* HERO SECTION */}
        <section style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          position: 'relative'
        }}>
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              
              {/* Hero Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                {/* Floating badge */}
                <motion.div variants={badgeVariants} className="badge">
                  <Sparkles size={14} /> Trusted by Growing Businesses
                </motion.div>

                {/* Main Headline */}
                <motion.h1 
                  variants={itemVariants}
                  style={{
                    fontSize: '3.75rem',
                    fontWeight: 800,
                    letterSpacing: '-1.5px',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-title)',
                    lineHeight: 1.15
                  }}
                  className="hero-title"
                >
                  Transforming Ideas Into <br />
                  <span className="text-gradient">Powerful Business</span> Solutions
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '2.5rem',
                    maxWidth: '520px'
                  }}
                >
                  Helping ambitious businesses grow through innovative strategic advice, bleeding-edge web applications, brand refreshes, and conversion audits.
                </motion.p>

                {/* Hero CTAs */}
                <motion.div 
                  variants={itemVariants}
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                >
                  <motion.button 
                    className="btn btn-primary"
                    onClick={handleServicesClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services <ArrowRight size={16} />
                  </motion.button>
                  
                  <motion.button 
                    className="btn btn-secondary"
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Work Together
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Hero Right: Animated SVG Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div style={{ position: 'relative', width: '100%', maxWidth: '480px', aspectRatio: '1/1' }}>
                  
                  {/* Decorative rotating outer ring */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: '-10px',
                      border: '2px dashed rgba(249, 115, 22, 0.15)',
                      borderRadius: '50%',
                      zIndex: -1
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Main Glass Screen Frame */}
                  <div className="glass-card" style={{
                    width: '100%',
                    height: '100%',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.4)',
                    borderColor: 'rgba(249, 115, 22, 0.2)',
                    boxShadow: '0 20px 50px rgba(249, 115, 22, 0.08)'
                  }}>
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                      
                      {/* Grid background lines */}
                      <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350" stroke="rgba(249,115,22,0.04)" strokeWidth="1" />
                      <path d="M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400" stroke="rgba(249,115,22,0.04)" strokeWidth="1" />

                      {/* Animated Growth Graph Area Chart */}
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Growing area */}
                      <motion.path
                        d="M 50,300 L 100,240 L 150,260 L 200,180 L 250,210 L 300,120 L 350,80 L 350,300 Z"
                        fill="url(#chartGrad)"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />

                      {/* Growing Line */}
                      <motion.path
                        d="M 50,300 L 100,240 L 150,260 L 200,180 L 250,210 L 300,120 L 350,80"
                        stroke="#F97316"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />

                      {/* Bouncing nodes */}
                      {[
                        { cx: 50, cy: 300 },
                        { cx: 100, cy: 240 },
                        { cx: 150, cy: 260 },
                        { cx: 200, cy: 180 },
                        { cx: 250, cy: 210 },
                        { cx: 300, cy: 120 },
                        { cx: 350, cy: 80 }
                      ].map((node, i) => (
                        <motion.circle
                          key={i}
                          cx={node.cx}
                          cy={node.cy}
                          r="6"
                          fill="#FFF"
                          stroke="#FF7E40"
                          strokeWidth="3"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                        />
                      ))}

                      {/* Floating analytics documents */}
                      <motion.g
                        initial={{ y: 0 }}
                        animate={{ y: [-6, 6, -6] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* Laptop stand drawing */}
                        <path d="M 120,330 L 280,330 L 300,350 L 100,350 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
                        <rect x="140" y="325" width="120" height="6" rx="3" fill="#64748B" />
                        
                        {/* Circular progress elements */}
                        <circle cx="90" cy="110" r="30" fill="rgba(255, 237, 213, 0.8)" stroke="rgba(249, 115, 22, 0.1)" strokeWidth="2" />
                        <motion.circle
                          cx="90"
                          cy="110"
                          r="30"
                          stroke="#F97316"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray="188.4"
                          initial={{ strokeDashoffset: 188.4 }}
                          animate={{ strokeDashoffset: 45 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <text x="90" y="115" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-title)" fontWeight="bold" fontSize="12">80%</text>
                      </motion.g>

                      {/* Floating Dashboard elements */}
                      <motion.g
                        initial={{ y: 10 }}
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        {/* Little Floating Card (top right) */}
                        <rect x="230" y="30" width="130" height="50" rx="10" fill="#FFF" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.03))" />
                        <circle cx="255" cy="55" r="14" fill="#FFEDD5" />
                        <path d="M 251,55 L 259,55 M 255,51 L 255,59" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
                        <text x="280" y="50" fill="var(--text-primary)" fontFamily="var(--font-title)" fontWeight="bold" fontSize="10">Conversion</text>
                        <text x="280" y="65" fill="var(--primary)" fontFamily="var(--font-title)" fontWeight="800" fontSize="13">+24%</text>
                      </motion.g>

                    </svg>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <Stats />

        {/* FEATURED SERVICES PREVIEW */}
        <section className="section-padding" style={{ position: 'relative' }}>
          <div className="container">
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge"><Briefcase size={14} /> Core Competence</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)' }}>
                Services We Offer To <span className="text-gradient">Accelerate Growth</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
                Leverage our multi-disciplinary expertise to optimize process speeds, launch digital products, and unlock new customer acquisitions.
              </p>
            </div>

            {/* Services Mock List (Teaser 3 items) */}
            <div className="grid-3">
              {[
                {
                  title: "Business Consulting",
                  description: "Guide your leadership team through complex organizational decisions, mergers, market entries, and risk management.",
                  iconName: "Briefcase",
                  category: "Consulting",
                  benefits: ["Strategic Market Feasibility Analysis", "Corporate Restructuring"]
                },
                {
                  title: "Digital Transformation",
                  description: "Transition legacy infrastructures to agile, cloud-native workflows that improve productivity and collaboration.",
                  iconName: "Cpu",
                  category: "Technology",
                  benefits: ["Legacy Infrastructure Audits", "Workflow Automation Integrations"]
                },
                {
                  title: "Technology Solutions",
                  description: "Architect, build, and deploy custom enterprise web applications, mobile apps, and microservice APIs.",
                  iconName: "Code2",
                  category: "Technology",
                  benefits: ["Custom Full-Stack Apps", "Scalable Microservices"]
                }
              ].map((service, index) => (
                <div key={index} className="glass-card" style={{ padding: '2.5rem 1.75rem', background: 'rgba(255, 255, 255, 0.45)' }}>
                  <div style={{
                    background: 'var(--primary-gradient)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    marginBottom: '1.5rem'
                  }}>
                    {index === 0 ? <Briefcase size={22} /> : index === 1 ? <TrendingUp size={22} /> : <Code2 size={22} />}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-title)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{service.description}</p>
                  <button 
                    onClick={handleServicesClick} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: 0
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* VALUE CTA BANNER */}
        <section style={{ padding: '4rem 0 8rem 0' }}>
          <div className="container">
            <motion.div 
              className="glass-card"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 237, 213, 0.6) 0%, rgba(255, 253, 251, 0.8) 100%)',
                padding: '4rem 3rem',
                borderRadius: 'var(--border-radius-xl)',
                border: '1.5px solid rgba(249, 115, 22, 0.2)',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.06)'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
                Ready to Boost Your <span className="text-gradient">Business Conversion Rate</span>?
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
                Schedule a call with our principal advisor. We'll map out your legacy infrastructure gaps and identify low-friction organic acquisition funnels.
              </p>
              <button className="btn btn-primary" onClick={handleContactClick}>
                Get Started Today <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>

      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}

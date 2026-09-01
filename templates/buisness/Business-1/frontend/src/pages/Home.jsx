import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Cpu, BarChart, Users, TrendingUp, Shield, Activity, RefreshCw } from 'lucide-react';
import { apiService } from '../utils/api';
import './Home.css';

// Animated Counter component
function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, projectsRes, testimonialsRes] = await Promise.all([
          apiService.getServices(),
          apiService.getProjects(),
          apiService.getTestimonials()
        ]);
        setServices(servicesRes.slice(0, 4));
        setProjects(projectsRes.slice(0, 3));
        setTestimonials(testimonialsRes.slice(0, 3));
      } catch (err) {
        console.error("Failed fetching home data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const heroNodes = [
    { id: 'business', label: 'Business', icon: <Zap size={20} />, x: 250, y: 180, color: 'var(--color-blue)' },
    { id: 'strategy', label: 'Strategy', icon: <Cpu size={16} />, x: 90, y: 80, color: 'var(--color-purple)' },
    { id: 'tech', label: 'Technology', icon: <Activity size={16} />, x: 410, y: 90, color: 'var(--color-pink)' },
    { id: 'customers', label: 'Customers', icon: <Users size={16} />, x: 80, y: 280, color: 'var(--color-blue-dark)' },
    { id: 'growth', label: 'Growth', icon: <TrendingUp size={16} />, x: 420, y: 270, color: 'var(--color-blue)' }
  ];

  const heroConnections = [
    { from: 'business', to: 'strategy' },
    { from: 'business', to: 'tech' },
    { from: 'business', to: 'customers' },
    { from: 'business', to: 'growth' },
    { from: 'strategy', to: 'tech' },
    { from: 'customers', to: 'growth' }
  ];

  return (
    <div className="home-page">
      {/* Glow Background Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="dots-grid"></div>
        <div className="hero-container container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Zap size={14} className="badge-icon" />
              <span>Next-Gen Enterprise Consulting</span>
            </div>
            <h1>
              Accelerate Your <br />
              <span className="text-gradient">Business Strategy</span> <br />
              Into the Future
            </h1>
            <p>
              We connect operations, custom application development, and data intelligence to build high-scaling automated corporate machines.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            {/* Quick Hero Mini-Stats */}
            <div className="hero-mini-stats">
              <div className="mini-stat-card">
                <h3><AnimatedCounter value={180} suffix="%" /></h3>
                <p>Average Growth</p>
              </div>
              <div className="mini-stat-card">
                <h3><AnimatedCounter value={50} suffix="M+" /></h3>
                <p>Capital Raised</p>
              </div>
              <div className="mini-stat-card">
                <h3><AnimatedCounter value={99.9} suffix="%" /></h3>
                <p>Uptime Record</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="ecosystem-container glass-card">
              {/* Interactive Vector Ecosystem */}
              <svg className="ecosystem-svg" viewBox="0 0 500 360">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Connecting Lines */}
                {heroConnections.map((conn, idx) => {
                  const fromNode = heroNodes.find(n => n.id === conn.from);
                  const toNode = heroNodes.find(n => n.id === conn.to);
                  return (
                    <g key={idx}>
                      <line
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        className="connection-line"
                      />
                      <motion.line
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        className="connection-line-pulse"
                        initial={{ strokeDasharray: "20 100", strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -120 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                      />
                    </g>
                  );
                })}

                {/* Nodes */}
                {heroNodes.map((node) => (
                  <motion.g
                    key={node.id}
                    className="ecosystem-node"
                    whileHover={{ scale: 1.15 }}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.id === 'business' ? 32 : 24}
                      fill="var(--bg-tertiary)"
                      stroke={node.color}
                      strokeWidth="2"
                      className="node-circle"
                    />
                    <foreignObject
                      x={node.x - 12}
                      y={node.y - 12}
                      width={24}
                      height={24}
                      className="node-icon-wrapper"
                      style={{ color: node.color }}
                    >
                      <div className="node-icon">{node.icon}</div>
                    </foreignObject>
                    <text
                      x={node.x}
                      y={node.y + (node.id === 'business' ? 48 : 38)}
                      textAnchor="middle"
                      className="node-text"
                    >
                      {node.label}
                    </text>
                  </motion.g>
                ))}
              </svg>

              {/* Floating Widgets */}
              <div className="floating-card widget-1 glass-card">
                <TrendingUp size={16} color="var(--color-blue)" />
                <div>
                  <h4>Strategy Shift</h4>
                  <p>Efficiency: +35%</p>
                </div>
              </div>
              <div className="floating-card widget-2 glass-card">
                <Cpu size={16} color="var(--color-pink)" />
                <div>
                  <h4>API Gateway</h4>
                  <p>Status: Active</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-title">TRUSTED BY LEADING BRANDS GLOBALLY</p>
          <div className="partners-slider">
            <div className="partners-track">
              {['Vanguard', 'Apex Capital', 'CloudSync', 'H2Go Systems', 'UnityHealth', 'Vanguard', 'Apex Capital', 'CloudSync'].map((logo, index) => (
                <div className="partner-logo glass-card" key={index}>
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="services-preview section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Core Business Services</h2>
            <p className="section-desc">We deliver modular engineering and strategic solutions built to accelerate enterprise capabilities.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card glass-card"
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon-box">
                  {service.id === 'business-consulting' && <Zap size={24} />}
                  {service.id === 'digital-transformation' && <Cpu size={24} />}
                  {service.id === 'software-development' && <Cpu size={24} />}
                  {service.id === 'marketing-solutions' && <BarChart size={24} />}
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <Link to={`/services#${service.id}`} className="service-link">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="services-cta-wrapper">
            <Link to="/services" className="btn btn-secondary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-padding">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-visual-box glass-card">
              <div className="grid-glow-dot"></div>
              <div className="about-visual-lines">
                <div className="line line-horizontal animate-line-1"></div>
                <div className="line line-vertical animate-line-2"></div>
              </div>
              <div className="center-orb"></div>
              
              {/* Added Premium Floating Dashboard widgets to avoid empty placeholder look */}
              <div className="about-widget widget-top glass-card">
                <div className="widget-header">
                  <span className="dot dot-green"></span>
                  <h4>System Health</h4>
                </div>
                <h3>99.9% Uptime</h3>
              </div>
              
              <div className="about-widget widget-mid glass-card">
                <div className="widget-header">
                  <span className="dot dot-blue"></span>
                  <h4>Speed Increase</h4>
                </div>
                <h3>35% Faster</h3>
              </div>

              <div className="about-widget widget-bottom glass-card">
                <div className="widget-header">
                  <span className="dot dot-pink"></span>
                  <h4>Security Standard</h4>
                </div>
                <h3>SOC2 Secure</h3>
              </div>
            </div>
          </div>
          <div className="about-info">
            <span className="section-subtitle">WHO WE ARE</span>
            <h2>We Align Strategy, Design, and Scale.</h2>
            <p>
              Founded by industry-leading cloud and startup developers, ABC Business builds solutions that bridge modern technologies with corporate operating models.
            </p>
            <p>
              We don't provide standard consulting decks. We create functional integrations, automate workflows, and deploy global cloud configurations that protect your bottom line.
            </p>
            <div className="about-bullets">
              <div className="bullet-item">
                <Shield className="bullet-icon" size={20} />
                <div>
                  <h4>Enterprise Grade Security</h4>
                  <p>Every app and script is built to security-first standards.</p>
                </div>
              </div>
              <div className="bullet-item">
                <RefreshCw className="bullet-icon animate-spin" size={20} style={{ animationDuration: '6s' }} />
                <div>
                  <h4>Automated Workflows</h4>
                  <p>Eliminate manual data entries and bottleneck triggers.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary">
              Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Partner With Us</span>
            <h2 className="section-title">Engineered For Performance</h2>
            <p className="section-desc">We replace standard slides with robust operations infrastructure and scalable systems.</p>
          </div>

          <div className="why-grid">
            <div className="why-card glass-card">
              <Zap className="why-icon" />
              <h3>High Speed Integrations</h3>
              <p>Deploy custom CRM bridges, API structures, and automated databases in days, not months.</p>
            </div>
            <div className="why-card glass-card">
              <Users className="why-icon" />
              <h3>Experienced Advisory</h3>
              <p>Work directly with ex-Stripe engineers, McKinsey consultants, and creative designers.</p>
            </div>
            <div className="why-card glass-card">
              <TrendingUp className="why-icon" />
              <h3>Quantifiable Impact</h3>
              <p>We measure success in hours saved, revenue pipeline gains, and server costs reduced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Execution Pipeline</span>
            <h2 className="section-title">Our Roadmap To Success</h2>
            <p className="section-desc">A structured, four-phase milestone process designed to deliver quality results from day one.</p>
          </div>

          <div className="process-timeline">
            {[
              { step: "01", title: "Diagnostic Audit", desc: "We review your databases, API layers, and structural workflows to locate growth bottlenecks." },
              { step: "02", title: "Architecture Blueprint", desc: "Our team designs custom prototypes, server mapping schemas, and campaign funnels." },
              { step: "03", title: "Execution Sprint", desc: "We deploy secure code, launch marketing nodes, and build cloud server pipelines." },
              { step: "04", title: "Handshake & Optimization", desc: "We onboard your staff, implement automated reporting tools, and hand over source code." }
            ].map((p, index) => (
              <motion.div
                className="process-card glass-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="process-step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="cta-banner section-padding">
        <div className="container">
          <div className="cta-banner-content glass-card">
            <h2>Ready to Transform Your Operations?</h2>
            <p>Talk directly with our technical architects and draft custom solution maps for your scale.</p>
            <Link to="/contact" className="btn btn-accent">
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

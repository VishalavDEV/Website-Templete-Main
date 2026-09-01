import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Download, Send, CheckCircle2, Terminal } from 'lucide-react';

export default function Hero({ profileData }) {
  const profile = profileData || {
    name: "Marcus Sterling",
    title: "Full Stack Developer & AI Engineer",
    tagline: "Architecting high-performance web systems and intelligent interactive experiences.",
    status: "AVAILABLE FOR NEW OPPORTUNITIES"
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '80px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="section-container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#10B981',
              padding: '6px 14px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} className="pulse-glow" />
              {profile.status}
            </div>

            <h1 style={{ fontSize: '48px', fontWeight: 900, lineHeight: '1.1', color: 'var(--text-main)', letterSpacing: '-1px', marginBottom: '16px' }}>
              Building Modern <span style={{ color: 'var(--royal-blue)' }}>Web Systems</span> & <span style={{ color: 'var(--bright-orange)' }}>AI Microservices</span>
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
              Hello! I'm <strong>{profile.name}</strong>, a Senior Full Stack Engineer specializing in reactive React.js single-page applications and high-concurrency Java 21 Spring Boot REST APIs.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn-secondary">
                <Send size={16} /> Get In Touch
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{ marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <div>
                <span style={{ fontSize: '24px', fontWeight: 900, color: 'var(--royal-blue)' }}>12+</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Projects Delivered</span>
              </div>
              <div>
                <span style={{ fontSize: '24px', fontWeight: 900, color: 'var(--bright-orange)' }}>15+</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Tech Stack Mastery</span>
              </div>
              <div>
                <span style={{ fontSize: '24px', fontWeight: 900, color: '#10B981' }}>4+ Yrs</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Engineering Depth</span>
              </div>
            </div>
          </motion.div>

          {/* Right Animated Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="website-card"
            style={{
              padding: '28px',
              background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--soft-gray) 100%)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={20} color="#2563EB" />
                <span style={{ fontSize: '14px', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>marcus-stack.config</span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.12)', padding: '3px 8px', borderRadius: '4px' }}>
                ONLINE
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.8', color: 'var(--text-main)' }}>
              <p><span style={{ color: 'var(--royal-blue)' }}>const</span> <span style={{ color: 'var(--bright-orange)' }}>developer</span> = &#123;</p>
              <p style={{ paddingLeft: '16px' }}>name: <span style={{ color: '#10B981' }}>"{profile.name}"</span>,</p>
              <p style={{ paddingLeft: '16px' }}>role: <span style={{ color: '#10B981' }}>"Full Stack & AI Engineer"</span>,</p>
              <p style={{ paddingLeft: '16px' }}>frontend: [<span style={{ color: '#10B981' }}>"React.js"</span>, <span style={{ color: '#10B981' }}>"Framer Motion"</span>, <span style={{ color: '#10B981' }}>"GSAP"</span>],</p>
              <p style={{ paddingLeft: '16px' }}>backend: [<span style={{ color: '#10B981' }}>"Java 21"</span>, <span style={{ color: '#10B981' }}>"Spring Boot 3.3"</span>, <span style={{ color: '#10B981' }}>"REST API"</span>],</p>
              <p style={{ paddingLeft: '16px' }}>architecture: <span style={{ color: '#10B981' }}>"Microservices & Decoupled SPA"</span></p>
              <p>&#125;;</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

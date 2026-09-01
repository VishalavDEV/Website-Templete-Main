import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles, Brain, Compass, MapPin, Mail, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ profileData }) {
  const profile = profileData || {
    name: "Marcus Sterling",
    title: "Full Stack Developer & AI Engineer",
    location: "San Francisco, CA / Remote",
    email: "marcus.dev@portfolio.io",
    roles: ["CREATOR", "LEARNER", "DEVELOPER", "PROBLEM SOLVER"],
    bio: "I'm a passionate engineer crafting modern scalable web architectures, high-concurrency Spring Boot backend microservices, and reactive fluid user experiences in React."
  };

  const roleIcons = {
    "CREATOR": <Sparkles size={24} color="#F97316" />,
    "LEARNER": <Brain size={24} color="#2563EB" />,
    "DEVELOPER": <Code2 size={24} color="#10B981" />,
    "PROBLEM SOLVER": <Compass size={24} color="#8B5CF6" />
  };

  return (
    <section id="about" style={{ backgroundColor: 'var(--soft-gray)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">
            <User size={14} /> ABOUT ME
          </span>
          <h2 className="section-title">Who Am I & What I Architect</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Bridging complex backend logic with beautiful fluid frontend user interfaces.
          </p>
        </div>

        {/* Developer Archetype Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {profile.roles.map((role, idx) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="website-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '16px', fontWeight: 900, color: 'var(--text-main)' }}>{role}</span>
                {roleIcons[role]}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {role === "CREATOR" && "Designing aesthetic, reactive web interfaces and fluid UI animation systems."}
                {role === "LEARNER" && "Continuously expanding depth in Java 21, Spring Boot microservices, and AI models."}
                {role === "DEVELOPER" && "Writing clean, modular, scalable React code and decoupled REST APIs."}
                {role === "PROBLEM SOLVER" && "Optimizing end-to-end performance and latency bottleneck metrics."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bio Card */}
        <div className="website-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
            Engineering Philosophy & Experience
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
            {profile.bio}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ padding: '10px 16px', borderRadius: '8px', backgroundColor: 'var(--soft-gray)', fontSize: '13px', fontWeight: 600 }}>
              🔥 <strong>Current Focus:</strong> Spring Boot 3.3 REST Services & GSAP / Framer Motion Interfaces
            </div>
            <div style={{ padding: '10px 16px', borderRadius: '8px', backgroundColor: 'var(--soft-gray)', fontSize: '13px', fontWeight: 600 }}>
              🎯 <strong>Location:</strong> {profile.location}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

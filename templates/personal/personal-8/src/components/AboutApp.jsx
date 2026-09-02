import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles, Brain, Compass, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutApp({ profileData }) {
  const profile = profileData || {
    name: "Vishal Sharma",
    title: "Full Stack Developer & AI Engineer",
    tagline: "Architecting high-performance web systems and intelligent interactive experiences.",
    location: "San Francisco, CA / Remote",
    status: "AVAILABLE FOR NEW IDEAS",
    roles: ["CREATOR", "LEARNER", "DEVELOPER", "PROBLEM SOLVER"],
    bio: "I'm a passionate engineer crafting modern digital operating systems, high-concurrency Spring Boot backend microservices, and reactive fluid user experiences in React. I turn complex code into seamless interactive art."
  };

  const roleIcons = {
    "CREATOR": <Sparkles size={20} color="#F97316" />,
    "LEARNER": <Brain size={20} color="#2563EB" />,
    "DEVELOPER": <Code2 size={20} color="#10B981" />,
    "PROBLEM SOLVER": <Compass size={20} color="#8B5CF6" />
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Profile Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(249, 115, 22, 0.08) 100%)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Avatar Graphic */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '36px',
          fontWeight: 800,
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.25)',
          flexShrink: 0
        }}>
          VS
        </div>

        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)' }}>{profile.name}</h1>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              color: '#10B981',
              padding: '4px 12px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: 700
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} className="pulse-glow" />
              {profile.status}
            </span>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '8px' }}>
            {profile.title}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} color="#F97316" /> {profile.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={14} color="#2563EB" /> vishal.dev@os.portfolio
            </span>
          </div>
        </div>
      </div>

      {/* Developer Identity Cards */}
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          DEVELOPER IDENTITY ARCHETYPE
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
          {profile.roles.map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800, fontSize: '14px', color: 'var(--text-main)' }}>{role}</span>
                {roleIcons[role] || <CheckCircle2 size={18} color="#2563EB" />}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {role === "CREATOR" && "Designing aesthetic, reactive web interfaces and custom OS UX systems."}
                {role === "LEARNER" && "Continuously expanding depth in Java 21, Spring Boot microservices, and AI models."}
                {role === "DEVELOPER" && "Writing clean, modular, scalable React code and decoupled REST APIs."}
                {role === "PROBLEM SOLVER" && "Optimizing end-to-end performance and latency bottleneck metrics."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Biography Section */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
          WHO AM I?
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          {profile.bio}
        </p>

        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ padding: '10px 16px', borderRadius: '8px', backgroundColor: 'var(--soft-gray)', fontSize: '13px' }}>
            🔥 <strong>Current Focus:</strong> Spring Boot 3.3 REST Services & GSAP / Framer Motion Interfaces
          </div>
          <div style={{ padding: '10px 16px', borderRadius: '8px', backgroundColor: 'var(--soft-gray)', fontSize: '13px' }}>
            🎯 <strong>Interests:</strong> System Architecture, Distributed Systems, Interactive Graphics
          </div>
        </div>
      </div>
    </div>
  );
}

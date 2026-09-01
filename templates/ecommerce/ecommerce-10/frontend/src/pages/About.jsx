import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '800px', margin: '0 auto', minHeight: '80vh', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', color: '#1e133e', fontWeight: 800 }}>Our Story</h2>
        <p style={{ color: '#7c5cff', fontSize: '1rem', marginTop: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Lavender Fashion Universe
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          padding: '40px',
          borderRadius: '24px',
          backgroundColor: '#fff',
          border: '1px solid rgba(124, 92, 255, 0.12)',
          boxShadow: '0 8px 30px rgba(124, 92, 255, 0.03)',
          lineHeight: '1.7',
          color: '#5c4e8c',
        }}
        className="glass-card"
      >
        <p style={{ marginBottom: '20px' }}>
          Welcome to <strong>Lavender</strong>, a state-of-the-art e-commerce environment designed to make digital shopping tactile, playful, and animated. Founded in 2026, our mission has been to combine luxury, sustainability, and technological animation into a singular, fluid shopping journey.
        </p>
        <p>
          We believe that clothes are not just fabrics; they are the architectures of our character. Our Lavender universe houses collections custom-dyed in soothing light-purple palettes, sourced from organic and recycled threads, and designed to look premium and feel premium.
        </p>
      </motion.div>

      {/* Values Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {[
          { icon: <Sparkles size={24} />, title: 'Premium Aesthetics', desc: 'Crafted with clean glassmorphic details and animated visual elements.' },
          { icon: <Heart size={24} />, title: 'Eco Conscious', desc: 'Sourced responsibly, dyed sustainably using non-hazardous processes.' },
          { icon: <Award size={24} />, title: 'Fast Deliveries', desc: 'Simulated tracking loops that ensure packages reach within hours.' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '24px',
              borderRadius: '20px',
              backgroundColor: '#faf8ff',
              border: '1px solid rgba(124,92,255,0.05)',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#7c5cff', display: 'inline-block', marginBottom: '12px' }}>{item.icon}</div>
            <h4 style={{ fontFamily: 'Outfit', fontSize: '1.1rem', color: '#1e133e', marginBottom: '8px' }}>{item.title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#8a7db3' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

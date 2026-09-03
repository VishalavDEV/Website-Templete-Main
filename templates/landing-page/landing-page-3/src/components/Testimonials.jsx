import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Sparkles 
} from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Elena Rostova',
    role: 'VP of Autonomous Robotics',
    company: 'Vanguard Dynamics',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    content: 'Migrating our fleet of 2,400 autonomous logistics drones to Synapse decreased spatial SLAM computation latency from 85ms to 0.4ms. The spatial NeRF streaming is unparalleled.',
    rating: 5,
    metric: '94% Latency Reduction',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Chief AI Architect',
    company: 'Hyperion Cognition',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    content: 'The pooled NVLink memory architecture solved our multi-agent KV-cache sync problem completely. We now orchestrate over 500,000 parallel agents with zero cold starts.',
    rating: 5,
    metric: '4x Lower GPU Overhead',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Head of Infrastructure',
    company: 'OmniSpatial Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
    content: 'Synapse eliminated our reliance on 4 separate AWS GPU instances and complex Redis cache clusters. The developer experience, telemetry, and uptime reliability have blown us away.',
    rating: 5,
    metric: '99.999% Verified Uptime',
  },
  {
    id: 4,
    name: 'Alexei Voronov',
    role: 'Lead Neural Engineer',
    company: 'Aura Intelligence',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    content: 'Deploying our custom 70B vision transformer across 250 edge clusters took under 2 minutes. The auto-quantization preserved full model precision with unbelievable throughput.',
    rating: 5,
    metric: '180k Tokens/sec Stream',
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>GLOBAL TESTIMONIALS</span>
          </div>
          <h2 className="section-title">
            Validated by Pioneers in <br />
            <span className="text-gradient-neon">Frontier AI & Robotics</span>
          </h2>
          <p className="section-description">
            Read how engineering leaders worldwide rely on Synapse to power their mission-critical spatial AI and autonomous swarms.
          </p>
        </motion.div>

        {/* Testimonial Carousel Box */}
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div
            className="glass-panel-elevated"
            style={{
              padding: '48px 44px',
              borderRadius: '30px',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 28px 70px rgba(0, 0, 0, 0.65), 0 0 40px rgba(0, 229, 255, 0.12)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '330px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Quote Icon & Rating */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '26px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(0, 229, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-cyan)',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                }}
              >
                <Quote size={24} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={19} fill="#FF9E00" color="#FF9E00" />
                ))}
              </div>
            </div>

            {/* Testimonial Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.38rem)',
                    lineHeight: 1.6,
                    color: '#F8FAFC',
                    fontStyle: 'italic',
                    marginBottom: '30px',
                  }}
                >
                  "{current.content}"
                </p>

                {/* Author Card Info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img
                      src={current.avatar}
                      alt={current.name}
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: '2px solid var(--neon-cyan)',
                        objectFit: 'cover',
                        boxShadow: '0 0 15px rgba(0, 229, 255, 0.25)',
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '1.12rem', color: '#FFFFFF', fontWeight: 700 }}>{current.name}</h4>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        {current.role} • <span style={{ color: 'var(--neon-cyan)' }}>{current.company}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '6px 16px',
                      borderRadius: '100px',
                      background: 'rgba(0, 255, 163, 0.1)',
                      border: '1px solid rgba(0, 255, 163, 0.3)',
                      color: 'var(--neon-emerald)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                    }}
                  >
                    🚀 {current.metric}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Navigation Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '26px',
                marginTop: '30px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Pagination Dots */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(idx);
                    }}
                    style={{
                      width: currentIndex === idx ? '30px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: currentIndex === idx ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: currentIndex === idx ? '0 0 12px var(--neon-cyan)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handlePrev}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

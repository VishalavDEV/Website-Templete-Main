import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Compass, Heart } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0 }
};

// Custom count up Hook or helper inside component
function Counter({ endValue, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) {
      setCount(endValue); // Non-numeric
      return;
    }

    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const val = Math.floor((end * step) / totalSteps);
      setCount(val);
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, endValue, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Philosophical Roots
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          About Aurelia Haven
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          A heritage of clifftop slow living, zero-waste gastronomy, organic hot springs, and premium mindful hospitality.
        </p>
      </div>

      {/* Story split */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        marginBottom: '100px'
      }}>
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: '400', color: '#1e1e1e', margin: 0 }}>
            Rooted in Big Sur, California
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#555555', margin: 0 }}>
            Founded in 2011, Aurelia Haven was conceptualized as a physical extension of the rugged cliffs and whispering redwoods. Our master architects utilized solely local redwood columns, hand-chiseled granite, and thermal water pipelines to build a low-impact structural footprint.
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#555555', margin: 0 }}>
            Today, our zero-waste sustainability mission ensures that 100% of our energy is sourced via local sun/wind microgrids, and our soil-to-table farm program eliminates landfill trash, providing organic compost back to the resort farm.
          </p>
        </div>

        {/* Image */}
        <div style={{ overflow: 'hidden', aspectRatio: '4/3', border: '1px solid rgba(197, 168, 128, 0.15)' }}>
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
            alt="Resort landscape nature"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Statistics Counter Row */}
      <div style={{
        backgroundColor: '#111111',
        color: '#ffffff',
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        textAlign: 'center',
        marginBottom: '100px',
        border: '1px solid rgba(197, 168, 128, 0.25)'
      }}>
        <div>
          <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#c5a880', fontWeight: '400', marginBottom: '8px' }}>
            <Counter endValue="25" suffix="+" />
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#a3a3a3' }}>Curated Experiences</span>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#c5a880', fontWeight: '400', marginBottom: '8px' }}>
            <Counter endValue="50" suffix="+" />
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#a3a3a3' }}>Sanctuary Suites</span>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#c5a880', fontWeight: '400', marginBottom: '8px' }}>
            <Counter endValue="15" suffix="+" />
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#a3a3a3' }}>Years of Hospitality</span>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#c5a880', fontWeight: '400', marginBottom: '8px' }}>
            <Counter endValue="100" suffix="%" />
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#a3a3a3' }}>Nature Inspired</span>
        </div>
      </div>

      {/* Pillars of hospitality */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Leaf size={24} style={{ color: '#c5a880', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: '0 0 10px 0', color: '#1e1e1e' }}>Zero-Waste Gastronomy</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666666', margin: 0 }}>
              All dining scrap compost is recycled to nurture our botanical gardens and local community farms.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Award size={24} style={{ color: '#c5a880', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: '0 0 10px 0', color: '#1e1e1e' }}>Bespoke Craftsmanship</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666666', margin: 0 }}>
              Resort furniture is hand-crafted locally from salvaged fallen coastal redwoods.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Compass size={24} style={{ color: '#c5a880', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: '0 0 10px 0', color: '#1e1e1e' }}>Low Impact Architecture</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666666', margin: 0 }}>
              Our buildings use high-efficiency structural double-glazing, reducing thermal loss naturally.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

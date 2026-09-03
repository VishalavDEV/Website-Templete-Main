import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe2, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

function CounterItem({ target, suffix = '', prefix = '', decimals = 0, label, subtext, icon: Icon, color, inView }) {
  const count = useCountUp(target, 2200, inView, decimals);

  return (
    <div
      className="glass-panel"
      style={{
        padding: '36px 26px',
        borderRadius: '26px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '18px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: `1px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          marginBottom: '22px',
          boxShadow: `0 0 24px ${color}33`,
        }}
      >
        <Icon size={28} />
      </div>

      <div
        style={{
          fontSize: 'clamp(2.5rem, 4.2vw, 3.6rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.035em',
          color: '#FFFFFF',
          lineHeight: 1,
          marginBottom: '12px',
        }}
      >
        <span>{prefix}</span>
        <span style={{ color: color }}>{count}</span>
        <span>{suffix}</span>
      </div>

      <h4 style={{ fontSize: '1.08rem', color: '#FFFFFF', marginBottom: '6px' }}>{label}</h4>
      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{subtext}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{ marginBottom: '48px' }}
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>GLOBAL FOOTPRINT & SCALE</span>
          </div>
          <h2 className="section-title">
            Powering Mission-Critical AI <br />
            <span className="text-gradient-cyan">at Planetary Scale</span>
          </h2>
        </motion.div>

        {/* 4 Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '26px',
          }}
        >
          <CounterItem
            target={0.42}
            decimals={2}
            suffix=" ms"
            label="Ultra-Low Global Latency"
            subtext="Sub-millisecond matrix execution"
            icon={Zap}
            color="#00E5FF"
            inView={isInView}
          />
          <CounterItem
            target={99.999}
            decimals={3}
            suffix="%"
            label="Guaranteed Uptime SLA"
            subtext="Multi-region auto-healing fabric"
            icon={ShieldCheck}
            color="#00FFA3"
            inView={isInView}
          />
          <CounterItem
            target={14.8}
            decimals={1}
            suffix="M+"
            label="Active Agent Swarms"
            subtext="Coordinated concurrently daily"
            icon={Activity}
            color="#8A2BE2"
            inView={isInView}
          />
          <CounterItem
            target={250}
            decimals={0}
            suffix="+"
            label="Global Edge Clusters"
            subtext="Across 6 continents & 42 countries"
            icon={Globe2}
            color="#FF9E00"
            inView={isInView}
          />
        </div>
      </div>
    </section>
  );
}

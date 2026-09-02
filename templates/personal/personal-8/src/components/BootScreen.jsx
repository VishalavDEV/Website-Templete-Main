import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, ArrowRight, Monitor } from 'lucide-react';

const BOOT_STEPS = [
  "Initializing Kernel Subsystems...",
  "Loading Profile ........ OK",
  "Loading Skills ......... OK",
  "Loading Projects ...... OK",
  "Loading Experience .... OK",
  "Loading Creativity .... OK",
  "Compiling REST Services .. OK"
];

export default function BootScreen({ onEnterDesktop }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    if (currentStepIndex < BOOT_STEPS.length) {
      const timer = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setBootComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0F172A',
        color: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        fontFamily: "'JetBrains Mono', monospace",
        padding: '24px'
      }}
    >
      {/* Abstract Background Glows */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(0,0,0,0) 70%)',
        top: '20%',
        left: '25%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0) 70%)',
        bottom: '20%',
        right: '25%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      {/* Terminal Card Container */}
      <div style={{
        width: '100%',
        maxWidth: '620px',
        backgroundColor: 'rgba(30, 41, 59, 0.85)',
        border: '1px solid rgba(51, 65, 85, 0.8)',
        borderRadius: '16px',
        boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)'
      }}>
        {/* Terminal Title Bar */}
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          padding: '12px 18px',
          borderBottom: '1px solid rgba(51, 65, 85, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
            <span style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '8px', fontWeight: 600 }}>
              bash — vishal-os-boot
            </span>
          </div>
          <Terminal size={16} color="#64748B" />
        </div>

        {/* Boot Logs */}
        <div style={{ padding: '24px', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <motion.h1 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ 
                fontSize: '28px', 
                fontWeight: 800, 
                letterSpacing: '2px', 
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '4px'
              }}
            >
              <Monitor size={28} color="#F97316" /> VISHAL OS
            </motion.h1>
            <p style={{ color: '#94A3B8', fontSize: '13px', marginBottom: '20px' }}>
              Starting Personal Operating System v3.0 [Java Spring REST + React API Engine]
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              {BOOT_STEPS.slice(0, currentStepIndex).map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <span style={{ color: '#3B82F6' }}>›</span>
                  <span style={{ color: step.includes('OK') ? '#E2E8F0' : '#94A3B8' }}>{step}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Ready Banner & Enter Button */}
          {bootComplete && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(51, 65, 85, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 600, fontSize: '14px' }}>
                <ShieldCheck size={20} />
                <span>SYSTEM READY</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnterDesktop}
                style={{
                  backgroundColor: '#F97316',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <span>ENTER DESKTOP</span>
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      <p style={{ marginTop: '20px', fontSize: '12px', color: '#64748B' }}>
        Designed for Interactive Exploration & Pair Programming
      </p>
    </motion.div>
  );
}

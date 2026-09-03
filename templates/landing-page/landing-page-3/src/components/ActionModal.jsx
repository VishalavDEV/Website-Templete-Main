import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Copy, CheckCircle2, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ActionModal({ isOpen, onClose, title = 'Launch Neural Cluster', onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(false);
  const [apiKey] = useState(`syn_live_${Math.random().toString(36).substring(2, 15)}_${Date.now().toString(36)}`);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
    if (onShowToast) onShowToast('📋 API Key copied to clipboard!');
  };

  const handleQuickDeploy = () => {
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#8A2BE2', '#00FFA3']
    });
    if (onShowToast) onShowToast('⚡ Node spun up successfully on US-East-1 Edge!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(3, 4, 8, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel-elevated"
          style={{
            maxWidth: '560px',
            width: '100%',
            padding: '38px',
            border: '1px solid rgba(0, 229, 255, 0.45)',
            boxShadow: '0 28px 85px rgba(0, 0, 0, 0.85), 0 0 50px rgba(0, 229, 255, 0.25)',
            position: 'relative',
            borderRadius: '28px',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'rgba(0, 229, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--neon-cyan)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF' }}>{title}</h3>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
            Your ephemeral developer cluster has been reserved with <strong>₹25,000 in free compute credits</strong>. Initialize your session using the CLI or SDK below.
          </p>

          {/* Simulated API Key Box */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span>PROVISIONED DEVELOPER API KEY</span>
              <span>EPHEMERAL</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '13px 16px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.55)',
                border: '1px solid rgba(0, 229, 255, 0.35)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--neon-cyan)',
              }}
            >
              <span>{apiKey}</span>
              <button
                onClick={handleCopyKey}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: copiedKey ? 'var(--neon-emerald)' : '#FFFFFF',
                  fontSize: '0.78rem',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {copiedKey ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                <span>{copiedKey ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick CLI snippet */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
              QUICK TERMINAL INSTALLATION
            </div>
            <pre
              style={{
                padding: '13px 16px',
                borderRadius: '12px',
                background: '#040508',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#A5B4FC',
                overflowX: 'auto',
              }}
            >
              <code>npx @synapse/cli init --key {apiKey.substring(0, 16)}...</code>
            </pre>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleQuickDeploy}
              className="btn-primary"
              style={{ flex: 1, padding: '14px', borderRadius: '12px' }}
            >
              <Zap size={16} />
              <span>Launch Studio Console</span>
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '14px 22px', borderRadius: '12px' }}
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

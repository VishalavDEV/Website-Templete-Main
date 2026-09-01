import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ type, isOpen, onClose }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy & Data Telemetry Policy' : 'Terms of Editorial Service';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      backgroundColor: 'rgba(16, 14, 24, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.25s var(--ease-out-expo)'
    }}>
      <div style={{
        backgroundColor: 'var(--surface-color-solid)',
        border: '1px solid var(--border-strong)',
        borderRadius: '16px',
        maxWidth: '680px', width: '100%',
        maxHeight: '85vh', overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 40px var(--accent-cyan-glow)',
        padding: '2.5rem 2rem',
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            padding: '0.45rem', borderRadius: '50%', color: 'var(--text-muted)',
            backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          className="hover-text-cyan hover-border-cyan"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {isPrivacy ? <ShieldCheck size={24} style={{ color: 'var(--accent-cyan)' }} /> : <FileText size={24} style={{ color: 'var(--accent-cyan)' }} />}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>
            {title}
          </h2>
        </div>

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {isPrivacy ? (
            <>
              <p><strong>1. Zero-Tracking Architecture:</strong> Future Intelligence operates primarily client-side. We do not sell your telemetry, reading habits, or search query logs to third-party ad networks.</p>
              <p><strong>2. Local Persistence:</strong> Bookmarked articles, custom reading preferences, and notification toggles are stored securely within your browser's encrypted localStorage sandbox.</p>
              <p><strong>3. Dispatch Communications:</strong> When you subscribe to our digital magazine releases, your email address is exclusively utilized for our weekly technical dispatches and breaking frontier updates.</p>
              <p><strong>4. Cookie Policy:</strong> Only functional session tokens necessary to preserve reading progress and modal states are retained.</p>
            </>
          ) : (
            <>
              <p><strong>1. Editorial Independence:</strong> All foundation model rankings, tool ratings, and frontier technical evaluations are produced autonomously by the Future Intelligence editorial team without vendor compensation bias.</p>
              <p><strong>2. Intellectual Property:</strong> Original research teardowns, synthetic dataset visualizations, and interactive scrollytelling timelines are copyright &copy; {new Date().getFullYear()} Future Intelligence.</p>
              <p><strong>3. Prototype Notice:</strong> This platform is an advanced frontend showcase prototype built with realistic local state architecture and interactive interfaces.</p>
            </>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button onClick={onClose} className="btn-cyan" style={{ padding: '0.55rem 1.5rem', fontSize: '0.85rem' }}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

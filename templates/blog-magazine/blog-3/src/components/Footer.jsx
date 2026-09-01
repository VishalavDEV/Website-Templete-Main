import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import config from '../data/site-config.json';

export default function Footer({ onOpenSubscribe, onOpenLegal }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      marginTop: '8rem',
      background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.02))',
    }}>
      <div className="container" style={{ padding: '5rem 2.5rem 2rem' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '6px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 800, color: 'var(--bg-color)',
              }}>FI</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700 }}>{config.name}</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {config.tagline}
            </p>
            <button
              onClick={onOpenSubscribe}
              className="btn-outline"
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.85rem' }}
            >
              Subscribe Newsletter
            </button>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-xs" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Sections</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link to="/latest" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Latest Stories</Link>
              <Link to="/category/ai" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Artificial Intelligence</Link>
              <Link to="/category/future-tech" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Future Tech & Robotics</Link>
              <Link to="/interactive/rise-of-intelligence" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Interactive Timeline</Link>
            </div>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-xs" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Directory</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link to="/tools" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AI Tools Registry</Link>
              <Link to="/models" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Foundation Models</Link>
              <Link to="/companies" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Companies & Labs</Link>
              <Link to="/rankings" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AI 100 Rankings</Link>
            </div>
          </div>

          {/* Magazine */}
          <div>
            <h4 className="text-xs" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Magazine</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link to="/magazine" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Digital Issues Archive</Link>
              <Link to="/search" className="hover-text-cyan" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Search Full Database</Link>
              <button
                onClick={onOpenSubscribe}
                style={{ textAlign: 'left', fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                className="hover-text-cyan"
              >
                Join Pro Membership &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} {config.name}. Built with full interactive state architecture.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              onClick={() => onOpenLegal('privacy')}
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              className="hover-text-cyan"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              className="hover-text-cyan"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

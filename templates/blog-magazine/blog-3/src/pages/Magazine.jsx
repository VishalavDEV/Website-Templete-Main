import { useState, useEffect } from 'react';
import { mockStore } from '../lib/mockStore';
import { BookOpen, Check, Send, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Magazine() {
  const [issues, setIssues] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribeState, setSubscribeState] = useState('idle');
  const [activeIssue, setActiveIssue] = useState(null);
  const [readerPage, setReaderPage] = useState(0);

  useEffect(() => {
    async function load() {
      const data = await mockStore.getIssues();
      setIssues(data);
    }
    load();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeState('loading');
    try {
      await mockStore.subscribe(email);
      setSubscribeState('success');
      setEmail('');
      setTimeout(() => setSubscribeState('idle'), 4000);
    } catch (err) {
      setSubscribeState('error');
    }
  };

  const sampleArticles = [
    { title: "The Embodiment Threshold", author: "Dr. Sarah Chen", page: 1, readTime: "8 min" },
    { title: "Synthetic Senses in Robotics", author: "Elena Rostova", page: 2, readTime: "6 min" },
    { title: "Quantum Decoherence Frontiers", author: "James Maxwell", page: 3, readTime: "12 min" },
    { title: "The Neuro-Silicon Bridge", author: "Marcus Wei", page: 4, readTime: "9 min" }
  ];

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Issues List */}
        <div style={{ flex: '1 1 65%' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <BookOpen size={22} style={{ color: 'var(--accent-cyan)' }} />
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
                Digital Magazine Archive
              </h1>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Bi-monthly digital issues exploring frontier intelligence, quantum systems, and human-machine coexistence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {issues.map(issue => (
              <div 
                key={issue.id} 
                className="card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: '2rem', 
                  padding: '2rem',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ width: '160px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
                  <img src={issue.cover} alt={issue.title} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1, minWidth: '240px' }}>
                  {issue.isLatest && (
                    <span className="badge animate-pulse-glow" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
                      Current Issue
                    </span>
                  )}
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {issue.title}
                  </h2>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1rem', fontWeight: 500 }}>
                    {issue.date}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '0.75rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    "{issue.editorNote}"
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      className="btn-cyan" 
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
                      onClick={() => { setActiveIssue(issue); setReaderPage(0); }}
                    >
                      Read Issue
                    </button>
                    <button 
                      className="btn-outline" 
                      style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}
                      onClick={() => alert(`Table of Contents for ${issue.title} downloaded.`)}
                    >
                      TOC Index
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Sidebar */}
        <div style={{ flex: '1 1 35%' }}>
          <div style={{ 
            position: 'sticky', 
            top: '7rem', 
            padding: '2rem', 
            borderRadius: '16px', 
            background: 'var(--surface-color)', 
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <span className="badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Weekly Dispatch</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Subscribe to Future Intelligence
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Receive our complete editorial digital releases, research teardowns, and model rankings directly in your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                disabled={subscribeState === 'loading'}
                className="btn-primary" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Send size={15} />
                {subscribeState === 'loading' ? 'Authenticating...' : 'Join Newsletter'}
              </button>
              
              {subscribeState === 'success' && (
                <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  <Check size={16} /> Subscribed successfully! Check your inbox.
                </div>
              )}
              {subscribeState === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  Unable to subscribe. Please verify your email format.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* Interactive Issue Reader Modal */}
      {activeIssue && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(16, 14, 24, 0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            background: 'var(--surface-color-solid)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 25px 80px rgba(0,0,0,0.8)'
          }}>
            <button 
              onClick={() => setActiveIssue(null)} 
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-muted)' }}
              className="hover-text-cyan"
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', pb: '1.5rem' }}>
              <img src={activeIssue.cover} alt={activeIssue.title} style={{ width: '80px', aspectRatio: '3/4', borderRadius: '6px' }} />
              <div>
                <span className="badge">{activeIssue.date}</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, marginTop: '0.25rem' }}>
                  {activeIssue.title}
                </h2>
              </div>
            </div>

            {/* Reader Content Pages */}
            <div style={{ minHeight: '260px', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Featured Story {readerPage + 1} of {sampleArticles.length}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {sampleArticles[readerPage].title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                By {sampleArticles[readerPage].author} &middot; {sampleArticles[readerPage].readTime}
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                In this exclusive edition report, we examine how physical embodiment and foundational spatial representations are reshaping real-time autonomous systems across critical infrastructure and aerospace engineering.
              </p>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <button 
                className="btn-outline" 
                disabled={readerPage === 0}
                onClick={() => setReaderPage(p => Math.max(0, p - 1))}
                style={{ opacity: readerPage === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Page {readerPage + 1} / {sampleArticles.length}
              </span>

              <button 
                className="btn-outline" 
                disabled={readerPage === sampleArticles.length - 1}
                onClick={() => setReaderPage(p => Math.min(sampleArticles.length - 1, p + 1))}
                style={{ opacity: readerPage === sampleArticles.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

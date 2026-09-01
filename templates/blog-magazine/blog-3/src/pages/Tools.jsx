import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { Zap, ExternalLink, Search, Check, Sparkles } from 'lucide-react';

export default function Tools({ onOpenTool }) {
  const { id } = useParams();
  const [tools, setTools] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function load() { 
      const data = await mockStore.getTools();
      setTools(data);
      if (id) {
        const target = data.find(t => t.id === id);
        if (target && onOpenTool) onOpenTool(target);
      }
    }
    load();
  }, [id, onOpenTool]);

  const categories = ['All', ...new Set(tools.map(t => t.category))];
  const filtered = tools.filter(t => {
    const matchCat = filter === 'All' || t.category === filter;
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (t.tagline && t.tagline.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Zap size={22} style={{ color: 'var(--accent-cyan)' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            AI Tools & Systems Directory
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '580px' }}>
          A curated registry of state-of-the-art tools, development environments, generative synthesis engines, and autonomous software agents.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
        padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn-outline ${filter === cat ? 'active' : ''}`}
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.85rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search tools or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.5rem 1rem 0.5rem 2.25rem',
              fontSize: '0.85rem',
              borderRadius: '6px',
              width: '100%'
            }}
          />
        </div>
      </div>

      {/* Grid of Tools */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((tool, i) => (
          <div
            key={tool.id}
            onClick={() => onOpenTool && onOpenTool(tool)}
            className="card"
            style={{
              display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer',
              animation: `fadeInUp ${0.2 + i * 0.05}s var(--ease-out-expo) forwards`, opacity: 0,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(139,92,246,0.08))',
                  border: '1px solid rgba(0,229,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem',
                  color: 'var(--accent-cyan)',
                }}>{tool.name.charAt(0)}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600 }}>{tool.name}</h3>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{tool.category} &middot; {tool.developer}</span>
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800,
                color: tool.score >= 95 ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              }}>{tool.score}</div>
            </div>
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', flex: 1, lineHeight: '1.6' }}>
              {tool.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="badge" style={{
                  background: tool.status === 'Trending' ? 'rgba(0,229,255,0.1)' : tool.status === 'Rising' ? 'rgba(139,92,246,0.1)' : 'rgba(255,255,255,0.04)',
                  borderColor: tool.status === 'Trending' ? 'rgba(0,229,255,0.2)' : tool.status === 'Rising' ? 'rgba(139,92,246,0.2)' : 'var(--border-color)',
                  color: tool.status === 'Trending' ? 'var(--accent-cyan)' : tool.status === 'Rising' ? 'var(--accent-violet)' : 'var(--text-muted)',
                }}>{tool.status}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{tool.pricing}</span>
              </div>
              <button 
                className="btn-outline" 
                style={{ padding: '0.3rem 0.65rem', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenTool) onOpenTool(tool);
                }}
              >
                Inspect <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

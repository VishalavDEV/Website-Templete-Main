import { useState, useEffect } from 'react';
import { mockStore } from '../lib/mockStore';
import { TrendingUp, ArrowUpDown, ArrowUpRight } from 'lucide-react';

export default function Rankings({ onOpenCompany }) {
  const [rankings, setRankings] = useState([]);
  const [sort, setSort] = useState('impactScore');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    async function load() { 
      const data = await mockStore.getRankings();
      setRankings(data); 
    }
    load();
  }, []);

  const categories = ['All', ...new Set(rankings.map(r => r.category))];
  const filtered = categoryFilter === 'All' ? rankings : rankings.filter(r => r.category === categoryFilter);
  const sorted = [...filtered].sort((a, b) => b[sort] - a[sort]);

  const sortOptions = [
    { key: 'impactScore', label: 'Impact' },
    { key: 'innovationScore', label: 'Innovation' },
    { key: 'momentumScore', label: 'Momentum' },
  ];

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <TrendingUp size={22} style={{ color: 'var(--accent-cyan)' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            AI 100 Power Rankings
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '580px' }}>
          The definitive ranking of labs, model creators, and hardware powerhouses based on technical impact, architectural breakthroughs, and deployment momentum.
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategoryFilter(cat)}
              className={`btn-outline ${categoryFilter === cat ? 'active' : ''}`}
              style={{ fontSize: '0.75rem' }}>
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sort by:</span>
          {sortOptions.map(opt => (
            <button key={opt.key} onClick={() => setSort(opt.key)}
              className={`btn-outline ${sort === opt.key ? 'active' : ''}`}
              style={{ fontSize: '0.72rem', padding: '0.4rem 0.85rem' }}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rankings List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {sorted.map((r, i) => (
          <div 
            key={r.entity} 
            className="card" 
            style={{
              padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              animation: `fadeInUp ${0.15 + i * 0.04}s var(--ease-out-expo) forwards`, opacity: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800,
                width: '3rem', textAlign: 'center',
                background: i === 0 ? 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-blue))' : 'none',
                WebkitBackgroundClip: i === 0 ? 'text' : undefined,
                WebkitTextFillColor: i === 0 ? 'transparent' : undefined,
                color: i < 3 ? 'var(--text-secondary)' : 'var(--text-muted)',
              }}>{i + 1}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>{r.entity}</h3>
                  <span className="badge" style={{ fontSize: '0.55rem' }}>{r.category}</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {r.highlights || `${r.type} · Valuation ${r.valuation}`}
                </p>
              </div>
            </div>

            <div className="desktop-only" style={{ display: 'flex', gap: '2.5rem', textAlign: 'center', alignItems: 'center' }}>
              {[{ label: 'Innovation', value: r.innovationScore, isActive: sort === 'innovationScore' },
                { label: 'Impact', value: r.impactScore, isActive: sort === 'impactScore' },
                { label: 'Momentum', value: r.momentumScore, isActive: sort === 'momentumScore' }
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700,
                    color: s.isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

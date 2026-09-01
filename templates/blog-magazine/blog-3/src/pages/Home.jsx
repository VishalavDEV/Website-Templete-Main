import HeroSequence from '../components/HeroSequence';
import { mockStore } from '../lib/mockStore';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu, Building2, TrendingUp, BookOpen, Send, Sparkles, Check, ExternalLink } from 'lucide-react';

export default function Home({ onOpenSubscribe, onOpenTool, onOpenModel, onOpenCompany }) {
  const [articles, setArticles] = useState([]);
  const [tools, setTools] = useState([]);
  const [models, setModels] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [issues, setIssues] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    async function loadData() {
      const [aData, tData, mData, rData, iData] = await Promise.all([
        mockStore.getArticles(),
        mockStore.getTools(),
        mockStore.getModels(),
        mockStore.getRankings(),
        mockStore.getIssues(),
      ]);
      setArticles(aData);
      setTools(tData);
      setModels(mData);
      setRankings(rData.slice(0, 6));
      setIssues(iData);
    }
    loadData();
  }, []);

  const leadArticle = articles.find(a => a.isLead) || articles[0];
  const featuredArticles = articles.filter(a => a.isFeatured && a.id !== leadArticle?.id).slice(0, 3);
  const latestArticles = articles.filter(a => a.id !== leadArticle?.id && !featuredArticles.some(f => f.id === a.id)).slice(0, 4);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await mockStore.subscribe(email || 'reader@futureintelligence.io');
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      if (onOpenSubscribe) onOpenSubscribe();
    }
  };

  return (
    <div>
      <HeroSequence />
      
      <div className="container">
        {/* ─── LEAD STORY ─── */}
        {leadArticle && (
          <section style={{ marginBottom: '6rem' }}>
            <div className="section-header">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Lead Story</span>
              <Link to="/latest" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                All Stories <ArrowRight size={14} />
              </Link>
            </div>
            <Link to={`/article/${leadArticle.slug}`} className="group" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center',
            }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10' }}>
                <img src={leadArticle.image} alt={leadArticle.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-out-expo)',
                }} className="group-hover-scale-105" />
              </div>
              <div>
                <span className="badge" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>{leadArticle.category}</span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 600, lineHeight: 1.1, marginBottom: '1rem',
                  transition: 'color 0.3s ease',
                }} className="hover-text-cyan">{leadArticle.title}</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {leadArticle.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{leadArticle.author}</span>
                  <span>&middot;</span>
                  <span>{leadArticle.readingTime}</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ─── FEATURED STORIES ─── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Frontier Stories</span>
            <Link to="/latest" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
              Browse Archive <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {featuredArticles.map((article, i) => (
              <Link to={`/article/${article.slug}`} key={article.id} className="card group" style={{
                padding: 0, display: 'flex', flexDirection: 'column',
                animation: `fadeInUp ${0.3 + i * 0.08}s var(--ease-out-expo) forwards`,
                opacity: 0,
              }}>
                <div style={{ height: '220px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img src={article.image} alt={article.title} className="group-hover-scale-105" style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.7s var(--ease-out-expo)',
                  }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span className="badge" style={{ marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{article.category}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 500,
                    lineHeight: 1.25, marginBottom: '0.75rem',
                  }}>{article.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
                    {article.excerpt.substring(0, 120)}...
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                    <span>{article.author}</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── LATEST FEED ─── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Latest Dispatches</span>
            <Link to="/latest" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
              View All Dispatches <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {latestArticles.map((article) => (
              <Link to={`/article/${article.slug}`} key={article.id} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                padding: '1.5rem 0', borderBottom: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
              }} className="group">
                <div style={{ width: '110px', height: '75px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 600 }}>{article.category}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{article.date}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.3 }} className="hover-text-cyan">{article.title}</h4>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </section>

        {/* ─── TOOLS + MODELS TWO-COLUMN WITH INTERACTIVE INSPECTION ─── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
          {/* Tools */}
          <section>
            <div className="section-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Trending AI Tools</span>
              </div>
              <Link to="/tools" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                Registry <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {tools.slice(0, 4).map((tool, i) => (
                <div
                  key={tool.id}
                  onClick={() => onOpenTool && onOpenTool(tool)}
                  className="card"
                  style={{
                    padding: '1.15rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '8px',
                      background: 'rgba(0, 229, 255, 0.08)', border: '1px solid rgba(0, 229, 255, 0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)',
                    }}>#{i + 1}</div>
                    <div>
                      <h4 style={{ fontWeight: 600, fontSize: '0.98rem' }}>{tool.name}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{tool.tagline || tool.description}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div className="badge">{tool.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Models */}
          <section>
            <div className="section-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={14} style={{ color: 'var(--accent-violet)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Foundation Models</span>
              </div>
              <Link to="/models" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                All Models <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {models.slice(0, 4).map(model => (
                <div
                  key={model.id}
                  onClick={() => onOpenModel && onOpenModel(model)}
                  className="card"
                  style={{
                    padding: '1.15rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: '0.15rem' }}>{model.name}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{model.developer} &middot; {model.modality}</p>
                  </div>
                  <span className="badge badge-violet">{model.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ─── RANKINGS PREVIEW ─── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>AI 100 Rankings</span>
            </div>
            <Link to="/rankings" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
              Full Index <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {rankings.map((r, i) => (
              <div 
                key={r.entity} 
                className="card" 
                style={{
                  padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700,
                    color: i === 0 ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    width: '2.5rem', textAlign: 'center',
                  }}>{i + 1}</span>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>{r.entity}</h4>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>{r.category}</span>
                  </div>
                </div>
                <div className="desktop-only" style={{ display: 'flex', gap: '2.5rem', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600 }}>{r.innovationScore}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Innovation</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600 }}>{r.impactScore}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Impact</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600 }}>{r.momentumScore}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Momentum</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MAGAZINE SHOWCASE ─── */}
        {issues[0] && (
          <section style={{ marginBottom: '6rem' }}>
            <div className="section-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Latest Digital Issue</span>
              </div>
              <Link to="/magazine" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                All Issues <ArrowRight size={14} />
              </Link>
            </div>
            <div className="card" style={{
              padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.04), rgba(139, 92, 246, 0.04))',
            }}>
              <div style={{ width: '180px', flexShrink: 0 }}>
                <img src={issues[0].cover} alt={issues[0].title} style={{
                  width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }} />
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <span className="badge animate-pulse-glow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>{issues[0].number}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{issues[0].title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{issues[0].date} &middot; {issues[0].pageCount}</p>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', fontStyle: 'italic', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  "{issues[0].editorNote}"
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link to="/magazine" className="btn-cyan">Read Digital Edition</Link>
                  <button onClick={onOpenSubscribe} className="btn-outline">Download PDF</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── NEWSLETTER CTA ─── */}
        <section style={{
          marginBottom: '6rem', textAlign: 'center',
          padding: '5rem 2rem', borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.04), rgba(139, 92, 246, 0.04))',
          border: '1px solid var(--border-color)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="text-xs" style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Frontier Dispatch</p>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 700, marginBottom: '1rem', maxWidth: '550px', margin: '0 auto 1rem',
            }}>Understand the technology shaping tomorrow.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '460px', margin: '0 auto 2.5rem' }}>
              Weekly briefings on agentic models, robotics, and future computing, curated without hype.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} style={{
                display: 'flex', gap: '0.75rem', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap'
              }}>
                <input type="email" placeholder="Enter your email..." value={email}
                  onChange={e => setEmail(e.target.value)} required
                  style={{
                    flex: '1 1 240px', padding: '0.85rem 1rem', background: 'var(--surface-color-solid)',
                    border: '1px solid var(--border-color)', borderRadius: '8px',
                    color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                  }} />
                <button type="submit" className="btn-cyan" style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                  <Send size={16} /> Subscribe
                </button>
              </form>
            ) : (
              <div className="animate-fade-in" style={{ color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Check size={18} /> You're subscribed to Future Intelligence. Check your inbox.
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}

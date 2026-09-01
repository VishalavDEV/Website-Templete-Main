import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { dataStore } from '../services/dataStore';
import { Search, Clock, ArrowRight, X } from 'lucide-react';

export const BlogView: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogs = dataStore.getBlogs();

  const filteredBlogs = blogs.filter(post => {
    const matchesCategory = category === 'All' || post.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '3rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Health Knowledge Platform</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Medical Insights & Patient Guides
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>
            Evidence-based medical advice and preventative guidelines written by our senior clinical faculty.
          </p>
        </div>

        {/* Search & Category Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Heart Health', 'Digital Health', 'Pediatrics'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: category === cat ? '#0d9488' : '#ffffff',
                  color: category === cat ? '#ffffff' : '#475569',
                  border: category === cat ? '1px solid #0d9488' : '1px solid #cbd5e1',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div style={{ minWidth: '260px', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '0.5rem 0.9rem', background: '#ffffff' }}>
            <Search size={16} color="#0d9488" />
            <input
              type="text"
              placeholder="Search medical topics..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid-3" style={{ gap: '1.75rem' }}>
          {filteredBlogs.map(post => (
            <div key={post.id} className="card-elevated" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.78rem' }}>
                  <span className="badge badge-teal">{post.category}</span>
                  <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {post.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.25rem', flex: 1, lineHeight: 1.5 }}>
                  {post.excerpt}
                </p>

                <div style={{ paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: '#334155' }}>
                    <span style={{ fontWeight: 700, display: 'block' }}>{post.author}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.72rem' }}>{post.authorTitle}</span>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0d9488', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '750px' }}>
              <div style={{ position: 'relative' }}>
                <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-teal">{selectedPost.category}</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{selectedPost.date} • {selectedPost.readTime}</span>
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  {selectedPost.title}
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#f0fdfa', color: '#0d9488', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    {selectedPost.author.charAt(0)}
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: '#0f172a', display: 'block', fontSize: '0.9rem' }}>{selectedPost.author}</span>
                    <span style={{ color: '#64748b', fontSize: '0.78rem' }}>{selectedPost.authorTitle}</span>
                  </div>
                </div>

                <div style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {selectedPost.content}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} style={{ background: '#f1f5f9', color: '#475569', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

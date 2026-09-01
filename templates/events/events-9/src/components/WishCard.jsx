import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WishCard() {
  const [wishes, setWishes] = useState(weddingData.wishes);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [likedMap, setLikedMap] = useState({});

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    const newWish = {
      id: Date.now(),
      name,
      text,
      date: 'Just now'
    };
    setWishes([newWish, ...wishes]);
    setName('');
    setText('');
  };

  const toggleLike = (id) => {
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* LEAVE A WISH FORM */}
      <div className="form-container" style={{ marginBottom: '3.5rem' }}>
        <h3 className="serif-title text-center" style={{ marginBottom: '1.5rem' }}>
          LEAVE A WISH FOR THE COUPLE
        </h3>

        <form onSubmit={handleAddWish}>
          <div className="form-group">
            <label className="form-label" htmlFor="wish-name">YOUR NAME</label>
            <input
              id="wish-name"
              type="text"
              className="form-input"
              placeholder="e.g. Uncle James"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="wish-text">YOUR WISH / BLESSING</label>
            <textarea
              id="wish-text"
              rows={3}
              className="form-textarea"
              placeholder="Wishing you a lifetime of love, laughter and beautiful memories..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            LEAVE A WISH
          </button>
        </form>
      </div>

      {/* WISH CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {wishes.map((wish) => (
          <div key={wish.id} className="dresscode-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                "{wish.text}"
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                — {wish.name} <span style={{ color: 'var(--muted)', marginLeft: '0.5rem' }}>({wish.date})</span>
              </div>
            </div>

            <button
              onClick={() => toggleLike(wish.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: likedMap[wish.id] ? '#e74c3c' : 'var(--border)',
                transition: 'transform 0.2s ease, color 0.2s ease'
              }}
              title="Send Love"
            >
              <Heart size={24} fill={likedMap[wish.id] ? '#e74c3c' : 'none'} style={{ transform: likedMap[wish.id] ? 'scale(1.2)' : 'scale(1)' }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const NewsCard = ({ item }) => {
  return (
    <div className="sports-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ height: '200px', width: '100%', position: 'relative' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/arena-bg.jpg';
          }}
        />
        <span className="badge-live" style={{ position: 'absolute', top: '12px', left: '12px', background: '#ff4d00', color: '#050505', fontWeight: 900 }}>
          {item.category}
        </span>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--gray)', marginBottom: '10px' }}>
          <Calendar size={14} color="#ff4d00" />
          <span>{item.date}</span>
        </div>

        <h3 className="font-display" style={{ fontSize: '1.6rem', marginBottom: '10px', lineHeight: 1.1 }}>
          {item.title}
        </h3>

        <p style={{ fontSize: '0.92rem', color: 'var(--gray)', marginBottom: '20px', lineHeight: 1.5 }}>
          {item.summary}
        </p>

        <Link to={`/news/${item.id}`} className="btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start', fontSize: '0.85rem' }}>
          READ ARTICLE <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

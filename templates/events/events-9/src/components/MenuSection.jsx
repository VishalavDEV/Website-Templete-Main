import React from 'react';
import { weddingData } from '../data/weddingData';

export default function MenuSection() {
  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      {weddingData.menu.categories.map((cat, idx) => (
        <div key={idx} className="menu-section-block">
          <h3 className="menu-category-title">{cat.name}</h3>

          <div className="menu-items-list">
            {cat.items.map((item, itemIdx) => (
              <div key={itemIdx} className="menu-item-single">
                <h4 className="menu-item-name">{item.name}</h4>
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

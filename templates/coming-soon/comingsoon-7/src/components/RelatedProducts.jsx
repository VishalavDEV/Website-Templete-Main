import React from 'react';
import { ShoppingBag, Star, Plus, Sparkles } from 'lucide-react';

export const RelatedProducts = ({ products, onQuickAdd }) => {
  return (
    <section className="related-products-section">
      <div className="related-container">
        
        <div className="related-header">
          <div>
            <span className="badge-tag">
              <Sparkles size={13} /> COMPLETE THE RACE KIT
            </span>
            <h2 className="related-title">RECOMMENDED GEAR & COMPANION APPAREL</h2>
          </div>
        </div>

        <div className="related-grid">
          {products.map((item) => (
            <div key={item.id} className="related-card glass-card">
              <div className="related-img-wrap">
                <img src={item.image} alt={item.name} />
                <span className="related-tag-pill font-mono">{item.tag}</span>
              </div>

              <div className="related-body">
                <div className="related-meta-row">
                  <span className="related-category">{item.category}</span>
                  <div className="related-stars font-mono">
                    <Star size={12} fill="#FFB800" color="#FFB800" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h4 className="related-item-name">{item.name}</h4>

                <div className="related-bottom-row">
                  <div className="related-price font-display">${item.price.toFixed(2)}</div>
                  <button 
                    className="related-add-btn"
                    onClick={() => onQuickAdd(item)}
                    title="Quick Add to Cart"
                  >
                    <Plus size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useShop } from '../context/ShopContext';
import { SlidersHorizontal, Trash2, ShoppingBag, Star, ArrowRight } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { compareList, removeFromCompare, addToCart, navigate } = useShop();

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
            <SlidersHorizontal size={16} /> COMPARISON MATRIX
          </div>
          <h1 className="heading-xl">COMPARE PRODUCTS</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
            Comparing {compareList.length} of 4 maximum products side-by-side.
          </p>
        </div>

        {compareList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <SlidersHorizontal size={48} color="var(--text-muted)" style={{ margin: '0 auto 1.25rem', opacity: 0.3 }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>NO PRODUCTS IN COMPARE MATRIX</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Add up to 4 products to compare specs, prices, and features side-by-side.
            </p>
            <button onClick={() => navigate('/shop')} className="btn btn-accent">
              DISCOVER PRODUCTS <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-primary)' }}>
                  <th style={{ padding: '1.25rem', width: '200px', fontSize: '0.82rem', fontWeight: 800 }}>ATTRIBUTES</th>
                  {compareList.map((prod) => (
                    <th key={prod.id} style={{ padding: '1.25rem', width: '260px' }}>
                      <div style={{ position: 'relative' }}>
                        <button
                          onClick={() => removeFromCompare(prod.id)}
                          style={{ position: 'absolute', top: 0, right: 0, color: 'var(--text-muted)' }}
                          title="Remove"
                        >
                          <Trash2 size={16} />
                        </button>
                        <img src={prod.images[0]} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem' }} />
                        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-blue)' }}>{prod.brand}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{prod.name}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 900 }}>₹{prod.price.toLocaleString('en-IN')}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, fontSize: '0.85rem' }}>Rating</td>
                  {compareList.map((p) => (
                    <td key={p.id} style={{ padding: '1rem 1.25rem', fontSize: '0.88rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
                        <span style={{ fontWeight: 800 }}>{p.rating}</span> ({p.reviewCount})
                      </div>
                    </td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-primary)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, fontSize: '0.85rem' }}>Category</td>
                  {compareList.map((p) => (
                    <td key={p.id} style={{ padding: '1rem 1.25rem', fontSize: '0.88rem', textTransform: 'capitalize' }}>
                      {p.category} ({p.subcategory})
                    </td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, fontSize: '0.85rem' }}>Stock Status</td>
                  {compareList.map((p) => (
                    <td key={p.id} style={{ padding: '1rem 1.25rem', fontSize: '0.88rem', color: '#15803D', fontWeight: 700 }}>
                      In Stock ({p.stock} units)
                    </td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-primary)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, fontSize: '0.85rem' }}>Action</td>
                  {compareList.map((p) => (
                    <td key={p.id} style={{ padding: '1rem 1.25rem' }}>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="btn btn-accent"
                        style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', width: '100%' }}
                      >
                        <ShoppingBag size={14} /> ADD TO BAG
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

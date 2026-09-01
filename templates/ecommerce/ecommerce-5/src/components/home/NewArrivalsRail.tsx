import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../shop/ProductCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const NewArrivalsRail: React.FC = () => {
  const { products } = useShop();
  const newArrivals = products.filter(p => p.newArrival || p.featured).slice(0, 5);

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <ScrollReveal variant="fade-up">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '32px',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '16px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  fontWeight: '600',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                }}
              >
                SEASON HIGHLIGHTS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                JUST ARRIVED
              </h2>
            </div>

            <Link
              to="/shop?sort=newest"
              data-cursor="→"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                fontWeight: '500',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-primary)',
              }}
            >
              DISCOVER ALL <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Horizontal Rail */}
        <div className="horizontal-scroll-rail">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

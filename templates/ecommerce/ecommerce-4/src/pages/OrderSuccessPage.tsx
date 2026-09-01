import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Package, Truck, ArrowRight } from 'lucide-react';

export const OrderSuccessPage: React.FC = () => {
  const { orders, navigate } = useShop();

  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const orderId = urlParams.get('id');

  const order = orders.find((o) => o.id === orderId) || orders[0];

  return (
    <div style={{ padding: '4rem 0 6rem' }}>
      <div className="container-narrow">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            PAYMENT VERIFIED
          </span>
          <h1 className="heading-lg" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>ORDER CONFIRMED!</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Thank you for shopping with ORVANA. Your order <strong>#{order?.id}</strong> is now being processed.
          </p>

          {/* Timeline Simulation */}
          <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', textAlign: 'left' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
              DELIVERY STATUS
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
              <span style={{ color: '#15803D' }}>✓ Order Confirmed</span>
              <span>• Processing</span>
              <span style={{ color: 'var(--text-muted)' }}>• Out for Delivery</span>
              <span style={{ color: 'var(--text-muted)' }}>• Delivered ({order?.estimatedDelivery})</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/account')} className="btn btn-outline">
              VIEW MY ORDERS
            </button>
            <button onClick={() => navigate('/shop')} className="btn btn-accent">
              CONTINUE SHOPPING <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

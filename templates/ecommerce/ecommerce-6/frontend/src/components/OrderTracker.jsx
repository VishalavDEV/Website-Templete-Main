import React from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList, Package, Truck, Smile, AlertCircle } from 'lucide-react';

const OrderTracker = ({ status, trackingNumber }) => {
  const steps = [
    { key: 'PENDING', label: 'Order Placed', icon: ClipboardList },
    { key: 'PROCESSING', label: 'Processing', icon: Package },
    { key: 'SHIPPED', label: 'Dispatched', icon: Truck },
    { key: 'DELIVERED', label: 'Delivered', icon: Smile }
  ];

  const getStepIndex = (currentStatus) => {
    if (currentStatus === 'PENDING') return 0;
    if (currentStatus === 'PROCESSING') return 1;
    if (currentStatus === 'SHIPPED') return 2;
    if (currentStatus === 'DELIVERED') return 3;
    return -1; // Exceptions like CANCELLED or RETURNED
  };

  const currentIndex = getStepIndex(status);

  if (status === 'CANCELLED') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(255, 77, 77, 0.05)', border: '1px solid rgba(255, 77, 77, 0.1)', borderRadius: '4px', color: '#ff4d4d', fontSize: '0.9rem' }}>
        <AlertCircle size={18} />
        <span>This order was cancelled. Stock has been returned to the archive.</span>
      </div>
    );
  }

  if (status === 'RETURNED' || status === 'RETURN_REQUESTED') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(197, 168, 128, 0.08)', border: '1px solid rgba(197, 168, 128, 0.2)', borderRadius: '4px', color: '#a88960', fontSize: '0.9rem' }}>
        <AlertCircle size={18} />
        <span>
          {status === 'RETURN_REQUESTED'
            ? 'Return request initiated. Client assistance is preparing transport.'
            : 'Returned successfully. Refund issued to the original payment source.'}
        </span>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem 0', width: '100%' }}>
      {/* Horizontal timeline bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%' }}>
        
        {/* Underlay line */}
        <div style={{ position: 'absolute', top: '16px', left: '20px', right: '20px', height: '2px', background: 'var(--bg-tertiary)', zIndex: 0 }} />
        
        {/* Active tracking progress line */}
        {currentIndex >= 0 && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '16px',
              left: '20px',
              height: '2px',
              background: 'var(--accent-gold)',
              boxShadow: '0 0 10px rgba(197, 168, 128, 0.5)',
              zIndex: 0
            }}
          />
        )}

        {/* Nodes */}
        {steps.map((step, idx) => {
          const isActive = idx <= currentIndex;
          const isCurrent = idx === currentIndex;
          const StepIcon = step.icon;

          return (
            <div key={step.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
              {/* Node bubble */}
              <motion.div
                animate={{
                  scale: isCurrent ? [1, 1.12, 1] : 1,
                  borderColor: isActive ? 'var(--accent-gold)' : 'var(--border-glass)'
                }}
                transition={isCurrent ? { repeat: Infinity, duration: 2, ease: 'easeInOut' } : {}}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isActive ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  border: '2px solid',
                  color: isActive ? '#000000' : 'var(--text-muted)',
                  cursor: 'default'
                }}
              >
                {isActive && idx < currentIndex ? (
                  <Check size={14} strokeWidth={3} />
                ) : (
                  <StepIcon size={14} />
                )}
              </motion.div>

              {/* Label */}
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dispatch Tracking Number details */}
      {status === 'SHIPPED' && trackingNumber && (
        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          DISPATCHED VIA AURA INSURED CARRIER. TRACKING CODE:{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: '700', fontFamily: 'monospace' }}>{trackingNumber}</span>
        </div>
      )}
    </div>
  );
};

export default OrderTracker;

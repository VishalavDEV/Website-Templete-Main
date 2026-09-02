import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const steps = [
  { label: 'Order Placed', key: 'Placed', dateKey: 'placedAt' },
  { label: 'Processing', key: 'Processing', dateKey: 'processedAt' },
  { label: 'Shipped', key: 'Shipped', dateKey: 'shippedAt' },
  { label: 'Delivered', key: 'Completed', dateKey: 'deliveredAt' }
];

export default function OrderTimeline({ order }) {
  if (!order) return null;

  // Determine current active step index based on order status
  const getActiveStepIndex = (status) => {
    if ('Completed'.equalsIgnoreCase(status)) return 3;
    if ('Shipped'.equalsIgnoreCase(status)) return 2;
    if ('Processing'.equalsIgnoreCase(status)) return 1;
    if ('Cancelled'.equalsIgnoreCase(status)) return -1;
    return 0; // Pending or default
  };

  const activeIndex = getActiveStepIndex(order.status);
  const isCancelled = order.status === 'Cancelled';

  // Calculate percentage for progress line
  const progressPercent = isCancelled ? 0 : (activeIndex / 3) * 100;

  return (
    <div style={{ padding: '20px 10px', position: 'relative', overflow: 'hidden' }}>
      {isCancelled ? (
        <div style={{
          padding: '16px',
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: 'var(--danger-bg)',
          color: 'var(--danger)',
          fontWeight: 600,
          fontSize: '0.9rem',
          textAlign: 'center',
          border: '1px solid #FDF1F1',
          marginBottom: '20px'
        }}>
          This order was Cancelled & Refunded.
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '20px', paddingBottom: '30px' }}>
          
          {/* Background Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '5%',
            right: '5%',
            height: '4px',
            backgroundColor: 'var(--bg-secondary)',
            zIndex: 1,
            borderRadius: '2px'
          }} />

          {/* Active Connector Progress Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent * 0.9}%` }} // Factor of 0.9 to align with dots' centers roughly
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '5%',
              height: '4px',
              backgroundColor: 'var(--accent)',
              zIndex: 2,
              borderRadius: '2px'
            }}
          />

          {/* Timeline Nodes */}
          {steps.map((step, index) => {
            const isCompleted = index <= activeIndex;
            const isActive = index === activeIndex;
            const dateStr = order[step.dateKey];

            return (
              <div
                key={step.key}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '20%',
                  zIndex: 3,
                  position: 'relative',
                }}
              >
                {/* Node Dot Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.3 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: isCompleted ? 'var(--accent)' : '#FFFFFF',
                    border: `2px solid ${isCompleted ? 'var(--accent)' : 'var(--border-color)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCompleted ? 'var(--text-white)' : 'var(--text-muted)',
                    boxShadow: isCompleted ? '0 4px 10px rgba(229,169,59,0.3)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isCompleted ? (
                    <Check size={18} strokeWidth={3} />
                  ) : (
                    <Clock size={16} />
                  )}
                </motion.div>

                {/* Step label */}
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  marginTop: '12px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}>
                  {step.label}
                </span>

                {/* Milestone timestamp */}
                {dateStr ? (
                  <span style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    marginTop: '4px',
                    textAlign: 'center',
                    display: 'block',
                    width: '120px',
                    position: 'absolute',
                    top: '72px',
                    lineHeight: 1.2
                  }}>
                    {dateStr.split(' ')[0]}<br/>{dateStr.split(' ')[1] || ''}
                  </span>
                ) : (
                  <span style={{
                    fontSize: '0.7rem',
                    color: '#C5C0B3',
                    marginTop: '4px',
                    textAlign: 'center',
                    display: 'block',
                    width: '120px',
                    position: 'absolute',
                    top: '72px'
                  }}>
                    -
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Case insensitive helper
String.prototype.equalsIgnoreCase = function (compareString) {
  return this.toLowerCase() === (compareString || "").toLowerCase();
};

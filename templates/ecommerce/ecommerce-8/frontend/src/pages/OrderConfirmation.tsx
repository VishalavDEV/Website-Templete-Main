import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Map, ChevronRight } from 'lucide-react';
import './OrderConfirmation.css';

interface Order {
  orderId: string;
  totalAmount: number;
  orderDate: string;
  deliveryDate: string;
  deliveryMethod: string;
  paymentMethod: string;
  shippingAddress: {
    name: string;
    phone: string;
    addressLine: string;
    city: string;
    state: string;
    pinCode: string;
  };
}

export const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);

  // Confetti particles state
  const [confetti, setConfetti] = useState<{ id: number; left: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    // Retrieve order details from navigation state
    const state = location.state as { order: Order };
    if (state && state.order) {
      setOrder(state.order);
    }

    // Generate random confetti elements
    const colors = ['#8B5CF6', '#FF4D6D', '#00F2FE', '#FBBF24', '#10B981'];
    const particles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // screen width percentage
      delay: Math.random() * 2, // delay seconds
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(particles);
  }, [location]);

  if (!order) {
    return (
      <div className="confirmation-error-page app-container">
        <h3>No active order found!</h3>
        <Link to="/shop" className="btn btn-primary">SHOP TOYS</Link>
      </div>
    );
  }

  return (
    <div className="order-confirmation-page app-container">
      <div className="stars-bg" />

      {/* Confetti Spawner */}
      <div className="confetti-container">
        {confetti.map(p => (
          <div 
            key={p.id} 
            className="confetti-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              backgroundColor: p.color
            }}
          />
        ))}
      </div>

      <div className="confirmation-panel glass-panel">
        <div className="celebration-icon">🎉</div>
        <h1 className="confirmation-title text-glow-primary">LET THE ADVENTURE BEGIN!</h1>
        <p className="confirmation-subtitle">Your parcel of magic is ready to be dispatched.</p>

        {/* Pathway Animation: Package -> Van -> Plane -> Bike -> House */}
        <div className="dispatch-pipeline">
          <div className="dispatch-line" />
          
          <div className="dispatch-stages">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="dispatch-node active"
            >
              <span className="dispatch-icon">📦</span>
              <span className="dispatch-label">Packed</span>
            </motion.div>

            <ChevronRight size={18} className="dispatch-arrow" />

            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="dispatch-node active"
            >
              <span className="dispatch-icon">🚐</span>
              <span className="dispatch-label">Warehouse</span>
            </motion.div>

            <ChevronRight size={18} className="dispatch-arrow" />

            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="dispatch-node active"
            >
              <span className="dispatch-icon">✈️</span>
              <span className="dispatch-label">Transit</span>
            </motion.div>

            <ChevronRight size={18} className="dispatch-arrow" />

            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, type: 'spring' }}
              className="dispatch-node"
            >
              <span className="dispatch-icon">🏍️</span>
              <span className="dispatch-label">Out</span>
            </motion.div>

            <ChevronRight size={18} className="dispatch-arrow" />

            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
              className="dispatch-node"
            >
              <span className="dispatch-icon">🏠</span>
              <span className="dispatch-label">Home</span>
            </motion.div>
          </div>
        </div>

        {/* Order Details Display Card */}
        <div className="order-details-card glass-panel">
          <div className="detail-row">
            <span>Order ID:</span>
            <span className="order-id-value">{order.orderId}</span>
          </div>
          <div className="detail-row">
            <span>Placed On:</span>
            <span>{order.orderDate}</span>
          </div>
          <div className="detail-row">
            <span>Est. Delivery:</span>
            <span>{order.deliveryDate}</span>
          </div>
          <div className="detail-row">
            <span>Grand Total:</span>
            <span className="order-total-value">₹{order.totalAmount.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Dispatch Address:</span>
            <span className="order-address-value">
              {order.shippingAddress.name}, {order.shippingAddress.addressLine}, {order.shippingAddress.city}, {order.shippingAddress.state} ({order.shippingAddress.pinCode})
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="confirmation-ctas">
          <button 
            onClick={() => navigate(`/tracking/${order.orderId}`)} 
            className="btn btn-secondary track-btn glow-secondary"
            data-cursor="play"
          >
            <Map size={18} /> TRACK MY TOY
          </button>
          <Link to="/shop" className="btn btn-outline" data-cursor="drive">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
};

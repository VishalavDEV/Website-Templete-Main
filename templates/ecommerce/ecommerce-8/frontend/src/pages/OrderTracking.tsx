import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, RefreshCw, Compass } from 'lucide-react';
import './OrderTracking.css';

interface Order {
  orderId: string;
  totalAmount: number;
  orderDate: string;
  deliveryDate: string;
  status: string; // 'PLACED' | 'PACKING' | 'SHIPPED' | 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELIVERED'
  shippingAddress: {
    name: string;
    city: string;
  };
}

export const OrderTracking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [localSeconds, setLocalSeconds] = useState(0); // Backup state tracker if API is offline

  // Fetch Order details
  const fetchOrderStatus = async (isInitial = false) => {
    if (isInitial) setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/api/orders/${id}`);
      if (res.data) {
        setOrder(res.data);
      } else {
        throw new Error('Null data');
      }
    } catch (err) {
      console.warn('API error during tracking query. Simulating order progression locally.');
      // Simulate progression locally
      const elapsed = localSeconds + (isInitial ? 0 : 3);
      setLocalSeconds(elapsed);

      let status = 'PLACED';
      if (elapsed >= 95) status = 'DELIVERED';
      else if (elapsed >= 70) status = 'OUT_FOR_DELIVERY';
      else if (elapsed >= 45) status = 'IN_TRANSIT';
      else if (elapsed >= 25) status = 'SHIPPED';
      else if (elapsed >= 10) status = 'PACKING';

      const mockOrder: Order = {
        orderId: id || 'TYW-123456',
        totalAmount: 39.98,
        orderDate: '2026-08-19 22:00:00',
        deliveryDate: '2026-08-22',
        status,
        shippingAddress: {
          name: 'John Doe',
          city: 'Toy City'
        }
      };
      setOrder(mockOrder);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  // Poll every 3 seconds for status progression
  useEffect(() => {
    fetchOrderStatus(true);
    const interval = setInterval(() => {
      fetchOrderStatus(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [id, localSeconds]);

  if (loading) {
    return (
      <div className="tracking-loading-page">
        <div className="loader-lego">🧱 Syncing Satellites...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="tracking-error-page app-container">
        <h3>Order '{id}' not found!</h3>
        <Link to="/shop" className="btn btn-primary"> Adopt Some Toys</Link>
      </div>
    );
  }

  // Map milestones to active index
  const statusLevels: { [key: string]: number } = {
    'PLACED': 1,
    'PACKING': 2,
    'SHIPPED': 3,
    'IN_TRANSIT': 4,
    'OUT_FOR_DELIVERY': 5,
    'DELIVERED': 6
  };

  const activeLevel = statusLevels[order.status] || 1;

  // Determine current vehicle emoji and slider offsets
  const getVehicleEmoji = () => {
    if (order.status === 'SHIPPED') return '🚐';
    if (order.status === 'IN_TRANSIT') return '✈️';
    if (order.status === 'OUT_FOR_DELIVERY') return '🏍️';
    if (order.status === 'DELIVERED') return '🏠';
    return '📦';
  };

  const getVehicleOffset = () => {
    switch (order.status) {
      case 'PLACED': return '12.5%';
      case 'PACKING': return '29.1%';
      case 'SHIPPED': return '45.8%';
      case 'IN_TRANSIT': return '62.5%';
      case 'OUT_FOR_DELIVERY': return '79.1%';
      case 'DELIVERED': return '95%';
      default: return '12.5%';
    }
  };

  return (
    <div className="order-tracking-page app-container">
      <div className="stars-bg" />

      <Link to="/profile" className="back-nav-btn" data-cursor="play">
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>

      <div className="tracking-container glass-panel">
        <h1 className="tracking-title text-glow-primary">ORDER TRACKING: {order.orderId}</h1>
        <p className="tracking-subtitle">Live Simulation. Status updates automatically in real-time.</p>

        {/* Dynamic Route Map */}
        <div className="tracking-map-arena">
          <div className="map-route-line" />
          
          {/* Active vehicle sliding along the line */}
          <motion.div 
            className="map-vehicle"
            animate={{ left: getVehicleOffset() }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <span className="vehicle-emoji">{getVehicleEmoji()}</span>
            <div className="vehicle-beacon" />
          </motion.div>

          <div className="map-milestone-points">
            <span className="map-point">🏪<br /><small>Store</small></span>
            <span className="map-point">🏭<br /><small>Warehouse</small></span>
            <span className="map-point">✈️<br /><small>Airport</small></span>
            <span className="map-point">🏍️<br /><small>City Hub</small></span>
            <span className="map-point">🏠<br /><small>Home</small></span>
          </div>
        </div>

        {/* Milestone checklist table */}
        <div className="tracking-milestones-list">
          <div className={`milestone-row ${activeLevel >= 1 ? 'completed' : ''} ${activeLevel === 1 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">✓</span>
            <div className="milestone-details">
              <h4>Order Placed</h4>
              <p>Squad assembled and verified by dispatch.</p>
            </div>
          </div>

          <div className={`milestone-row ${activeLevel >= 2 ? 'completed' : ''} ${activeLevel === 2 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">{activeLevel >= 2 ? '✓' : '🧱'}</span>
            <div className="milestone-details">
              <h4>Toy Being Packed</h4>
              <p>Items wrapped inside the cargo boxes securely.</p>
            </div>
          </div>

          <div className={`milestone-row ${activeLevel >= 3 ? 'completed' : ''} ${activeLevel === 3 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">{activeLevel >= 3 ? '✓' : '🚐'}</span>
            <div className="milestone-details">
              <h4>Shipped</h4>
              <p>Package left warehouse on logistics cruiser.</p>
            </div>
          </div>

          <div className={`milestone-row ${activeLevel >= 4 ? 'completed' : ''} ${activeLevel === 4 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">{activeLevel >= 4 ? '✓' : '✈️'}</span>
            <div className="milestone-details">
              <h4>In Transit</h4>
              <p>Package flying in high-speed air dispatch.</p>
            </div>
          </div>

          <div className={`milestone-row ${activeLevel >= 5 ? 'completed' : ''} ${activeLevel === 5 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">{activeLevel >= 5 ? '✓' : '🏍️'}</span>
            <div className="milestone-details">
              <h4>Out for Delivery</h4>
              <p>Toy courier wiggling through traffic on motorcycle.</p>
            </div>
          </div>

          <div className={`milestone-row ${activeLevel >= 6 ? 'completed' : ''} ${activeLevel === 6 ? 'active-pulse' : ''}`}>
            <span className="milestone-status-icon">🎁</span>
            <div className="milestone-details">
              <h4>Delivered</h4>
              <p>Toys arrived safely! Let the playtime begin!</p>
            </div>
          </div>
        </div>

        <div className="tracking-summary-footer">
          <span>Simulation polling active. Please wait or refresh:</span>
          <button className="btn btn-outline refresh-status-btn" onClick={() => fetchOrderStatus(true)} data-cursor="play">
            <RefreshCw size={16} /> RE-FETCH
          </button>
        </div>
      </div>
    </div>
  );
};

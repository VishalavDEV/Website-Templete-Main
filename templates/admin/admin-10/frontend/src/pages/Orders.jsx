import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Eye,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Truck
} from 'lucide-react';
import api from '../utils/api';
import OrderTimeline from '../components/OrderTimeline';

export default function Orders({ triggerUpdateBadges }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Selected Order for details pane
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch orders
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await api.get('/orders');
      setOrders(res.data);
      if (res.data.length > 0) {
        setSelectedOrder(res.data[0]); // Select first order by default
      }
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch orders from backend.');
    } finally {
      setLoading(false);
    }
  };

  // Change order status
  const handleUpdateStatus = async (orderId, nextStatus) => {
    try {
      const res = await api.put(`/orders/${orderId}/status`, { status: nextStatus });
      setOrders(prev => prev.map(o => o.id === orderId ? res.data : o));
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(res.data);
      }
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  // Filtered & Searched Orders
  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase()) ||
                          o.customerName.toLowerCase().includes(search.toLowerCase()) ||
                          o.productName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === '' || o.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage) || 1;

  // Order stats counts
  const totalCount = orders.length;
  const completedCount = orders.filter(o => o.status === 'Completed').length;
  const processingCount = orders.filter(o => o.status === 'Processing').length;
  const pendingCount = orders.filter(o => o.status === 'Pending').length;

  const getStatusBadge = (status) => {
    let bg = 'var(--bg-secondary)';
    let color = 'var(--text-muted)';
    if (status === 'Completed') { bg = 'var(--success-bg)'; color = 'var(--success)'; }
    else if (status === 'Processing') { bg = 'var(--info-bg)'; color = 'var(--info)'; }
    else if (status === 'Pending') { bg = 'var(--warning-bg)'; color = 'var(--warning)'; }
    else if (status === 'Cancelled') { bg = 'var(--danger-bg)'; color = 'var(--danger)'; }

    return (
      <span style={{
        backgroundColor: bg,
        color: color,
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {status}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Order Fulfilment</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Monitor transactions, dispatch logs, and delivery timelines.</p>
      </div>

      {/* Orders Statistics Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {/* Total Orders Card */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ backgroundColor: 'var(--accent-light)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <ShoppingCart size={20} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Total Orders</span>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{totalCount}</h4>
          </div>
        </div>

        {/* Processing Orders Card */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ backgroundColor: 'var(--info-bg)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <Truck size={20} style={{ color: 'var(--info)' }} />
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Processing</span>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{processingCount}</h4>
          </div>
        </div>

        {/* Pending Orders Card */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ backgroundColor: 'var(--warning-bg)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <Clock size={20} style={{ color: 'var(--warning)' }} />
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Pending</span>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{pendingCount}</h4>
          </div>
        </div>

        {/* Completed Orders Card */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ backgroundColor: 'var(--success-bg)', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <CheckCircle size={20} style={{ color: 'var(--success)' }} />
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Completed</span>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{completedCount}</h4>
          </div>
        </div>
      </div>

      {/* Split Pane view: Table on the left, details timeline on the right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '24px',
        alignItems: 'start'
      }} className="orders-split-layout">
        
        {/* Left Side: Table List and Search filters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Search bar card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1.5px solid var(--border-color)',
            borderRadius: 'var(--border-radius-md)',
            padding: '16px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            gap: '12px'
          }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search orders by ID, Customer name..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                style={{ paddingLeft: '38px', height: '40px' }}
                className="form-input"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              style={{ width: '150px', height: '40px' }}
              className="form-select"
            >
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Table */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
              <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
            </div>
          ) : (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                        No orders recorded.
                      </td>
                    </tr>
                  ) : (
                    currentOrders.map((order) => (
                      <tr
                        key={order.id}
                        onClick={() => setSelectedOrder(order)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedOrder?.id === order.id ? 'var(--accent-light)' : 'transparent',
                          borderLeft: selectedOrder?.id === order.id ? '4px solid var(--accent)' : '4px solid transparent'
                        }}
                      >
                        <td style={{ fontWeight: 700, color: 'var(--text-main)' }}>{order.id}</td>
                        <td>{order.customerName}</td>
                        <td style={{ fontWeight: 600 }}>${order.amount.toFixed(2)}</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td>
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedOrder(order); }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--text-muted)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 600
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                          >
                            <Eye size={14} /> View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn-secondary"
                style={{ padding: '6px 12px', opacity: currentPage === 1 ? 0.5 : 1 }}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--border-radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: currentPage === num ? 'var(--primary)' : 'var(--bg-card)',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn-secondary"
                style={{ padding: '6px 12px', opacity: currentPage === totalPages ? 0.5 : 1 }}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Selected Order Details Pane with interactive Timeline */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <AnimatePresence mode="wait">
            {selectedOrder ? (
              <motion.div
                key={selectedOrder.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {/* Details Header */}
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>ORDER LIFE DETAILS</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>{selectedOrder.id}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '8px' }}>
                    {selectedOrder.customerName}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Transaction Date: {selectedOrder.date}
                  </p>
                </div>

                {/* Details Product details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Product Title</span>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>{selectedOrder.productName}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Cost</span>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>${selectedOrder.amount.toFixed(2)}</p>
                  </div>
                </div>

                {/* Order Timeline Visualizer */}
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '15px' }}>FULFILMENT STAGES:</span>
                  <OrderTimeline order={selectedOrder} />
                </div>

                {/* Status progression Actions */}
                {selectedOrder.status !== 'Completed' && selectedOrder.status !== 'Cancelled' && (
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '30px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Lifecycle Operations:</span>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {selectedOrder.status === 'Pending' && (
                        <button
                          onClick={() => handleUpdateStatus(selectedOrder.id, 'Processing')}
                          className="btn-primary"
                          style={{ flexGrow: 1, padding: '10px', fontSize: '0.8rem' }}
                        >
                          Approve & Process
                        </button>
                      )}
                      {selectedOrder.status === 'Processing' && (
                        <button
                          onClick={() => handleUpdateStatus(selectedOrder.id, 'Shipped')}
                          className="btn-primary"
                          style={{ flexGrow: 1, padding: '10px', fontSize: '0.8rem' }}
                        >
                          Dispatch / Ship Order
                        </button>
                      )}
                      {selectedOrder.status === 'Shipped' && (
                        <button
                          onClick={() => handleUpdateStatus(selectedOrder.id, 'Completed')}
                          className="btn-primary"
                          style={{ flexGrow: 1, padding: '10px', fontSize: '0.8rem' }}
                        >
                          Confirm Delivery
                        </button>
                      )}
                      <button
                        onClick={() => handleUpdateStatus(selectedOrder.id, 'Cancelled')}
                        className="btn-danger"
                        style={{ padding: '10px', fontSize: '0.8rem', flexGrow: 0 }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                
                {selectedOrder.status === 'Completed' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '0.85rem', fontWeight: 600, marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                    <CheckCircle size={16} /> Fully dispatched and delivered to recipient.
                  </div>
                )}

                {selectedOrder.status === 'Cancelled' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)', fontSize: '0.85rem', fontWeight: 600, marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                    <XCircle size={16} /> Cancelled and funds refunded.
                  </div>
                )}
              </motion.div>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                Select an order row to view processing progression details.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

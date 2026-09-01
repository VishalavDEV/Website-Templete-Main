import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Order, OrderService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import StatusBadge from '../../components/common/StatusBadge';
import { ArrowLeft, Truck, CreditCard, User, Clipboard, Plus, CheckCircle, Package, Send, Award } from 'lucide-react';
import { TableSkeleton } from '../../components/common/LoadingSkeleton';

const OrderDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [status, setStatus] = useState<string>('');
  const [trackingNumber, setTrackingNumber] = useState<string>('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (id) fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const data = await OrderService.getById(Number(id));
      setOrder(data);
      setStatus(data.orderStatus);
      setTrackingNumber(data.trackingNumber || '');
    } catch (err) {
      showToast('Failed to load order specifications.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async () => {
    if (!order || !order.id) return;
    try {
      setUpdating(true);
      await OrderService.updateStatus(order.id, status);
      showToast(`Order status updated to ${status}`, 'success');
      fetchOrderDetails();
    } catch (err) {
      showToast('Failed to update order status.', 'error');
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdateTracking = async () => {
    if (!order || !order.id) return;
    try {
      setUpdating(true);
      await OrderService.updateTracking(order.id, trackingNumber);
      showToast('Tracking number updated successfully.', 'success');
      fetchOrderDetails();
    } catch (err) {
      showToast('Failed to update tracking details.', 'error');
    } finally {
      setUpdating(false);
    }
  };

  // Helper for progress timeline
  const getTimelineSteps = (currentStatus: string) => {
    const steps = [
      { name: 'Pending', icon: Clipboard, status: 'PENDING' },
      { name: 'Confirmed', icon: CheckCircle, status: 'CONFIRMED' },
      { name: 'Processing', icon: Package, status: 'PROCESSING' },
      { name: 'Shipped', icon: Truck, status: 'SHIPPED' },
      { name: 'Delivered', icon: Award, status: 'DELIVERED' },
    ];

    const statusOrder = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'];
    const currentIndex = statusOrder.indexOf(currentStatus);

    return steps.map((step, idx) => {
      const isCompleted = idx < currentIndex;
      const isActive = idx === currentIndex;
      const isCancelled = currentStatus === 'CANCELLED';

      return {
        ...step,
        isCompleted,
        isActive,
        isCancelled,
      };
    });
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-6 w-24 bg-slate-100 rounded"></div>
        <TableSkeleton rows={4} cols={5} />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 font-semibold mb-4">Order record not found</p>
        <button
          onClick={() => navigate('/orders')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold"
        >
          Back to list
        </button>
      </div>
    );
  }

  const steps = getTimelineSteps(order.orderStatus);

  return (
    <div className="space-y-8">
      {/* Breadcrumb / Back button */}
      <button
        onClick={() => navigate('/orders')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Orders list
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Order Details</h1>
            <span className="text-slate-400 font-bold text-lg">#{order.id}</span>
          </div>
          <p className="text-xs text-slate-400 font-semibold mt-1">
            Placed on {new Date(order.orderDate).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={order.paymentStatus} />
          <StatusBadge status={order.orderStatus} />
        </div>
      </div>

      {/* Progress Timeline */}
      {order.orderStatus !== 'CANCELLED' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
          <h3 className="font-bold text-slate-800 text-sm mb-6">Delivery Progress</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  {/* Step bubble */}
                  <div className="flex flex-col items-center relative z-10 w-full md:w-auto">
                    <div
                      className={`h-11 w-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        step.isCompleted
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-150'
                          : step.isActive
                          ? 'bg-white border-indigo-600 text-indigo-600 shadow-md shadow-indigo-100 scale-105'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-bold mt-2 ${
                        step.isActive ? 'text-indigo-600' : 'text-slate-500'
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>

                  {/* Connecting bar */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block flex-1 h-0.5 bg-slate-200 relative mx-4">
                      <div
                        className="absolute inset-y-0 left-0 bg-indigo-600 transition-all duration-500"
                        style={{ width: step.isCompleted ? '100%' : '0%' }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}

      {/* Control center widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status manager */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
          <h3 className="font-bold text-slate-800 text-sm mb-4">Manage Order Status</h3>
          <div className="flex items-center gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            >
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="PROCESSING">Processing</option>
              <option value="SHIPPED">Shipped</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
            <button
              onClick={handleUpdateStatus}
              disabled={updating}
              className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Update
            </button>
          </div>
        </div>

        {/* Tracking manager */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
          <h3 className="font-bold text-slate-800 text-sm mb-4">Tracking Reference</h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g. TRK194823"
              className="flex-1 px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            />
            <button
              onClick={handleUpdateTracking}
              disabled={updating}
              className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Info Split section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order items table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 text-sm">Line Items</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30 text-xs font-bold text-slate-400 tracking-wider">
                  <th className="p-4">Item Details</th>
                  <th className="p-4">Price</th>
                  <th className="p-4 text-center">Qty</th>
                  <th className="p-4 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => (
                  <tr key={item.id} className="border-b border-slate-50 text-sm font-semibold text-slate-700">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'}
                          alt="Product"
                          className="h-10 w-10 rounded-lg object-cover ring-2 ring-slate-50"
                        />
                        <div className="flex flex-col">
                          <span className="text-slate-800 text-sm font-bold">{item.product.name}</span>
                          <span className="text-slate-400 text-[10px] font-bold uppercase">{item.product.category.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-bold text-slate-650">${item.price.toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-slate-500">{item.quantity}</td>
                    <td className="p-4 text-right font-bold text-slate-850">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Totals summary */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/20 flex flex-col items-end gap-1.5 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-10">
              <span>Subtotal:</span>
              <span className="text-slate-700 font-bold">${order.amount.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-10">
              <span>Shipping Fee:</span>
              <span className="text-slate-750 font-bold text-green-600">FREE</span>
            </div>
            <div className="border-t border-slate-200 w-44 my-1.5" />
            <div className="flex items-center gap-10 text-base">
              <span className="text-slate-850 font-bold">Total:</span>
              <span className="text-indigo-600 font-black">${order.amount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Customer / Payment detail sidebars */}
        <div className="space-y-6">
          {/* Customer box */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-50 pb-3">
              <User className="h-4.5 w-4.5 text-slate-400" />
              Customer Information
            </h3>
            <div className="flex items-center gap-3">
              <img
                src={order.customer.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                alt="Profile"
                className="h-11 w-11 rounded-xl object-cover"
              />
              <div className="flex flex-col">
                <span className="text-slate-800 text-sm font-bold">{order.customer.name}</span>
                <span className="text-slate-400 text-xs font-medium">{order.customer.email}</span>
              </div>
            </div>
            <div className="text-xs space-y-1 font-semibold text-slate-500">
              <p>Phone: <span className="text-slate-700">{order.customer.phone || 'N/A'}</span></p>
              <p>Lifetime Spending: <span className="text-slate-700">${order.customer.totalSpending.toFixed(2)}</span></p>
            </div>
          </div>

          {/* Logistics / Payment info */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-50 pb-3">
              <CreditCard className="h-4.5 w-4.5 text-slate-400" />
              Logistics & Payment
            </h3>
            <div className="text-xs space-y-3 font-semibold text-slate-500">
              <div>
                <p className="text-slate-400 font-bold mb-0.5">PAYMENT METHOD</p>
                <p className="text-slate-700">{order.paymentMethod || 'Credit Card'}</p>
              </div>
              <div>
                <p className="text-slate-400 font-bold mb-0.5">SHIPPING ADDRESS</p>
                <p className="text-slate-700 leading-relaxed">{order.shippingAddress}</p>
              </div>
              <div>
                <p className="text-slate-400 font-bold mb-0.5">TRACKING REFERENCE</p>
                <p className="text-slate-700">{order.trackingNumber || 'Pending Assignment'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;

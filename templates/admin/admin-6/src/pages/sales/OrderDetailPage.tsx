import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, CheckCircle, Package, Truck, CreditCard } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { orderService } from '../../services/orderService';
import { useToast } from '../../context/ToastContext';

export const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const order = orderService.getOrderById(id || '');

  if (!order) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Order Not Found</h2>
        <button onClick={() => navigate('/sales/orders')} className="mt-4 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl">
          Back to Orders
        </button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleMarkDelivered = () => {
    orderService.updateOrderStatus(order.id, 'Delivered', 'Paid');
    showToast('Order Complete', `Order ${order.orderNumber} marked as Delivered & Paid`);
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/sales/orders')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Orders
      </button>

      <PageHeader
        title={`Order Details: ${order.orderNumber}`}
        subtitle={`Placed on ${order.date} by ${order.customerName}`}
        actions={
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 rounded-xl flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" /> Print Invoice
            </button>
            {order.status !== 'Delivered' && (
              <button
                onClick={handleMarkDelivered}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle className="w-4 h-4" /> Mark Delivered
              </button>
            )}
          </div>
        }
      />

      {/* Main Order Receipt Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand-600 dark:text-brand-400 uppercase">INVOICE RECEIPT</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{order.orderNumber}</h2>
            <div className="text-xs text-slate-500 mt-1">Payment via {order.paymentMethod}</div>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5">
            <Badge variant={order.status === 'Delivered' ? 'success' : 'warning'}>{order.status}</Badge>
            <span className="text-xs text-slate-400">Payment Status: <span className="font-bold text-slate-700 dark:text-slate-200">{order.paymentStatus}</span></span>
          </div>
        </div>

        {/* Customer & Shipping Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase mb-2">Billed To</h4>
            <p className="font-semibold text-slate-800 dark:text-slate-200">{order.customerName}</p>
            <p className="text-slate-500">{order.customerEmail}</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase mb-2">Shipping Address</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{order.shippingAddress}</p>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-500 uppercase">
                <th className="p-3">Item Description</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Unit Price</th>
                <th className="p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {order.items.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-3 font-semibold text-slate-900 dark:text-white">{item.productName}</td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">{item.quantity}</td>
                  <td className="p-3 text-right text-slate-600 dark:text-slate-300">${item.unitPrice.toFixed(2)}</td>
                  <td className="p-3 text-right font-bold text-slate-900 dark:text-white">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="w-64 space-y-2 text-xs">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Tax (8%)</span>
              <span>${(order.totalAmount * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
              <span>Grand Total</span>
              <span>${(order.totalAmount * 1.08).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

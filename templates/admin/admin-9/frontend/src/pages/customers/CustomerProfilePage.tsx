import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Customer, CustomerService, Order } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import StatusBadge from '../../components/common/StatusBadge';
import { ArrowLeft, Mail, Phone, Calendar, ShoppingBag, DollarSign, CalendarCheck } from 'lucide-react';
import { TableSkeleton } from '../../components/common/LoadingSkeleton';

const CustomerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchCustomerProfile();
  }, [id]);

  const fetchCustomerProfile = async () => {
    try {
      setLoading(true);
      const custData = await CustomerService.getById(Number(id));
      setCustomer(custData);
      const ordersData = await CustomerService.getOrders(Number(id));
      setOrders(ordersData);
    } catch (err) {
      showToast('Failed to load customer profile details.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-6 w-24 bg-slate-100 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-slate-100 rounded-xl"></div>
          <div className="h-24 bg-slate-100 rounded-xl"></div>
          <div className="h-24 bg-slate-100 rounded-xl"></div>
        </div>
        <TableSkeleton rows={3} cols={5} />
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 font-semibold mb-4">Customer profile not found</p>
        <button
          onClick={() => navigate('/customers')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold animate-pulse"
        >
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <button
        onClick={() => navigate('/customers')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Customers list
      </button>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={customer.profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
            alt="Customer Avatar"
            className="h-16 w-16 rounded-2xl object-cover ring-4 ring-slate-50"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{customer.name}</h2>
              <StatusBadge status={customer.status} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                {customer.email}
              </span>
              {customer.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  {customer.phone}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 self-start md:self-center">
          <Calendar className="h-4 w-4" />
          Member since {new Date(customer.createdAt || '').toLocaleDateString()}
        </div>
      </div>

      {/* Customer summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Total Spent</span>
            <h3 className="text-2xl font-black text-slate-850">${customer.totalSpending.toFixed(2)}</h3>
          </div>
          <div className="p-3 bg-green-50 text-green-500 rounded-xl">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Total Orders</span>
            <h3 className="text-2xl font-black text-slate-850">{customer.totalOrders} purchases</h3>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
            <ShoppingBag className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Last Order Date</span>
            <h3 className="text-xl font-bold text-slate-800">
              {customer.lastOrderDate ? new Date(customer.lastOrderDate).toLocaleDateString() : 'N/A'}
            </h3>
          </div>
          <div className="p-3 bg-purple-50 text-purple-500 rounded-xl">
            <CalendarCheck className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Split view: Orders history and Activity logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 text-sm">Purchase History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30 text-xs font-bold text-slate-400 tracking-wider">
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Fulfillment</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td className="p-4 text-center text-slate-400 text-sm" colSpan={6}>No orders placed yet</td>
                  </tr>
                ) : (
                  orders.map((o) => (
                    <tr key={o.id} className="border-b border-slate-55 text-sm font-semibold text-slate-700 hover:bg-slate-50/40">
                      <td className="p-4 text-indigo-600 font-bold">#{o.id}</td>
                      <td className="p-4 text-xs font-semibold text-slate-400">
                        {new Date(o.orderDate).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-slate-900 font-bold">${o.amount.toFixed(2)}</td>
                      <td className="p-4">
                        <StatusBadge status={o.paymentStatus} />
                      </td>
                      <td className="p-4">
                        <StatusBadge status={o.orderStatus} />
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => navigate(`/orders/${o.id}`)}
                          className="px-2.5 py-1.5 border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity logs */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow space-y-4">
          <h3 className="font-bold text-slate-800 text-sm border-b border-slate-50 pb-3">
            Activity Timeline
          </h3>
          <div className="flow-root">
            <ul className="-mb-8">
              {orders.slice(0, 3).map((o, idx) => (
                <li key={o.id}>
                  <div className="relative pb-8">
                    {idx !== Math.min(orders.length, 3) - 1 && (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center ring-8 ring-white font-bold text-xs">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 pt-1.5">
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          Placed order <span className="text-indigo-600 font-bold">#{o.id}</span> valued at <span className="text-slate-900 font-extrabold">${o.amount.toFixed(2)}</span>
                        </p>
                        <div className="text-right text-[10px] text-slate-400 font-bold mt-1">
                          {new Date(o.orderDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {orders.length === 0 && (
                <li className="text-center text-xs text-slate-400 py-6">No recent activities</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfilePage;

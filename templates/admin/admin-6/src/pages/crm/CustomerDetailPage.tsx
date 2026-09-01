import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  ShoppingBag,
  DollarSign,
  Clock,
  Briefcase,
  FileText,
} from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Tabs } from '../../components/common/Tabs';
import { customerService } from '../../services/customerService';
import { orderService } from '../../services/orderService';
import { useToast } from '../../context/ToastContext';

export const CustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const customer = customerService.getCustomerById(id || '');
  const orders = orderService.getOrders().filter((o) => o.customerId === id);

  if (!customer) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Customer Not Found</h2>
        <p className="text-sm text-slate-500 mt-2 mb-4">No customer matches the identifier "{id}".</p>
        <button
          onClick={() => navigate('/crm/customers')}
          className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl"
        >
          Back to Customers
        </button>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'orders', label: 'Purchase History', count: orders.length },
    { id: 'activities', label: 'Activities' },
    { id: 'notes', label: 'Notes' },
  ];

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/crm/customers')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Customers
      </button>

      {/* Customer Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={customer.avatar} alt={customer.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-100 dark:ring-slate-800" />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">{customer.name}</h1>
              <Badge variant={customer.status === 'Active' ? 'success' : 'neutral'}>
                {customer.status}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
              <span>{customer.company}</span> • <span>{customer.location}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast('Email Sent', `Drafted outreach email to ${customer.email}`)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100"
          >
            Send Email
          </button>
          <button
            onClick={() => navigate('/sales/orders')}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-sm"
          >
            Create Order
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={(t) => setActiveTab(t)} />

      {/* Tab Contents */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Account Metrics</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <div className="text-xs text-slate-500">Total Spent</div>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">${customer.totalSpent.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <div className="text-xs text-slate-500">Orders Placed</div>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">{customer.ordersCount}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <div className="text-xs text-slate-500">Member Since</div>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">{customer.createdAt}</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Account Notes</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {customer.notes || 'No notes added for this customer yet.'}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" /> {customer.email}
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" /> {customer.phone}
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Building className="w-4 h-4 text-slate-400" /> {customer.company}
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400" /> {customer.location}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Order History</h3>
          {orders.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No orders recorded for this customer.</p>
          ) : (
            <div className="space-y-3">
              {orders.map((o) => (
                <div key={o.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-brand-600 dark:text-brand-400">{o.orderNumber}</div>
                    <div className="text-[11px] text-slate-400">{o.date} • {o.items.length} items</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">${o.totalAmount.toFixed(2)}</div>
                    <Badge variant={o.status === 'Delivered' ? 'success' : 'info'} size="sm">
                      {o.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'activities' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Activity Timeline</h3>
          <p className="text-xs text-slate-500">Account created on {customer.createdAt}. Last order placed on {customer.lastOrderDate}.</p>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Internal Notes</h3>
          <textarea
            className="w-full p-3 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
            rows={4}
            defaultValue={customer.notes}
            placeholder="Add internal CRM notes..."
          />
          <button
            onClick={() => showToast('Note Saved', 'Customer notes updated successfully.')}
            className="mt-3 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl"
          >
            Save Note
          </button>
        </div>
      )}
    </div>
  );
};

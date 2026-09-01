import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Eye, CheckCircle2, Clock, XCircle, ShoppingBag, DollarSign, Truck } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { orderService } from '../../services/orderService';
import { Order } from '../../types';
import { useToast } from '../../context/ToastContext';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ORDER_VOLUME_DATA = [
  { month: 'Jan', orders: 120, revenue: 142000 },
  { month: 'Feb', orders: 180, revenue: 195000 },
  { month: 'Mar', orders: 240, revenue: 260000 },
  { month: 'Apr', orders: 310, revenue: 340000 },
  { month: 'May', orders: 390, revenue: 410000 },
  { month: 'Jun', orders: 480, revenue: 520000 },
];

export const OrdersPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [orders, setOrders] = useState<Order[]>(() => orderService.getOrders());

  const handleStatusChange = (id: string, status: Order['status']) => {
    const updated = orderService.updateOrderStatus(id, status);
    setOrders(orderService.getOrders());
    showToast('Order Status Updated', `Order ${updated.orderNumber} set to ${status}`);
  };

  const columns: Column<Order>[] = [
    {
      key: 'orderNumber',
      header: 'Order #',
      sortable: true,
      render: (o) => (
        <span onClick={() => navigate(`/sales/orders/${o.id}`)} className="font-bold text-slate-900 dark:text-white hover:text-brand-600 cursor-pointer">
          {o.orderNumber}
        </span>
      ),
    },
    { key: 'customerName', header: 'Customer', sortable: true },
    { key: 'date', header: 'Order Date', sortable: true },
    {
      key: 'totalAmount',
      header: 'Total Value',
      sortable: true,
      render: (o) => <span className="font-extrabold text-slate-900 dark:text-white">${o.totalAmount.toFixed(2)}</span>,
    },
    {
      key: 'paymentStatus',
      header: 'Payment',
      sortable: true,
      render: (o) => <Badge variant={o.paymentStatus === 'Paid' ? 'success' : 'danger'}>{o.paymentStatus}</Badge>,
    },
    {
      key: 'status',
      header: 'Order Status',
      sortable: true,
      render: (o) => (
        <Badge variant={o.status === 'Delivered' ? 'success' : o.status === 'Processing' ? 'info' : o.status === 'Pending' ? 'warning' : 'danger'}>
          {o.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (o) => (
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(`/sales/orders/${o.id}`)} className="p-1.5 rounded-lg text-slate-500 hover:text-brand-600">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Sales Orders Directory" subtitle="Manage commercial sales orders, order fulfillment status, and payment clearing." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Sales Orders" value={orders.length.toString()} change={12.4} icon={ShoppingBag} />
        <StatCard title="Total Order Value" value={`$${orders.reduce((acc, o) => acc + o.totalAmount, 0).toLocaleString()}`} change={18.1} icon={DollarSign} />
        <StatCard title="Delivered Orders" value={orders.filter((o) => o.status === 'Delivered').length.toString()} change={10.0} icon={Truck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Monthly Order Fulfillment Volume</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ORDER_VOLUME_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="orders" fill="#0c93e7" name="Orders Count" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={orders} keyExtractor={(o) => o.id} searchPlaceholder="Search orders..." />
    </div>
  );
};
